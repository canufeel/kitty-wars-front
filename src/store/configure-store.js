import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from 'sagas';
import rootReducer from 'reducers';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
  logger,
];

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(saga);
  return store;
};
