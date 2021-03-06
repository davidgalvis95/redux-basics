import * as actionTypes from '../actions'

const initialState = {
    counter: 0
}

const reducerCounter = (state = initialState, action) => {

    switch (action.type){
        case actionTypes.INCREMENT:
            const newSatate = Object.assign({},state);
            newSatate.counter = state.counter + 1;
            return newSatate;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
}

export default reducerCounter;