// Import necessary dependencies / components
import { Link } from "react-router-dom";
import { Earth } from "./ThreeD-objects/Earth";

// Import styling
import "../styling/hero.sass";

// Hero/Landing Page JSX component
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          EXPLORING <br />
          SPACE & BEYOND.
        </h1>
        <p>"The sky has no limit. Neither should you" - Usain Bolt</p>
        <p>
          Learn about the solar system and our journey in space exploration
          through interactive environment. Together let explore beyond the
          horizon and learn some cool astronomy facts.
        </p>

        <Link to="/exploring">
          <u>EXPLORE</u>
        </Link>
      </div>

      <div className="hero-image">
        <Earth />
      </div>
    </div>
  );
};
