import React from 'react';
import styles from './content.module.css'

const Content = () => {
  return(
    <div className={styles.content}>
      <span className={styles.text}>등록된 제품이 없습니다. 제품을 등록해 주세요</span>
      <button className={styles.button}>제품추가</button>
    </div>
  )
};

export default Content;