import styles from './leftMenu.module.css'
import data from '../data/data'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const LeftMenu = () => {
  const [open, setOpen] = useState(true)
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
          return(
            <NavLink className={styles.link} activeClassName={styles.active} to={`/${data.id}`} key={data.index}>
              <span className={styles.menu} key={data.index}>
                <span  className={styles.icon}><i className={data.icon}></i></span>
                <li className={styles.li}>{data.title}</li>
              </span>
            </NavLink>
          )
        })
        }        
      </ul>
    </div>
  )
}

export default LeftMenu;