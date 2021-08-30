import React from "react";
import styles from "../styles/Navigation.module.scss"
import { Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Nav className={styles.MainNav}>
      <Nav.Link href="/" className={styles.NavItem}>About</Nav.Link>
      <Nav.Link href='/community' className={styles.NavItem}>Community</Nav.Link>
      <Nav.Link href='/contact' className={styles.NavItem}>Contact</Nav.Link>
      <Nav.Link className={styles.NavItem}>Login</Nav.Link>
      <Nav.Link className={styles.NavItem}>Signup</Nav.Link>
    </Nav>
  );
}

