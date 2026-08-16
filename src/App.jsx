import './App.css'
import shuffle from "./Shuffle.js";
import {useEffect, useRef, useState} from "react";

function App() {

  const cardsUnshuffled = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
  const cards = useRef(shuffle(cardsUnshuffled)).current
  const [openCards, setOpenCards] = useState(new Array(cards.length).fill(false))
  const [cardsOpen, setCardsOpen] = useState(0)

  function handleCardClick(cardIndex) {
    setCardsOpen((previous) => previous + 1)
    console.log(cardsOpen)

    if (cardsOpen >= 2) {

      setOpenCards(new Array(cards.length).fill(false))
      setCardsOpen(0)
    }

    else {

      const newOpenCards = [...openCards]
      newOpenCards[cardIndex] = !newOpenCards[cardIndex]
      setOpenCards(newOpenCards)
      console.log(newOpenCards)
    }
  }

  return (
    <>
      <div className="game-area">
        {cards.map((card, index) => {
          return (
            <div key={index} id={card}
                 className={`memory-card ${openCards[index] === true ? "open" : ""}`}
                 onClick={() => handleCardClick(index)}
            >
              {openCards[index] === true ? card : ""}
            </div>
          )
        })}
      </div>
      <hr/>
    </>
  )
}

export default App
