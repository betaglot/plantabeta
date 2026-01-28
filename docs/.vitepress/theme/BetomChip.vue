<template>
  <span class="BetomChipContainer">
    <v-img class="align-self-center"
           :src="imageSource"
           height="1.2em"
           width="1.2em" />
    <span class="BetomChip ">
      <span class="labor">{{ props.labor }}</span><span
            v-if="props.labor && (props.soma || props.ekos || props.via || props.motor || props.anima)">|</span>
      <span class="soma">{{ props.soma }}</span><span v-if="props.soma && (props.ekos || props.via || props.motor || props.anima)">|</span>
      <span class="ekos">{{ props.ekos }}</span><span v-if="props.ekos && (props.via || props.motor || props.anima)">|</span>
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

function FaktorHex(labor, soma, ekos, via, motor, anima) {

  let FaktorHexFileName = []

  if (labor) {
    FaktorHexFileName.push("Labor")
    // console.log(labor.value)
  }

  if (soma) {
    FaktorHexFileName.push("Soma")
  }

  if (ekos) {
    FaktorHexFileName.push("Ekos")
  }

  if (via) {
    FaktorHexFileName.push("Via")
  }

  if (motor) {
    FaktorHexFileName.push("Motor")
  }

  if (anima) {
    FaktorHexFileName.push("Anima")
  }

  let filepath = "/FaktorHex/" + FaktorHexFileName.join('') + ".png"

  return filepath

}

let imageSource = FaktorHex(props.labor, props.soma, props.ekos, props.via, props.motor, props.anima)

// Divide BetomChip in two then layer on buttons which scroll in either direction, 
// since people don't usually hold shift when scrolling

</script>

<style>
.BetomChipContainer {
  overflow: hidden;
  width: fit-content;
  display: inline-flex;

}

.BetomChip {
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

.BetomChip::-webkit-scrollbar {
  display: none;
}
</style>