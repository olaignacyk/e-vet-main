import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  editMode: boolean;
  data = this.fb.group({
    firstName: 'Endrju',
    lastName: 'Golota',
    phone: '997',
    password: 'Tajnehaslo',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
