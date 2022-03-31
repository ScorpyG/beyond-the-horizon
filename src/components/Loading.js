// Import necessary dependencies / components
import Typewriter from "typewriter-effect";
import { Ring } from "react-cssfx-loading/lib";
import { Background } from "./Background";

// Import styling
import "../styling/loading.sass";

export const Loading = () => {
  return (
    <>
      <div className="parent-div">
        <div className="centered-div">
          <div className="loading-animation">
            <Ring color="#c8c8c8" height="150px" width="150px" />
          </div>

          <Typewriter
            options={{
              cursor: " <",
              autoStart: true,
              strings: [
                "...",
                "...",
                "sorry...",
                "unfortunately, this page is still in development",
                "thank you, your patience is much appreciated!",
              ],
              loop: true,
              skipAddStyles: true,
            }}
          />
        </div>
      </div>
      <Background />
    </>
  );
};
