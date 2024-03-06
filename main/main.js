import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 20, 100 );
controls.update();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, cubeMaterial );
scene.add( cube );

const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000f} );

const points = [];
points.push ( THREE.Vector3( -10, 0, 0) );
points.push( new THREE.Vector3( 0, 0, 0) );
points.push( new THREE.Vector3( 10, 0, 0) );

const pointGeomtry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geomtry, material );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	controls.update();

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

scene.add( line );
renderer.renderer( scene, camera );

animate();