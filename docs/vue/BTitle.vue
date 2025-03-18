<template>
    <a class="text-decoration-none" :href=link>
        <h2 class="d-flex justify-center bg">
            <slot></slot>
        </h2>
    </a>
</template>

<script setup>
const props = defineProps({ link: String })
</script>

<style></style>