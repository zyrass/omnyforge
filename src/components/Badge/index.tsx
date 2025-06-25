import React from 'react';
import styles from './Badge.module.css';

const NiveauCouleur = {
    Débutant: 'débutant',
    Intermédiaire: 'intermédiaire',
    Avancé: 'avancé',
};

export default function Badge({ niveau = 'Débutant' }) {
    const styleClass = NiveauCouleur[niveau] || 'default';

    return (
        <span className={`${styles.badge} ${styles[styleClass]}`}>
            {niveau}
        </span>
    );
}
