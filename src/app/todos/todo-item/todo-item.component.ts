import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../state/todo.model';
import { DeleteTodoEvent, TodoIsCompletedChangeEvent } from './todo-item.events';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() isCompletedChange = new EventEmitter<TodoIsCompletedChangeEvent>();
  @Output() delete = new EventEmitter<DeleteTodoEvent>();

  constructor() {}

  onDeleteButtonClick() {
    this.delete.emit({ id: this.todo.id });
  }

  onToggleCompleted($event: MouseEvent) {
    $event.preventDefault();
    this.isCompletedChange.emit({ id: this.todo.id, isCompleted: !this.todo.isCompleted });
  }
}
