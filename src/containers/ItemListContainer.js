import React from 'react';

export default class ItemListContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            greeting: 'Hola'
        }
    }
    render(){
        return(
            <div>
                <p>
                    {this.state.greeting}
                </p>
            </div>

        )
    }
}