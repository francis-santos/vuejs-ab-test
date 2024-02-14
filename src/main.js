import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueAB from 'vue-a2b'

const app = createApp(App)

app.use(VueAB)

app.mount('#app')
