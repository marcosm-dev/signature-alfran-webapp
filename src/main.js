import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSignature from "vue-signature-pad"

import Default from './layouts/Default.vue'
import NoNavbar from './layouts/NoNavbar'

Vue.config.productionTip = false
Vue.use(VueSignature)

Vue.component('default-layout', Default)
Vue.component('no-navbar-layout', NoNavbar)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
