import React from 'react';
import styles from './searchCatalog.module.css'

const SearchCatalog = () => {
  return(
    <div className={styles.search}>
      <input className={styles.input} type="text" placeholder="Search..." />
      <button className={styles.button} type="button">CLICK</button>
      <input className={styles.checkbox} type="checkbox" />
      <span className={styles.text}>재고보유</span>
    </div>
  )
};

export default SearchCatalog;