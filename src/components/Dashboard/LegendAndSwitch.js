import styles from "./LegendAndSwitch.module.css";
import {useState} from "react";
const LegendAndSwitch = ({setViewMode}) => {
    const [mode, setMode] = useState("year");
    const buttonClickHandler = (mode) => {
        setMode(mode);
        setViewMode(mode);
    }
    return (
        <div className={styles.legend_switch}>
            <div className={styles.legendcont}>
                <h3>Spending over time</h3>
                <div className={styles.legend_item}>
                    <div className={styles.legendCol1}></div>
                    <span>EFTs</span>
                </div>
                <div className={styles.legend_item}>
                    <div className={styles.legendCol2}></div>
                    <span>Card Payments</span>
                </div>
                <div className={styles.legend_item}>
                    <div className={styles.legendCol3}></div>
                    <span>International wires</span>
                </div>
            </div>
            <div className={styles.switchcont}>
                <button className={`${styles.button1} ${mode==="year" ? styles.activebtn : ""}`} onClick={()=>buttonClickHandler("year")}>12 months</button>
                <button className={`${styles.button2} ${mode==="month" ?  styles.activebtn : ""}`} onClick={()=>buttonClickHandler("month")}>30 days</button>
                <button className={`${styles.button3} ${mode==="week" ?  styles.activebtn : ""}`} onClick={()=>buttonClickHandler("week")}>7 days</button>
            </div>
        </div>
    );
};

export default LegendAndSwitch;