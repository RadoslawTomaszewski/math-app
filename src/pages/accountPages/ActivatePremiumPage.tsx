import Title from "../../components/Title/Title";
import { ArticleWrapper } from "../../components/Wrappers/ArticleWrapper";
import ActivatePremiumForm from "../../components/forms/ActivatePremiumForm";


export default function ActivatePremiumPage() {

    return (
        <div className="p-3 justify-center flex flex-col items-center">
            <ArticleWrapper>
                <div className="flex flex-col items-center bg-articleColor">
                    <Title text={"Aktywacja konta premium"} type="main-article" />
                    <ActivatePremiumForm />
                </div>
            </ArticleWrapper>
        </div>
    );
}
