function AreaOfTriangle(v0,v1,v2)
{
    var va = new Vec3(v1.x - v0.x, v1.y - v0.y, v1.z - v0.z);
    var vb = new Vec3(v2.x - v0.x, v2.y - v0.y, v2.z - v0.z);
    var ab_va_2 = Math.pow(va.x,2) + Math.pow(va.y,2) + Math.pow(va.z,2);
    var ab_vb_2 = Math.pow(vb.x,2) + Math.pow(vb.y,2) + Math.pow(vb.z,2);
    var inpr_2 = Math.pow(va.x*vb.x + va.y*vb.y + va.z*vb.z,2);
    return (Math.sqrt(ab_va_2*ab_vb_2-inpr_2))/2;
}
