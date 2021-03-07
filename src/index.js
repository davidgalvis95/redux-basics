import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from "redux";
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducerCounter from "./store/reducers/reducerCounter";
import reducerResults from "./store/reducers/reducerResults";

//here we are matching the reducers into a single one by using the import of combineReducers
const rootReducer = combineReducers({
    ctr: reducerCounter,
    res: reducerResults
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
