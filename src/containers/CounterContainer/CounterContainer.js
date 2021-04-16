import React from 'react';
import Counter from '../../components/Counter/Counter';
import CounterVisualizer from '../../components/Counter/CounterVisualizer';

export default class CounterContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(){
        this.setState({count: this.state.count + 1})
    }

    onDecrement(){
        this.setState({count: this.state.count - 1})
    }

    render(){
        return(
            <div>
                <CounterVisualizer count={this.state.count}/>
                <Counter increment={this.onIncrement} decrement={this.onDecrement}/>
            </div>
        )
    }
}