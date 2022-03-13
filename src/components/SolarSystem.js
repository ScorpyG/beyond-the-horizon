// Import necessary dependencies / components
import solarSystemInfo from '../planet-data/planets'
import { NavHome } from './Navbar';

// Import styling

// const Planet = (props) => {
//     return (
//        <></>
//     );
// }

const SolarSystem = () => {
    return (
        <>
            <NavHome/>
            <h1>Exploring the Solar System</h1>
        </>
        // {solarSystemInfo.map( planetInfo => 
        //     <Planet 
        //         id = {planetInfo.id}  
        //         name = {planetInfo.Name}
        //         radius = {planetInfo.radius}
        //         surface_area = {planetInfo.surface_area}
        //         orbital_time = {planetInfo.orbital_time}
        //         description = {planetInfo.description}
        //     />
        // )}
    );
}

export default SolarSystem ;