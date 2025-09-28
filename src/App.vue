<template>
  <v-app>
    <NavigationDrawer />
    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import "@/styles/styles.css";
</script>
