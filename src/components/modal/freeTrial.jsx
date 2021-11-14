import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import styles from './freeTrial.module.css'

const FreeTrial = ({showFree, handleCloseFree}) => {
  return(
    <Modal size='lg' show={showFree} onHide={handleCloseFree}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.header_title}>무료 체험 행사중</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>무료체험에 오신걸 환영합니다.</Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Modal.Title className={styles.footer_title}></Modal.Title>
        <Button className={styles.footer_button} onClick={handleCloseFree}>참여신청
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FreeTrial;