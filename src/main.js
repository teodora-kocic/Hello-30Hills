import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";
import BaseCard from "./components/BaseCard.vue";
import BaseButton from "./components/BaseButton.vue";

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.use(createPinia());
app.use(router);

app.mount("#app");
