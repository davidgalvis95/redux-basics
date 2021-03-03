import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/*instead of the state we are now consuming the state passed as props by redux*/}
                <CounterOutput value={this.props.ctr} />
                {/*instead of the anonymous function we are now executing the one that is set in the dispatcher actions config, as a prop*/}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
            </div>
        );
    }
}

//This state will be injected by react-redux component into this function automatically, by having that package there and the connect function
//this is the part of the state we want to get from the global redux state
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: dispatch({type: 'INCREMENT'}),
        onDecrementCounter: dispatch({type: 'DECREMENT' }),
        onAddCounter: dispatch({type: 'ADD', value: 5 }),
        onSubtractCounter: dispatch({type: 'SUBTRACT', value: 5 })
    }
}

//connect is a function, not a HOC, so it's a function that returns a function and takes as input a component
//here in the following line we have two functions, one that is executed first getting as input the mapStateToProps and returns a
// function which is executed by getting as input the Component
//precisely we pass 2 things to connect: 1. which part of the state we want to have access to, and 2. which actions we want to dispatch
//if we only want to dispatch actions but not consume the state then we should set 'connect(null, mapDispatchToProps)(Counter);'
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//in summary then, connect gives us access to a portion of tha state that is mapped into a component