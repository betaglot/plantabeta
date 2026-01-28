<template>
    <VContainer >
        <VRow no-gutters>
            <VCol cols="12" sm="6">
                <FaktorEmblem imageLink="/reference/Elements/Labor/LaborOverview"
                                  imageSource='/Emblem/Labor-Emblem.png' />
            </VCol>
            <VCol cols="12" sm="6">
                <FaktorEmblem imageLink="/reference/Elements/Soma/SomaOverview"
                                  imageSource='/Emblem/Soma-Emblem.png' />
            </VCol>
        </VRow>
        <VRow no-gutters>
            <VCol cols="12" sm="6">
                <FaktorEmblem imageLink="/reference/Elements/Ekos/EkosOverview"
                                  imageSource='/Emblem/Ekos-Emblem.png' />
            </VCol>
            <VCol cols="12" sm="6">
                <FaktorEmblem imageLink="/reference/Elements/Via/ViaOverview"
                                  imageSource='/Emblem/Via-Emblem.png' />
            </VCol>
        </VRow>
        <VRow no-gutters>
            <VCol cols="12" sm="6">
                <FaktorEmblem imageLink="/reference/Elements/Motor/MotorOverview"
                                  imageSource='/Emblem/Motor-Emblem.png' />
            </VCol>
            <VCol cols="12" sm="6">
                <FaktorEmblem imageLink="/reference/Elements/Anima/AnimaOverview"
                                  imageSource='/Emblem/Anima-Emblem.png' />
            </VCol>
        </VRow>
    </VContainer>
</template>

<script setup>
import FaktorEmblem from '/vue/FaktorEmblem.vue'
</script>

<style></style>