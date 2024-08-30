import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Sun } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule, ButtonModule, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo';
  list : string[] = []
  readonly icons = { Sun };

  onEnter = (event: KeyboardEvent) => {
    if (event.key.toLocaleLowerCase() === 'enter') {
      const inputElement = event.target as HTMLInputElement;
      const newValue = inputElement.value.trim();
      if (newValue) {
        this.list.push(newValue);
        inputElement.value = ''
      }
    }
  };
}
