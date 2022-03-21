// Import necessary dependencies / components
import { useState } from "react";
import { NavHome } from "./Navbar";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { trackPromise } from "react-promise-tracker";

// Import styling
import "../styling/marsphoto.sass";
import "react-datepicker/dist/react-datepicker.css";

// Mars Photo Page JSX component
const MarsPhoto = () => {
  const [marsData, setMarsData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const dateSubmit = () => {
    const fetchPhoto = async () => {
      const response = await trackPromise(
        fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${
            selectedDate.toISOString().split("T")[0]
          }&api_key=${process.env.REACT_APP_API_KEY}`
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
      <div>
        <DatePicker
          className="date-picker"
          placeholderText="Please pick at date"
          dateFormat="yyyy/MM/dd"
          selected={selectedDate}
          // Set min and max date available to select
          minDate={new Date(2012, 7, 6)}
          maxDate={addDays(new Date(), 0)}
          onChange={(date) => setSelectedDate(date)}
        />
        {/* Enable submit button only when a dated is selected */}
        {selectedDate && <button onClick={dateSubmit}>Confirm</button>}
      </div>
    );
  } else {
    // API data
    const photo = marsData.photos.map((el) => el.img_src);
    const OtherInfo = marsData.photo[0];

    return (
      <>
        <h1>hELLO wORLD</h1>
      </>
    );
  }
};

export default MarsPhoto;
