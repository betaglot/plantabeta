<template>
    <v-window show-arrows= true
              continuous>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Labor/LaborOverview"
                              imageSource='/Emblem/Labor-Emblem.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Soma/SomaOverview"
                              imageSource='/Emblem/Soma-Emblem.png' />
        </v-window-item>

        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Ekos/EkosOverview"
                              imageSource='/Emblem/Ekos-Emblem.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Via/ViaOverview"
                              imageSource='/Emblem/Via-Emblem.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Motor/MotorOverview"
                              imageSource='/Emblem/Motor-Emblem.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Anima/AnimaOverview"
                              imageSource='/Emblem/Anima-Emblem.png' />

        </v-window-item>
    </v-window>
</template>

<script setup>
import FaktorIkon from '/vue/FaktorIkon.vue'
</script>

<style></style>