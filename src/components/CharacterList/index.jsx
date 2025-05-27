import { useEffect, useState } from "react";
import axios from "axios";
import { CharactersCard } from "../CharactersCard";
import { Button } from "../Button";

import styles from "./CharacterList.module.css";

export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({});

    const handleNext = () => {
        if(info.next) setPage((prev) => prev + 1);
    }

    const handlePrev = () => {
        if(info.prev) setPage((prev) => prev - 1);
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => {
            setCharacters(response.data.results);
            setInfo(response.data.info);
            setLoading(false);            
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, [page]);

    if(loading) {
            return <div>Loading...</div>
    }
    return (
        <div>
            <div className={styles.charactersGrid}>
                {characters.map(character => (
                    <CharactersCard key={character.id} character={character} />
                ))}
            </div>
            <div className={styles.pagination}>
                <Button handle={handlePrev}>Previous</Button>
                <span>{page}</span>
                <Button handle={handleNext}>Next</Button>
            </div>
        </div>
    )
}