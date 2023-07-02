import React from 'react';
import styles from './recipe.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../favorites/favorites.slice';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorite';

const RecipeItem = ({ recipe }) => {
    // const favorites = useSelector(state => state.favorites);
    // const dispatch = useDispatch();
    const { favorites } = useFavorites();
    const { toggleFavorites } = useActions();

    console.log(favorites)

    const isExist = favorites.some(r => r.id === recipe.id);

    return (
        <div className={styles.item}>
            {/* <img /> */}
            <h3>{recipe.name}</h3>
            <button
                onClick={() => toggleFavorites(recipe)}
                className={styles.button}>
                {isExist ? 'Remove from favorites' : ' Add to favorites'}
            </button>
        </div>
    )
}

export default RecipeItem;