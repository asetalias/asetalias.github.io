import AboutItem from "../Reusables/AboutItem/AboutItem";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const data = [
    {
      image: "/assets/images/hero-one.png",
      title: "What?",
      description:
        "We are ALiAS (Amity Linux Assistance Sapience), a passionate coding club dedicated to the exploration and promotion of Linux and open-source technologies.",
    },
    {
      image: "/assets/images/hero-one.png",
      title: "Why?",
      description:
        "We exist to inspire, educate, and collaborate with students who share our enthusiasm for open-source software and to create a thriving community of tech enthusiasts.",
    },
    {
      image: "/assets/images/hero-one.png",
      title: "How?",
      description:
        "We reach our goals through workshops, hackathons, open-source contributions, and a focus on skill development, all in a supportive learning community.",
    },
  ];

  return (
    <div id="about" className={styles.aboutus}>
      <h1 className={styles.aboutus__title}>
        <span className={styles.aboutus__title_highlight}>About</span> Us
      </h1>
      <div className={styles.aboutus__container}>
        {data.map((item) => {
          return (
            <AboutItem
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
