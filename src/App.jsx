import "./App.css";
import SearchLyrics from "./components/SearchLyrics";
import ToggleSwitch from "./components/ToggleSwitch";
import ToggleLanguage from "./components/ToggleLanguage";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <div className="toggles">
          <ToggleSwitch />
          <ToggleLanguage />
        </div>
        <Header />
        <SearchLyrics />
      </div>
    </LanguageProvider>
  );
}

export default App;
