import PlayList from "./components/PlayList";
import Player from "./components/Player";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-800 pt-20 px-4">
        <div className="max-w-xl mx-auto">
          <Player />
          <h1 className="text-slate-100 text-2xl">PlayerMania - your songs</h1>
          <PlayList />
        </div>
      </div>
      {/* PlayerPannel */}
    </>
  );
}

export default App;
