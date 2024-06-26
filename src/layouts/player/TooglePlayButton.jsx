import React from "react";
import pauseIcon from "../../assets/pause-icon.svg";
import playIcon from "../../assets/play-icon.svg";
import { useSelector } from "react-redux";

const TooglePlayButton = () => {
  //const playListValues = useSelector((state) => state.playList);
  const playListValues = useSelector((state) => state.playList);

  return (
    <button className="bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center outline-none">
      <img
        src={playListValues.play ? pauseIcon : playIcon}
        alt="toogleButton"
        className="w-20 h-20"
      />
    </button>
  );
};

export default TooglePlayButton;
