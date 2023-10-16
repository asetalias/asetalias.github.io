import { useState, useEffect } from "react";
import styles from "./Team.module.css";
import Carousel from "../Reusables/Carousel/Carousel";
import TeamItem from "../Reusables/TeamItem/TeamItem";

/**
 * Fetches data from "/data/members.json" and sets the fetched data in the component's state.
 *
 * @return {JSX.Element} The rendered Team component.
 */
const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    setData(data);
  }

  return (
    <div id="team" className={styles.team}>
      <h1 className={styles.team__title}>
        Meet Our{" "}
        <span className={styles.team__title_highlight}>CodeTastic</span> Crew!
      </h1>
      <Carousel
        id="team__carousel"
        props={data.map((item) => {
          return (
            <TeamItem
              key={item.id}
              image={item.image}
              name={item.name}
              role={item.role}
              socials={item.social}
            />
          );
        })}
      />
    </div>
  );
};

export default Team;
