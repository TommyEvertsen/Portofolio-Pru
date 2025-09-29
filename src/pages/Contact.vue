<template>
  <main>
    <v-container>
      <v-row class="mb-10 mt-5">
        <v-col cols="12" xl="4" lg="4" md="4" sm="12">
          <div class="contact">
            <h1 class="contactHeadline">- Contact me -</h1>
            <h3 class="">Let's talk!</h3>
            <p class="mt-4">
              I am happy to get in touch with you to exchange any new ideas,
              research collaboration, opportunities or just a casual
              conversation.
            </p>
            <p class="mt-5">
              Feel free to reach out to me via: Pru.huynh@gmail.com
            </p>
            <div class="contact-links mt-5">
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
          </div>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="6" sm="12">
          <div class="image-row">
            <div class="imageContainer enterScreenY"></div>
            <div class="imageContainer2 enterScreenY"></div>
          </div>

          <!--       <v-img :src="pru" max-height="600px"></v-img> -->
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import pru from "@/assets/pru.jpg";
import reuse from "@/assets/reuse2.jpg";
</script>

<style>
.contact {
  color: var(--main-text);
  font-family: "Libre Baskerville", serif;
}

.contactHeadline {
  font-family: "Carattere", cursive;
  font-size: 3rem;
  font-weight: 400;
}

.contact-links {
  display: flex;
  gap: 16px;
  justify-content: start;
  margin-top: 8px;
  color: var(--main-text) !important;
}

.image-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageContainer {
  height: 800px;
  width: 600px;
  background: url("@/assets/reuse2.jpg") center center / cover no-repeat;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

/* .imageContainer2 {
  height: 800px;
  width: 600px;
  background: url("@/assets/biblio.jpg") center center / cover no-repeat;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
} */

.enterScreenY {
  animation: enterScreenY 1s cubic-bezier(0.25, 0.8, 0.5, 1) both;
}

@keyframes enterScreenY {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .contactHeadline {
    text-align: center;
  }
}
</style>
