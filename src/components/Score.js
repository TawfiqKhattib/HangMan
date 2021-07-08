import React, { Component } from 'react';
import Solution from './Solution';
import Letters from './Letters';

class Score extends Component {
  render() {
    return (
      <div className='score'>
        Score: {this.props.score}
      </div>
    )

  }
}

export default Score