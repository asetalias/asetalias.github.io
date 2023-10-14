import React from "react";
import styles from "./Navbar.module.css";

/**
 * Render the Navbar component.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = () => {
  // Set up state to track scrolling
  const [scrolling, setScrolling] = React.useState(false);
  // Toggle navbar
  const [open, setOpen] = React.useState(false);

  const handleClickScroll = (e) => {
    const element = document.getElementById(e);
    setOpen(false)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavbarToggle = () => {
    setOpen(!open);
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

    window.addEventListener("scroll", handleScroll);

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  // Render the Navbar component
  return (
    <nav
      className={`${styles.navbar} ${scrolling ? styles.navbar__scrolling : ""} ${open ? styles.navbar__active : ""}`}
    >
      <div className={`${styles.navbar__overlay} ${scrolling ? styles.navbar__overlay__scrolling : ""}`}>
        <img
          src="/assets/icons/logo.svg"
          alt="logo"
          className={` ${styles.navbar__logo} ${scrolling ? styles.navbar__logo__scrolling : ""}`}
        />
        <div
          className={`${styles.hamburger} ${open ? styles.active : ""}`}
          onClick={() => handleNavbarToggle()}
        >
          <div className={styles.hamburger__top}></div>
          <div className={styles.hamburger__middle}></div>
          <div className={styles.hamburger__bottom}></div>
        </div>
      </div>
      <ul className={open ? styles.navbar__list_mobile : styles.navbar__list}>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll("home")}>Home</span>
        </li>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll("about")}>About Us</span>
        </li>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll("events")}>Events</span>
        </li>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll("team")}>Team</span>
        </li>
        <li className={styles.navbar__list__item}>
          <span onClick={() => handleClickScroll("contact")}>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
