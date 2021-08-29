import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Midnight Café</title>
        <meta name="description" content="The social hub for developers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to The Midnight Café</h1>
      </main>
    </div>
  );
};

export default Home;
