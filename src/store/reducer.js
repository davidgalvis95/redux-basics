const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    if(action.type === 'INCREMENT'){
        return {
            //This way of calling the state is no longer needed since we only have counter therein, nothing else
            //if we had more state properties, then we could call ...state;
            // ...state;
            counter: state.counter + 1
        }
    }
    return state;
}

export default reducer;