import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import swal from 'sweetalert'
import Buefy from 'buefy'

import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.prototype.$swal = swal
Vue.prototype.$axios = axios.create({
  // baseURL: 'http://35.198.230.193:3006/'
  baseURL: 'http://localhost:3000/'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
