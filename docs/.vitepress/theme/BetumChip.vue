<template>
<v-chip class="betumChip px-1" draggable variant="tonal" density="compact" tag="span" >
    🌈<span class="labon">{{ l }}</span><span v-if="l && (s || e || v || m || a)">-</span>
    <span class="somon">{{ s }}</span><span v-if="s && (e || v || m || a)">-</span>
    <span class="ekon">{{ e }}</span><span v-if="e && (v || m || a)">-</span>
    <span class="vion">{{ v }}</span><span v-if="v && (m || a)">-</span>
    <span class="moton">{{ m }}</span><span v-if="m && a">-</span>
    <span class="animon">{{ a }}</span>
</v-chip>
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
</script>

<style>
.labon {
  
  color:  #FFCC00;
  
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