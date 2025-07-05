import React from 'react';
import styles from './MyImage.module.css';

export default function MyImage({ src, alt, name = '', width = '500px' }) {
    return (
        <figure className={`${styles.figure}`}>
            <img
                src={src}
                alt={alt}
                width={width}
                className={`${styles.img}`}
            />
            <caption className={`${styles.caption}`}>{name}</caption>
        </figure>
    );
}
