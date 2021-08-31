import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from '../styles/UpcomingEvents.module.scss'
 
const UpcomingEvents = () => {
  return (
  <div>
    <h4>Upcoming Events</h4>
    <Row>
      <Col>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>
            Donut
          </h3>
          <p className={styles.cardText}>
            12:00 pm PDT December 30
          </p>
          </div>
      </Col>
      <Col>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>
            Donut
          </h3>
          <p className={styles.cardText}>
            12:00 pm PDT December 30
          </p>
          </div>
      </Col>
      <Col>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>
            Donut
          </h3>
          <p className={styles.cardText}>
            12:00 pm PDT December 30
          </p>
          </div>
      </Col>
    </Row>
  </div>
  )
}

export default UpcomingEvents