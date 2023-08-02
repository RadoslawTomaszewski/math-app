import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "./ConverterInputField";
import Title from "../../../utilities/Title";
import { unitSpeed, unitSpeedLabels } from "../../../types/units";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../../components/Wrapper/Wrapper";

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
    <div className="p-2 justify-center flex flex-col">
      <div>
        <NavLink to={"../"}>Kalkulatory</NavLink> → Przeliczniki → Przelicznik
        jednostek prędkości
      </div>
      <Wrapper>
        <Title text={"Przelicznik jednostek prędkości"} type={"main-article"} />
        <Title text={"Jednostki układu SI:"} type={"submain-article"} />
        {unitFields.slice(0, 2).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Jednostki anglosaskie:"} type={"submain-article"} />
        {unitFields.slice(2, 4).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Prędkości w fizyce:"} type={"submain-article"} />
        {unitFields.slice(4, 6).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Pozostałe jednostki:"} type={"submain-article"} />
        {unitFields.slice(6).map((item) => (
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

export default SpeedConverterPage;
