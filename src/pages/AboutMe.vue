<template>
  <main>
    <v-container>
      <v-row class="justify-center mb-8">
        <v-col cols="12" md="4" class="text-center">
          <v-avatar size="180" class="avatar-shadow mb-4">
            <v-img src="/src/assets/pru.jpg" cover></v-img>
          </v-avatar>
          <h2 class="about-name">Phuc Huynh Evertsen (Pru)</h2>
          <h3 class="about-title">Research Scientist @ SINTEF</h3>
          <div class="about-links mt-2">
            <v-btn
              icon
              href="https://scholar.google.com/citations?user=49P1U8sAAAAJ&hl=vi&oi=ao"
              target="_blank"
              color="var(--icons-dark)"
              title="Google Scholar"
            >
              <v-icon>mdi-google</v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://orcid.org/0000-0003-3783-0342"
              target="_blank"
              color="var(--icons-dark)"
              title="ORCID"
            >
              <v-icon>mdi-alpha-o-circle-outline</v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://www.linkedin.com/in/phucevertsen/"
              target="_blank"
              color="var(--icons-dark)"
              title="LinkedIn"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <v-sheet
            class="about-card pa-6"
            style="background-color: var(--main-context)"
          >
            <h3 class="section-title">Hey there! 👋</h3>
            <p>
              I'm Pru—a Norwegian-Vietnamese researcher, digital circular
              economy enthusiast, and proud mom. I spend my days at SINTEF,
              mixing business, tech, and sustainability, and my evenings chasing
              after my little one (born January 2025).
            </p>
            <p>
              My work is all about making the construction industry greener,
              smarter, and more collaborative. I love exploring new business
              models, digital innovations, and how people and tech can work
              together for a better future.
            </p>
            <p>
              <strong>What gets me excited?</strong> Digital innovation,
              circular economy, sustainability, and seeing ideas turn into real
              impact. I geek out over econometrics, regression analysis, and
              case studies—but I also enjoy a good story and a strong coffee.
            </p>
            <h3 class="section-title mt-6">A Few Fun Facts</h3>
            <ul>
              <li>Born: 26.11.1989 (Sagittarius, if you’re into that!)</li>
              <li>Languages: Vietnamese, Norwegian, English (and baby talk)</li>
              <li>Family: Married, one awesome kid</li>
              <li>Nationalities: Norwegian & Vietnamese</li>
            </ul>
            <h3 class="section-title mt-6">My Journey</h3>
            <ul>
              <li>
                PhD in Business Administration (Entrepreneurship & Innovation)
                from Nord University, Norway
              </li>
              <li>
                Master’s in Business Innovation from University of Stavanger
              </li>
              <li>Once upon a time: Account Manager in Saigon, Vietnam</li>
              <li>
                Visited Arizona State University & University of Bologna as a
                researcher (and tried all the local food!)
              </li>
            </ul>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xl="4" lg="4" md="12" sm="12">
          <div class="hobbies">
            <h2 class="hobbiesHeadline">My hobbies</h2>
            <p>
              My hobbies include traveling, painting eating food and eating
              food. Stratcher fill out
            </p>
          </div>
        </v-col>
        <v-col cols="12" xl="8" lg="8" md="12" sm="12">
          <div>
            <v-carousel
              height="600px"
              :class="{
                'crossfade-carousel': currentTransition === 'crossfade',
              }"
              hide-delimiters
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                :reverse-transition="currentTransition"
                :transition="currentTransition"
                cover
              />
            </v-carousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { shallowRef } from "vue";
import grand from "@/assets/grand.jpg";
import sanfran from "@/assets/sanfran.jpg";
import ski from "@/assets/ski.jpg";
import stratcher from "@/assets/stratcher.jpg";
import map from "@/assets/map.jpg";

const mode = shallowRef("images");
const currentTransition = shallowRef("crossfade");

const items = [
  { src: grand },
  { src: sanfran },
  { src: ski },
  { src: stratcher },
  { src: map },
];
</script>

<style>
.hobbies {
  color: var(--main-text-secondary);
}

.hobbiesHeadline {
  font-family: "Carattere", cursive;
  font-weight: 400;
  font-size: 3rem;
}

.crossfade-carousel > .v-window__container {
  isolation: isolate;
  > .v-window-item {
    mix-blend-mode: plus-lighter;
  }
}

.crossfade-enter-active,
.crossfade-leave-active {
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.crossfade-leave-from,
.crossfade-leave-to {
  position: absolute !important;
  top: 0;
  width: 100%;
}

.crossfade-enter-from,
.crossfade-leave-to {
  opacity: 0;
}

/* About me page */

.avatar-shadow {
  box-shadow: 0 4px 24px rgba(201, 161, 59, 0.25);
}

.about-name {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-headline);
  margin-bottom: 0.2rem;
}

.about-title {
  color: var(--main-secondary);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.about-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 8px;
  color: var(--main-text-secondary) !important;
}

.about-card {
  background: var(--main-context) !important;
  border-radius: 18px !important;
  border: 4px solid var(--main-secondary) !important;
  color: var(--main-text) !important;
  box-shadow: 0 8px 40px rgba(201, 161, 59, 0.12);
}

.section-title {
  color: var(--main-text-secondary);
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
}

.about-card ul {
  margin-bottom: 1.2rem;
  padding-left: 1.2rem;
}

.about-card li {
  margin-bottom: 0.5rem;
  color: var(--main-text);
}

.about-card a {
  color: var(--main-text) !important;
  text-decoration: underline;
}
</style>
