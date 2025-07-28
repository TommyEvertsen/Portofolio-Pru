/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Styles
import "unfonts.css";
import "@/styles/styles.css";

// Set default theme class on body
document.body.classList.add("theme-dark");

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
