import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LucideAngularModule, Sun } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { ListComponent } from './components/list/list.component';
import { Todo } from './types/todo';
import { TodoService } from './services/todo.service';
import { AllComponent } from './pages/all/all.component';
import { ActiveComponent } from './pages/active/active.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LucideAngularModule, ButtonModule, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  currentTheme = 'light';

  title = 'Todo';
  list: Todo[] = [];
  // sideList: Todo[] = [];
  readonly icons = { Sun };

  constructor(private todoService: TodoService, private themeService: ThemeService){}

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    console.log(newTheme);
    this.themeService.setTheme(newTheme);
  }

  onEnter = (event: KeyboardEvent) => {
    if (event.key.toLocaleLowerCase() === 'enter') {
      const inputElement = event.target as HTMLInputElement;
      const newValue = inputElement.value.trim();
      if (newValue) {
        this.list.push({
          num: this.list.length,
          name: newValue,
          completed: false,
        });
        this.todoService.setTodos(this.list)
        inputElement.value = ''
      }
    }
  }

  delAll = () =>{
    this.list = [];
    this.todoService.setTodos(this.list)
  }
}
