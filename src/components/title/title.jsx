import React from 'react';
import styles from './title.module.css'

function Title() {
  return(
    <div className={styles.title}>
      <div className={styles.title_text}>제품목록</div>
      <div className={styles.title_menu}>
        <span className={styles.title_menu1}>
          <img className={styles.title_menu1_before} src="/favicon.ico" />
          <span className={styles.title_menu1_text}>제품추가</span>
          <img className={styles.title_menu1_after} src="/favicon.ico" />
        </span>
        <span className={styles.title_menu2}>
          <img className={styles.title_menu2_before} src="/favicon.ico" />
          <span className={styles.title_menu2_text}>데이터 관리</span>
        </span>
      </div>
    </div>
  )
}

export default Title;