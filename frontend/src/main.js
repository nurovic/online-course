import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

require('@/store/subscriber')

Vue.config.productionTip = false

store.dispatch('user/setUser', localStorage.getItem('token'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
