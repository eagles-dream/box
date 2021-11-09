import styles from './navBar.module.css'

function NavBar() {
  return(
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.logo_font}>
          <i className="fab fa-dropbox"></i>
        </span>
        <span className={styles.title}>BOXhero</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.menu1}>
          <i className="far fa-flag"></i>
          <span className={styles.text1}>팀 세팅 도우미</span>
          <i className="fas fa-times"></i>
        </span>
        <span className={styles.menu2}>
          <i className="fas fa-exclamation"></i>
          <span className={styles.text2}>무료 체험중</span>
          <i className="fas fa-chevron-right"></i>
        </span>
        <span className={styles.menu3}>
          <i className="far fa-question-circle"></i>
          <span className={styles.text3}>고객센터</span>
        </span>
        <span className={styles.notice}>
          <i className="fas fa-bell"></i>
        </span>
        <span className={styles.user}>
          <i className="fas fa-user"></i>
        </span>
      </div>
    </div>
  )
}

export default NavBar;