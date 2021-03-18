import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducerCounter from "./store/reducers/reducerCounter";
import reducerResults from "./store/reducers/reducerResults";

//here we are matching the reducers into a single one by using the import of combineReducers
const rootReducer = combineReducers({
    ctr: reducerCounter,
    res: reducerResults
});

//This Middleware is only used for logging here, but we can use it for other stuff too
//This is a Middleware, it does something in between the action dispatcher and the reducer receiving the action
const logger = store => {
    //This is kind of a closure that brings up the store and with the next function we pass it over to the reducer
    return next => {
        //the action is the action we dispatch
        return action => {
            console.log('[Middleware] Dispatching', action);
            //we need to execute next in order to terminate the process and pass it into the reducer
            //we can have access to that function and even change the type and add arguments, but do it with caution because maybe can cause unexpected behaviours
            //next
            const result = next(action);
            //
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

//compose allow us to combine enhancers
//With this set up and wrapping the applyMiddleware with this constant, we activate the Redux DevTools extension and make it work ok
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//to link the Middleware to the store we use applyMiddleware and pass the function that performs some of the actions there before passing into the reducer
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
