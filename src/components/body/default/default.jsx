import React from 'react';
import styles from './default.module.css'

const Default = () => {
  return(
    <div className={styles.container}>
      <span>잘못된 페이지로 접근하셨습니다.</span>
      <span>올바른 페이지로 돌아가세요</span>
    </div>    
  )
}

export default Default;