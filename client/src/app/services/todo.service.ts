import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  editTodo(todo: Todo){
    const token = localStorage.getItem('token')
    const data = {...todo, token}
    return this.http.put<any>(this._addTodoUrl, data)
  }

  getTodos(){
    const token: any = localStorage.getItem('token')
    let headers: HttpHeaders = new HttpHeaders().append("Authentication", token)
    return this.http.get<any>(this._addTodoUrl, {headers})
  }
}
