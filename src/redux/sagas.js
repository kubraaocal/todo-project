import * as types from './actionTypes';
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from 'redux-saga/effects';

import {
  loadSuccess,
  loadError,
  createTitleSuccess,
  createTitleError,
  loadTodoSuccess,
  loadTodoError,
  createTodoSuccess,
  createTodoError,
  deleteTitleSuccess,
  deleteTitleError,
  updateTitleSuccess,
  updateTitleError,
  updateTodoSuccess,
  updateTodoError,
  deleteTodoSuccess,
  deleteTodoError,
} from './actions';
import {
  loadTitleApi,
  createTitleApi,
  loadTodoApi,
  createTodoApi,
  deleteTitleApi,
  updateTitleApi,
  updateTodoApi,
  deleteTodoApi,
} from './api';

function* onLoadTitleStartAsync() {
  try {
    const responce = yield call(loadTitleApi);
    if (responce.status === 200) {
      yield delay(500);
      yield put(loadSuccess(responce.data));
    }
  } catch (error) {
    yield put(loadError(error.responce.data));
  }
}

function* onLoadTodoStartAsync() {
  try {
    const responce = yield call(loadTodoApi);
    if (responce.status === 200) {
      yield delay(500);
      yield put(loadTodoSuccess(responce.data));
    }
  } catch (error) {
    yield put(loadTodoError(error.responce.data));
  }
}

function* onCreateTitleStartAsync({payload}) {
  try {
    const responce = yield call(createTitleApi, payload);
    if (responce.status === 200) {
      // yield delay(500);
      yield put(createTitleSuccess(responce.data));
    }
  } catch (error) {
    yield put(createTitleError(error.responce.data));
  }
}

function* onCreateTodoStartAsync({payload}) {
  try {
    const responce = yield call(createTodoApi, payload);
    if (responce.status === 200) {
      // yield delay(500);
      yield put(createTodoSuccess(responce.data));
    }
  } catch (error) {
    yield put(createTodoError(error.responce.data));
  }
}

function* onDeleteTitleStartAsync(titleId) {
  try {
    const responce = yield call(deleteTitleApi, titleId);
    if (responce.status === 200) {
      yield delay(500);
      yield put(deleteTitleSuccess(titleId));
    }
  } catch (error) {
    yield put(deleteTitleError(error.responce.data));
  }
}

function* onDeleteTodoStartAsync(todoId) {
  try {
    const responce = yield call(deleteTodoApi, todoId);
    if (responce.status === 200) {
      yield delay(500);
      yield put(deleteTodoSuccess(todoId));
    }
  } catch (error) {
    yield put(deleteTodoError(error.responce.data));
  }
}

function* onUpdateTitleStartAsync({payload: {id, title}}) {
  try {
    const responce = yield call(updateTitleApi, id, title);
    yield put(updateTitleSuccess(responce.data));
  } catch (error) {
    yield put(updateTitleError(error.responce.data));
  }
}

function* onUpdateTodoStartAsync({payload: {id, todo}}) {
  try {
    const responce = yield call(updateTodoApi, id, todo);
    yield put(updateTodoSuccess(responce.data));
  } catch (error) {
    yield put(updateTodoError(error.responce.data));
  }
}

function* onDeleteTitle() {
  while (true) {
    const {payload: titleId} = yield take(types.DELETE_TITLE_START);
    yield call(onDeleteTitleStartAsync, titleId);
  }
}

function* onDeleteTodo() {
  while (true) {
    const {payload: todoId} = yield take(types.DELETE_TODO_START);
    yield call(onDeleteTodoStartAsync, todoId);
  }
}

function* onLoadTitle() {
  yield takeLatest(types.LOAD_START, onLoadTitleStartAsync);
}

function* onCreateTitle() {
  yield takeEvery(types.CREATE_TITLE_START, onCreateTitleStartAsync);
}

function* onLoadTodo() {
  yield takeEvery(types.LOAD_TODO_START, onLoadTodoStartAsync);
}

function* onCreateTodo() {
  yield takeEvery(types.CREATE_TODO_START, onCreateTodoStartAsync);
}

function* onUpdateTitle() {
  yield takeEvery(types.UPDATE_TITLE_START, onUpdateTitleStartAsync);
}

function* onUpdateTodo() {
  yield takeEvery(types.UPDATE_TODO_START, onUpdateTodoStartAsync);
}
const sagas = [
  fork(onLoadTitle),
  fork(onCreateTitle),
  fork(onLoadTodo),
  fork(onCreateTodo),
  fork(onDeleteTitle),
  fork(onUpdateTitle),
  fork(onUpdateTodo),
  fork(onDeleteTodo),
];

export default function* rootSaga() {
  yield all([...sagas]);
}
