import styles from "./Alumni.module.css";
import Carousel from "../Reusables/Carousel/Carousel";
import AlumniItem from "../Reusables/AlumniItem/AlumniItem";

const Alumni = () => {
  const data = [
    {
      image: "/assets/images/photo.png",
      firstName: "Venkatesh",
      lastName: "Kumar",
      quote: "Ask questions! No matter what",
    },
    {
      image: "/assets/images/photo.png",
      firstName: "Venkatesh",
      lastName: "Kumar",
      quote: "Ask questions! No matter what",
    },
    {
      image: "/assets/images/photo.png",
      firstName: "Venkatesh",
      lastName: "Kumar",
      quote: "Ask questions! No matter what",
    },
  ];

  return (
    <div id="alumni" className={styles.alumni}>
      <h1 className={styles.alumni__title}>
        <span className={styles.alumni__title_highlight}>Alumni</span> Spotlight
      </h1>
      <Carousel
        id="alumni__carousel"
        props={data.map((item) => {
          return (
            <AlumniItem
              key={item.name}
              image={item.image}
              firstName={item.firstName}
              lastName={item.lastName}
              quote={item.quote}
            />
          );
        })}
      />
    </div>
  );
};

export default Alumni;
