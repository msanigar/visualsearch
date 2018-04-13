/* eslint-disable no-use-before-define */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from './localStorage';
import { POST_IMG, RESET_APP, CHANGE_LOADING } from "./actions";

const mainReducer = (state = initialState, action) => {
  if (action.type === POST_IMG) {
    return postImg(state, action);
  }

  if (action.type === RESET_APP) {
      return reset(state, action);
  }

  if (action.type === CHANGE_LOADING) {
    return changeLoading(state, action);
  }

  return state;
};

function changeLoading(state, action) {
  var newState = Object.assign({}, state);
  newState.loading = action.data;
  return newState;
}

function reset(state, action) {
    var newState = Object.assign({}, state);
    newState.returned = false;
    newState.loading = false;
    newState.skus = []
    return newState;
}

function postImg(state, action) {
  var newState = Object.assign({}, state);
  newState.returned = true;
  newState.loading = false;
  newState.skus = action.data;
  return newState;
}

const initialState = {
  loading: true,
  returned: false,
  skus: []
};

let store;
const persistedState = loadState(initialState);

store = createStore(
  mainReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
