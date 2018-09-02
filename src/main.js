import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrashAlt);
library.add(faEdit);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
