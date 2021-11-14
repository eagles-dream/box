import React from 'react';
import styles from './catalog.module.css'
import TitleCatalog from './titleCatalog';
import SearchCatalog from './searchCatalog';
import ContentCatalog from './contentCatalog';

const Catalog = ({handleShowDefault}) => {
  return(
    <div className={styles.container}>
      <TitleCatalog handleShowDefault={handleShowDefault} />
      <SearchCatalog />
      <ContentCatalog handleShowDefault={handleShowDefault} />
    </div>    
  )
}

export default Catalog;