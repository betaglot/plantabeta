<template>
  <a class="text-decoration-none" :href=imageLink>
    <v-container class="d-flex justify-center" >
      <v-img class="rounded-xl"
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