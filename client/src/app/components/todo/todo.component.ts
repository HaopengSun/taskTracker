import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoData = {"content": '', "isFinished": false}

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
      res => console.log(res[0].content, res[0].isFinished),
      err => console.log(err)
    )
  }

}
