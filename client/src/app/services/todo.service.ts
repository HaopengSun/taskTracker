import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Todo from '../Todo'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _addTodoUrl = 'http://localhost:3200/api/todo'

  constructor(private http:HttpClient, private _router: Router) { }

  addTodo(todo: Todo){
    const token = localStorage.getItem('token')
    const data = {...todo, token}
    return this.http.post<any>(this._addTodoUrl, data)
  }
}
