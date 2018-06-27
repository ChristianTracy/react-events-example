import React, { Component } from 'react';
import { Emojione } from 'react-emoji-render';

class GetEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
          event: {},
        }
      }
    
      handleClick = (e) => {
        e.preventDefault();
        this.setState({
          event: e,
        });
      };

    render = () => (
        <div className="eventBox">
            <h2>Get event</h2>
            <button onClick={this.handleClick}>
                <Emojione text=":ghost:" />
            </button>
            <pre>
                {JSON.stringify(this.state.event)}
            </pre>
        </div>
    )

}

export default GetEvent;