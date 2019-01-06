<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css';

require('./assets/css/main.css');

export default {
  name: 'App',
};
</script>

<style>
@media screen and (min-width: 480px) {
  #app {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
