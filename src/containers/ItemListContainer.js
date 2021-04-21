import React from 'react';
import CounterContainer from './CounterContainer/CounterContainer';

export default class ItemListContainer extends React.Component {
    constructor(props){
        super(props)

/*          this.state = {
            greeting: 'Hola'
        } */
    }
    render(){
        return(
            <div>
{/*                 <p>
                    {this.props.greeting}
                </p> */}
                <CounterContainer />
            </div>

        )
    }
}