export default function Log({ turns }) {



    return (
        <ol id="log">
            {turns.map(turn => <li key={`${turn.square.row}${turn.square.colum}`}>
                {turn.player} Selected {turn.square.row}, {turn.square.colum}</li>)}
        </ol>
    )
}