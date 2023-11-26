import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

/**
 * Fetches data from "/data/socials.json" and sets the fetched data in the component's state.
 *
 * @return {JSX.Element} The rendered Contact component.
 */
const Contact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("data/socials.json");
    const data = await response.json();
    setData(data);
  }

  return (
    <div id="contact" className={styles.contact}>
      <h1 className={styles.contact__title}>
        Stay Connected in the <br />
        <span className={styles.contact__title_highlight}> Matrix!</span>
      </h1>
      <div className={styles.contact__social}>
        {data.map((item) => {
          return (
            <a className={styles.social} href={item.link} key={item.id}>
              <img
                className={styles.social__img}
                src={`assets/icons/${item.id}.svg`}
                alt={item.id}
              />
            </a>
          );
        })}
      </div>
      <div className={styles.powered}>
        <a href="https://lucknow.asetalias.in" target="_blank" rel="no noreferrer">
          <img
            className={styles.contact__chapter}
            src="assets/images/alias-lucknow.svg"
            alt="Chapter of ALiAS"
          />
        </a>
        <a href="https://amity.edu/" target="_blank" rel="no noreferrer">
          <img
            className={styles.contact__chapter}
            src="assets/images/amity.svg"
            alt="Amity University"
          />
        </a>
      </div>
      <h2 className={styles.contact__credits}>
        forked with {" "}
        <span className={styles.contact__heart}>&nbsp;&#10084;&nbsp;</span> from <a href="https://lucknow.asetalias.in">ALiAS Lucknow</a>
      </h2>
    </div>
  );
};

export default Contact;
