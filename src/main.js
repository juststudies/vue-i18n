import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import messages from './languages/messages'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pt_br',
  messages
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
