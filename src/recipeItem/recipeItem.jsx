import React from 'react';
import styles from './recipe.module.css'
import { useSelector } from 'react-redux';

const RecipeItem = ({ recipe }) => {
    const favorites = useSelector(state => state.favorites);
    console.log(favorites)

    return (
        <div className={styles.item}>
            {/* <img /> */}
            <h3>{recipe.name}</h3>
            <button className={styles.button}>Add to favorites</button>
        </div>
    )
}

export default RecipeItem;