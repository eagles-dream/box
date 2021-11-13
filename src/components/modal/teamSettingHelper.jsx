import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import styles from './teamSettingHelper.module.css'

const TeamSettingHelper = ({show, handleClose}) => {
  return(
    <Modal size='lg' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.header_title}>팀 세팅 도우미</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>박스에 오신것을 환영합니다.</Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Modal.Title className={styles.footer_title}>도움이 필요하세요?</Modal.Title>
        <Button className={styles.footer_button} onClick={handleClose}>도움요청
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TeamSettingHelper;