import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: any;
  currentTodo = null;
  currentIndex = -1;
  title= '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.retrieveTodos();
  }

  retrieveTodos()  {
    this.todoService.getAll()
      .subscribe(
        data => {
          this.todos = data;
          console.log(data);
        },
        error => {
          console.log(error);
      });
  }

  refreshList() {
    this.retrieveTodos();
    this.currentTodo = null;
    this.currentIndex = -1;
  }

  setActiveTodo(todo, index) {
    this.currentTodo = todo;
    this.currentIndex = index;
  }

  removeAllTodos()  {
    this.todoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTodos();
        },
        error => {
          console.log(error);
      });
  }


  searchTitle()  {
    this.todoService.findByTitle(this.title)
      .subscribe(
        data => {
          this.todos = data;
          console.log(data);
        },
        error => {
          console.log(error);
      });
  }
    
}
