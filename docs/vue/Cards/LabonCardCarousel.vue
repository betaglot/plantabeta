<script setup>
const elementNames = [
    'Shirt',
    'Competition',
    'Athlete',
    'Win',
    'Lose',
    'Attempt',
    'Rules',
    'Route',
    'Aktion',
    'Reach',
    'Pull',
    'Gear',
    'Rope',
    'Carabiner',
    'Gloves',
    'Coach',
    'Judge',
    'Spectator'
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
                interval="2100">
        <v-carousel-item v-for="(elementName, i) in elementNames"
                         :key="i">
            <VSheet height="100"
                    width="400"
                    min-width="300"
                    class="rounded-xl border-labor border-xl d-flex justify-center border-opacity-100">
                <div class="text-center pt-2 text-labor text-h3 align-self-center">
                    {{ elementName }}
                </div>
            </VSheet>
        </v-carousel-item>
    </v-carousel>
</template>
