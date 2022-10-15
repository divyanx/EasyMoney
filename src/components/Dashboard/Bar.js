import {useEffect, useState} from "react";
import styles from "./Bar.module.css";
const dataDiv = (val, x, y) => {
    console.log("vals", val);
    return (
        <div className={styles.data} style={{position:"fixed", left: x, top: y, zIndex:1005 }}>
            {val}
        </div>
    )
}
const Bar = ({values, totalHeightVal, label, id}) => {
    const colors = [ "var(--accent-quaternary)", "var(--accent-tertiary)", "var(--accent-secondary)"]
    const [vals, setVals] = useState(values);
    const [totalHeight, setTotalHeight] = useState(totalHeightVal);
    const [heights, setHeights] = useState([]);
    useEffect(() => {
        //    get country code currency value and set it to the state
        const heights = vals.map((val) => {
            return (val / totalHeight) * 61;
        });
        setHeights(heights);
    }
    , [vals, totalHeight]);


    const [showData, setShowData] = useState(false);
    const [cordinates, setCordinates] = useState({x: 0, y: 0});
    const [value, setValue] = useState(0);
    const handleMouseHover = (e, value) => {
    //    get cordinates
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        setShowData(true);
        setCordinates({x, y});
        setValue(value);

    }

    const handleMouseOut = (e) => {
        setShowData(false);
    }
    console.log(heights);
    return (
        <>
            {showData && dataDiv(value, cordinates.x, cordinates.y)}
        <div className={styles.bar} key={id}>

            {heights.map((height, index) => {
                return <div className={styles.bar_item}
                            style={{height: `${height}%`, backgroundColor: colors[index]}}
                            key={index}
                            onMouseOver={(e) => handleMouseHover(e, vals[index])}
                            onMouseOut={(e) => handleMouseOut(e)}
                />
            }
            )}
            <div className={styles.label}>
                {label}
            </div>

        </div>
        </>
    );

}

export default Bar;