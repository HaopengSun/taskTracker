import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(todo: Todo){
    this.editTodo.emit(todo);
  }

}
