import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'


const HIDDEN_SYMBOL = '❓'

function handleCardClick(feedback) {
    console.log(feedback, 'clicked');
  }

class Card extends React.Component {

    constructor(props) {
        super(props);
        handleCardClick = handleCardClick.bind(this);
      }

    static propTypes = {
        card: PropTypes.string.isRequired,
        feedback: PropTypes.oneOf([
            'hidden',
            'justMatched',
            'justMismatched',
            'visible',
        ]).isRequired,
        index: PropTypes.number.isRequired
    }
    render(){
        return(
            <div className={`card ${this.props.feedback}`} onClick={() => handleCardClick(this.props.index)}>
                <span className="symbol">
                    {this.props.feedback === 'hidden' ? HIDDEN_SYMBOL : this.props.card}
                </span>
            </div>
        )
    }
}

export default Card;