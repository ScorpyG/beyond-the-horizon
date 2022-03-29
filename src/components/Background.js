// Import styling
import "../styling/background.sass";

// Background JSX component
export const Background = () => {
  function moveBackground(e) {
    const bg = document.querySelector(".background-image");
    const mouseX = e.clientX / (window.innerWidth / 7);
    const mouseY = e.clientY / (window.innerHeight / 7);
    bg.style.zIndex = 0;
    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  }
  return <div className="background-image" onMouseMove={moveBackground}></div>;
};
