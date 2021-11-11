import styles from './leftMenu.module.css'

const LeftMenu = () => {
  const data = [
    {
      id: 1,
      icon: "fas fa-box",
      title: '제품목록'
    },
    {
      id: 2,
      icon: "fas fa-arrow-down",
      title: '입고'
    },
    {
      id: 3,
      icon: "fas fa-arrow-up",
      title: '출고'
    },
    {
      id: 4,
      icon: "fas fa-exchange-alt",
      title: '조정'
    },
    {
      id: 5,
      icon: "far fa-file-alt",
      title: '구매 및 판매'
    },
    {
      id: 6,
      icon: "fas fa-history",
      title: '히스토리'
    }, 
    {
      id: 7,
      icon: "far fa-chart-bar",
      title: '대시보드'
    },
    {
      id: 8,
      icon: "far fa-eye",
      title: '재고분석'
    },
    {
      id: 9,
      icon: "fas fa-plus-circle",
      title: '추가기능'
    },
    {
      id: 10,
      icon: "fas fa-database",
      title: '데이터 관리'
    },
    {
      id: 11,
      icon: "fas fa-scroll",
      title: '라벨인쇄'
    },
    {
      id: 12,
      icon: "fas fa-cogs",
      title: '결제 및 설정'
    },
  ]
    
  return(
    <div className={styles.container}>
      <span className={styles.user}>User</span>
      <ul className={styles.ul}>
        <span className={styles.menu}>
          <span  className={styles.icon}><i className="fas fa-box"></i></span>
          <li className={styles.li}>제품목록</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="fas fa-arrow-down"></i></span>
          <li className={styles.li}>입고</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="fas fa-arrow-up"></i></span>
          <li className={styles.li}>출고</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="fas fa-exchange-alt"></i></span>
          <li className={styles.li}>조정</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="far fa-file-alt"></i></span>
          <li className={styles.li}>구매 및 판매</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="fas fa-history"></i></span>
          <li className={styles.li}>히스토리</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="far fa-chart-bar"></i></span>
          <li className={styles.li}>대시보드</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="far fa-eye"></i></span>
          <li className={styles.li}>재고분석</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="fas fa-plus-circle"></i></span>
          <li className={styles.li}>추가기능</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="fas fa-database"></i></span>
          <li className={styles.li}>데이터 관리</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="fas fa-scroll"></i></span>
          <li className={styles.li}>라벨인쇄</li>
        </span>
        <span className={styles.menu}>
          <span className={styles.icon}><i className="fas fa-cogs"></i></span>
          <li className={styles.li}>결제 및 설정</li>
        </span>
      </ul>
    </div>
  )
}

export default LeftMenu;