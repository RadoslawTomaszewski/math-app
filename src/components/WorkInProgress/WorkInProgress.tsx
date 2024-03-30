import { FC } from "react";
import meme from "../../assets/images/work-in-progress/meme.jpg";

const WorkInProgress: FC = () => {
  return (
    <>
      <div className="p-5 flex flex-col justify-center items-center">
        <div>Strona, kórej szukasz nie istnieje!</div>
        <img src={meme} className="w-[30%] p-4" alt="work in progress" />
        Work in progress :)
      </div>
    </>
  );
};

export default WorkInProgress;
