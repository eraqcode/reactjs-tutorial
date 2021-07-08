import { createStore } from 'redux';
import { TODO_REDUCER } from '../reducer/toDoReducer';

export const store = createStore( TODO_REDUCER );