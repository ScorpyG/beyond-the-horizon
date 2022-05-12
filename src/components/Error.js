// Import necessary dependencies / components
import { Link } from "react-router-dom";

// Import styling
import "../styling/error.sass";

export const Error = () => {
  return (
    <div className="error-page">
      <div className="error-box">
        <div className="icon-group">
          <i className="fas fa-bug" />
          <i className="fas fa-times" />
          <i className="fas fa-exclamation" />
        </div>
        <h1>404</h1>
        <p>
          Unfortunately, the URL you looking for doesn't exist! 
          Turn back now before you get lost in this infinite space...
        </p>

        <Link to={`/`}>RETURN</Link>
      </div>
    </div>
  );
};
