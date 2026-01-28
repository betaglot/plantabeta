<script setup>
const props = defineProps({
    elementName: String,
    color: String
})
</script>

<template>
    <VSheet height="200" width="200" min-width="200" class="rounded-xl border-anima border-xl border-opacity-100" >
        <div class="text-center pt-2" :color="color">
                {{ elementName }}
        </div>
    </VSheet>
</template>