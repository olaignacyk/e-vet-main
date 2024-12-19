import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTreatmentsComponent } from './pet-treatments.component';

describe('PetTreatmentsComponent', () => {
  let component: PetTreatmentsComponent;
  let fixture: ComponentFixture<PetTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetTreatmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
