import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCommentsComponent } from './visit-comments.component';

describe('VisitCommentsComponent', () => {
  let component: VisitCommentsComponent;
  let fixture: ComponentFixture<VisitCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
