import React, { useState } from "react";

const Player = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  //   editing handler function

  const { name, symbol } = props;

  const editHandler = () => {
    setIsEditing((editing) => !editing);
  };
  let player = <span className="player-name">{name}</span>;
  // check the status of editing
  if (isEditing) {
    player = <input type="text" className="" defaultValue={name} />;
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
