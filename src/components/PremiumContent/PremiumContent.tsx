import { FC, ReactNode } from "react";
import usePremiumStatus from "../../hooks/usePremiumStatus";
import PageLoader from "../Loader/PageLoader";
import BrandPremium from "../../assets/images/majza.eu_logo_premium.png";
import GraphImage from "../imageComponents/GraphImage";
import NavigateTo from "../NavigateTo/NavigateTo";

interface PremiumContentProps {
    children: ReactNode;
}

const PremiumContent: FC<PremiumContentProps> = ({ children }) => {
    const { isPremium, loading } = usePremiumStatus();

    if (loading) {
        return <PageLoader />;
    }

    if (!loading && isPremium) {
        return <>{children}</>;
    }

    return (
        <div className="border-2 border-[#000000] bg-[#ffffff] my-2 rounded text-center p-3">
            <GraphImage size={"logo"} src={BrandPremium} alt={"Logo majza.eu premium"} /><br />
            <NavigateTo to="/premium">Dołącz do użytkowników premium</NavigateTo>, aby zobaczyć zawartość.
            <br /><p><b>Konto premium jest w pełni darmowe!</b></p>
        </div>
    );
};

export default PremiumContent;
