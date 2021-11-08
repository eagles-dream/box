import styles from './leftMenu.module.css'

const LeftMenu = () => {
  return(
    <div className={styles.container}>
      <span className={styles.user}>User</span>
      <ul className={styles.ul}>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>제품목록</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>입고</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>출고</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>조정</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>구매 및 판매</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>히스토리</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>대시보드</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>재고분석</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>추가기능</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>데이터 관리</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>라벨인쇄</li>
        </span>
        <span className={styles.menu}>
          <img src="/favicon.ico" />
          <li className={styles.li}>결재 및 설정</li>
        </span>
      </ul>
    </div>
  )
}

export default LeftMenu;