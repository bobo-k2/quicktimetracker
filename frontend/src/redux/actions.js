import { ADD_TASKS, START_TASK } from './actionTypes';

export const getTasks = (tasks) => ({
  type: ADD_TASKS,
  payload: tasks,
});

export const startTask = (id) => ({
  type: START_TASK,
  payload: { id },
});
