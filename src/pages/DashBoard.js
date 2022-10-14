import TopSection from '../components/Dashboard/TopSection'
import AmountBar from "../components/Dashboard/AmountBar";
import {useEffect, useState} from "react";
import currencyValues from "../data/currecyValues";
import Chart from "../components/Dashboard/Chart";
import myRawData from "../data/rawData";
const DashBoard = () => {

    //run a sychronous function to get the data
    const [rawData, setRawData] = useState([]);
    useEffect(
        () => {
            setRawData(myRawData);
        }
        , []
    )
    const [country, setCountry] = useState("India");
    const selectCountry = (country) => {
        setCountry(country);
    }
    const [currency, setCurrency] = useState("INR");
    useEffect(() => {
        //    get country code currency value and set it to the state
        const countryData = currencyValues.find((item) => item.country === country);
        setCurrency(countryData.short);
    }
    , [country]);


    const types = {"Card" : "Card Payments", "UPI" : "EFTs", "Internation" : "International wires"}

    // calculate montly spending for each type
    const [monthlySpending, setMonthlySpending] = useState({});
    useEffect(() => {
        rawData.forEach((item) => {
            if (item.type === "debit"){
                const date = new Date(item.datetime);
                const month = date.toLocaleString("default", {month: "long"});
                const type = types[item.mode];
                if (monthlySpending[month] === undefined){
                    monthlySpending[month] = {};
                }
                if (monthlySpending[month][type] === undefined){
                    monthlySpending[month][type] = 0;
                }
                monthlySpending[month][type] -= item.amount;
            }
        });
        setMonthlySpending(monthlySpending);
        console.log("Montly = " , monthlySpending);
    }
    , [rawData]);

    const [dailySpndingInLastMonth, setDailySpndingInLastMonth] = useState({});
    useEffect(() => {
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        const dailySpending = {};
        for (let i = 1; i <= 31; i++){
            dailySpending[i] = {};
            dailySpending[i]["Card Payments"] = 0;
            dailySpending[i]["EFTs"] = 0;
            dailySpending[i]["International wires"] = 0;
        }
        rawData.forEach((item) => {
            if (item.type === "debit"){
                const date = new Date(item.datetime);
            //    find difference between dates
                const diff = Math.abs(date.getTime() - lastMonth.getTime());
                const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                if (diffDays <= 31){
                    const type = types[item.mode];
                    dailySpending[diffDays][type] -= item.amount;
                }
            }
        });
        setDailySpndingInLastMonth(dailySpending);
        console.log("dailySpending", dailySpending);

    }
    , [rawData]);

    const [viewperiod, setViewPeriod] = useState("year");


    console.log("monthlySpending = ", monthlySpending);
    console.log("dailySpndingInLastMonth = ", dailySpndingInLastMonth);

    return (
        <div>
            <TopSection />
            <AmountBar amountInUsd={1000} currency={currency} />
            <Chart data={viewperiod === "year" ? monthlySpending : dailySpndingInLastMonth } viewPeriod={viewperiod} />
        </div>
    );
}

export default DashBoard;