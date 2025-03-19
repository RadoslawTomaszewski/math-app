import Title from "../../components/Title/Title";
import { NavLink } from "react-router-dom";
import Formula from "../../components/Formula/Formula";
import GraphImage from "../../components/imageComponents/GraphImage";
import TankQ from "../../assets/images/coffee/thank-you.svg";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";
import ArticleBorder from "../../components/ArticleBorder/ArticleBorder";
import iKnow_logo from "../../assets/images/coffee/iknow.png";
import NavigateTo from "../../components/NavigateTo/NavigateTo";
import { Button } from "@mui/material";
export default function CoffeePage() {
  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <GeneralWrapper>
<Title text={"Wsparcie"} type="main-article" />
<span>Serwis <b>majza.eu</b> to projekt hobbystyczny, który powstał z pasji i zaangażowania w poprawę jakości procesu edukacji matematycznej.</span><br />
<span>Każda nowa funkcjonalność / kalkulator / artykuł to wiele godzin spędzonych nad kodem.</span><br />
<span>Koszt utrzymania domeny i serwera to aktualnie ok. <b>200 zł  rocznie.</b></span><br />
<br /><span><b>Matematyka to maszyna, która zamienia kawę w teorie</b>. W myśl tej zasady, jeżeli sprawiłem, że zaoszczędziłeś swój czas lub dowiedziałeś się czegoś ciekawego rozważ wsparcie tego projektu naciskając poniższy przycisk. </span><br />
<br />
<div className="text-center"><b><NavLink to="https://buycoffee.to/majza.eu"><GraphImage src="https://buycoffee.to/btn/buycoffeeto-btn-primary.svg" alt={"Postaw kawe"} styles="max-w-[150px]" /></NavLink></b></div><br />
<span>Twoja pomoc pomoże mi pokryć koszty utrzymania domeny oraz serwera, co zapewni stabilność działania strony oraz pozwoli na tworzenie coraz lepszych treści dla Ciebie i innych użytkowników.</span>
<br />
<GraphImage size={"smallest"} src={TankQ} alt={"Wykres funkcji tan(q)"} />
<Formula formula={"\\tan q"} />
<ArticleBorder/>
          <Title text={"Współpraca"} type="main-article" />
          <p>Jeżeli jesteś zainteresowany korepetycjami z matematyki na poziomie:</p>
            <p className="m-2"><b>(1)</b> liceum / technikum poziom podstawowy<br/></p>
            <p className="m-2"><b>(2)</b> liceum / technikum poziom rozszerzony<br/></p>
            <p className="m-2"><b>(3)</b> pierwsze lata studiów inżynierskich (Podstawy Matematyki Wyższej / Algebra Liniowa / Analiza Matematyczna / Matematyka Dyskretna / Grafy i Sieci / Rachunek Prawdopodobieństwa)</p>
            Zapraszam Cię do kontaktu z <NavigateTo to={"https://ceiknow.pl/kontakt/"}>Centrum Edukacji iknow</NavigateTo>, gdzie prowadzę zajęcia online.
          <NavigateTo to={"https://ceiknow.pl/"}><GraphImage size={"smallest"} src={iKnow_logo} alt={"Centrum Edukacji iknow)"} /></NavigateTo>
          
          <p><b>Centrum Edukacji iknow</b> oferuje profesjonalne zajęcia stacjonarnie w Otwocku i Bolszewie oraz online.</p>
          <p><b>(1) BOLSZEWO zajęcia stacjonarne:</b></p>
          <p className="text-center">język polski / język angielski / matematyka
          <p className="text-start"><b>(2) OTWOCK zajęcia stacjonarne:</b> </p>
          <p className="text-center">język angielski / język polski / matematyka / chemia / fizyka</p>
          <p className="text-start">(3) <b>CAŁA POLSKA zajęcia online:</b></p>
          <p className="text-center"> język angielski / język francuski / język hiszpański / język niemiecki / język polski / język rosyjski / matematyka / chemia / biologia / WoS / historia</p></p>
<br/>
          <p>Kontakt telefoniczny: <br/>530 904 180 - Otwock,<br/>790 262 121 - Bolszewo (sekretariat).</p>

          <div className="mt-4 text-center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.location.href = "https://ceiknow.pl/formularz"}
            >
              Wypełnij formularz w celu przygotowania oferty
            </Button>
          </div>



          
        </GeneralWrapper>
      </div>
    </>);
}
