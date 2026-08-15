import './App.css'
import shuffle from "./Shuffle.js";

function App() {
  const cardsUnshuffled = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
  const cards = shuffle(cardsUnshuffled)

  return (
    <>
      <div className="game-area">
        {cards.map((card, index) => {
          return (
            <div key={index} id={card} className="memory-card" >
              {card}
            </div>
          )
        })}
      </div>
      <hr/>
    </>
  )
}

export default App
