import Vue from "vue";
import App from "./App.vue";

/* Global components */
import Icon from "./components/parts/global/Icon.vue";
Vue.component("Icon", Icon);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
