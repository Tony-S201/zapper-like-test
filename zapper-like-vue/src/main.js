import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import i18n from './i18n'

createApp(App).use(i18n).use(router).use(store).mount('#app')
