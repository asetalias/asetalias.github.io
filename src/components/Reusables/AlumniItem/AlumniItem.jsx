/* eslint-disable react/prop-types */
import styles from "./AlumniItem.module.css";

const AlumniItem = ({ image, firstName, lastName, quote }) => {
  return (
    <div className={styles.alumni_item}>
      <div className={styles.alumni_item__detail}>
        <div className={styles.alumni_item__img_container}>
          <img className={styles.alumni_item__img} src={image} alt="photo" />
        </div>
        <h1 className={styles.alumni_item__firstname}>{firstName}</h1>
        <h1 className={styles.alumni_item__lastname}>{lastName}</h1>
      </div>
      <div className={styles.alumni_item__quote}>
        <p className={styles.alumni_item__quote_text}>{quote}</p>
      </div>
    </div>
  );
};

export default AlumniItem;
