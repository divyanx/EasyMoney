import styles from "./Button.module.css";
const Button = ({ children, onClick, type }) => {
    var style = styles.button;
    if (type === "primary") {
        style = styles.primary;
    }
    else if (type === "secondary") {
        style = styles.secondary;
    }
    return (
        <button onClick={onClick} className={style}>
            {children}
        </button>
    );
};

export default Button;
