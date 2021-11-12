import React from 'react';
import styles from './titleEnter.module.css'

function TitleEnter() {
  return(
    <div className={styles.title}>
      <div className={styles.title_text}>입고서</div>
      <div className={styles.title_menu}>빠트린 입고서 작성</div>
    </div>
  )
}

export default TitleEnter;