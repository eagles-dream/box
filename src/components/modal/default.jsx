import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import styles from './default.module.css'

const Default = ({showDefault, handleCloseDefault}) => {
  return(
    <Modal size='sm' show={showDefault} onHide={handleCloseDefault}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.header_title}>알림</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>준비중입니다.</Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Modal.Title className={styles.footer_title}></Modal.Title>
        <Button className={styles.footer_button} onClick={handleCloseDefault}>닫기
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Default;