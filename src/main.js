import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify/lib'
import globalCss from './assets/global.css'
import Vuex from 'vuex'
import Geolocaion from 'vue-browser-geolocation'
import {store} from './store/store.js'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(Vuex)
Vue.use(Geolocaion)
Vue.use(VueGoogleMaps,{
  load:{
    key:''
  }
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  globalCss,
 
  
  render: h => h(App)
}).$mount('#app')

export default new Vuetify({
  icons:{
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg '
  }
})
