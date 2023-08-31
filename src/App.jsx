import { SearchBar } from "./components/SearchBar";
import { VideoList } from "./components/VideoList";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <SearchBar />
        <VideoPlayer />
        <VideoList />
      </div>
    </main>
  );
}

export default App;
