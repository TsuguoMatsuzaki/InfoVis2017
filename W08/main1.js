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
    camera.position.set( 0, 0, 8 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    //mouse event
    document.addEventListener( 'mousedown', mouse_down_event );

    
    //bottom
    var vertices = [
	[-1, 1, 2], //2
	[1,-1, 2], //0
	[-1,-1, 2], //3
	[-1, 1, 2], //2
	[1, 1, 2], //1
	[1, -1, 2], //0

	//top
	[1, -1, 4], //4
	[-1, 1, 4], //6
	[-1, -1, 4], //7

	[1, 1, 4], //5
	[-1, 1, 4], //6
	[1, -1, 4], //4

	//near
	[1, -1, 4], //4
	[1, -1, 2], //0
	[1, 1, 4], //5
	
	[1, 1, 2], //1
	[1, 1, 4], //5
	[1, -1, 2], //0


	
	//right    
	[1, 1, 2], //1
	[-1, 1, 2], //2
	[-1, 1, 4], //6

	[1, 1, 4], //5
	[1, 1, 2], //1
	[-1, 1, 4], //6

	//left
	[-1, -1, 2], //3
	[1, -1, 2], //0
	[-1, -1, 4], //7

	[1, -1, 4], //4
	[-1, -1, 4], //7
	[1, -1, 2], //0

	//over
	[-1, -1, 4], //7
	[-1, 1, 2], //2
	[-1, -1, 2], //1

	[-1,-1, 4], //7
	[-1, 1, 4], //6
	[-1, 1, 2] //2
	
    ];

    
    var faces = [
	[2,0,3],
	[2,1,0],
	[4,6,7],
	[5,6,4],
	[4,0,5],
	[1,5,0],
	[7,2,3],
	[7,6,2],
	[1,2,6],
	[5,1,6],
	[3,0,7],
	[4,7,0]
    ];
    
    //the number of triangle
    var count = 12;   
   
    var geometry = new THREE.Geometry();
    var material = new THREE.MeshBasicMaterial();

    

    
    //add verteces
    geometry.vertices.push(new THREE.Vector3(1, -1, 2)); //0
    geometry.vertices.push(new THREE.Vector3(1, 1, 2)); //1
    geometry.vertices.push(new THREE.Vector3(-1, 1, 2)); //2
    geometry.vertices.push(new THREE.Vector3(-1, -1, 2)); //3
    geometry.vertices.push(new THREE.Vector3(1, -1, 4)); //4
    geometry.vertices.push(new THREE.Vector3(1, 1, 4)); //5
    geometry.vertices.push(new THREE.Vector3(-1, 1, 4)); //6
    geometry.vertices.push(new THREE.Vector3(-1, -1, 4)); //7

    //add faces
    for(var i=0;i<count;i++){
	var id = faces[i];		
	geometry.faces.push(new THREE.Face3( id[0],id[1],id[2] ));  
    }

    //get normal vector
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    //both side rendering
    material.side = THREE.DoubleSide

    var triangle = new THREE.Mesh(geometry, material);
    scene.add(triangle);
    
    loop();

    
    function loop()
    {	
	requestAnimationFrame( loop );

	    triangle.rotation.x += 0.01;
	    triangle.rotation.y += 0.01;
	    triangle.rotation.z += 0.01;
		
	renderer.render( scene, camera );
    }

    function mouse_down_event( event )
    {
	//ウィンドウ上のマウス位置を取得
	var x_win = event.clientX;
	var y_win = event.clientY;

	//ウィンドウ上の左の位置を取得
	var vx = renderer.domElement.offsetLeft;

	//ウィンドウ上の上の位置を取得
	var vy = renderer.domElement.offsetTop;

	//ウィンドウの縦横の幅を取得
	var vw = renderer.domElement.width;
	var vh = renderer.domElement.height;

	//ウィンドウ上のマウスの位置を-1 ~ 1に正規化
	var x_NDC = 2*(x_win -vx)/vw - 1;
	var y_NDC = -(2*(y_win-vy)/vh - 1);

	//マウスのウィンドウ上の位置ベクトル
	var p_NDC = new THREE.Vector3(x_NDC, y_NDC, 1);

	//スクリーン上の座標系なので、オブジェクト上の座標系(world)に変換
	var p_wld = p_NDC.unproject(camera);

	var origin = camera.position;
	var direction = p_NDC.sub(camera.position).normalize();
	
	var raycaster = new THREE.Raycaster(origin, direction);
	

	//三角形に対して反応(array of Mesh)
	var intersects = raycaster.intersectObjects( triangle );



	if(intersects.length > 0){	   
	    intersects[0].face.color.setRGB(1,0,0);
	}


	
	
    }
    

}
