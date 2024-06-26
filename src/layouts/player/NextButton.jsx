import React from "react";
import nextIcon from "../../assets/next-icon.svg";

const NextButton = () => {
  return (
    <button className="w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center">
      <img src={nextIcon} className="w-5 h-5" alt="next song" />
    </button>
  );
};

export default NextButton;
