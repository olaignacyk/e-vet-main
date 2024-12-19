import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UpcomingAppointmentsComponent } from './containers/upcoming-appointments/upcoming-appointments.component';
import { WorkScheduleComponent } from './containers/work-schedule/work-schedule.component';
import { FreeSlotsComponent } from './containers/free-slots/free-slots.component';
import { StatsComponent } from './containers/stats/stats.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DashboardService } from './services/dashboard.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  CalendarModule,
  CalendarWeekModule,
  DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent,
    UpcomingAppointmentsComponent,
    WorkScheduleComponent,
    FreeSlotsComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    CalendarWeekModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatIconModule,
  ],
  providers: [DashboardService],
})
export class DashboardModule {}
