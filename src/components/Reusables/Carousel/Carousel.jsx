/* eslint-disable react/prop-types */
import styles from "./Carousel.module.css";

const Carousel = ({ id, props }) => {
  const handleClickScrollLeft = (e) => {
    const carousel = document.getElementById(e);
    console.log(carousel);
    if (carousel) {
      carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleClickScrollRight = (e) => {
    const carousel = document.getElementById(e);
    console.log(carousel);
    if (carousel) {
      carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.carousel__container}>
      <button
        className={styles.carousel__button__left}
        onClick={() => handleClickScrollLeft(id)}
      ></button>
      <div id={id} className={styles.carousel}>
        {props}
      </div>
      <button
        className={styles.carousel__button__right}
        onClick={() => handleClickScrollRight(id)}
      ></button>
    </div>
  );
};

export default Carousel;
