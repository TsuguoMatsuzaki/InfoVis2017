var volume = new KVS.LobsterData();
var screen = new KVS.THREEScreen();
var gl_isovalue;
var surfaces;
function main()
{
    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    //set initial isovalue
    change_Isovalue(180);
    
    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();


}

