<template>
  <main style="overflow: visible">
    <v-container style="overflow: visible">
      <v-row class="mb-8 mt-5 flex justify-center">
        <v-col cols="12" xl="6" lg="6" md="6" sm="12" >
          <div class="">
            <h2 class="about-name enterScreenY">Phuc Huynh Evertsen (Pru)</h2>
            <h3 class="about-title enterScreenY">
              Research Scientist @ SINTEF
            </h3>
          </div>

          <div class="about-links mt-2 enterScreenY">
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

          <!--  <canvas
            id="about-bar-chart"
            width="320"
            height="200"
            style="margin-top: 2rem"
          ></canvas> -->

          <div class="infoText ">
            <h3 class="section-title">Hey there! 👋</h3>
            <p class="paragraphText">
              Im Pru—a Vietnamese-born Norwegian researcher, digital circular
              economy enthusiast, and a proud mom. I spend my days working at
              SINTEF, exchanging research ideas with my colleagues from Norway
              and Europe, applying for new research grants and doing my
              research.
            </p>
            <p class="paragraphText">
              My work is all about making the sectors be more circular, smarter,
              and more collaborative. I love exploring new business models,
              digital innovations, and technologies that unlock opportunities
              for a circular economy.
            </p>
          </div>
          <div class="infoText">
            <h3 class="section-title">What gets me exited?</h3>
            <p class="paragraphText">
              Digital innovation, circular economy, sustainability, and seeing
              ideas turn into real impact. I do quantitative and qualitative
              methods, including econometrics, regression analysis, and case
              studies. I also enjoy a good story and a café latte.
            </p>
          </div>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12" >
          <v-img
            src="/src/assets/pru2.jpg"
            height="600"
            class="aboutImage enterScreenX"
          ></v-img>
        </v-col>
      </v-row>

      <v-row class="mt-16" style="overflow: visible">
        <v-col style="overflow: visible">
          <div
            class="about-card-wrapper"
            style="background-color: var(--main-context)"
          >
            <div class="about-card pa-6">
              <h3 class="section-title mt-6">My Journey</h3>
              <ul>
                <li>Researcher (Forsker II) at SINTEF Community.</li>
                <li>
                  PhD in Business (Entrepreneurship & Innovation) at Nord
                  University, Norway
                </li>
                <li>
                  Master of Science in Business Administration (Innovation
                  Studies) at the University of Stavanger, Norway
                </li>
                <li>
                  Once upon a time: Account Manager &amp; bachelor’s degree in
                  marketing in Saigon, Vietnam.
                </li>
                <li>A former member of the AIESEC organisation.</li>
                <li>
                  Visiting scholar at Arizona State University & University of
                  Bologna (and explored Grand Canyon, Arizona deserts, the Bay
                  area and Mediterranean foods)
                </li>
              </ul>
            </div>
          </div>
        </v-col>
        <v-col>
          <div
            class="about-card-wrapper"
            style="background-color: var(--main-context)"
          >
            <div class="about-card pa-6">
              <h3 class="section-title mt-6">A Few Fun Facts</h3>
              <ul>
                <li>Born: 26.11.1989 (Sagittarius, if you’re into that!)</li>
                <li>
                  My hometown: Ho Chi Minh City (Saigon), Vietnam (10 million
                  population, a lot of skyscrapers and motorbikes will overwhelm
                  you!)
                </li>
                <li>
                  Languages: Vietnamese, Norwegian, English (and baby talk)
                </li>
                <li>Family: Happily married, one baby.</li>
                <li>Nationalities: Norwegian & Vietnamese</li>
                <li>
                  Love nature, hiking and everything related to outdoor life. I
                  have slept in tent all over Norway and Vietnam
                </li>
                <li>I have many nicknames, Pru, Stratcher, Billier etc.</li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12" xl="6" lg="6" md="12" sm="12">
          <div class="hobbies">
            <h2 class="hobbiesHeadline text-center">- My hobbies -</h2>
            <p>
              I love travelling the world and experiencing beautiful and unique
              cultures. I love to stay in homestay and experience the place as a
              local and try new local foods. I am a foodie (oh seafood!) who
              also loves to make food for my family, my friends and myself. I
              like outdoor activities like camping, roadtrips, cabin trips, and
              try skiing (I am still quite a noob in skiing but my braking skill
              seems to get better ). I also like to paint and decorate my house
              and garden!
            </p>
            <div class="hobbyChipsWrapper mt-5">
              <p class="hobbyChips">
                <v-chip v-for="hobby in hobbies"
                :prepend-icon="hobby.icon"
                class="ma-2"
                :color="hobby.color"
                :text="hobby.title"
               
                </v-chip>
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12">
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
import Chart from "chart.js/auto";
import { onMounted } from "vue";
import { color } from "chart.js/helpers";

