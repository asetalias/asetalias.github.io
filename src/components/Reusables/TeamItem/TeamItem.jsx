/* eslint-disable react/prop-types */
import SocialRow from "../SocialRow/SocialRow";
import styles from "./TeamItem.module.css";

/**
 * team card component.
 *
 * @param {string} image - The image of the team.
 * @param {string} date - The date of the team.
 * @param {string} time - The time of the team.
 * @param {string} venue - The venue of the team.
 * @returns {JSX.Element} - The team card component.
 */
const TeamItem = ({ image, name, role, socials }) => {
  return (
    <div className={styles.team}>
      <div className={styles.team__container}>
        <img src={image} alt="picture" className={styles.picture} />
        <div className={styles.content}>
          <h1 className={styles.content__name}>{name}</h1>
          <p className={styles.content__role}>{role}</p>
          {socials && <SocialRow socials={socials} />}
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
