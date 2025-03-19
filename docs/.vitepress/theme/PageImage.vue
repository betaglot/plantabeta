<template>
    <v-sheet class="rounded-xl">
        <v-img class="rounded-xl"
               max-height="500"
               aspect-ratio="1"
               :src="`/PageImages/${source}`" />
    </v-sheet>
</template>

<script setup>
const props = defineProps({
    source: String
})
</script>

<style></style>