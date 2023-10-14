import { useState, useEffect } from "react";
import styles from "./Alumni.module.css";
import Carousel from "../Reusables/Carousel/Carousel";
import AlumniItem from "../Reusables/AlumniItem/AlumniItem";

const Alumni = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("/data/alumni.json");
    const data = await response.json();
    setData(data);
  }

  return (
    <div id="alumni" className={styles.alumni}>
      <h1 className={styles.alumni__title}>
        <span className={styles.alumni__title_highlight}>Alumni</span> Spotlight
      </h1>
      <Carousel
        id="alumni__carousel"
        props={data.map((item) => {
          return (
            <AlumniItem
              key={item.id}
              image={item.image}
              firstName={item.firstName}
              lastName={item.lastName}
              quote={item.quote}
            />
          );
        })}
      />
    </div>
  );
};

export default Alumni;
