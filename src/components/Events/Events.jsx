import { useState, useEffect } from "react";
import EventItem from "../Reusables/EventItem/EventItem";
import styles from "./Events.module.css";
import Carousel from "../Reusables/Carousel/Carousel";

/**
 * Fetches data from "/data/events.json" and sets the fetched data in the component's state.
 *
 * @return {JSX.Element} The rendered Events component.
 */
const Events = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("/data/events.json");
    const data = await response.json();
    setData(data);
  }

  return (
    <div id="events" className={styles.events}>
      <h1 className={styles.events__title}>
        Our <span className={styles.events__title_highlight}>Events</span>{" "}
        Galore!
      </h1>
      <Carousel
        id="events__carousel"
        props={data.map((item) => {
          return (
            <EventItem
              key={item.id}
              image={item.image}
              title={item.title}
              date={item.date}
              time={item.time}
              venue={item.venue}
              about={item.about}
              register={item.register}
            />
          );
        })}
      />
    </div>
  );
};

export default Events;
