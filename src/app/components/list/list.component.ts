import { Component, Input } from '@angular/core';
import { LucideAngularModule, Check, Trash2 } from 'lucide-angular';
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
      for (const todo of todos) {
        if(todo.num == this.num){
          this.list = todo.name
          this.checked = todo.completed
        }
      }
      this.todos = todos
    });
  }

  ngOnInit() {
    console.log(this.num);   
    this.getTodos()
  }

  readonly icons = { Check, Trash2 };
  @Input({ required: true }) num : number = 1;
  checked?: boolean;
  list?: string;
  todos: Todo[] = [];
  checkClass = this.checked
    ? 'w-6 aspect-square border rounded-full mr-4 border-myDarkBlue-300 flex justify-center items-center myCheck'
    : 'w-6 aspect-square border rounded-full mr-4 border-myDarkBlue-300 flex justify-center items-center';

  clickHandler = () => {
    this.getTodos()
    if (this.num>=0 && this.list) {
      console.log(this.num, this.list, this.checked);
      console.log(this.todos[this.num]);
      this.todos.filter((todo) =>{
        if(todo.num == this.num){
          todo.completed = !todo.completed
        }
        return todo
      });
      this.todoService.setTodos(this.todos);
      this.getTodos()
    }
  };

  delTodo = () => {
    const newTodos = this.todos.filter((todo) => todo.num != this.num);
    this.todoService.setTodos(newTodos);
  }
}
