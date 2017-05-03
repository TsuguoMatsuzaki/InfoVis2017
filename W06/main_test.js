(function(){
	var canW = window.innerWidth; //canvas横
	var canH = window.innerHeight; //canvas縦
 
	//WebGL環境確認(Detector.js必要)
	if(!Detector.webgl)Detector.addGetWebGLMessage();
	var scene = new THREE.Scene();
 
	// カメラ:透視投影
	var camera = new THREE.PerspectiveCamera( 60, canW / canH, 0.01, 100);
	scene.add(camera);
	camera.position.set( 1, 1, 5);
 
	// レンダラー
	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize( canW, canH);
	renderer.setPixelRatio( window.devicePixelRatio);
	document.body.appendChild( renderer.domElement);
 
	// ジオメトリ生成
	var geometry = new THREE.Geometry();
 
	// 八面体の頂点セット
	geometry.vertices.push(new THREE.Vector3(0, 0, 1));
	geometry.vertices.push(new THREE.Vector3(1, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, -1, 0));
	geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, 1, 0));
	geometry.vertices.push(new THREE.Vector3(0, 0, -1));
 
	// 八面体の面セット
	geometry.faces.push(new THREE.Face3( 0, 2, 1));
	geometry.faces.push(new THREE.Face3( 0, 3, 2));
	geometry.faces.push(new THREE.Face3( 0, 4, 3));
	geometry.faces.push(new THREE.Face3( 0, 1, 4));
	geometry.faces.push(new THREE.Face3( 5, 1, 2));
	geometry.faces.push(new THREE.Face3( 5, 2, 3));
	geometry.faces.push(new THREE.Face3( 5, 3, 4));
	geometry.faces.push(new THREE.Face3( 5, 4, 1));
 
	// 法線ベクトルの自動計算
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();
 
	// 八面体のメッシュ作成
	var material = new THREE.MeshNormalMaterial();
	//var material = new THREE.MeshPhongMaterial({color: 0x88FFFF});
	var mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
 
	// ワイヤーフレームのメッシュ作成
	var wire = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
	var wireMesh = new THREE.Mesh(geometry, wire);
	scene.add(wireMesh);
 
	// 自然光
	var ambientLight = new THREE.AmbientLight( 0x999999);
	// スポットライト
	var directionalLight = new THREE.DirectionalLight(0xaaaaaa,0.8);
	directionalLight.position.set(1,1,1);
	scene.add( ambientLight, directionalLight);
 
	// コントローラー(OrbitControls.js)
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	rendering();
 
	function rendering(){
		requestAnimationFrame(rendering);
		controls.update();
		renderer.render( scene, camera);
	}
}());
