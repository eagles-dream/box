import React from 'react';
import Content from '../content/content';
import Search from '../search/search';
import Title from '../title/title';
import styles from './body.module.css'

const Body = () => {
  return(
    <div className={styles.container}>
      <Title />
      <Search />
      <Content />
    </div>    
  )
}

export default Body;