import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import directives from '@/directives/index'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import '@icon-park/vue-next/styles/index.css'

const head = createHead()

const pinia = createPinia()
pinia.use(createPersistedState())

createApp(App).use(pinia).use(head).use(router).use(directives).mount('#app')
