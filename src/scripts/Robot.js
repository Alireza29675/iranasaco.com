const loader = new THREE.JSONLoader()

const blackMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, shininess: 0 })
const darkMaterial = new THREE.MeshPhongMaterial({ color: 0x999999, shininess: 100 })
const lightMaterial = new THREE.MeshPhongMaterial({ color: 0xeeeeee, shininess: 70 })

const objectsNames = ['arm1', 'arm2', 'finger', 'hand', 'rest', 'rotator', 'wrist', 'wristbone']
const load = (objectName) => {
    const url = './assets/objects/' + objectName + '.json'
    return new Promise((resolve, reject, err) => {
        loader.load(url, (geometry, material) => {
            material = lightMaterial
            if (objectName === 'finger') material = blackMaterial
            if (['wristbone', 'hand', 'arm1', 'rest'].includes(objectName)) material = darkMaterial
            resolve(new THREE.Mesh(geometry, material))
        })
    })
}
const loadAllObjectsAndPutIn = (objects) => {
    return new Promise((resolve, reject, err) => {
        let loadedCount = 0;
        for (let objectName of objectsNames) {
            load(objectName).then((mesh) => {
                objects[objectName] = mesh
                loadedCount++
                if (loadedCount === objectsNames.length) resolve()
            })
        };
    })
}

class Robot {
    constructor (roboScene) {
        this.roboScene = roboScene
        this.scene = roboScene.scene
        this.isReady = false
        this.parts = {}
        loadAllObjectsAndPutIn(this.parts).then(this.ready.bind(this))
    }
    ready () {
        for (let partName in this.parts) {
            const part = this.parts[partName]
            part.castShadow = true
            part.receiveShadow = true
        }

        // Combining things together
        this.parts.rest.add(this.parts.rotator)
        this.parts.rotator.position.y = 3
        this.parts.rotator.add(this.parts.arm1)
        this.parts.arm1.position.y = 2
        this.parts.arm1.add(this.parts.arm2)
        this.parts.arm2.position.y = 4.5
        this.parts.arm2.add(this.parts.wrist)
        this.parts.wrist.add(this.parts.wristbone)
        this.parts.wristbone.position.y = 7.5
        this.parts.wristbone.position.x = -0.06
        this.parts.wristbone.add(this.parts.hand)
        this.parts.hand.add(this.parts.finger)
        this.parts.finger.position.y = 1.4
        this.parts.finger.position.x = 0.2
        this.parts.finger.position.z = 0.35
        this.parts.finger.rotation.x = 0.2
        this.parts.finger2 = this.parts.finger.clone()
        this.parts.hand.add(this.parts.finger2)
        this.parts.finger2.rotation.y = Math.PI
        this.parts.finger2.position.x = -0.4

        // Hidden parameters
        this._rotateY = 0
        this._rotateX = 0
        this._armAngle = 0
        this._wristAngle = 0
        this._grabAngle = 0

        // adding rest to scene
        this.scene.add(this.parts.rest)
        this.isReady = true
    }
    set rotateY (deg) {
        this._rotateY = deg
    }
    get rotateY () {
        return this._rotateY
    }
    set rotateX (deg) {
        deg = Math.max(deg, -Math.PI/3)
        deg = Math.min(deg, 7*Math.PI/12)
        this._rotateX = deg
    }
    get rotateX () {
        return this._rotateX
    }
    set armAngle (deg) {
        deg = Math.PI - deg
        deg = Math.max(deg, -Math.PI/12)
        deg = Math.min(deg, 5*Math.PI/6)
        this._armAngle = deg
    }
    get armAngle () {
        return this._armAngle
    }
    set wristAngle (deg) {
        deg = Math.max(deg, -Math.PI/2)
        deg = Math.min(deg, Math.PI/2)
        this._wristAngle = deg
    }
    get wristAngle () {
        return this._wristAngle
    }
    set grabAngle (deg) {
        deg = Math.max(deg, 0)
        deg = Math.min(deg, Math.PI)
        deg -= Math.PI/6
        this._grabAngle = -deg/2
    }
    get grabAngle () {
        return -(2*this._grabAngle-Math.PI/6)
    }
    closeGrab () {
        this.grabAngle = 0
    }
    openGrab () {
        this.grabAngle = Math.PI/2
    }
    render () {
        if (this.isReady) {
            this.parts.rotator.rotation.y += (this._rotateY - this.parts.rotator.rotation.y) / 30
            this.parts.arm1.rotation.x += (this._rotateX - this.parts.arm1.rotation.x) / 30
            this.parts.arm2.rotation.x += (this._armAngle - this.parts.arm2.rotation.x) / 30
            this.parts.wristbone.rotation.x += (this._wristAngle - this.parts.wristbone.rotation.x) / 30
            this.parts.finger.rotation.z += (this._grabAngle - this.parts.finger.rotation.z) / 30
            this.parts.finger2.rotation.z += (this._grabAngle - this.parts.finger2.rotation.z) / 30
        }
    }
}

export default Robot