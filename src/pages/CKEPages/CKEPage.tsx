import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import Title from "../../components/articleItems/Title";
import ArticleBorder from "../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";
import { CKE8egz, CKElinks2005, CKElinks2015, CKElinks2023, gimegz } from "../../types/ckelinks";


export default function CKEPage() {
  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <ArticleWrapper>
          <div className="flex flex-col items-center bg-articleColor w-full justify-around">
            <Title text="Linki do materiałów CKE" type="main-article" />
            <span>Dobre przygotowanie do egzaminu państwowego z matematyki zasadniczo wiąże się z rozwiązaniem testów z poprzednich lat. W tym miejscu zebrałem przydatne liki do materiałów Centralnej Komisji Egzaminacyjnej</span>
            <div className="text-center w-full max-w-[1000px]">
              <ArticleBorder />
              <Title text="Matura Terminy Główne" type="main-article" />
              <Title text="Formuła 2023:" type="submain-article" />
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2023.maj2023PP}>Maj 2023 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2023.maj2023PR}>Maj 2023 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <p><NavLink to={CKElinks2023.wzoryMatematyczne}><b>Karta ze wzorami</b></NavLink></p>
              <br />

              <Title text="Formuła 2015:" type="submain-article" />
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2023PR}>Maj 2023 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2023PR}>Maj 2023 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2022PR}>Maj 2022 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2022PR}>Maj 2022 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2021PR}>Maj 2021 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2021PR}>Maj 2021 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2020PR}>Maj 2020* Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2020PR}>Maj 2020* Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2019PR}>Maj 2019 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2019PR}>Maj 2019 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2018PR}>Maj 2018 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2018PR}>Maj 2018 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2017PR}>Maj 2017 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2017PR}>Maj 2017 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2016PR}>Maj 2016 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2016PR}>Maj 2016 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2015.maj2015PR}>Maj 2015 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2015.maj2015PR}>Maj 2015 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <p><NavLink to={CKElinks2015.wzoryMatematyczne}><b>Karta ze wzorami</b></NavLink></p>
              <br />
              <Title text="Formuła 2005:" type="submain-article" />
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2020PP}>Maj 2020* Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2020PP}>Maj 2020* Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2019PP}>Maj 2019 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2019PR}>Maj 2019 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2018PP}>Maj 2018 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2018PR}>Maj 2018 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2017PP}>Maj 2017 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2017PR}>Maj 2017 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2016PP}>Maj 2016 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2016PR}>Maj 2016 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2015PP}>Maj 2015 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2015PR}>Maj 2015 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2014PP}>Maj 2014 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2014PR}>Maj 2014 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2013PP}>Maj 2013 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2013PR}>Maj 2013 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2012PP}>Maj 2012 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2012PR}>Maj 2012 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2011PP}>Maj 2011 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2011PR}>Maj 2011 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2010PP}>Maj 2010 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2010PR}>Maj 2010 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2009PP}>Maj 2009 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2009PR}>Maj 2009 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2008PP}>Maj 2008 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2008PR}>Maj 2008 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2007PP}>Maj 2007 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2007PR}>Maj 2007 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2006PP}>Maj 2006 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2006PR}>Maj 2006 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <div className="flex justify-around">
                <p><b><NavLink to={CKElinks2005.maj2005PP}>Maj 2005 Poziom Podstawowy</NavLink></b></p>
                <p><b><NavLink to={CKElinks2005.maj2005PR}>Maj 2005 Poziom Rozszerzony</NavLink></b></p>
              </div>
              <br />
              <span>*egzamin odbył się w czerwcu z powodu pandemii COVID-19</span>
              <ArticleBorder />
              <Title text="Egzamin Ósmoklasisty Terminy Główne" type="main-article" />
              <p><b><NavLink to={CKE8egz.maj2023}>Maj 2023</NavLink></b></p>
              <p><b><NavLink to={CKE8egz.maj2022}>Maj 2022</NavLink></b></p>
              <p><b><NavLink to={CKE8egz.maj2021}>Maj 2021</NavLink></b></p>
              <p><b><NavLink to={CKE8egz.kwiecien2020}>Kwiecień 2020</NavLink></b></p>
              <p><b><NavLink to={CKE8egz.kwiecien2019}>Kwiecień 2020</NavLink></b></p>
              <ArticleBorder />
            </div>
            <Title text="Egzamin Gimnazjalny Terminy Główne" type="main-article" />
            <p><b><NavLink to={gimegz.kwiecien2019}>Kwiecień 2019</NavLink></b></p>
            <p><b><NavLink to={gimegz.kwiecien2018}>Kwiecień 2018</NavLink></b></p>
            <p><b><NavLink to={gimegz.kwiecien2017}>Kwiecień 2017</NavLink></b></p>
            <p><b><NavLink to={gimegz.kwiecien2016}>Kwiecień 2016</NavLink></b></p>
            <p><b><NavLink to={gimegz.kwiecien2015}>Kwiecień 2015</NavLink></b></p>
          </div>
        </ArticleWrapper >
      </div>
    </>);
}
