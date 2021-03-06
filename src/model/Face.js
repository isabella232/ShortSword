require('../vendor/three');
/**
 * geometry is a collection of buffers
 * vertices, edges, faces, indexes, etc
 */
function Face(v1, v2, v3) {
	this.createRandomPoint = this._defaultCreateRandomPoint;
	this.v1 = v1;
	this.v2 = v2;
	this.v3 = v3;

	var temp = new THREE.Vector3();
	//edge lengths;
	var a = temp.copy(v1).sub(v2).length();
	var b = temp.copy(v2).sub(v3).length();
	var c = temp.copy(v3).sub(v1).length();
	//semiperimeter
	var s = (a + b + c) * .5;

	this.area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
	this.edgeIndex = 0;
}

Face.edgeIndex = 0;
Face.defaultEdgePower = 4;

Face.prototype = {
	_createRandomPointEdgy: function(edgePower) {
		switch(this.edgeIndex%3) {
			case 0:
				v1 = this.v1;
				v2 = this.v2;
				v3 = this.v3;
				break;
			case 1:
				v1 = this.v2;
				v2 = this.v3;
				v3 = this.v1;
				break;
			case 2:
				v1 = this.v3;
				v2 = this.v1;
				v3 = this.v2;
				break;
		}
		this.edgeIndex++;

		return v1.clone().lerp(
				v2, 
				Math.random()
			).lerp(
				v3, 
				Math.pow(Math.random(), edgePower || Face.defaultEdgePower)
			);
	},
	_createRandomPoint: function() {
		var r2 = Math.random();
		return this.v1.clone().lerp(
				this.v2, 
				Math.random()
			).lerp(
				this.v3, 
				1 - (r2 * (1 - r2) * 4)
			);
	},
	_createRandomPointRandomDelta: function() {
		return this.v1.clone().lerp(
				this.v2, 
				Math.random()
			).lerp(
				this.v3, 
				Math.abs(Math.random() - Math.random())
			);
	},
	clone: function() {
		return new Face(this.v1, this.v2, this.v3);
	}
};
Face.prototype._defaultCreateRandomPoint = Face.prototype._createRandomPointRandomDelta;
module.exports = Face;
