import React from "react";
import styles from "./Home.module.css";
import SideBar from "../components/SideBar";
import Page from "./Page";

const Home = ({switchTheme}) => {
    return (
        <div className={styles.home}>
            <SideBar switchTheme={switchTheme}/>
            <Page/>
        </div>

    );
}

export default Home;