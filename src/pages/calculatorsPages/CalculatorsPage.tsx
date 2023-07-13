import { NavLink } from "react-router-dom";
import Title from "../../utilities/Title";

export default function CalculatorsPage() {
  return (
    <div className="p-5 justify-center flex">
      <div className="flex flex-col items-start p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Przeliczniki"} size={"H2"} />
        <NavLink to="kalkulator-dlugosci">
          <Title text={"Przelicznik jednostek długości"} size={"H3"} />
        </NavLink>
        <NavLink to="kalkulator-powierzchni">
          <Title text={"Przelicznik jednostek powierzchni"} size={"H3"} />
        </NavLink>
        <NavLink to="kalkulator-objetosci">
          <Title text={"Przelicznik jednostek objętości"} size={"H3"} />
        </NavLink>
        <NavLink to="kalkulator-masy">
          <Title text={"Przelicznik jednostek masy"} size={"H3"} />
        </NavLink>
        <NavLink to="kalkulator-czasu">
          <Title text={"Przelicznik jednostek czasu"} size={"H3"} />
        </NavLink>
        <NavLink to="kalkulator-predkosci">
          <Title text={"Przelicznik jednostek prędkości"} size={"H3"} />
        </NavLink>
        <NavLink to="kalkulator-informacji">
          <Title text={"Przelicznik jednostek informacji"} size={"H3"} />
        </NavLink>
      </div>
    </div>
  );
}
