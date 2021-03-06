/**
 * ShortSword is a library for rendering realtime animated voxels to a canvas.
 * Supports standard canvas element.
 *
 * Special Notes
 * =============
 * 
 * Math:
 * This uses a custom build of a subset of threejs. Specifically the math objects/methods.
 * math.js was considered but it lacks any convenience functions like rotate() or translate().
 */
SHORTSWORD = {
	View : require('./view/View'),
	Scene : require('./model/Scene'),
	BlendMesh : require('./model/BlendMesh'),
	Mesh : require('./model/Mesh'),
	Face : require('./model/Face'),
	Object3D : require('./model/Object3D'),
	Camera3D : require('./model/Camera3D'),
	Loader : require('./loader/Loader'),
	GradientUtils : require('./utils/Gradient'),
	ColorUtils : require('./utils/Color'),
	ImageUtils : require('./utils/Image'),
	ArrayUtils : require('./utils/Array'),
	URLParamUtils : require('./utils/URLParams'),
	GeometryUtils : require('./utils/Geometry'),
	GeometryGarage : require('./utils/GeometryGarage'),
	TestFactory : require('./utils/TestFactory'),
	RemapCurves : require('./utils/RemapCurves'),
	FPS : require('./utils/FPS'),
	CanvasGraph : require('./utils/CanvasGraph'),
	PerformanceTweaker : require('./utils/PerformanceTweaker'),
	parsers: {
		GeometryOBJ: require('./loader/parsers/GeometryOBJ'),
		GeometryJSON: require('./loader/parsers/GeometryJSON')
	},
	materials: {
		Voxel: require( './model/materials/Voxel' ),
		VoxelGradient: require( './model/materials/VoxelGradient' ),
		VoxelGradientLerp: require( './model/materials/VoxelGradientLerp' ),
		VoxelGradientCurves: require( './model/materials/VoxelGradientCurves' ),
		VoxelLookUp: require( './model/materials/VoxelLookUp' ),
		VoxelImageLookUp: require( './model/materials/VoxelImageLookUp' )
	},
	animators: {
		VertexBlend: require('./animation/AnimatorVertexBlend'),
		VertexRandom: require('./animation/AnimatorVertexRandom'),
		MaterialGradient: require('./animation/AnimatorMaterialGradient')
	},
	effects: {
		GlitchOffset : require('./view/effects/GlitchOffset'),
		GlitchOffsetSmearBlock : require('./view/effects/GlitchOffsetSmearBlock')
	}
}