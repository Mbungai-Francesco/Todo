import { Injectable } from '@angular/core';
import { Todo } from '../types/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  todosDb?: string | null;
  constructor() { 
    // this.todosDb = localStorage.getItem('todos');
    // if (this.todosDb) {
    //   this.todos = JSON.parse(this.todosDb);
    // } else {
    //   this.todos = [];
    //   localStorage.setItem('todos', JSON.stringify(this.todos));
    // }
  }

  setTodos(todos: Todo[]) {
    this.todosSubject.next(todos)
    // localStorage.setItem('todos', JSON.stringify(this.todos
  }
}