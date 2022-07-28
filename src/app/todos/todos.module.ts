import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { TodosQuery } from './state/todos.query';
import { TodosService } from './state/todos.service';
import { TodosStore } from './state/todos.store';
import { TuiButtonModule, TuiGroupModule } from '@taiga-ui/core';
import { TuiCheckboxBlockModule, TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';

@NgModule({
  declarations: [TodosPageComponent, TodoItemComponent, AddTodoFormComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiCheckboxBlockModule,
    TuiInputModule,
    TuiGroupModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [TodosStore, TodosQuery, TodosService],
})
export class TodosModule {}
