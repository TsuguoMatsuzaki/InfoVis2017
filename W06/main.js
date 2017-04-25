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

    var vertices = [
	[-1, 1, 0],
	[-1,-1,0],
	[1,-1,0]
    ];
    var faces = [
	[0,1,2]
    ];

    var v0 = new THREE.Vector3().fromArray(vertices[0]);
    var v1 = new THREE.Vector3().fromArray(vertices[1]);
    var v2 = new THREE.Vector3().fromArray(vertices[2]);
    var id = faces[0];
    var f0 = new THREE.Face3(id[0],id[1],id[2]);
    
    var grometry = new THREE.Geometry();
    geometry.vertices.push(v0);
    geometry.vertices.push(v1);
    geometry.vertices.push(v2);
    geometry.faces.push(f0);

    var material = new THREE.MeshBasicMaterial();

    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color(1,0,0);

    material.vertexColors = THREE.VertexColors;
    geometry.faces[0].vertexColors.push(new THREE.Color(1,0,0));
    geometry.faces[0].vertexColors.push(new THREE.Color(0,1,0));
    geometry.faces[0].vertexColors.push(new THREE.Color(0,0,1)); 
    
    var cube = new THREE.Mesh( geometry, material );

    scene.add(cube);
   
    //var geometry1 = new THREE.BoxGeometry( 2, 0.1, 0.1 );
    //var geometry2 = new THREE.BoxGeometry( 0.1, 0.1, 0.5 );
    //var geometry3 = new THREE.BoxGeometry( 0.1, 0.1, 2 );

    //var material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    //var material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    //var material3 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );


    //var cube1 = new THREE.Mesh( geometry1, material1 );
    //var cube2 = new THREE.Mesh( geometry2, material2 );
    //var cube3 = new THREE.Mesh( geometry3, material3 );






    //scene.add( cube1 );
    //scene.add( cube2 );
    //scene.add( cube3 );

    
    //loop();

    function loop()
    {
	requestAnimationFrame( loop );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.5;
	cube.rotation.z += 0.5;

	/*
	cube1.rotation.z += 0.01;
	cube2.rotation.x += 0.5;
	cube2.rotation.y += 0.5;


	cube3.rotation.y += 0.01;
	cube3.rotation.z += 0.5;
	cube3.rotation.x += 0.5;

	  
	renderer.render( scene, camera );*/
    }
}
