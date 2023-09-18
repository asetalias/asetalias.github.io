import { useState, useEffect } from "react";
import AboutItem from "../Reusables/AboutItem/AboutItem";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect( () => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("/data/about.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setData(data);
  }

  return (
    <div id="about" className={styles.aboutus}>
      <h1 className={styles.aboutus__title}>
        <span className={styles.aboutus__title_highlight}>About</span> Us
      </h1>
      <div className={styles.aboutus__container}>
        {data.map((item) => {
          return (
            <AboutItem
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
