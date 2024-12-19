import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScheduleDialogComponent } from './register-schedule-dialog.component';

describe('RegisterScheduleDialogComponent', () => {
  let component: RegisterScheduleDialogComponent;
  let fixture: ComponentFixture<RegisterScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterScheduleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
