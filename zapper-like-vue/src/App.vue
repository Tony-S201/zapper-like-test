<template>
  <div id="app">
    <main-view/>
  </div>
</template>

<script>
import MainView from '@/views/MainView.vue'

export default {
  name: 'app',
  components: {
    MainView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
