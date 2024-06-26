import React from "react";
import pauseIcon from "../../assets/pause-icon.svg";
import playIcon from "../../assets/play-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toogleLecture } from "../../features/playlist";

const TooglePlayButton = () => {
  const playListValues = useSelector((state) => state.playList);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toogleLecture())}
      className="bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center outline-none"
    >
      <img
        src={playListValues.play ? pauseIcon : playIcon}
        alt="toogleButton"
        className="w-20 h-20"
      />
    </button>
  );
};

export default TooglePlayButton;
