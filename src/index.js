import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import logger from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(logger))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)