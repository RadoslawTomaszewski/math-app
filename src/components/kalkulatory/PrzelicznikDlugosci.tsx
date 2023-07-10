import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";

const PrzelicznikDlugosci: FC = () => {
  const [nm, setNm] = useState<Decimal | null>(null);
  const [mikrom, setMikrom] = useState<Decimal | null>(null);
  const [mm, setMm] = useState<Decimal | null>(null);
  const [cm, setCm] = useState<Decimal | null>(null);
  const [dm, setDm] = useState<Decimal | null>(null);
  const [m, setM] = useState<Decimal | null>(null);
  const [km, setKm] = useState<Decimal | null>(null);

  const handleNmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    setNm(DecimalInputValue);
    setMikrom(DecimalInputValue.dividedBy(Decimal.pow(10, 3)));
    setMm(DecimalInputValue.dividedBy(Decimal.pow(10, 6)));
    setCm(DecimalInputValue.dividedBy(Decimal.pow(10, 7)));
    setDm(DecimalInputValue.dividedBy(Decimal.pow(10, 8)));
    setM(DecimalInputValue.dividedBy(Decimal.pow(10, 9)));
    setKm(DecimalInputValue.dividedBy(Decimal.pow(10, 12)));
  };

  const handleMikromChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    setNm(DecimalInputValue.dividedBy(Decimal.pow(10, -3)));
    setMikrom(DecimalInputValue);
    setMm(DecimalInputValue.dividedBy(Decimal.pow(10, 3)));
    setCm(DecimalInputValue.dividedBy(Decimal.pow(10, 4)));
    setDm(DecimalInputValue.dividedBy(Decimal.pow(10, 5)));
    setM(DecimalInputValue.dividedBy(Decimal.pow(10, 6)));
    setKm(DecimalInputValue.dividedBy(Decimal.pow(10, 9)));
  };

  const handleMmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    setNm(DecimalInputValue.dividedBy(Decimal.pow(10, -6)));
    setMikrom(DecimalInputValue.dividedBy(Decimal.pow(10, -3)));
    setMm(DecimalInputValue);
    setCm(DecimalInputValue.dividedBy(Decimal.pow(10, 1)));
    setDm(DecimalInputValue.dividedBy(Decimal.pow(10, 2)));
    setM(DecimalInputValue.dividedBy(Decimal.pow(10, 3)));
    setKm(DecimalInputValue.dividedBy(Decimal.pow(10, 6)));
  };
  const handleCmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    setNm(DecimalInputValue.dividedBy(Decimal.pow(10, -7)));
    setMikrom(DecimalInputValue.dividedBy(Decimal.pow(10, -4)));
    setMm(DecimalInputValue.dividedBy(Decimal.pow(10, -1)));
    setCm(DecimalInputValue);
    setDm(DecimalInputValue.dividedBy(Decimal.pow(10, 1)));
    setM(DecimalInputValue.dividedBy(Decimal.pow(10, 2)));
    setKm(DecimalInputValue.dividedBy(Decimal.pow(10, 5)));
  };
  const handleDmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    setNm(DecimalInputValue.dividedBy(Decimal.pow(10, -8)));
    setMikrom(DecimalInputValue.dividedBy(Decimal.pow(10, -5)));
    setMm(DecimalInputValue.dividedBy(Decimal.pow(10, -2)));
    setCm(DecimalInputValue.dividedBy(Decimal.pow(10, -1)));
    setDm(DecimalInputValue);
    setM(DecimalInputValue.dividedBy(Decimal.pow(10, 1)));
    setKm(DecimalInputValue.dividedBy(Decimal.pow(10, 4)));
  };

  const handleMChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    setNm(DecimalInputValue.dividedBy(Decimal.pow(10, -9)));
    setMikrom(DecimalInputValue.dividedBy(Decimal.pow(10, -6)));
    setMm(DecimalInputValue.dividedBy(Decimal.pow(10, -3)));
    setCm(DecimalInputValue.dividedBy(Decimal.pow(10, -2)));
    setDm(DecimalInputValue.dividedBy(Decimal.pow(10, -1)));
    setM(DecimalInputValue);
    setKm(DecimalInputValue.dividedBy(Decimal.pow(10, 3)));
  };

  const handleKmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: number = Number(event.target.value);
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    setNm(DecimalInputValue.dividedBy(Decimal.pow(10, -12)));
    setMikrom(DecimalInputValue.dividedBy(Decimal.pow(10, -9)));
    setMm(DecimalInputValue.dividedBy(Decimal.pow(10, -6)));
    setCm(DecimalInputValue.dividedBy(Decimal.pow(10, -5)));
    setDm(DecimalInputValue.dividedBy(Decimal.pow(10, -4)));
    setM(DecimalInputValue.dividedBy(Decimal.pow(10, -3)));
    setKm(DecimalInputValue);
  };

  return (
    <div className="p-5 m-4">
      <h2 className="text-lg text-center">
        <b>Przelicznik jednostek miar długości</b>
      </h2>
      <br />
      <h3 className="text-md text-center">
        <b>Jednostki układu SI:</b>
      </h3>
      <div className="grid grid-rows-1 grid-cols-3">
        <label>Nanometry: </label>
        <input
          className="text-right"
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
          className="text-right"
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
          className="text-right"
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
          className="text-right"
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
          className="text-right"
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
          className="text-right"
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
          className="text-right"
          placeholder="0"
          type="number"
          value={Number(km) || ""}
          onChange={handleKmChange}
        />
        <span>km</span>
      </div>
      <h3 className="text-md text-center">
        <b>Jednostki astronomiczne:</b>
      </h3>
    </div>
  );
};

export default PrzelicznikDlugosci;
