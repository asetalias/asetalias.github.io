/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee"
import styles from "./Carousel.module.css"

/**
 * Renders an individual carousel component.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.id - The id of the carousel
 * @param {JSX.Element} props.props - The children of the carousel
 * @returns {JSX.Element} - The rendered carousel item component.
 */
const Carousel = ({ id, props }) => {
  return (
    <div className={styles.carousel__container}>
      <div id={id} className={styles.carousel}>
        <Marquee speed={220} pauseOnHover={true}>
          {props}
        </Marquee>
      </div>
    </div>
  )
}

export default Carousel
