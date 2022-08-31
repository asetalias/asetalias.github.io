import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
{/* HERO SECTION */}
      <div className={styles.heroWrapper}>
      <div className={styles.hero}>
        <h1>
          The biggest<br></br>
          Open Source Community <br></br>
          At Amity.
        </h1>
        </div>
        </div>
      <div className={styles.subHero}>
      <h2>Learn . Contribute . Grow</h2>
      </div>
      </div>
  )
}

export default Home
