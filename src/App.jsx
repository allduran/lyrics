import './App.css';
import SearchLyrics from './components/SearchLyrics';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  return (
    <div className="App">
      <ToggleSwitch />
      <h1>Song Lyrics Searcher</h1>
      <SearchLyrics />
    </div>
  );
}

export default App;
