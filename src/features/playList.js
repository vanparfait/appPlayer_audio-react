import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: undefined,
  play: false,
  currentMusicID: undefined,
};

export const playListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addBaseSongs: (state, action) => {
      state.songs = action.payload;
      state.currentMusicID = action.payload[0].id;
    },
    toogleLecture: (state, action) => {
      state.play = !state.play;
    },
    nextSong: (state, action) => {
      if (action.payload === state.songs.length) {
        state.currentMusicID = state.songs[0].id;
      } else {
        state.currentMusicID = state.songs[action.payload].id;
      }
    },
    previousSong: (state, action) => {
      if (action.payload < 0) {
        state.currentMusicID = state.songs[state.songs.length - 1].id;
      } else {
        state.currentMusicID = state.songs[action.payload].id;
      }
    },
    changeSong: (state, action) => {
      state.currentMusicID = action.payload;
    },
  },
});

export function getMusicsData(action) {
  return function (dispatch, getState) {
    fetch("/data/playlist.json")
      .then((data) => data.json())
      .then((data) => dispatch(addBaseSongs(data.playlist)));
  };
}

export default playListSlice.reducer;
export const {
  addBaseSongs,
  toogleLecture,
  nextSong,
  previousSong,
  changeSong,
} = playListSlice.actions;
