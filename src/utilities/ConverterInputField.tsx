import { FC } from "react";
import { IConvertInputField } from "../interfaces/interfaces";

const ConverterInputField: FC<IConvertInputField> = ({
  label,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="flex justify-center align-middle p-1">
      <div className="mx-2 grid grid-cols-4 md:grid-cols-7">
        <span className="mx-2 text-center md:text-left col-span-4 md:col-span-3">
          {label + ":"}
        </span>
        <input
          className="ml-2 text-right font-math col-span-3 md:col-span-3 md:min-w-[220px] bg-bgColor border-y-2 border-y-black border-l-2 border-l-black rounded-l appearance-none focus:outline-none "
          placeholder="0"
          type="number"
          value={Number(value) || ""}
          onChange={onChange}
          name={name}
          min="0"
        />
        <span className="mr-2 md:pl-5 font-unit border-y-2 border-y-black border-r-2 border-r-black rounded-r">
          {name}
        </span>
      </div>
    </div>
  );
};

export default ConverterInputField;
