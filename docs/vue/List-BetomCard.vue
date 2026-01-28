<template>

    <div>
        <v-sheet v-for="betom in ParsedBetoms"
                 class="rounded-xl border-opacity-100 border-lg py-4">
            <div class="text-h5 text-center"
                 :id="betom.betomGif_ID">
                <span v-if="betom.glyfed == 'True'">🟢</span>
                <span v-else>⭕</span>
                <span class="beta">KlimBeta</span>-{{ betom.betomGif_ID }}
            </div>
            <v-img class="mt-2"
                   :src="betom.filePath" />

            <v-divider v-if="betom.glyfed == 'True'"
                       opacity="1"
                       gradient
                       class="my-2"></v-divider>

            <div class="pl-1 betomListContainer">
                <div>
                    <div v-for="glyf in betom.betomGlyf"
                         >
                        <BB :labor="glyf.Labor"
                            :soma="glyf.Soma"
                            :ekos="glyf.Ekos"
                            :via="glyf.Via"
                            :m="glyf.Motor"
                            :anima="glyf.Anima" />
                    </div>
                </div>
            </div>
        </v-sheet>
    </div>


</template>

<script setup>
import BE from '/vue/Hex.vue'
import ParsedBetoms from '/data/Betoms/ParsedBetoms/ParsedBetoms.json'

</script>

<style>
[id] {
    scroll-margin-top: 100px;
}

.betomListContainer {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.betomListContainer::-webkit-scrollbar {
    display: none;
}
</style>