<template>
  <div class="main">
    <top-bar/>
    <router-view></router-view>
    <footer-menu/>
  </div>
</template>

<script>
import TopBar from '@/components/layouts/TopBar.vue'
import FooterMenu from '@/components/layouts/FooterMenu.vue'

export default {
  name: 'MainView',
  components: {
    TopBar,
    FooterMenu
  },
  mounted() {
    this.emitter.on("add-log", (log) => {
      console.log(log)
    })
  }
}
</script>
