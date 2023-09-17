/* eslint-disable react/prop-types */
import styles from './AboutItem.module.css'

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