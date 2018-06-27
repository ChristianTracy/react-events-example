import React, { Component } from 'react';
import { Emojione } from 'react-emoji-render';

class Toggle extends Component {

    constructor(props){
        super(props);
        this.state = {
          running: false,
        }
      }
    
      toggleValue = () => {
        this.setState(previousState => ({
            running: !previousState.running,
        }));
      };

    render = () => (
        <div className="eventBox">
            <h2>Toggle</h2>
            <button onClick={this.toggleValue}>
                <Emojione text={!this.state.running ? ':running:' : ':walking:'} />
            </button>
            <div className="result">
                <Emojione text={this.state.running ? ':running:' : ':walking:'} />
            </div>
        </div>
    )

}

export default Toggle;