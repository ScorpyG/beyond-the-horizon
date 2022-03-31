import { Loading } from "./Loading";
import Navbar from "./Navbar";

export const SpaceX = () => {
    return(
        <>
            <Navbar />
            <h1 className="title">SpaceX Missions</h1>
            <Loading />
        </>
    )
}