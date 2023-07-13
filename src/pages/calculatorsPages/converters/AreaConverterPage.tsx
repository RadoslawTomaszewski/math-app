import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitArea, unitAreaLabels } from "../../../types/units";

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
  const convertFromMetres2 = (metres: Decimal) => {
    setInputValues(() => ({
      nm2: metres.dividedBy(Decimal.pow(10, -18)),
      mikrom2: metres.dividedBy(Decimal.pow(10, -12)),
      mm2: metres.dividedBy(Decimal.pow(10, -6)),
      cm2: metres.dividedBy(Decimal.pow(10, -4)),
      dm2: metres.dividedBy(Decimal.pow(10, -2)),
      m2: metres,
      km2: metres.dividedBy(Decimal.pow(10, 6)),
      a: metres.dividedBy(Decimal.pow(10, 2)),
      ha: metres.dividedBy(Decimal.pow(10, 4)),
      inch2: metres.dividedBy(new Decimal(0.00064516)),
      ft2: metres.dividedBy(new Decimal(0.09290304)),
      yd2: metres.dividedBy(new Decimal(0.83612736)),
      mi2: metres.dividedBy(new Decimal(2589988.110336)),
      ac: metres.dividedBy(new Decimal(4046.8564224)),
      morga: metres.dividedBy(new Decimal(5598)),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    const inputName = event.target.name;
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    let conversionFactor: Decimal;
    if (inputName === unitArea.nm2) conversionFactor = Decimal.pow(10, -18);
    else if (inputName === unitArea.mikrom2)
      conversionFactor = Decimal.pow(10, -12);
    else if (inputName === unitArea.mm2) conversionFactor = Decimal.pow(10, -6);
    else if (inputName === unitArea.cm2) conversionFactor = Decimal.pow(10, -4);
    else if (inputName === unitArea.dm2) conversionFactor = Decimal.pow(10, -2);
    else if (inputName === unitArea.km2) conversionFactor = Decimal.pow(10, 6);
    else if (inputName === unitArea.a) conversionFactor = Decimal.pow(10, 2);
    else if (inputName === unitArea.ha) conversionFactor = Decimal.pow(10, 4);
    else if (inputName === unitArea.ac)
      conversionFactor = new Decimal(4046.8564224);
    else if (inputName === unitArea.inch2)
      conversionFactor = new Decimal(0.00064516);
    else if (inputName === unitArea.ft2)
      conversionFactor = new Decimal(0.09290304);
    else if (inputName === unitArea.yd2)
      conversionFactor = new Decimal(0.83612736);
    else if (inputName === unitArea.mi2)
      conversionFactor = new Decimal(2589988.110336);
    else if (inputName === unitArea.morga) conversionFactor = new Decimal(5598);
    else conversionFactor = new Decimal(1);

    let lengthInMetres2: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromMetres2(lengthInMetres2);
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
    <div className="p-5 justify-center flex">
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Przelicznik jednostek powierzchni"} size={"H2"} />
        <Title text={"Jednostki układu SI:"} size={"H3"} />
        {unitFields.slice(0, 7).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title text={"Jednostki anglosaskie:"} size={"H3"} />
        {unitFields.slice(7, 12).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title text={"Pozostałe jednostki:"} size={"H3"} />
        {unitFields.slice(12).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AreaConverterPage;
