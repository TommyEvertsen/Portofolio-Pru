<route-meta>
{
  "title": "About Me"
}
</route-meta>

<template>
  <main class="about-main">
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
              color="var(--main-pink)"
              title="Google Scholar"
            >
              <v-icon>mdi-google</v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://orcid.org/0000-0003-3783-0342"
              target="_blank"
              color="var(--main-pink)"
              title="ORCID"
            >
              <v-icon>mdi-alpha-o-circle-outline</v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://www.linkedin.com/in/phucevertsen/"
              target="_blank"
              color="var(--main-pink)"
              title="LinkedIn"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <v-sheet class="about-card pa-6">
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
            <!--  <h3 class="section-title mt-6">What I Do at SINTEF</h3>
            <ul>
              <li>
                Lead and join cool research projects funded by the EU &
                Norwegian Research Council
              </li>
              <li>Write grant applications (sometimes with too much coffee)</li>
              <li>Help teams grow and collaborate</li>
            </ul> -->
            <!-- <h3 class="section-title mt-6">Teaching & Sharing</h3>
            <ul>
              <li>
                Course manager & lecturer for “Social and Sustainable
                Entrepreneurship”
              </li>
              <li>
                Guest lecturer, thesis examiner, and supervisor—helping students
                find their spark
              </li>
              <li>
                Teaching assistant in microeconomics & econometrics (yes,
                numbers can be fun!)
              </li>
            </ul>
            <h3 class="section-title mt-6">Projects & Passions</h3>
            <ul>
              <li>
                SUM4Re, SirkBygg, FmeZEN, ARV, Smart Building Hub—if it’s about
                circular buildings, I’m in!
              </li>
              <li>
                Always looking for new ways to make construction more
                sustainable and digital
              </li>
            </ul> -->
            <!--  <h3 class="section-title mt-6">Publications & Research</h3>
            <ul>
              <li>
                <a
                  href="https://doi.org/10.1016/j.spc.2024.10.019"
                  target="_blank"
                >
                  Toward a collaborative circular ecosystem within the built
                  environment
                </a>
                (IF 10.9)
              </li>
              <li>
                <a
                  href="https://doi.org/10.1108/IJEBR-10-2022-0937"
                  target="_blank"
                >
                  Resource configurations among digital academic spin-offs
                </a>
                (IF 6.2)
              </li>
              <li>
                <a
                  href="https://doi.org/10.1016/j.techfore.2022.122102"
                  target="_blank"
                >
                  Commercializing circular economy innovations: A taxonomy of
                  academic spin-offs
                </a>
                (IF 12.9)
              </li>
              <li>
                <a
                  href="https://doi.org/10.1108/IJPPM-12-2020-0683"
                  target="_blank"
                >
                  Enabling circular business models in the fashion industry: the
                  role of digital innovation
                </a>
              </li>
            </ul> -->
            <h3 class="section-title mt-6">Skills & Superpowers</h3>
            <ul>
              <li>Programming: R, Stata, fsQCA, Endnote & Zotero</li>
              <li>
                Quantitative & qualitative analysis, academic writing, project
                management
              </li>
              <li>Communication, teamwork, and a dash of creative thinking</li>
            </ul>
            <h3 class="section-title mt-6">Let’s Connect!</h3>
            <ul>
              <li>
                <a
                  href="https://www.nord.no/aktuelt/presenterte-alternativer-til-fast-fashion-i-sin-disputas"
                  target="_blank"
                >
                  Fast Fashion Alternatives (2023)
                </a>
              </li>
              <li>
                <a
                  href="http://www.esbri.se/artikel_visa.asp?id=2589"
                  target="_blank"
                >
                  Radical Innovations for the Circular Economy (2023)
                </a>
              </li>
              <li>
                Always happy to chat about research, innovation, or just
                life—reach out on
                <a
                  href="https://www.linkedin.com/in/phucevertsen/"
                  target="_blank"
                  >LinkedIn</a
                >!
              </li>
            </ul>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup></script>

<style scoped>
.about-main {
  background: var(--main-black);
  min-height: 100vh;
  padding-top: 32px;
}

.avatar-shadow {
  box-shadow: 0 4px 24px rgba(201, 161, 59, 0.25);
  border: 4px solid var(--main-gold);
}

.about-name {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--main-white);
  margin-bottom: 0.2rem;
}

.pink {
  color: var(--main-pink);
  font-weight: 700;
}

.about-title {
  color: var(--main-gold);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.about-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 8px;
  color: var(--main-pink);
}

.about-card {
  background: var(--main-white);
  border-radius: 18px;
  border: 4px solid var(--main-gold);
  color: var(--main-black);
  box-shadow: 0 8px 40px rgba(201, 161, 59, 0.12);
}

.section-title {
  color: var(--main-gold);
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
}

.about-card a {
  color: var(--main-black);
  text-decoration: underline;
}
</style>
