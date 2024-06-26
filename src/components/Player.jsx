import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillDurationVariable, updateProgress } from "../features/progress";

const Player = () => {
  //const playerValues = useSelector((state) => state.player);
  const playListValues = useSelector((state) => state.playList);
  console.log(playListValues);
  const dispatch = useDispatch();
  const audioRef = useRef();
  //audioRef.current =
  //console.log(audioRef);

  function handleLoadedData(e) {
    if (playListValues.songs) {
      dispatch(
        fillDurationVariable({
          currentTime: e.target.currentTime,
          totalDuration: e.target.duration,
        })
      );
    }
  }

  function handleTimeUpdate(e) {
    dispatch(updateProgress(e.target.currentTime));
  }

  return (
    <audio
      controls
      //id="audio-player"
      ref={audioRef}
      src={
        playListValues?.songs?.find(
          (obj) => obj.id === playListValues.currentMusicID
        ).url
      }
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
    ></audio>
  );
};

export default Player;
