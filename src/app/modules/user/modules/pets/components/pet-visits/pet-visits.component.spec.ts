import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetVisitsComponent } from './pet-visits.component';

describe('PetVisitsComponent', () => {
  let component: PetVisitsComponent;
  let fixture: ComponentFixture<PetVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
