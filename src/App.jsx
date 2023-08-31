import { SearchBar } from "./components/SearchBar";
import { VideoList } from "./components/VideoList";

function App() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <SearchBar />
        <VideoList />
      </div>
    </main>
  );
}

export default App;
