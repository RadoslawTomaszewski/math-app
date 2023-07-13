import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitInformation, unitInformationLabels } from "../../../types/units";

const InformationConverterPage: FC = () => {
  const [inputValues, setInputValues] = useState<{
    [key in keyof typeof unitInformation]: Decimal | null;
  }>({
    b: null,
    B: null,
    kbSI: null,
    MbSI: null,
    GbSI: null,
    TbSI: null,
    kBSI: null,
    MBSI: null,
    GBSI: null,
    TBSI: null,
    Kib: null,
    Mib: null,
    Gib: null,
    Tib: null,
    KiB: null,
    MiB: null,
    GiB: null,
    TiB: null,
    KbJEDEC: null,
    MbJEDEC: null,
    GbJEDEC: null,
    TbJEDEC: null,
    KBJEDEC: null,
    MBJEDEC: null,
    GBJEDEC: null,
    TBJEDEC: null,
  });

  const conversionToBasic: { [key in unitInformation]: Decimal } = {
    [unitInformation.b]: new Decimal(1),
    [unitInformation.B]: new Decimal(8),
    [unitInformation.kbSI]: Decimal.pow(1000, 1),
    [unitInformation.MbSI]: Decimal.pow(1000, 2),
    [unitInformation.GbSI]: Decimal.pow(1000, 3),
    [unitInformation.TbSI]: Decimal.pow(1000, 4),
    [unitInformation.kBSI]: Decimal.pow(1000, 1).times(8),
    [unitInformation.MBSI]: Decimal.pow(1000, 2).times(8),
    [unitInformation.GBSI]: Decimal.pow(1000, 3).times(8),
    [unitInformation.TBSI]: Decimal.pow(1000, 4).times(8),
    [unitInformation.Kib]: Decimal.pow(1024, 1),
    [unitInformation.Mib]: Decimal.pow(1024, 2),
    [unitInformation.Gib]: Decimal.pow(1024, 3),
    [unitInformation.Tib]: Decimal.pow(1024, 4),
    [unitInformation.KiB]: Decimal.pow(1024, 1).times(8),
    [unitInformation.MiB]: Decimal.pow(1024, 2).times(8),
    [unitInformation.GiB]: Decimal.pow(1024, 3).times(8),
    [unitInformation.TiB]: Decimal.pow(1024, 4).times(8),
    [unitInformation.KbJEDEC]: Decimal.pow(1024, 1),
    [unitInformation.MbJEDEC]: Decimal.pow(1024, 2),
    [unitInformation.GbJEDEC]: Decimal.pow(1024, 3),
    [unitInformation.TbJEDEC]: Decimal.pow(1024, 4),
    [unitInformation.KBJEDEC]: Decimal.pow(1024, 1).times(8),
    [unitInformation.MBJEDEC]: Decimal.pow(1024, 2).times(8),
    [unitInformation.GBJEDEC]: Decimal.pow(1024, 3).times(8),
    [unitInformation.TBJEDEC]: Decimal.pow(1024, 4).times(8),
  };

  const convertFromBasic = (bits: Decimal) => {
    setInputValues(() => ({
      b: bits.dividedBy(conversionToBasic[unitInformation.b]),
      B: bits.dividedBy(conversionToBasic[unitInformation.B]),
      kbSI: bits.dividedBy(conversionToBasic[unitInformation.kbSI]),
      MbSI: bits.dividedBy(conversionToBasic[unitInformation.MbSI]),
      GbSI: bits.dividedBy(conversionToBasic[unitInformation.GbSI]),
      TbSI: bits.dividedBy(conversionToBasic[unitInformation.TbSI]),
      kBSI: bits.dividedBy(conversionToBasic[unitInformation.kBSI]),
      MBSI: bits.dividedBy(conversionToBasic[unitInformation.MBSI]),
      GBSI: bits.dividedBy(conversionToBasic[unitInformation.GBSI]),
      TBSI: bits.dividedBy(conversionToBasic[unitInformation.TBSI]),
      Kib: bits.dividedBy(conversionToBasic[unitInformation.Kib]),
      Mib: bits.dividedBy(conversionToBasic[unitInformation.Mib]),
      Gib: bits.dividedBy(conversionToBasic[unitInformation.Gib]),
      Tib: bits.dividedBy(conversionToBasic[unitInformation.Tib]),
      KiB: bits.dividedBy(conversionToBasic[unitInformation.KiB]),
      MiB: bits.dividedBy(conversionToBasic[unitInformation.MiB]),
      GiB: bits.dividedBy(conversionToBasic[unitInformation.GiB]),
      TiB: bits.dividedBy(conversionToBasic[unitInformation.TiB]),
      KbJEDEC: bits.dividedBy(conversionToBasic[unitInformation.KbJEDEC]),
      MbJEDEC: bits.dividedBy(conversionToBasic[unitInformation.MbJEDEC]),
      GbJEDEC: bits.dividedBy(conversionToBasic[unitInformation.GbJEDEC]),
      TbJEDEC: bits.dividedBy(conversionToBasic[unitInformation.TbJEDEC]),
      KBJEDEC: bits.dividedBy(conversionToBasic[unitInformation.KBJEDEC]),
      MBJEDEC: bits.dividedBy(conversionToBasic[unitInformation.MBJEDEC]),
      GBJEDEC: bits.dividedBy(conversionToBasic[unitInformation.GBJEDEC]),
      TBJEDEC: bits.dividedBy(conversionToBasic[unitInformation.TBJEDEC]),
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
    {
      label: unitInformationLabels.b,
      value: inputValues.b,
      name: unitInformation.b,
    },
    {
      label: unitInformationLabels.B,
      value: inputValues.B,
      name: unitInformation.B,
    },
    {
      label: unitInformationLabels.kbSI,
      value: inputValues.kbSI,
      name: unitInformation.kbSI,
    },
    {
      label: unitInformationLabels.MbSI,
      value: inputValues.MbSI,
      name: unitInformation.MbSI,
    },
    {
      label: unitInformationLabels.GbSI,
      value: inputValues.GbSI,
      name: unitInformation.GbSI,
    },
    {
      label: unitInformationLabels.TbSI,
      value: inputValues.TbSI,
      name: unitInformation.TbSI,
    },
    {
      label: unitInformationLabels.kBSI,
      value: inputValues.kBSI,
      name: unitInformation.kBSI,
    },
    {
      label: unitInformationLabels.MBSI,
      value: inputValues.MBSI,
      name: unitInformation.MBSI,
    },
    {
      label: unitInformationLabels.GBSI,
      value: inputValues.GBSI,
      name: unitInformation.GBSI,
    },
    {
      label: unitInformationLabels.TBSI,
      value: inputValues.TBSI,
      name: unitInformation.TBSI,
    },
    {
      label: unitInformationLabels.Kib,
      value: inputValues.Kib,
      name: unitInformation.Kib,
    },
    {
      label: unitInformationLabels.Mib,
      value: inputValues.Mib,
      name: unitInformation.Mib,
    },
    {
      label: unitInformationLabels.Gib,
      value: inputValues.Gib,
      name: unitInformation.Gib,
    },
    {
      label: unitInformationLabels.Tib,
      value: inputValues.Tib,
      name: unitInformation.Tib,
    },
    {
      label: unitInformationLabels.KiB,
      value: inputValues.KiB,
      name: unitInformation.KiB,
    },
    {
      label: unitInformationLabels.MiB,
      value: inputValues.MiB,
      name: unitInformation.MiB,
    },
    {
      label: unitInformationLabels.GiB,
      value: inputValues.GiB,
      name: unitInformation.GiB,
    },
    {
      label: unitInformationLabels.TiB,
      value: inputValues.TiB,
      name: unitInformation.TiB,
    },
    {
      label: unitInformationLabels.KbJEDEC,
      value: inputValues.KbJEDEC,
      name: unitInformation.KbJEDEC,
    },
    {
      label: unitInformationLabels.MbJEDEC,
      value: inputValues.MbJEDEC,
      name: unitInformation.MbJEDEC,
    },
    {
      label: unitInformationLabels.GbJEDEC,
      value: inputValues.GbJEDEC,
      name: unitInformation.GbJEDEC,
    },
    {
      label: unitInformationLabels.TbJEDEC,
      value: inputValues.TbJEDEC,
      name: unitInformation.TbJEDEC,
    },
    {
      label: unitInformationLabels.KBJEDEC,
      value: inputValues.KBJEDEC,
      name: unitInformation.KBJEDEC,
    },
    {
      label: unitInformationLabels.MBJEDEC,
      value: inputValues.MBJEDEC,
      name: unitInformation.MBJEDEC,
    },
    {
      label: unitInformationLabels.GBJEDEC,
      value: inputValues.GBJEDEC,
      name: unitInformation.GBJEDEC,
    },
    {
      label: unitInformationLabels.TBJEDEC,
      value: inputValues.TBJEDEC,
      name: unitInformation.TBJEDEC,
    },
  ];

  return (
    <div className="p-5 justify-center flex">
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Przelicznik jednostek objętości"} size={"H2"} />
        <Title text={"Podstawowe jednostki:"} size={"H3"} />
        {unitFields.slice(0, 2).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title text={"Standard SI:"} size={"H3"} />
        {unitFields.slice(2, 10).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title text={"Standard IEC:"} size={"H3"} />
        {unitFields.slice(10, 18).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
        <Title text={"Standard JEDEC:"} size={"H3"} />
        {unitFields.slice(18).map((item) => (
          <ConverterInputField onChange={handleInputChange} {...item} />
        ))}
      </div>
    </div>
  );
};

export default InformationConverterPage;
