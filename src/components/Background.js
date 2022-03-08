import "../styling/background.sass";

export const Background = () => {
  function moveBackground(e) {
    const bg = document.querySelector(".background-image");
    const mouseX = e.clientX / (window.innerWidth / 5);
    const mouseY = e.clientY / (window.innerHeight / 5);

    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  }
  return <div className="background-image" onMouseMove={moveBackground}></div>;
};
