import styles from "./AddMoneyModal.module.css";
import {ArrowRight, X} from "phosphor-react";

const SendMoneyModal = ({showModal, setShowModal}) => {
    return (
        <>
            <div className={styles.modalbck} onClick={() => setShowModal(false)}/>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3 className={styles.head}>
                        Send Money
                    </h3>
                    <button className={styles.cancel} onClick={() => setShowModal(false)}>
                        <X size={24}/>
                    </button>
                </div>
                <div className={styles.mainpara}>
                    <p>Adding money to your account is as easy as some clicks here and there some typing and you are
                        done</p>
                </div>
                <div className={styles.forms}>
                    <div className={styles.formLine}>
                        <input type="text" placeholder="Account Name " className={styles.input}/>
                    </div>

                    <div className={styles.formLine}>

                        <input type="number" placeholder="Enter Amount" className={styles.input}/>
                        <input type="text" placeholder="Enter Currency" className={styles.input}/>
                    </div>
                </div>
                <button className={styles.submit} onClick={() => {
                    setShowModal(false)
                }}><ArrowRight size={16}/> Send Money
                </button>
            </div>
        </>
    );
}

export default SendMoneyModal;