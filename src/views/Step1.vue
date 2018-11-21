<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-full">
        <canvas :ref="name" width="512" height="384"></canvas>
      </div>
      <div class="column is-full">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Step 1
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>First run at this - uses PIXI.loader to cache up textures - then fire a callback to create TileSprites and add to stage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  name: 'step1',
  data () {
    return {
      name: 'step1',
      images: [
        { name: 'bgFar', path: require('../assets/bg-far.png') },
        { name: 'bgMid', path: require('../assets/bg-mid.png') }
      ]
    }
  },
  methods: {
    init () {
      // pixi check
      let type = 'WebGL'
      if (!PIXI.utils.isWebGLSupported()) {
        type = 'canvas'
      }
      PIXI.utils.sayHello(type)

      // init container
      let stage = new PIXI.Container()
      let renderer = PIXI.autoDetectRenderer(
        512,
        384,
        { view: this.$refs[this.name] }
      )

      // PIXI loader
      let loader = PIXI.loader

      // force loader to reload textures on new inits
      loader.reset()

      // load for each image
      this.images.forEach((e, i) => {
        if (!loader.resources[e.name]) {
          loader.add(e.name, e.path)
        }
      })

      // once loader is done loading
      loader.load((loader, resources) => {
        let farTexture = resources.bgFar.texture
        let far = new PIXI.extras.TilingSprite(farTexture, 512, 256)
        far.position.x = 0
        far.position.y = 0
        far.tilePosition.x = 0
        far.tilePosition.y = 0
        stage.addChild(far)

        let midTexture = resources.bgMid.texture
        let mid = new PIXI.extras.TilingSprite(midTexture, 512, 256)
        mid.position.x = 0
        mid.position.y = 128
        mid.tilePosition.x = 0
        mid.tilePosition.y = 0
        stage.addChild(mid)

        requestAnimationFrame(updateAnimation)

        function updateAnimation () {
          far.tilePosition.x -= 0.128
          mid.tilePosition.x -= 0.64
          renderer.render(stage)
          requestAnimationFrame(updateAnimation)
        }
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
