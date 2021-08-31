import styles from "@styles/Home.module.css";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Midnight Café</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to The Midnight Café</h1>
      </main>
    </div>
  );
};

export default Home;
