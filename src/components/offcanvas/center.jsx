import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'react-bootstrap';
import styles from './center.module.css'

const Center = ({showCenter, handleCloseCenter}) => {
  return(
    <Offcanvas className={styles.offcanvas} 
      show={showCenter} 
      onHide={handleCloseCenter} 
      placement={'end'}
      backdropClassName={styles.backdrop}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className={styles.title}>고객센터</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.body}>무엇이든 물어보세요
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Center;