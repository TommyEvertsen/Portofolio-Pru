/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: {
          main: "#181818",
          mainSecondary: "#c9a13b",
          mainContext: "#303030",
          mainButton: "#c9a13b",
          mainButtonHover: "#c9a13b",
          mainButtonHoverText: "#303030",
          textBlack: "#181818",
          textHeadline: "#f5f5f5",
          navigationLinks: "#ffd700",
          iconsBright: "#ffd700",
          iconsDark: "#c9a13b",
        },
      },
      light: {
        colors: {
          main: "#f5f5f5",
          mainSecondary: "#e91e63",
          mainContext: "#fff",
          mainButton: "#e91e63",
          mainButtonHover: "#e91e63",
          mainButtonHoverText: "#fff",
          textBlack: "#181818",
          textHeadline: "#181818",
          navigationLinks: "#181818",
          iconsBright: "#e91e63",
          iconsDark: "#e91e63",
        },
      },
    },
  },
});
