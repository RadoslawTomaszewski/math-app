import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Proof from "../../../../components/articleItems/Proof";
import { NavLink } from "react-router-dom";

const LogarithmContent: FC = () => {
  return (
    <>
      <Title text={"Logarytmy"} type={"main-article"} />
      <p>
        <b>Logarytm</b> to wynik działania odwrotnego do potęgowania definiowany jako wykładnik potęgi, do jakiej należy podnieść podstawę aby otrzymać liczbę logarytmowaną.
      </p>
      <br />
      <p>Oznaczenia:</p>
      <Formula formula={`\\log_ab=c`} />
      <p>Założenia:</p>
      <Formula formula={`a > 0 \\ \\land \\ a \\neq 1`} />
      <Formula formula={`b > 0`} />
      <LegendParagraph
        type="short"
        notation="a"
        explanation="podstawa logarytmu"
      />
      <LegendParagraph
        type="top"
        notation="b"
        explanation="liczba logarytmowana (antylogarytm)"
      />
      <LegendParagraph type="short" notation="c" explanation="logarytm (wynik logarytmu)" />
      <br />
      <p>Definicja:</p>
      <Formula formula={`\\log_ab=x\\Leftrightarrow a^x=b`} />
      <br />
      <ArticleBorder />
      <Title text="Logarytm dziesiętny" type="submain-article" />
      <p><b>Logarytm dziesiętny</b> to logarytm, którego podstawa jest równa liczbie 10.</p>
      <Formula formula={`\\log_{}x=\\log_{10}x`} />
      <p> Popularne jest pomijanie w zapisie podstawy takiej potęgi i traktowanie liczby 10 jako "domyślnej" podstawy logarytmu </p>
      <ArticleBorder />
      <Title text="Logarytm naturalny" type="submain-article" />
      <p><b>Logarytm naturalny</b> to logarytm, którego podstawa jest równa <NavLink to="../liczba-e">liczbie eulera</NavLink></p>
      <Formula formula={`\\ln_{}x=\\log_{e}x`} />
      <ArticleBorder />
      <Title text={"Podstawowe wzory działań na logarytmach"} type="submain-article" />
      <p>Prawdziwe są równości:</p>
      <Formula formula={`\\log_{a}1=0`} />
      <Formula formula={`\\log_{a}a=1`} />
      <Formula formula={`\\log_{a}a^k=k`} />
      <Formula formula={`\\log_{a}x^k=k \\cdot \\log_{a}x`} />
      <p><b>Logarytm iloczynu</b></p>
      <Formula formula={`\\log_{a}(x \\cdot y)=\\log_{a}x+\\log_{a}y`} />
      <p><b>Logarytm ilorazu</b></p>
      <Formula formula={`\\log_{a}(x : y)=\\log_{a}x-\\log_{a}y`} />
      <p><b>Wzór na zamianę podstawy logarytmu</b></p>
      <Formula formula={`\\log_{a}x = \\frac{\\log_{b}x}{\\log_{b}a}`} />
      <p>Szczególny przypadek:</p>
      <Formula formula={`\\log_{a}x = \\frac{1}{\\log_{x}a}`} />
    </>
  );
};

export default LogarithmContent;
