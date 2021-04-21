import React from 'react';
import Counter from '../../components/Counter/Counter';
import CounterVisualizer from '../../components/Counter/CounterVisualizer';

export default class CounterContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            stock: 10
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(){
        this.setState({count: Math.min(10, this.state.count + 1),
                       stock: Math.max(0,this.state.stock - 1)})
    }

    onDecrement(){
        this.setState({count: Math.max(this.state.count - 1,0),
                       stock: Math.min(10, this.state.stock + 1)})
    }

    render(){
        return(
            <div>
                <CounterVisualizer count={this.state.count} stock={this.state.stock}/>
                <Counter increment={this.onIncrement} decrement={this.onDecrement}/>
            </div>
        )
    }
}