import { useState, useEffect } from "react"
import styles from "./Community.module.css"

const Community = () => {
  const [partners, setPartners] = useState([])
  const [otherCommunities, setOtherCommunities] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const response = await fetch("/data/communities.json")
      const data = await response.json()
      
      // Split communities into partners and others
      const partners = data.filter(community => [
        "Pydelhi",
        "RustDelhi",
        "India Linux User Group",
        "Foss United Foundation",
        "Ubucon Asia"
      ].includes(community.name))
      
      const others = data.filter(community => !partners.includes(community))
      
      setPartners(partners)
      setOtherCommunities(others)
    } catch (error) {
      console.error("Error fetching community data:", error)
    }
  }

  return (
    <div id="community" className={styles.community}>
      <h1 className={styles.community__title}>
        Our
        <span className={styles.community__title_highlight}>
          {" "}
          Community
        </span>{" "}
        Partners!
      </h1>
      <div className={styles.powered}>
        {partners.map((community) => (
          <a
            key={community.name}
            href={community.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`${styles.community__chapter} ${
                community.outline ? styles.outline : ""
              }`}
              src={community.logo}
              alt={community.name}
            />
          </a>
        ))}
      </div>
      
      <div className={styles.community__section}>
        <h2 className={styles.community__subtitle}>
          Other
          <span className={styles.community__title_highlight}>
            {" "}
            Communities
          </span>
        </h2>
        <div className={styles.powered}>
          {otherCommunities.map((community) => (
            <a
              key={community.name}
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={`${styles.community__chapter} ${
                  community.outline ? styles.outline : ""
                }`}
                src={community.logo}
                alt={community.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Community
