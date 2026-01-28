<template>
  <span class="BetomglyfContainer">
    <span class="Betomglyf ">
      <span class="labor">{{ props.labor }}</span><span
            v-if="props.labor && (props.soma || props.ekos || props.via || props.motor || props.anima)">|</span>
      <span class="soma">{{ props.soma }}</span><span
            v-if="props.soma && (props.ekos || props.via || props.motor || props.anima)">|</span>
      <span class="ekos">{{ props.ekos }}</span><span
            v-if="props.ekos && (props.via || props.motor || props.anima)">|</span>
      <span class="via">{{ props.via }}</span><span v-if="props.via && (props.motor || props.anima)">|</span>
      <span class="motor">{{ props.motor }}</span><span v-if="props.motor && props.anima">|</span>
      <span class="anima">{{ props.anima }}</span>
    </span>
  </span>
</template>

<script setup>
const props = defineProps({
  labor: String,
  soma: String,
  ekos: String,
  via: String,
  motor: String,
  anima: String
})
</script>

<style>
.BetomglyfContainer {
  overflow: hidden;
  width: fit-content;
  display: inline-flex;

}

.Betomglyf {
  overflow-x: auto;
  border: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 6px;
  padding-left: 4px;
  padding-right: 20px;
  white-space: nowrap;
  display: inline-flex;
  margin: 0;

}

.Betomglyf::-webkit-scrollbar {
  display: none;
}
</style>