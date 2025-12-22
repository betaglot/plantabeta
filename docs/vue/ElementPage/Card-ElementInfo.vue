<template>

  <div class="d-flex justify-center">
    <v-sheet :class="borderColor"
             class="pa-2
           border-xl 
           rounded-xl 
           border-opacity-100 
           elevation-24
           w-100 
           elementInfo">
      <!-- Title -->
      <div :class="textColor"
           class="text-h4 text-center mb-2 font-weight-black ">{{ elementEnglishName }}</div>


      <!-- ProfileImage -->
      <div class="d-flex justify-center">
        <v-skeleton-loader type="image">
          <v-img :src="elementProfilePic ? elementProfilePic : elementEmblem"
                 class="rounded-lg elevation-24 w-100"
        >
          </v-img>
        </v-skeleton-loader>
      </div>


      <v-divider :color="elementColor"
                 opacity="1"
                 gradient
                 class="my-2"></v-divider>

      <!-- Description -->
      <v-sheet elevation="24"
               class="px-2 rounded-lg mt-2">
        <div :class="elementColor"
             class="text-h5">Description:</div>
        <v-sheet class="">
          <div class="pl-4">{{ description }}</div>
        </v-sheet>
      </v-sheet>

      <!-- AlsoKnownAs -->
      <v-divider v-if="AlsoKnownAs[0]"
                 :color="elementColor"
                 opacity="1"
                 gradient
                 class="my-2"></v-divider>

      <v-sheet v-if="AlsoKnownAs[0]"
               elevation="24"
               class="px-2 
                      rounded-lg 
                      mt-2">
        <div :class="elementColor"
             class="text-h5">Also Known As:</div>
        <v-sheet v-for="item in AlsoKnownAs">
          <div>{{ elementIcon }}{{ item }}</div>
        </v-sheet>
      </v-sheet>

      <!-- Betanyms -->
      <v-divider v-if="Betanyms[0]"
                 :color="elementColor"
                 opacity="1"
                 gradient
                 class="my-2"></v-divider>

      <v-sheet v-if="Betanyms[0]"
               elevation="24"
               class="px-2 rounded-lg mt-2">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title class="pa-1">
              <div :class="elementColor"
                   class=" text-h5">Associated English:</div>
            </v-expansion-panel-title>
            <v-expansion-panel-text >
              <v-sheet v-for="item in Betanyms " class="ml-n5">
                <div class="">{{ elementIcon }}{{ item }}</div>
              </v-sheet>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
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

let elementEnglishName = jsonData[element].elementEnglishName

let faktor = jsonData[element].elementFaktor

let AlsoKnownAs = jsonData[element].elementAlias.sort()

let description = jsonData[element].elementDescription

let elementColor = faktor.toLowerCase()

let borderColor = "border-" + elementColor

let textColor = "text-" + elementColor

let elementEmblem = "/Emblem/" + faktor + "-Emblem.png"

let elementProfilePic = jsonData[element].elementProfilePic

let Betanyms = jsonData[element].elementBetanyms.sort()

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

<style>
.elementInfo {
  width: 300px;
  overflow: auto;
  height: 400px;
}

.elementInfo::-webkit-scrollbar {
  display: none;
}
</style>