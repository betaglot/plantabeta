<template>
  <span class="BetomChipContainer">
    <span class="BetomChip">
      <span class="labor">{{ b.l }}</span><span v-if="b.l && (b.s || b.e || b.v || b.m || b.a)">|</span>
      <span class="soma">{{ b.s }}</span><span v-if="b.s && (b.e || b.v || b.m || b.a)">|</span>
      <span class="ekos">{{ b.e }}</span><span v-if="b.e && (b.v || b.m || b.a)">|</span>
      <span class="via">{{ b.v }}</span><span v-if="b.v && (b.m || b.a)">|</span>
      <span class="motor">{{ b.m }}</span><span v-if="b.m && b.a">|</span>
      <span class="anima">{{ b.a }}</span>
    </span>
  </span>

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
.BetomChipContainer{
  overflow:hidden;
  width: fit-content;
}

.BetomChip {
  overflow-x: auto;
  border: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 6px;
  padding-left: 4px;
  padding-right: 4px;
  white-space: nowrap;
  margin: 0;

}

.BetomChip::-webkit-scrollbar {
  display: none;
}

</style>