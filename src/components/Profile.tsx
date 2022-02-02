import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/56702492?s=460&u=991d8b4a33f76a844fbb65182e577a6335eb09c1&v=4" alt="Davi Luiz" />
            <div>
                <strong>Davi Luiz</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level} </p>
            </div>
        </div>
    );
}