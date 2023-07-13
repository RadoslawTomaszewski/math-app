import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitVolume, unitVolumeLabels } from "../../../types/units";

const VolumeConverterPage: FC = () => {
  const [inputValues, setInputValues] = useState<{
    [key in keyof typeof unitVolume]: Decimal | null;
  }>({
    nm3: null,
    mikrom3: null,
    mm3: null,
    cm3: null,
    dm3: null,
    m3: null,
    km3: null,
  });
  const convertFromMetres3 = (metres: Decimal) => {
    setInputValues(() => ({
      nm3: metres.dividedBy(Decimal.pow(10, -27)),
      mikrom3: metres.dividedBy(Decimal.pow(10, -18)),
      mm3: metres.dividedBy(Decimal.pow(10, -9)),
      cm3: metres.dividedBy(Decimal.pow(10, -6)),
      dm3: metres.dividedBy(Decimal.pow(10, -3)),
      m3: metres,
      km3: metres.dividedBy(Decimal.pow(10, 9)),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    const inputName = event.target.name;
    const DecimalInputValue: Decimal = new Decimal(inputValue);
    let conversionFactor: Decimal;
    if (inputName === unitVolume.nm3) conversionFactor = Decimal.pow(10, -27);
    else if (inputName === unitVolume.mikrom3)
      conversionFactor = Decimal.pow(10, -18);
    else if (inputName === unitVolume.mm3)
      conversionFactor = Decimal.pow(10, -9);
    else if (inputName === unitVolume.cm3)
      conversionFactor = Decimal.pow(10, -6);
    else if (inputName === unitVolume.dm3)
      conversionFactor = Decimal.pow(10, -3);
    else if (inputName === unitVolume.km3)
      conversionFactor = Decimal.pow(10, 9);
    else conversionFactor = new Decimal(1);

    let lengthInMetres3: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromMetres3(lengthInMetres3);
  };

  const unitFields = [
    {
      label: unitVolumeLabels.nm3,
      value: inputValues.nm3,
      name: unitVolume.nm3,
    },
    {
      label: unitVolumeLabels.mikrom3,
      value: inputValues.mikrom3,
      name: unitVolume.mikrom3,
    },
    {
      label: unitVolumeLabels.mm3,
      value: inputValues.mm3,
      name: unitVolume.mm3,
    },
    {
      label: unitVolumeLabels.cm3,
      value: inputValues.cm3,
      name: unitVolume.cm3,
    },
    {
      label: unitVolumeLabels.dm3,
      value: inputValues.dm3,
      name: unitVolume.dm3,
    },
    { label: unitVolumeLabels.m3, value: inputValues.m3, name: unitVolume.m3 },
    {
      label: unitVolumeLabels.km3,
      value: inputValues.km3,
      name: unitVolume.km3,
    },
  ];

  return (
    <div className="p-5 justify-center flex">
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Przelicznik jednostek objętości"} size={"H2"} />
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

export default VolumeConverterPage;
