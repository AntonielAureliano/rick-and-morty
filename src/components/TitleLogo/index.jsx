import logo from "../../assets/rick-and-morty.png";
import styles from "./TitleLogo.module.css";

export const TitleLogo = () => {
    return (
        <div className={styles.titleLogo}>
            <a href="">
                <img src={logo} alt="" />
            </a>
        </div>
    )
}