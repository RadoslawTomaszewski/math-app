import React from "react";
import { NavLink } from "react-router-dom";

export default function Kalkulatory() {
  return (
    <div className="flex flex-col w-full items-center m-3 ">
      <NavLink to="dlugosci">
        <h1 className="hover:text-third">Przelicznik jednostek długości</h1>
      </NavLink>
      <NavLink to="fkwadratowa">
        <h1>Kalkulator Funkcji Kwadratowej</h1>
      </NavLink>
    </div>
  );
}
