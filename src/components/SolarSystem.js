// Import necessary dependencies
import solarSystemInfo from "../data/planets";
import { NavHome } from "./Navbar";

// Import styling
import "../styling/solarsystem.sass";

// Importing component
import { Sun } from "./ThreeD-objects/Sun";
import { Earth } from "./ThreeD-objects/SmolEarth";
import { Mercury } from "./ThreeD-objects/Mercury";
import { Venus } from "./ThreeD-objects/Venus";
import { Mars } from "./ThreeD-objects/Mars";
import { Jupiter } from "./ThreeD-objects/Jupiter";
import { Saturn } from "./ThreeD-objects/Saturn";
import { Uranus } from "./ThreeD-objects/Uranus";
import { Neptune } from "./ThreeD-objects/Neptune";

const SolarSystem = () => {
  return (
    <>
      {/* <NavHome /> */}
      <h1 className="title">Exploring the Solar System</h1>
      <div className="solar-system">
        {/* Static DOM for Sun */}
        <div className="planet">
          <div className="solar-system-visual">
            <Sun />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[0].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[0].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[0].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[0].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[0].description}`}
            </p>
            <a
              href={`${solarSystemInfo[0].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>

        {/* Static DOM for Mercury */}
        <div className="planet">
          <div className="solar-system-visual">
            <Mercury />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[1].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[1].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[1].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[1].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[1].description}`}
            </p>
            <a
              href={`${solarSystemInfo[1].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>

        {/* Static DOM for Venus */}
        <div className="planet">
          <div className="solar-system-visual">
            <Venus />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[2].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[2].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[2].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[2].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[2].description}`}
            </p>
            <a
              href={`${solarSystemInfo[2].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>

        {/* Static DOM for Earth */}
        <div className="planet">
          <div className="solar-system-visual">
            <Earth />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[3].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[3].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[3].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[3].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[3].description}`}
            </p>
            <a
              href={`${solarSystemInfo[3].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>

        {/* Static DOM for Mars */}
        <div className="planet">
          <div className="solar-system-visual">
            <Mars />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[4].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[4].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[4].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[4].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[4].description}`}
            </p>
            <a
              href={`${solarSystemInfo[4].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>

        {/* Static DOM for Jupiter */}
        <div className="planet">
          <div className="solar-system-visual">
            <Jupiter />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[5].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[5].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[5].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[5].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[5].description}`}
            </p>
            <a
              href={`${solarSystemInfo[5].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>

        {/* Static DOM for Saturn */}
        <div className="planet">
          <div className="solar-system-visual">
            <Saturn />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[6].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[6].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[6].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[6].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[6].description}`}
            </p>
            <a
              href={`${solarSystemInfo[6].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>

        {/* Static DOM for Uranus */}
        <div className="planet">
          <div className="solar-system-visual">
            <Uranus />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[7].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[7].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[7].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[7].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[7].description}`}
            </p>
            <a
              href={`${solarSystemInfo[7].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>

        {/* Static DOM for Neptune */}
        <div className="planet">
          <div className="solar-system-visual">
            <Neptune />
          </div>
          <div className="solar-system-data">
            <h1>{`${solarSystemInfo[8].name}`}</h1>
            <p>
              <b>Radius:</b> {`${solarSystemInfo[8].radius}`}
            </p>
            <p>
              <b>Surface Area:</b> {`${solarSystemInfo[8].surface_area}`}
            </p>
            <p>
              <b>Orbital Time:</b> {`${solarSystemInfo[8].orbital_time}`}
            </p>
            <p>
              <b>Description:</b>
              <br />
              {`${solarSystemInfo[8].description}`}
            </p>
            <a
              href={`${solarSystemInfo[8].link}`}
              target="_blank"
              rel="noreferrer"
            >
              <u>Learn more</u>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarSystem;
