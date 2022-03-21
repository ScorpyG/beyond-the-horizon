import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import ISSTracker from "./components/ISSTracker";
import MarsPhoto from "./components/MarsPhoto";
import NasaPhoto from "./components/NasaPhoto";
import SolarSystem from "./components/SolarSystem";
import { Background } from "./components/Background";

ReactDOM.render(
  <React.StrictMode>
    {/* <Background /> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="exploring" element={<SolarSystem />} />
        <Route path="marsphoto" element={<MarsPhoto />} />
        <Route path="isstracker" element={<ISSTracker />} />
        <Route path="/apod" element={<NasaPhoto />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
