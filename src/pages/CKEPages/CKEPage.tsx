import Title from "../../components/Title/Title";
import ArticleBorder from "../../components/ArticleBorder/ArticleBorder";
import { CKE8egz, CKElinks2005, CKElinks2015, CKElinks2023, gimegz } from "../../data/ckelinks";
import tablice2005 from "../../assets/pdf/tablice_2005.pdf";
import sampleCard from "../../assets/images/CKE/karta_wzorow_2005.png";
import sampleCard2 from "../../assets/images/CKE/karta_wzorow_2015.png";
import sampleCard3 from "../../assets/images/CKE/karta_wzorow_2023.png";
import GraphImage from "../../components/imageComponents/GraphImage";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";
import NavigateToButton from "../../components/NavigateTo/NavigateToButton";
import ArticleBorderGray from "../../components/ArticleBorder/ArticleBorderGray";

export default function CKEPage() {
  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <GeneralWrapper>
          <div className="flex flex-col items-center bg-articleColor w-full justify-around">
            <Title text="Linki do materiałów CKE" type="main-article" />
            <span className="w-full max-w-[800px]">Dobre przygotowanie do egzaminu państwowego z matematyki zasadniczo wiąże się z rozwiązaniem testów z poprzednich lat. W tym miejscu zebrałem przydatne liki do materiałów Centralnej Komisji Egzaminacyjnej.</span>
            <div className="text-center w-full max-w-[700px]">
              <ArticleBorder />
              <Title text="Matura Terminy Główne" type="main-article" />
              <div>
                <p className="flex w-full justify-center text-xl"><b>Formuła 2023</b></p>
                <NavigateToButton to={CKElinks2023.wzoryMatematyczne}>
                  <GraphImage size={"smallest"} src={sampleCard3} alt={"Karta wzorów matematycznych 2023"} />
                  <b>Karta ze wzorami</b>
                </NavigateToButton>
                <p><b>Poziom podstawowy:</b></p>
                <div className="flex flex-wrap justify-center">
                  <p><b><NavigateToButton to={CKElinks2023.maj2024PP}>Maj 2024</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={CKElinks2023.maj2023PP}>Maj 2023</NavigateToButton></b></p>
                </div>
                <p><b>Poziom rozszerzony:</b></p>
                <div className="flex flex-wrap justify-center">
                  <p><b><NavigateToButton to={CKElinks2023.maj2024PR}>Maj 2024</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={CKElinks2023.maj2023PR}>Maj 2023</NavigateToButton></b></p>
                </div>
              </div>
              <ArticleBorderGray />
              <div>
                <p className="flex w-full justify-center text-xl"><b>Formuła 2015</b></p>
                <p><NavigateToButton to={CKElinks2015.wzoryMatematyczne}>
                  <GraphImage size={"smallest"} src={sampleCard2} alt={"Karta wzorów matematycznych 2015"} />
                  <b>Karta ze wzorami</b>
                </NavigateToButton></p>
              </div>
              <p><b>Poziom podstawowy:</b></p>
              <div className="flex flex-wrap justify-center">
                <p><b><NavigateToButton to={CKElinks2015.maj2024PP}>Maj 2024</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2023PP}>Maj 2023</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2022PP}>Maj 2022</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2021PP}>Maj 2021</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2020PP}>Maj 2020*</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2019PP}>Maj 2019</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2018PP}>Maj 2018</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2017PP}>Maj 2017</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2016PP}>Maj 2016</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2015PP}>Maj 2015</NavigateToButton></b></p>
              </div>
              <p><b>Poziom rozszerzony:</b></p>
              <div className="flex flex-wrap justify-center">
                <p><b><NavigateToButton to={CKElinks2015.maj2024PR}>Maj 2024</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2023PR}>Maj 2023</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2022PR}>Maj 2022</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2021PR}>Maj 2021</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2020PR}>Maj 2020*</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2019PR}>Maj 2019</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2018PR}>Maj 2018</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2017PR}>Maj 2017</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2016PR}>Maj 2016</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2015.maj2015PR}>Maj 2015</NavigateToButton></b></p>
              </div>
              <span>*egzamin odbył się w czerwcu z powodu pandemii COVID-19</span>
              <ArticleBorderGray />
              <p className="flex w-full justify-center text-xl"><b>Formuła 2005</b></p>
              <p><NavigateToButton to={tablice2005}>
                <GraphImage size={"smallest"} src={sampleCard} alt={"Karta wzorów matematycznych 2005"} />
                <b>Karta ze wzorami</b>
              </NavigateToButton></p>
              <p><b>Poziom podstawowy:</b></p>
              <div className="flex flex-wrap justify-center">
                <p><b><NavigateToButton to={CKElinks2005.maj2020PP}>Maj 2020*</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2019PP}>Maj 2019</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2018PP}>Maj 2018</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2017PP}>Maj 2017</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2016PP}>Maj 2016</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2015PP}>Maj 2015</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2014PP}>Maj 2014</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2013PP}>Maj 2013</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2012PP}>Maj 2012</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2011PP}>Maj 2011</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2010PP}>Maj 2010</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2009PP}>Maj 2009</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2008PP}>Maj 2008</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2007PP}>Maj 2007</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2006PP}>Maj 2006</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2005PP}>Maj 2005</NavigateToButton></b></p>
              </div>
              <p><b>Poziom rozszerzony:</b></p>
              <div className="flex flex-wrap justify-center">
                <p><b><NavigateToButton to={CKElinks2005.maj2020PR}>Maj 2020*</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2019PR}>Maj 2019</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2018PR}>Maj 2018</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2017PR}>Maj 2017</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2016PR}>Maj 2016</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2015PR}>Maj 2015</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2014PR}>Maj 2014</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2013PR}>Maj 2013</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2012PR}>Maj 2012</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2011PR}>Maj 2011</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2010PR}>Maj 2010</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2009PR}>Maj 2009</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2008PR}>Maj 2008</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2007PR}>Maj 2007</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2006PR}>Maj 2006</NavigateToButton></b></p>
                <p><b><NavigateToButton to={CKElinks2005.maj2005PR}>Maj 2005</NavigateToButton></b></p>
              </div>
              <span>*egzamin odbył się w czerwcu z powodu pandemii COVID-19</span>
              <ArticleBorder />
              <div className="text-center w-full max-w-[1000px]">
                <Title text="Egzamin Ósmoklasisty Terminy Główne" type="main-article" />
                <div className="flex flex-wrap justify-center">
                  <p><b><NavigateToButton to={CKE8egz.maj2023}>Maj 2023</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={CKE8egz.maj2022}>Maj 2022</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={CKE8egz.maj2021}>Maj 2021</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={CKE8egz.kwiecien2020}>Kwiecień 2020</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={CKE8egz.kwiecien2019}>Kwiecień 2019</NavigateToButton></b></p>
                </div>
                <ArticleBorder />
              </div>
              <div className="text-center w-full max-w-[1000px]">
                <Title text="Egzamin Gimnazjalny Terminy Główne" type="main-article" />
                <Title text="Część Matematyczno-Przyrodnicza" type="submain-article" />
                <div className="flex flex-wrap justify-center">
                  <p><b><NavigateToButton to={gimegz.kwiecien2019}>Kwiecień 2019</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={gimegz.kwiecien2018}>Kwiecień 2018</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={gimegz.kwiecien2017}>Kwiecień 2017</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={gimegz.kwiecien2016}>Kwiecień 2016</NavigateToButton></b></p>
                  <p><b><NavigateToButton to={gimegz.kwiecien2015}>Kwiecień 2015</NavigateToButton></b></p>
                </div>
              </div>
            </div>
          </div>
        </GeneralWrapper >
      </div >
    </>
  );
}
