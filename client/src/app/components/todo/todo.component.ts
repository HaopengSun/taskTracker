import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import Todo from './../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoData = {"content": '', "isFinished": false}

  public todos: Todo[] = []

  constructor(private _auth: AuthService, private _router: Router, private _todo: TodoService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  backToHome(){
    this._router.navigate(['/welcome']);
  }

  postNewTodo(){
    console.log(this._auth.userName)
    this._todo.addTodo(this.todoData).subscribe(
      res => console.log(res),
      err => console.log(err)
      )
    }

    getTodos(){
      this._todo.getTodos().subscribe(
        res => {
          this.todos = res.map((r: any) => {
            return {content: r.content, isFinished: r.isFinished}
          })
          console.log(this.todos)
        },
        err => console.log(err)
      )
  }

}
