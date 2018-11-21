<template>
  <div class="container">
    <div class="columns is-desktop is-multiline">
      <div class="column is-full">
        <canvas :ref="name" width="512" height="384"></canvas>
      </div>
      <div class="column is-full">
        <input
          class="slider is-fullwidth is-large"
          step="0.001"
          min="-0.02"
          max="0.02"
          v-model="scrollAcceleration"
          type="range">
          <h3>Acceleration</h3>
          <span
            class="tag is-large is-danger">
            {{ scrollAcceleration }}
          </span>
        <input
          class="slider is-fullwidth is-large"
          step="1"
          min="-10"
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
              Step 4
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Generate and render the wall sprites - using some mapping to sprite types and shuffling of available sprites in the pool</p>
              <p>Build maps based on which sprites are available in the pool and which are able to fit with other sprites for the front wall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js' // eslint-disable-line no-unused-vars
import { Main } from '../utils/step4/Main.js'

export default {
  name: 'step4',
  data () {
    return {
      name: 'step4',
      assets: [
        { name: 'wall', path: require('../assets/wall.json'), type: 'json' },
        { name: 'far', path: require('../assets/bg-far.png'), type: 'png' },
        { name: 'mid', path: require('../assets/bg-mid.png'), type: 'png' }
      ],
      scrollSpeed: 5,
      scrollAcceleration: 0,
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
      this.main = new Main(this.view, this.scrollSpeed, this.assets, this.scrollAcceleration)
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    scrollSpeed (e) {
      this.main.SCROLL_SPEED = parseInt(e, 10)
    },
    scrollAcceleration (e) {
      this.main.SCROLL_ACCELERATION = parseFloat(e)
    }
  }
}
</script>
