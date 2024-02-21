import { useState, useEffect } from "react";
import styles from "./Community.module.css";

/**
 * @return {JSX.Element} The rendered Community component.
 */
const Community = () => {
  return (
    <div id="community" className={styles.community}>
      <h1 className={styles.community__title}>
        Our
        <span className={styles.community__title_highlight}> Community</span> Partners!
      </h1>
      <div className={styles.powered}>
        <a href="https://pydelhi.org" target="_blank" rel="no noreferrer">
          <img
            className={`${styles.community__chapter} ${styles.outline}`}
            src="assets/images/communities/pydelhi.png"
            alt="Pydelhi"
          />
        </a>
        <a href="https://rustdelhi.in" target="_blank" rel="no noreferrer">
          <img
            className={styles.community__chapter}
            src="assets/images/communities/rustdelhi.png"
            alt="RustDelhi"
          />
        </a>
        <a href="https://linuxdelhi.org/" target="_blank" rel="no noreferrer">
          <img
            className={`${styles.community__chapter} ${styles.outline}`}
            src="assets/images/communities/ilugd.png"
            alt="India Linux User Group"
          />
        </a>
        <a href="https://fossunited.org/" target="_blank" rel="no noreferrer">
          <img
            className={styles.community__chapter}
            src="assets/images/communities/foss-united.png"
            alt="Foss United Foundation"
          />
        </a>
      </div>
    </div>
  );
};

export default Community;
