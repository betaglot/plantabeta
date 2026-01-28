<template>
    <h2>Elements Filter</h2>

  <v-card flat class="rounded-xl pt-4">
    <v-card-title class="d-flex align-center px-6">
      <span>Find a <span class="beta">BETOM</span></span>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table
      v-model:search="search"
      :filter-keys="['name']"
      :items="items"
    >
      <template v-slot:header.stock>
        <div class="text-end">Stock</div>
      </template>

      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
            :src="`/Gifs/KlimBeta-${item.name}_cropped.gif`"
            height="400"
            width="400"
            cover
          ></v-img>
        </v-card>
      </template>



    </v-data-table>
  </v-card>

</template>

<script setup>

// "Task": {
//         "elementEnglishName": "Task",
//         "elementFaktor": "Labor",
//         "elementIcon": "⭐",
//         "elementID": "",
//         "elementTaxonomy": [
//             "Labor",
//             "Task"
//         ],
//         "elementAlias": [],
//         "elementDescription": "a piece of work to be done",
//         "elementBetanyms": [
//             "tasked"
//         ],
//         "elementInBetom": [],
//         "elementProfilePic": "",
//         "elementExample": {
//             "elementVideo": [],
//             "elementImage": [],
//             "elementQuote": []
//         }
//     },


import { ref } from 'vue'

  const search = ref('')
  const items = [
    {
      name: '000080',

    },
    {
      name: 'Galaxy RTX 3080',

    },
    {
      name: 'Orion RX 6800 XT',

    },
    {
      name: 'Vortex RTX 3090',

    },
    {
      name: 'Cosmos GTX 1660 Super',
      image: '5.png',

    },
  ]

</script>

<style></style>