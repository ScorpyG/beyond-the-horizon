// Import necessary dependencies / components
import { useState } from "react";
import Navbar from "./Navbar";
import { trackPromise } from "react-promise-tracker";
import { Background } from "./Background";
import Typewriter from "typewriter-effect";

// Import styling
import "../styling/marsphoto.sass";

// Mars Photo Page JSX component
const MarsPhoto = () => {
  const [marsData, setMarsData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch function
  const dateSubmit = () => {
    const fetchPhoto = async () => {
      const response = await trackPromise(
        fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${process.env.REACT_APP_API_KEY}`
        )
      );
      const data = await response.json();
      setMarsData(data);
    };

    fetchPhoto();
    setSelectedDate(null);
  };

  // At start the fetch hasn't start this will the default JSX component
  if (!marsData) {
    return (
      <>
        <Navbar />
        <h1 className="title">Mars Rover Photo</h1>
        <div className="date-container">
          <div className="date-child-container">
            <h1>Select a date & look for 👽</h1>
            <input
              className="date-input"
              type="date"
              onChange={(event) => setSelectedDate(event.target.value)}
              dateformat="yyyy/MM/dd"
              min="2012-08-06"
              max={new Date().toISOString().split("T")[0]}
            />

            {/* <button className="date-confirm" onClick={dateSubmit}>
              CONFIRM
            </button> */}

            {/* Enable submit button only when a dated is selected */}
            {selectedDate && (
              <button className="date-confirm" onClick={dateSubmit}>
                CONFIRM
              </button>
            )}
          </div>
        </div>
        <Background />
      </>
    );
  }

  // API data
  const photoList = marsData.photos.map((item) => item.img_src);
  const OtherInfo = marsData.photos[0];

  // Initial Date Selector element
  return (
    <>
      <Navbar />
      <h1 className="title">Mars Rover Photo</h1>
      <div className="mars-container">
        <div className="input-container">
          <h1>Select a date & look for 👽</h1>
          <input
            className="date-input"
            type="date"
            onChange={(event) => setSelectedDate(event.target.value)}
            dateformat="yyyy/MM/dd"
            min="2012-08-06"
            max={new Date().toISOString().split("T")[0]}
          />

          {/* <button className="date-confirm" onClick={dateSubmit}>
            CONFIRM
          </button> */}

          {/* Enable submit button only when a dated is selected */}
          {selectedDate && (
            <button className="date-confirm" onClick={dateSubmit}>
              Confirm
            </button>
          )}
        </div>

        {/* Return msg there no pictures taken on this day */}
        {marsData.photos.length === 0 && (
          <div className="error">
            <Typewriter
              options={{
                cursor: " <",
                autoStart: true,
                strings: [
                  "Sorry...no photos was taken on this day",
                  "We haven't received anything for our ROVER, comeback tomorrow",
                  "Perhaps, the aliens removed the evidence",
                ],
                loop: true,
                skipAddStyles: true,
              }}
            />
          </div>
        )}

        {marsData.photos.length !== 0 && (
          <div>
            <div>
              <h2>{`${OtherInfo.earth_date}`}</h2>
              <h2>
                <a
                  href="https://en.wikipedia.org/wiki/Sol"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sol
                </a>
                : {`${OtherInfo.sol}`}
              </h2>
              <h2>Rover: {`${OtherInfo.rover.name.toUpperCase()}`}</h2>
              <h2>
                Status:{" "}
                {OtherInfo.rover.status === "active" ? (
                  <span style={{ color: "green" }}>
                    {`${OtherInfo.rover.status.toUpperCase()}`}
                  </span>
                ) : (
                  <span style={{ color: "red" }}>
                    {`${OtherInfo.rover.status.toUpperCase()}`}
                  </span>
                )}
              </h2>
            </div>

            <div>
              {photoList.map((photo, id) => {
                return (
                  <img
                    src={photo}
                    key={id}
                    width="400px"
                    style={{ margin: "10px", borderRadius: "20px" }}
                    alt="Cool rocks and Aliens"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MarsPhoto;
