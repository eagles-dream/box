import styles from './navBar.module.css'

function NavBar() {
  return(
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.img} src="/favicon.ico" alt="logo" />
        <span className={styles.title}>BOXhero</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.menu1}>
          <img className={styles.icon1_before} src="/favicon.ico" alt="도우미_폰트" />
          <span className={styles.text1}>팀 세팅 도우미</span>
          <img className={styles.icon1_after} src="/favicon.ico" alt="도우미_아이콘" />
        </span>
        <span className={styles.menu2}>
          <img className={styles.icon2_before} src="/favicon.ico" alt="도우미_폰트" />
          <span className={styles.text2}>무료 체험중</span>
          <img className={styles.icon2_after} src="/favicon.ico" alt="도우미_아이콘" />
        </span>
        <span className={styles.menu3}>
          <img className={styles.icon3_before} src="/favicon.ico" alt="도우미_폰트" />
          <span className={styles.text3}>고객센터</span>
          <img className={styles.icon3_after} src="/favicon.ico" alt="도우미_아이콘" />
        </span>
        <img className={styles.notice} src="/favicon.ico" alt="notice" />
        <img className={styles.login} src="/favicon.ico" alt="login" />
      </div>
    </div>
  )
}

export default NavBar;