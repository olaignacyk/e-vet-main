import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleMainViewComponent } from './containers/schedule-main-view/schedule-main-view.component';
import { MatCardModule } from '@angular/material/card';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatButtonModule } from '@angular/material/button';
import { ScheduleEventDialogComponent } from './containers/schedule-event-dialog/schedule-event-dialog.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorsDataService } from '../doctors/services/doctors.data-service';
import { ScheduleDataService } from 'src/app/modules/shared/services/schedule.data-service';
import { ScheduleState } from './services/schedule.state';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleMainViewComponent,
    ScheduleEventDialogComponent,
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    MatCardModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatButtonModule,
    NgxMaterialTimepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [DoctorsDataService, ScheduleDataService, ScheduleState],
})
export class ScheduleModule {}
