<template>
  <div class="container">
    <div class="columns is-desktop is-multiline">
      <div class="column is-full">
        <canvas :ref="name" width="512" height="384"></canvas>
      </div>
      <div class="column is-full">
        <input
          class="slider is-fullwidth is-large"
          step="1"
          min="0"
          max="10"
          v-model="scrollSpeed"
          type="range">
          <h3>Speed</h3>
          <span
            class="tag is-large is-danger">
            {{ scrollSpeed }}
          </span>
      </div>
      <div class="column is-full">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Step 3
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Create a spritesheet object for the wall segements and an object pool to reuse textures and save GPU</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js' // eslint-disable-line no-unused-vars
import { Main } from '../utils/step3/Main.js'

export default {
  name: 'step3',
  data () {
    return {
      name: 'step3',
      assets: [
        { name: 'wall', path: require('../assets/wall.json'), type: 'json' },
        { name: 'far', path: require('../assets/bg-far.png'), type: 'png' },
        { name: 'mid', path: require('../assets/bg-mid.png'), type: 'png' }
      ],
      scrollSpeed: 5,
      main: undefined,
      resources: undefined
    }
  },
  computed: {
    view () {
      return this.$refs[this.name]
    }
  },
  methods: {
    init () {
      this.main = new Main(this.view, this.scrollSpeed, this.assets)
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    scrollSpeed (e) {
      this.main.SCROLL_SPEED = parseInt(e, 10)
    }
  }
}
</script>
