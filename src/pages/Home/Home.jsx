import AboutUs from '../../components/AboutUs/AboutUs'
import Alumni from '../../components/Alumni/Alumni'
import Contact from '../../components/Contact/Contact'
import Events from '../../components/Events/Events'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Team from '../../components/Team/Team'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home__container}>
        <Navbar />
        <Hero />
        <AboutUs />
        <Events />
        <Team />
        <Alumni />
        <Contact />
    </div>
  )
}

export default Home