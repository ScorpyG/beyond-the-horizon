// Import necessary dependencies / components
import { useState } from "react";
import Navbar from "./Navbar";
import { addDays } from "date-fns";
import { trackPromise } from "react-promise-tracker";

// Import styling
import "../styling/marsphoto.sass";

// Mars Photo Page JSX component
const MarsPhoto = () => {
  const [marsData, setMarsData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

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
          <input
            type="date"
            onChange={(event) => setSelectedDate(event.target.value)}
            dateformat="yyyy/MM/dd"
            min="2012-07-06"
            max={new Date().toISOString().split("T")[0]}
          />
          {/* Enable submit button only when a dated is selected */}
          {selectedDate && <button onClick={dateSubmit}>Confirm</button>}
        </div>
      </>
    );
  }

  // API data
  const photo = marsData.photos.map((item) => item.img_src);
  const OtherInfo = marsData.photos[0];
  console.log(OtherInfo);

  return (
    <>
      <Navbar />
      <h1 className="title">Mars Rover Photo</h1>
      <div className="mars-container">
        <input
          type="date"
          onChange={(event) => setSelectedDate(event.target.value)}
          dateformat="yyyy/MM/dd"
          min="2012-07-06"
          max={new Date().toISOString().split("T")[0]}
        />
        {/* Enable submit button only when a dated is selected */}
        {selectedDate && (<button onClick={dateSubmit}>Confirm</button>)}

        {/* Return msg there any pictures taken on this day */}
        {marsData.photos.length === 0 && (
          <h1>No photos were taken on this date</h1>
        )}
      </div>
    </>
  );
};

export default MarsPhoto;
