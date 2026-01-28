<template>
    <div class="containerGrid">
        <div v-for="key in Object.keys(data)"
             :key="key">
            <ElementInfo class="elementInfo" width="300"
                         :elementName="key">

            </ElementInfo>
        </div>
    </div>


</template>

<script setup>
import ElementInfo from '/vue/ElementPage/Card-ElementInfo.vue'

import jsonDataImport from '/data/Elements/Properties-Elements.json'

const data = jsonDataImport



</script>

<style scoped>



.elementInfo::-webkit-scrollbar {
  display: none;
}

.containerGrid {
    display: grid;
    /* Creates 4 columns, each taking up an equal fraction of the available space */
    grid-template-columns: repeat(4, 1fr);
    /* Optional: adds space between grid items */
}
</style>