import React from "react";
import prevIcon from "../../assets/prev-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { previousSong } from "../../features/playlist";

const PreviousButton = () => {
  const playlistValues = useSelector((state) => state.playList);
  const dispatch = useDispatch();

  function handleClick() {
    if (playlistValues.songs) {
      const previousIndex =
        playlistValues.songs.findIndex(
          (obj) => obj.id === playlistValues.currentMusicID
        ) - 1;
      dispatch(previousSong(previousIndex));
    }
  }
  return (
    <button
      onClick={handleClick}
      className="w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center"
    >
      <img src={prevIcon} className="w-5 h-5" alt="previous song" />
    </button>
  );
};

export default PreviousButton;
