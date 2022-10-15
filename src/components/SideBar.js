import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
import { Gauge, Money, Share, CreditCard, UserList, Gear } from "phosphor-react";
import ThemeSwitcher from "./ThemeSwitcher";
const SideBar = ({ switchTheme }) => {
    return (
        <nav className={styles.bar}>
            <div>
                <div className={styles.user}>
                    <div className={styles.user_img}>
                        <img className={styles.userimg} src="https://media-exp1.licdn.com/dms/image/C5603AQGfc5x-X5Arvg/profile-displayphoto-shrink_800_800/0/1616683699815?e=1671062400&v=beta&t=rJOGOPEBdlU5m_z-hvWaGycG37G_bZBoqAjxo6Xdi7M" alt="user" />
                    </div>
                    <div className={styles.user_name}>
                        <p>Divyansh</p>
                        <p>Software Engineer</p>
                    </div>

                </div>
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
            </div>
            <div className={styles.bottomsect}>
                <button className={styles.settings}><Gear size={24} weight="fill" /></button>

                <div className={styles.switcherCont}>
                    <ThemeSwitcher switchTheme={switchTheme} />
                </div>
            </div>
        </nav>
    );
}

export default SideBar;