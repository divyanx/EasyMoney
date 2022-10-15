import styles from "./AddMoneyModal.module.css";
import {X} from "phosphor-react";
const ErrorModal = ({showModal, setShowModal, h, p}) => {
    return (
        <>
            <div className={styles.modalbck} onClick={()=>setShowModal(false)}/>
            <div className={styles.modal}>
                <div className={styles.header} >
                    <h3 className={styles.headcent}>
                        {h}
                    </h3>
                    <button className={styles.cancel} onClick={()=>setShowModal(false)}>
                        <X size={24}/>
                    </button>
            </div>
                <div className={styles.mainpara}>
                <p>
                    {p}
                </p>
                </div>
            </div>

        </>
    );
}

export default ErrorModal;