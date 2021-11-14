import React from 'react';
import styles from './out.module.css'
import TitleOut from './titleOut';

const Out = ({handleShowDefault}) => {
  return(
    <div className={styles.container}>
      <TitleOut handleShowDefault={handleShowDefault} />
    </div>    
  )
}

export default Out;