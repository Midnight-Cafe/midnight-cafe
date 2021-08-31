import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "../components/Hero/Hero";
import MemberWall from "../components/MemberWall";
import Navigation from "../components/Navigation";
import UpcomingEvents from '../components/UpcomingEvents'
import styles from "../styles/Home.module.css";

interface Props {
  members: any;
}

// lint-ignore:next-line Property 'members' does not exist on type
const Home: NextPage<Props> = ({ members }) => {
  return (
    <div>
      <Navigation />
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
          <div className={styles.MemberWall}>
            <MemberWall members={members} />
          </div>
          <div className={styles.UpcomingEvents}>
            <UpcomingEvents />
          </div>
        </main>
      </div>
    </div>
  );
};

//api call to get list of members from the github org
Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/orgs/Midnight-Cafe/members')
  const members = await res.json()
  return { members: members };
}

export default Home;
