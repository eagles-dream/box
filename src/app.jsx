import styles from './app.module.css'
import Body from './components/body/body';
import LeftMenu from './components/leftMenu/leftMenu';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.container}>
        <LeftMenu />
        <Body />
      </div>
    </div>
  );
}

export default App;
