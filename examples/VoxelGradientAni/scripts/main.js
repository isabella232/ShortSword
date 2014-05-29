/*
	Demo of loading 2 OBJs and blending between them
 */
var ssView = new SHORTSWORD.View();

var colours = [
	
	[ 0xFFFF00FF, 0xFF00FF00 ],
	[ 0xFFFF00FF, 0xFF0000FF ],
	[ 0xFF333333, 0xFF00FFFF ],
	[ 0xFF00FF00, 0xFF0000FF ]
];

var weight = [ 0, 1 ];

var animator = null;


var _this = this;
SHORTSWORD.Loader.loadGeometryOBJ("../assets/models/Luigi_obj.obj", function(geometry1) {
	SHORTSWORD.Loader.loadGeometryOBJ("../assets/models/mario_obj.obj", function(geometry2) {
		var mesh = new SHORTSWORD.BlendMesh(
			geometry1,
			geometry2,
			new SHORTSWORD.materials.VoxelGradient({
				colours: [ 0xFFFF0000, 0xFFFFFFFF ],
				steps: 3
			})
		);

		animator = mesh.addAnimator( SHORTSWORD.animators.MaterialGradient );
		changeColours();
		setInterval( changeColours, 3000 );
		

		ssView.scene.add(mesh);
		_this.blendModel = mesh;
	});
});

var mouseMove = {x:0,y:0,speed:.1};
ssView.renderManager.onEnterFrame.add(function() {
	if(!_this.blendModel) return;
	_this.blendModel.blend = Math.sin((new Date()).getTime() * .001) * .5 + .5;
	//_this.blendModel.updateGeometry();
	_this.blendModel.rotateY(mouseMove.x * mouseMove.speed);
	_this.blendModel.rotateX(mouseMove.y * mouseMove.speed);
})
window.onmousemove = function(event) {
	mouseMove.x = event.x / window.innerWidth * 2 - 1;
	mouseMove.y = event.y / window.innerHeight * 2 - 1;
};

function changeColours() {

	var idx = Math.round( ( colours.length - 1 ) * Math.random() );
	animator.setTarget( colours[ idx ], weight );
}