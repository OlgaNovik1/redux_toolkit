import React from 'react'
import heart from '../../assets/icons8-сердце-24.png'
import styles from './header.module.css'
import { useFavorites } from '../../hooks/useFavorite'


const Header = () => {
    const { favorites } = useFavorites();


    return (
        <header className={styles.header}>
            <img src={heart} className={styles.heart} />
            <span>{favorites.length}</span>
        </header>
    )
}

export default Header;