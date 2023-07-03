import React, { useState } from 'react'
import styles from './recipe.module.css'
import { useCreateRecipeMutation } from '../../store/api/recipe.api';

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: '',
    });

    const [createRecipe] = useCreateRecipeMutation();


    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            name: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createRecipe(recipe).then(() => {
            setRecipe({
                name: '',
            });
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <p>Create new recipe:</p>
                <input
                    value={recipe.name}
                    type='text'
                    placeholder='Recipe name ...'
                    onChange={(e) => handleChange(e)}
                    className={styles.inputForm}
                />
                <button type='submit' className={styles.buttonForm}>
                    Create recipe
                </button>
            </form>

        </div>
    )
}

export default CreateRecipe