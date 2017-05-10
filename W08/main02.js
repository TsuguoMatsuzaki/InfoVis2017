function main()
{
    var width = 500;
    var height = 500;

    var scene1 = new THREE.Scene();
    var scene2 = new THREE.Scene();
    var scene3 = new THREE.Scene();
    var scene4 = new THREE.Scene();
    
    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene1.add( camera );
    scene2.add( camera );
    scene3.add( camera );
    scene4.add( camera );

    
    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene1.add( light );
    scene2.add( light );
    scene3.add( light );
    scene4.add( light );
    
    var renderer1 = new THREE.WebGLRenderer();
    renderer1.setSize( width, height );
    document.body.appendChild( renderer1.domElement );
    var renderer2 = new THREE.WebGLRenderer();
    renderer2.setSize( width, height );
    document.body.appendChild( renderer2.domElement );
    var renderer3 = new THREE.WebGLRenderer();
    renderer3.setSize( width, height );
    document.body.appendChild( renderer3.domElement );
    var renderer4 = new THREE.WebGLRenderer();
    renderer4.setSize( width, height );
    document.body.appendChild( renderer4.domElement );

    
    var geometry = new THREE.TorusKnotGeometry( 1.0, 0.3, 150, 50 );

    //    var material = new THREE.MeshLambertMaterial();

/*
    var material = new THREE.ShaderMaterial({
	vertexColors: THREE.VertexColors,
	vertexShader: document.getElementById('shader.vert').text,
	fragmentShader: document.getElementById('shader.frag').text
    });
*/
    var material1 = new THREE.ShaderMaterial({
	vertexColors: THREE.VertexColors,
	vertexShader: document.getElementById('gouraud1.vert').text,
	fragmentShader: document.getElementById('gouraud1.frag').text,
	uniforms: {
	    light_position: {type: 'v3', value: light.position}
	}
    });
    var material2 = new THREE.ShaderMaterial({
	vertexColors: THREE.VertexColors,
	vertexShader: document.getElementById('gouraud2.vert').text,
	fragmentShader: document.getElementById('gouraud2.frag').text,
	uniforms: {
	    light_position: {type: 'v3', value: light.position}
	}
    });
    
    var material3 = new THREE.ShaderMaterial({
	vertexColors: THREE.VertexColors,
	vertexShader: document.getElementById('phong1.vert').text,
	fragmentShader: document.getElementById('phong1.frag').text,
	uniforms: {
	    light_position: {type: 'v3', value: light.position}
	}
    });
    var material4 = new THREE.ShaderMaterial({
	vertexColors: THREE.VertexColors,
	vertexShader: document.getElementById('phong2.vert').text,
	fragmentShader: document.getElementById('phong2.frag').text,
	uniforms: {
	    light_position: {type: 'v3', value: light.position}
	}
    });
    
    
    var torus_knot1 = new THREE.Mesh( geometry, material1 );
    scene1.add( torus_knot1 );
    var torus_knot2 = new THREE.Mesh( geometry, material2 );
    scene2.add( torus_knot2 );
    var torus_knot3 = new THREE.Mesh( geometry, material3 );
    scene3.add( torus_knot3 );
    var torus_knot4 = new THREE.Mesh( geometry, material4 );
    scene4.add( torus_knot4 );
    
    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot1.rotation.x += 0.01;
        torus_knot1.rotation.y += 0.01;
	torus_knot2.rotation.x += 0.01;
        torus_knot2.rotation.y += 0.01;
	torus_knot3.rotation.x += 0.01;
        torus_knot3.rotation.y += 0.01;
	torus_knot4.rotation.x += 0.01;
        torus_knot4.rotation.y += 0.01;
        renderer1.render( scene1, camera );
	renderer2.render( scene2, camera );
	renderer3.render( scene3, camera );
	renderer4.render( scene4, camera );
    }
}
