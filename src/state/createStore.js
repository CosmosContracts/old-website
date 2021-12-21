import reducer from '../reducers';
import { applyMiddleware, createStore as reduxCreateStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

const createStore = () => reduxCreateStore(
    reducer,
    composeWithDevTools({
        trace: true,
    })(applyMiddleware(
        thunk)),
);

export default createStore;
