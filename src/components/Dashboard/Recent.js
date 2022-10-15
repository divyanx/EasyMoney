import styles from "./Recent.module.css";
import {CalendarBlank} from "phosphor-react";
import {useEffect, useState} from "react";
import rawData  from "../../data/rawData";
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const merchantLogos = {
    "Amazon" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    "Netflix" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
    "Google" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    "Apple" : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
    "Facebook" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1200px-F_icon.svg.png",
    "Github" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png",
    "StackOverflow" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png",
    "Audible" : "https://static.toiimg.com/thumb/msid-88125612,width-400,resizemode-4/88125612.jpg"
}

const modesImg = {
    "Visa" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png",
    "Master" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png",
    "American" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/1200px-American_Express_logo.svg.png",
    "Paytm" : "https://c8.alamy.com/comp/W3F43T/payment-shopping-icon-or-logo-illustration-for-website-perfect-use-for-web-pattern-design-etc-W3F43T.jpg",
    "PhonePe" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9R7GV7cPxCp5_VdchdvbzOCVTOfPeujizMKCE0Q&s",
    "BhimUPI" : "https://i0.wp.com/orissadiary.com/wp-content/uploads/2020/06/BHIM-app.jpg?resize=450%2C300&ssl=1",
    "Swift" : "https://s3.amazonaws.com/spoke-profiles-prod-assets/avatars/210x210h/327fbf4a5865577de94c8b94eab4648c5eba8e30.png",
    "NEFT" : "https://seeklogo.com/images/N/neft-logo-7222234315-seeklogo.com.gif",
}
const Recent = ({symbol, conversionRate}) => {
    const [mode, setMode] = useState("all");
    const [data, setData] = useState(rawData);
    const buttonClickHandler = (mode) => {
        setMode(mode);
    }

    const formatDate = (date) => {
        const d = new Date(date);
        const today = new Date();

    //    if date is in last week return day name with time
        if(d.getTime() > today.getTime() - 7*24*60*60*1000){
            const day = d.getDay();
            //wtite time as 1:00pm am pm in small letters
            const time = d.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true}).toLowerCase();
            return `${days[day]} ${time}`;
        }
        else {
            const day = d.getDate();
            const month = d.getMonth();
            const year = d.getFullYear();
            return `${day}/${month}/${year}`;
        }
    }

    console.log("Conversion Rate", conversionRate);
    const [transfers, setTransfers] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const transfers = data.filter((item) => item.mode !== "Card");
        const cards = data.filter((item) => item.mode === "Card");
        setTransfers(transfers);
        setCards(cards);
    }
    , [data]);


    const [recentTransfers, setRecentTransfers] = useState([]);
    const [recentCards, setRecentCards] = useState([]);
    const [recentAll, setRecentAll] = useState([]);
    useEffect(() => {
    //    sort the data by date
        const sortedTransfers = transfers.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        const sortedCards = cards.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        const sortedAll = data.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        setRecentTransfers(sortedTransfers);
        setRecentCards(sortedCards);
        setRecentAll(sortedAll);
    }, [transfers, cards, data]);


    return (
        <div className={styles.recent}>
            <div className={styles.topBar}>
                <h3>Recent transactions</h3>
                <button className={styles.date_pick}><CalendarBlank size={16}/> <span>Select date</span> </button>
            </div>

            <div className={styles.switchcont}>
                <button className={`${styles.button1} ${mode==="all" ? styles.activebtn : ""}`} onClick={()=>buttonClickHandler("all")}>View all</button>
                <button className={`${styles.button2} ${mode==="transfers" ?  styles.activebtn : ""}`} onClick={()=>buttonClickHandler("transfers")}>Transfers</button>
                <button className={`${styles.button3} ${mode==="cards" ?  styles.activebtn : ""}`} onClick={()=>buttonClickHandler("cards")}>Cards</button>
            </div>

            <div className={styles.transactionTable}>
                <table>
                    <tr className={styles.index}>
                        <td>Transactions</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td>Mode</td>
                    </tr>
                    {mode === "all" && recentAll.map((item, index) => {
                        var amt = item.amount*conversionRate;
                        if (amt < 0) {
                            amt = -amt;
                        }
                        amt = amt.toFixed(2);
                        return (
                            item.type === "debit" ? (
                                <tr key={index}>
                                    <td className={styles.merchcont}><img src={merchantLogos[item.merchant]} className={styles.logo} />{item.merchant}</td>
                                    <td className={styles.debit}>{`- ${symbol}${amt}`}</td>
                                    <td>{formatDate(item.datetime)}</td>
                                    <td className={styles.mode}><img className={styles.card} src={modesImg[item.exactMode.split(" ")[0]]}/><div className={styles.cardDet}><span>{item.exactMode}</span><span>Expiry 06/2024</span></div></td>
                                </tr>
                            ) : (
                                <tr key={index}>
                                    <td className={styles.merchcont}><img src={modesImg[item.sender]} className={styles.logo} />{item.sender}</td>
                                    <td className={styles.credit}>{`+ ${symbol}${amt}`}</td>
                                    <td>{formatDate(item.datetime)}</td>
                                    <td className={styles.mode}><img className={styles.card} src={modesImg[item.sender]}/> {item.sender}</td>

                                </tr>
                            )
                        )
                    })}

                    {mode === "transfers" && recentTransfers.map((item, index) => {
                        var amt = item.amount*conversionRate;
                        if (amt < 0) {
                            amt = -amt;
                        }
                        amt = amt.toFixed(2);
                        return (
                        item.type === "debit" ? (
                            <tr key={index}>
                                <td className={styles.merchcont}><img src={merchantLogos[item.merchant]} className={styles.logo} />{item.merchant}</td>
                                <td className={styles.debit}>{`- ${symbol}${amt}`}</td>
                                <td>{formatDate(item.datetime)}</td>
                                <td className={styles.mode}><img className={styles.card} src={modesImg[item.exactMode.split(" ")[0]]}/><div className={styles.cardDet}><span>{item.exactMode}</span><span>Expiry 06/2024</span></div></td>

                            </tr>
                        ) : (
                            <tr key={index}>
                                <td className={styles.merchcont}><img src={modesImg[item.sender]} className={styles.logo} />{item.sender}</td>
                                <td className={styles.credit}>{`+ ${symbol}${amt}`}</td>
                                <td>{formatDate(item.datetime)}</td>
                                <td className={styles.mode}><img className={styles.card} src={modesImg[item.sender]}/> {item.sender}</td>
                            </tr>
                        )
                    )})}
                    {mode === "cards" && recentCards.map((item, index) => {
                        var amt = item.amount*conversionRate;
                        if (amt < 0) {
                            amt = -amt;
                        }
                        amt = amt.toFixed(2);
                        return(
                            item.type === "debit" ? (
                                <tr key={index}>
                                    <td className={styles.merchcont}><img src={merchantLogos[item.merchant]} className={styles.logo} />{item.merchant}</td>
                                    <td className={styles.debit}>{`- ${symbol}${amt}`}</td>
                                    <td>{formatDate(item.datetime)}</td>
                                    <td className={styles.mode}><img className={styles.card} src={modesImg[item.exactMode.split(" ")[0]]}/><div className={styles.cardDet}><span>{item.exactMode}</span><span>Expiry 06/2024</span></div></td>
                                </tr>
                            ) : (
                                <tr key={index}>
                                    <td className={styles.merchcont}><img src={modesImg[item.sender]} className={styles.logo} />{item.sender}</td>
                                    <td className={styles.credit}>{`+ ${symbol}${amt}`}</td>
                                    <td>{formatDate(item.datetime)}</td>
                                    <td className={styles.mode}><img className={styles.card} src={modesImg[item.sender]}/> {item.sender}</td>
                                </tr>
                            )
                        )
                    })}




                </table>
            </div>

        </div>
    );
}

export default Recent;