import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSong, getMusicsData } from "../features/playlist";

const PlayList = () => {
  const dispatch = useDispatch();
  const playListValues = useSelector((state) => state.playList);
  console.log(playListValues);

  if (!playListValues.songs) {
    dispatch(getMusicsData());
  }
  console.log(playListValues);

  return (
    <ul className="mt-4 pb-[300px]">
      {playListValues?.songs?.length &&
        playListValues.songs.map((song) => (
          <li
            onClick={() => dispatch(changeSong(song.id))}
            key={song.id}
            className="p-2 border-2 font-semibold bg-indigo-100 hover:bg-indigo-200 text-slate-800 mb-3 rounded cursor-pointer"
          >
            <span>{song.title}</span> - <span>{song.artist}</span>
          </li>
        ))}
    </ul>
  );
};

export default PlayList;
