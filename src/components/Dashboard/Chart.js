//This chart plots verticle stacked bar charts for ech month
// The chart also has background grid lines
import {useEffect, useState} from "react";
import styles from "./Chart.module.css";
import Bar from "./Bar";
const Chart = ({ data, viewPeriod }) => {

    const numLines = 7;
    console.log("data=", data)
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [total, setTotal] = useState(0);
    const [myData, setMyData] = useState(data);


    useEffect(
        () => {
            if (viewPeriod === "year"){
            //   take max of all months
                let max = 0;
                for (let i = 0; i < 12; i++){
                    const month = Months[i];
                    const sum = myData[month] ? ( myData[month]["Card Payments"] + myData[month]["EFTs"] + myData[month]["International wires"]) : 0;
                    if (sum > max){
                        max = sum;
                    }
                }
                setTotal(max);
            }
            else if (viewPeriod === "month" || viewPeriod === "week"){
                let max = 0;
                for (let i = 1; i <= 31; i++){
                    const sum = myData[i] ? (myData[i]["Card Payments"] + myData[i]["EFTs"] + myData[i]["International wires"]) : 0;
                    if (sum > max){
                        max = sum;
                    }
                }
                setTotal(max);
            }
        }
        , [myData, viewPeriod]
    )




    return (
        <div className={styles.chart_area}>
            <div className={styles.chart_background}>
                {
                    [...Array(numLines).keys()].map((item, index) => {
                        return(<div key={index} className={styles.chart_lines}></div>)
                    })
                }



                <div className={styles.bars_cont}>{
                    total !== 0 && viewPeriod === "year" && Months.map((month, index) => {
                        console.log("month = ", month);
                        console.log([myData[month]["International wires"],myData[month]["Card Payments"], myData[month]["EFTs"]])

                        return (
                            <Bar
                                values={[myData[month]["International wires"], myData[month]["Card Payments"], myData[month]["EFTs"]]}
                                totalHeightVal={total} label={month.substring(0, 3)}
                                id={index}
                            />
                        )
                    })
                }


                }
                </div>

            </div>

        </div>
    );


};

export default Chart