import React from 'react';
import styles from './errorPage.module.css'

const ErrorPage = () => {
  return(
    <div className={styles.container}>
      <span>현재 작업중입니다.</span>
      <span></span>
      <span>상단과 좌측 메뉴버튼을 클릭해 보세요</span>
    </div>    
  )
}

export default ErrorPage;