//we are importing the redux component usign the node syntax
const redux = require('redux');

//the initial state that we will change using redux
const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching action

//Subscription