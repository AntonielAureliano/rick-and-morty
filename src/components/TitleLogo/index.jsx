import logo from "../../assets/rick-and-morty.png";
import styles from "./TitleLogo.module.css";

export const TitleLogo = () => {
    return (
        <div className={styles.titleLogo}>
            <a href="">
                <img src={logo} alt="" />
            </a>
            <h1 className={styles.title}>Rick and Morty Characters</h1>
        </div>
    )
}