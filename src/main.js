import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify/lib'
import globalCss from './assets/global.css'
import Vuex from 'vuex'
import {store} from './store/store.js'
import scrollAnimation from './assets/scrollAnimation'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSimpleAlert from "vue-simple-alert";
import VueResponsiveImage from "vue-responsive-image";

Vue.directive('scrollAnimation',scrollAnimation)
Vue.use(VueSimpleAlert);
Vue.use(Vuex)
Vue.use(VueResponsiveImage)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC6N81D44KeKeXUti43nj8IBcun4vbyJ4o',
    libraries: 'places',
  }
});


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
