
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

}

function animate() {
    renderer.render(scene, camera);
}
