<template>
  <v-footer app height="48" class="app-footer">
    <div class="footer-links">
      <a
        v-for="item in items"
        :key="item.title"
        class="social-link"
        :href="item.href"
        rel="noopener noreferrer"
        target="_blank"
        :title="item.title"
      >
        <v-icon :icon="item.icon" size="22" />
      </a>
    </div>
    <div class="footer-text">
      &copy; {{ new Date().getFullYear() }} Phuc Huynh Evertsen
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import "@/styles/styles.css";
const items = [
  {
    title: "Google Scholar",
    icon: "mdi-google",
    href: "https://scholar.google.com/citations?user=49P1U8sAAAAJ&hl=vi&oi=ao",
  },
  {
    title: "ORCID",
    icon: "mdi-alpha-o-circle-outline",
    href: "https://orcid.org/0000-0003-3783-0342",
  },
  {
    title: "LinkedIn",
    icon: "mdi-linkedin",
    href: "https://www.linkedin.com/in/phucevertsen/",
  },
];
</script>

<style></style>
