import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitInformation, unitInformationLabels } from "../../../types/units";
import { NavLink } from "react-router-dom";

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
    //BASIC
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

  const convertFromBasic = (basic: Decimal) => {
    setInputValues(() => ({
      b: basic.dividedBy(conversionToBasic[unitInformation.b]),
      B: basic.dividedBy(conversionToBasic[unitInformation.B]),
      kbSI: basic.dividedBy(conversionToBasic[unitInformation.kbSI]),
      MbSI: basic.dividedBy(conversionToBasic[unitInformation.MbSI]),
      GbSI: basic.dividedBy(conversionToBasic[unitInformation.GbSI]),
      TbSI: basic.dividedBy(conversionToBasic[unitInformation.TbSI]),
      kBSI: basic.dividedBy(conversionToBasic[unitInformation.kBSI]),
      MBSI: basic.dividedBy(conversionToBasic[unitInformation.MBSI]),
      GBSI: basic.dividedBy(conversionToBasic[unitInformation.GBSI]),
      TBSI: basic.dividedBy(conversionToBasic[unitInformation.TBSI]),
      Kib: basic.dividedBy(conversionToBasic[unitInformation.Kib]),
      Mib: basic.dividedBy(conversionToBasic[unitInformation.Mib]),
      Gib: basic.dividedBy(conversionToBasic[unitInformation.Gib]),
      Tib: basic.dividedBy(conversionToBasic[unitInformation.Tib]),
      KiB: basic.dividedBy(conversionToBasic[unitInformation.KiB]),
      MiB: basic.dividedBy(conversionToBasic[unitInformation.MiB]),
      GiB: basic.dividedBy(conversionToBasic[unitInformation.GiB]),
      TiB: basic.dividedBy(conversionToBasic[unitInformation.TiB]),
      KbJEDEC: basic.dividedBy(conversionToBasic[unitInformation.KbJEDEC]),
      MbJEDEC: basic.dividedBy(conversionToBasic[unitInformation.MbJEDEC]),
      GbJEDEC: basic.dividedBy(conversionToBasic[unitInformation.GbJEDEC]),
      TbJEDEC: basic.dividedBy(conversionToBasic[unitInformation.TbJEDEC]),
      KBJEDEC: basic.dividedBy(conversionToBasic[unitInformation.KBJEDEC]),
      MBJEDEC: basic.dividedBy(conversionToBasic[unitInformation.MBJEDEC]),
      GBJEDEC: basic.dividedBy(conversionToBasic[unitInformation.GBJEDEC]),
      TBJEDEC: basic.dividedBy(conversionToBasic[unitInformation.TBJEDEC]),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const DecimalInputValue: Decimal = new Decimal(Number(event.target.value));
    const inputName = event.target.name as keyof typeof conversionToBasic;
    const conversionFactor = conversionToBasic[inputName];
    const informationInBasic: Decimal =
      DecimalInputValue.times(conversionFactor);
    convertFromBasic(informationInBasic);
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
    <div className="p-2 justify-center flex flex-col">
      <div>
        <NavLink to={"../"}>Kalkulatory</NavLink> → Przeliczniki → Przelicznik
        jednostek informacji
      </div>
      <div className="p-3 border-2 border-borderColor bg-articleColor rounded flex flex-col items-center">
        <Title
          text={"Przelicznik jednostek informacji"}
          type={"main-article"}
        />
        <Title text={"Podstawowe jednostki:"} type={"submain-article"} />
        {unitFields.slice(0, 2).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Standard SI:"} type={"submain-article"} />
        {unitFields.slice(2, 10).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Standard IEC:"} type={"submain-article"} />
        {unitFields.slice(10, 18).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Standard JEDEC:"} type={"submain-article"} />
        {unitFields.slice(18).map((item) => (
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

export default InformationConverterPage;
