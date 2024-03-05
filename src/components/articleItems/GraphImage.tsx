import { FC } from "react";

export interface IGraphImageProps {
  size: string;
  src: string;
  alt: string;
}

const GraphImage: FC<IGraphImageProps> = ({ size, src, alt }) => {
  let sizeOption = <></>;
  if (size === "big")
    sizeOption = (
      <img className="max-w-[1000px] align-middle" src={src} alt={alt} />
    );
  else if (size === "small") {
    sizeOption = (
      <img
        className="max-w-full md:max-h-[400px] md:max-w-[400px] align-middle"
        src={src}
        alt={alt}
      />
    );
  } else if (size === "smaller") {
    sizeOption = (
      <img
        className="max-w-[95%] md:max-h-[300px] md:max-w-[300px] align-middle"
        src={src}
        alt={alt}
      />
    );
  } else if (size === "smallest") {
    sizeOption = (
      <img
        className="max-w-[90%] max-h-[200px] md:max-h-[200px] md:max-w-[200px] align-middle"
        src={src}
        alt={alt}
      />
    );
  } else if (size === "full") {
    sizeOption = (
      <img className="max-w-full align-middle" src={src} alt={alt} />
    );
  } else if (size === "medium-short") {
    sizeOption = (
      <img className="max-h-[150px] m-2 align-middle" src={src} alt={alt} />
    );
  }

  return (
    <>
      <div className="flex justify-center">{sizeOption}</div>
    </>
  );
};

export default GraphImage;
