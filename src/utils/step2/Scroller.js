import { Far } from './Far.js'
import { Mid } from './Mid.js'

function Scroller (stage, resources) {
  this.far = new Far(resources.far.texture)
  stage.addChild(this.far)
  this.mid = new Mid(resources.mid.texture)
  stage.addChild(this.mid)
  this.viewportX = 0
}

Scroller.prototype.setViewportX = function (viewportX) {
  this.viewportX = viewportX
  this.far.setViewportX(viewportX)
  this.mid.setViewportX(viewportX)
}

Scroller.prototype.getViewportX = function () {
  return this.viewportX
}

Scroller.prototype.moveViewportXBy = function (units) {
  let newViewportX = this.viewportX + units
  this.setViewportX(newViewportX)
}

export { Scroller }
