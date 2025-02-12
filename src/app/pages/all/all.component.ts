import { Component } from '@angular/core';
import { Todo } from '../../types/todo';
import { TodoService } from '../../services/todo.service';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {

  getList = () =>{
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos
    });
    console.log(this.todos); 
  }

  constructor(private todoService: TodoService){}
  
  ngOnInit(){
    this.getList()
  }
  todos : Todo[] = []
}
