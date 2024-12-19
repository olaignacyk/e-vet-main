import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { ScheduleMainViewComponent } from './containers/schedule-main-view/schedule-main-view.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [{ path: '', component: ScheduleMainViewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
