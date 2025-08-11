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
              <template v-slot:opposite> 2016 </template>
              Started master in Saigon
            </v-timeline-item>

            <v-timeline-item>
              <template v-slot:opposite>Finished master UIS </template>
              2018
            </v-timeline-item>

            <v-timeline-item>
              <template v-slot:opposite> 2021 </template>
              PHD Nord university
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <div class="edu">
          <h2 class="eduHeadline">- University Saigon</h2>
          <p>I studied econmoy in university of saigon.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet risus pellentesque, fermentum mi id, tempor dolor. Proin eu
            sem vitae purus pulvinar semper et et lectus. Praesent et
            sollicitudin nunc, viverra ultricies lorem. Nullam et nibh ac eros
            mattis finibus eu rutrum mauris. Etiam porttitor non lacus a
            ultrices. Nulla tincidunt maximus turpis. Etiam eu mi a ante viverra
            viverra et vitae massa. Vestibulum eu laoreet nibh. Morbi volutpat
            consequat rhoncus. Donec nunc risus, ornare vel aliquet vitae,
            eleifend vel massa. Mauris ullamcorper tincidunt ex sed blandit.
            Vivamus vel lacus id magna lacinia egestas nec ut ante. In volutpat
            turpis et semper tincidunt. Mauris hendrerit purus ipsum, non
            viverra ex accumsan ac.
          </p>
        </div>
      </v-row>
      <v-row class="mt-10">
        <div class="edu">
          <h2 class="eduHeadline">- University of Stavanger</h2>
          <p>I finished my masters in University of Stavanger.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet risus pellentesque, fermentum mi id, tempor dolor. Proin eu
            sem vitae purus pulvinar semper et et lectus. Praesent et
            sollicitudin nunc, viverra ultricies lorem. Nullam et nibh ac eros
            mattis finibus eu rutrum mauris. Etiam porttitor non lacus a
            ultrices. Nulla tincidunt maximus turpis. Etiam eu mi a ante viverra
            viverra et vitae massa. Vestibulum eu laoreet nibh. Morbi volutpat
            consequat rhoncus. Donec nunc risus, ornare vel aliquet vitae,
            eleifend vel massa. Mauris ullamcorper tincidunt ex sed blandit.
            Vivamus vel lacus id magna lacinia egestas nec ut ante. In volutpat
            turpis et semper tincidunt. Mauris hendrerit purus ipsum, non
            viverra ex accumsan ac.
          </p>
        </div>
      </v-row>
      <v-row class="mt-10">
        <div class="edu">
          <h2 class="eduHeadline">- Nord university</h2>
          <p>I took PHD in circular econmy at Nord university.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet risus pellentesque, fermentum mi id, tempor dolor. Proin eu
            sem vitae purus pulvinar semper et et lectus. Praesent et
            sollicitudin nunc, viverra ultricies lorem. Nullam et nibh ac eros
            mattis finibus eu rutrum mauris. Etiam porttitor non lacus a
            ultrices. Nulla tincidunt maximus turpis. Etiam eu mi a ante viverra
            viverra et vitae massa. Vestibulum eu laoreet nibh. Morbi volutpat
            consequat rhoncus. Donec nunc risus, ornare vel aliquet vitae,
            eleifend vel massa. Mauris ullamcorper tincidunt ex sed blandit.
            Vivamus vel lacus id magna lacinia egestas nec ut ante. In volutpat
            turpis et semper tincidunt. Mauris hendrerit purus ipsum, non
            viverra ex accumsan ac.
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
</style>
