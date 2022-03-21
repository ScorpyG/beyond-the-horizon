// Import necessary dependencies / components
import solarSystemInfo from "../planet-data/planets";
import { NavHome } from "./Navbar";

// Import styling
import '../styling/solarsystem.sass'

const Planet = (props) => {
  return (
    <div className="planet">
      <h3>{`${props.name}`}</h3>
      <p>Radius: {`${props.radius}`}</p>
      <p>Surface Area: {`${props.surface_area}`}</p>
      <p>Orbital Time: {`${props.orbital_time}`}</p>
      <p>Description: {`${props.description}`}</p>
    </div>
  );
};

const SolarSystem = () => {
  return (
    <>
      {/* <NavHome /> */}
      <h1>Exploring the Solar System</h1>
      <div className="solar-system">
        {solarSystemInfo.map((planetInfo) => (
          <Planet
            id={planetInfo.id}
            name={planetInfo.name}
            radius={planetInfo.radius}
            surface_area={planetInfo.surface_area}
            orbital_time={planetInfo.orbital_time}
            description={planetInfo.description}
          />
        ))}
      </div>
    </>
  );
};

export default SolarSystem;
