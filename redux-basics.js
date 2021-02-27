//we are importing the redux component usign the node syntax
const redux = require('redux');

//the initial state that we will change using redux
const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    //in each action we need to change the state immutably, thats why we use the spread operator to change it that way
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
//this is executed right away the state changed, and is happening before the log, not because is before, but because is executed right away
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

//Dispatching action
//here are the dispatchers that are the ones that will generate actions over the state, to change it
//we can pass over here, values, even payloads to do so. But the fixed value must be the type
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());