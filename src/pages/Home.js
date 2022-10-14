import React from "react";
import styles from "./Home.module.css";
import Bar from "../components/Bar";
import Page from "./Page";
const Home = ({ switchTheme }) => {
    return (
        <div className={styles.home}>
           <Bar switchTheme={switchTheme} />
            <Page />
        </div>

    );
}

export default Home;