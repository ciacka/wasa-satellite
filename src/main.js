import Vue from "vue";
import App from "./App.vue";
import "./lib/gmaps";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
