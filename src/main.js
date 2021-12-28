import 'babel-polyfill';
import '@babel/polyfill';
import "core-js/stable";
import Vue from 'vue'
import App from './App.vue'
import * as Tabs from 'vue-slim-tabs'
import VueRouter from 'vue-router'
import { router } from './routes/routes.js';
import {store} from './store/index.js'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ToggleButton from 'vue-js-toggle-button'
import Pagination from 'vue-pagination-2';
import VModal from 'vue-js-modal'
var VueScrollTo = require('vue-scrollto');
import Affix from 'vue-affix';



Vue.use(Affix);
Vue.use(VModal,{ dialog: true });
Vue.use(ToggleButton);
Vue.use(Tabs);
library.add(fas);
library.add(far);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('pagination', Pagination);
Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
