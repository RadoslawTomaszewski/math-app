import React, { useState } from "react";

export default function BazaWiedzy() {
  const [isPotegiExpanded, setIsPotegiExpanded] = useState(false);
  const [isProcentyExpanded, setIsProcentyExpanded] = useState(false);
  const [isLiczbyExpanded, setIsLiczbyExpanded] = useState(false);
  const [isRownaniaExpanded, setIsRownaniaExpanded] = useState(false);
  const [isPlanimetriaExpanded, setIsPlanimetriaExpanded] = useState(false);
  const [isStereometriaExpanded, setIsStereometriaExpanded] = useState(false);

  const togglePotegi = () => {
    setIsPotegiExpanded(!isPotegiExpanded);
  };

  const toggleProcenty = () => {
    setIsProcentyExpanded(!isProcentyExpanded);
  };

  const toggleLiczby = () => {
    setIsLiczbyExpanded(!isLiczbyExpanded);
  };

  const toggleRownania = () => {
    setIsRownaniaExpanded(!isRownaniaExpanded);
  };

  const togglePlanimetria = () => {
    setIsPlanimetriaExpanded(!isPlanimetriaExpanded);
  };

  const toggleStereometria = () => {
    setIsStereometriaExpanded(!isStereometriaExpanded);
  };

  return (
    <div className="flex justify-center flex-col items-center bg-second">
      <div className="min-w-[85vw] rounded border-first border-2 p-4 m-4 bg-fourth text-3xl font-bold">
        <div onClick={toggleLiczby} className="">
          Liczby
        </div>
        {isLiczbyExpanded && (
          <div className="text-xl ml-5">
            <div>Zbiory liczb</div>
            <div>Cechy podzielności liczb</div>
            <div>System rzymski</div>
            <div>Działania na ułamkach</div>
          </div>
        )}
        <div onClick={togglePotegi}>Potęgi i pierwiastki</div>
        {isPotegiExpanded && (
          <div className="text-xl ml-5">
            <div>Definicja potęgi</div>
            <div>Definicja pierwiastka</div>
            <div>Wzory na pierwiastki</div>
            <div>Wzory na potęgi</div>
          </div>
        )}
        <div onClick={toggleProcenty}>Procenty</div>
        {isProcentyExpanded && (
          <div className="text-xl ml-5">
            <div>Definicja procentów</div>
            <div>Przeliczanie procentów</div>
            <div>Stosowanie procentów w problemach</div>
          </div>
        )}
        <div onClick={toggleRownania}>Równania</div>
        {isRownaniaExpanded && (
          <div className="text-xl ml-5">
            <div>Równania liniowe</div>
            <div>Równania kwadratowe</div>
            <div>Równania wyższych stopni</div>
          </div>
        )}
        <div onClick={togglePlanimetria}>Planimetria</div>
        {isPlanimetriaExpanded && (
          <div className="text-xl ml-5">
            <div>Figury płaskie</div>
            <div>Wzory na obwody i pola figur</div>
            <div>Wzory na długości boków</div>
          </div>
        )}
        <div onClick={toggleStereometria}>Stereometria</div>
        {isStereometriaExpanded && (
          <div className="text-xl ml-5">
            <div>Bryły geometryczne</div>
            <div>Objętość i pole powierzchni brył</div>
            <div>Wzory na długość krawędzi</div>
          </div>
        )}
      </div>
    </div>
  );
}
