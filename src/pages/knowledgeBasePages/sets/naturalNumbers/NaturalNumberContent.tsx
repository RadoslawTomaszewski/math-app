import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import MathExpression from "../../../../components/articleItems/MathExpression";
import { useMediaQuery } from "@mui/material";

const NaturalNumberContent: FC = () => {
  const isWideScreen = useMediaQuery("(min-width: 829px)");

  return (
    <>
      <Title text={"Liczby Naturalne"} type={"main-article"} />
      <p>
        <b>Liczby naturalne</b> są podstawowym zestawem liczb w matematyce. Mogą
        służyć określaniu liczności lub ustalaniu kolejności.
      </p>
      <ArticleBorder />
      <p>
        W skład zbioru liczb naturalnych wchodzą wszystkie liczby całkowite
        nieujemne (wariant pierwszy) lub wszystkie liczby całkowite dodatnie
        (wariant drugi).
      </p>
      <div className="my-2 grid sm:grid-cols-2">
        <div>
          <Formula formula="\mathbb{N}=\{0,1,2...\}" />
          <p className="text-center">wariant pierwszy</p>
        </div>
        <div>
          <Formula formula="\mathbb{N}=\{1,2,3...\}" />
          <p className="text-center">wariant drugi</p>
        </div>
      </div>
      <p>
        Oba powyższe zapisy są prawidłowe, ponieważ w matematyce nie ma
        restrykcyjnych reguł uznających lub odrzucających liczbę zero jako
        naturalną.
      </p>
      <br />
      <p>
        Autor zadania zawsze powinien ściśle określić, który z wariantów uznaje
        za zbiór liczb naturalnych.
      </p>
      <ArticleBorder />
      <p>
        Aby uniknąć nieporozumień związanych z definiowaniem zera jako liczby
        naturalnej w tym serwisie zawsze zbiór liczb naturalnych będzie
        obejmował wartości nieujemne:
      </p>
      <Formula formula="\mathbb{N}=\{0,1,2...\}" />
      <p>
        Natomiast w przypadku konieczności posługiwania się zbiorem liczb
        naturalnych z wyłączeniem zera będzie używany zapis:
      </p>
      <Formula formula="\mathbb{N_+}=\{1,2,3...\}" />
      <ArticleBorder />
      <Title
        text="Aksjomaty Peana zbioru liczb naturalnych"
        type="submain-article"
      />
      <p>
        <b>Aksjomat 1.</b> Φ jest liczbą naturalną
      </p>
      <Formula formula="Φ\in\mathbb{N}" />
      <p>
        <b>Aksjomat 2.</b> Dla każdej liczby naturalnej n istnieje dokładnie
        jedna liczba naturalna S(n), zwana jej następnikiem.
      </p>
      <Formula formula="\forall_{n \in \mathbb{N}} \quad \exists ! \quad  S(n) \in \mathbb{N}" />
      <p>
        <b>Aksjomat 3.</b> Φ nie jest następnikiem żadnej liczby naturalnej.
      </p>
      <Formula formula="\forall_{n \in \mathbb{N}} \quad S(n) \ne Φ " />
      <p>
        <b>Aksjomat 4.</b> Różne liczby naturalne mają różne następniki.
      </p>
      <Formula formula="\forall_{n,m \in \mathbb{N}} \quad n \ne m \Rightarrow S(n) \ne S(m) " />
      <p>
        <b>Aksjomat 5. Aksjomat indukcji.</b>&nbsp;Niech A będzie podzbiorem{" "}
        liczb naturalnych o własnościach:
      </p>
      <p>1) A zawiera element Φ</p>
      <p>
        2) Jeżeli A zawiera jakąś liczbę naturalną, to zawiera też jej następnik
      </p>
      <p className="flex">
        wówczas A jest całym zbiorem&nbsp;
        <MathExpression expression="\mathbb{N}" />.
      </p>
      {isWideScreen ? (
        <Formula formula="\forall_{A \subset \mathbb{N}} \quad [Φ \in A \quad \land \quad \forall_{n \in \mathbb{N}} \quad n \in A \Rightarrow S(n) \in A] \quad \Rightarrow \quad A=\mathbb{N} " />
      ) : (
        <>
          <Formula formula="\forall_{A \subset \mathbb{N}} \quad [Φ \in A \quad \land" />
          <Formula formula="\forall_{n \in \mathbb{N}} \quad n \in A \Rightarrow S(n) \in A]" />
          <Formula formula="\Rightarrow \quad A=\mathbb{N} " />
        </>
      )}
      <br />
      <p>
        Za element Φ można podstawić 0 lub 1 w zależności od stosowania wariantu
        definicji zbioru.
      </p>
    </>
  );
};

export default NaturalNumberContent;
