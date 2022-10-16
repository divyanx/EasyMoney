import {useEffect, useState} from "react";
import styles from "./Bar.module.css";

const maxThickness = {"thinner": "15px", "thicker": "60px"}
const thickness = {"thinner": "2vw", "thicker": "8vw"}
const dataDiv = (val, x, y, symbol) => {
    console.log("vals", val);
    var sval = val.toString();
    //formalt val to 2 places after decimal only
    if (sval.indexOf(".") !== -1) {
        sval = sval.slice(0, sval.indexOf(".") + 3);
    }
    sval = sval.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
        <div className={styles.data} style={{position: "fixed", left: x, top: y, zIndex: 1005}}>
            {symbol}{sval}
        </div>
    )
}
const Bar = ({values, totalHeightVal, label, id, symbol, type}) => {
    const colors = ["var(--accent-quaternary)", "var(--accent-tertiary)", "var(--accent-secondary)"]
    const [vals,] = useState(values);
    const [totalHeight,] = useState(totalHeightVal);
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
            {showData && dataDiv(value, cordinates.x, cordinates.y, symbol)}
            <div className={styles.bar} key={id}>

                {heights.map((height, index) => {
                        return <div className={styles.bar_item}
                                    style={{
                                        height: `${height}%`,
                                        backgroundColor: colors[index],
                                        maxWidth: type in thickness ? maxThickness[type] : "30px",
                                        width: type in thickness ? thickness[type] : "4vw"
                                    }}
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