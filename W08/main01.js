function main()
{
    var width = 500;
    var height = 500;





    var scene1 = new THREE.Scene();
    var scene2 = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene1.add( camera );
    scene2.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene1.add( light );
    scene2.add( light );
    
    var renderer1 = new THREE.WebGLRenderer();
    renderer1.setSize( width, height );
    document.body.appendChild( renderer1.domElement );
    var renderer2 = new THREE.WebGLRenderer();
    renderer2.setSize( width, height );
    document.body.appendChild( renderer2.domElement );

    
    var geometry1 = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var geometry2 = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    
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
    
    
    var torus_knot1 = new THREE.Mesh( geometry1, material1 );
    scene1.add( torus_knot1 );
    var torus_knot2 = new THREE.Mesh( geometry2, material2 );
    scene2.add( torus_knot2 );
    
    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot1.rotation.x += 0.01;
        torus_knot1.rotation.y += 0.01;
	
	torus_knot2.rotation.x -= 0.01;
        torus_knot2.rotation.y -= 0.01;

        renderer1.render( scene1, camera );
	renderer2.render( scene2, camera );
    }
}
