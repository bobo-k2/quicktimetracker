import { ADD_TASKS, START_TASK } from '../actionTypes';

const initialState = {
  tasks: [],
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASKS: {
      const newState = {
        ...state,
        tasks: action.payload,
      };

      return newState;
    }
    case START_TASK: {
      const newTasksList = state.tasks.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          ...action.payload,
        };
      });

      const newState = {
        ...state,
        tasks: newTasksList,
      };

      return newState;
    }
    default:
      return state;
  }
}
