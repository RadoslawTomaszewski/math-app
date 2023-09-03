import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
// import Formula from "../../../../components/articleItems/Formula";
// import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
// import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
// import Proof from "../../../../components/articleItems/Proof";

const RootContent: FC = () => {
  const rootProof = ['2 \\cdot 2', '2 \\cdot S(S(0))', '2 \\cdot S(0) + 2', '(2 \\cdot 0 + 2) + 2', '(0+2)+2', '2+2', '4']

  return (
    <>
      <Title text={"Pierwiastkowanie"} type={"main-article"} />
    </>
  );
};

export default RootContent;
