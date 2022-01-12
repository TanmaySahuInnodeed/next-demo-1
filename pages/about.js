import Head from "next/head";
import styles from "../styles/About.module.css";

export const About = () => {
  return (
    <>
      <Head>About Us</Head>
      <div className={styles.container}>
        <h2 className={styles.head}>About Us</h2>
        <p>
          Ex dolore duis elit dolore. Ullamco ea sit qui ullamco voluptate
          cupidatat commodo ullamco exercitation duis exercitation. Duis
          reprehenderit tempor labore nostrud adipisicing incididunt duis.
        </p>
        <p>
          Aliqua exercitation elit esse ad ea officia laboris adipisicing sint
          occaecat. Elit ad ipsum officia nulla laborum ex occaecat est
          incididunt quis ipsum. Fugiat velit veniam exercitation elit tempor
          pariatur ut dolor labore Lorem ea nisi eu. Et magna enim tempor eu ea
          Lorem cupidatat cupidatat incididunt veniam deserunt tempor commodo
          sunt. In ex elit elit proident aute ipsum consequat deserunt id velit
          nulla adipisicing qui officia.
        </p>
      </div>
    </>
  );
};

export default About;
