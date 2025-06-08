import { useState } from "react"

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard () {

    const [gameBoard , setGameBoard] = useState(initalGameBoard)

    function handleSelectSquare(rowIndex, columIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArr => [...innerArr])]
            updatedGameBoard[rowIndex][columIndex] = 'X'
            return updatedGameBoard
        })
    }   


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columIndex) =>
                        <li key={columIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex,columIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}