<template>
  <main>
    <v-container>
      <v-row class="mb-10 mt-5">
        <v-col cols="12" xl="4" lg="4" md="4" sm="12">
          <div class="education">
            <h1 class="educationHeadline">- Education -</h1>
            <p>
              I started my study in Saigon Vietnam. I finished my master in
              buisnness at University of Stavanger. Later i took a PHD in
              circular economy in Nord University.
            </p>
          </div>
        </v-col>
        <v-col cols="12" xl="8" lg="8" md="8" sm="12">
          <v-timeline
            direction="horizontal"
            style="color: var(--main-text-secondary)"
            line-color="var(--main-text-secondary)"
            dot-color="var(--icons-dark)"
          >
            <v-timeline-item>
              <template v-slot:opposite> 2011 </template>
              Bachelor in Ho chi minh university
            </v-timeline-item>

            <v-timeline-item>
              <template v-slot:opposite> master in UIS </template>
              2018
            </v-timeline-item>

            <v-timeline-item>
              <template v-slot:opposite> 2023 </template>
              PHD Nord university
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <div class="edu">
          <h2 class="eduHeadline">- Ho chi minh city university</h2>
          <p>Bachelor in buisness administration.</p>
          <p>
            During my undergraduate studies in Saigon, Vietnam, I developed a
            strong foundation in business principles, marketing, and management.
            My time at Ho Chi Minh City University allowed me to gain practical
            experience and cultural insights that have shaped my approach to
            business and research
          </p>
        </div>
      </v-row>
      <v-row class="mt-10">
        <div class="edu">
          <h2 class="eduHeadline">- University of Stavanger</h2>
          <p>Masters in Economic and buisness administration.</p>
          <p>
            At the University of Stavanger in Norway, I specialized in
            innovation studies. My master’s program deepened my understanding of
            sustainable business models and the role of innovation in driving
            economic growth. This experience also introduced me to international
            perspectives and collaborative research.
          </p>
        </div>
      </v-row>
      <v-row class="mt-10">
        <div class="edu">
          <h2 class="eduHeadline">- Nord university</h2>
          <p>
            PHD in buisness administration (Innovation and Entrepreneurship).
          </p>
          <p>
            My doctoral research at Nord University focused on circular economy,
            innovation, and entrepreneurship. I explored strategies for resource
            efficiency and sustainable development, contributing to academic
            knowledge and practical solutions for a more resilient future. My
            PhD journey has been driven by curiosity, collaboration, and a
            passion for impactful research.
          </p>
        </div>
      </v-row>
    </v-container>
  </main>
</template>

<script setup></script>

<style>
.education {
  color: var(--main-text-secondary);
}

.educationHeadline {
  font-family: "Carattere", cursive;
  font-size: 3rem;
  font-weight: 400;
}

.edu {
  color: var(--main-text-secondary);
}

.eduHeadline {
  font-family: "Carattere", cursive;
  font-size: 2.6rem;
  font-weight: 400;
}

@media (max-width: 600px) {
  .education {
    text-align: center;
  }
  .eduHeadline {
    text-align: center;
  }
}
</style>
