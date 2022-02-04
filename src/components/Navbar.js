import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-item">
          <Link to="/exploring">
            <p>Exploring Solar System</p>
          </Link>
          <span>Learn more about the planets within our Solar System in details.</span>
        </div>

        <div className="nav-item">
          <Link to="/marsphoto">
            <p>Mars Rover Photos</p>
          </Link>
          <span>Want to see what Mars looking like through the lens of Mars Rover?!</span>
        </div>

        <div className="nav-item">
          <Link to="/isstracker">
            <p>International Space Station Tracker</p>
          </Link>
          <span>Find out the location of International Space Station in real time.</span>
        </div>

        <div className="nav-item">
          <Link to="/astro">
            <p>Astronomy Fact</p>
          </Link>
          <span>Learn different thing everyday</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
