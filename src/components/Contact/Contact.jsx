import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("/data/socials.json");
    const data = await response.json();
    setData(data);
  }

  return (
    <div id="contact" className={styles.contact}>
      <h1 className={styles.contact__title}>
        Stay Connected in the <br />
        <span className={styles.contact__title_highlight}> Codeverse!</span>
      </h1>
      <div className={styles.contact__social}>
        {data.map((item) => {
          return (
            <a className={styles.social} href={item.link} key={item.id}>
              <img
                className={styles.social__img}
                src={`/assets/icons/${item.id}.svg`}
                alt={item.id}
              />
            </a>
          );
        })}
      </div>
      <a href="https://asetalias.in" target="_blank" rel="no noreferrer">
        <img src="/assets/images/chapter.svg" alt="Chapter of ALiAS" />
      </a>
      <h2 className={styles.contact__credits}>
        Designed with{" "}
        <span className={styles.contact__heart}>&nbsp;&#10084;&nbsp;</span> by
        ALiAS Lucknow
      </h2>
    </div>
  );
};

export default Contact;
