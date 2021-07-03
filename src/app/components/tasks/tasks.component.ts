import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  // dependencies injection
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  // delete tasks: deleteTask function is in task.server.ts file
  // subscrible will not return anything
  // it just loops through the tasks array and not show the deleted task
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id ));
  }

  toggleTask(task: Task){
    // console.log(task)
    // set the opposite value but did not interact with the server
    task.reminder = !task.reminder
    // use the updateTaskReminder function in the taskService class
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    // console.log(task)
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task)
    })
  }

}
