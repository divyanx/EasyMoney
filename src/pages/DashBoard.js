import TopSection from '../components/Dashboard/TopSection'
import AmountBar from "../components/Dashboard/AmountBar";
import {useEffect, useState} from "react";
import currencyValues from "../data/currecyValues";
import Chart from "../components/Dashboard/Chart";
import LegendAndSwitch from "../components/Dashboard/LegendAndSwitch";
const DashBoard = () => {

    //run a sychronous function to get the data
    const [viewperiod, setViewPeriod] = useState("year");
    const [country, setCountry] = useState("India");
    const selectCountry = (country) => {
        setCountry(country);
    }

    const setViewMode = (mode) => {
        setViewPeriod(mode);
    }
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");
    const [conversionRate, setConversionRate] = useState(1);
    useEffect(() => {
            //    get country code currency value and set it to the state
            const countryData = currencyValues.find((item) => item.country === country);
            setCurrency(countryData.short);
            setSymbol(countryData.symbol);
            setConversionRate(countryData.value);
        }
        , [country]);

    return (
        <div>
            <TopSection  selectCountry={selectCountry}/>
            <AmountBar amountInUsd={1000} currency={currency} />
            <LegendAndSwitch  setViewMode={setViewMode}/>
            <Chart  viewPeriod={viewperiod} currency={currency} symbol={symbol}  conversionRate={conversionRate} />
        </div>
    );
}

export default DashBoard;