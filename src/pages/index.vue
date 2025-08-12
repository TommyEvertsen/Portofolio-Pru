<template>
  <main>
    <v-parallax
      :src="smAndDown ? parallaxImgMobile : parallaxImg"
      class="parallax"
    >
      <div class="parallax-overlay"></div>
      <v-container class="home-container fill-">
        <v-row class="flex justify-center">
          <v-col cols="12" xl="12" lg="12" md="6" sm="6" class="stratcher">
            <h2 class="home-name fade-in" style="margin-top: 23rem">
              Pru Huynh Evertsen
            </h2>
            <h2 class="home-subtitle fade-in-slow">
              Circular Economy Researcher
            </h2>
          </v-col>
        </v-row>

        <v-row class="flex justify-center">
          <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
            <v-sheet class="info-card business-card">
              <h1 class="card-title text-center">Business</h1>
              <p class="card-desc">
                I hold a Master's degree in Business. My research focus on
                sustainable business models, innovation, and the intersection of
                commerce and circular economy. I am passionate about driving
                change through responsible business practices.
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
                As a PhD researcher in Circular Economy, I explore strategies
                for resource efficiency, waste reduction, and sustainable
                development. My work aims to create impactful solutions for a
                more resilient and regenerative future.
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
    </v-parallax>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import pru from "@/assets/pru.jpg";
import { ref, onMounted } from "vue";
import map from "@/assets/map.jpg";
import sanfran from "@/assets/sanfran.jpg";
import grand from "@/assets/grand.jpg";
import ski from "@/assets/ski.jpg";
import stratcher from "@/assets/stratcher.jpg";
import pru2 from "@/assets/pru2.jpg";
const loaded = ref(false);
const router = useRouter();

const parallaxImg = stratcher;
const parallaxImgMobile = pru2;

import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
const { smAndDown } = useDisplay();
</script>

<style>
.home-name {
  font-size: 6rem;
  color: white;
  margin-bottom: 0.5rem;
  font-family: "Carattere", cursive;
  font-weight: 500;
  font-style: normal;
}

.home-subtitle {
  font-size: 4rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: "Carattere", cursive;
  font-weight: 400;
  font-style: normal;
}

.info-card {
  border-radius: 25px !important;
  padding: 2rem;
  border: 4px solid var(--main-secondary) !important;
  background-color: var(--main-context) !important;
}

.infoCard-btn {
  color: var(--main-button) !important;
}

.infoCard-btn:hover {
  background-color: var(--main-button-hover);
  color: var(--main-button-hover-text);
}

.card-title {
  color: var(--main-text);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  font-family: "Carattere", cursive;
  font-weight: 400;
  font-style: normal;
}

.card-desc {
  font-size: 1rem;
  color: var(--main-text);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}

.about-links > v-btn {
  color: #181818 !important;
}

.parallax-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.home-container {
  position: relative;
  z-index: 2;
}

@media (max-width: 600px) {
  .home-name {
    margin-top: 3rem !important;
    text-align: center;
    font-size: 3rem;
  }
  .home-subtitle {
    text-align: center;
    font-size: 1.7rem;
  }

  .stratcher {
    margin-bottom: 8rem;
  }

  .parallax-overlay {
    background: rgba(24, 24, 24, 0.3) !important;
  }
}
</style>
