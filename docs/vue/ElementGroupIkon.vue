<template>
  <a :href=imageLink>
  <v-container class="d-flex justify-center w-50">
      <v-img class=""
             cover
             :src=imageSource></v-img>
  </v-container>
</a>
</template>

<script setup>
const props = defineProps({ imageSource: String, imageLink: String })
</script>

<style>
.list {

  background-color: blue;
}
</style>