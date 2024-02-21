import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

axios.defaults.withCredentials = true; //it makes the cookie send from back-end


createApp(App).use(router).use(createVuetify()).mount("#app");
