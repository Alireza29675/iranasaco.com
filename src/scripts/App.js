import RoboScene from './RoboScene'
import Navigation from './Navigation'
import Gallery from './Gallery'

class App {
    constructor () {
        this.roboScene = new RoboScene('body > header');
        this.navigation = new Navigation('body > nav');
        this.gallery = new Gallery('body .gallery');
        this.robot = this.roboScene.robot;
        // Moving robot listeners
        window.addEventListener('mousemove', this.onMove.bind(this));
        window.addEventListener('touchmove', this.onMove.bind(this));
        // Grabbing listeners
        window.addEventListener('mousedown', this.onMouseDown.bind(this));
        window.addEventListener('mouseup', this.onMouseUp.bind(this));
        // Focusing listeners
        $('body').addEventListener('mouseleave', () => this.focus = false);
        $('body').addEventListener('mouseenter', () => this.focus = true);
        window.addEventListener('touchend', () => this.focus = false);
        window.addEventListener('touchstart', () => this.focus = true);
        this.focusingTimeout = null;
        this.autoRotationRenderer = window.framesFlow.render(this.autoRotate.bind(this));
    }
    onMove (event) {
        this.focus = true;
        this.focused = true;
        try { event = event.touches[0] } catch (e) { /* nothing */ }
        this.moveRobotTo(event.pageX, event.pageY)
    }
    moveRobotTo (x, y) {
        const xRate = x / window.innerWidth - 0.5;
        const yRate = y / window.innerHeight - 0.5;
        this.robot.rotateY = xRate * Math.PI;
        this.robot.rotateX = yRate * Math.PI/3 - Math.PI/6;
        this.robot.armAngle = yRate * Math.PI/2 + 0.05;
        this.robot.wristAngle = yRate * -Math.PI/3
    }
    onMouseDown () {
        this.robot.closeGrab()
    }
    onMouseUp () {
        this.robot.grabAngle = 0.5
    }
    set focus (isFocused) {
        if (isFocused) {
            clearTimeout(this.focusingTimeout);
            this.autoRotationRenderer.pause()
        } else {
            this.focusingTimeout = setTimeout(() => { this.autoRotationRenderer.play() }, 2000)
        }
    }
    autoRotate (frame) {
        const theta = frame.index/250;
        this.moveRobotTo(
            (window.innerWidth + Math.cos(theta) * window.innerWidth)/2,
            (window.innerHeight + Math.sin(theta) * window.innerHeight)/2
        )
    }
    onLoad () {
        $('body').classList.add('loading-finished');
        setTimeout(() => { this.gallery.loadImages(); }, 300)
        setTimeout(() => { $('body > .loading').remove() }, 1000)
    }
}

export default App