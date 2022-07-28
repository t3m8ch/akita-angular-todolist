import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../state/todo.model';
import { FormControl } from '@angular/forms';
import { DeleteTodoEvent, TodoIsCompletedChangeEvent } from './todo-item.events';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() isCompletedChange = new EventEmitter<TodoIsCompletedChangeEvent>();
  @Output() delete = new EventEmitter<DeleteTodoEvent>();

  isCompletedControl: FormControl = new FormControl(null);

  constructor() {}

  ngOnInit() {
    this.isCompletedControl.setValue(this.todo.isCompleted);
    this.isCompletedControl.valueChanges.subscribe((isCompleted: boolean) => {
      this.isCompletedChange.emit({ id: this.todo.id, isCompleted });
    });
  }

  onDeleteButtonClick() {
    this.delete.emit({ id: this.todo.id });
  }
}
