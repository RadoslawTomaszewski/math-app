import { Outlet } from "react-router-dom";
import Title from "../../components/Title/Title";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";
import NavigateTo from "../../components/NavigateTo/NavigateTo";


export const ForumLayout = () => {
    return (
        <div className="p-3 justify-center flex flex-col items-center">
            <GeneralWrapper>
                <div className="flex flex-col items-center bg-articleColor">
                    <NavigateTo to="/forum"><Title text={"Forum majza.eu"} type="main-article" /></NavigateTo>
                    <Outlet />
                </div>
            </GeneralWrapper>
        </div>
    );
};
