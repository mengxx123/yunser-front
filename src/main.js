// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import './scss/main.scss'
import ui from './components/index'
import http from './util/http'
import qs from 'qs'
import storage from './util/storage'
import './scss/index.scss'

Vue.use(MuseUI)
Vue.use(ui)

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$qs = qs
Vue.prototype.$storage = storage

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
