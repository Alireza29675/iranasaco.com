const loader = new THREE.JSONLoader()
const objectsNames = ['arm1', 'arm2', 'finger1', 'finger2', 'hand', 'rest', 'rotator', 'wrist', 'wristbone']
const load = (objectName) => {
    const url = './assets/objects/' + objectName + '.json'
    return new Promise((resolve, reject, err) => {
        loader.load(url, (geometry, material) => {
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
        this.objects = {}
        loadAllObjectsAndPutIn(this.objects).then(this.ready.bind(this))
    }
    ready () {
        console.log(this.objects)
    }
}

export default Robot