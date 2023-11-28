/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./Hero.module.css";

/**
 * Renders the Hero component.
 *
 * @return {JSX.Element} The rendered Hero component.
 */
const Hero = () => {
  return (
    <div id="home">
      <div className={styles.hero}>
        <h1 className={styles.hero__one}>
        Where {" "}
          <span className={styles.hero__one_highlight}>Open Source</span> meets people
        </h1>
        <p className={styles.hero__description}>
          &lt;/ALiAS is the largest open source community in Amity. We aim to foster and fuel hacker culture across the city/&gt;
        </p>
        <div className={styles.hero__interactive}>
          <img
            src="assets/images/hero-one.webp"
            alt="hero"
            className={styles.hero__one_image}
          />
          <div className={styles.hero__btn_container}>
            <button className={styles.hero__button}>
              <a href="https://bit.ly/joinalias" target="_blank" rel="noreferrer">
                Enroll Now
              </a>
            </button>
          </div>
          <img
            src="assets/images/hero-two.webp"
            alt="hero"
            className={styles.hero__two_image}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
