import { FC } from "react";
import { IGraphImage } from "../../interfaces/interfaces";

const GraphImage: FC<IGraphImage> = ({ size, src, alt }) => {
  let sizeOption = <></>;
  if (size === "big")
    sizeOption = (
      <img className="max-w-[1000px] align-middle" src={src} alt={alt} />
    );
  else if (size === "small") {
    sizeOption = (
      <img
        className="max-w-full md:max-w-[33vw] align-middle"
        src={src}
        alt={alt}
      />
    );
  } else if (size === "full") {
    sizeOption = (
      <img className="max-w-[90%] align-middle" src={src} alt={alt} />
    );
  }

  return (
    <>
      <div className="flex justify-center">{sizeOption}</div>
    </>
  );
};

export default GraphImage;