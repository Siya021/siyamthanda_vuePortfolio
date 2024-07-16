import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'timeline'
import "../public/assets/style.css"
import 'flowbite'
// import "path/to/daisyui/dist/daisyui.css"


createApp(App).use(store).use(router).mount('#app')
