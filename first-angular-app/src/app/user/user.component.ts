import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) id !: string;
  @Input({required:true}) avatar !: string; //!: means definitely will be assigned
  @Input({required:true}) name !: string;
  select = output<string>();
  // @Output() select = new EventEmitter();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
