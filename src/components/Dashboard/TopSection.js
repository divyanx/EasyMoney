import styles from "./TopSection.module.css";
import Button from "../Button";
import {ArrowRight, Plus, FunnelSimple} from "phosphor-react";
import {useEffect, useState} from "react";
import currencyValues from "../../data/currecyValues";
import AddMoneyModal from "../Modals/AddMoneyModal";
import SendMoneyModal from "../Modals/SendMoneyModal";
const TopSection = ({selectCountry}) => {
    const [country, setCountry] = useState("India");
    const [countryCode, setCountryCode] = useState("IN");
    const [, setCurrency] = useState("INR");
    const [, setCurrencyValue] = useState(74.24);

    useEffect(() => {
    //    get country code currency value and set it to the state
        const countryData = currencyValues.find((item) => item.country === country);
        setCountryCode(countryData.contry_short);
        setCurrency(countryData.short);
        setCurrencyValue(countryData.value);
    }, [country]);

    const [showDropdown, setShowDropdown] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const toggleDropdown = (e) => {
        setShowDropdown(!showDropdown);
        setPosition({x: e.clientX, y: e.clientY});
    }
    const [showAddModal, setShowAddModal] = useState(false);
    const [showSendModal, setShowSendModal] = useState(false);
    const CountryList = (x, y) => {
        return (


            <div className={styles.countryList} style={{top: y, left: x, position: "fixed"}}>
                {currencyValues.map((item) => (
                    <div className={styles.countryItem} onClick={() => {
                        setCountry(item.country);
                        selectCountry(item.country);
                        setShowDropdown(false);
                    }}>

                            <img src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.contry_short}.svg`} className={styles.flag} alt=""/>

                        <div className={styles.countryName}>
                            {item.country}
                        </div>
                    </div>
                ))}
            </div>

        );

    }
    return (
        <>
            {showAddModal && <AddMoneyModal showModal={showAddModal} setShowModal={setShowAddModal}/>}
            {showSendModal && <SendMoneyModal showModal={showSendModal} setShowModal={setShowSendModal}/>}
                <div className={styles.top_section}>
                    {showDropdown && CountryList(position.x, position.y)}
                    <div className={styles.top_section_left}>
                        <h2>Account Balance</h2>
                        <button className={styles.cont_pick} onClick={(e) => toggleDropdown(e)}><FunnelSimple size={14} weight="thin" /> <img
                            className={styles.flag}
                            alt="flag"
                            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}/>
                        </button>
                    </div>
                    <div className={styles.top_section_right}>
                        <Button type={"secondary"} onClick={()=>setShowAddModal(true)}><Plus size={14}/> Add Money</Button>
                        <Button type={"primary"} onClick={()=>setShowSendModal(true)}><ArrowRight size={14} /> Send Money</Button>
                    </div>
                </div>
        </>
    );
 };

 export default TopSection;