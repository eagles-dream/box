import React from 'react';
import styles from './titleOut.module.css'

function TitleOut() {
  return(
    <div className={styles.title}>
      <div className={styles.title_text}>출고서</div>
      <div className={styles.title_menu}>빠트린 출고서 작성</div>
    </div>
  )
}

export default TitleOut;