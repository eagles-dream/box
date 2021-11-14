import React from 'react';
import styles from './titleOut.module.css'

function TitleOut({handleShowDefault}) {
  return(
    <div className={styles.title}>
      <div className={styles.title_text}>출고서</div>
      <button className={styles.title_menu} onClick={handleShowDefault}>빠트린 출고서 작성</button>
    </div>
  )
}

export default TitleOut;