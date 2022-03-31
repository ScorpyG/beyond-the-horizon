import Typewriter from "typewriter-effect";
import { Background } from "./Background";
import Navbar from "./Navbar";

export const Error = () => {
  return (
    <>
      <Navbar />
      <h1 className="title">
        <i className="fas fa-bug" />&emsp;
        <i className="fas fa-times" /> &emsp;
        <i className="fas fa-exclamation" />
      </h1>
      <div className="parent-div">
        <div className="centered-div">
          <Typewriter
            options={{
              cursor: "_",
              autoStart: true,
              strings: [
                "SEARCHING...",
                "ERROR: CODE 404",
                "PAGE NOT FOUND",
                "use the sidebar to navigate yourself back to the civilization!",
              ],
              loop: true,
            }}
          />
        </div>
      </div>
      <Background />
    </>
  );
};
