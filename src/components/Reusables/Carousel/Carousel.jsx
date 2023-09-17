import React from 'react'
import styles from './Carousel.module.css'

const Carousel = ({ props }) => {

    const handleClickScrollLeft = (e) => {
        const carousel = document.getElementById(e);
        console.log(carousel)
        if (carousel) {
            carousel.scrollBy({
                left: -carousel.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    const handleClickScrollRight = (e) => {
        const carousel = document.getElementById(e);
        console.log(carousel)
        if (carousel) {
            carousel.scrollBy({
                left: carousel.offsetWidth,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className={styles.carousel__container}>
            <button className={styles.carousel__button__left} onClick={(e) => handleClickScrollLeft('carousel')}></button>
            <div id="carousel" className={styles.carousel}>
                {props}
            </div>
            <button className={styles.carousel__button__right} onClick={(e) => handleClickScrollRight('carousel')}></button>
        </div>
    )
}

export default Carousel