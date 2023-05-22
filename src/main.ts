import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import routes from "./routes";
import "./main.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: routes.HOME, component: Home },
    { path: routes.PROJECTS, component: Projects },
  ],
});

createApp(App).use(router).mount("#app");
