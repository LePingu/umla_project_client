import React from 'react'
import shuffle from 'lodash/shuffle'
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import Card from './Card'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

var cards_shuffle = ({}) => {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

const cards = [{ card:"😀", feedback:"justMatched", index:0 },
{card:"🎉", feedback:"justMatched", index:1},
{card:"💖", feedback:"justMismatched", index:2},
{card:"🎩", feedback:"visible", index:3},
{card:"🐶", feedback:"hidden", index:4},
{card:"🐱", feedback:"justMatched", index:5}];

const won = true;

class CardGame extends React.Component {
    render() {
        return (
          <div className="memory">
            {cards.map(c => <Card card={c.card} feedback={c.feedback} index={c.index} key={c.index} />)}
            {won && <HallOfFame entries={FAKE_HOF} />}
          </div>
        )
      }
}

export default CardGame;
