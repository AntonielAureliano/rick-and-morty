import styles from "./Button.module.css";

export const Button = ({handle, children}) => {
    return (
        <button className={styles.button} onClick={handle}>{children}</button>
    )
}