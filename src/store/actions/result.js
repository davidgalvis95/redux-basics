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


//sometimes we can get access to the old or current state before updating by accessing to the getState function
export const storeResult = (result, getState) => {
    //this is the async code that we can execute when working with redux-thunk, this is emulating a call to some async code
    return dispatch => {
        setTimeout( () => {
            //This could be useful to make some changes based on one of the properties of the old state
            //we should not try to overkill this way of accessing the state
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
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