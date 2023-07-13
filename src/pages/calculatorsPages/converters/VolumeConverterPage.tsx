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
  const convertFromMetres3 = (metres: Decimal) => {
    setInputValues(() => ({
      nm3: metres.dividedBy(Decimal.pow(10, -27)),
      mikrom3: metres.dividedBy(Decimal.pow(10, -18)),
      mm3: metres.dividedBy(Decimal.pow(10, -9)),
      cm3: metres.dividedBy(Decimal.pow(10, -6)),
      dm3: metres.dividedBy(Decimal.pow(10, -3)),
      m3: metres,
      km3: metres.dividedBy(Decimal.pow(10, 9)),
      inch3: metres.dividedBy(new Decimal(0.000016387064)),
      ft3: metres.dividedBy(new Decimal(0.028316846592)),
      yd3: metres.dividedBy(new Decimal(0.764554857984)),
      mi3: metres.dividedBy(new Decimal(4168181825.440579584)),
      acft: metres.dividedBy(new Decimal(1233.48183754752)),
      mikrol: metres.dividedBy(Decimal.pow(10, -9)),
      ml: metres.dividedBy(Decimal.pow(10, -6)),
      cl: metres.dividedBy(Decimal.pow(10, -5)),
      dl: metres.dividedBy(Decimal.pow(10, -4)),
      l: metres.dividedBy(Decimal.pow(10, -3)),
      hl: metres.dividedBy(Decimal.pow(10, -1)),
      gal: metres.dividedBy(new Decimal(0.003785411784)),
      bo: metres.dividedBy(new Decimal(0.158987294928)),
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
    else if (inputName === unitVolume.mm3 || inputName === unitVolume.mikrol)
      conversionFactor = Decimal.pow(10, -9);
    else if (inputName === unitVolume.cm3 || inputName === unitVolume.ml)
      conversionFactor = Decimal.pow(10, -6);
    else if (inputName === unitVolume.dm3 || inputName === unitVolume.l)
      conversionFactor = Decimal.pow(10, -3);
    else if (inputName === unitVolume.km3)
      conversionFactor = Decimal.pow(10, 9);
    else if (inputName === unitVolume.inch3)
      conversionFactor = new Decimal(0.000016387064);
    else if (inputName === unitVolume.ft3)
      conversionFactor = new Decimal(0.028316846592);
    else if (inputName === unitVolume.yd3)
      conversionFactor = new Decimal(0.764554857984);
    else if (inputName === unitVolume.mi3)
      conversionFactor = new Decimal(4168181825.440579584);
    else if (inputName === unitVolume.acft)
      conversionFactor = new Decimal(1233.48183754752);
    else if (inputName === unitVolume.cl)
      conversionFactor = Decimal.pow(10, -5);
    else if (inputName === unitVolume.dl)
      conversionFactor = Decimal.pow(10, -4);
    else if (inputName === unitVolume.hl)
      conversionFactor = Decimal.pow(10, -1);
    else if (inputName === unitVolume.gal)
      conversionFactor = new Decimal(0.003785411784);
    else if (inputName === unitVolume.bo)
      conversionFactor = new Decimal(0.158987294928);
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
        <Title text={"Pozaukładowe jednostki:"} size={"H3"} />
        {unitFields.slice(12).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
      </div>
    </div>
  );
};

export default VolumeConverterPage;
