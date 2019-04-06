import React, { Component } from 'react';

import Lottie from 'react-lottie';

import logoAnimation from '../../resources/animations/logo-animation.json'

import './Home.scss'

class Home extends Component {
  render() {
    const animOptions = {
      loop: false,
      speed: 0.4,
      autoplay: true, 
      animationData: logoAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div className="home">
        { this.props.loadAnim &&
          <div className="welcome-container">
              <div className="animation-container">
                  <div className="animation">
                    <Lottie 
                      options={animOptions} 
                      height={'100%'} 
                      width={'100%'} 
                      isClickToPauseDisabled={true}/>
                  </div>
              </div>
            <p className="welcome-header">Welcome to PathoGamble</p>
            <p className="welcome-body">The Online Self Test to Identify Pathological Gambling</p>
          </div>
        }
      </div>
    )
  }
}

export default Home;