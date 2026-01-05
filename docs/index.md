---
layout: home 
title: "PlantaBeta"
titleTemplate: "PlantaBeta"

hero: 
  image:
    src: /Betaglot_Logo.png
    alt: "Logo"
  text: "Elements of Planting"
  tagline: Science, Sport, Design, Art 
  actions:
    - theme: brand
      text: Get Started
      link: /guide/WhatPlantaBeta/Overview

---


<div class="d-flex justify-center">
<v-img class="rounded-xl my-8" max-width="600px" max-height="600px" cover src="/Img-HomePage.png"></v-img>
</div>

<HomeDendrogram />

<div class="d-flex justify-center">
<v-hover v-slot="{ isHovering, props }" open-delay="200">
  <VSheet class="rounded-xl pa-4 text-center w-75 mt-12"
        border="md"
        :class="{ 'on-hover': isHovering }"
        :elevation="isHovering ? 24 : 1"
        v-bind="props">
    <div class="text-h1 my-4">🙌</div>
    <div class="text-h3 my-4">
        <span class="beta">PlantaBeta</span> is Free to Use!
    </div>
  </VSheet>
</v-hover>
</div>

<StartHere />

<div class="d-flex justify-center">
<v-hover v-slot="{ isHovering, props }"
        open-delay="200">
  <VSheet class="rounded-xl pa-4 text-center w-lg-50 mt-16"
          border="md"
          :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 24 : 1"
          v-bind="props">
      <div class="text-h5 my-4">
          Under Development
      </div>
      <div class="py-12 text-h1" >🛠️</div>
      <!-- Last Updated -->
      <div class="text-h5 my-4">
          Last Updated on
      </div>
        <div class="text-h6">January 5, 2026</div>

  <div class="pt-16">Contact:</div>
  <span class="beta">betaglot@betaglot.org</span>

  </VSheet>
</v-hover>
</div>

<script setup>
import HomeDendrogram from '/vue/Home-Dendrogram.vue'
import StartHere from '/vue/StartHere.vue'
import BetaTranscriptor from '/vue/BetaTranscriptor.vue'
</script>

<style>
.VPHero .image img {
  width: 800px;
  height: 800px;
  border-radius: 25px;
}

.VPHero .VPButton {
  background-image: linear-gradient(to right, #EFBF04, #2891e7, #49e82b, #ff3333, #d9670f, #c286bf);
  /* color: transparent; */
  /* background-clip: text;
  -webkit-background-clip: text; */
}

</style>
