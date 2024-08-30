import { Component } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  ActivatedRoute,
  Router,
} from '@angular/router';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { ListComponent } from './components/list/list.component';
import { Todo } from './types/todo';
import { TodoService } from './services/todo.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    LucideAngularModule,
    ButtonModule,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentTheme = 'dark';
  currentRoute = '';

  getRoute = () => {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url.split('/')[1].toLocaleLowerCase();
    });
    console.log(this.currentRoute);
  };

  title = 'Todo';
  list: Todo[] = [];
  readonly icons = { Sun, Moon };

  constructor(
    private todoService: TodoService,
    private themeService: ThemeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
    this.getRoute()
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.currentTheme);
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
        this.todoService.setTodos(this.list);
        inputElement.value = '';
      }
    }
  };

  delAll = () => {
    this.list = [];
    this.todoService.setTodos(this.list);
  };
}
