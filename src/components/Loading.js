// Import necessary dependencies / components
import Typewriter from "typewriter-effect";
import { Ring } from "react-cssfx-loading/lib";

// Import styling
import "../styling/loading.sass";

export const Loading = () => {
  return (
    <div className="parent-div">
      <div className="centered-div">
        <div className="loading-animation">
          <Ring color="#FFF" height="150px" width="150px" />
        </div>

        <Typewriter
          options={{
            cursor: " <",
            autoStart: true,
            strings: [
              "loading...",
              "sorry...",
              "unfortunately, this page is still in development",
              "thank you, your patience is much appreciated!",
            ],
            loop: true,
            pauseFor: 2000,
          }}
        />
      </div>
    </div>
  );
};
