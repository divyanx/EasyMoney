import styles from "./Page.module.css";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import DashBoard from "./DashBoard";
import PageNotAvailable from "./PageNotAvailable";
const Page = () => {
    return (
        <main className={styles.main_page}>
            <Routes>
                <Route path={"/dashboard"} element={<DashBoard />} />
                <Route path={"/*"} element={<PageNotAvailable/>} />
            </Routes>
        </main>
    );
}

export default Page;