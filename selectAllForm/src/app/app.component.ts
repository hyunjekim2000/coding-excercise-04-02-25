import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectAllComponent } from './select-all/select-all.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectAllComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'selectAllForm';
}
