import { Component } from '@angular/core';
import { Todo } from '../../types/todo';
import { TodoService } from '../../services/todo.service';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-active',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent {

  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.todoService.todos$.subscribe((todos) => {
      this.list = todos.filter((todo) => !todo.completed);
    })
  }

  list: Todo[] = [];

}
