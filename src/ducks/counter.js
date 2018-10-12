// // ACTIONS
// const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
// const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
// // ACTION CREATORS
// export const incrementCounter = () => ({
//   type: COUNTER_INCREMENT,
// });
// export const decrementCounter = () => ({
//   type: COUNTER_DECREMENT,
// });
// // REDUCERS
// export default (state = 0, action) => {
//   switch (action.type) {
//     case COUNTER_INCREMENT:
//       return state + 1;
//     case COUNTER_DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };
// // SELECTORS
// export const getCounter = state => state.counter;

import { createAction, handleActions } from 'redux-actions';

// ACTION CREATORS
export const incrementCounter = createAction('COUNTER_INCREMENT');
export const decrementCounter = createAction('COUNTER_DECREMENT');

// REDUCERS
export default handleActions({
  [incrementCounter](state) {
    return state + 1;
  },
  [decrementCounter](state) {
    return state - 1;
  },
}, 0);

// SELECTORS
export const getCounter = state => state.counter;