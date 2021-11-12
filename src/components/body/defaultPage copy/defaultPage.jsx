import React from 'react';
import styles from './defaultPage.module.css'

const DefaultPage = () => {
  return(
    <div className={styles.container}>
      <span>방문해 주셔서 감사합니다.</span>
      <span>원하는 메뉴를 골라주세요</span>
    </div>    
  )
}

export default DefaultPage;