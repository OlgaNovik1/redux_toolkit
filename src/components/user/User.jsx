import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions';
import styles from './user.module.css'

const User = () => {
    const { isLoading, error, user } = useSelector(state => state.user)

    const { getUserById } = useActions();


    return (
        <div className={styles.userContainer}>
            <button onClick={() => getUserById(1)} className={styles.buttonUser}>
                Get User
            </button>
            {isLoading ? <div>LOADING...</div> :
                error ? <div>{error.message}</div> :
                    user.name ? <h1>User: {user.name}</h1> :
                        <h1>USER NOT FOUND</h1>
            }
        </div>
    )
}

export default User