import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "./ConverterInputField";
import Title from "../../../utilities/Title";
import { unitLength, unitLengthLabels } from "../../../types/units";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../../components/Wrapper/Wrapper";

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
    //BASIC
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

  const convertFromBasic = (basic: Decimal) => {
    setInputValues(() => ({
      nm: basic.dividedBy(conversionToBasic[unitLength.nm]),
      mikrom: basic.dividedBy(conversionToBasic[unitLength.mikrom]),
      mm: basic.dividedBy(conversionToBasic[unitLength.mm]),
      cm: basic.dividedBy(conversionToBasic[unitLength.cm]),
      dm: basic.dividedBy(conversionToBasic[unitLength.dm]),
      m: basic.dividedBy(conversionToBasic[unitLength.m]),
      km: basic.dividedBy(conversionToBasic[unitLength.km]),
      inch: basic.dividedBy(conversionToBasic[unitLength.inch]),
      ft: basic.dividedBy(conversionToBasic[unitLength.ft]),
      yd: basic.dividedBy(conversionToBasic[unitLength.yd]),
      mi: basic.dividedBy(conversionToBasic[unitLength.mi]),
      NM: basic.dividedBy(conversionToBasic[unitLength.NM]),
      au: basic.dividedBy(conversionToBasic[unitLength.au]),
      lokiec: basic.dividedBy(conversionToBasic[unitLength.lokiec]),
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
    <div className="p-2 justify-center flex flex-col">
      <div>
        <NavLink to={"../"}>Kalkulatory</NavLink> → Przeliczniki → Przelicznik
        jednostek długości
      </div>
      <Wrapper>
        <Title text={"Przelicznik jednostek długości"} type={"main-article"} />
        <Title text={"Jednostki układu SI:"} type={"submain-article"} />
        {unitFields.slice(0, 7).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Jednostki anglosaskie:"} type={"submain-article"} />
        {unitFields.slice(7, 11).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Pozostałe jednostki:"} type={"submain-article"} />
        {unitFields.slice(11).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default LengthConverterPage;
