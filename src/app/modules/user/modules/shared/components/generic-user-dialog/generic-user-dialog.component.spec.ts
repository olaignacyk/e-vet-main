import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericUserDialogComponent } from './generic-user-dialog.component';

describe('GenericUserDialogComponent', () => {
  let component: GenericUserDialogComponent;
  let fixture: ComponentFixture<GenericUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericUserDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
