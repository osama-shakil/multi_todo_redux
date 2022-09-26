import { applyMiddleware, compose,legacy_createStore as createStore } from "redux";
import rootreducer from './Reducer/index'
import thunk from 'redux-thunk';

//const store=createstore(rootreducer+window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(rootreducer,composeEnhancer(applyMiddleware(thunk)));


export default store


