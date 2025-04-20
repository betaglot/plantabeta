<template>
    <v-sheet rounded="xl" border="primary lg" class="mx-auto mt-4">
        <v-container class="text-h2 font-weight-bold ">
    
            <v-row class="" v-if="l"><span>⭐</span><span class="labon pl-2">{{ l }}</span><span v-if="l && (s || e || v || m || a)" class="plantabeta">,</span></v-row>
            <v-row class="pt-1" v-if="s"><span>🔷</span><span class="somon pl-2">{{ s }}</span><span v-if="s && (e || v || m || a)" class="plantabeta">,</span></v-row>
            <v-row class="pt-1" v-if="e"><span>🟩</span><span class="ekon pl-2" >{{ e }}</span><span v-if="e && (v || m || a)" class="plantabeta">,</span></v-row>
            <v-row class="pt-1" v-if="v"><span>🔻</span><span class="vion pl-2" >{{ v }}</span><span v-if="v && (m || a)" class="plantabeta">,</span></v-row>
            <v-row class="pt-1" v-if="m"><span>🟠</span><span class="moton pl-2" >{{ m }}</span><span v-if="m && a" class="plantabeta">,</span></v-row>
            <v-row class="pt-1" v-if="a"><span>💜</span><span class="animon pl-2" >{{ a }}</span></v-row>
            
        </v-container>
    </v-sheet>
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