function SpritesPool () {
  this.createWindows()
  this.createDecorations()
  this.createFrontEdges()
  this.createBackEdges()
  this.createSteps()
}

SpritesPool.prototype.borrowWindow = function () {
  return this.windows.shift()
}

SpritesPool.prototype.returnWindow = function (sprite) {
  this.windows.push(sprite)
}

SpritesPool.prototype.borrowDecoration = function () {
  return this.decorations.shift()
}

SpritesPool.prototype.returnDecoration = function (sprite) {
  this.decorations.push(sprite)
}

SpritesPool.prototype.borrowFrontEdge = function () {
  return this.frontEdges.shift()
}

SpritesPool.prototype.returnFrontEdge = function (sprite) {
  this.frontEdges.push(sprite)
}

SpritesPool.prototype.borrowBackEdge = function () {
  return this.backEdges.shift()
}

SpritesPool.prototype.returnBackEdge = function (sprite) {
  this.backEdges.push(sprite)
}

SpritesPool.prototype.borrowStep = function () {
  return this.steps.shift()
}

SpritesPool.prototype.returnStep = function (sprite) {
  this.steps.push(sprite)
}

SpritesPool.prototype.createWindows = function () {
  this.windows = []

  this.addWindowSprites(6, 'window_01')
  this.addWindowSprites(6, 'window_02')

  this.shuffle(this.windows)
}

SpritesPool.prototype.createDecorations = function () {
  this.decorations = []

  this.addDecorationSprites(6, 'decoration_01')
  this.addDecorationSprites(6, 'decoration_02')
  this.addDecorationSprites(6, 'decoration_03')

  this.shuffle(this.decorations)
}

SpritesPool.prototype.createFrontEdges = function () {
  this.frontEdges = []

  this.addFrontEdgeSprites(2, 'edge_01')
  this.addFrontEdgeSprites(2, 'edge_02')

  this.shuffle(this.frontEdges)
}

SpritesPool.prototype.createBackEdges = function () {
  this.backEdges = []

  this.addBackEdgeSprites(2, 'edge_01')
  this.addBackEdgeSprites(2, 'edge_02')

  this.shuffle(this.backEdges)
}

SpritesPool.prototype.createSteps = function () {
  this.steps = []
  this.addStepSprites(2, 'step_01')
}

SpritesPool.prototype.addWindowSprites = function (amount, frameId) {
  for (var i = 0; i < amount; i++) {
    var sprite = PIXI.Sprite.fromFrame(frameId)
    this.windows.push(sprite)
  }
}

SpritesPool.prototype.addDecorationSprites = function (amount, frameId) {
  for (var i = 0; i < amount; i++) {
    var sprite = PIXI.Sprite.fromFrame(frameId)
    this.decorations.push(sprite)
  }
}

SpritesPool.prototype.addFrontEdgeSprites = function (amount, frameId) {
  for (var i = 0; i < amount; i++) {
    var sprite = PIXI.Sprite.fromFrame(frameId)
    this.frontEdges.push(sprite)
  }
}

SpritesPool.prototype.addBackEdgeSprites = function (amount, frameId) {
  for (var i = 0; i < amount; i++) {
    var sprite = PIXI.Sprite.fromFrame(frameId)
    sprite.anchor.x = 1
    sprite.scale.x = -1
    this.backEdges.push(sprite)
  }
}

SpritesPool.prototype.addStepSprites = function (amount, frameId) {
  for (var i = 0; i < amount; i++) {
    var sprite = PIXI.Sprite.fromFrame(frameId)
    sprite.anchor.y = 0.25
    this.steps.push(sprite)
  }
}

SpritesPool.prototype.shuffle = function (array) {
  var len = array.length
  var shuffles = len * 3
  for (var i = 0; i < shuffles; i++) {
    var wallSlice = array.pop()
    var pos = Math.floor(Math.random() * (len - 1))
    array.splice(pos, 0, wallSlice)
  }
}

export { SpritesPool }
