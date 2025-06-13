
// const initalGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
// ]

export default function GameBoard({ onSlectSquare, boards }) {

    // let gameBoard = initalGameBoard

    // for (const turn of turns) {
    //     const { square, player } = turn
    //     const { row, colum } = square
    //     gameBoard[row][colum] = player
    // }

    // const [gameBoard , setGameBoard] = useState(initalGameBoard)

    // function handleSelectSquare(rowIndex, columIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArr => [...innerArr])]
    //         updatedGameBoard[rowIndex][columIndex] = activePlayerSymbol
    //         return updatedGameBoard
    //     })
    //     onSlectSquare()
    // }   


    return (
        <ol id="game-board">
            {boards.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columIndex) =>
                        <li key={columIndex}>
                            <button onClick={() => onSlectSquare(rowIndex, columIndex)}
                                disabled={playerSymbol != null}>
                                {playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
        </ol>
    )
}