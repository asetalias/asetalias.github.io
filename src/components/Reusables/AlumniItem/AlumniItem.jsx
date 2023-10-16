/* eslint-disable react/prop-types */
import SocialRow from "../SocialRow/SocialRow";
import styles from "./AlumniItem.module.css";

/**
 * Renders an individual alumni item component.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.image - The URL of the alumni's image.
 * @param {string} props.firstName - The first name of the alumni.
 * @param {string} props.lastName - The last name of the alumni.
 * @param {string} props.quote - The quote or message from the alumni.
 * @param {Array} props.socials - An array of social media objects for the alumni.
 * @returns {JSX.Element} - The rendered alumni item component.
 */
const AlumniItem = ({ image, firstName, lastName, quote, socials }) => {
  return (
    <div className={styles.alumni_item}>
      <div className={styles.alumni_item__detail}>
        <div className={styles.alumni_item__img_container}>
          <img className={styles.alumni_item__img} src={image} alt="photo" />
        </div>
        <h1 className={styles.alumni_item__firstname}>{firstName}</h1>
        <h1 className={styles.alumni_item__lastname}>{lastName}</h1>
      </div>
      <div className={styles.alumni_item__container}>
        <div className={styles.alumni_item__quote}>
          <p className={styles.alumni_item__quote_text}>{quote}</p>
        </div>
        {socials && <SocialRow socials={socials} />}
      </div>
    </div>
  );
};

export default AlumniItem;
