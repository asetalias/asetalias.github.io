/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div id="home">
      <div className={styles.hero}>
        <h1 className={styles.hero__one}>
          Where Code Meets{" "}
          <span className={styles.hero__one_highlight}>Creativity</span>,
        </h1>
        <h1 className={styles.hero__two}>Byte by Byte.</h1>
        <p className={styles.hero__description}>
          /*The environment we aim to create with ALIAS LUCKNOW would set new
          milestones of skills and open source development in the campus.*/
        </p>
        <div className={styles.hero__interactive}>
          <img
            src="/assets/images/hero-one.png"
            alt="hero"
            className={styles.hero__one_image}
          />
          <div className={styles.hero__btn_container}>
            <button className={styles.hero__button}>Enroll Now</button>
          </div>
          <img
            src="/assets/images/hero-two.png"
            alt="hero"
            className={styles.hero__two_image}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
