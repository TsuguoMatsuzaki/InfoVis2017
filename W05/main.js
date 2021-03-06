function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 500;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var geometry1 = new THREE.BoxGeometry( 2, 0.1, 0.1 );
    var geometry2 = new THREE.BoxGeometry( 0.1, 0.1, 0.5 );
    var geometry3 = new THREE.BoxGeometry( 0.1, 0.1, 2 );

    var material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var material3 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );


    var cube1 = new THREE.Mesh( geometry1, material1 );
    var cube2 = new THREE.Mesh( geometry2, material2 );
    var cube3 = new THREE.Mesh( geometry3, material3 );






    scene.add( cube1 );
    scene.add( cube2 );
    scene.add( cube3 );

    
    loop();

    function loop()
    {
	requestAnimationFrame( loop );
	cube1.rotation.x += 0.01;
	cube1.rotation.y += 0.5;
	cube1.rotation.z += 0.5;

	cube1.rotation.z += 0.01;
	cube2.rotation.x += 0.5;
	cube2.rotation.y += 0.5;


	cube3.rotation.y += 0.01;
	cube3.rotation.z += 0.5;
	cube3.rotation.x += 0.5;

	  
	renderer.render( scene, camera );
    }
}
