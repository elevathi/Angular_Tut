import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar !: string; //!: means definitely will be assigned
  @Input() name !: string;
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
  
  }

}
