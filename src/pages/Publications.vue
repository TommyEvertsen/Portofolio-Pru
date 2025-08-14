<template>
  <main>
    <v-container>
      <v-row class="mb-10 mt-5">
        <v-col xl="6" lg="6" md="6" sm="12">
          <div class="publicationText">
            <h1 class="publicationTextHeadline">- Publications -</h1>
            <p>
              Through my study and work i have published several articles on
              circular economy
            </p>
            <p>Stratcher fill out</p>
          </div>
        </v-col>
        <v-col xl="6" lg="6" md="6" sm="12"
          ><v-img src="@/assets/pru2.jpg" max-height="600px"> </v-img>
        </v-col>
      </v-row>

      <v-row class="flex justify-center">
        <v-timeline
          line-color="var(--main-text-secondary)"
          direction="vertical"
        >
          <v-timeline-item
            v-for="(publication, i) in publications"
            :key="i"
            :dot-color="publication.color"
            :icon="publication.icon"
            fill-dot
            elevation="16"
            max-width="600px"
            min-width="600px"
          >
            <v-card>
              <v-card-title :class="['text-h6', `bg-${publication.color}`]">
                {{ publication.type }}
              </v-card-title>
              <v-card-text class="bg-white text--primary text-lg">
                <p style="font-size: 1rem">
                  {{ publication.title }}
                </p>
              </v-card-text>
              <v-card-actions class="bg-white text--primary">
                <v-dialog max-width="500">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      :color="publication.color"
                      v-bind="activatorProps"
                      text="Abstrakt"
                      variant="outlined"
                    ></v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card class="abstractCard">
                      <v-card-title>
                        {{ publication.title }}
                      </v-card-title>
                      <v-card-text> {{ publication.abstract }} </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                          color="var(--main-button)"
                          variant="outlined"
                          text="Lukk"
                          @click="isActive.value = false"
                        ></v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-container>
  </main>
</template>

<script setup>
import { ref } from "vue";

