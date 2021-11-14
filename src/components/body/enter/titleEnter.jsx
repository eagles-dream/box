import React from 'react';
import styles from './titleEnter.module.css'

function TitleEnter({handleShowDefault}) {
  return(
    <div className={styles.title}>
      <div className={styles.title_text}>입고서</div>
      <button className={styles.title_menu} onClick={handleShowDefault}>빠트린 입고서 작성</button>
    </div>
  )
}

export default TitleEnter;