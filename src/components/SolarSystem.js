// Import necessary dependencies / components
import solarSystemInfo from "../planet-data/planets";
import { NavHome } from "./Navbar";

// Import styling
import '../styling/solarsystem.sass'

const Planet = (props) => {
  return (
    <div className="planet">
      <h1>{`${props.name}`}</h1>
      <p><b>Radius:</b> {`${props.radius}`}</p>
      <p><b>Surface Area:</b> {`${props.surface_area}`}</p>
      <p><b>Orbital Time:</b> {`${props.orbital_time}`}</p>
      <p><b>Description:</b> {`${props.description}`}</p>
    </div>
  );
};

const SolarSystem = () => {
  return (
    <>
      {/* <NavHome /> */}
      <h1 className="title">Exploring the Solar System</h1>
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
