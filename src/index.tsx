import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { default as createSagaMiddleware } from 'redux-saga';
import { default as logger } from 'redux-logger';
import { reducer } from './reducer';
import { saga } from './saga';
import { Routes } from './components/Routes';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(
        sagaMiddleware,
        logger,
    ),
);
sagaMiddleware.run(saga);

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <Routes />
        </Provider>,
        document.getElementById('root')
    );
});
