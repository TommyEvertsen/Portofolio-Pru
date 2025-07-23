<template>
  <main class="" style="">
    <v-container class="px-10 mb-10">
      <v-row>
        <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12" class="mt-10">
          <h2 class="fade-in text-center">Hello welcome to my portofolio</h2>
          <h1 class="mt-2 fade-in-slow text-center" style="color: #d76c82">
            Phuc Huynh Evertsen (Pru)
          </h1>

          <h2 class="fade-in-snail text-center">Circular economy researcher</h2>

          <div class="scew-6">
            <v-img
              :src="pru"
              max-height="600"
              class="mt-10 fade-in-snails rounded scew-6"
            >
            </v-img>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-15 flex justify-center -space-x-14">
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="12"
          sm="12"
          xs="12"
          class="mix-blend-multiply"
        >
          <v-sheet>
            <h1 class="text-center" style="color: #594100">Buissness</h1>

            <p class="mt-10 px-8 py-8" style="background-color: #ffdbdb">
              I have a msters in buissness lorem ipsum lorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsum
            </p>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="12"
          sm="12"
          xs="12"
          class="mix-blend-multiply"
        >
          <h1 class="text-center" style="color: #594100">Circular economy</h1>
          <v-sheet class="mt-10">
            <p style="background-color: #594100" class="text-white">
              I have an PHD in circular economy ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsum trse
            </p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-btn
        class="button mt-10"
        variant="outlined"
        prepend-icon="mdi-web"
        color="#D76C82"
        style=""
        @click="$router.push({ name: 'contact' })"
      >
        Contact me</v-btn
      >
    </v-container>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

import pru from "@/assets/pru.jpg";

import { ref } from "vue";
const loaded = ref(false);

const router = useRouter();
</script>

<style>
/* Main colors 
#FFDBDB
#FFC6C6
#644A07
#594100
 */

.fade-in {
  animation: fadein 2s;
}

.fade-in-slow {
  opacity: 0;
  animation: fadeinslow 1s ease-in 1s forwards;
}

.fade-in-snail {
  opacity: 0;
  animation: fadeinsnail 1s ease-in 2s forwards;
}

.fade-in-snails {
  opacity: 0;
  animation: fadeinsnails 1s ease-in 3s forwards;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeinslow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeinsnail {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeinsnails {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.button:hover {
  background-color: #ff69b4;
  color: aliceblue !important;
}
</style>
