import React, { useState } from 'react';
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [showFree, setShowFree] = useState(false);
  const handleCloseFree = () => setShowFree(false);
  const handleShowFree = () => setShowFree(true);

  const [showCenter, setShowCenter] = useState(false);
  const handleCloseCenter = () => setShowCenter(false);
  const handleShowCenter = () => setShowCenter(true);

  const [showDefault, setShowDefault] = useState(false);
  const handleCloseDefault = () => setShowDefault(false);
  const handleShowDefault = () => setShowDefault(true);

  return (
    <div className={styles.app}>
      <NavBar
        show={show} 
        showFree={showFree} 
        showCenter={showCenter} 
        showDefault={showDefault}
        handleShow={handleShow}
        handleShowFree={handleShowFree}
        handleShowCenter={handleShowCenter}
        handleShowDefault={handleShowDefault}
        handleCloseDefault={handleCloseDefault}
        handleClose={handleClose}
        handleCloseFree={handleCloseFree}
        handleCloseCenter={handleCloseCenter} />
      <div className={styles.container}>
        <LeftMenu />
        <Switch>
          <Route exact path='/'>
            <Catalog handleShowDefault={handleShowDefault} />
          </Route>
          <Route path='/box'>
            <Catalog handleShowDefault={handleShowDefault} />
          </Route>
          <Route path='/catalog'>
            <Catalog handleShowDefault={handleShowDefault} />
          </Route>
          <Route path='/enter'>
            <Enter handleShowDefault={handleShowDefault} />
          </Route>
          <Route path='/out'>
            <Out handleShowDefault={handleShowDefault} />
          </Route>
          <Route path='/adjust' component={Adjust} />
          <Route path='/purchase' component={Purchase} />
          <Route path='/:id' component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
