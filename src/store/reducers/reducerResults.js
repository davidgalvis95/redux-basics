import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    results: []
}

const reducerCounter = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})})
            //manipulate and change data if needed
            // return {
            //     ...state,
                //by using concat we ensure to change the state immutably instead of changing the original state
                //here we are changing the way this stuff is being mapped because since the state is in other reducer now, and one reducer cannot access the
                //state that is stored in other reducer, but one component can access all the states of all the reducers by the mappers of the state into props
                //so, taking advantage of this, we can implement a way of passing that actual state into the reducer as a variable
                //we should update the data here if we are going to run sync code, and taking into account that the reducer is the one in charge of updating the state
            //     results: state.results.concat({id: new Date(), value: action.result * 2})
            // }
        case actionTypes.DELETE_RESULT:
            //This is a way to remove an element immutably from an array
            // const id = 2;
            // const newArray = [...state.results]
            // const updatedArray = newArray.splice(id,1)
            //This is the most common way to remove an element from an array in an immutable way
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return updateObject(state, {results: updatedArray});
    }
    return state;
}

export default reducerCounter;