import { useEffect, useState } from "react";
import { Loading404 } from "./Loading";
import Mission from "./Mission";
import Navbar from "./Navbar";

export const SpaceX = () => {
    const [launchData, setLaunchData] = useState([]);

    const getSpacexData = async() => {
        const res = await fetch(`https://api.spacexdata.com/v4/launches/`);
        const data = await res.json();

        setLaunchData(data);
    };
    
    useEffect(() => {
        getSpacexData();
    }, [launchData]);

    return(
        <>
            <Navbar />
            <h1 className="title">SpaceX Missions</h1>
            {/* <Loading404 /> */}
            {launchData.map((launch, i) => {
                return <Mission launch={launch} key={i} />
            })}
        </>
    )
}