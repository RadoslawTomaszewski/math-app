import Title from "../../components/Title/Title";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";
import ActivatePremiumForm from "../../components/forms/ActivatePremiumForm";


export default function ActivatePremiumPage() {

    return (
        <div className="p-3 justify-center flex flex-col items-center">
            <GeneralWrapper>
                <div className="flex flex-col items-center bg-articleColor">
                    <Title text={"Aktywacja konta premium"} type="main-article" />
                    <ActivatePremiumForm />
                </div>
            </GeneralWrapper>
        </div>
    );
}
