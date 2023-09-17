import styles from "./TeamItem.module.css";

const TeamItem = () => {
  return (
    <div className={styles.team_item}>
      <div className={styles.team_item__detail}>
        <img
          className={styles.team_item__img}
          src="/assets/images/photo.png"
          alt="photo"
        />
        <h1 className={styles.team_item__firstname}>Venkatesh</h1>
        <h1 className={styles.team_item__lastname}>Chaturvedi</h1>
      </div>
      <div className={styles.team_item__quote}>
        <p className={styles.team_item__quote_text}>
          “Ask questions! No matter what”
        </p>
      </div>
    </div>
  );
};

export default TeamItem;
