import EventItem from "../Reusables/EventItem/EventItem";
import styles from "./Events.module.css";

const Events = () => {
  const data = [
    {
      image: "/assets/images/poster.png",
      title: "Hacktoberfest 2021",
      date: "September 16th, 2023",
      time: "10:00 AM",
      venue: "Amity University, Lucknow Campus",
      about: "Hacktoberfest is a month-long celebration of open source software run by DigitalOce."
    },
  ];

  return (
    <div id="about" className={styles.events}>
      <h1 className={styles.events__title}>
        Our <span className={styles.events__title_highlight}>Events</span>{" "}
        Galore!
      </h1>
      <div className={styles.events__container}>
        {data.map((item) => {
          return (
            <EventItem
              key={item.title}
              image={item.image}
              title={item.title}
              date={item.date}
              time={item.time}
              venue={item.venue}
              about={item.about}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
