import styles from "./CharactersCard.module.css";
import iconAlive from "../../assets/icons8-emoji-de-círculo-verde-48.png";
import iconDead from "../../assets/icons8-emoji-de-círculo-vermelho-48.png";

export const CharactersCard = ({ character }) => {

    return (
        <div className={styles.card}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <div className={styles.cardStatus}>
                <img src={character.status === "Alive" ? iconAlive : iconDead} alt="" />
                <p>Status: {character.status}</p>
            </div>
            <p>Specie: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
        </div>
    )
}