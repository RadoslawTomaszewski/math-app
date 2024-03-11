import { FC } from "react";

export interface IGraphImageProps {
  size: string;
  src: string;
  alt: string;
  extraStyle?: string;
}

const GraphImage: FC<IGraphImageProps> = ({ size, src, alt, extraStyle }) => {
  let sizeOption = "";
  let style = "";
  if (extraStyle) style = " " + extraStyle;


  if (size === "big") sizeOption = "max-w-[1000px] align-middle";
  if (size === "small") sizeOption = "max-w-full md:max-h-[400px] md:max-w-[400px] align-middle";
  if (size === "smaller") sizeOption = "max-w-[95%] md:max-h-[300px] md:max-w-[300px] align-middle";
  if (size === "smallest") sizeOption = "max-w-[90%] max-h-[200px] md:max-h-[200px] md:max-w-[200px] align-middle";
  if (size === "smallest2") sizeOption = "max-h-[150px] m-2 align-middle";
  if (size === "full") sizeOption = "max-w-full align-middle";
  if (size === "logo") sizeOption = "max-h-[50px]";
  return (
    <>
      <div className="flex justify-center">
        <img className={sizeOption + style} src={src} alt={alt} />
      </div>
    </>
  );
};

export default GraphImage;
