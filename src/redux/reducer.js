// import {USER, TITLE, TODO} from './actions';

// const initialState = {
//   user: [],
//   title: [],
//   todo: [],
// };

// function userReducers(state = initialState.user, action) {
//   switch (action.type) {
//     case USER:
//       return action.payload;
//     default:
//       return state;
//   }
// }

// function titleReducers(state = initialState.title, action) {
//   switch (action.type) {
//     case TITLE:
//       return action.payload;
//     default:
//       return state;
//   }
// }

// function todoReducers(state = initialState.todo, action) {
//   switch (action.type) {
//     case TODO:
//       return action.payload;
//     default:
//       return state;
//   }
// }

// export default {userReducers, titleReducers, todoReducers};

import * as types from './actionTypes';
const initialState = {
  titles: [],
  loading: false,
  error: null,
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_START:
    case types.CREATE_TITLE_START:
    case types.LOAD_TODO_START:
    case types.CREATE_TODO_START:
    case types.DELETE_TITLE_START:
    case types.UPDATE_TITLE_START:
    case types.UPDATE_TODO_START:
    case types.DELETE_TODO_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        titles: action.payload,
      };

    case types.LOAD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case types.CREATE_TITLE_SUCCESS:
    case types.CREATE_TODO_SUCCESS:
    case types.UPDATE_TITLE_SUCCESS:
    case types.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    // return {
    //   ...state,
    //   loading: false,
    // };
    case types.DELETE_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        titles: state.titles.filter(item => item.id !== action.payload),
      };
    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter(item => item.id !== action.payload),
      };
    case types.LOAD_ERROR:
    case types.CREATE_TITLE_ERROR:
    case types.LOAD_TODO_ERROR:
    case types.CREATE_TODO_ERROR:
    case types.DELETE_TITLE_ERROR:
    case types.UPDATE_TITLE_ERROR:
    case types.UPDATE_TODO_ERROR:
    case types.DELETE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
