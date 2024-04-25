import { FC } from "react";

export interface IImageComponentProps {
    src: string;
    alt: string;
    styles?: string;
}

const ImageComponent: FC<IImageComponentProps> = ({ src, alt, styles }) => {
    let style = "max-w-[95%] ";
    if (styles) style += styles;

    return (
        <>
            <div className="flex justify-center">
                <img className={style} src={src} alt={alt} />
            </div>
        </>
    );
};

export default ImageComponent;
