<template>
  <VSheet class="rounded-xl"
          border="md">
    <VContainer class="betagrafaContainer">
      <slot></slot>
    </VContainer>
  </VSheet>
</template>

<script setup>

</script>

<style>
.betagrafaContainer {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.betagrafaContainer::-webkit-scrollbar {
    display: none;
}
</style>