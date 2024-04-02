import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
})
export class ChildComponentComponent {
  newOnomatopia: string = '';

  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia() {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
