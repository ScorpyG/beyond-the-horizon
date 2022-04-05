// Import necessary dependencies / components
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Ring } from "react-cssfx-loading/lib";
import { Background } from "./Background";
import Navbar from "./Navbar";

// Import styling
import "../styling/isstracker.sass";

// ISS Tracker Page JSX component
const ISSTracker = () => {
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [altitude, setAltitude] = useState(0);
  const [ISS_Velocity, setISSVelocity] = useState(0);

  useEffect(() => {
    const getISSData = async () => {
      fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
        .then((res) => res.json())
        .then((data) => {
          if (data.hasOwnProperty("status")) {
            setError(data);
          } else {
            setLatitude(data.latitude);
            setLongitude(data.longitude);
            setAltitude(data.altitude);
            setISSVelocity(data.velocity);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // Limited fetch update every 1s
    setInterval(getISSData, 1000);
  }, []);

  // Return DOM for error
  if (error) {
    return (
      <>
        <Navbar/>
        <div className="parent-div">
          <div className="centered-div">
            <div className="loading-animation">
              <Ring color="#c8c8c8" height="150px" width="150px" />
            </div>

            <Typewriter
              options={{
                cursor: "_",
                autoStart: true,
                strings: [
                  "SEARCHING...",
                  `ERROR: CODE ${error.status}`,
                  `${error.error}`,
                ],
                loop: true,
                skipAddStyles: true,
              }}
            />
          </div>
        </div>
        <Background />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <h1 className="title">International Space Station Tracker</h1>
        <div className="ISS-data">
          <h2>ISS Real Time Data</h2>
          <p><b>LONGITUDE</b>: {`${longitude.toFixed(2)}`}&deg;</p>
          <p><b>LATITUDE</b>: {`${latitude.toFixed(2)}`}&deg;</p>
          <p><b>ALTITUDE</b>: {`${altitude.toFixed(2)}`} km</p>
          <p><b>VELOCITY</b>: {`${ISS_Velocity.toFixed(2)}`} km/h</p>
        </div>
      </>
    );
  }
};

export default ISSTracker;
