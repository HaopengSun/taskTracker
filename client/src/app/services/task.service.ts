import { Injectable } from '@angular/core';
// import { TASKS } from '../mock-task'
import { Task } from '../Task';
import { Observable, of } from 'rxjs'
// similar to axios in react to interact with backend server
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // get data from mock data
    // const tasks =of(TASKS);
    // return tasks

    // get data from server
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
