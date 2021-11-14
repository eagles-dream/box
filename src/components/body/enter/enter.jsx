import React from 'react';
import styles from './enter.module.css'
import TitleEnter from './titleEnter';

const Enter = ({handleShowDefault}) => {
  return(
    <div className={styles.container}>
      <TitleEnter handleShowDefault={handleShowDefault} />
    </div>    
  )
}

export default Enter;