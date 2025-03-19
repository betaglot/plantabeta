<template>
    <a class="text-decoration-none" :href=link>
        <div class="d-flex justify-center text-h2">
            <slot></slot>
        </div>
    </a>
</template>

<script setup>
const props = defineProps({ link: String })
</script>

<style></style>