import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsCardComponent } from './pet-details-card.component';

describe('PetDetailsCardComponent', () => {
  let component: PetDetailsCardComponent;
  let fixture: ComponentFixture<PetDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
