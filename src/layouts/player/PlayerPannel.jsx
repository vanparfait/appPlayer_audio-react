import React from "react";
import { useSelector } from "react-redux";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import TooglePlayButton from "./TooglePlayButton";
import Progress from "./Progress";

const PlayerPannel = () => {
  const playListValues = useSelector((state) => state.playList);
  const actualSong = playListValues.songs?.find(
    (obj) => obj.id === playListValues.currentMusicID
  );
  console.log(actualSong);

  return (
    <div className="fixed w-full bottom-0 rounded border-t-2 border-gray-800 p-6 bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="max-w-[800px] mx-auto mb-2">
        <p className="text-xl text-slate-800 font-semibold">
          {" "}
          {playListValues.songs && actualSong.title}
        </p>
        <div className="flex justify-between">
          <p className="text-lg text-gray-900">
            {" "}
            {playListValues.songs && actualSong.artist}{" "}
          </p>
          <p className="text-lg text-gray-900">
            {playListValues.songs?.findIndex(
              (obj) => obj.id === playListValues.currentMusicID
            ) + 1}{" "}
            / {playListValues.songs?.length}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <PreviousButton />

        <TooglePlayButton />
        <NextButton />
      </div>
      <Progress />
    </div>
  );
};

export default PlayerPannel;
