import styles from './leftMenu.module.css'
import data from '../data/data'
import { useState } from 'react/cjs/react.development'

const LeftMenu = () => {
  const [open, setOpen] = useState(true)
  const onClick = () => {
    setOpen((open)=>{return !open})
  }

  return(
    <div className={open ? styles.container : styles.container_close}>
      <span className={styles.user} onClick={onClick}>
        <span className={open ? styles.name : styles.name_close}>User</span>
        <button className={open ? styles.button : styles.button_close}>
        <i className="fas fa-angle-double-left"></i>
        </button>
      </span>
      <ul className={styles.ul}>
        {
        data.map((data)=>{
          return(
            <span className={styles.menu} key={data.id}>
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