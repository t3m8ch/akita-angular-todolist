export interface TodoIsCompletedChangeEvent {
  id: string;
  isCompleted: boolean;
}

export interface DeleteTodoEvent {
  id: string;
}
