import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from 'vue-apexcharts'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import vSelectMenu from 'v-selectmenu';
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueGoogleHeatmap from 'vue-google-heatmap'

Vue.use(VueGoogleHeatmap, {
  apiKey: 'AIzaSyA6xit8Ojwb_mv63-xH2AT81WtbvfJVUlQ'
});
Vue.use(Chartkick.use(Chart))
Vue.use(vSelectMenu);
Vue.use(VueSidebarMenu)
Vue.use(VueApexCharts)


//Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

