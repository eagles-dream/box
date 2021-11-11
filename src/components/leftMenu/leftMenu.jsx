import styles from './leftMenu.module.css'
import data from '../data/data'

const LeftMenu = () => {
  return(
    <div className={styles.container}>
      <span className={styles.user}>User</span>
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