import Title from "../../components/Title/Title";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
    return (
        <div className="p-3 justify-center flex flex-col items-center">
            <GeneralWrapper>
            <Title text={"Polityka Prywatności"} type="main-article" />
               <PrivacyPolicyContent/>
            </GeneralWrapper>
        </div >
    );
}
