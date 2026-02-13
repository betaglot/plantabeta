<template>
    <div v-for="betom in betoms">
        <Betomglyf class="text-h4 mb-2"
                   :labor='betom["betomglyf"]["labor"]'
                   :soma='betom["betomglyf"]["soma"]'
                   :ekos='betom["betomglyf"]["ekos"]'
                   :via='betom["betomglyf"]["via"]'
                   :motor='betom["betomglyf"]["motor"]'
                   :anima='betom["betomglyf"]["anima"]' />

    </div>
</template>

<script setup>
import jsonDataImport from '/data/Betoms/Properties/Properties-Betoms.json'
import Betomglyf from '/vue/Betomglyf.vue';

const betoms = jsonDataImport

</script>

<style></style>