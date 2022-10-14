import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Bar.module.css";
import { Gauge, Money, Share, CreditCard, UserList, Gear } from "phosphor-react";
import ThemeSwitcher from "./ThemeSwitcher";
const Bar = ({ switchTheme }) => {
    return (
        <nav className={styles.bar}>
            <ul className={styles.navs}>
                <NavLink to="/dashboard" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    <Gauge size={24} /> Dashboard
                </NavLink>

                <NavLink to="/transactions" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    <Money size={24} /> Transactions
                </NavLink>

                <NavLink to="/transfers" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    <Share size={24} /> Transfers
                </NavLink>

                <NavLink to="/cards" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    <CreditCard size={24} /> Cards
                </NavLink>

                <NavLink to="/accounts" className={({ isActive }) =>
                    isActive ? styles.activeNav : styles.inactiveNav
                }>
                    <UserList size={24} /> Accounts
                </NavLink>
            </ul>
            <div className={styles.bottomsect}>
                <button className={styles.settings}><Gear size={24} weight="fill" /></button>

                <div className={styles.switcherCont}>
                    <ThemeSwitcher switchTheme={switchTheme} />
                </div>
            </div>
        </nav>
    );
}

export default Bar;