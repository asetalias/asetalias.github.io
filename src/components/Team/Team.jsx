import styles from "./Team.module.css";
import Carousel from "../Reusables/Carousel/Carousel";
import TeamItem from "../Reusables/TeamItem/TeamItem";

const Team = () => {
  const data = [
    {
      title: "/assets/images/poster.png",
    },
    {
      title: "/assets/images/poster.png",
    },
    {
      title: "/assets/images/poster.png",
    },
  ];

  return (
    <div id="team" className={styles.team}>
      <h1 className={styles.team__title}>
        Meet Our{" "}
        <span className={styles.team__title_highlight}>CodeTastic</span> Crew!
      </h1>
      <Carousel
        id="team__carousel"
        props={data.map((item) => {
          return <TeamItem key={item.title} />;
        })}
      />
    </div>
  );
};

export default Team;
