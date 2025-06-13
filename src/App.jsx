import { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/log.jsx"
import { WINNING_COMBIANATION } from "./components/winning_combination.js"
import GameOver from "./components/game-over.jsx"

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]




function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X"

  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O"
  }

  return currentPlayer
}


function App() {

  const [gameTurn, setGameTurn] = useState([])
  const [hasWinner, setHasWinner] = useState(false)

  const [players, setPlayers] = useState({
    X: "player 1",
    Y: "player 2"
  })


  const activePlayer = deriveActivePlayer(gameTurn)

  function driveWinner(gameBoard, players) {
    let winner = null

    for (const combination of WINNING_COMBIANATION) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].colum]
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].colum]
      const thirtSquareSymbol = gameBoard[combination[2].row][combination[2].colum]

      if (firstSquareSymbol
        && firstSquareSymbol === secondSquareSymbol
        && firstSquareSymbol === thirtSquareSymbol
      ) {
        winner = players[firstSquareSymbol]
      }
    }
    return winner
  }

  function driveGameBoard(gameTurn) {
    let gameBoard = [...initalGameBoard.map(item => [...item])]

    for (const turn of gameTurn) {
      const { square, player } = turn
      const { row, colum } = square
      gameBoard[row][colum] = player
    }
    return gameBoard
  }

  const gameBoard = driveGameBoard(gameTurn)
  const hasDraw = gameTurn.length === 9 && !winner
  const winner = driveWinner(gameBoard, players)

  function handleSelectSquare(rowIndex, coloumIndex) {

    setGameTurn(prevTurn => {

      const currentPlayer = deriveActivePlayer(prevTurn)

      const updateTurn = [{ square: { row: rowIndex, colum: coloumIndex }, player: currentPlayer }
        , ...prevTurn]

      return updateTurn
    })
  }

  function handleRematch() {
    setGameTurn([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initaName="player 1" symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange}></Player>
          <Player initaName="player 2" symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange}></Player >
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSlectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} boards={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
