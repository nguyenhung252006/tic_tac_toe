import { useState } from "react"

export default function Player ({initaName, symbol}) {

    const [playerName, SetPlayerName] = useState(initaName)

    const [isEditing, setIsEditing] = useState(false)

    const handleIsEditing = function () {
        setIsEditing(!isEditing)
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
        <li>
            <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
          </li>
    )
}