<template>
  <div class="betumChipContainer">
    <div class="betumChip">

      <span class="labon">{{ b.l }}</span><span v-if="b.l && (b.s || b.e || b.v || b.m || b.a)">|</span>
      <span class="somon">{{ b.s }}</span><span v-if="b.s && (b.e || b.v || b.m || b.a)">|</span>
      <span class="ekon">{{ b.e }}</span><span v-if="b.e && (b.v || b.m || b.a)">|</span>
      <span class="vion">{{ b.v }}</span><span v-if="b.v && (b.m || b.a)">|</span>
      <span class="moton">{{ b.m }}</span><span v-if="b.m && b.a">|</span>
      <span class="animon">{{ b.a }}</span>

    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  b: Object
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
.betumChipContainer{
  display:flex;
  overflow:hidden;
}

.betumChip {
  overflow-x: auto;
  border: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 6px;
  padding-left: 4px;
  padding-right: 4px;
  white-space: nowrap;
  scroll-direction: horizontal;
}

.betumChip::-webkit-scrollbar {
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