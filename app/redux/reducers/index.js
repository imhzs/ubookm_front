import { combineReducers } from 'redux';

const todoApp = combineReducers({
  todos: (state = {}, action) => {
    let t = (new Date()).getTime();
    return Object.assign(state, {t});
  }
});

export default todoApp;
