import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BlueButtonStyle, RedButtonStyle } from "../../utilities/styles";
import { classNames } from "../../utilities";
import ReactGA from "react-ga4";

export default function CookiesInfo() {
    const [isVisible, setIsVisible] = useState(localStorage.getItem("cookiesInfoVisible") !== "false");

    useEffect(() => {
        const consentGiven = localStorage.getItem("cookiesConsentGiven") === "true";
        if (!consentGiven) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesConsentGiven", "true");
        setIsVisible(false);
        initializeGoogleAnalytics();
    };

    const handleClose = () => {
        localStorage.setItem("cookiesInfoVisible", "false");
        window.location.href = "https://google.com";
    };

    const initializeGoogleAnalytics = () => {
        ReactGA.initialize("G-L70M44B3N5");
    };

    useEffect(() => {
        if (localStorage.getItem("cookiesConsentGiven") === "true") {
            initializeGoogleAnalytics();
        }
    }, []);

    return (
        <>
            {isVisible && (
                <div className="flex flex-col bg-[#ade5f6aa] text-center text-neutral-700 items-center p-2">
                    <span><b>majza.eu</b> korzysta z usług Google Analytics, które są narzędziami analitycznymi dostarczanymi przez Google, Inc.</span>
                    <span>Google Analytics używa plików cookie. </span>
                    <NavLink to="/polityka-prywatnosci" className={"hover:underline"}><b>Polityka Prywatności</b></NavLink>
                    <span>Nie chcę, ale muszę poprosić Cię o zgodę na przetwarzanie Twoich danych </span>
                    <div className="flex space-x-4 mt-2">
                        <button className={classNames(RedButtonStyle, "text-sm")} onClick={handleClose}><b>Nie zgadzam się</b></button>
                        <button className={classNames(BlueButtonStyle, "text-sm")} onClick={handleAccept}><b>Zgadzam się na pliki cookies</b></button>
                    </div>
                </div>
            )}
        </>
    );
}
