import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";


export const saveresult = (result) => {
    //we can modify the date here in the action creators or in the reducer, it depends
    //also the state should not be prepared too much here in this part of the code
    // const updatedResult = result * 2;
    //If we are dealing with async actions, then here is the best place to do it, otherwise
    return {
        type: STORE_RESULT,
        // result: updatedResult
        result: result
    };
}


export const storeResult = (result) => {
    //this is the async code that we can execute when working with redux-thunk, this is emulating a call to some async code
    return dispatch => {
        setTimeout( () => {
            dispatch(saveresult(result));
        }, 2000)
    }
}

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElId
    };
}