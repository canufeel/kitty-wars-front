import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'store/configure-store';
import MainPage from './main-page';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default Root;
