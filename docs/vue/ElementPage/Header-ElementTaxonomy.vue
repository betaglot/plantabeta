<template>
<div class="taxonomyContainer"> 
 <v-sheet v-if="elementTaxonomy[0]"
             elevation="24"
             class="px-2 rounded-lg mt-2 d-flex">
      <v-sheet 
      
      v-for="item in elementTaxonomy">
        <div :class="elementColor">{{ elementIcon }}{{ item }}</div>
      </v-sheet>
    </v-sheet>
</div>
</template>

<script setup>
import jsonDataImport from '/data/Elements/Properties-Elements.json'

const props = defineProps({
  elementName: String,
})

const jsonData = jsonDataImport

let element = props.elementName

let elementTaxonomy = jsonData[element].elementTaxonomy

let faktor = jsonData[element].elementFaktor

let elementColor = faktor.toLowerCase()

let textColor = "text-" + elementColor

let elementIcon = faktorName_to_emblem(faktor)

function faktorName_to_emblem(faktorName) {
    
    faktorName = faktorName.toLowerCase()
    
    if (faktorName == "labor") {
        return "⭐"
    } else if (faktorName == "soma") {
        return "🔷"
    } else if (faktorName == "ekos") {
        return "🟩"
    } else if (faktorName == "via") {
        return "🔻"
    } else if (faktorName == "motor") {
        return "🟠"
    } else if (faktorName == "anima") {
        return "💜"
    }
}

</script>

<style scoped>
.taxonomyContainer {
    width:auto ;
    overflow-x: scroll; /* Enables horizontal scrolling when content overflows */
    white-space: nowrap;


}

.taxonomyContainer::-webkit-scrollbar {
    display: none;
}





</style>