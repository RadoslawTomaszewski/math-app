import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitTime, unitTimeLabels } from "../../../types/units";

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
  const convertFromSeconds = (seconds: Decimal) => {
    setInputValues(() => ({
      ns: seconds.dividedBy(Decimal.pow(10, -9)),
      mikros: seconds.dividedBy(Decimal.pow(10, -6)),
      ms: seconds.dividedBy(Decimal.pow(10, -3)),
      s: seconds,
      q: seconds.dividedBy(new Decimal(1).dividedBy(3600)),
      t: seconds.dividedBy(new Decimal(1).dividedBy(60)),
      min: seconds.dividedBy(new Decimal(60)),
      h: seconds.dividedBy(new Decimal(3600)),
      d: seconds.dividedBy(new Decimal(86400)),
      tyg: seconds.dividedBy(new Decimal(604800)),
      m: seconds.dividedBy(new Decimal(2629800)),
      lat: seconds.dividedBy(new Decimal(31557600)),
      dek: seconds.dividedBy(new Decimal(315576000)),
      wiek: seconds.dividedBy(new Decimal(3155760000)),
      tys: seconds.dividedBy(new Decimal(31557600000)),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    const inputName = event.target.name;
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    let conversionFactor: Decimal;
    if (inputName === unitTime.ns) conversionFactor = Decimal.pow(10, -9);
    else if (inputName === unitTime.mikros)
      conversionFactor = Decimal.pow(10, -6);
    else if (inputName === unitTime.ms) conversionFactor = Decimal.pow(10, -3);
    else if (inputName === unitTime.q)
      conversionFactor = new Decimal(1).dividedBy(3600);
    else if (inputName === unitTime.t)
      conversionFactor = new Decimal(1).dividedBy(60);
    else if (inputName === unitTime.min) conversionFactor = new Decimal(60);
    else if (inputName === unitTime.h) conversionFactor = new Decimal(3600);
    else if (inputName === unitTime.d) conversionFactor = new Decimal(86400);
    else if (inputName === unitTime.tyg) conversionFactor = new Decimal(604800);
    else if (inputName === unitTime.m) conversionFactor = new Decimal(2629800);
    else if (inputName === unitTime.lat)
      conversionFactor = new Decimal(31557600);
    else if (inputName === unitTime.dek)
      conversionFactor = new Decimal(315576000);
    else if (inputName === unitTime.wiek)
      conversionFactor = new Decimal(3155760000);
    else if (inputName === unitTime.tys)
      conversionFactor = new Decimal(31557600000);
    else conversionFactor = new Decimal(1);

    let timeInSeconds: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromSeconds(timeInSeconds);
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
    <div className="p-5 justify-center flex">
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Przelicznik jednostek czasu"} size={"H2"} />
        <Title text={"Jednostki układu SI:"} size={"H3"} />
        {unitFields.slice(0, 4).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title
          text={"Jednostki w sześćdziesiątkowym systemie liczbowym:"}
          size={"H3"}
        />
        {unitFields.slice(4, 9).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title text={"Jednostki astronomiczne:"} size={"H3"} />
        {unitFields.slice(9).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TimeConverterPage;
