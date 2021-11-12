import styles from './app.module.css'
import Catalog from './components/body/catalog/catalog';
import Enter from './components/body/enter/enter'
import Out from './components/body/out/out';
import LeftMenu from './components/leftMenu/leftMenu';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.container}>
        <LeftMenu />
        <Catalog />
        <Enter />
        <Out />
      </div>
    </div>
  );
}

export default App;
