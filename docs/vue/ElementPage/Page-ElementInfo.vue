<template>

    <div class="d-flex justify-center w-100">
        <v-sheet :class="borderColor"
                 class="mt-4 
                        mx-xs-n20
                        border-xl 
                        rounded-xl 
                        w-100
                        border-opacity-100 
                        elevation-24 
                        elementInfoPage">
            <!-- Title -->
            <div :class="textColor"
                 class="text-h4 text-center mb-2 font-weight-black ">{{ elementEnglishName }}</div>


            <!-- ProfileImage -->
            <div class="d-flex justify-center">
                <v-skeleton-loader type="image">
                    <v-img :src="elementProfilePic ? elementProfilePic : elementEmblem"
                           class="rounded-lg elevation-24"
                           max-height="400"
                           max-width="400">
                    </v-img>
                </v-skeleton-loader>
            </div>


            <v-divider :color="elementColor"
                       opacity="1"
                       gradient
                       class="my-2">
            </v-divider>

            <!-- Description -->
            <v-sheet elevation="24"
                     class="px-4 rounded-lg mt-2">
                <div :class="elementColor"
                     class="text-h5">Description:</div>
                <v-sheet v-for="item in description">
                    <div>{{ elementIcon }}{{ item }}</div>
                </v-sheet>
            </v-sheet>

            <!-- AlsoKnownAs -->
            <v-divider :color="elementColor"
                       opacity="1"
                       gradient
                       class="my-2">
            </v-divider>

            <v-sheet elevation="24"
                     class="px-4 rounded-lg mt-2">
                <div :class="elementColor"
                     class="text-h5">Also Known As:</div>
                <v-sheet v-for="item in AlsoKnownAs">
                    <div>{{ elementIcon }}{{ item }}</div>
                </v-sheet>
            </v-sheet>

            <!-- Betanyms -->
            <v-divider :color="elementColor"
                       opacity="1"
                       gradient
                       class="my-2">
            </v-divider>

            <v-sheet elevation="24"
                     class="rounded-lg mt-2 mb-4">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>
                            <div :class="elementColor"
                                 class="text-h5">Associated English:</div>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-sheet v-for="item in Betanyms">
                                <div>{{ elementIcon }}{{ item }}</div>
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

</style>