import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo = {
    title: '',
    done: false
  };
  submitted = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }


  saveTodo() {
    const data= {
      title: this.todo.title
    };

    this.todoService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );

      this.submitted= true;
  }

  newTodo() {
    this.submitted= false;
    this.todo= {
      title: '',
      done: false
    };
  }

}
