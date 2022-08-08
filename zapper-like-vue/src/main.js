import { createApp } from 'vue'
import App from './App.vue'

// Basics.
import router from './router'
import store from './store'

// Extra.
import mitt from 'mitt'
import i18n from './i18n'

// Moralis.
import MoralisFactory from './moralis'
import MoralisCompose from './composer'

// UI.
// TODO switch to auto import soon
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)
app.use(ElementPlus)

// Use mitt & moralis globally.
app.provide('event-bus', mitt())
app.provide('moralis', MoralisFactory.getInstance())

app.mixin({
    inject: {
        moralis: {
            from: 'moralis'
        },
        emitter: {
            from: 'event-bus'
        },
    },
    methods: {
        moralisCompose(molaris) {
            return MoralisCompose(molaris);
        }
    }
});

app.mount('#app')
