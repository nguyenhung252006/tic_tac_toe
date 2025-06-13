import { useState } from "react"

export default function Player({ initaName, symbol, isActive, onChangeName }) {

    const [playerName, SetPlayerName] = useState(initaName)

    const [isEditing, setIsEditing] = useState(false)

    const handleIsEditing = function () {
        setIsEditing(!isEditing)
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }


    const handleChange = function (event) {
        SetPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} required onChange={handleChange} />
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}