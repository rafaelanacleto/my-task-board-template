import { Task } from '../features/tasks/model/task.model';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Test Task',
    description: 'This is a test task',
    completed: false,
    categoryId: '1',
  },
  {
    id: '2',
    title: 'Another Test Task',
    description: 'This is another test task',
    completed: true,
    categoryId: '2',
  },
  {
    id: '3',
    title: 'Third Test Task',
    description: 'This is the third test task',
    completed: false,
    categoryId: '1',
  },
];

export const mockTask: Task = {
  id: '1',
  title: 'Test Task',
  description: 'This is a test task',
  completed: false,
  categoryId: '1',
};
export const mockTaskToAdd: Partial<Task> = {
  title: 'New Task',
  description: 'This is a new task',
  completed: false,
  categoryId: '1',
};
export const mockTaskToUpdate: Task = {
  id: '1',
  title: 'Updated Task',
  description: 'This is an updated task',
  completed: true,
  categoryId: '1',
};
export const mockTaskToDelete: Task = {
  id: '1',
  title: 'Task to Delete',
  description: 'This task will be deleted',
  completed: false,
  categoryId: '1',
};
