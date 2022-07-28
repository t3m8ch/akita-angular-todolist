import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddTodoEvent } from './add-todo-form.events';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
})
export class AddTodoFormComponent implements OnInit {
  @Output() addTodo = new EventEmitter<AddTodoEvent>();

  addTodoFormGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit() {}

  onAddButtonClick() {
    this.addTodo.emit({ text: this.addTodoFormGroup.controls['text'].value });
    this.addTodoFormGroup.reset();
  }
}
