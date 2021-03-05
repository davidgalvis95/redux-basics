const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type){
        case 'INCREMENT':
            const newSatate = Object.assign({},state);
            newSatate.counter = state.counter + 1;
            return newSatate;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                //by using concat we ensure to change the state immutably instead of changing the original state
                results: state.results.concat( {id: new Date(), value:state.counter} )
            }
        case 'DELETE_RESULT':
            //This is a way to remove an element immutably from an array
            // const id = 2;
            // const newArray = [...state.results]
            // const updatedArray = newArray.splice(id,1)
            //This is the most common way to remove an element from an array in an immutable way
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;