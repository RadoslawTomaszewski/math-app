import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitVolume, unitVolumeLabels } from "../../../types/units";
import { NavLink } from "react-router-dom";

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
    inch3: null,
    ft3: null,
    yd3: null,
    mi3: null,
    acft: null,
    mikrol: null,
    ml: null,
    cl: null,
    dl: null,
    l: null,
    hl: null,
    gal: null,
    bo: null,
  });
  const conversionToBasic: { [key in unitVolume]: Decimal } = {
    [unitVolume.nm3]: Decimal.pow(10, -27),
    [unitVolume.mikrom3]: Decimal.pow(10, -18),
    [unitVolume.mm3]: Decimal.pow(10, -9),
    [unitVolume.cm3]: Decimal.pow(10, -6),
    [unitVolume.dm3]: Decimal.pow(10, -3),
    //BASIC
    [unitVolume.m3]: new Decimal(1),
    [unitVolume.km3]: Decimal.pow(10, 9),
    [unitVolume.inch3]: new Decimal(0.000016387064),
    [unitVolume.ft3]: new Decimal(0.028316846592),
    [unitVolume.yd3]: new Decimal(0.764554857984),
    [unitVolume.mi3]: new Decimal(4168181825.440579584),
    [unitVolume.acft]: new Decimal(1233.48183754752),
    [unitVolume.mikrol]: Decimal.pow(10, -9),
    [unitVolume.ml]: Decimal.pow(10, -6),
    [unitVolume.cl]: Decimal.pow(10, -5),
    [unitVolume.dl]: Decimal.pow(10, -4),
    [unitVolume.l]: Decimal.pow(10, -3),
    [unitVolume.hl]: Decimal.pow(10, -1),
    [unitVolume.gal]: new Decimal(0.003785411784),
    [unitVolume.bo]: new Decimal(0.158987294928),
  };
  const convertFromBasic = (basic: Decimal) => {
    setInputValues(() => ({
      nm3: basic.dividedBy(conversionToBasic[unitVolume.nm3]),
      mikrom3: basic.dividedBy(conversionToBasic[unitVolume.mikrom3]),
      mm3: basic.dividedBy(conversionToBasic[unitVolume.mm3]),
      cm3: basic.dividedBy(conversionToBasic[unitVolume.cm3]),
      dm3: basic.dividedBy(conversionToBasic[unitVolume.dm3]),
      m3: basic.dividedBy(conversionToBasic[unitVolume.m3]),
      km3: basic.dividedBy(conversionToBasic[unitVolume.km3]),
      inch3: basic.dividedBy(conversionToBasic[unitVolume.inch3]),
      ft3: basic.dividedBy(conversionToBasic[unitVolume.ft3]),
      yd3: basic.dividedBy(conversionToBasic[unitVolume.yd3]),
      mi3: basic.dividedBy(conversionToBasic[unitVolume.mi3]),
      acft: basic.dividedBy(conversionToBasic[unitVolume.acft]),
      mikrol: basic.dividedBy(conversionToBasic[unitVolume.mikrol]),
      ml: basic.dividedBy(conversionToBasic[unitVolume.ml]),
      cl: basic.dividedBy(conversionToBasic[unitVolume.cl]),
      dl: basic.dividedBy(conversionToBasic[unitVolume.dl]),
      l: basic.dividedBy(conversionToBasic[unitVolume.l]),
      hl: basic.dividedBy(conversionToBasic[unitVolume.hl]),
      gal: basic.dividedBy(conversionToBasic[unitVolume.gal]),
      bo: basic.dividedBy(conversionToBasic[unitVolume.bo]),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const DecimalInputValue: Decimal = new Decimal(Number(event.target.value));
    const inputName = event.target.name as keyof typeof conversionToBasic;
    const conversionFactor = conversionToBasic[inputName];
    const volumeInBasic: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromBasic(volumeInBasic);
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
    {
      label: unitVolumeLabels.inch3,
      value: inputValues.inch3,
      name: unitVolume.inch3,
    },
    {
      label: unitVolumeLabels.ft3,
      value: inputValues.ft3,
      name: unitVolume.ft3,
    },
    {
      label: unitVolumeLabels.yd3,
      value: inputValues.yd3,
      name: unitVolume.yd3,
    },
    {
      label: unitVolumeLabels.mi3,
      value: inputValues.mi3,
      name: unitVolume.mi3,
    },
    {
      label: unitVolumeLabels.acft,
      value: inputValues.acft,
      name: unitVolume.acft,
    },
    {
      label: unitVolumeLabels.mikrol,
      value: inputValues.mikrol,
      name: unitVolume.mikrol,
    },
    {
      label: unitVolumeLabels.ml,
      value: inputValues.ml,
      name: unitVolume.ml,
    },
    {
      label: unitVolumeLabels.cl,
      value: inputValues.cl,
      name: unitVolume.cl,
    },
    {
      label: unitVolumeLabels.dl,
      value: inputValues.dl,
      name: unitVolume.dl,
    },
    {
      label: unitVolumeLabels.l,
      value: inputValues.l,
      name: unitVolume.l,
    },
    {
      label: unitVolumeLabels.hl,
      value: inputValues.hl,
      name: unitVolume.hl,
    },
    {
      label: unitVolumeLabels.gal,
      value: inputValues.gal,
      name: unitVolume.gal,
    },
    {
      label: unitVolumeLabels.bo,
      value: inputValues.bo,
      name: unitVolume.bo,
    },
  ];

  return (
    <div className="p-2 justify-center flex flex-col">
      <div>
        <NavLink to={"../"}>Kalkulatory</NavLink> → Przeliczniki → Przelicznik
        jednostek objętości
      </div>
      <div className="p-3 border-2 border-navColor rounded w-full min-h-[calc(100vh-154px)]">
        <Title text={"Przelicznik jednostek objętości"} type={"main-article"} />
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
        <Title text={"Pozaukładowe jednostki:"} type={"submain-article"} />
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

export default VolumeConverterPage;
