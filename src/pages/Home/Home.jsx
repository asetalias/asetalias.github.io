import AboutUs from '../../components/AboutUs/AboutUs'
import Alumni from '../../components/Alumni/Alumni'
import Contact from '../../components/Contact/Contact'
import Events from '../../components/Events/Events'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Team from '../../components/Team/Team'
import Community from '../../components/Community/Community'

import styles from './Home.module.css'

/**
 * Renders the home page component.
 *
 * @return {JSX.Element} The rendered home page component.
 */
const Home = () => {
  return (
    <div className={styles.home__container}>
        <Navbar />
        <Hero />
        <AboutUs />
        <Events />
        <Team />
        <Alumni />
        <Community />
        <Contact />
    </div>
  )
}

export default Home