import React, { useState } from "react";

const Player = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  //   editing handler function

  const { name, symbol } = props;
  const [playerName, setPlayerName] = useState(name);

  const editHandler = () => {
    setIsEditing((editing) => !editing);
  };
  const playerInputHandler = (e) => {
    setPlayerName(e.target.value);
  };

  let player = <span className="player-name">{name}</span>;
  // check the status of editing
  if (isEditing) {
    player = (
      <input
        onChange={playerInputHandler}
        type="text"
        className=""
        defaultValue={playerName}
      />
    );
  }
  return (
    <div>
      <li>
        <span className="player">
          {player}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </div>
  );
};

export default Player;
