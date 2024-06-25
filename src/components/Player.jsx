import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Player = () => {
  //const playerValues = useSelector((state) => state.player);
  const playListValues = useSelector((state) => state.playList);
  console.log(playListValues);
  const dispatch = useDispatch();
  const audioRef = useRef();

  return (
    <audio
      //   controls
      id="audio-player"
      ref={audioRef}
      src={
        playListValues?.songs?.find(
          (obj) => obj.id === playListValues.currentMusicID
        ).url
      }
    ></audio>
  );
};

export default Player;
