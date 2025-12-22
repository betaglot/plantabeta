<template>
    <v-sheet rounded="xl" border="primary lg" class="mt-4 pa-4">
        <v-container class="text-h2 font-weight-bold ">
    
            <v-row v-if="b.l"><span>⭐</span><span class="labon pl-2">{{ b.l }}</span></v-row>
            <v-row v-if="b.s"><span class="mt-2">🔷</span><span class="somon pl-2">{{ b.s }}</span></v-row>
            <v-row v-if="b.e"><span class="mt-2">🟩</span><span class="ekon pl-2" >{{ b.e }}</span></v-row>
            <v-row v-if="b.v"><span class="mt-2">🔻</span><span class="vion pl-2" >{{ b.v }}</span></v-row>
            <v-row v-if="b.m"><span class="mt-2">🟠</span><span class="moton pl-2" >{{ b.m }}</span></v-row>
            <v-row  v-if="b.a"><span class="mt-2">💜</span><span class="animon pl-2" >{{ b.a }}</span></v-row>
            
        </v-container>
    </v-sheet>
 
</template>
  
<script setup>
const props = defineProps({
  b: Object
})
  
  
  // Use the config to make a JSON of all the Betom and their links, 
  // so each Betom dynamically links to their BetomPage 
  // OR
  // Use the Props to create the Folders within Betom
  // Interpolate the same way as the v-ifs above, and using JS "if" instead
  // probably involves computed properties
  
  // "`/PlantaBeta/Teori/Beta/Definitions/${l}-${s}`"
  
</script>
  
<style>


.betomChip {
  overflow-x: auto;
  border: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 6px;
  padding-left: 4px;
  padding-right: 4px;
  white-space: nowrap;
}

.betomChip::-webkit-scrollbar {
  display: none;
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