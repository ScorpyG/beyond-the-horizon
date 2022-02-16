import * as THREE from "three";

console.log(window.innerWidth);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.getElementById("bg"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.setZ(30);

// Texture and Custom 3D Object
const Earth = new THREE.Mesh(
  new THREE.SphereGeometry(15, 60, 16),
  new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./images/2k_earth_daymap.jpg') })
  // new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('./images/2k_earth_daymap.jpg') })
);

scene.add(Earth);

function animate() {
  requestAnimationFrame(animate);
  Earth.position.y += 0.01;
  Earth.rotation.z += 0.001;
  renderer.render(scene, camera);
}

animate();