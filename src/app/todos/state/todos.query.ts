import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodosState, TodosStore } from './todos.store';

@Injectable()
export class TodosQuery extends QueryEntity<TodosState> {
  constructor(protected override store: TodosStore) {
    super(store);
  }
}
