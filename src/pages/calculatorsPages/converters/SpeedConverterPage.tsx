import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitSpeed, unitSpeedLabels } from "../../../types/units";

const SpeedConverterPage: FC = () => {
  const [inputValues, setInputValues] = useState<{
    [key in keyof typeof unitSpeed]: Decimal | null;
  }>({
    mps: null,
    kph: null,
    mph: null,
    kn: null,
    ftps: null,
    ss: null,
    c: null,
  });

  const conversionToBasic: { [key in unitSpeed]: Decimal } = {
    //BASIC
    [unitSpeed.mps]: new Decimal(1),
    [unitSpeed.kph]: new Decimal(1000).dividedBy(3600),
    [unitSpeed.mph]: new Decimal(1609.344).dividedBy(3600),
    [unitSpeed.kn]: new Decimal(1852).dividedBy(3600),
    [unitSpeed.ftps]: new Decimal(0.3048),
    [unitSpeed.ss]: new Decimal(340.3),
    [unitSpeed.c]: new Decimal(299792458),
  };

  const convertFromBasic = (basic: Decimal) => {
    setInputValues(() => ({
      mps: basic.dividedBy(conversionToBasic[unitSpeed.mps]),
      kph: basic.dividedBy(conversionToBasic[unitSpeed.kph]),
      mph: basic.dividedBy(conversionToBasic[unitSpeed.mph]),
      kn: basic.dividedBy(conversionToBasic[unitSpeed.kn]),
      ftps: basic.dividedBy(conversionToBasic[unitSpeed.ftps]),
      ss: basic.dividedBy(conversionToBasic[unitSpeed.ss]),
      c: basic.dividedBy(conversionToBasic[unitSpeed.c]),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const DecimalInputValue: Decimal = new Decimal(Number(event.target.value));
    const inputName = event.target.name as keyof typeof conversionToBasic;
    const conversionFactor = conversionToBasic[inputName];
    const SpeedInBasic: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromBasic(SpeedInBasic);
  };

  const unitFields = [
    {
      label: unitSpeedLabels.mps,
      value: inputValues.mps,
      name: unitSpeed.mps,
    },
    {
      label: unitSpeedLabels.kph,
      value: inputValues.kph,
      name: unitSpeed.kph,
    },
    {
      label: unitSpeedLabels.mph,
      value: inputValues.mph,
      name: unitSpeed.mph,
    },
    {
      label: unitSpeedLabels.ftps,
      value: inputValues.ftps,
      name: unitSpeed.ftps,
    },
    {
      label: unitSpeedLabels.ss,
      value: inputValues.ss,
      name: unitSpeed.ss,
    },
    {
      label: unitSpeedLabels.c,
      value: inputValues.c,
      name: unitSpeed.c,
    },
    {
      label: unitSpeedLabels.kn,
      value: inputValues.kn,
      name: unitSpeed.kn,
    },
  ];

  return (
    <div className="p-5 justify-center flex">
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Przelicznik jednostek prędkości"} size={"H2"} />
        <Title text={"Jednostki układu SI:"} size={"H3"} />
        {unitFields.slice(0, 2).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Jednostki anglosaskie:"} size={"H3"} />
        {unitFields.slice(2, 4).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Prędkości w fizyce:"} size={"H3"} />
        {unitFields.slice(4, 6).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Pozostałe jednostki:"} size={"H3"} />
        {unitFields.slice(6).map((item) => (
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

export default SpeedConverterPage;
