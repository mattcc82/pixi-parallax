<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Step 1</router-link> |
      <router-link to="/2">Step 2</router-link> |
      <router-link to="/3">Step 3</router-link> |
      <router-link to="/4">Step 4</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bulma/bulma';
@import '~bulma-extensions/bulma-slider/src/sass/index.sass';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
