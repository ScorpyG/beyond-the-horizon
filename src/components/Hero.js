import "../styling/hero.sass";
import { Link } from "react-router-dom";
import { Earth } from "./ThreeD-objects/Earth";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          EXPLORING <br />
          SPACE & BEYOND.
        </h1>
        <p>
          The universe has no limit. Why should we? <br />
          Learn about the solar system and our journey in space exploration
          through interactive environment. Together let explore 
          beyond the horizon and learn some cool astronomy
          facts.
        </p>
        <Link to="/exploring">
          <u>EXPLORE</u>
        </Link>
      </div>

      <Earth />
    </div>
  );
};
