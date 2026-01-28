<script setup>
import { ref } from 'vue';

const props = defineProps({
  elementName: String,
});

const showTooltip = ref(false);

const handleCopy = () => {
  // Use .then() instead of await
  navigator.clipboard.writeText(props.elementName)
    .then(() => {
      showTooltip.value = true;
      setTimeout(() => (showTooltip.value = false), 2000);
    })
    .catch((err) => {
      console.error('Copy failed', err);
    });
};
</script>

<template>
  <v-btn icon @click="handleCopy">
    <v-icon>mdi-content-copy</v-icon>
    <v-tooltip activator="parent" v-model="showTooltip" location="top">
      {{ props.elementName }}
    </v-tooltip>
  </v-btn>
</template>