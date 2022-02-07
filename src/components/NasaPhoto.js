import { useEffect } from 'react';
import { NavHome } from './Navbar';

const NasaPhoto = () => {
  // useEffect = (() => {
  //   fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
  //     .then(response => response.json)
  // })
  return (
    <>
      <NavHome />
      <h1>Learn new thing everyday!</h1>
    </>
  );
};

export default NasaPhoto;
