const loader = new THREE.JSONLoader()

const blackMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, shininess: 0 })
const darkMaterial = new THREE.MeshPhongMaterial({ color: 0x999999, shininess: 100 })
const lightMaterial = new THREE.MeshPhongMaterial({ color: 0xeeeeee, shininess: 70 })

let time = 0;

const objectsNames = ['arm1', 'arm2', 'finger1', 'finger2', 'hand', 'rest', 'rotator', 'wrist', 'wristbone']
const load = (objectName) => {
    const url = './assets/objects/' + objectName + '.json'
    return new Promise((resolve, reject, err) => {
        loader.load(url, (geometry, material) => {
            material = lightMaterial
            if (objectName.includes('finger')) material = blackMaterial
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
        this.parts.rotator.add(this.parts.arm1)
        this.parts.arm1.add(this.parts.arm2)
        this.parts.arm2.add(this.parts.wrist)
        this.parts.wrist.add(this.parts.wristbone)
        this.parts.wristbone.add(this.parts.hand)
        this.parts.hand.add(this.parts.finger1)
        this.parts.hand.add(this.parts.finger2)
        // adding rest to scene
        this.scene.add(this.parts.rest)
        this.isReady = true
    }
    set rotateY (deg) {
        this.parts.rotator.rotation.y = deg
    }
    get rotateY () {
        return this.parts.rotator.rotation.y
    }
    render () {
        time++
        if (this.isReady) {
            this.rotateY += 0.01
        }
    }
}

export default Robot