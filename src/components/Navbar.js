import { Link } from "react-router-dom";
import "../styling/navbar.sass";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-item">
        <Link to="/exploring">
          {/* <i class="fas fa-globe-europe"/> */}
          <span>SOLAR SYSTEM</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/marsphoto">
          {/* <i className="fas fa-robot"/> */}
          <span>EXPLORE MARS</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/isstracker">
          {/* <i className="fas fa-satellite"/> */}
          <span>ISS TRACKER</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/apod">
          {/* <i className="fas fa-meteor"/> */}
          <span>APOD</span>
        </Link>
      </div>
    </div>
  );
};

const NavHome = () => {
  return (
    <div className="nav-bar">
      <div className="nav-item">
        <Link to="/">
          <span>RETURN </span>
        </Link>
      </div>
    </div>
  );
};

export { Navbar, NavHome };