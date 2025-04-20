<template>
    <!-- <v-sheet class="betumChip px-1"
            tag="span"
            
            >
      [<span class="labon">{{ l }}</span><span v-if="l && (s || e || v || m || a)">,</span>
      <span class="somon">{{ s }}</span><span v-if="s && (e || v || m || a)">,</span>
      <span class="ekon">{{ e }}</span><span v-if="e && (v || m || a)">,</span>
      <span class="vion">{{ v }}</span><span v-if="v && (m || a)">,</span>
      <span class="moton">{{ m }}</span><span v-if="m && a">,</span>
      <span class="animon">{{ a }}</span>]
    </v-sheet> -->
    <v-card
        class="rounded-xl"  
    >
        <v-card-item>
          <v-card-title class="text-h2">      
            <span class="plantabeta">[</span>
            <span v-if="l">⭐</span><span v-if="l && (s || e || v || m || a)" class="plantabeta">,</span>
            <span v-if="s">🔷</span><span v-if="s && (e || v || m || a)" class="plantabeta">,</span>
            <span v-if="e">🟩</span><span v-if="e && (v || m || a)" class="plantabeta">,</span>
            <span v-if="v">🔻</span><span v-if="v && (m || a)" class="plantabeta">,</span>
            <span v-if="m">🟠</span><span v-if="m && a" class="plantabeta">,</span>
            <span v-if="a">💜</span>
            <span class="plantabeta">]</span>
        </v-card-title>
          <v-card-subtitle >

          </v-card-subtitle>
        </v-card-item>

        <v-card-text class="text-h3">
            <span class="plantabeta">[</span>
            <v-row align-content="center" v-if="l"><span class="labon pt-0">{{ l }}</span><span v-if="l && (s || e || v || m || a)" class="plantabeta">,</span></v-row>
            <v-row v-if="s"><span class="somon pt-0">{{ s }}</span><span v-if="s && (e || v || m || a)" class="plantabeta">,</span></v-row>
            <v-row v-if="e"><span class="ekon">{{ e }}</span><span v-if="e && (v || m || a)" class="plantabeta">,</span></v-row>
            <v-row v-if="v"><span class="vion">{{ v }}</span><span v-if="v && (m || a)" class="plantabeta">,</span></v-row>
            <v-row v-if="m"><span class="moton">{{ m }}</span><span v-if="m && a" class="plantabeta">,</span></v-row>
            <v-row v-if="a"><span class="animon">{{ a }}</span></v-row>
            <span class="plantabeta">]</span>
        </v-card-text>
      </v-card>
  </template>
  
  <script setup>
  const props = defineProps({
    l: String,
    s: String,
    e: String,
    v: String,
    m: String,
    a: String
  })
  
  
  // Use the config to make a JSON of all the Betum and their links, 
  // so each Betum dynamically links to their BetumPage 
  // OR
  // Use the Props to create the Folders within Betum
  // Interpolate the same way as the v-ifs above, and using JS "if" instead
  // probably involves computed properties
  
  // "`/PlantaBeta/Teori/Beta/Definitions/${l}-${s}`"
  
  </script>
  
  <style>
  .plantabeta {
    color: #6ec08b;
  }

  .labon {
  
    color: #FFCC00;
  
  }
  
  .somon {
  
    color: #569cd6;
  }
  
  .ekon {
  
    color: #6a9955;
  }
  
  .vion {
  
    color: #f44747;
  }
  
  .moton {
  
    color: #bf6a34;
  
  }
  
  .animon {
  
    color: #c586c0;
  }
  </style>