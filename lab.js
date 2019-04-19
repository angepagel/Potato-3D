
let renderer, scene, camera;

init();
animate();

function init() {

    /* Renderer */
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    /* Scene */
    scene = new THREE.Scene();
    
    /* Camera */
    camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.01, 1000);
    camera.position.z = 5;
    camera.position.y = 2;
    camera.rotation.x = -0.2;
    
    /* Ambient Light */
    scene.add(new THREE.AmbientLight(0xfffff, 0.6));

}

function animate() {
    renderer.render(scene, camera);
}
