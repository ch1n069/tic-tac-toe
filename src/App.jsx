import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [playerName, setPlayerName] = useState("Player");
  const [activePlayer, setactivePlayer] = useState("X");
  // handle state update by passing props up
  const updatePlayerNameHandler = () => {};

  // handler function to update the active player's <nam></nam>'
  const handleSelectSquare = () => {
    setactivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={playerName}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol={"0"}
            isActive={activePlayer === "0"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
