import React, { Component } from 'react';
import Item from './oneLetter';

class Letters extends Component {
  render() {
    // let wordLetters=[];
    // for(let i=0;i<this.props.word.length;i++){
    //     wordLetters[i]='__'   
    // }
    return (
      <div className='letters'>
        {this.props.word.map(Nonletter=> <Item letter={Nonletter} />)}
      </div>
    )

  }
}

export default Letters