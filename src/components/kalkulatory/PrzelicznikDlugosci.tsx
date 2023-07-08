import { FC, useState, ChangeEvent } from "react";

//liczyc w pythonie
//zrobic objekt

const PrzelicznikDlugosci: FC = () => {
  const [nm, setNm] = useState<number | null>(null);
  const [mikrom, setMikrom] = useState<number | null>(null);
  const [mm, setMm] = useState<number | null>(null);
  const [cm, setCm] = useState<number | null>(null);
  const [dm, setDm] = useState<number | null>(null);
  const [m, setM] = useState<number | null>(null);
  const [km, setKm] = useState<number | null>(null);

  const handleNmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    setNm(inputValue);
    setMikrom(inputValue * 1000);
    setMm(inputValue * 1000 * 1000);
    setCm(inputValue * 1000 * 1000 * 10);
    setDm(inputValue * 1000 * 1000 * 10 * 10);
    setM(inputValue * 1000 * 1000 * 10 * 10 * 10);
    setKm(inputValue * 1000 * 1000 * 10 * 10 * 10 * 1000);
  };

  const handleMikromChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    setNm(inputValue / 1000);
    setMikrom(inputValue);
    setMm(inputValue * 1000);
    setCm(inputValue * 1000 * 10);
    setDm(inputValue * 1000 * 10 * 10);
    setM(inputValue * 1000 * 10 * 10 * 10);
    setKm(inputValue * 1000 * 10 * 10 * 10 * 1000);
  };

  const handleMmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    setNm(inputValue / 1000 / 1000);
    setMikrom(inputValue / 1000);
    setMm(inputValue);
    setCm(inputValue * 10);
    setDm(inputValue * 10 * 10);
    setM(inputValue * 10 * 10 * 10);
    setKm(inputValue * 10 * 10 * 10 * 1000);
  };
  const handleCmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    setNm(inputValue / 1000 / 1000 / 10);
    setMikrom(inputValue / 1000 / 10);
    setMm(inputValue / 10);
    setCm(inputValue);
    setDm(inputValue * 10);
    setM(inputValue * 10 * 10);
    setKm(inputValue * 10 * 10 * 1000);
  };
  const handleDmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    setNm(inputValue / 1000 / 1000 / 10 / 10);
    setMikrom(inputValue / 1000 / 10 / 10);
    setMm(inputValue / 10 / 10);
    setCm(inputValue / 10);
    setDm(inputValue);
    setM(inputValue * 10);
    setKm(inputValue * 10 * 1000);
  };
  const handleMChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    setNm(inputValue / 1000 / 1000 / 10 / 10 / 10);
    setMikrom(inputValue / 1000 / 10 / 10 / 10);
    setMm(inputValue / 10 / 10 / 10);
    setCm(inputValue / 10 / 10);
    setDm(inputValue / 10);
    setM(inputValue);
    setKm(inputValue * 1000);
  };
  const handleKmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    setNm(inputValue / 1000 / 1000 / 10 / 10 / 10 / 1000);
    setMikrom(inputValue / 1000 / 10 / 10 / 10 / 1000);
    setMm(inputValue / 10 / 10 / 10 / 1000);
    setCm(inputValue / 10 / 10 / 1000);
    setDm(inputValue / 10 / 1000);
    setM(inputValue / 1000);
    setKm(inputValue);
  };

  return (
    <div className="p-5 m-4">
      <h2 className="text-lg text-center">
        <b>Przelicznik długości</b>
      </h2>
      <div className="grid grid-rows-1 grid-cols-3">
        <label>Nanometry: </label>
        <input
          placeholder="0"
          type="number"
          value={Number(nm) || ""}
          onChange={handleNmChange}
        />
        <span>nm</span>
      </div>

      <div className="grid grid-rows-1 grid-cols-3">
        <label>Mikrometry: </label>
        <input
          placeholder="0"
          type="number"
          value={Number(mikrom) || ""}
          onChange={handleMikromChange}
        />
        <span>μm</span>
      </div>

      <div className="grid grid-rows-1 grid-cols-3">
        <label>Milimetry: </label>
        <input
          placeholder="0"
          type="number"
          value={Number(mm) || ""}
          onChange={handleMmChange}
        />
        <span>mm</span>
      </div>

      <div className="grid grid-rows-1 grid-cols-3">
        <label className="grid-cols-1">Centymetry: </label>
        <input
          className="grid-cols-3"
          placeholder="0"
          type="number"
          value={Number(cm) || ""}
          onChange={handleCmChange}
        />
        <span>cm</span>
      </div>

      <div className="grid grid-rows-1 grid-cols-3">
        <label>Decymetry: </label>
        <input
          placeholder="0"
          type="number"
          value={Number(dm) || ""}
          onChange={handleDmChange}
        />
        <span>dm</span>
      </div>
      <div className="grid grid-rows-1 grid-cols-3">
        <label>Metry: </label>
        <input
          placeholder="0"
          type="number"
          value={Number(m) || ""}
          onChange={handleMChange}
        />
        <span>m</span>
      </div>
      <div className="grid grid-rows-1 grid-cols-3">
        <label>Kilometry: </label>
        <input
          placeholder="0"
          type="number"
          value={Number(km) || ""}
          onChange={handleKmChange}
        />
        <span>km</span>
      </div>
    </div>
  );
};

export default PrzelicznikDlugosci;
