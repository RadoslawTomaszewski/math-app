import { Outlet } from "react-router-dom";
import Title from "../../components/Title/Title";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";


export const MaturaExercisesLayout = () => {
    return (
        <div className="p-3 justify-center flex flex-col items-center">
            <GeneralWrapper>
                <div className="flex flex-col items-center bg-articleColor">
                    <Title text={"Baza zadań maturalnych"} type="main-article" />
                    <Outlet />
                </div>
            </GeneralWrapper>
        </div>
    );
};
