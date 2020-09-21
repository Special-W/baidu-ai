import Vue from 'vue'
import App from './App.vue'
import ScratchCard from 'vue-scratch-card0'
import VueTouch from 'vue-touch'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

var option = {
  fullscreenEl: false,
  bgOpacity: 1,
  maxSpreadZoom: 1,
  arrowKeys: false
}
Vue.config.productionTip = false
Vue.use(ScratchCard)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(preview,option)
new Vue({
  render: h => h(App),
}).$mount('#app')


