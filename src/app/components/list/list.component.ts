import { Component, Input } from '@angular/core';
import { LucideAngularModule, Check } from 'lucide-angular';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../types/todo';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private todoService: TodoService) {}

  getTodos = () =>{
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  ngOnInit() {
    this.getTodos()
  }

  readonly icons = { Check };
  @Input({ required: true }) num : number = 0;
  @Input({ required: true }) checked?: boolean;
  @Input({ required: true }) list?: string;
  todos: Todo[] = [];
  checkClass = this.checked
    ? 'w-6 aspect-square border rounded-full mr-4 border-myDarkBlue-300 flex justify-center items-center myCheck'
    : 'w-6 aspect-square border rounded-full mr-4 border-myDarkBlue-300 flex justify-center items-center';

  clickHandler = () => {
    console.log(this.num, this.list, this.checked);
    if (this.num && this.list) {
      this.todos[this.num] = {
        num: this.num,
        name: this.list,
        completed: !this.checked,
      };
      this.checked = !this.checked;
      this.getTodos()
    }
  };
}
