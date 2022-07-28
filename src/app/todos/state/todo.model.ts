import { guid } from '@datorama/akita';

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export function createTodo(text: string): Todo {
  return { id: guid(), text, isCompleted: false };
}
