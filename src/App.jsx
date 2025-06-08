
import Player from "./components/Player.jsx"
import GameBoard  from "./components/GameBoard.jsx"

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initaName= "player 1" symbol = "X"></Player>
          <Player initaName= "player 2" symbol = "O"></Player>
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
