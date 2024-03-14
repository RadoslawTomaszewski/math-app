import React, { useState } from "react";
import Title from "../../../components/articleItems/Title";
import { BlueButtonStyle, GreenButtonStyle, RedButtonStyle } from "../../../utilities/styles";
import ArticleBorder from "../../../components/articleItems/ArticleBorder";
import { classNames } from "../../../utilities";

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
const generateRandomGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0)));
  }
  return rows;
};

const GameOfLifeContent = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid());

  const runSimulation = () => {
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
    runSimulation();
  };

  const handleClearClick = () => {
    setGrid(generateEmptyGrid());
  };

  const handleRandomClick = () => {
    setGrid(generateRandomGrid());
  };

  return (
    <>
      <Title text="Gra w życie" type="main-article" />
      <p>Kliknij w pole na planszy aby nadać ustawienie początkowe komórek. Następnie naciskaj przycisk "Następna epoka" i obserwuj fazy życia komórek.</p>
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
        <div className="flex flex-wrap justify-center gap-3 p-3">
          <button className={classNames(BlueButtonStyle, "min-w-[170px]")} onClick={handleStartClick}>
            Następna epoka
          </button>
          <button className={classNames(GreenButtonStyle, "min-w-[170px]")} onClick={handleRandomClick}>
            Losowy układ
          </button>
          <button className={classNames(RedButtonStyle, "min-w-[170px]")} onClick={handleClearClick}>
            Wyczyść planszę
          </button>
        </div>
      </div>
      <ArticleBorder />
      <p><b>Gra w życie</b> to automat komórkowy wymyślonej przez matematyka Johna Conwaya w 1970 roku. Jest to symulacja, która odbywa się na dwuwymiarowej siatce, gdzie każda komórka może znajdować się w dwóch stanach: "żywa" lub "martwa". Na podstawie prostych zasad, dotyczących liczby sąsiadujących komórek, decyduje się, czy dana komórka będzie żywa, martwa, czy ulegnie zmianie w kolejnej iteracji symulacji. Mimo swojej prostoty, gra w życie może generować złożone i nieprzewidywalne wzorce, co czyni ją fascynującym obiektem badań w dziedzinie teorii chaosu i sztucznej inteligencji.</p>
      <ArticleBorder />
      <Title text={"Zasady tego wariantu gry w Życie"} type="submain-article" />
      <span>(1) Każda komórka może znajdować się w dwóch stanach: "żywa" (oznaczona kolorem czarnym) lub "martwa" (oznaczona kolorem białym)</span><br /><br />
      <span>(2) W każdej kolejnej epoce, dla każdej komórki obliczana jest liczba jej żywych sąsiadów. </span><br /><br />
      <span>(3) Na podstawie liczby żywych sąsiadów, decydowane jest, czy dana komórka pozostaje żywa, staje się martwa, lub zostaje ożywiona:</span><br />
      <span className="ml-4"> <b>pozostaje żywa w następnej epoce</b> jeśli ma 2 lub 3 żywych sąsiadów</span><br />
      <span className="ml-4"> <b>staje się martwa</b> jeśli ma mniej niż 2 sąsiadów lub więcej niż 3 sąsiadów.</span><br />
      <span className="ml-4"> <b>zostaje ożywiona</b> jeśli ma dokładnie 3 żywych sąsiadów</span><br />
    </>);
};

export default GameOfLifeContent;
