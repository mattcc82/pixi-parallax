import { Scroller } from './Scroller.js'

function Main (view, scrollSpeed, resources) {
  this.stage = new PIXI.Container()
  this.SCROLL_SPEED = scrollSpeed
  this.renderer = PIXI.autoDetectRenderer(512, 384, { view: view })
  this.scroller = new Scroller(this.stage, resources)
  requestAnimationFrame(this.update.bind(this))
}

Main.prototype.update = function () {
  this.scroller.moveViewportXBy(this.SCROLL_SPEED)
  this.renderer.render(this.stage)
  requestAnimationFrame(this.update.bind(this))
}

export { Main }
