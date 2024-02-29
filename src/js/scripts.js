import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadows = true;
renderer.shadowType = 1;
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = 0;
renderer.toneMapping = THREE.NoToneMapping;
renderer.setClearColor(0x000000);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// rendering scene, camera, and axes END

camera.position.set(0, 2, 5);
orbit.update();

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshStandardMaterial( {color: 0x00FF00} );
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

const directionalLight  = new THREE.DirectionalLight(0xFFFFFF, 10);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, 0);

const spotLight = new THREE.SpotLight(0xffffff, 10, 1000, 0.2, 0.5);
spotLight.position.set(0, 25, 0);
scene.add(spotLight);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(dLightHelper);

const loader = new GLTFLoader();
    loader.load('dist/assets/potted_plant_01_4k.gltf/potted_plant_01_4k.gltf', function (gltf) {
      scene.add(gltf.scene);
  });

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);