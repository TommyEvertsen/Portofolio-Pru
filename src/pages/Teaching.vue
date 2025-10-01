<template>
  <main>
    <v-container>
      <v-row class="mt-5">
        <v-col cols="12" xl="6" lg="6" md="6" sm="12">
          <div class="teachings">
            <h1 class="teachingsHeadline">- Teaching -</h1>
            <em
              >“I see teaching as empowering students to think critically, act
              responsibly, and create solutions that make a real impact in
              business and society.”</em
            >
          </div>
          <div class="teachings mx-2 mt-4">
            <ol>
              <li><strong>My Teaching Philosophy</strong></li>
              <p>
                I believe students learn best when they are active participants
                in the classroom. My teaching is student-centred,
                research-based, and practice-oriented. I create an inclusive
                learning environment where students feel confident to share
                ideas, challenge assumptions, and think critically about the
                role of business in society. I connect theory to practice
                through real cases and hands-on projects, encouraging students
                to explore how business and entrepreneurship can address global
                sustainability challenges.
              </p>
              <li class="mt-4"><strong>My Teaching Approach</strong></li>
              <ul>
                <li>
                  Active and problem-based learning – students work with real
                  cases and group projects.
                </li>
                <li>
                  Experiential learning – students design and test their own
                  entrepreneurial ideas.
                </li>
                <li>
                  Collaborative learning – teamwork and peer feedback are
                  central to the process.
                </li>
                <li>
                  Critical and sustainable thinking – students reflect on the
                  social and environmental impact of their ideas.
                </li>
                <li>
                  Blended learning – I integrate digital tools (Canvas, Teams,
                  Zoom) for flexibility and engagement.
                </li>
              </ul>
              <li class="mt-4"><strong>Teaching Experience</strong></li>
              <p>
                I have taught at both bachelor’s and master’s levels in topics
                such as innovation, circular economy, and research methods. My
                key teaching experience is as course manager, main lecturer, and
                examiner for:
              </p>
              <strong
                >Social and Sustainable Entrepreneurship (Nord University
                Business School, 2022–2023)</strong
              >
              <ul>
                <li>Designed and delivered the course from start to finish.</li>
                <li>
                  Guided students in developing social startup ideas addressing
                  UN Sustainable Development Goals.
                </li>
                <li>
                  Combined lectures, workshops, guest speakers, and incubation
                  support.
                </li>
                <li>
                  Achieved excellent student evaluations (4.5/5 on
                  Studiebarometeret).
                </li>
                <li>
                  Several student projects continued into the university’s
                  startup incubation centre.
                </li>
              </ul>
              <strong>Other courses I have contributed to include:</strong>
              <ul>
                <li>Circular Economy Business Models (Nord University)</li>
                <li>International Entrepreneurship (Nord University)</li>
                <li>Innovation Management (UiS Business School)</li>
                <li>
                  Quantitative and Qualitative Research Methods (Nord
                  University)
                </li>
              </ul>
              <li class="mt-4"><strong>Supervision and Mentoring</strong></li>
              <ul>
                <li>
                  Supervised master’s and bachelor’s theses in entrepreneurship
                  and innovation.
                </li>
                <li>
                  Served as external examiner for UiS Business School master’s
                  theses (2022–2025).
                </li>
              </ul>
            </ol>
          </div>
        </v-col>
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          sm="12"
          class="flex justify-center"
        >
          <div class="chickenImageContainer"></div>
          <v-img :src="chicken" class="chickenImage"></v-img>
        </v-col>
      </v-row>

      <v-row class="flex justify-center teachingRow mt-16">
        <v-col cols="12" xl="8" lg="8">
          <v-img :src="teaching" class="teachingImage"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import teaching from "@/assets/teaching.jpg";
import chicken from "@/assets/chicken.jpg";
</script>
<style>
.teachings {
  color: var(--main-text);
  font-family: "Libre Baskerville", serif;
}

.teachingsHeadline {
  font-family: "Carattere", cursive;
  font-size: 3rem;
  font-weight: 400;
}

.teachingImage {
  margin-top: 3rem;
  z-index: 1;
}

.teachingRow {
  background-color: #f0dbdb;
  position: relative;
  z-index: 1;
  margin-top: 3rem;
}

.teachingRow::after,
.teachingRow::before {
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
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

.chickenImage img {
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

/* .chickenImageContainer {
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  height: 900px;
  width: 600px;
  background: url("@/assets/chicken.jpg") center center / cover no-repeat;
} */
</style>
