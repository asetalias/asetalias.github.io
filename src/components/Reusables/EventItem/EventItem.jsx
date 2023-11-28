/* eslint-disable react/prop-types */
import styles from "./EventItem.module.css";

/**
 * Renders an individual event item component.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.image - The image source for the event.
 * @param {string} props.title - The title of the event.
 * @param {string} props.date - The date of the event.
 * @param {string} props.time - The time of the event.
 * @param {string} props.venue - The venue of the event.
 * @param {string} props.about - The description of the event.
 * @param {string} props.register - The link to register for the event.
 * @returns {JSX.Element} - The rendered event item component.
 */
const EventItem = ({ image, title, date, time, venue, about, register, gallery}) => {
  return (
    <div className={styles.event}>
      <div className={styles.event__container}>
        <img src={image} alt="poster" className={styles.poster} />
        <img src={image} alt="poster" className={styles.poster__background} />
        <div className={styles.content}>
          <div className={styles.content__container}>
            <h1 className={styles.content__title}>{title}</h1>
            <div className={styles.content__items_container}>
              <div className={styles.content__item}>
                <img
                  className={styles.content__item_img}
                  src="assets/icons/date.svg"
                  alt="date"
                />
                <p className={styles.content__item_detail}>{date}</p>
              </div>
              <div className={styles.content__item}>
                <img
                  className={styles.content__item_img}
                  src="assets/icons/time.svg"
                  alt="time"
                />
                <p className={styles.content__item_detail}>{time}</p>
              </div>
              <div className={styles.content__item}>
                <img
                  className={styles.content__item_img}
                  src="assets/icons/venue.svg"
                  alt="venue"
                />
                <p className={styles.content__item_detail}>{venue}</p>
              </div>
            </div>
            <div className={styles.content__desc}>
              <h3 className={styles.content__desc_title}>About</h3>
              <p className={styles.content__desc_detail}>{about}</p>
            </div>
          </div>
        </div>
        {register && (
          <button className={styles.content__btn}>
            <a href={register} target="_blank" rel="noreferrer">
              Register
            </a>
          </button>
        )},
        {gallery && (
          <button className={styles.content__btn}>
            <a href={gallery} target="_blank" rel="noreferrer">
              View Gallery
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default EventItem;
