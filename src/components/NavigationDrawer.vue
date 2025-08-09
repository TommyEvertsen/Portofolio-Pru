<template>
  <v-app-bar elevation="0" color="var(--main-context)">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="show"
        color="var(--icons-bright)"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ $route.meta.title || "Home" }} </v-app-bar-title>

    <template v-slot:append>
      <v-btn
        class="theme-button"
        icon
        @click="toggleTheme"
        color="var(--theme)"
      >
        <v-icon>{{
          isLight ? "mdi-weather-night" : "mdi-white-balance-sunny"
        }}</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    width="220"
    v-if="drawer"
    v-model="drawer"
    color="var(--main)"
    density
  >
    <v-list>
      <v-list-item
        prepend-avatar="@/assets/pru.jpg"
        class="me"
        subtitle="Reasearcher"
        title="Phuc Evertsen"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list color="var(--navigation-links)" density="compact" nav>
      <v-list-item
        v-for="link in mainlinks"
        :key="link.title"
        :disabled="link.disabled"
        :prepend-icon="link.icon"
        :title="link.title"
        :value="link.value"
        @click="link.click"
      ></v-list-item>

      <v-divider></v-divider>

      <!-- <v-list-item
        v-for="link in subLinks"
        :key="link.title"
        :disabled="link.disabled"
        :prepend-icon="link.icon"
        :title="link.title"
        :value="link.value"
        @click="link.click"
        :active="$route.name === link.value"
      ></v-list-item>

      <v-divider></v-divider> -->

      <v-list-item
        v-for="link in otherLinks"
        :key="link.title"
        :disabled="link.disabled"
        :prepend-icon="link.icon"
        :title="link.title"
        :value="link.value"
        :href="link.href"
        :target="link.target"
        :rel="link.rel"
        :active="$route.name === link.value"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const router = useRouter();

const show = () => {
  drawer.value = !drawer.value;
};

// Theme toggle logic
const isLight = ref(true);

const toggleTheme = () => {
  isLight.value = !isLight.value;
  document.body.classList.toggle("theme-light", isLight.value);
  document.body.classList.toggle("theme-dark", !isLight.value);
};

if (typeof window !== "undefined") {
  document.body.classList.add("theme-light");
  document.body.classList.remove("theme-dark");
}

const navigateToAboutMe = () => {
  router.push({ name: "/AboutMe" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToHome = () => {
  router.push({ name: "/Home" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToEducation = () => {
  router.push({ name: "education" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToContact = () => {
  router.push({ name: "/Contact" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToPublications = () => {
  router.push({ name: "/Publications" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const mainlinks = [
  {
    title: "Home",
    icon: "mdi-home-outline",
    value: "home",
    click: navigateToHome,
  },
  {
    title: "About me",
    icon: "mdi-face-woman-shimmer-outline",
    value: "AboutMe",
    click: navigateToAboutMe,
  },
  {
    title: "Contact me",
    icon: "mdi-email-outline",
    value: "contact",
    click: navigateToContact,
  },
  {
    title: "Education",
    icon: "mdi-school-outline",
    value: "education",
    click: navigateToEducation,
  },
  {
    title: "Publications",
    icon: "mdi-text-box-outline",
    value: "Publications",
    click: navigateToPublications,
  },
  {
    title: "Projects",
    icon: "mdi-file-table-outline",
    value: "education",
    click: navigateToEducation,
  },
];

/* const subLinks = [
  {
    title: "Blog",
    icon: "mdi-head-dots-horizontal-outline",
    value: "blog",
    click: navigateToBlog,
  },
]; */

const otherLinks = [
  {
    title: "Google scholar",
    icon: "mdi-google",
    value: "googleScholar",
    href: "https://scholar.google.com/citations?user=49P1U8sAAAAJ&hl=vi&oi=ao",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "Orcid",
    icon: "mdi-alpha-o-circle-outline",
    value: "orcid",
    href: "https://orcid.org/0000-0003-3783-0342",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "LinkedIn",
    icon: "mdi-linkedin",
    value: "linkedIn",
    href: "https://www.linkedin.com/in/phucevertsen/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
</script>

<style></style>
