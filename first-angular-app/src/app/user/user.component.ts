import { Component, Input, Output, EventEmitter } from '@angular/core';
import {type User} from './user.model';
// type User = {
//     id: string;
//     avatar :string;
//     name :string;
//   };



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  // select = output<string>();//new approach that is cleaner
  @Output() select = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
