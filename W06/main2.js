function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();


    var count = 12;
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
	[1, 1, 2], //5
	[1, -1, 4], //0


	//over
	[-1, -1, 4], //7
	[-1, 1, 2], //2
	[-1, -1, 4], //3

	[-1, 1, 2], //2
	[-1, -1, 2], //3
	[-1, 1, 4], //6

	//right    
	[1, 1, 2], //1
	[-1, 1, 2], //2
	[-1, 1, 4], //6

	[1, 1, 4], //5
	[1, 1, 2], //1
	[-1, 1, 4], //2

	//left
	[-1, -1, 2], //3
	[1, -1, 2], //0
	[-1, -1, 4], //7

	[1, -1, 4], //4
	[-1, -1, 2], //7
	[1, -1, 4] //0
    ];

    var faces = [
	[0,1,2],
	[
    ];

    var v0 = new Array(count);
    var v1 = new Array(count);
    var v2 = new Array(count);
    var v0 = new Array(count);
    var f0 = new Array(count);
    var geometry = new Array(count);
    var material = new Array(count);
    var triangle = new Array(count);
    
    
    for(var i=0;i<count;i++){
	v0[i] = new THREE.Vector3().fromArray(vertices[0+3*i]);
	v1[i] = new THREE.Vector3().fromArray(vertices[1+3*i]);
	v2[i] = new THREE.Vector3().fromArray(vertices[2+3*i]);
	id = faces[0];
	f0[i] = new THREE.Face3(id[0],id[1],id[2]);

	geometry[i] = new THREE.Geometry();
	geometry[i].vertices.push(v0[i]);
	geometry[i].vertices.push(v1[i]);
	geometry[i].vertices.push(v2[i]);
	geometry[i].faces.push(f0[i]);
	material[i] = new THREE.MeshBasicMaterial();
	material[i].vertexColors = THREE.FaceColors;
	geometry[i].faces[0].color = new THREE.Color('white');
	material[i].vertexColors = THREE.VertexColors;
	geometry[i].faces[0].vertexColors.push(new THREE.Color('white'));
	geometry[i].faces[0].vertexColors.push(new THREE.Color('white'));
	geometry[i].faces[0].vertexColors.push(new THREE.Color('white'));

	geometry[i].computeFaceNormals();
	material[i].side = THREE.DoubleSide

	triangle[i] = new THREE.Mesh( geometry[i], material[i] );

	scene.add(triangle[i]);
    }
    

    
    loop();

    
    function loop()
    {	
	requestAnimationFrame( loop );
	for(var i=0;i<count;i++){
	    triangle[i].rotation.x += 0.01;
	    triangle[i].rotation.y += 0.01;
	    triangle[i].rotation.z += 0.01;
	}	
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
	

	//すべての形状に対して反応
	var intersects = raycaster.intersectObjects(scene.children);



	if(intersects.length > 0){
	    window.alert("HELLO");
	  
	    intersects[0].face.color.setRGB(1,0,0);
	    intersects[0].object.geometry.colorsNeedUpdate = true;	    
	}



	
    }
    

}
