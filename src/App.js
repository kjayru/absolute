import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from './Containers/HomeContainer';
import SeccionContainer from './Containers/SeccionContainer';


class App extends Component {
  
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={HomeContainer} />
            <Route exact  path="/secciones/:action?" component={SeccionContainer}/>
          </div>
      </Router>
    );
  }
 
}

export default App;
