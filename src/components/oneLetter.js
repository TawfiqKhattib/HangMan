import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className='letter' onClick={this.props.clickChar}>
                {this.props.letter}
            </div>
        )

    }
}

export default Item