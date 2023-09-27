import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');