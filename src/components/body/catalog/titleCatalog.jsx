import React from 'react';
import styles from './titleCatalog.module.css'

function TitleCatalog({handleShowDefault}) {
  return(
    <div className={styles.title}>
      <div className={styles.title_text}>제품목록</div>
      <div className={styles.title_menu}>
        <span className={styles.title_menu1} onClick={handleShowDefault}>
          <i className="fas fa-plus"></i>
          <span className={styles.title_menu1_text}>제품추가</span>
          <i className="fas fa-chevron-right"></i>
        </span>
        <span className={styles.title_menu2} onClick={handleShowDefault}>
          <i className="fas fa-database"></i>
          <span className={styles.title_menu2_text}>데이터 관리</span>
        </span>
      </div>
    </div>
  )
}

export default TitleCatalog;