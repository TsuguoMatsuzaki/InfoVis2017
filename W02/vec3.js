Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    var min = this.x;
    if(this.y < min)
	min = this.y;
    if(this.z < min)
	min = this.z;
    return min;
}

Vec3.prototype.max = function()
{
    var max = this.x;
    if(this.y > max)
	max = this.y;
    if(this.z > max)
	max = this.z;
    return max;
}

Vec3.prototype.mid = function()
{
    var min = this.min()
    var max = this.max();
    if(min != this.x && max != this.x) return this.x;
    if(min != this.y && max != this.y) return this.y;
    if(min != this.z && max != this.z) return this.z;	   
}

Vec3.prototype.AreaOfTriangle(v0,v1,v2)
{
    var va = Vec3(v1.x - v0.x, v1.y - v0.y, v1.z - v0.z);
    var vb = Vec3(v2.x - v0.x, v2.y - v0.y, v2.z - v0.z);
    var ab_va_2 = Math.pow(va.x,2) + Math.pow(va.y,2) + Math.pow(va.z,2);
    var ab_vb_2 = Math.pow(vb.x,2) + Math.pow(vb.y,2) + Math.pow(vb.z,2);
    varinpr_2 = Math.pow(va.x*vb.x + va.y*vb.y + va.z*vb.z,2);
    return (Math.sqrt(ab_va_2*ab_vb_2-inpr_2))/2;
}

