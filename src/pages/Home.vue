<template>
  <main class="home-main">
    <v-container class="home-container px-10">
      <v-row>
        <v-col cols="12" class="mt-10">
          <div class="flex justify-center text-center">
            <v-avatar size="250" class="mt-10 avatar-shadow fade-in">
              <v-img :src="pru" cover></v-img>
            </v-avatar>
          </div>
          <!-- <h2 class="home-title fade-in text-center">
            Welcome to my Portfolio
          </h2> -->
          <h2 class="home-name fade-in-slow text-center mt-5">
            Phuc Huynh Evertsen (Pru)
          </h2>
          <h2 class="home-subtitle fade-in-snail text-center">
            Circular Economy Researcher
          </h2>
        </v-col>
      </v-row>

      <v-row class="flex justify-center">
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
          <v-sheet class="info-card business-card">
            <h1 class="card-title text-center">Business</h1>
            <p class="card-desc">
              I hold a Master's degree in Business. My research focuses on
              sustainable business models, innovation, and the intersection of
              commerce and circular economy. I am passionate about driving
              positive change through responsible business practices.
            </p>
            <v-btn
              class="infoCard-btn"
              variant="outlined"
              prepend-icon="mdi-web"
              @click="$router.push({ name: 'contact' })"
            >
              Information
            </v-btn>
          </v-sheet>
        </v-col>

        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
          <v-sheet class="info-card research-card">
            <h1 class="card-title text-center">Circular Economy</h1>
            <p class="card-desc">
              As a PhD researcher in Circular Economy, I explore strategies for
              resource efficiency, waste reduction, and sustainable development.
              My work aims to create impactful solutions for a more resilient
              and regenerative future.
            </p>
            <v-btn
              class="infoCard-btn"
              variant="outlined"
              prepend-icon="mdi-web"
              @click="$router.push({ name: 'contact' })"
            >
              Publications
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import pru from "@/assets/pru.jpg";
import { ref } from "vue";
import "@/styles/styles.css";
const loaded = ref(false);
const router = useRouter();
</script>

<style></style>
