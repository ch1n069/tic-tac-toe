import React, { useState } from "react";

const Player = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  //   editing handler function

  const { name, symbol } = props;

  const editHandler = () => {
    setIsEditing((editing) => !editing);
  };
  return (
    <div>
      <li>
        <span className="player">
          {isEditing ? (
            <input type="text" className="" value={name} />
          ) : (
            <span className="player-name">{name}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </div>
  );
};

export default Player;
