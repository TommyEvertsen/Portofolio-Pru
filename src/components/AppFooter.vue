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

<style scoped>
.app-footer {
  background: var(--main);
  color: var(--main-secondary);
  border-top: 1px solid var(--main-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  font-size: 1rem;
}

.footer-links {
  display: flex;
  gap: 18px;
}

.social-link :deep(.v-icon) {
  color: var(--icons-bright);
  transition: color 0.2s;
}

.social-link :deep(.v-icon):hover {
  color: var(--main-secondary);
}

.footer-text {
  color: var(--main-secondary);
  font-size: 0.95rem;
}
</style>
