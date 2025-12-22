<template>
  <VSheet class="rounded-xl"
          border="md">
    <VContainer class="betaTranscriptorContainer">
      <slot></slot>
    </VContainer>
  </VSheet>
</template>

<script setup>

</script>

<style>
.betaTranscriptorContainer {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>