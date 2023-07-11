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
      <div className="mx-2 grid grid-cols-3 md:grid-cols-7">
        <label className="mx-2 text-center md:text-left col-span-3">
          {label + ":"}
        </label>
        <input
          className="ml-2 text-right font-math col-span-2 md:min-w-[220px] bg-bgColor border-y-2 border-y-black border-l-2 border-l-black rounded-l appearance-none focus:outline-none "
          placeholder="0"
          type="number"
          value={Number(value) || ""}
          onChange={onChange}
          name={name}
          min="0"
        />
        <span className="mr-2 md:pl-5 font-math border-y-2 border-y-black border-r-2 border-r-black rounded-r">
          {name}
        </span>
      </div>
    </div>
  );
};

export default ConverterInputField;
