// Import necessary dependencies / components
import { useState } from "react";
import { NavHome } from "./Navbar";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns"

// Import styling
import "../styling/marsphoto.sass";
import "react-datepicker/dist/react-datepicker.css";

// .toISOString().split('T')[0]

// Mars Photo Page JSX component
const MarsPhoto = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [marsData, setMarsData] = useState([]);

  const dateSubmit = () => {
    const fetchPhoto = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate.toISOString().split('T')[0]}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();

      setMarsData(data);

      console.log(data);
    };

    fetchPhoto();
    setSelectedDate(null);
  };

  return (
    <>
      <NavHome />
      <div className="marsphoto-box">
        <div className="marsphoto-info-box">
          <h1>Hello World!</h1>
          <DatePicker
            placeholderText="Please pick at date"
            dateFormat="yyyy/MM/dd"
            selected={selectedDate}

            // Set min and max date available to select
            minDate={new Date(2012, 7, 6)}
            maxDate={addDays(new Date(), 0)}
            onChange={(date) => setSelectedDate(date)}
          />
          <button onClick={dateSubmit}>Confirm</button>
        </div>

        <div className="marsphoto-img-box"></div>
      </div>
    </>
  );
};

export default MarsPhoto;
