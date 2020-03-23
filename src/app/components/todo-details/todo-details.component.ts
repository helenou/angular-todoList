import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  currentTodo = null;
  message = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }

  getTodo(id) {
    this.todoService.get(id)
      .subscribe(
        data => {
          this.currentTodo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchToDo(title) {
    this.todoService.get(title)
      .subscribe(
        data => {
          this.currentTodo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateDone(status) {
    const data = {
      title: this.currentTodo.title,
      description: this.currentTodo.description,
      done: status
    };

    this.todoService.update(this.currentTodo.id, data)
      .subscribe(
        response => {
          this.currentTodo.done = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTodo() {
    this.todoService.update(this.currentTodo.id, this.currentTodo)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The todo was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTodo() {
    this.todoService.delete(this.currentTodo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/todo/delete']);
        },
        error => {
          console.log(error);
        });
  }
}
