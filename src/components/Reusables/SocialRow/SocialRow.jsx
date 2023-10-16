/* eslint-disable react/prop-types */
import styles from "./SocialRow.module.css";

/**
 * Renders an individual social row component.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.socials - An array of social media objects for the social row.
 * @returns {JSX.Element} - The rendered social row item component.
 */
const SocialRow = ({ socials }) => {
  return (
    <div className={styles.social}>
      {socials.map((item) => {
        return (
          <a href={item.link} key={item.id} target="_blank" rel="noreferrer">
            <img
              className={styles.social__img}
              src={`assets/icons/${item.id}.svg`}
              alt={item.id}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialRow;
