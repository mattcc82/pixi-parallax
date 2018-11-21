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
              Step 2
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Create a few classes for creating the Far and Mid bgs. Reactive control to scroll speed passed to the scroller class.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
import { Main } from '../utils/step2/Main.js'

export default {
  name: 'step2',
  data () {
    return {
      name: 'step2',
      images: [
        { name: 'far', path: require('../assets/bg-far.png') },
        { name: 'mid', path: require('../assets/bg-mid.png') }
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
      let self = this
      let loader = PIXI.loader
      loader.reset()
      // load for each image
      this.images.forEach((e, i) => {
        if (!loader.resources[e.name]) {
          loader.add(e.name, e.path)
        }
      })
      loader.load((loader, resources) => {
        self.resources = resources
        self.main = new Main(self.view, self.scrollSpeed, self.resources)
      })
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
