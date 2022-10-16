import useLocalStorage from "use-local-storage";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
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

    //if path is / redirect to /dashboard


    return (
        <div className="App" data-theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Navigate to={"/dashboard"}/>}/>
                    <Route path="/*" element={<Home switchTheme={switchTheme}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
