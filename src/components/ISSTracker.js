// Import necessary dependencies / components
import { Loading } from "./Loading";
import Navbar from "./Navbar";
import { Background } from "./Background";

// Import styling
import "../styling/isstracker.sass"

// ISS Tracker Page JSX component
const ISSTracker = () => {
    return (
        <>
            <Navbar/>
            <h1 className="title">International Space Station Stacker</h1>
            <Loading />
            {/* <Background /> */}
        </>
    );
}

export default ISSTracker;