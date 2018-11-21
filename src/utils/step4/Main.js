import { Scroller } from './Scroller.js'
import { SpritesPool } from './SpritesPool.js'

function Main (view, scrollSpeed, assets, scrollAcceleration) {
  this.stage = new PIXI.Container()
  this.SCROLL_SPEED = scrollSpeed
  this.SCROLL_ACCELERATION = scrollAcceleration
  this.renderer = PIXI.autoDetectRenderer(512, 384, { view: view })
  this.loadSpriteSheet(assets)
}

Main.prototype.update = function () {
  this.SCROLL_SPEED += this.SCROLL_ACCELERATION
  this.scroller.moveViewportXBy(this.SCROLL_SPEED)
  this.renderer.render(this.stage)
  requestAnimationFrame(this.update.bind(this))
}

Main.prototype.loadSpriteSheet = function (assets) {
  let loader = PIXI.loader
  assets.forEach((e, i) => {
    if (!loader.resources[e.name]) {
      if (e.type === 'json') {
        let data = e.path
        let imagePath = require(`../../assets/${data.meta.image}`)
        let texture = PIXI.Texture.fromImage(imagePath)
        let spriteSheet = new PIXI.Spritesheet(texture.baseTexture, data)
        spriteSheet.parse(function (textures) { })
      } else {
        loader.add(e.name, e.path)
      }
    }
  })
  loader.once('complete', this.spriteSheetLoaded.bind(this))
  loader.load()
}

Main.prototype.spriteSheetLoaded = function () {
  this.scroller = new Scroller(this.stage)
  requestAnimationFrame(this.update.bind(this))
  this.pool = new SpritesPool()
  this.wallSlices = []
}

Main.prototype.borrowWallSprites = function (num) {
  for (var i = 0; i < num; i++) {
    var sprite = this.pool.borrowWindow()
    sprite.position.x = -32 + (i * 64)
    sprite.position.y = 128

    this.wallSlices.push(sprite)

    this.stage.addChild(sprite)
  }
}

Main.prototype.returnWallSprites = function () {
  for (var i = 0; i < this.wallSlices.length; i++) {
    var sprite = this.wallSlices[i]
    this.stage.removeChild(sprite)
    this.pool.returnWindow(sprite)
  }

  this.wallSlices = []
}

export { Main }
