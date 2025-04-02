import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UndoableCounterComponent } from './undoable-counter/undoable-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UndoableCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coding';
}
