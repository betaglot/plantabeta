<template>
  <div class="BetomChipContainer">
    <v-img class="align-self-center"
           :src="imageSource"
           height="1.2em"
           width="1.2em" />
    <span class="BetomChip ">
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
  </div>
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
  border: solid;
  vertical-align: -2px;
  border-color: currentColor;
  border-left: 0;
  border-right: 0;
  border-width: 1px;
  margin-right: 0;
  line-height: .9;
  align-items: center;
  font-size: 0.9em;

}

.BetomChipContainer .v-img__img {
  margin: 0 !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;

}

.BetomChip {
  overflow-x: auto;
  line-height: 1;
  padding-left: 3px;
  padding-right: 3px;
  white-space: nowrap;
  display: inline-flex;
  margin: 0;

}

.BetomChip::-webkit-scrollbar {
  display: none;
}
</style>
