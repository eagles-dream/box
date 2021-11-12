import React from 'react';
import styles from './app.module.css'
import Catalog from './components/body/catalog/catalog';
import Enter from './components/body/enter/enter'
import Out from './components/body/out/out';
import Default from './components/body/default/default';
import LeftMenu from './components/leftMenu/leftMenu';
import NavBar from './components/navBar/navBar';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.container}>
        <LeftMenu />
        <Switch>
          <Route exact path='/' component={Catalog} />
          <Route path='/enter' component={Enter} />
          <Route path='/out' component={Out} />
          <Route path='/:id' component={Default} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
