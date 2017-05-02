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
    camera.position.set( 0, 0, 15 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    //top
    var vertices1 = [
	[-1, 1, 2],
	[-1,-1, 2],
	[1,-1, 2]
    ];
    var faces1 = [
	[0,1,2]
    ];
    var vertices2 = [
	[-1, 1, 2],
	[1, -1, 2],
	[1, 1, 2]
    ];
    var faces2 = [
	[0,1,2]
    ];

    //bottom
    var vertices3 = [
	[1, -1, 4],
	[-1, -1, 4],
	[-1, 1, 4]
    ];
    var faces3 = [
	[0,1,2]
    ];
    var vertices4 = [
	[1, 1, 4],
	[1, -1, 4],
	[-1, 1, 4]
    ];
    var faces4 = [
	[0,1,2]
    ];

    //near
    var vertices5 = [
	[1, -1, 4],
	[1, -1, 2],
	[1, 1, 4]
    ];
    var faces5 = [
	[0,1,2]
    ];
    var vertices6 = [
	[1, 1, 2],
	[1, -1, 2],
	[1, 1, 4]
    ];
    var faces6 = [
	[0,1,2]
    ];
    
    //over
    var vertices7 = [
	[-1, -1, 4],
	[-1, -1, 2],
	[-1, 1, 4]
    ];
    var faces7 = [
	[0,1,2]
    ];
    var vertices8 = [
	[-1, 1, 2],
	[-1, -1, 2],
	[-1, 1, 4]
    ];
    var faces8 = [
	[0,1,2]
    ];
    
    //right    
    var vertices9 = [
	[-1, 1, 2],
	[1, 1, 2],
	[-1, 1, 4]
    ];
    var faces9 = [
	[0,1,2]
    ];
    
    var vertices10 = [
	[1, 1, 4],
	[1, 1, 2],
	[-1, 1, 4]
    ];
    var faces10 = [
	[0,1,2]
    ];
    
    //left
    var vertices11 = [
	[-1, -1, 2],
	[1, -1, 2],
	[-1, -1, 4]
    ];
    var faces11 = [
	[0,1,2]
    ];
    
    var vertices12 = [
	[1, -1, 4],
	[1, -1, 2],
	[-1, -1, 4]
    ];
    var faces12 = [
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

	var v0_5 = new THREE.Vector3().fromArray(vertices5[0]);
	var v1_5 = new THREE.Vector3().fromArray(vertices5[1]);
	var v2_5 = new THREE.Vector3().fromArray(vertices5[2]);
	var id_5 = faces5[0];
	var f0_5 = new THREE.Face3(id_5[0],id_5[1],id_5[2]);

	var v0_6 = new THREE.Vector3().fromArray(vertices6[0]);
	var v1_6 = new THREE.Vector3().fromArray(vertices6[1]);
	var v2_6 = new THREE.Vector3().fromArray(vertices6[2]);
	var id_6 = faces6[0];
	var f0_6 = new THREE.Face3(id_6[0],id_6[1],id_6[2]);

	var v0_7 = new THREE.Vector3().fromArray(vertices7[0]);
	var v1_7 = new THREE.Vector3().fromArray(vertices7[1]);
	var v2_7 = new THREE.Vector3().fromArray(vertices7[2]);
	var id_7 = faces7[0];
	var f0_7 = new THREE.Face3(id_7[0],id_7[1],id_7[2]);

	var v0_8 = new THREE.Vector3().fromArray(vertices8[0]);
	var v1_8 = new THREE.Vector3().fromArray(vertices8[1]);
	var v2_8 = new THREE.Vector3().fromArray(vertices8[2]);
	var id_8 = faces8[0];
	var f0_8 = new THREE.Face3(id_8[0],id_8[1],id_8[2]);

	var v0_9 = new THREE.Vector3().fromArray(vertices9[0]);
	var v1_9 = new THREE.Vector3().fromArray(vertices9[1]);
	var v2_9 = new THREE.Vector3().fromArray(vertices9[2]);
	var id_9 = faces9[0];
	var f0_9 = new THREE.Face3(id_9[0],id_9[1],id_9[2]);

	var v0_10 = new THREE.Vector3().fromArray(vertices10[0]);
	var v1_10 = new THREE.Vector3().fromArray(vertices10[1]);
	var v2_10 = new THREE.Vector3().fromArray(vertices10[2]);
	var id_10 = faces10[0];
	var f0_10 = new THREE.Face3(id_10[0],id_10[1],id_10[2]);

	var v0_11 = new THREE.Vector3().fromArray(vertices11[0]);
	var v1_11 = new THREE.Vector3().fromArray(vertices11[1]);
	var v2_11 = new THREE.Vector3().fromArray(vertices11[2]);
	var id_11 = faces11[0];
	var f0_11 = new THREE.Face3(id_11[0],id_11[1],id_11[2]);

	var v0_12 = new THREE.Vector3().fromArray(vertices12[0]);
	var v1_12 = new THREE.Vector3().fromArray(vertices12[1]);
	var v2_12 = new THREE.Vector3().fromArray(vertices12[2]);
	var id_12 = faces12[0];
	var f0_12 = new THREE.Face3(id_12[0],id_12[1],id_12[2]);
    
	var geometry1 = new THREE.Geometry();
	geometry1.vertices.push(v0_1);
	geometry1.vertices.push(v1_1);
	geometry1.vertices.push(v2_1);
	geometry1.faces.push(f0_1);
	var material1 = new THREE.MeshBasicMaterial();
	material1.vertexColors = THREE.FaceColors;
	geometry1.faces[0].color = new THREE.Color('red');
	material1.vertexColors = THREE.VertexColors;
	geometry1.faces[0].vertexColors.push(new THREE.Color('red'));
	geometry1.faces[0].vertexColors.push(new THREE.Color('red'));
	geometry1.faces[0].vertexColors.push(new THREE.Color('red')); 
	var geometry2 = new THREE.Geometry();
	geometry2.vertices.push(v0_2);
	geometry2.vertices.push(v1_2);
	geometry2.vertices.push(v2_2);
	geometry2.faces.push(f0_2);
	var material2 = new THREE.MeshBasicMaterial();
	material2.vertexColors = THREE.FaceColors;
	geometry2.faces[0].color = new THREE.Color('aqua');
	material2.vertexColors = THREE.VertexColors;
	geometry2.faces[0].vertexColors.push(new THREE.Color('green'));
	geometry2.faces[0].vertexColors.push(new THREE.Color('green'));
	geometry2.faces[0].vertexColors.push(new THREE.Color('green')); 
	
	var geometry3 = new THREE.Geometry();
	geometry3.vertices.push(v0_3);
	geometry3.vertices.push(v1_3);
	geometry3.vertices.push(v2_3);
	geometry3.faces.push(f0_3);
	var material3 = new THREE.MeshBasicMaterial();
	material3.vertexColors = THREE.FaceColors;
	geometry3.faces[0].color = new THREE.Color('red');
	material3.vertexColors = THREE.VertexColors;
	geometry3.faces[0].vertexColors.push(new THREE.Color('red'));
	geometry3.faces[0].vertexColors.push(new THREE.Color('red'));
	geometry3.faces[0].vertexColors.push(new THREE.Color('red')); 
	var geometry4 = new THREE.Geometry();
	geometry4.vertices.push(v0_4);
	geometry4.vertices.push(v1_4);
	geometry4.vertices.push(v2_4);
	geometry4.faces.push(f0_4);
	var material4 = new THREE.MeshBasicMaterial();
	material4.vertexColors = THREE.FaceColors;
	geometry4.faces[0].color = new THREE.Color('green');
	material4.vertexColors = THREE.VertexColors;
	geometry4.faces[0].vertexColors.push(new THREE.Color('green'));
	geometry4.faces[0].vertexColors.push(new THREE.Color('green'));
	geometry4.faces[0].vertexColors.push(new THREE.Color('green')); 

	var geometry5 = new THREE.Geometry();
	geometry5.vertices.push(v0_5);
	geometry5.vertices.push(v1_5);
	geometry5.vertices.push(v2_5);
	geometry5.faces.push(f0_5);
	var material5 = new THREE.MeshBasicMaterial();
	material5.vertexColors = THREE.FaceColors;
	geometry5.faces[0].color = new THREE.Color('aquamarine');
	material5.vertexColors = THREE.VertexColors;
	geometry5.faces[0].vertexColors.push(new THREE.Color('aquamarine'));
	geometry5.faces[0].vertexColors.push(new THREE.Color('aquamarine'));
	geometry5.faces[0].vertexColors.push(new THREE.Color('aquamarine')); 
	var geometry6 = new THREE.Geometry();
	geometry6.vertices.push(v0_6);
	geometry6.vertices.push(v1_6);
	geometry6.vertices.push(v2_6);
	geometry6.faces.push(f0_6);
	var material6 = new THREE.MeshBasicMaterial();
	material6.vertexColors = THREE.FaceColors;
	geometry6.faces[0].color = new THREE.Color('yellow');
	material6.vertexColors = THREE.VertexColors;
	geometry6.faces[0].vertexColors.push(new THREE.Color('yellow'));
	geometry6.faces[0].vertexColors.push(new THREE.Color('yellow'));
	geometry6.faces[0].vertexColors.push(new THREE.Color('yellow')); 

	var geometry7 = new THREE.Geometry();
	geometry7.vertices.push(v0_7);
	geometry7.vertices.push(v1_7);
	geometry7.vertices.push(v2_7);
	geometry7.faces.push(f0_7);
	var material7 = new THREE.MeshBasicMaterial();
	material7.vertexColors = THREE.FaceColors;
	geometry7.faces[0].color = new THREE.Color('yellow');
	material7.vertexColors = THREE.VertexColors;
	geometry7.faces[0].vertexColors.push(new THREE.Color('yellow'));
	geometry7.faces[0].vertexColors.push(new THREE.Color('yellow'));
	geometry7.faces[0].vertexColors.push(new THREE.Color('yellow')); 
	var geometry8 = new THREE.Geometry();
	geometry8.vertices.push(v0_8);
	geometry8.vertices.push(v1_8);
	geometry8.vertices.push(v2_8);
	geometry8.faces.push(f0_8);
	var material8 = new THREE.MeshBasicMaterial();
	material8.vertexColors = THREE.FaceColors;
	geometry8.faces[0].color = new THREE.Color('aquamarine');
	material8.vertexColors = THREE.VertexColors;
	geometry8.faces[0].vertexColors.push(new THREE.Color('aquamarine'));
	geometry8.faces[0].vertexColors.push(new THREE.Color('aquamarine'));
	geometry8.faces[0].vertexColors.push(new THREE.Color('aquamarine'));

    
	var geometry9 = new THREE.Geometry();
	geometry9.vertices.push(v0_9);
	geometry9.vertices.push(v1_9);
	geometry9.vertices.push(v2_9);
	geometry9.faces.push(f0_9);
	var material9 = new THREE.MeshBasicMaterial();
	material9.vertexColors = THREE.FaceColors;
	geometry9.faces[0].color = new THREE.Color('orange');
	material9.vertexColors = THREE.VertexColors;
	geometry9.faces[0].vertexColors.push(new THREE.Color('orange'));
	geometry9.faces[0].vertexColors.push(new THREE.Color('orange'));
	geometry9.faces[0].vertexColors.push(new THREE.Color('orange')); 

	var geometry10 = new THREE.Geometry();
	geometry10.vertices.push(v0_10);
	geometry10.vertices.push(v1_10);
	geometry10.vertices.push(v2_10);
	geometry10.faces.push(f0_10);
	var material10 = new THREE.MeshBasicMaterial();
	material10.vertexColors = THREE.FaceColors;
	geometry10.faces[0].color = new THREE.Color('purple');
	material10.vertexColors = THREE.VertexColors;
	geometry10.faces[0].vertexColors.push(new THREE.Color('purple'));
	geometry10.faces[0].vertexColors.push(new THREE.Color('purple'));
	geometry10.faces[0].vertexColors.push(new THREE.Color('purple'));

    	var geometry11 = new THREE.Geometry();
	geometry11.vertices.push(v0_11);
	geometry11.vertices.push(v1_11);
	geometry11.vertices.push(v2_11);
	geometry11.faces.push(f0_11);
	var material11 = new THREE.MeshBasicMaterial();
	material11.vertexColors = THREE.FaceColors;
	geometry11.faces[0].color = new THREE.Color('orange');
	material11.vertexColors = THREE.VertexColors;
	geometry11.faces[0].vertexColors.push(new THREE.Color('orange'));
	geometry11.faces[0].vertexColors.push(new THREE.Color('orange'));
	geometry11.faces[0].vertexColors.push(new THREE.Color('orange'));
	var geometry12 = new THREE.Geometry();
	geometry12.vertices.push(v0_12);
	geometry12.vertices.push(v1_12);
	geometry12.vertices.push(v2_12);
	geometry12.faces.push(f0_12);
	var material12 = new THREE.MeshBasicMaterial();
	material12.vertexColors = THREE.FaceColors;
	geometry12.faces[0].color = new THREE.Color('purple');
	material12.vertexColors = THREE.VertexColors;
	geometry12.faces[0].vertexColors.push(new THREE.Color('purple'));
	geometry12.faces[0].vertexColors.push(new THREE.Color('purple'));
	geometry12.faces[0].vertexColors.push(new THREE.Color('purple'));


    geometry1.computeFaceNormals();
    geometry2.computeFaceNormals();
    geometry3.computeFaceNormals();
    geometry4.computeFaceNormals();
    geometry5.computeFaceNormals();
    geometry6.computeFaceNormals();
    geometry7.computeFaceNormals();
    geometry8.computeFaceNormals();
    geometry9.computeFaceNormals();
    geometry10.computeFaceNormals();
    geometry11.computeFaceNormals();
    geometry12.computeFaceNormals();
    
    material1.side = THREE.DoubleSide
    material2.side = THREE.DoubleSide
    material3.side = THREE.DoubleSide
    material4.side = THREE.DoubleSide
    material5.side = THREE.DoubleSide
    material6.side = THREE.DoubleSide
    material7.side = THREE.DoubleSide
    material8.side = THREE.DoubleSide
    material9.side = THREE.DoubleSide
    material10.side = THREE.DoubleSide
    material11.side = THREE.DoubleSide
    material12.side = THREE.DoubleSide
    
    
    var cube1 = new THREE.Mesh( geometry1, material1 );
    var cube2 = new THREE.Mesh( geometry2, material2 );
    var cube3 = new THREE.Mesh( geometry3, material3 );
    var cube4 = new THREE.Mesh( geometry4, material4 );
    var cube5 = new THREE.Mesh( geometry5, material5 );
    var cube6 = new THREE.Mesh( geometry6, material6 );
    var cube7 = new THREE.Mesh( geometry7, material7 );
    var cube8 = new THREE.Mesh( geometry8, material8 );  
    var cube9 = new THREE.Mesh( geometry9, material9 );
    var cube10 = new THREE.Mesh( geometry10, material10 );
    var cube11 = new THREE.Mesh( geometry11, material11 );
    var cube12 = new THREE.Mesh( geometry12, material12 );




    scene.add(cube1);
    scene.add(cube2);
    scene.add(cube3);
    scene.add(cube4);
    scene.add(cube5);
    scene.add(cube6);
    scene.add(cube7);
    scene.add(cube8);    
    scene.add(cube9);
    scene.add(cube10);
    scene.add(cube11);
    scene.add(cube12);
    
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
	    
	    cube5.rotation.y += 0.01;
	    cube5.rotation.z += 0.01;
	    cube5.rotation.x += 0.01;
	    
	    cube6.rotation.y += 0.01;
	    cube6.rotation.z += 0.01;
	    cube6.rotation.x += 0.01;

	    cube7.rotation.y += 0.01;
	    cube7.rotation.z += 0.01;
	    cube7.rotation.x += 0.01;

	    cube8.rotation.y += 0.01;
	    cube8.rotation.z += 0.01;
	    cube8.rotation.x += 0.01;
	    
	    cube9.rotation.y += 0.01;
	    cube9.rotation.z += 0.01;
	    cube9.rotation.x += 0.01;
	    
	    cube10.rotation.y += 0.01;
	    cube10.rotation.z += 0.01;
	    cube10.rotation.x += 0.01;

	    cube11.rotation.y += 0.01;
	    cube11.rotation.z += 0.01;
	    cube11.rotation.x += 0.01;
	    
	    cube12.rotation.y += 0.01;
	    cube12.rotation.z += 0.01;
	    cube12.rotation.x += 0.01;

	    renderer.render( scene, camera );
	}
    }
