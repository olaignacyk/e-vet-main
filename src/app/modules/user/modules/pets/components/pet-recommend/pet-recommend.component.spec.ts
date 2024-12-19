import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetRecommendComponent } from './pet-recommend.component';

describe('PetRecommendComponent', () => {
  let component: PetRecommendComponent;
  let fixture: ComponentFixture<PetRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetRecommendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
