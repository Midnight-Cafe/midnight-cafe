import styles from "../../styles/Hero.module.scss";
import React from "react";
import { Button } from "react-bootstrap";

interface HeroTitleProps {
  children?: React.ReactNode;
}

interface HeroSubtitleProps {
  children?: React.ReactNode;
}

interface HeroCTAProps {
  children?: React.ReactNode;
}

const HeroTitle = (props: React.PropsWithChildren<HeroTitleProps>) => (
  <h1 className={styles.HeroTitle}>{props.children}</h1>
);

const HeroSubtitle = (props: React.PropsWithChildren<HeroSubtitleProps>) => (
  <h2 className={styles.HeroSubtitle}>{props.children}</h2>
);

const HeroCTA = (props: React.PropsWithChildren<HeroCTAProps>) => (
  <Button className={styles.HeroCTA}>{props.children}</Button>
);

class Hero extends React.Component {
  static Title: Function;
  static Subtitle: Function;
  static CTA: Function;

  render() {
    return <div>{this.props.children}</div>;
  }
}

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;
Hero.CTA = HeroCTA;

export { Hero };
