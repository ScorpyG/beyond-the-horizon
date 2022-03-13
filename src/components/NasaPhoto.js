import { useEffect, useState } from "react";
import { Ring } from "react-cssfx-loading/lib";
import { NavHome } from "./Navbar";
import "../styling/nasaphoto.sass";

// Return different JSX depends on API object media type
const ImageOrVideo = (obj) => {
  if (obj.props.media_type === "image") {
    return (
      <img src={obj.props.hdurl || obj.props.url} alt="API Visual Response" />
    );
  } else {
    return (
      <iframe
        title="space-visual"
        src={obj.props.url}
        frameBorder="0"
        allowFullScreen
      />
    );
  }
};

// Main JSX Component
const NasaPhoto = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // Fetch API and return result or error if detected
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setLoading(true);
          setData(result);

          // Check object contain 'code' attribute
          if (result.hasOwnProperty("code")) {
            // Parsing API result into error in case server encounter an error
            setError(result);
          }
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, []);

  // If error detected return Error JSX
  if (error) {
    return (
      <>
        <NavHome />
        <div className="loading">
          <h1>Code: {error.code}</h1>
          <h2>Error: {error.msg}</h2>
          <p>{error.message}</p>
        </div>
      </>
    );
  } else if (!loading) {
    return (
      // Loading animation
      <div className="loading">
        <Ring color="#FFFFFF " width="150px" height="150px" />
      </div>
    );
  } else {
    return (
      <>
        <NavHome />
        <div className="apod-box">
          <div className="image-box">
            <ImageOrVideo props={data} />{" "}
            {/*Passing JSON into component argument to return appropriate JSX*/}
          </div>
          <div className="info-box">
            <h1>{data.title}</h1>
            <p style={{ margin: "20px 0 20px 0" }}>
              <b>{data.date}</b>
            </p>
            <p>{data.explanation}</p>
          </div>
        </div>
      </>
    );
  }
};

export default NasaPhoto;
