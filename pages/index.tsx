import { Hero } from "../components/Hero/Hero";
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
        <Hero>
          <Hero.Title>The Midnight Café</Hero.Title>
          <Hero.Subtitle>
            We are a community dedicated to help tech folks find and chat with
            other tech folks. Whether you are a seasoned veteran or green bean,
            we are open to everyone!
          </Hero.Subtitle>
          <Hero.CTA>Join Now!</Hero.CTA>
        </Hero>
      </main>
    </div>
  );
};

export default Home;
