
let renderer, scene, camera, controls;
let ambientLight, spotLight;
let cubeGeometry, cubeMaterial, cubeMesh;
let floorGeometry, floorMaterial, floorMesh;

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
    camera.position.z = 10;
    camera.position.y = 5;

    /* Controls */
    controls = new THREE.OrbitControls( camera, renderer.domElement );

    /* White ambient Light */
    ambientLight = new THREE.AmbientLight(0xfffff, 0.6);
    scene.add(ambientLight);

    /* White spotlight */
    spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.y = 3;
    spotLight.position.z = 5;
    scene.add(spotLight);

    /* Green cube */
    cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    cubeMaterial = new THREE.MeshPhongMaterial({color: 0x00ff00});
    cubeMesh     = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.y = 1;
    scene.add(cubeMesh);

    /* White wireframe sphere */
    sphereGeometry = new THREE.SphereGeometry (2, 1, 1);
    sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.position.x = 3;
    sphereMesh.position.y = 3;
    sphereMesh.position.z = -10;
    scene.add(sphereMesh);

    /* Blue floor */
    floorGeometry = new THREE.BoxGeometry(100, 1, 100);
    floorMaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});
    floorMesh     = new THREE.Mesh(floorGeometry, floorMaterial);
    scene.add(floorMesh);

}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    cubeMesh.rotation.y += 0.01;
    sphereMesh.rotation.y += 0.01;
    sphereMesh.rotation.z += 0.01;

    renderer.render(scene, camera);
}
