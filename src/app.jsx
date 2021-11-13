import React from 'react';
import styles from './app.module.css'
import Catalog from './components/body/catalog/catalog';
import Enter from './components/body/enter/enter'
import Out from './components/body/out/out';
import Adjust from './components/body/adjust/adjust';
import Purchase from './components/body/purchase/purchase';
import ErrorPage from './components/body/errorPage/errorPage';
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
          <Route path='/catalog' component={Catalog} />
          <Route path='/enter' component={Enter} />
          <Route path='/out' component={Out} />
          <Route path='/adjust' component={Adjust} />
          <Route path='/purchase' component={Purchase} />
          <Route path='/:id' component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
