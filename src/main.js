import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "./styles/typography.css"
import "@/ClickOutside";

new Vue({
  render: h => h(App),
}).$mount('#app')
