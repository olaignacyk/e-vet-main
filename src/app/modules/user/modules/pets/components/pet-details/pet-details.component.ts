import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Pet } from '../../resources/interfaces/pet.interface';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetDetailsComponent implements OnInit {
  @Input() petDetails: any;
  editMode = false;
  constructor() {}
  ngOnInit(): void {}

  editModeOn() {
    this.editMode = true;
  }

  editModeSave() {
    this.editMode = false;
  }
}
