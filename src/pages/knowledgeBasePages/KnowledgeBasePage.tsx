import Title from "../../utilities/Title";
import { NavLink } from "react-router-dom";

export default function KnowledgeBasePage() {
  return (
    <div className="p-5 justify-center flex">
      <div className="flex flex-col items-start p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Funkcje"} size={"H2"} />
        <NavLink to="funkcja-liniowa">
          <Title text={"Funkcja liniowa"} size={"H3"} />
        </NavLink>
      </div>
    </div>
  );
}
