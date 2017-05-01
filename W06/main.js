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

    var vertices1 = [
	[-0.5, 0.5, 0.5],
	[-0.5,-0.5,0.5],
	[0.5,-0.5,0.5]
    ];
    var faces1 = [
	[0,1,2]
    ];
    var vertices2 = [
	[-0.5, 0.5, 0.5],
	[0.5,-0.5,0.5],
	[0.5,0.5,0.5]
    ];
    var faces2 = [
	[0,1,2]
    ];
    var vertices3 = [
	[0.5, -0.5, -0.5],
	[-0.5,-0.5,-0.5],
	[-0.5,0.5,-0.5]
    ];
    var faces3 = [
	[0,1,2]
    ];
    var vertices4 = [
	[0.5, 0.5, -0.5],
	[0.5,-0.5,-0.5],
	[-0.5,0.5,-0.5]
    ];
    var faces4 = [
	[0,1,2]
    ];



    var v0_1 = new THREE.Vector3().fromArray(vertices1[0]);
    var v1_1 = new THREE.Vector3().fromArray(vertices1[1]);
    var v2_1 = new THREE.Vector3().fromArray(vertices1[2]);
    var id_1 = faces1[0];
    var f0_1 = new THREE.Face3(id_1[0],id_1[1],id_1[2]);
   
    var v0_2 = new THREE.Vector3().fromArray(vertices2[0]);
    var v1_2 = new THREE.Vector3().fromArray(vertices2[1]);
    var v2_2 = new THREE.Vector3().fromArray(vertices2[2]);
    var id_2 = faces2[0];
    var f0_2 = new THREE.Face3(id_2[0],id_2[1],id_2[2]);
 
    var v0_3 = new THREE.Vector3().fromArray(vertices3[0]);
    var v1_3 = new THREE.Vector3().fromArray(vertices3[1]);
    var v2_3 = new THREE.Vector3().fromArray(vertices3[2]);
    var id_3 = faces3[0];
    var f0_3 = new THREE.Face3(id_3[0],id_3[1],id_3[2]);

    var v0_4 = new THREE.Vector3().fromArray(vertices4[0]);
    var v1_4 = new THREE.Vector3().fromArray(vertices4[1]);
    var v2_4 = new THREE.Vector3().fromArray(vertices4[2]);
    var id_4 = faces4[0];
    var f0_4 = new THREE.Face3(id_4[0],id_4[1],id_4[2]);


    var geometry1 = new THREE.Geometry();
    geometry1.vertices.push(v0_1);
    geometry1.vertices.push(v1_1);
    geometry1.vertices.push(v2_1);
    geometry1.faces.push(f0_1);
    var material1 = new THREE.MeshBasicMaterial();
    material1.vertexColors = THREE.FaceColors;
    geometry1.faces[0].color = new THREE.Color(1,0,0);
    material1.vertexColors = THREE.VertexColors;
    geometry1.faces[0].vertexColors.push(new THREE.Color(1,0,0));
    geometry1.faces[0].vertexColors.push(new THREE.Color(1,0,0));
    geometry1.faces[0].vertexColors.push(new THREE.Color(1,0,0)); 
   
    var geometry2 = new THREE.Geometry();
    geometry2.vertices.push(v0_2);
    geometry2.vertices.push(v1_2);
    geometry2.vertices.push(v2_2);
    geometry2.faces.push(f0_2);
    var material2 = new THREE.MeshBasicMaterial();
    material2.vertexColors = THREE.FaceColors;
    geometry2.faces[0].color = new THREE.Color(0,1,0);
    material2.vertexColors = THREE.VertexColors;
    geometry2.faces[0].vertexColors.push(new THREE.Color(0,1,0));
    geometry2.faces[0].vertexColors.push(new THREE.Color(0,1,0));
    geometry2.faces[0].vertexColors.push(new THREE.Color(0,1,0)); 
    
    var geometry3 = new THREE.Geometry();
    geometry3.vertices.push(v0_3);
    geometry3.vertices.push(v1_3);
    geometry3.vertices.push(v2_3);
    geometry3.faces.push(f0_3);
    var material3 = new THREE.MeshBasicMaterial();
    material3.vertexColors = THREE.FaceColors;
    geometry3.faces[0].color = new THREE.Color(0,0,1);
    material3.vertexColors = THREE.VertexColors;
    geometry3.faces[0].vertexColors.push(new THREE.Color(0,0,1));
    geometry3.faces[0].vertexColors.push(new THREE.Color(0,0,1));
    geometry3.faces[0].vertexColors.push(new THREE.Color(0,0,1)); 

    var geometry4 = new THREE.Geometry();
    geometry4.vertices.push(v0_4);
    geometry4.vertices.push(v1_4);
    geometry4.vertices.push(v2_4);
    geometry4.faces.push(f0_4);
    var material4 = new THREE.MeshBasicMaterial();
    material4.vertexColors = THREE.FaceColors;
    geometry4.faces[0].color = new THREE.Color(0,1,1);
    material4.vertexColors = THREE.VertexColors;
    geometry4.faces[0].vertexColors.push(new THREE.Color(0,1,1));
    geometry4.faces[0].vertexColors.push(new THREE.Color(0,1,1));
    geometry4.faces[0].vertexColors.push(new THREE.Color(0,1,1)); 




    var cube1 = new THREE.Mesh( geometry1, material1 );
    var cube2 = new THREE.Mesh( geometry2, material2 );
    var cube3 = new THREE.Mesh( geometry3, material3 );
    var cube4 = new THREE.Mesh( geometry4, material4 );








    scene.add(cube1);
       scene.add(cube2);
       scene.add(cube3);
       scene.add(cube4);



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

    
    loop();

    
    function loop()
    {
	requestAnimationFrame( loop );
	cube1.rotation.x += 0.01;
	cube1.rotation.y += 0.01;
	cube1.rotation.z += 0.01;

	
	cube2.rotation.z += 0.01;
	cube2.rotation.x += 0.01;
	cube2.rotation.y += 0.01;


	cube3.rotation.y += 0.01;
	cube3.rotation.z += 0.01;
	cube3.rotation.x += 0.01;


	cube4.rotation.y += 0.01;
	cube4.rotation.z += 0.01;
	cube4.rotation.x += 0.01;
	  

	renderer.render( scene, camera );
    }
}
