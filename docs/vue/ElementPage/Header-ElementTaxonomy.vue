<template>
 <v-sheet v-if="elementTaxonomy[0]"
             elevation="24"
             class="px-2 rounded-lg mt-2 d-flex">
      <v-sheet 
      
      v-for="item in elementTaxonomy">
        <div :class="elementColor">{{ elementIcon }}{{ item }}</div>
      </v-sheet>
    </v-sheet>
</template>

<script setup>
import jsonDataImport from '/data/Elements/Properties-Elements.json'

const props = defineProps({
  elementName: String,
})

const jsonData = jsonDataImport

let element = props.elementName

let elementTaxonomy = jsonData[element].elementTaxonomy

let elementIcon = jsonData[element].elementIcon

let faktor = jsonData[element].elementFaktor

let elementColor = faktor.toLowerCase()

let textColor = "text-" + elementColor

</script>

<style>

</style>