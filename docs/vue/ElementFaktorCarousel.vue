<template>
    <v-window show-arrows= true
              continuous
              cycle
              interval="1000"
              >
        <v-window-item>
            <FaktorIkon imageLink="/Betaglot/Teori/Elements/Labor/LaborOverview"
                              imageSource='/Ikon/Labor_Ikon.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/Betaglot/Teori/Elements/Soma/SomaOverview"
                              imageSource='/Ikon/Soma_Ikon.png' />
        </v-window-item>

        <v-window-item>
            <FaktorIkon imageLink="/Betaglot/Teori/Elements/Ekos/EkosOverview"
                              imageSource='/Ikon/Ekos_Ikon.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/Betaglot/Teori/Elements/Via/ViaOverview"
                              imageSource='/Ikon/Via_Ikon.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/Betaglot/Teori/Elements/Motor/MotorOverview"
                              imageSource='/Ikon/Motor_Ikon.png' />
        </v-window-item>
        <v-window-item>
            <FaktorIkon imageLink="/Betaglot/Teori/Elements/Anima/AnimaOverview"
                              imageSource='/Ikon/Anima_Ikon.png' />

        </v-window-item>
    </v-window>
</template>

<script setup>
import FaktorIkon from '/vue/FaktorIkon.vue'
</script>

<style></style>