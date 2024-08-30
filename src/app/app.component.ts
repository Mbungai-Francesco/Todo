import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Sun } from 'lucide-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo';
  readonly icons = { Sun }
}
