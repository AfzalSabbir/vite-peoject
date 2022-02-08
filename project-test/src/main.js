import {createApp} from 'vue'
import App         from './App.vue'

import VButton from 'vite-project'
import "vite-project/dist/style.css"

import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)
app.use(VButton)
    .mount('#app')
