import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.withCredentials = true; //it makes the cookie send from back-end

createApp(App).use(router).mount("#app");

