import React, { useState } from 'react';
import styles from './navBar.module.css'
import { NavLink } from 'react-router-dom'
import TeamSettingHelper from '../modal/teamSettingHelper';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <div className={styles.container}>
      <NavLink className={styles.link} to="/">
        <div className={styles.logo}>
          <span className={styles.logo_font}>
            <i className="fab fa-dropbox"></i>
          </span>
          <span className={styles.title}>BOX</span>
        </div>
      </NavLink>
      <div className={styles.menu}>
        <span className={styles.menu1} onClick={handleShow}>
          <span className={styles.flag}><i className="far fa-flag"></i></span>
          <span className={styles.text1}>팀 세팅 도우미</span>
          <span className={styles.times}><i className="fas fa-times"></i></span>
        </span>
        <span className={styles.menu2} onClick={handleShow}>
          <span className={styles.exclamation}><i className="fas fa-exclamation"></i></span>          
          <span className={styles.text2}>무료 체험중</span>
          <span className={styles.right}><i className="fas fa-chevron-right"></i></span>
        </span>
        <span className={styles.menu3}>
          <span className={styles.circle}><i className="far fa-question-circle"></i></span>
          <span className={styles.text3}>고객센터</span>
        </span>
        <span className={styles.notice}><i className="fas fa-bell"></i></span>
        <span className={styles.user}><i className="fas fa-user"></i></span>
      </div>
      <TeamSettingHelper show={show} handleClose={handleClose} />
    </div>
  )
}

export default NavBar;