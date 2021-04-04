import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';


export default createStore(reducer, applyMiddleware(thunk));