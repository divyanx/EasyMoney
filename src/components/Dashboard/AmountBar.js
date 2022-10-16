import {useEffect, useState} from "react";
import currencyValues from "../../data/currecyValues";
import styles from "./AmountBar.module.css";

const AmountBar = ({amountInUsd, currency}) => {
    const [amount, setAmount] = useState(0);
    const [symbol, setSymbol] = useState("");
    useEffect(() => {
        //    get country code currency value and set it to the state
        const countryData = currencyValues.find((item) => item.short === currency);
        setAmount((amountInUsd * countryData.value).toFixed(2));
        setSymbol(countryData.symbol);

    }, [currency, amountInUsd]);
    return (
        <div className={styles.amount_bar}>
            <p>{symbol} {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
            <p>{currency}</p>
        </div>
    );
}

export default AmountBar;