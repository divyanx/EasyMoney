import {useEffect, useState} from "react";
import styles from "./Bar.module.css";
const Bar = ({values, totalHeightVal, label, id}) => {
    const colors = [ "var(--accent-quaternary)", "var(--accent-tertiary)", "var(--accent-secondary)"]
    const [vals, setVals] = useState(values);
    const [totalHeight, setTotalHeight] = useState(totalHeightVal);
    const [heights, setHeights] = useState([]);
    useEffect(() => {
        //    get country code currency value and set it to the state
        const heights = vals.map((val) => {
            return (val / totalHeight) * 101;
        });
        setHeights(heights);
    }
    , [vals, totalHeight]);

    console.log(heights);
    return (
        <div className={styles.bar} key={id}>
            {heights.map((height, index) => {
                return <div className={styles.bar_item} style={{height: `${height}%`, backgroundColor: colors[index]}} key={index} />
            }
            )}
            <div className={styles.label}>
                {label}
            </div>

        </div>
    );

}

export default Bar;