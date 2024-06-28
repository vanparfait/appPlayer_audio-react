import React from "react";
import nextIcon from "../../assets/next-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { nextSong } from "../../features/playlist";

const NextButton = () => {
  const playlistValues = useSelector((state) => state.playList);
  const dispatch = useDispatch();

  function handleClick() {
    if (playlistValues.songs) {
      const nextIndex =
        playlistValues.songs.findIndex(
          (obj) => obj.id === playlistValues.currentMusicID
        ) + 1;
      dispatch(nextSong(nextIndex));
    }
  }
  return (
    <button
      onClick={handleClick}
      className="w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center"
    >
      <img src={nextIcon} className="w-5 h-5" alt="next song" />
    </button>
  );
};

export default NextButton;
