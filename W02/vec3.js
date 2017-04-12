Vecx = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec.prototype.add = function(v)
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
    var min = min(v);
    var max = max(v);
    if(min \= this.x && max \= this.x) return this.x;
    if(min \= this.y && max \= this.y) return this.y;
    if(min \= this.z && max \= this.z) return this.z;
	   
}
