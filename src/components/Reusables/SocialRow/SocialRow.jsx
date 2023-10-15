/* eslint-disable react/prop-types */
import styles from "./SocialRow.module.css";

const SocialRow = ({ socials }) => {
  return (
    <div className={styles.social}>
      {socials.map((item) => {
        return (
          <a href={item.link} key={item.id} target="_blank" rel="noreferrer">
            <img
              className={styles.social__img}
              src={`/assets/icons/${item.id}.svg`}
              alt={item.id}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialRow;
