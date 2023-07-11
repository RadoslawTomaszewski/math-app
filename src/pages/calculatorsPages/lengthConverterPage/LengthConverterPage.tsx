import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unit, unitLabels } from "../../../types";

const LengthConverterPage: FC = () => {
  const [inputValues, setInputValues] = useState<{
    [key in keyof typeof unit]: Decimal | null;
  }>({
    nm: null,
    mikrom: null,
    mm: null,
    cm: null,
    dm: null,
    m: null,
    km: null,
    inch: null,
    ft: null,
    yd: null,
    mi: null,
    NM: null,
    au: null,
    lokiec: null,
  });
  const convertFromMetres = (metres: Decimal) => {
    setInputValues((prev) => ({
      ...prev,
      nm: metres.dividedBy(Decimal.pow(10, -9)),
      mikrom: metres.dividedBy(Decimal.pow(10, -6)),
      mm: metres.dividedBy(Decimal.pow(10, -3)),
      cm: metres.dividedBy(Decimal.pow(10, -2)),
      dm: metres.dividedBy(Decimal.pow(10, -1)),
      m: metres,
      km: metres.dividedBy(Decimal.pow(10, 3)),
      inch: metres.dividedBy(new Decimal(0.0254)),
      ft: metres.dividedBy(new Decimal(0.3048)),
      yd: metres.dividedBy(new Decimal(0.9144)),
      mi: metres.dividedBy(new Decimal(1609.344)),
      NM: metres.dividedBy(new Decimal(1852)),
      au: metres.dividedBy(new Decimal(149597870700)),
      lokiec: metres.dividedBy(new Decimal(0.566)),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    const inputName = event.target.name;
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    let conversionFactor: Decimal;
    if (inputName === unit.nm) conversionFactor = Decimal.pow(10, -9);
    else if (inputName === unit.mikrom) conversionFactor = Decimal.pow(10, -6);
    else if (inputName === unit.mm) conversionFactor = Decimal.pow(10, -3);
    else if (inputName === unit.cm) conversionFactor = Decimal.pow(10, -2);
    else if (inputName === unit.dm) conversionFactor = Decimal.pow(10, -1);
    else if (inputName === unit.km) conversionFactor = Decimal.pow(10, 3);
    else if (inputName === unit.inch) conversionFactor = new Decimal(0.0254);
    else if (inputName === unit.ft) conversionFactor = new Decimal(0.3048);
    else if (inputName === unit.yd) conversionFactor = new Decimal(0.9144);
    else if (inputName === unit.mi) conversionFactor = new Decimal(1609.344);
    else if (inputName === unit.NM) conversionFactor = new Decimal(1852);
    else if (inputName === unit.au)
      conversionFactor = new Decimal(149597870700);
    else if (inputName === unit.lokiec) conversionFactor = new Decimal(0.566);
    else conversionFactor = new Decimal(1);

    let lengthInMetres: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromMetres(lengthInMetres);
  };

  const unitFields = [
    { label: unitLabels.nm, value: inputValues.nm, name: unit.nm },
    { label: unitLabels.mikrom, value: inputValues.mikrom, name: unit.mikrom },
    { label: unitLabels.cm, value: inputValues.cm, name: unit.cm },
    { label: unitLabels.mm, value: inputValues.mm, name: unit.mm },
    { label: unitLabels.dm, value: inputValues.dm, name: unit.dm },
    { label: unitLabels.m, value: inputValues.m, name: unit.m },
    { label: unitLabels.km, value: inputValues.km, name: unit.km },
    { label: unitLabels.inch, value: inputValues.inch, name: unit.inch },
    { label: unitLabels.ft, value: inputValues.ft, name: unit.ft },
    { label: unitLabels.yd, value: inputValues.yd, name: unit.yd },
    { label: unitLabels.mi, value: inputValues.mi, name: unit.mi },
    { label: unitLabels.NM, value: inputValues.NM, name: unit.NM },
    { label: unitLabels.au, value: inputValues.au, name: unit.au },
    { label: unitLabels.lokiec, value: inputValues.lokiec, name: unit.lokiec },
  ];

  const createConverterInputField = (field: {
    label: string;
    value: Decimal | null;
    name: string;
  }) => (
    <ConverterInputField
      label={field.label}
      value={field.value}
      onChange={handleInputChange}
      name={field.name}
    />
  );

  return (
    <div className="p-5 justify-center flex">
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Przelicznik jednostek miar długości"} size={"H2"} />
        <Title text={"Jednostki układu SI:"} size={"H3"} />
        {unitFields.slice(0, 7).map(createConverterInputField)}
        <Title text={"Jednostki anglosaskie:"} size={"H3"} />
        {unitFields.slice(7, 11).map(createConverterInputField)}
        <Title text={"Pozostałe jednostki:"} size={"H3"} />
        {unitFields.slice(11).map(createConverterInputField)}
      </div>
    </div>
  );
};

export default LengthConverterPage;
