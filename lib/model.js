import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DirectionalLight } from 'three'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'desk'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        const light1 = new DirectionalLight(0xffffff, 1)
        const light2 = new DirectionalLight(0xffffff, 1)
        light1.position.set(1, 1, 1)
        light2.position.set(-1, 1, -1)
        scene.add( light1 )
        scene.add( light2 )

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
