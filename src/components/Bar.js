import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Bar.module.css";

const Bar = ({ switchTheme }) => {
    return (
        <nav className={styles.bar}>
            <ul className={styles.navs}>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    Dashboard
                </NavLink>

                <NavLink to="/transactions" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    Transactions
                </NavLink>

                <NavLink to="/transfers" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    Transfers
                </NavLink>

                <NavLink to="/cards" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    Cards
                </NavLink>

                <NavLink to="/accounts" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    Accounts
                </NavLink>
            </ul>
        </nav>
    );
}

export default Bar;