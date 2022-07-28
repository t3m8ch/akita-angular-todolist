import { Routes } from '@angular/router';
import { TodosPageComponent } from '../todos/todos-page/todos-page.component';

export const routes: Routes = [
  { path: 'todos', component: TodosPageComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
];
