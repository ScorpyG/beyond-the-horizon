import "../styling/hero.sass";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

export const Hero = () => {      
  return (
    <div className="hero">
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
      >
        <div className="hero-text">
          <h1>
            EXPLORING <br />
            SPACE -N- BEYOND.
          </h1>
          <p>
            The universe has no limit. Why should we? <br />
            Learn about the solar system and our journey in space exploration
            through interactive environment. Together let explore <b>(B)</b>eyond <b>(T)</b>he <b>(H)</b>orizon.
          </p>
          <Link to="/exploring"><u>EXPLORE</u></Link>
        </div>
      </Tilt>

      <div className="hero-image">
        <img src="" alt="3D Object" />
      </div>
    </div>
  );
};
