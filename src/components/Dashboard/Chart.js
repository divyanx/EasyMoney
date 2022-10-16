//This chart plots verticle stacked bar charts for ech month
// The chart also has background grid lines
import {useEffect, useMemo, useState} from "react";
import styles from "./Chart.module.css";
import Bar from "./Bar";
import rawData from "../../data/rawData";

const types = {"Card": "Card Payments", "UPI": "EFTs", "Internation": "International wires"}
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Chart = ({viewPeriod, currency, symbol, conversionRate}) => {


    // calculate montly spending for each type
    const [monthlySpending, setMonthlySpending] = useState({});
    useEffect(() => {
            rawData.forEach((item) => {
                if (item.type === "debit") {
                    const date = new Date(item.datetime);
                    const month = date.toLocaleString("default", {month: "long"});
                    const type = types[item.mode];
                    if (monthlySpending[month] === undefined) {
                        monthlySpending[month] = {};
                    }
                    if (monthlySpending[month][type] === undefined) {
                        monthlySpending[month][type] = 0;
                    }
                    monthlySpending[month][type] -= item.amount;
                }
            });
            setMonthlySpending(monthlySpending);
            console.log("Montly = ", monthlySpending);
        }
        , [monthlySpending]);

    const [dailySpndingInLastMonth, setDailySpndingInLastMonth] = useState({});
    useEffect(() => {
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);
            const dailySpending = {};
            for (let i = 1; i <= 31; i++) {
                dailySpending[i] = {};
                dailySpending[i]["Card Payments"] = 0;
                dailySpending[i]["EFTs"] = 0;
                dailySpending[i]["International wires"] = 0;
            }
            rawData.forEach((item) => {
                if (item.type === "debit") {
                    const date = new Date(item.datetime);
                    //    find difference between dates
                    const diff = Math.abs(date.getTime() - lastMonth.getTime());
                    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                    if (diffDays <= 31) {
                        const type = types[item.mode];
                        dailySpending[diffDays][type] -= item.amount;
                    }
                }
            });
            setDailySpndingInLastMonth(dailySpending);
            console.log("dailySpending", dailySpending);

        }
        , []);


    console.log("monthlySpending = ", monthlySpending);
    console.log("dailySpndingInLastMonth = ", dailySpndingInLastMonth);


    const numLines = 7;

    const [totalYear, setTotalYear] = useState(0);
    const [totalMonth, setTotalMonth] = useState(0);


    useEffect(
        () => {
            if (viewPeriod === "year") {
                //   take max of all months
                let max = 0;
                for (let i = 0; i < 12; i++) {
                    const month = Months[i];
                    const sum = monthlySpending[month] ? (+monthlySpending[month]["Card Payments"] + +monthlySpending[month]["EFTs"] + +monthlySpending[month]["International wires"]) : 0;
                    if (sum > max) {
                        max = sum;
                    }
                }
                console.log("max = ", max);
                setTotalYear(max);
            } else if (viewPeriod === "month" || viewPeriod === "week") {
                let max = 0;
                for (let i = 1; i <= 31; i++) {
                    const sum = dailySpndingInLastMonth[i] ? (+dailySpndingInLastMonth[i]["Card Payments"] + dailySpndingInLastMonth[i]["EFTs"] + dailySpndingInLastMonth[i]["International wires"]) : 0;
                    if (sum > max) {
                        console.log("got max = ", sum, "for day = ", i);
                        max = sum;
                    }
                }

                setTotalMonth(max);
            }
        }
        , [viewPeriod, dailySpndingInLastMonth, monthlySpending]
    )

    const mappedBars = useMemo(() => {
        return (<div className={styles.bars_cont}>
            {
                totalYear !== 0 && viewPeriod === "year" && Months.map((month, index) => {
                    // console.log("month = ", month);
                    // console.log([myData[month]["International wires"],myData[month]["Card Payments"], myData[month]["EFTs"]])

                    return (
                        <Bar
                            values={monthlySpending[month] ? ([+monthlySpending[month]["International wires"] * conversionRate, +monthlySpending[month]["Card Payments"] * conversionRate, +monthlySpending[month]["EFTs"] * conversionRate]) : [0, 0, 0]}
                            totalHeightVal={totalYear * conversionRate} label={month.substring(0, 3)}
                            id={index}
                            symbol={symbol}
                        />
                    )
                })
            }
            {
                totalMonth !== 0 && viewPeriod === "month" && Object.keys(dailySpndingInLastMonth).map((day, index) => {
                        return (
                            <Bar
                                values={dailySpndingInLastMonth[day] ? ([+dailySpndingInLastMonth[day]["International wires"] * conversionRate, +dailySpndingInLastMonth[day]["Card Payments"] * conversionRate, +dailySpndingInLastMonth[day]["EFTs"] * conversionRate]) : [0, 0, 0]}
                                totalHeightVal={totalMonth * conversionRate} label={day}
                                id={index}
                                symbol={symbol}
                                type="thinner"
                            />
                        )
                    }
                )
            }
            {
                totalMonth !== 0 && viewPeriod === "week" && Object.keys(dailySpndingInLastMonth).filter((day) => day <= 7).map((day, index) => {
                        return (
                            <Bar
                                values={[+dailySpndingInLastMonth[day]["International wires"] * conversionRate, +dailySpndingInLastMonth[day]["Card Payments"] * conversionRate, +dailySpndingInLastMonth[day]["EFTs"] * conversionRate]}
                                totalHeightVal={totalMonth * conversionRate} label={days[day - 1]}
                                id={index}
                                symbol={symbol}
                                type="thicker"
                            />
                        )
                    }
                )

            }


        </div>)
    }, [totalYear, totalMonth, viewPeriod, monthlySpending, conversionRate, dailySpndingInLastMonth, symbol]);

    console.log("total = ", totalYear, totalMonth);
    return (
        <div className={styles.chart_area}>
            <div className={styles.chart_background}>
                {
                    [...Array(numLines).keys()].map((item, index) => {
                        return (<div key={index} className={styles.chart_lines}></div>)
                    })
                }
                {mappedBars}
            </div>

        </div>
    );


};

export default Chart