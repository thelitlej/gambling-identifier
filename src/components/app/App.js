import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from '../navbar/NavBar';
import Home from '../home/Home';
import SelfTest from '../selftest/SelfTest';
import About from '../about/About';
import Modal from '../modal/Modal';

import '../../styles/reset.scss';
import '../../styles/general.scss'
import './App.scss';

class App extends Component {
  state = {
    nextpathname: '',
    loadAnim: false,
  }
  componentDidMount() {
    setTimeout(this.startAnimation, 250);
  }
  
  startAnimation = () => {
    this.setState({
      loadAnim: true,
    })
  }

  showModal = (pathname) => {
    this.setState({ 
      modalShown:   true,
      nextpathname: pathname,
    })
  }
  
  hideModal = () => {
    this.setState({ 
      modalShown:   false,
      nextpathname: null,
    })
  }

  render() {
    return (
      <div className="app">
        <NavBar showModal={this.showModal}/>
        { this.state.modalShown && 
          <Modal hideModal={this.hideModal} pathname={this.state.nextpathname}/>
        }
        <Switch>
          <Route exact path='/'          component={() => <Home loadAnim={this.state.loadAnim}/> }/>
          <Route path='/self_test' component={SelfTest}/>
          <Route exact path='/about'     component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;


//import styles from '../../styles/exports.scss';


//fetch('http://localhost:6060/rate', {
    //   method: "GET", 
    //   mode: "cors", // no-cors, cors, *same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   redirect: "follow", // manual, *follow, error
    //   referrer: "no-referrer", // no-referrer, *client
    // })
    // .then(response => response.json())
    // .then(json => console.log(json));