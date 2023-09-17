import React from 'react';
import styles from './Navbar.module.css';

/**
 * Render the Navbar component.
 * 
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = () => {
  // Set up state to track scrolling
  const [scrolling, setScrolling] = React.useState(false);

  const handleClickScroll = (e) => {
    const element = document.getElementById(e);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add event listener to track scroll position on component mount
  React.useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 100, set scrolling to true
      // Otherwise, set scrolling to false
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Render the Navbar component
  return (
    <nav className={`${scrolling ? styles.navbar__scrolling : ''} ${styles.navbar}`}>
      <img src="/assets/images/logo.png" alt="logo" className={styles.navbar__logo} />
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll('home')}>Home</span>
        </li>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll('about')}>About Us</span>
        </li>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll('events')}>Events</span>
        </li>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll('team')}>Team</span>
        </li>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll('contact')}>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;