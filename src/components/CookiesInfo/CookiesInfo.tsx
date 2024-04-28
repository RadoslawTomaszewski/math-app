import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BlueButtonStyle } from "../../utilities/styles";
import { classNames } from "../../utilities";

export default function CookiesInfo() {
    const [isVisible, setIsVisible] = useState(localStorage.getItem("cookiesInfoVisible") !== "false");

    const handleClose = () => {
        localStorage.setItem("cookiesInfoVisible", "false");
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="flex flex-col bg-[#ade5f6aa] text-center text-neutral-700 items-center p-2">
                    <span><b>majza.eu</b> korzysta z usług Google Analytics, które są narzędziami analitycznymi dostarczanymi przez Google, Inc. </span>
                    <span>Google Analytics używa plików cookie. </span>
                    <span>Korzystając z serwisu wyrażasz zgodę na przetwarzanie danych. <NavLink to="https://policies.google.com/privacy" className={"hover: underline"}><b>Więcej informacji.</b></NavLink> </span>
                    <button className={classNames(BlueButtonStyle, "text-sm")} onClick={handleClose}><b>Rozumiem</b></button>
                </div>
            )}
        </>
    );
}
