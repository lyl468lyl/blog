<template>
  <div id="loading">
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
    <div>加载资源中...</div>
  </div>
  <div id="three-wrapper" style="width: 100vw; height: 100vh; overflow: hidden" />
</template>

<script setup>
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { onMounted } from 'vue'

class ThreeHelper {
  dom = null
  camera = null
  renderer = null

  // 导入的3D模型
  model = null
  // 需要处理朝向的物体
  lookAtList = []
  // 需要自转的物体
  rotationList = []

  plane = null

  constructor(dom, callback) {
    this.dom = dom
    this.scene = new THREE.Scene()
    const { clientWidth: width, clientHeight: height } = this.dom
    this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 300000)
    this.camera.position.y = 600
    this.camera.position.z = 50
    this.camera.position.x = 800

    // this.scene.add(new THREE.AmbientLight(0x666666, 0.5));
    this.scene.add(new THREE.AmbientLight(0xffffff, 1))

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.setSize(width, height)
    this.dom.appendChild(this.renderer.domElement)
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    controls.minPolarAngle = Math.PI / 3 //你能够垂直旋转的角度的下限
    controls.maxPolarAngle = Math.PI / 3 //你能够垂直旋转的角度的上限
    controls.enableDamping = true //是否开启阻尼效果
    controls.dampingFactor = 0.25 //阻尼系数，越小阻力就越大
    controls.update()

    var manager = this.getLoadingManager(callback)

    const loader = new GLTFLoader(manager)
    var self = this

    loader.load(
      'https://xly-fe.oss-cn-beijing.aliyuncs.com/deploy/official-web/scene-0215.glb',
      // "//caigouzi1.github.io/blog/scene.glb",
      function (model) {
        self.model = model.scene
        self.model.position.y = -100

        self.model.traverse(function (child) {
          if (child.userData.script) {
            const scripts = child.userData.script
            scripts.forEach(item => {
              if (child.isMesh && item.map) {
                child.frustumCulled = false
                // 模型阴影
                child.castShadow = true
                // 模型自发光
                // child.material.emissive = child.material.color;
                // child.material.emissiveMap = child.material.map;
              }

              if (item.type === '旋转') {
                console.log(item)
                self.rotationList.push({ model: child, config: item })
              }

              if (item.type === '看向相机') {
                child.lookAt(self.camera.position)
                self.lookAtList.push(child)
              }
            })
          }
        })
        self.scene.add(model.scene)
      },
      xhr => {
        // console.log('加载完成的百分比' + (xhr.loaded / xhr.total * 100) + '%')
      },
      function (error) {
        console.error(error)
      }
    )

    this.renderer.setClearColor('#c8e6f9', 1.0)
    this.renderer.render(this.scene, this.camera)

    window.onresize = () => {
      const { clientWidth: width, clientHeight: height } = this.dom
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
      this.renderer.render(this.scene, this.camera)
    }
  }

  onMouseClick(event) {
    var raycaster = new THREE.Raycaster()
    var mouse = new THREE.Vector2()
    const { clientWidth: width, clientHeight: height } = this.dom

    //将鼠标点击位置的屏幕坐标转换成threejs中的标准坐标
    mouse.x = (event.offsetX / width) * 2 - 1
    mouse.y = -(event.offsetY / height) * 2 + 1

    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    raycaster.setFromCamera(mouse, this.camera)

    // 获取raycaster直线和所有模型相交的数组集合
    var intersects = raycaster.intersectObjects(this.scene.children)
    for (var i = 0; i < intersects.length; i++) {
      console.log(intersects[i].object.userData)
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))

    if (this.rotationList && Array.isArray(this.rotationList)) {
      this.rotationList.forEach(item => {
        console.log()
        item.model.rotation.y -= 0.1 / item.config.time
      })
    }

    if (this.lookAtList && Array.isArray(this.lookAtList)) {
      const position = this.camera.position
      this.lookAtList.forEach(item => {
        item.lookAt(position)
      })
    }

    this.renderer.render(this.scene, this.camera)
  }

  getLoadingManager(callback) {
    const manager = new THREE.LoadingManager()
    manager.onStart = function (url, itemsLoaded, itemsTotal) {
      callback && callback({ isLoading: true, progress: 0 })
    }

    manager.onLoad = function () {
      console.log('Loading complete!')
      callback && callback({ isLoading: false, progress: 100 })
    }

    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
      callback &&
        callback({
          isLoading: true,
          progress: (itemsLoaded / itemsTotal) * 100,
        })
    }

    manager.onError = function (url) {
      console.log('There was an error loading ' + url)
      callback && callback({ isLoading: false, progress: 0 })
    }

    return manager
  }

  runAnimate() {
    this.animate()
  }
}

onMounted(() => {
  const threeWrapper = document.querySelector('#three-wrapper')
  var threeInstants = new ThreeHelper(threeWrapper, function (params) {
    if (!params.isLoading) {
      document.querySelector('#loading').style.display = 'none'
    }
  })
  threeInstants.runAnimate()
  threeWrapper.addEventListener('click', threeInstants.onMouseClick.bind(threeInstants), false)
})
</script>

<style>
* {
  margin: 0;
}
</style>
<style scoped>
#loading {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: #010826;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #409eff;
  font-size: 15px;
  letter-spacing: 2px;
  overflow: hidden;
  background-color: #c8e6f9;
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(1.3, 1.3, 1.3);
  }
  to {
    opacity: 0;
  }
}
#loading.out {
  animation: zoomOut 0.5s linear forwards;
  pointer-events: none;
}
#loading.out .sk-chase-dot,
#loading.out .sk-chase {
  animation: null;
}
.sk-chase {
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot::before {
  content: '';
  display: block;
  width: 20%;
  height: 20%;
  background-color: #409eff;
  border-radius: 100%;
  animation: sk-chase-dot-before 2s infinite ease-in-out both;
}
.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2):before {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

.sk-chase-dot .sk-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2):before {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
