import React, { Component } from 'react';
import Item from './oneLetter';

class Solution extends Component {

  render() {
      
    let arrLetters = Object.keys(this.props.letterStatus);
    return (
        <div className='solutions'>
            {arrLetters.filter(letter=> this.props.letterStatus[letter]===false).map(letterfromArr => <Item  clickChar={this.props.clickChar} letter={letterfromArr} />)}
        </div>
    )
  }
}

export default Solution