<template>
    <v-icon :color="`ikons.${Faktor}.color`"
            icon="mdi-square"
            size="x-large">
    </v-icon>
</template>

<script setup>
// How to use scripts to and object to dynamically render the ikon?

const props = defineProps({
    Faktor: String
})



const ikons = {
    "labor": { "icon": "mdi-star", "size": "", "color": "#FFCC00" },
    "soma": { "icon": "mdi-rhombus", "size": "", "color": "#569cd6" },
    "ekos": { "icon": "mdi-square", "size": "", "color": "#6a9955" },
    "via": { "icon": "mdi-triangle-down", "size": "", "color": "#f44747" },
    "motor": { "icon": "mdi-circle", "size": "", "color": "#bf6a34" },
    "anima": { "icon": "mdi-heart", "size": "", "color": "#c586c0" },
}
</script>

<style></style>