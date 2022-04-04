import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'

export default function LandingPage() {
    return (
        <div className={styles.landingPage}>
                <div className={styles.welcome}>
                <div className={styles.image} />
                <h1 className={styles.enter}>Enter</h1>
                <Link to='/home'> 
                    <button className={styles.enterButton}>...</button>
                </Link>
            </div>
        </div>
    )
}