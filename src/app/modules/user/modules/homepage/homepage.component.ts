import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subject, withLatestFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { CalendarEvent } from 'angular-calendar';
import { Schedule } from '../../../admin/modules/schedule/resources/interfaces/schedule.interface';
import { MatDialog } from '@angular/material/dialog';
import { RegisterScheduleDialogComponent } from './containers/register-schedule-dialog/register-schedule-dialog.component';
import { PetsDataService } from '../pets/services/pets-data.service';
import { Pet } from '../pets/resources/interfaces/pet.interface';
import { ScheduleDataService } from 'src/app/modules/shared/services/schedule.data-service';
import { ReservationDataService } from 'src/app/modules/shared/services/reservation.data-service';
import { ReservationItem } from 'src/app/modules/shared/resources/interfaces/responses/reservation-item.response';
import { PetsState } from '../pets/services/pets.state';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  readonly today = moment();
  readonly refreshCalendar = new Subject<void>();

  events: CalendarEvent[] = [];
  pets: Pet[] = [];

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private petState: PetsState,
    private petsDataService: PetsDataService,
    private scheduleDataService: ScheduleDataService,
    private resDataService: ReservationDataService
  ) {}

  ngOnInit(): void {
    this.getReservations();
    this.petState.getPets();

    this.petState.pets.subscribe((pets) => {
      this.pets = pets;
    });
  }

  eventClicked(eventField: {
    event: CalendarEvent;
    sourceEvent: MouseEvent | KeyboardEvent;
  }): void {
    if (eventField.event.meta === -99) {
      return;
    }
    const eventIndex = this.events.findIndex(
      (event) => event.start.valueOf() === eventField.event.start.valueOf()
    );
    let isNextFree = false;

    if (this.events.length > eventIndex + 1) {
      isNextFree = moment(this.events[eventIndex].start)
        .add(15, 'minutes')
        .isSame(moment(this.events[eventIndex + 1].start));
    }

    const meta = eventField.event.meta;
    this.dialog
      .open(RegisterScheduleDialogComponent, {
        width: '300px',
        data: {
          start: this.events[eventIndex].start,
          isNextFree,
          doctorName: `${meta.firstName} ${meta.lastName}`,
          doctorId: `${meta.id}`,
          pets: this.pets,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          console.log(res);
          this.resDataService
            .createReservation({
              // date, pet, type
              date: moment(res.date).format('YYYY-MM-DD'),
              startTime: moment(res.date).format('HH:mm:ss'),
              endTime: moment(res.date)
                .add(res.type, 'minutes')
                .format('HH:mm:ss'),
              petId: res.pet,
              price: 0,
              doctorId: res.doctorId,
            })
            .subscribe((res) => {
              this.getReservations();
            });
        }
      });
  }

  navigatePrevious(): void {
    this.today.add(-7, 'days');
  }

  navigateNext(): void {
    this.today.add(7, 'days');
  }

  private getReservationDates(reservation: ReservationItem): {
    start: moment.Moment;
    end: moment.Moment;
  } {
    return {
      start: moment(reservation.date + ' ' + reservation.startTime),
      end: moment(reservation.date + ' ' + reservation.endTime),
    };
  }

  private getReservations(): void {
    this.scheduleDataService
      .getList()
      .pipe(withLatestFrom(this.resDataService.getList()))
      .subscribe(([schedules, reservations]) => {
        const openEvents: CalendarEvent[] = [];

        schedules.forEach((schedule) => {
          const scheduleStart = moment(
            schedule.date + ' ' + schedule.startTime
          );
          const scheduleEnd = moment(schedule.date + ' ' + schedule.endTime);

          let currentEventTime = scheduleStart.clone();

          while (currentEventTime.isBefore(scheduleEnd)) {
            let currentEventEndTime = currentEventTime
              .clone()
              .add(15, 'minutes');

            const relatedStartReservation = reservations.find((reservation) => {
              const dates = this.getReservationDates(reservation);

              return (
                dates.start.isSame(currentEventTime) ||
                dates.end.isSame(currentEventEndTime)
              );
            });

            if (!relatedStartReservation) {
              openEvents.push({
                start: currentEventTime.toDate(),
                end: currentEventEndTime.toDate(),
                title:
                  'Wolne miejsce (' +
                  currentEventTime.format('HH:mm') +
                  ' - ' +
                  currentEventEndTime.format('HH:mm') +
                  ')',
                meta: schedule.doctor,
              });
              currentEventTime.add(15, 'minutes');
            } else {
              const dates = this.getReservationDates(relatedStartReservation);
              openEvents.push({
                start: dates.start.toDate(),
                end: dates.end.toDate(),
                title:
                  'Rezerwacja (' +
                  currentEventTime.format('HH:mm') +
                  ' - ' +
                  currentEventEndTime.format('HH:mm') +
                  ')',
                meta: -99,
                color: { primary: 'gray', secondary: 'lightgray' },
              });
              currentEventTime.add(
                moment.duration(dates.end.diff(dates.start)).asMinutes(),
                'minutes'
              );
            }
          }
        });

        this.events = openEvents;
      });
  }
}
