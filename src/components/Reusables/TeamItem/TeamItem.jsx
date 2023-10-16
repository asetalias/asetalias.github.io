/* eslint-disable react/prop-types */
import SocialRow from "../SocialRow/SocialRow";
import styles from "./TeamItem.module.css";

/**
 * Renders an individual team item component.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.image - The image source for the team member.
 * @param {string} props.name - The name of the team member.
 * @param {string} props.role - The role of the team member.
 * @param {Array} props.socials - An array of social media objects for the team member.
 * @returns {JSX.Element} - The rendered team item component.
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