const publications = ref([
  {
    title:
      "Toward a collaborative circular ecosystem within the built environment. Sustainable Production and Consumption",
    link: "https://doi.org/10.1016/j.spc.2024.10.019",
    abstract:
      "The built environment has drastically transitioned toward the circular economy (CE) to reduce carbon footprint, waste emission, and resource consumption. The circular ecosystem with close collaboration between diverse actors is critical to the sector's CE transition success. However, a holistic perspective on the circular ecosystem of the built environment remains lacking. This paper provides new insights into the complex and intricate dynamics of actor collaborations in the circular building ecosystems on the niche and regime levels. Moreover, this study shows the orchestrating roles of the municipalities and developers as the ‘keystone’ actors in the circular ecosystem. It also stresses the increasingly significant roles of new actors as the driving forces for the socio-technical paradigm shift toward CE in construction. The actor collaboration in the circular building ecosystem has been shifted to more collaborative and multi-dimensional (i.e., top-down, bottom-up, and horizontal). We also map the actor networks using CE principles and explain the importance of addressing incentives for stronger actor collaborations. Finally, this paper provides policy and managerial implications to reinforce collaboration dynamics and CE practices in the built environment.",
    citations:
      "Evertsen, P. H., & Knotten, V. (2024). Toward a collaborative circular ecosystem within the built environment. Sustainable Production and Consumption, 52, 95-110. (IF 10.9). https://doi.org/10.1016/j.spc.2024.10.019",
    show: false,
    type: "Article",
    publisher: "Elsevier",
    color: "red-lighten-2",
    icon: "mdi-star",
  },
  {
    title:
      "Resource configurations among digital academic spin-offs: finding the technology-market fit.",
    link: "https://doi.org/10.1108/IJEBR-10-2022-0937",
    abstract: "test",
    citations:
      "Citation: Evertsen, P. H., & Rasmussen, E. (2023). Resource configurations among digital academic spin-offs: finding the technology-market fit. International Journal of Entrepreneurial Behavior & Research. https://doi.org/10.1108/IJEBR-10-2022-0937 (IF6.2)",

    show: false,
    type: "Article",
    publisher: "Emerald insight",
    color: "indigo-lighten-2",
    icon: "mdi-layers-triple",
  },
  {
    title:
      "Commercializing circular economy innovations: A taxonomy of academic spin-offs', Technological Forecasting and Social Change",
    link: "https://doi.org/10.1016/j.techfore.2022.122102",
    abstract:
      "Innovation and the commercialization of new technologies are seen as important drivers of the transition to a more sustainable development. An actionable strategy to achieve such a transition is outlined in the European Union strategy on resource efficiency and the development of a circular economy (CE). Academic spin-offs (ASOs) are new ventures based on scientific research that play an important role in commercializing technological innovations. However, the potential role of ASOs in the CE transition has not been systematically examined. We build on a unique dataset covering the population of ASOs in Norway and coded newspaper articles to identify potential CE-related innovations being commercialized by these firms. Using multiple correspondence analysis and clustering analysis, the ASOs were empirically classified along two dimensions related to the types of innovation (i.e., product or process) and the types of CE principle (i.e., narrow, slow, or close the production-consumption loop). Five clusters of CE-related ASOs were identified (i.e., smart product-service providers, technical process enhancers, biochemical cycle extenders, renewables providers, and biosphere regenerators), each having specific roles in the CE transition. This taxonomy can serve as a basis for more systematic comparisons of CE-related innovations across different firms and contexts. We conclude by outlining an agenda for further research and implications for how policies can harness the potential of ASOs to foster CE innovations.",
    citations:
      "Citation: Huynh Evertsen, P., Rasmussen, E. and Nenadic, O. (2022) 'Commercializing circular economy innovations: A taxonomy of academic spin-offs', Technological Forecasting and Social Change, 185, pp. 122102. https://doi.org/10.1016/j.techfore.2022.122102 (IF 12.9, Nivå 2 Norway)",

    show: false,
    type: "Article",
    publisher: "Elsevier",
    color: "red-lighten-2",
    icon: "mdi-star",
  },
  {
    title:
      "Enabling circular business models in the fashion industry: the role of digital innovation",
    link: "https://doi.org/10.1108/IJPPM-12-2020-0683",
    abstract:
      "Purpose Digital innovation and circular business model innovation are two critical enablers of a circular economy. A wide variety of digital technologies such as blockchain, 3D printing, cyber-physical systems, or big data also diverges the applications of digital technologies in circular business models. Given heterogeneous attributes of circular business models and digital technologies, the selections of digital technologies and circular business models might be highly distinctive within and between sectorial contexts. This paper examines digital circular business models in the context of the fashion industry and its multiple actors. This industry as the world’s second polluting industry requires an urgent circular economy (CE) transition with less resource consumption, lower waste emissions and a more stable economy.Design/methodology/approachAn inductive, exploratory multiple-case study method is employed to investigate the ten cases of different sized fashion companies (i.e. large, small medium-sized firm (SME) and startup firms). The comparison across cases is conducted to understand fashion firms' distinct behaviours in adopting various digital circular economy strategiesFindingsThe paper presents three archetypes of digital-based circular business models in the fashion industry: the blockchain-based supply chain model, the service-based model and the pull demand-driven model. Besides incremental innovations, the radical business model and digital innovations as presented in the pull demand-driven model may be crucial to the fashion circular economy transition. The pull demand–driven model may shift the economy from scales to scopes, change the whole process of how the fashion items are forecasted, produced, and used, and reform consumer behaviours. The paths of adopting digital fashion circular business models are also different among large, SMEs and startup fashion firms.Practical implicationsThe study provides business managers with empirical insights on how circular business models (CBMs) should be chosen according to intrinsic business capacities, technological competences and CE strategies. The emerging trends of new fashion markets (e.g. rental, subscription) and consumers' sustainable awareness should be not be neglected. Moreover, besides adopting recycling and reuse strategies, large fashion incumbents consider collaborating with other technology suppliers and startup companies to incubate more radical innovations.Social implicationsAppropriate policies and regulations should be enacted to enable the digital CE transition. Market patterns and consumer acceptances are considered highly challenging to these digital fashion models. A balanced policy on both the demand and supply sides are suggested. The one-side policy may fail CBMs that entail an upside-down collaboration of both producers and consumers. Moreover, it is perhaps time to rethink how to reduce unnecessary new demand rather than repeatedly producing and recycling.Originality/valueThe pace of CE research is lagging far behind the accelerating environmental contamination by the fashion industry. The study aims to narrow the gap between theory and practice to harmonise fashion firms' orchestration and accelerate the transition of the fashion industry towards the CE. This study examines diverse types of digital technologies in different circular business models in a homogeneous context of the fashion industry with heterogeneous firm types.Keywords: Fashion industry, Sustainability, Circular economy, Digital innovation, Circular business model",
    citations:
      "Citation: Huynh, P.H. (2021). Enabling circular business models in the fashion industry: the role of digital innovation, International Journal of Productivity and Performance Management, Vol. 71 No. 3, pp. 870-895. https://doi.org/10.1108/IJPPM-12-2020-0683",
    show: false,
    type: "Article",
    publisher: "Emerald insight",
    color: "green-lighten-1",
    icon: "mdi-airballoon",
  },
  {
    title: "The circular economy impacts of digital academic spin-offs",
    link: "",
    abstract:
      "Abstract: Digital technologies are often seen as essential enablers for the transition to a more circulareconomy (CE) (Antikainen et al. 2018; Ranta et al. 2021). New digital technologies, such asthe Internet of Things (IoT), additive manufacturing, automation, and artificial intelligence,are transforming the sociotechnical system rapidly (Kopp et al. 2019; Li et al. 2020). The sociotechnicalsystem entails the co-evolution of technology and society in which organizationsadopt and adapt technologies into the organization and application contexts (Geels 2004; Li etal. 2020). The trajectory of new digital technologies impacts both the processes and outcomesof innovation and entrepreneurship (Nambisan 2017; Zaheer et al. 2019). Entrepreneurialfirms play a vital role in harnessing and exploiting the opportunities of digital technologiesto build a broad range of innovative products and services or upgrade production processes(Kraus et al. 2018; Nambisan 2017; Sahut et al. 2021).Digital entrepreneurship not only promotes growth but may also tackle social and environmentalissues (Bocken 2015; Giones and Brem 2017). In recent years, severe resourcedegradation and environmental pollution problems caused by the linear ‘take-make-discard’production model have required an alternative and more sustainable model – the CE (Korhonenet al. 2018). The core of the CE is to transform the economy from a linear ‘take-make-dispose’system to a circular ‘make-use-return’ system in which obsolete materials and goods are maintained,regenerated and restored to narrow, slow, and close the production–consumption loop(Lieder and Rashid 2016). Thus, natural resources are preserved, and waste and emissions areminimized.Among entrepreneurial firms, academic spin-offs (ASOs) are new ventures initiated in thecontext of a parent university or research institute to commercialize scientific knowledge andtechnology (Rasmussen 2011). ASOs are highly knowledge-intensive firms associated withsignificantly higher inventiveness and growth rates than other firms (Shane 2004). Thus,",

    citations:
      "Citation: Huynh, P. H. and Rasmussen, E. (2021) 'The circular economy impacts of digital academic spin-offs', in Siri Jakobsen, T.L., Francesco Quatraro, Einar Rasmussen, Marianne Steinmo (ed.) Research Handbook of Innovation for a Circular Economy. Cheltenham, UK: Edward Elgar Publishing.",
    type: "Article (Book chapter)",
    publisher: "Elsevier",
    color: "purple-lighten-2",
    icon: "mdi-book-variant",
  },
  {
    title:
      "PhD thesis: Evertsen, P. H. H. (2023). Digital Innovations for the Circular Economy (PhD thesis). Nord University",
    link: "",
    type: "PHD thesis",
    publisher: "Pru",
    color: "red-lighten-2",
    icon: "mdi-star",
  },
]);
</script>

<style>
.cardContainer {
  background-color: var(--main-context) !important;
  color: var(--main-text) !important;
}

.abstractCard {
  background-color: var(--main-context) !important;
  color: var(--main-text) !important;
}

.card-abstract {
  min-height: 120px;
  max-height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: large !important;
}

.publicationText {
  color: var(--main-text-secondary);
}

.publicationTextHeadline {
  font-family: "Carattere", cursive;
  font-size: 3rem;
  font-weight: 400;
}
</style>
