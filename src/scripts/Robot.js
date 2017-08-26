const loader = new THREE.JSONLoader()

const blackMaterial = new THREE.MeshLambertMaterial({ color: 0x111111 })
const darkMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 })
const lightMaterial = new THREE.MeshLambertMaterial({ color: 0xeeeeee })

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
        this.mesh = new THREE.Object3D()
        this.parts = {}
        loadAllObjectsAndPutIn(this.parts).then(this.ready.bind(this))
    }
    ready () {
        for (let partName in this.parts) {
            const part = this.parts[partName]
            part.castShadow = true
            part.receiveShadow = true
            this.mesh.add(part)
        }
        this.mesh.position.z = 0
        this.scene.add(this.mesh)
    }
    render () {
        // this.mesh.rotation.y += 0.001
    }
}

export default Robot