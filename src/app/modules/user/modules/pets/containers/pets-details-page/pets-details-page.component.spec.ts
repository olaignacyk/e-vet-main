import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsDetailsPageComponent } from './pets-details-page.component';

describe('PetsDetailComponent', () => {
  let component: PetsDetailsPageComponent;
  let fixture: ComponentFixture<PetsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetsDetailsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
