import React from 'react';
import styles from './app.module.css'
import Catalog from './components/body/catalog/catalog';
import Enter from './components/body/enter/enter'
import Out from './components/body/out/out';
import ErrorPage from './components/body/errorPage/errorPage';
import LeftMenu from './components/leftMenu/leftMenu';
import NavBar from './components/navBar/navBar';
import DefaultPage from './components/body/defaultPage copy/defaultPage';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.container}>
        <LeftMenu />
        <Switch>
          <Route exact path='/' component={DefaultPage} />
          <Route path='/catalog' component={Catalog} />
          <Route path='/enter' component={Enter} />
          <Route path='/out' component={Out} />
          <Route path='/:id' component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
