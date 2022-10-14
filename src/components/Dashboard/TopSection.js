import styles from "./TopSection.module.css";
import Button from "../Button";
import {ArrowRight, Plus, FunnelSimple} from "phosphor-react";
import {useEffect, useState} from "react";
import currencyValues from "../../data/currecyValues";
//import all flags from 'country-flag-icons/react/3x2'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
const TopSection = ({selectCountry}) => {
    const [country, setCountry] = useState("India");
    const [countryCode, setCountryCode] = useState("IN");
    const [currency, setCurrency] = useState("INR");
    const [currencyValue, setCurrencyValue] = useState(74.24);
    const [currencySymbol, setCurrencySymbol] = useState("₹");
    useEffect(() => {
    //    get country code currency value and set it to the state
        const countryData = currencyValues.find((item) => item.country === country);
        setCountryCode(countryData.contry_short);
        setCurrency(countryData.short);
        setCurrencyValue(countryData.value);
    }, [country]);

    return (
        <div className={styles.top_section}>
            <div className={styles.top_section_left}>
                <h2>Account Balance</h2>
                <button className={styles.cont_pick}><FunnelSimple size={14} weight="thin"  /> <img
                    className={styles.flag}
                    alt="United States"
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}/> </button>
            </div>
            <div className={styles.top_section_right}>
                <Button type={"secondary"}><Plus size={14}/> Add Money</Button>
                <Button type={"primary"}><ArrowRight size={14} /> Send Money</Button>
            </div>
        </div>
    );
 };

 export default TopSection;