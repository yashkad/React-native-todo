import AsyncStorage from '@react-native-async-storage/async-storage';
import {todoActionType} from './actionType';

const initialState = [
  {
    id: 1,
    todoText: 'Todo here',
    isDone: false,
    createdOn: Date.now(),
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionType.INITIAL_UPDATE_STATE:
      return [...action.payload.list];

    case todoActionType.ADD_TODO:
      return [
        ...state,
        {
          ...state,
          id: Date.now(),
          todoText: action.payload.todoText,
          isDone: false,
        },
      ];

    case todoActionType.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    case todoActionType.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id == action.payload.id) {
          return {...todo, isDone: !todo.isDone};
        }
        return todo;
      });

    default:
      return state;
  }
};
