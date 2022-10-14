import useLocalStorage from "use-local-storage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';

function App() {
  const defaultDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
  ).matches;

  const [theme, setTheme] = useLocalStorage(
      "theme",
      defaultDark ? "dark" : "light"
  );
  const switchTheme = (theme) => {
      console.log(theme);
      setTheme(theme);
  };

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home switchTheme={switchTheme}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
