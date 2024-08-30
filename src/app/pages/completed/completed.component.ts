import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../types/todo';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent {

  getList = () =>{
    this.todoService.todos$.subscribe((todos) => {
      this.list = todos.filter((todo) => todo.completed);
    });
    // console.log(this.list); 
  }

  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.getList()
  }

  list: Todo[] = [];

}
