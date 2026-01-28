<template>
  <v-card
    title="Elements"
    flat
  >
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>

    <v-data-table
      :headers="headers"
      :items="elementsGraph"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script setup>

import { ref } from 'vue'

const search = ref('')

const headers = [
    { title: 'Name', align: 'start', key: 'elementName' },
    { title: 'Group', align: 'end', key: 'elementGroup' },
    { title: 'ID', align: 'end', key: 'elementID' },
]

const elementsGraph = [
    {
        elementName: "Abduction",
        elementGroup: "⭐Labor",

    },
    {
        elementName: "Absorb",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Adduction",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Adjust",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Allo",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Ama",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Ankor",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Catch",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Clean",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Crawl",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Drag",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Drop",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Eval",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Fall",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Flexion",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Hinge",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Hook",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Insert",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Knot",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Kontakt",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Launch",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Lift",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Lock",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Onda",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Orbit",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Overview",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Pop",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Preserve",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Pull",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Push",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Reach",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Rip",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Slot",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Stack",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Stall",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Tangent",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Transport",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "Wrap",

        elementGroup: "⭐Labor",

    },
    {
        elementName: "",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Arm",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Body",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Head",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Leg",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Forearm",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Hand",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Humerus",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Scapula",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Hips",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Ribs",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Spine",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Cranium",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Ears",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Face",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Neck",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Femur",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Foot",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Hips",

        "elementGroup": "🔷Soma",

    },
    {
        elementName: "Shin",

        "elementGroup": "🔷Soma",

    }
]
</script>

<style></style>