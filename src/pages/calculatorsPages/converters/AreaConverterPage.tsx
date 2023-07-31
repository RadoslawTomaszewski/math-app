import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitArea, unitAreaLabels } from "../../../types/units";
import { NavLink } from "react-router-dom";

const AreaConverterPage: FC = () => {
  const [inputValues, setInputValues] = useState<{
    [key in keyof typeof unitArea]: Decimal | null;
  }>({
    nm2: null,
    mikrom2: null,
    mm2: null,
    cm2: null,
    dm2: null,
    m2: null,
    km2: null,
    a: null,
    ha: null,
    inch2: null,
    ft2: null,
    yd2: null,
    mi2: null,
    ac: null,
    morga: null,
  });

  const conversionToBasic: { [key in unitArea]: Decimal } = {
    [unitArea.nm2]: Decimal.pow(10, -18),
    [unitArea.mikrom2]: Decimal.pow(10, -12),
    [unitArea.mm2]: Decimal.pow(10, -6),
    [unitArea.cm2]: Decimal.pow(10, -4),
    [unitArea.dm2]: Decimal.pow(10, -2),
    //BASIC
    [unitArea.m2]: new Decimal(1),
    [unitArea.km2]: Decimal.pow(10, 6),
    [unitArea.a]: Decimal.pow(10, 2),
    [unitArea.ha]: Decimal.pow(10, 4),
    [unitArea.inch2]: new Decimal(0.00064516),
    [unitArea.ft2]: new Decimal(0.09290304),
    [unitArea.yd2]: new Decimal(0.83612736),
    [unitArea.mi2]: new Decimal(2589988.110336),
    [unitArea.ac]: new Decimal(4046.8564224),
    [unitArea.morga]: new Decimal(5598),
  };
  const convertFromBasic = (basic: Decimal) => {
    setInputValues(() => ({
      nm2: basic.dividedBy(conversionToBasic[unitArea.nm2]),
      mikrom2: basic.dividedBy(conversionToBasic[unitArea.mikrom2]),
      mm2: basic.dividedBy(conversionToBasic[unitArea.mm2]),
      cm2: basic.dividedBy(conversionToBasic[unitArea.cm2]),
      dm2: basic.dividedBy(conversionToBasic[unitArea.dm2]),
      m2: basic.dividedBy(conversionToBasic[unitArea.m2]),
      km2: basic.dividedBy(conversionToBasic[unitArea.km2]),
      a: basic.dividedBy(conversionToBasic[unitArea.a]),
      ha: basic.dividedBy(conversionToBasic[unitArea.ha]),
      inch2: basic.dividedBy(conversionToBasic[unitArea.inch2]),
      ft2: basic.dividedBy(conversionToBasic[unitArea.ft2]),
      yd2: basic.dividedBy(conversionToBasic[unitArea.yd2]),
      mi2: basic.dividedBy(conversionToBasic[unitArea.mi2]),
      ac: basic.dividedBy(conversionToBasic[unitArea.ac]),
      morga: basic.dividedBy(conversionToBasic[unitArea.morga]),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const DecimalInputValue: Decimal = new Decimal(Number(event.target.value));
    const inputName = event.target.name as keyof typeof conversionToBasic;
    const conversionFactor = conversionToBasic[inputName];
    const areaInBasic: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromBasic(areaInBasic);
  };

  const unitFields = [
    {
      label: unitAreaLabels.nm2,
      value: inputValues.nm2,
      name: unitArea.nm2,
    },
    {
      label: unitAreaLabels.mikrom2,
      value: inputValues.mikrom2,
      name: unitArea.mikrom2,
    },
    {
      label: unitAreaLabels.mm2,
      value: inputValues.mm2,
      name: unitArea.mm2,
    },
    { label: unitAreaLabels.cm2, value: inputValues.cm2, name: unitArea.cm2 },
    { label: unitAreaLabels.dm2, value: inputValues.dm2, name: unitArea.dm2 },
    { label: unitAreaLabels.m2, value: inputValues.m2, name: unitArea.m2 },
    { label: unitAreaLabels.km2, value: inputValues.km2, name: unitArea.km2 },
    {
      label: unitAreaLabels.inch2,
      value: inputValues.inch2,
      name: unitArea.inch2,
    },
    { label: unitAreaLabels.ft2, value: inputValues.ft2, name: unitArea.ft2 },
    { label: unitAreaLabels.yd2, value: inputValues.yd2, name: unitArea.yd2 },
    { label: unitAreaLabels.mi2, value: inputValues.mi2, name: unitArea.mi2 },
    { label: unitAreaLabels.ac, value: inputValues.ac, name: unitArea.ac },
    { label: unitAreaLabels.a, value: inputValues.a, name: unitArea.a },
    { label: unitAreaLabels.ha, value: inputValues.ha, name: unitArea.ha },
    {
      label: unitAreaLabels.morga,
      value: inputValues.morga,
      name: unitArea.morga,
    },
  ];

  return (
    <div className="p-2 justify-center flex flex-col">
      <div>
        <NavLink to={"../"}>Kalkulatory</NavLink> →{" "}
        <NavLink to={"przeliczniki"}>Przeliczniki</NavLink> → Przelicznik
        jednostek powierzchni
      </div>
      <div className="p-3 border-2 border-borderColor bg-articleColor rounded flex flex-col items-center">
        <Title
          text={"Przelicznik jednostek powierzchni"}
          type={"main-article"}
        />
        <Title text={"Jednostki układu SI:"} type={"submain-article"} />
        {unitFields.slice(0, 7).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Jednostki anglosaskie:"} type={"submain-article"} />
        {unitFields.slice(7, 12).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Pozostałe jednostki:"} type={"submain-article"} />
        {unitFields.slice(12).map((item) => (
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

export default AreaConverterPage;
