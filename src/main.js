import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'
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

createApp(App).use(router).use(store).use(Notifications)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
