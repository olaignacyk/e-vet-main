import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-comments',
  templateUrl: './visit-comments.component.html',
  styleUrls: ['./visit-comments.component.scss'],
})
export class VisitCommentsComponent implements OnInit {
  comments: Comment[] = mockedData;

  constructor() {}

  ngOnInit(): void {}
  getComments(id: number): Comment[] | undefined {
    return this.comments;
  }
  isDoctor(id: number): boolean {
    if (id == 2) return true;
    return false;
  }
}
let mockedData: Comment[] = [
  {
    id: 1,
    comment:
      'EEESTTEEEEEEEEEEEESTTEEEEEEEEEEEE EEESTTEEEEEEEEEEEESTTEEEEEEEEEEEE',
    date: new Date(),
  },
  { id: 2, comment: 'lekarz', date: new Date() },
  { id: 1, comment: 'test', date: new Date() },
  { id: 1, comment: 'test', date: new Date() },
  { id: 2, comment: 'lekarz', date: new Date() },
  { id: 2, comment: 'doktor', date: new Date() },
  {
    id: 1,
    comment:
      'EEESTTEEEEEEEEEEEESTTEEEEEEEEEEEE EEESTTEEEEEEEEEEEESTTEEEEEEEEEEEE',
    date: new Date(),
  },
  { id: 2, comment: 'lekarz', date: new Date() },
  { id: 1, comment: 'test', date: new Date() },
  { id: 1, comment: 'test', date: new Date() },
  { id: 2, comment: 'lekarz', date: new Date() },
  { id: 2, comment: 'doktor', date: new Date() },
];

interface Comment {
  id: number;
  comment: string;
  date: Date;
}
