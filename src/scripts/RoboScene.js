import 'framesflow'
import Robot from './Robot'

class RoboScene {
    constructor (query) {
        this.container = $(query)
        this.width = window.innerWidth
        this.height = 500
        this.init()
        window.addEventListener('resize', this.onResize.bind(this))
        framesFlow.render(this.render.bind(this))
    }
    init () {
        // Creating Scene
        this.scene = new THREE.Scene()
        // Creating Camera
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 1000)
        this.camera.position.z = 20
        this.scene.add(this.camera)
        // Creating Renderer
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(this.width, this.height)
        this.container.appendChild(this.renderer.domElement)
        // Creating Lights
        this.light = new THREE.AmbientLight(0xffffff, 0.2)
        this.scene.add(this.light)
        // Creating Robot
        this.robot = new Robot(this)
    }
    onResize () {
        this.width = window.innerWidth
        this.renderer.setSize(this.width, this.height)
    }
    render (frame) {
        this.camera.position.z += 0.1
        this.renderer.render(this.scene, this.camera)
    }
}

export default RoboScene