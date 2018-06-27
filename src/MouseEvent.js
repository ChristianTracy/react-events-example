import React, { Component } from 'react';
import { Emojione } from 'react-emoji-render';

class MouseEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
          value: ':neutral_face:',
        }
      }
    
      handleMouseEnter = () => {
        this.setState({
          value: ':fearful:',
        });
      };

      handleMouseLeave = () => {
        this.setState({
          value: ':neutral_face:',
        });
      };

    render = () => (
        <div className="eventBox">
            <h2>Mouse event</h2>
            <div className="result">
                <Emojione text={this.state.value} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
            </div>
        </div>
    )

}

export default MouseEvent;