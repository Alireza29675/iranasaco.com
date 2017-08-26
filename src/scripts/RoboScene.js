import 'framesflow'
import Robot from './Robot'

var postprocessing = {}
var bokeh_params = {
    znear: 0.1,
    zfar: 10,
    shaderFocus: false,
    fstop: 20,
    maxblur: 2,
    showFocus: false,
    focalDepth: 1.4,
    manualdof: false,
    vignetting: false,
    depthblur: true,
    threshold : 0.5,
    gain: 0.2,
    bias: 2,
    fringe: 3,
    focalLength: 20,
    noise: true,
    pentagon: false,
    dithering: 0
}

class RoboScene {
    constructor (query) {
        this.container = $(query)
        this.width = window.innerWidth
        this.height = 600
        this.init()
        window.addEventListener('resize', this.onResize.bind(this))
        framesFlow.render(this.render.bind(this))
    }
    init () {
        // Creating Scene
        this.scene = new THREE.Scene()
        const fogColor = 0xf3f3f3
        this.scene.background = new THREE.Color(fogColor)
        this.scene.fog = new THREE.Fog(fogColor, 4, 50)
        // Creating Camera
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 300)
        this.camera.position.z = 13
        this.camera.position.y = 1
        this.camera.rotation.x = 0.25
        this.scene.add(this.camera)
        // Post Proccessing
        this.material_depth = new THREE.MeshDepthMaterial()
        this.initPostProcessing()
        this.updateBookehParams()
        // Creating Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(this.width, this.height)
        this.renderer.gammaInput  = true;
		this.renderer.gammaOutput = true;
		this.renderer.shadowMap.enabled  = true;
		this.renderer.shadowMap.renderReverseSided = false;
        this.container.appendChild(this.renderer.domElement)
        // Creating Lights
        this.pointLight = new THREE.PointLight(0xffffff, 0.5) // Point
        this.pointLight.position.z = 10
        this.scene.add(this.pointLight)
        var light = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 );
        this.scene.add( light );
        // Creating ground
        this.gridHelper = new THREE.GridHelper( 70, 45 );
        this.scene.add( this.gridHelper );
        // Creating Robot
        this.robot = new Robot(this)
    }
    setBookehParam (changes) {
        Object.assign(bokeh_params, changes)
        this.updateBookehParams()
    }
    updateBookehParams () {
        for (let e in bokeh_params) if(e in postprocessing.bokeh_uniforms) postprocessing.bokeh_uniforms[e].value = bokeh_params[e]
        postprocessing.enabled = true
        postprocessing.bokeh_uniforms["znear"].value = bokeh_params.znear
        postprocessing.bokeh_uniforms["zfar"].value = bokeh_params.zfar
        this.camera.setFocalLength( bokeh_params.focalLength )
    }
    initPostProcessing () {
        postprocessing.scene  = new THREE.Scene();
        postprocessing.camera = new THREE.OrthographicCamera( -this.width / 2, this.width / 2, this.height / 2, -this.height / 2, -60, 60 )
        postprocessing.scene.add( postprocessing.camera )
        const params = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBFormat
        }
        postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget( this.width, this.height, params )
        postprocessing.rtTextureColor = new THREE.WebGLRenderTarget( this.width, this.height, params )
        var bokeh_shader = THREE.BokehShader;
        postprocessing.bokeh_uniforms = THREE.UniformsUtils.clone( bokeh_shader.uniforms )
        postprocessing.bokeh_uniforms["tColor"].value = postprocessing.rtTextureColor.texture
        postprocessing.bokeh_uniforms["tDepth"].value = postprocessing.rtTextureDepth.texture
        postprocessing.bokeh_uniforms["textureWidth" ].value = this.width
        postprocessing.bokeh_uniforms["textureHeight"].value = this.height
        postprocessing.materialBokeh = new THREE.ShaderMaterial( {
            uniforms: postprocessing.bokeh_uniforms,
            vertexShader: bokeh_shader.vertexShader,
            fragmentShader: bokeh_shader.fragmentShader,
            defines: { RINGS: 3, SAMPLES: 2}
        })
        postprocessing.quad = new THREE.Mesh( new THREE.PlaneGeometry(this.width, this.height), postprocessing.materialBokeh );
        postprocessing.scene.add( postprocessing.quad );
	}
    onResize () {
        this.width = window.innerWidth
        this.camera.aspect = postprocessing.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
        postprocessing.camera.updateProjectionMatrix()
        this.renderer.setSize(this.width, this.height)
    }
    changes () {
        
    }
    render (frame) {
        this.changes()
        this.robot.render()
        this.renderer.clear()
		this.scene.overrideMaterial = null;
		this.renderer.render(this.scene, this.camera, postprocessing.rtTextureColor, true)
		this.scene.overrideMaterial = this.material_depth
		this.renderer.render(this.scene, this.camera, postprocessing.rtTextureDepth, true)
		this.renderer.render(postprocessing.scene, postprocessing.camera)
    }
}

export default RoboScene