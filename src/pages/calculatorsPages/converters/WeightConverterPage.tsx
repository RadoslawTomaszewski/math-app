import { FC, useState, ChangeEvent } from "react";
import Decimal from "decimal.js";
import ConverterInputField from "../../../utilities/ConverterInputField";
import Title from "../../../utilities/Title";
import { unitWeight, unitWeightLabels } from "../../../types/units";

const WeightConverterPage: FC = () => {
  const [inputValues, setInputValues] = useState<{
    [key in keyof typeof unitWeight]: Decimal | null;
  }>({
    ng: null,
    mikrog: null,
    mg: null,
    cg: null,
    dg: null,
    g: null,
    dag: null,
    kg: null,
    Mg: null,
    t: null,
    gr: null,
    oz: null,
    lb: null,
    st: null,
    cwt: null,
    ct: null,
    cwtPL: null,
  });

  const conversionToBasic: { [key in unitWeight]: Decimal } = {
    [unitWeight.ng]: Decimal.pow(10, -9),
    [unitWeight.mikrog]: Decimal.pow(10, -6),
    [unitWeight.mg]: Decimal.pow(10, -3),
    [unitWeight.cg]: Decimal.pow(10, -2),
    [unitWeight.dg]: Decimal.pow(10, -1),
    //BASIC
    [unitWeight.g]: new Decimal(1),
    [unitWeight.dag]: Decimal.pow(10, 1),
    [unitWeight.kg]: Decimal.pow(10, 3),
    [unitWeight.Mg]: Decimal.pow(10, 6),
    [unitWeight.t]: Decimal.pow(10, 6),
    [unitWeight.gr]: new Decimal(0.06479891),
    [unitWeight.oz]: new Decimal(28.349523125),
    [unitWeight.lb]: new Decimal(453.59237),
    [unitWeight.st]: new Decimal(6350.29318),
    [unitWeight.cwt]: new Decimal(50802.34544),
    [unitWeight.ct]: new Decimal(0.2),
    [unitWeight.cwtPL]: new Decimal(64800),
  };

  const convertFromBasic = (basic: Decimal) => {
    setInputValues(() => ({
      ng: basic.dividedBy(conversionToBasic[unitWeight.ng]),
      mikrog: basic.dividedBy(conversionToBasic[unitWeight.mikrog]),
      mg: basic.dividedBy(conversionToBasic[unitWeight.mg]),
      cg: basic.dividedBy(conversionToBasic[unitWeight.cg]),
      dg: basic.dividedBy(conversionToBasic[unitWeight.dg]),
      g: basic.dividedBy(conversionToBasic[unitWeight.g]),
      dag: basic.dividedBy(conversionToBasic[unitWeight.dag]),
      kg: basic.dividedBy(conversionToBasic[unitWeight.kg]),
      Mg: basic.dividedBy(conversionToBasic[unitWeight.Mg]),
      t: basic.dividedBy(conversionToBasic[unitWeight.t]),
      gr: basic.dividedBy(conversionToBasic[unitWeight.gr]),
      oz: basic.dividedBy(conversionToBasic[unitWeight.oz]),
      lb: basic.dividedBy(conversionToBasic[unitWeight.lb]),
      st: basic.dividedBy(conversionToBasic[unitWeight.st]),
      cwt: basic.dividedBy(conversionToBasic[unitWeight.cwt]),
      ct: basic.dividedBy(conversionToBasic[unitWeight.ct]),
      cwtPL: basic.dividedBy(conversionToBasic[unitWeight.cwtPL]),
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const DecimalInputValue: Decimal = new Decimal(Number(event.target.value));
    const inputName = event.target.name as keyof typeof conversionToBasic;
    const conversionFactor = conversionToBasic[inputName];
    const WeightInBasic: Decimal = DecimalInputValue.times(conversionFactor);
    convertFromBasic(WeightInBasic);
  };

  const unitFields = [
    { label: unitWeightLabels.ng, value: inputValues.ng, name: unitWeight.ng },
    {
      label: unitWeightLabels.mikrog,
      value: inputValues.mikrog,
      name: unitWeight.mikrog,
    },
    { label: unitWeightLabels.mg, value: inputValues.mg, name: unitWeight.mg },
    { label: unitWeightLabels.cg, value: inputValues.cg, name: unitWeight.cg },
    { label: unitWeightLabels.dg, value: inputValues.dg, name: unitWeight.dg },
    { label: unitWeightLabels.g, value: inputValues.g, name: unitWeight.g },
    {
      label: unitWeightLabels.dag,
      value: inputValues.dag,
      name: unitWeight.dag,
    },
    { label: unitWeightLabels.kg, value: inputValues.kg, name: unitWeight.kg },
    { label: unitWeightLabels.Mg, value: inputValues.Mg, name: unitWeight.Mg },
    { label: unitWeightLabels.gr, value: inputValues.gr, name: unitWeight.gr },
    { label: unitWeightLabels.oz, value: inputValues.oz, name: unitWeight.oz },
    { label: unitWeightLabels.lb, value: inputValues.lb, name: unitWeight.lb },
    { label: unitWeightLabels.st, value: inputValues.st, name: unitWeight.st },
    {
      label: unitWeightLabels.cwt,
      value: inputValues.cwt,
      name: unitWeight.cwt,
    },
    { label: unitWeightLabels.t, value: inputValues.t, name: unitWeight.t },
    { label: unitWeightLabels.ct, value: inputValues.ct, name: unitWeight.ct },
    {
      label: unitWeightLabels.cwtPL,
      value: inputValues.cwtPL,
      name: unitWeight.cwtPL,
    },
  ];

  return (
    <div className="p-2 justify-center flex">
      <div className="w-full">
        <Title text={"Przelicznik jednostek masy"} size={"H2"} />
        <Title text={"Jednostki układu SI:"} size={"H3"} />
        {unitFields.slice(0, 9).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Jednostki anglosaskie:"} size={"H3"} />
        {unitFields.slice(9, 14).map((item) => (
          <ConverterInputField
            key={item.name}
            onChange={handleInputChange}
            {...item}
          />
        ))}
        <Title text={"Pozostałe jednostki:"} size={"H3"} />
        {unitFields.slice(14).map((item) => (
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

export default WeightConverterPage;
