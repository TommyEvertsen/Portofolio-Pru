<template>
  <main>
    <v-container>
      <v-row class="mb-10 mt-5">
        <v-col>
          <div class="projectsText">
            <h1 class="projectsTextHeadline">- Projects -</h1>
            <p>Through my studies i have been part of several projects</p>
          </div>
        </v-col>
        <v-col xl="6" lg="6" md="6" sm="12"
          ><v-img :src="edu2" max-height="600px"> </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(pub, i) in projects"
          :key="i"
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="12"
        >
          <v-card
            class="mx-auto mb-6 cardContainer"
            max-width="400"
            elevation="16"
            color="var(--main-context)"
          >
            <v-card-title class="text-h5 cardTitle">
              {{ pub.type }}
            </v-card-title>
            <v-card-subtitle class="cardText">
              Published: {{ pub.publisher }}
            </v-card-subtitle>
            <v-card-text class="cardText">
              {{ pub.title }}
            </v-card-text>
            <v-card-actions> </v-card-actions>
            <v-expand-transition>
              <div v-show="pub.show">
                <v-divider></v-divider>
                <v-card-text>
                  {{ pub.abstract }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import edu2 from "@/assets/edu2.jpg";

const projects = [
  {
    type: "Project",
    title: "Circular economy",
    link: "bla bla",
    publisher: "bla bla",
    abstract: "bla bla",
  },
];
</script>

<style>
.projectsText {
  color: var(--main-text-secondary);
}

.projectsTextHeadline {
  font-family: "Carattere", cursive;
  font-size: 3rem;
  font-weight: 400;
}
.cardContainer {
  background-color: var(--main-context);
}
.cardTitle {
  color: var(--main-text-secondary);
}

.cardText {
  color: var(--main-text-secondary);
}
</style>
