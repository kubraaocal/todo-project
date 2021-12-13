// export const USER = 'USER';
// export const TITLE = 'TITLE';
// export const TODO = 'TODO';

// export const User = user => dispatch => {
//   dispatch({
//     type: USER,
//     payload: user,
//   });
// };

// export const Title = title => dispatch => {
//   dispatch({
//     type: TITLE,
//     payload: title,
//   });
// };

// export const Todo = todo => dispatch => {
//   dispatch({
//     type: TODO,
//     payload: todo,
//   });
// };

import * as types from './actionTypes';

export const loadStart = () => ({
  type: types.LOAD_START,
});
export const loadSuccess = (titles) => ({
  type: types.LOAD_SUCCESS,
  payload:titles
});
export const loadError = (error) => ({
  type: types.LOAD_ERROR,
  payload:error
});
export const createTitleStart = (titles) => ({
  type: types.CREATE_TITLE_START,
  payload:titles
});
export const createTitleSuccess = () => ({
  type: types.CREATE_TITLE_SUCCESS,
});
export const createTitleError = (error) => ({
  type: types.CREATE_TITLE_ERROR,
  payload:error
});
export const loadTodoStart = () => ({
  type: types.LOAD_TODO_START,
});
export const loadTodoSuccess = (todos) => ({
  type: types.LOAD_TODO_SUCCESS,
  payload:todos
});
export const loadTodoError = (error) => ({
  type: types.LOAD_TODO_ERROR,
  payload:error
});

export const createTodoStart = (titles) => ({
  type: types.CREATE_TODO_START,
  payload:titles
});
export const createTodoSuccess = () => ({
  type: types.CREATE_TODO_SUCCESS,
});
export const createTodoError = (error) => ({
  type: types.CREATE_TODO_ERROR,
  payload:error
});

export const deleteTitleStart = (titleId) => ({
  type: types.DELETE_TITLE_START,
  payload:titleId
});
export const deleteTitleSuccess = (titleId) => ({
  type: types.DELETE_TITLE_SUCCESS,
  payload:titleId
});
export const deleteTitleError = (error) => ({
  type: types.DELETE_TITLE_ERROR,
  payload:error
});

export const updateTitleStart = (titleInfo) => ({
  type: types.UPDATE_TITLE_START,
  payload:titleInfo
});
export const updateTitleSuccess = () => ({
  type: types.UPDATE_TITLE_SUCCESS,
});
export const updateTitleError = (error) => ({
  type: types.UPDATE_TITLE_ERROR,
  payload:error
});

export const updateTodoStart = (todoInfo) => ({
  type: types.UPDATE_TODO_START,
  payload:todoInfo
});
export const updateTodoSuccess = () => ({
  type: types.UPDATE_TODO_SUCCESS,
});
export const updateTodoError = (error) => ({
  type: types.UPDATE_TODO_ERROR,
  payload:error
});

export const deleteTodoStart = (todoId) => ({
  type: types.DELETE_TODO_START,
  payload:todoId
});
export const deleteTodoSuccess = (todoId) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload:todoId
});
export const deleteTodoError = (error) => ({
  type: types.DELETE_TODO_ERROR,
  payload:error
});


