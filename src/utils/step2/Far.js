function Far (texture) {
  PIXI.extras.TilingSprite.call(this, texture, 512, 256)
  this.position.x = 0
  this.position.y = 0
  this.tilePosition.x = 0
  this.tilePosition.y = 0
  this.viewportX = 0
}

Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype)

Far.DELTA_X = 0.128

Far.prototype.setViewportX = function (newViewportX) {
  let distanceTravelled = newViewportX - this.viewportX
  this.viewportX = newViewportX
  this.tilePosition.x -= (distanceTravelled * Far.DELTA_X)
}

export { Far }
