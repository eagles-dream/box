import React from 'react';
import styles from './titlePurchase.module.css'

function TitlePurchase() {
  return(
    <div className={styles.title}>
      <div className={styles.title_text}>구매 및 판매</div>
    </div>
  )
}

export default TitlePurchase;