import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueParticles from '../node_modules/particles.js'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
