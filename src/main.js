import Vue from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import { faAmazon,faApple,faAudible} from '@fortawesome/free-brands-svg-icons'

library.add(fas);
library.add(far);
library.add(faAmazon,faApple,faAudible);
Vue.component('font-awesome-icon',FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
