import useLocalStorage from "use-local-storage";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = (props) => {
    //  get theme from store
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    return (
        <div className={styles["switch"]}>
            <input
                type="checkbox"
                className={styles["switch__input"]}
                id="Switch"
                defaultChecked={theme === "light"}
                onChange={(e) => {
                    setTheme(e.target.checked ? "light" : "dark");
                    props.switchTheme(e.target.checked ? "light" : "dark");
                }}
            />
            <label className={styles["switch__label"]} htmlFor="Switch">
                <span className={styles["switch__indicator"]}></span>
                <span className={styles["switch__decoration"]}></span>
            </label>
        </div>
    );
};

export default ThemeSwitcher;
