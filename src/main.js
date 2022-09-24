import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
global.jQuery = jQuery
global .$ = jQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
