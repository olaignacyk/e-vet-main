import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailsCardComponent } from './visit-details-card.component';

describe('VisitDetailsCardComponent', () => {
  let component: VisitDetailsCardComponent;
  let fixture: ComponentFixture<VisitDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
