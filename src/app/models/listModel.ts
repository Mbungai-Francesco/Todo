import { Todo } from "../types/todo";

export class ListModel {
  constructor(){
    this.list = []
    this.addTodo = (todo: string) => {
      this.list.push({
        name: todo,
        completed: false
      });
    }
  }
  list: Todo[]
  addTodo = (todo: string) =>{}
}