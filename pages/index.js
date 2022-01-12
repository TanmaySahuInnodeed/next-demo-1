import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="keywords" content='Demo Project, React, React Js, Next, Next Js, Programming, Coding' />
      </Head>
      <div className={styles.container}>
        <h1>Welcome to Next.js</h1>
        <ul className={styles.listItem}>
          <li>
            <Link href='/factorial'>Factorial Calculator</Link>
            <Link href='/about'>About</Link>
            <Link href='/fetch-data'>Fetch Some Data</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
