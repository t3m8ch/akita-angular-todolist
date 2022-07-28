import { Injectable } from '@angular/core';
import { createTodo } from './todo.model';
import { TodosStore } from './todos.store';

@Injectable()
export class TodosService {
  constructor(private todosStore: TodosStore) {}

  add(text: string) {
    const todo = createTodo(text);
    this.todosStore.add(todo);
  }

  updateIsCompleted(id: string, isCompleted: boolean) {
    this.todosStore.update(id, { isCompleted });
  }

  delete(id: string) {
    this.todosStore.remove(id);
  }
}
