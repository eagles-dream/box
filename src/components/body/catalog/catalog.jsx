import React from 'react';
import styles from './catalog.module.css'
import TitleCatalog from './titleCatalog';
import SearchCatalog from './searchCatalog';
import ContentCatalog from './contentCatalog';

const Catalog = () => {
  return(
    <div className={styles.container}>
      <TitleCatalog />
      <SearchCatalog />
      <ContentCatalog />
    </div>    
  )
}

export default Catalog;