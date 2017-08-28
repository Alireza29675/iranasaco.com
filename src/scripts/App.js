import RoboScene from './RoboScene'
import Navigation from './Navigation'

class App {
    constructor () {
        this.roboScene = new RoboScene('body > header');
        this.navigation = new Navigation('body > nav');
        this.robot = this.roboScene.robot;
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('mousedown', this.onMouseDown.bind(this));
        window.addEventListener('mouseup', this.onMouseUp.bind(this))
    }
    onMouseMove (event) {
        const xRate = event.pageX / window.innerWidth - 0.5;
        const yRate = event.pageY / window.innerHeight - 0.5;
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
}

export default App