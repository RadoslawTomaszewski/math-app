import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitTime, unitTimeLabels } from "../../../types/units";
import { NavLink } from "react-router-dom";

const TimeConverterPage: FC = () => {
  const [inputValues, setInputValues] = useState<{
    [key in keyof typeof unitTime]: Decimal | null;
  }>({
    ns: null,
    mikros: null,
    ms: null,
    s: null,
    q: null,
    t: null,
    min: null,
    h: null,
    d: null,
    tyg: null,
    m: null,
    lat: null,
    dek: null,
    wiek: null,
    tys: null,
  });

  const conversionToBasic: { [key in unitTime]: Decimal } = {
    [unitTime.ns]: Decimal.pow(10, -9),
    [unitTime.mikros]: Decimal.pow(10, -6),
    [unitTime.ms]: Decimal.pow(10, -3),
    //BASIC
    [unitTime.s]: new Decimal(1),
    [unitTime.q]: new Decimal(1).dividedBy(3600),
    [unitTime.t]: new Decimal(1).dividedBy(60),
    [unitTime.min]: new Decimal(60),
    [unitTime.h]: new Decimal(3600),
    [unitTime.d]: new Decimal(86400),
    [unitTime.tyg]: new Decimal(604800),
    [unitTime.m]: new Decimal(2629800),
    [unitTime.lat]: new Decimal(31557600),
    [unitTime.dek]: new Decimal(315576000),
    [unitTime.wiek]: new Decimal(3155760000),
    [unitTime.tys]: new Decimal(31557600000),
  };

  const convertFromBasic = (basic: Decimal) => {
    setInputValues(() => ({
      ns: basic.dividedBy(conversionToBasic[unitTime.ns]),
      mikros: basic.dividedBy(conversionToBasic[unitTime.mikros]),
      ms: basic.dividedBy(conversionToBasic[unitTime.ms]),
      s: basic.dividedBy(conversionToBasic[unitTime.s]),
      q: basic.dividedBy(conversionToBasic[unitTime.q]),
      t: basic.dividedBy(conversionToBasic[unitTime.t]),
      min: basic.dividedBy(conversionToBasic[unitTime.min]),
      h: basic.dividedBy(conversionToBasic[unitTime.h]),
      d: basic.dividedBy(conversionToBasic[unitTime.d]),
      tyg: basic.dividedBy(conversionToBasic[unitTime.tyg]),
      m: basic.dividedBy(conversionToBasic[unitTime.m]),
      lat: basic.dividedBy(conversionToBasic[unitTime.lat]),
      dek: basic.dividedBy(conversionToBasic[unitTime.dek]),
      wiek: basic.dividedBy(conversionToBasic[unitTime.wiek]),
      tys: basic.dividedBy(conversionToBasic[unitTime.tys]),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const DecimalInputValue: Decimal = new Decimal(Number(event.target.value));
    const inputName = event.target.name as keyof typeof conversionToBasic;
    const conversionFactor = conversionToBasic[inputName];
    const timeInBasic: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromBasic(timeInBasic);
  };

  const unitFields = [
    {
      label: unitTimeLabels.ns,
      value: inputValues.ns,
      name: unitTime.ns,
    },
    {
      label: unitTimeLabels.mikros,
      value: inputValues.mikros,
      name: unitTime.mikros,
    },
    {
      label: unitTimeLabels.ms,
      value: inputValues.ms,
      name: unitTime.ms,
    },
    { label: unitTimeLabels.s, value: inputValues.s, name: unitTime.s },
    { label: unitTimeLabels.q, value: inputValues.q, name: unitTime.q },
    { label: unitTimeLabels.t, value: inputValues.t, name: unitTime.t },
    { label: unitTimeLabels.s, value: inputValues.s, name: unitTime.s },
    { label: unitTimeLabels.min, value: inputValues.min, name: unitTime.min },
    { label: unitTimeLabels.h, value: inputValues.h, name: unitTime.h },
    {
      label: unitTimeLabels.d,
      value: inputValues.d,
      name: unitTime.d,
    },
    { label: unitTimeLabels.tyg, value: inputValues.tyg, name: unitTime.tyg },
    { label: unitTimeLabels.m, value: inputValues.m, name: unitTime.m },
    { label: unitTimeLabels.lat, value: inputValues.lat, name: unitTime.lat },
    { label: unitTimeLabels.dek, value: inputValues.dek, name: unitTime.dek },
    {
      label: unitTimeLabels.wiek,
      value: inputValues.wiek,
      name: unitTime.wiek,
    },
    {
      label: unitTimeLabels.tys,
      value: inputValues.tys,
      name: unitTime.tys,
    },
  ];

  return (
    <div className="p-2 justify-center flex flex-col">
      <div>
        <NavLink to={"../"}>Kalkulatory</NavLink> → Przeliczniki → Przelicznik
        jednostek czasu
      </div>
      <div className="p-3 border-2 border-navColor rounded w-full min-h-[calc(100vh-154px)]">
        <Title text={"Przelicznik jednostek czasu"} type={"main-article"} />
        <Title text={"Jednostki układu SI:"} type={"submain-article"} />
        {unitFields.slice(0, 4).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title
          text={"Jednostki w sześćdziesiątkowym systemie liczbowym:"}
          type={"submain-article"}
        />
        {unitFields.slice(4, 9).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Jednostki astronomiczne:"} type={"submain-article"} />
        {unitFields.slice(9).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeConverterPage;