const items = [
  { src: grand },
  { src: sanfran },
  { src: ski },
  { src: stratcher },
  { src: map },
];

const hobbies = [
  {
    title: "Traveling",
    icon: "mdi-airplane",
    color: "#82B1FF"
  },
  {
    title: "Food",
    icon: "mdi-noodles",
    color: "#FFC107"
  },
  {
    title: "Painting",
    icon: "mdi-palette",
    color: "#00BCD4"
  },
  {
    title: "Hiking",
    icon: "mdi-hiking",
    color: "#009688"
  },
  {
    title: "Nature",
    icon: "mdi-forest",
    color: "#4CAF50"
  },
  {
    title: "Coffee",
    icon: "mdi-coffee",
    color: "#A1887F"
  },
];

const labels = ["2021", "2022", "2023", "2024", "2025"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Citations",
      data: [1, 23, 53, 92, 76],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      color: ["rgba(201, 203, 207, 0.2)"],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

onMounted(() => {
  const ctx = document.getElementById("about-bar-chart");
  if (ctx) {
    new Chart(ctx, config);
  }
});
</script>

<style>
.hobbies {
  color: var(--main-text);
  font-family: "Libre Baskerville", serif;
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

.about-name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-headline);
  margin-bottom: 0.2rem;
  font-family: "Libre Baskerville", serif;
}

.about-title {
  color: var(--main-secondary);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: "Libre Baskerville", serif;
}

.about-links {
  display: flex;
  gap: 12px;
  justify-content: baseline;
  margin-top: 8px;
  color: var(--main-text-secondary) !important;
}

.about-card-wrapper {
  position: relative;
  overflow: visible;
  border-radius: 18px;
}

.about-card {
  position: relative;
  background: var(--main-context);
  color: var(--main-text-secondary);
  min-height: auto;
  border-radius: 18px;
  z-index: 1;
  min-height: 450px;
}

.about-card-wrapper::after,
.about-card-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    45deg,
    /*  #ff595e,
    #ffca3a,
    #8ac926,
    #1982c4,
    #6a4c93,
    #ff6700 */
      #ff6700,
    #1982c4,
    #f8c794,
    #e5e5cb,
    #ff6700
  );
  background-size: 400%;
  z-index: 0;
  animation: glow 20s linear infinite;
  filter: blur(5px);
  border-radius: inherit;
}

.section-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  font-family: "Libre Baskerville", serif;
}

.about-card ul {
  margin-bottom: 1.2rem;
  padding-left: 1.2rem;
}

.about-card li {
  margin-bottom: 0.5rem;
}

.about-card a {
  text-decoration: underline;
}

.infoText {
  font-family: "Libre Baskerville", serif;
  color: var(--main-text);
}

.typewriter {
  overflow: hidden;
  border-right: 0.15em solid #fff;
  white-space: nowrap;
  animation: typing 3s steps(40, end) forwards,
    blink-caret 0.75s step-end infinite;
}

.enterScreenY {
  animation: enterScreenY 1s cubic-bezier(0.25, 0.8, 0.5, 1) both;
}

.enterScreenX {
  animation: enterScreenX 1s cubic-bezier(0.25, 0.8, 0.5, 1) both;
}

.aboutImage {
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes enterScreenY {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes enterScreenX {
  from {
    transform: translateX(-50px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes enterScreenXoppsite {
  from {
    transform: translateX(50);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes glow {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
