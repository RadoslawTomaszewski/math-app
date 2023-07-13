import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitLength, unitLengthLabels } from "../../../types/units";

const LengthConverterPage: FC = () => {
  const [inputValues, setInputValues] = useState<{
    [key in keyof typeof unitLength]: Decimal | null;
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
    setInputValues(() => ({
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
    if (inputName === unitLength.nm) conversionFactor = Decimal.pow(10, -9);
    else if (inputName === unitLength.mikrom)
      conversionFactor = Decimal.pow(10, -6);
    else if (inputName === unitLength.mm)
      conversionFactor = Decimal.pow(10, -3);
    else if (inputName === unitLength.cm)
      conversionFactor = Decimal.pow(10, -2);
    else if (inputName === unitLength.dm)
      conversionFactor = Decimal.pow(10, -1);
    else if (inputName === unitLength.km) conversionFactor = Decimal.pow(10, 3);
    else if (inputName === unitLength.inch)
      conversionFactor = new Decimal(0.0254);
    else if (inputName === unitLength.ft)
      conversionFactor = new Decimal(0.3048);
    else if (inputName === unitLength.yd)
      conversionFactor = new Decimal(0.9144);
    else if (inputName === unitLength.mi)
      conversionFactor = new Decimal(1609.344);
    else if (inputName === unitLength.NM) conversionFactor = new Decimal(1852);
    else if (inputName === unitLength.au)
      conversionFactor = new Decimal(149597870700);
    else if (inputName === unitLength.lokiec)
      conversionFactor = new Decimal(0.566);
    else conversionFactor = new Decimal(1);

    let lengthInMetres: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromMetres(lengthInMetres);
  };

  const unitFields = [
    { label: unitLengthLabels.nm, value: inputValues.nm, name: unitLength.nm },
    {
      label: unitLengthLabels.mikrom,
      value: inputValues.mikrom,
      name: unitLength.mikrom,
    },
    { label: unitLengthLabels.cm, value: inputValues.cm, name: unitLength.cm },
    { label: unitLengthLabels.mm, value: inputValues.mm, name: unitLength.mm },
    { label: unitLengthLabels.dm, value: inputValues.dm, name: unitLength.dm },
    { label: unitLengthLabels.m, value: inputValues.m, name: unitLength.m },
    { label: unitLengthLabels.km, value: inputValues.km, name: unitLength.km },
    {
      label: unitLengthLabels.inch,
      value: inputValues.inch,
      name: unitLength.inch,
    },
    { label: unitLengthLabels.ft, value: inputValues.ft, name: unitLength.ft },
    { label: unitLengthLabels.yd, value: inputValues.yd, name: unitLength.yd },
    { label: unitLengthLabels.mi, value: inputValues.mi, name: unitLength.mi },
    { label: unitLengthLabels.NM, value: inputValues.NM, name: unitLength.NM },
    { label: unitLengthLabels.au, value: inputValues.au, name: unitLength.au },
    {
      label: unitLengthLabels.lokiec,
      value: inputValues.lokiec,
      name: unitLength.lokiec,
    },
  ];

  return (
    <div className="p-5 justify-center flex">
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Przelicznik jednostek długości"} size={"H2"} />
        <Title text={"Jednostki układu SI:"} size={"H3"} />
        {unitFields.slice(0, 7).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title text={"Jednostki anglosaskie:"} size={"H3"} />
        {unitFields.slice(7, 11).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title text={"Pozostałe jednostki:"} size={"H3"} />
        {unitFields.slice(11).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LengthConverterPage;
