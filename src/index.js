// Import necessary dependencies / components
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import MarsPhoto from "./components/MarsPhoto";
import NasaPhoto from "./components/APOD";
import SolarSystem from "./components/SolarSystem";

// import ISSTracker from "./components/ISSTracker";
// import { SpaceX } from "./components/SpaceX";

import { Error } from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="exploring" element={<SolarSystem />} />
        <Route path="marsphoto" element={<MarsPhoto />} />
        <Route path="apod" element={<NasaPhoto />} />

        {/* <Route path="isstracker" element={<ISSTracker />} /> */}
        {/* <Route path="spacex" element={<SpaceX />} /> */}

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
