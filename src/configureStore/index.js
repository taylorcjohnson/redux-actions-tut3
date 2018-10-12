// import { createStore, applyMiddleware, compose } from 'redux';
// import reducers from './reducers';

// const middlewares = [
// ];
// export default () => createStore(
//   reducers,
//   compose(
//     applyMiddleware(...middlewares),
//     window.devToolsExtension ?
//       window.devToolsExtension() : f => f,
//   ),
// );

import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [
  ReduxThunk,
];
export default () => createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ?
      window.devToolsExtension() : f => f,
  ),
);