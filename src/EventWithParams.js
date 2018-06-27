import React, { Component } from 'react';
import { Emojione } from 'react-emoji-render';

class EventsWithParams extends Component {

    constructor(props){
        super(props);
        this.state = {
          value: ':no_entry_sign:',
        }
      }
    
      handleClick = (newValue) => {
        this.setState({
          value: newValue,
        });
      };

    render = () => (
        <div className="eventBox">
            <h2>Events with params</h2>
            <button onClick={() => this.handleClick(':cat2:')}>
                <Emojione text=":cat:" />
            </button>
            <button onClick={() => this.handleClick(':dog2:')}>
                <Emojione text=":dog:" />
            </button>
            <h4>I like </h4>
            <div className="result">
                <Emojione text={this.state.value} />
            </div>
        </div>
    )

}

export default EventsWithParams;