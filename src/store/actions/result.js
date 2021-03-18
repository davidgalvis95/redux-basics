import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";


export const saveresult = (result) => {
    return {
        type: STORE_RESULT,
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