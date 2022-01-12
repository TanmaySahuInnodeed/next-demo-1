import Head from "next/head";
import styles from "../styles/About.module.css";
import Link from "next/link";

export const FetchSomeData = ({ name }) => {
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
              <h2>Server Side Prop</h2>
              <h3>{`"${name}"`}</h3>
              <h5>
                Above data will be fetched from an API whenever this page gets
                loaded. Reload the page to get different data.
              </h5>
            </div>
          </li>
          <li>
            <div>
              <h2>Server Side Prop</h2>
              <h3>{`"${name}"`}</h3>
              <h5>
                Above data is been fetched from server when this page got loaded
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default FetchSomeData;

export async function getServerSideProps(context) {
  // data fetching logic goes here
  let id = Math.floor(Math.random() * 10 + 1);
  let res = await fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then((res) => res.data.email);
  return {
    props: { name: res },
  };
}
