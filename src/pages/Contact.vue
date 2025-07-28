<template>
  <main class="contact-main">
    <v-container class="fill-height d-flex align-center justify-center">
      <v-row class="justify-center">
        <v-col cols="12" md="8" lg="6">
          <v-sheet class="contact-card pa-8" elevation="3" rounded>
            <h2 class="contact-title mb-4">Let's Connect!</h2>
            <p class="contact-desc mb-6">
              Whether you want to talk research, circular economy, digital
              innovation, or just say hi—I'd love to hear from you! Fill out the
              form below or reach out via social links.
            </p>
            <v-form>
              <v-text-field
                label="Your Name"
                variant="outlined"
                required
                class="mb-4"
              />
              <v-text-field
                label="Your Email"
                variant="outlined"
                required
                type="email"
                class="mb-4"
              />
              <v-textarea
                label="Message"
                variant="outlined"
                color="main-secondary"
                rows="5"
                required
                class="mb-6"
              />
              <v-btn
                class="contact-btn"
                size="large"
                variant="outlined"
                rounded
                block
              >
                Send Message
              </v-btn>
            </v-form>
            <div class="contact-social mt-8 text-center">
              <span class="contact-social-label">Or find me here:</span>
              <div class="contact-links mt-2">
                <a
                  href="https://scholar.google.com/citations?user=49P1U8sAAAAJ&hl=vi&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-link"
                  title="Google Scholar"
                >
                  <v-icon size="28" color="main-secondary">mdi-google</v-icon>
                </a>
                <a
                  href="https://orcid.org/0000-0003-3783-0342"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-link"
                  title="ORCID"
                >
                  <v-icon size="28" color="main-secondary"
                    >mdi-alpha-o-circle-outline</v-icon
                  >
                </a>
                <a
                  href="https://www.linkedin.com/in/phucevertsen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-link"
                  title="LinkedIn"
                >
                  <v-icon size="28" color="main-secondary">mdi-linkedin</v-icon>
                </a>
              </div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
// No logic needed for static contact page
</script>

<style scoped></style>
