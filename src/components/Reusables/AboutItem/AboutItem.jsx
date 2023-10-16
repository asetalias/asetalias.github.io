/* eslint-disable react/prop-types */
import styles from './AboutItem.module.css'

/**
 * Renders an about item component.
 *
 * @param {object} props - The properties for the about item component.
 * @param {string} props.image - The image source for the item.
 * @param {string} props.title - The title of the item.
 * @param {string} props.description - The description of the item.
 * @return {JSX.Element} The about item component.
 */
const AboutItem = ({image, title, description}) => {
  return (
    <div className={styles.about_item}>
        <img className={styles.about_item__image} src={image} alt="item" />
        <h2 className={styles.about_item__title}>{title}</h2>
        <p className={styles.about_item__description}>{description}</p>
    </div>
  )
}

export default AboutItem