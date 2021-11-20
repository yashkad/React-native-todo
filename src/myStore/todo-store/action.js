import {todoActionType} from './actionType';

const InitialUpdateState = data => ({
  type: todoActionType.INITIAL_UPDATE_STATE,
  payload: {list: data},
});

const AddTodo = todoText => ({
  type: todoActionType.ADD_TODO,
  payload: {
    todoText: todoText,
  },
});

const ToggleTodo = id => ({
  type: todoActionType.TOGGLE_TODO,
  payload: {
    id,
  },
});

const DeleteTodo = id => ({
  type: todoActionType.DELETE_TODO,
  payload: {
    id,
  },
});

export const todoActions = {
  AddTodo,
  ToggleTodo,
  DeleteTodo,
  InitialUpdateState,
};
