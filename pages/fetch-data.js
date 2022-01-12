import Head from "next/head";
import styles from "../styles/About.module.css";
import Link from "next/link";

export const FetchSomeData = ({ email }) => {
  return (
    <>
      <Head>Fetch Data</Head>
      <div className={styles.links}>
        <Link href="/">Go back to home</Link>
      </div>
      <div>
        <h1>Fetch Data</h1>
        <h3>This page fetches the data</h3>
        <br />
        <ul>
          <li>
            <div>
              <h2>Static Prop</h2>
              <h3>{`"${email}"`}</h3>
              <h5>
                Above data will be fetched from an API on the build time of this
                page however it can be refreshed/reloaded every 10 seconds for
                new data.
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default FetchSomeData;

export async function getStaticProps(context) {
  // data fetching logic goes here
  let id = Math.floor(Math.random() * 10 + 1);
  let email = await fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then((res) => res.data.email);
  return {
    props: { email: email },
    revalidate: 10,
  };
}
