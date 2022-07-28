import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../state/todo.model';
import { TodosQuery } from '../state/todos.query';
import { TodosService } from '../state/todos.service';
import { DeleteTodoEvent, TodoIsCompletedChangeEvent } from '../todo-item/todo-item.events';
import { AddTodoEvent } from '../add-todo-form/add-todo-form.events';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
})
export class TodosPageComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todosQuery: TodosQuery, private todosService: TodosService) {}

  ngOnInit() {
    this.todos$ = this.todosQuery.selectAll();
  }

  onDeleteTodo({ id }: DeleteTodoEvent) {
    this.todosService.delete(id);
  }

  onTodoIsCompletedChange({ id, isCompleted }: TodoIsCompletedChangeEvent) {
    this.todosService.updateIsCompleted(id, isCompleted);
  }

  onAddTodo({ text }: AddTodoEvent) {
    this.todosService.add(text);
  }

  trackTodo(index: number, todo: Todo) {
    return todo.id;
  }
}
