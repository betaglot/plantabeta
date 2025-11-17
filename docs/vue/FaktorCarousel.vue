<template>
    <v-window show-arrows= true
              continuous>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Labor/LaborOverview"
                              imageSource='/Ikon/Labor_Ikon.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Soma/SomaOverview"
                              imageSource='/Ikon/Soma_Ikon.png' />
        </v-window-item>

        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Ekos/EkosOverview"
                              imageSource='/Ikon/Ekos_Ikon.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Via/ViaOverview"
                              imageSource='/Ikon/Via_Ikon.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Motor/MotorOverview"
                              imageSource='/Ikon/Motor_Ikon.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/PlantaBeta/Teori/Elements/Anima/AnimaOverview"
                              imageSource='/Ikon/Anima_Ikon.png' />

        </v-window-item>
    </v-window>
</template>

<script setup>
import FaktorIkon from '/vue/FaktorIkon.vue'
</script>

<style></style>