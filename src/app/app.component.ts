import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  onomatoList: string[] = [];

  Onreceive(task: string) {
    this.onomatoList.push(task);
  }
}
