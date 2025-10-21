<template>
    <VContainer >
        <VRow no-gutters>
            <VCol cols="12" sm="6">
                <ElementGroupIkon imageLink="/reference/Elements/Labor/LaborOverview"
                                  imageSource='/Ikon/Labor_Ikon.png' />
            </VCol>
            <VCol cols="12" sm="6">
                <ElementGroupIkon imageLink="/reference/Elements/Soma/SomaOverview"
                                  imageSource='/Ikon/Soma_Ikon.png' />
            </VCol>
        </VRow>
        <VRow no-gutters>
            <VCol cols="12" sm="6">
                <ElementGroupIkon imageLink="/reference/Elements/Ekos/EkosOverview"
                                  imageSource='/Ikon/Ekos_Ikon.png' />
            </VCol>
            <VCol cols="12" sm="6">
                <ElementGroupIkon imageLink="/reference/Elements/Via/ViaOverview"
                                  imageSource='/Ikon/Via_Ikon.png' />
            </VCol>
        </VRow>
        <VRow no-gutters>
            <VCol cols="12" sm="6">
                <ElementGroupIkon imageLink="/reference/Elements/Motor/MotorOverview"
                                  imageSource='/Ikon/Motor_Ikon.png' />
            </VCol>
            <VCol cols="12" sm="6">
                <ElementGroupIkon imageLink="/reference/Elements/Anima/AnimaOverview"
                                  imageSource='/Ikon/Anima_Ikon.png' />
            </VCol>
        </VRow>
    </VContainer>
</template>

<script setup>
import ElementGroupIkon from '/vue/ElementGroupIkon.vue'
</script>

<style></style>