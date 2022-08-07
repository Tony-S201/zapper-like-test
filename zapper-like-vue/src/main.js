import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import mitt from 'mitt'

import MoralisFactory from './moralis'
import MoralisCompose from './composer'

const app = createApp(App).use(store).use(router)

app.use(router)
app.use(store)

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
