import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    composeWithDevTools({
        trace: true,
    })(applyMiddleware(
        thunk)),
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
