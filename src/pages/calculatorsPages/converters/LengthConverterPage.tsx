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

  const conversionToBasic: { [key in unitLength]: Decimal } = {
    [unitLength.nm]: Decimal.pow(10, -9),
    [unitLength.mikrom]: Decimal.pow(10, -6),
    [unitLength.mm]: Decimal.pow(10, -3),
    [unitLength.cm]: Decimal.pow(10, -2),
    [unitLength.dm]: Decimal.pow(10, -1),
    [unitLength.m]: new Decimal(1),
    [unitLength.km]: Decimal.pow(10, 3),
    [unitLength.inch]: new Decimal(0.0254),
    [unitLength.ft]: new Decimal(0.3048),
    [unitLength.yd]: new Decimal(0.9144),
    [unitLength.mi]: new Decimal(1609.344),
    [unitLength.NM]: new Decimal(1852),
    [unitLength.au]: new Decimal(149597870700),
    [unitLength.lokiec]: new Decimal(0.596),
  };

  const convertFromBasic = (metres: Decimal) => {
    setInputValues(() => ({
      nm: metres.dividedBy(conversionToBasic[unitLength.nm]),
      mikrom: metres.dividedBy(conversionToBasic[unitLength.mikrom]),
      mm: metres.dividedBy(conversionToBasic[unitLength.mm]),
      cm: metres.dividedBy(conversionToBasic[unitLength.cm]),
      dm: metres.dividedBy(conversionToBasic[unitLength.dm]),
      m: metres.dividedBy(conversionToBasic[unitLength.m]),
      km: metres.dividedBy(conversionToBasic[unitLength.km]),
      inch: metres.dividedBy(conversionToBasic[unitLength.inch]),
      ft: metres.dividedBy(conversionToBasic[unitLength.ft]),
      yd: metres.dividedBy(conversionToBasic[unitLength.yd]),
      mi: metres.dividedBy(conversionToBasic[unitLength.mi]),
      NM: metres.dividedBy(conversionToBasic[unitLength.NM]),
      au: metres.dividedBy(conversionToBasic[unitLength.au]),
      lokiec: metres.dividedBy(conversionToBasic[unitLength.lokiec]),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const DecimalInputValue: Decimal = new Decimal(Number(event.target.value));
    const inputName = event.target.name as keyof typeof conversionToBasic;
    const conversionFactor = conversionToBasic[inputName];
    const lengthInBasic: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromBasic(lengthInBasic);
  };

  const unitFields = [
    { label: unitLengthLabels.nm, value: inputValues.nm, name: unitLength.nm },
    {
      label: unitLengthLabels.mikrom,
      value: inputValues.mikrom,
      name: unitLength.mikrom,
    },
    { label: unitLengthLabels.mm, value: inputValues.mm, name: unitLength.mm },
    { label: unitLengthLabels.cm, value: inputValues.cm, name: unitLength.cm },
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
