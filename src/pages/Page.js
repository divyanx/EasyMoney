import styles from "./Page.module.css";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import DashBoard from "./DashBoard";
const Page = () => {
    return (
        <main className={styles.main_page}>
            <Routes>
                <Route path={"/dashboard"} element={<DashBoard />} />
                <Route path={"/transactions"} element={<div>Transactions</div>} />
            </Routes>
        </main>
    );
}

export default Page;