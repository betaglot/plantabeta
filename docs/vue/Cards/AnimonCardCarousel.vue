<script setup>
const elementNames = [
    'Think',
    'See',
    'Hearing',
    'Touch',
    'Attention',
]

</script>

<template>
    <v-carousel height="100"
                width="400"
                :show-arrows=false
                cycle
                hide-delimiter-background
                hide-delimiters=true
                class="d-flex justify-center"
                interval="2600">
        <v-carousel-item v-for="(elementName, i) in elementNames"
                         :key="i">
            <VSheet height="100"
                    width="400"
                    min-width="300"
                    class="rounded-xl border-anima border-xl d-flex justify-center border-opacity-100">
                <div class="text-center pt-2 text-anima text-h3 align-self-center">
                    {{ elementName }}
                </div>
            </VSheet>
        </v-carousel-item>
    </v-carousel>
</template>
