import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = () => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // update game board handler
  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   console.log("I was clicked");
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = "X";
  //     return updatedBoard;
  //   });
  // };
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button type="">{playerSymbol}</button>
              </li>
            ))}
          </ol>{" "}
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
