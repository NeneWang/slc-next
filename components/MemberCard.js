import ReactCardFlip from 'react-card-flip';
import React from 'react'

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
            
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip  isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <h1>
                    This is the front of the card.
                    <button onClick={this.handleClick}>Click to flip</button>
                </h1>

                <h1>
                    This is the back of the card.
                    <button onClick={this.handleClick}>Click to flip</button>
                </h1>
            </ReactCardFlip>
        )
    }
}