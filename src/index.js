import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import App from './App';
import ISSTracker from './components/ISSTracker';
import MarsPhoto from './components/MarsPhoto';
import SolarSystem from './components/SolarSystem';

ReactDOM.render(
  <React.StrictMode>

    <App/> {/*Testing JSX Components*/}

    {/* <Router>
      <Route exact path='/' component={App}/>
      <Route path='/exploring' component={SolarSystem}/>
      <Route path='/marsphoto' component={MarsPhoto}/>
      <Route path='/isstracker' component={ISSTracker}/>
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);
