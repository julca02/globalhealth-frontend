import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from "./store";

//Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fas, fab)

createApp(App).use(router).use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
