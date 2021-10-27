import { createApp } from 'vue'
import {createRouter, createWebHashHistory } from "vue-router";
import { createStore } from "vuex";
import routes from "./router/index";
import storeConfig from "./store/index";
import App from "./App";
const routerKey = Symbol();
const storeKey = Symbol();
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const store = createStore(storeConfig);
const app = createApp(App);
app.use(router, routerKey);
app.use(store, storeKey);
app.mount('#app')
