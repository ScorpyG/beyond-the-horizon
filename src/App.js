// Import necessary dependencies / components
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";

// Import styling
import "./App.sass";

// Main app JSX component
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
