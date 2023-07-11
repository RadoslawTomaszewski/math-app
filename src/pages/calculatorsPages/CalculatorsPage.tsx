import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../../utilities/Title";

export default function CalculatorsPage() {
  return (
    <div className="flex flex-col w-full items-center p-5 justify-center">
      <NavLink to="kalkulator-dlugosci">
        <Title text={"Przelicznik jednostek długości"} size={"H2"} />
      </NavLink>
      <NavLink to="kalkulator-powierzchni">
        <Title text={"Przelicznik jednostek powierzchni"} size={"H2"} />
      </NavLink>
      <NavLink to="kalkulator-objetosci">
        <Title text={"Przelicznik jednostek objętości"} size={"H2"} />
      </NavLink>
      <NavLink to="kalkulator-predkosci">
        <Title text={"Przelicznik jednostek prędkości"} size={"H2"} />
      </NavLink>
    </div>
  );
}
