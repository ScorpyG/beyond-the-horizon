// Import necessary dependencies / components
import { Loading } from "./Loading";
import Navbar from "./Navbar";

// Import styling
import "../styling/isstracker.sass"

// ISS Tracker Page JSX component
const ISSTracker = () => {
    return (
        <>
            <Navbar/>
            <h1 className="title">International Space Station Tracker</h1>
            <Loading />
        </>
    );
}

export default ISSTracker;