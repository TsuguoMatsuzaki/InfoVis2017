function change_Isovalue(new_isovalue){

    //remove old mesh
    screen.scene.remove(surfaces);

    //set new mesh
    surfaces =  Isosurfaces( volume, new_isovalue );

    //add new mesh to scene
    screen.scene.add( surfaces );
}
