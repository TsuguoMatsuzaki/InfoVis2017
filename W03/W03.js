    <html>
    <head>
    <title>W04: Example 01</title>
</head>
    <body>
    <script src="http://mrdoob.github.io/three.js/buid/three.min.js"></script>
    <script src="main.js"></script>
    <script>
    var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    fov,
    aspect,
    near,
    far
);


camera.position.set(x,y,z);

sceme.add(camera);

main();
</script>
    </body>
    </html>
