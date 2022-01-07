import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="nav-deck">
      <Link to="/exploring">
        <div className="nav-card">
          <h2>Exploring Solar System</h2>
          <p></p>
        </div>
      </Link>

      <Link to="/marsphoto">
        <div className="nav-card">
          <h2>Mars Rover Photos</h2>
          <p></p>
        </div>
      </Link>

      <Link to="/isstracker">
        <div className="nav-card">
          <h2>International Space Station Tracker</h2>
          <p></p>
        </div>
      </Link>

      {/* <Link to="/">
        <div className="nav-card">
          <h2></h2>
        </div>
      </Link>

      <Link to="/">
        <div className="nav-card">
          <h2></h2>
        </div>
      </Link>

      <Link to="/">
        <div className="nav-card">
          <h2></h2>
        </div>
      </Link> */}
    </div>
  );
}

export default App;
