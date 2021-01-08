import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import 'babel-polyfill'

import './uitl/index'

import router from './router/index'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
