import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import Title from "../../components/articleItems/Title";
import { NavLink } from "react-router-dom";
import Formula from "../../components/articleItems/Formula";
import GraphImage from "../../components/articleItems/GraphImage";
import TankQ from "../../assets/images/coffee/thank-you.svg";

export default function CoffeePage() {
  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <ArticleWrapper>
          <Title text={"Wsparcie"} type="main-article" />
          <span>Serwis <b>majza.eu</b> to projekt hobbystyczny, który powstał z pasji i zaangażowania w poprawę jakości procesu edukacji matematycznej.</span><br />
          <br /><span>Każda nowa funkcjonalność / kalkulator / artykuł to wiele godzin spędzonych nad kodem.</span><br /><br />
          <span>Koszt utrzymania domeny i serwera to aktualnie ok. <b>200 zł  rocznie.</b></span><br /><br />
          <span>Jeżeli sprawiłem, że zaoszczędziłeś swój czas lub dowiedziałeś się czegoś ciekawego rozważ wsparcie tego projektu za pośrednictwem tego linku: </span><br /><br />
          <div className="text-center"><b><NavLink to="https://buycoffee.to/majza.eu">https://buycoffee.to/majza.eu</NavLink></b></div><br />
          <span>Twoja pomoc pomoże mi pokryć koszty utrzymania domeny oraz serwera, co zapewni stabilność działania strony oraz pozwoli na tworzenie coraz lepszych treści dla Ciebie i innych użytkowników.</span>
          <br /><br />
          <GraphImage size={"smallest"} src={TankQ} alt={"Wykres funkcji tan(q)"} />
          <Formula formula={"\\tan q"} />

        </ArticleWrapper >
      </div>
    </>);
}
