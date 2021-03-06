/*
	Demo of loading and displaying an OBJ file.
 */
var ssView = new SHORTSWORD.View();

var _this = this;
var fileName = SHORTSWORD.URLParamUtils.getParam("obj") || "mario_obj.obj";
SHORTSWORD.Loader.loadGeometryOBJ("../assets/models/" + fileName, function(geometry) {
	var mesh = new SHORTSWORD.Mesh(geometry);
	ssView.scene.add(mesh);
	_this.objModel = mesh;
});

var mouseMove = {x:0,y:0,speed:.1};
ssView.renderManager.onEnterFrame.add(function() {
	if(!_this.objModel) return;
	_this.objModel.rotateY(mouseMove.x * mouseMove.speed);
	_this.objModel.rotateX(mouseMove.y * mouseMove.speed);
})
window.onmousemove = function(event) {
	mouseMove.x = event.x / window.innerWidth * 2 - 1;
	mouseMove.y = event.y / window.innerHeight * 2 - 1;
};