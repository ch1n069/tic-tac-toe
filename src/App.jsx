import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [playerName, setPlayerName] = useState("Player");
  // handle state update by passing props up
  const updatePlayerNameHandler = () => {};

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={playerName} symbol={"x"} />
          <Player name="Player 2" symbol={"x"} />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
