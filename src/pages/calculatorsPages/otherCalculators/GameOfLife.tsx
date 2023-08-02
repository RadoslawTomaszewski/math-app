import React, { useState, useRef, useEffect } from "react";
import { Wrapper } from "../../../components/Wrapper/Wrapper";
import Title from "../../../utilities/Title";

const numRows = 30;
const numCols = 15;
const cellSize = 20;

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const GameOfLife = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  const runSimulation = () => {
    if (!runningRef.current) return;
    const newGrid = generateEmptyGrid();
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const neighbors = countNeighbors(i, j);
        if (grid[i][j]) {
          if (neighbors === 2 || neighbors === 3) {
            newGrid[i][j] = 1;
          } else {
            newGrid[i][j] = 0;
          }
        } else {
          if (neighbors === 3) {
            newGrid[i][j] = 1;
          }
        }
      }
    }
    setGrid(newGrid);
  };

  const countNeighbors = (row: number, col: number) => {
    let count = 0;
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
        count += grid[newRow][newCol];
      }
    }
    return count;
  };

  const handleCellClick = (row: number, col: number) => {
    const newGrid = [...grid];
    newGrid[row][col] = grid[row][col] ? 0 : 1;
    setGrid(newGrid);
  };

  const handleStartClick = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  const handleClearClick = () => {
    setGrid(generateEmptyGrid());
    setRunning(false);
  };

  return (
    <Wrapper>
      <Title text="Gra w życie" type="main-article" />
      <div className="m-2 flex flex-col justify-center items-center">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, j) => (
              <div
                key={`${i}-${j}`}
                onClick={() => handleCellClick(i, j)}
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: grid[i][j] ? "black" : "white",
                  border: "solid 1px black",
                }}
              />
            ))
          )}
        </div>
        <div className="flex justify-center gap-2">
          <button className="btn" onClick={handleStartClick}>
            {running ? "Stop" : "Start"}
          </button>
          <button className="btn" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default GameOfLife;
