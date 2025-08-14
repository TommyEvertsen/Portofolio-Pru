<template>
  <main>
    <v-container>
      <v-row class="mb-10 mt-5">
        <v-col xl="4" lg="4" md="4" sm="12">
          <div class="contact">
            <h1 class="contactHeadline">- Contact me -</h1>
            <p>
              I am a circular economy researcher with a passion for advancing
              sustainable solutions and exploring innovative research. Whether
              you want to discuss circular economy, collaborate on research
              projects, or just have a casual conversation, feel free to reach
              out!
            </p>
            <p class="mt-5">Email: Pru.huynh@gmail.com</p>
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
        <v-col></v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup></script>

<style>
.contact {
  color: var(--main-text-secondary);
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
  color: var(--main-text-secondary) !important;
}
</style>
