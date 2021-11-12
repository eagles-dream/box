import styles from './leftMenu.module.css'
import data from '../data/data'
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const LeftMenu = () => {
  const [open, setOpen] = useState(true)
  const history = useHistory()
  const onClick = () => {
    setOpen((open)=>{return !open})
  }

  return(
    <div className={open ? styles.container : styles.container_close}>
      <span className={styles.user}>
        <span className={open ? styles.name : styles.name_close}>User</span>
        <button className={open ? styles.button : styles.button_close} onClick={onClick}>
          <i className="fas fa-angle-double-left"></i>
        </button>
      </span>
      <ul className={styles.ul}>
        {
        data.map((data)=>{
          const link = () => {
            history.push(`/${data.id}`)
          }
          return(
            <span className={styles.menu} key={data.index} onClick={link}>
              <span  className={styles.icon}><i className={data.icon}></i></span>
              <li className={styles.li}>{data.title}</li>
            </span>
          )
        })
        }        
      </ul>
    </div>
  )
}

export default LeftMenu;