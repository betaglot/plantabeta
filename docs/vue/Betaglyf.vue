<template>
    <v-form @submit.prevent
            v-model="isValid">
        <v-sheet class="border-opacity-100 border-lg rounded-lg pl-2"
                 height="740"
                 width="1350">
            <!-- BETOM_ID -->
            <v-text-field density="compact"
                          autocomplete="suppress"
                          max-width="80"
                          placeholder="BETOM_ID"
                          variant="underlined"
                          required
                          :rules="rules"
                          v-model="BetomData.betom_ID"></v-text-field>
            <!-- BETOMGLYF -->
            <Betomglyf class="text-h4 mb-2"
                       :labor="LaborFaktorText"
                       :soma="SomaFaktorText"
                       :ekos="EkosFaktorText"
                       :via="ViaFaktorText"
                       :motor="MotorFaktorText"
                       :anima="AnimaFaktorText" />
            <!-- LABOR Inputs -->
            <div class="d-flex">
                <!-- Labon-Autocomplete -->
                <v-autocomplete autofocus
                                auto-select-first
                                autocomplete="suppress"
                                hide-no-data
                                placeholder="Labon"
                                color="labor"
                                v-model:search="LabonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedLabon"
                                :items="ListAllLabons"></v-autocomplete>
                <!-- SubLabon-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="SubLabon"
                                color="labor"
                                v-show="ShowSubLabon"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model:search="SubLabonInputText"
                                v-model="BetomData.selectedSubLabon"
                                :items="DictSubLabons[BetomData.selectedLabon]"></v-autocomplete>
                <!-- SubSubLabon-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="SubSubLabon"
                                color="labor"
                                v-show="ShowSubSubLabon"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model:search="SubSubLabonInputText"
                                v-model="BetomData.selectedSubSubLabon"
                                :items="DictSubLabons[BetomData.selectedSubLabon]"></v-autocomplete>
            </div>
            <!-- SOMA Inputs -->
            <div class="d-flex">
                <!-- Somon-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="Somon"
                                color="soma"
                                v-show="ShowSomon"
                                v-model:search="SomonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedSomon"
                                :items="ListAllSomons"></v-autocomplete>
                <!-- SubSomon-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="SubSomon"
                                color="soma"
                                v-show="ShowSubSomon"
                                v-model:search="SubSomonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedSubSomon"
                                :items="DictSubSomons[BetomData.selectedSomon]"></v-autocomplete>
            </div>
            <!-- EKOS Inputs -->
            <div class="d-flex">
                <!-- Ekon-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="Ekon"
                                color="ekos"
                                v-show="ShowEkon"
                                v-model:search="EkonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedEkon"
                                :items="ListAllEkons"></v-autocomplete>
                <!-- SubEkon-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="SubEkon"
                                color="ekos"
                                v-show="ShowSubEkon"
                                v-model:search="SubEkonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedSubEkon"
                                :items="DictSubEkons[BetomData.selectedEkon]"></v-autocomplete>
            </div>
            <!-- VIA Inputs -->
            <div class="d-flex">
                <!-- Vion-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="Vion"
                                color="via"
                                v-show="ShowVion"
                                v-model:search="VionInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedVion"
                                :items="ListAllVions"></v-autocomplete>
                <!-- SubVion-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="SubVion"
                                color="via"
                                v-show="ShowSubVion"
                                v-model:search="SubVionInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedSubVion"
                                :items="DictSubVions[BetomData.selectedVion]"></v-autocomplete>
            </div>
            <!-- MOTOR Inputs -->
            <div class="d-flex">
                <!-- Moton-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="Moton"
                                color="motor"
                                v-show="ShowMoton"
                                v-model:search="MotonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedMoton"
                                :items="ListAllMotons"></v-autocomplete>
                <!-- SubMoton-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="SubMoton"
                                color="motor"
                                v-show="ShowSubMoton"
                                v-model:search="SubMotonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedSubMoton"
                                :items="DictSubMotons[BetomData.selectedMoton]"></v-autocomplete>
            </div>
            <!-- ANIMA Inputs -->
            <div class="d-flex">
                <!-- Animon-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="Animon"
                                color="anima"
                                v-show="ShowAnimon"
                                v-model:search="AnimonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedAnimon"
                                :items="ListAllAnimons"></v-autocomplete>
                <!-- SubAnimon-Autocomplete -->
                <v-autocomplete hide-no-data
                                autofocus
                                auto-select-first
                                autocomplete="suppress"
                                placeholder="SubAnimon"
                                color="anima"
                                v-show="ShowSubAnimon"
                                v-model:search="SubAnimonInputText"
                                variant="outlined"
                                max-width="200"
                                density="compact"
                                v-model="BetomData.selectedSubAnimon"
                                :items="DictSubAnimons[BetomData.selectedAnimon]"></v-autocomplete>
            </div>
            <!-- Submit Button -->
            <v-btn class=""
                   type="submit"
                   @click="handleSubmit">Submit</v-btn>
        </v-sheet>
    </v-form>

</template>

<script setup>
import { ref, watch, computed, useTemplateRef, onMounted, reactive } from 'vue';
import Betomglyf from '/vue/Betomglyf.vue'
import BetomLogicJSON from '/data/Betaglyf/Betaglyf-Logic.json'

// BetomLogic-Data

const ListAllLabons = BetomLogicJSON["ListAllLabons"]
const DictSubLabons = BetomLogicJSON["DictSubLabons"]
const ListAllSomons = BetomLogicJSON["ListAllSomons"]
const DictSubSomons = BetomLogicJSON["DictSubSomons"]
const ListAllEkons = BetomLogicJSON["ListAllEkons"]
const DictSubEkons = BetomLogicJSON["DictSubEkons"]
const ListAllVions = BetomLogicJSON["ListAllVions"]
const DictSubVions = BetomLogicJSON["DictSubVions"]
const ListAllMotons = BetomLogicJSON["ListAllMotons"]
const DictSubMotons = BetomLogicJSON["DictSubMotons"]
const ListAllAnimons = BetomLogicJSON["ListAllAnimons"]
const DictSubAnimons = BetomLogicJSON["DictSubAnimons"]

// Add to a reactive Object then pass the values of the Object to <BB /> 
const BetomData = reactive({
    betom_ID: "",
    selectedLabon: "",
    selectedSubLabon: "",
    selectedSubSubLabon: "",

    selectedSomon: "",
    selectedSubSomon: "",
    selectedSubSubSomon: "",

    selectedEkon: "",
    selectedSubEkon: "",
    selectedSubSubEkon: "",

    selectedVion: "",
    selectedSubVion: "",
    selectedSubSubVion: "",

    selectedMoton: "",
    selectedSubMoton: "",
    selectedSubSubMoton: "",

    selectedAnimon: "",
    selectedSubAnimon: "",
    selectedSubSubAnimon: "",
})


// Form-Validation
const form = ref();

const isValid = ref()

const rules = [
    value => {
        if (value.length >= 3) return true
        return 'not valid'
    },
]

// Form-Reset


// Form Submit
const handleSubmit = () => {
    if (isValid.value) {
        console.log('Form data:', JSON.stringify(BetomData));
        const jsonData = JSON.stringify(BetomData);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const now = new Date();
        const currentTimeString = now.toLocaleTimeString();

        const link = document.createElement('a');
        link.href = url;
        link.download = `BetomLog_${BetomData.betom_ID}-${currentTimeString}.json`;
        link.click();
    }


};

/////////////////////////////////////////////// LABOR

function FullLaborText() {
    if (BetomData.selectedLabon && BetomData.selectedSubLabon && BetomData.selectedSubSubLabon) {
        return BetomData.selectedLabon + "." + BetomData.selectedSubLabon + "." + BetomData.selectedSubSubLabon;
    }
    if (BetomData.selectedLabon && BetomData.selectedSubLabon) {
        return BetomData.selectedLabon + "." + BetomData.selectedSubLabon;
    }
    else if (BetomData.selectedLabon) {
        return BetomData.selectedLabon;
    }
}

const LaborFaktorText = computed(FullLaborText);

// Show Element Autocompletes
const ShowSubLabon = ref(false)
const ShowSubSubLabon = ref(false)

// Labor-State
const LabonInputText = ref(null)
const SubLabonInputText = ref(null)
const SubSubLabonInputText = ref(null)

// Show SubLabon
watch(LabonInputText, (newVal) => {
    if (newVal && newVal.endsWith('.')) {
        ShowSubLabon.value = true
    }
})
// Show SubSubLabon
watch(SubLabonInputText, (newVal) => {
    if (newVal && newVal.endsWith('.')) {
        ShowSubSubLabon.value = true
    }
})

// Show SOMA from LABOR
watch(LabonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowSomon.value = true
    }
})

watch(SubLabonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowSomon.value = true
    }
})

watch(SubSubLabonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowSomon.value = true
    }
})



/////////////////////////////////////////////// SOMA

const ShowSomon = ref(false)
const ShowSubSomon = ref(false)
// Soma-State
const SomonInputText = ref(null);
const SubSomonInputText = ref(null);

function FullSomaText() {
    if (BetomData.selectedSomon && BetomData.selectedSubSomon && BetomData.selectedSubSubSomon) {
        return BetomData.selectedSomon + "." + BetomData.selectedSubSomon + "." + BetomData.selectedSubSubSomon;
    }
    if (BetomData.selectedSomon && BetomData.selectedSubSomon) {
        return BetomData.selectedSomon + "." + BetomData.selectedSubSomon;
    }
    else if (BetomData.selectedSomon) {
        return BetomData.selectedSomon;
    }
}

const SomaFaktorText = computed(FullSomaText);


// Show SubSomon Autocomplete
watch(SomonInputText, (newVal) => {
    if (newVal && newVal.endsWith('.')) {
        ShowSubSomon.value = true
    }
})


// Show EKOS from SOMA
watch(SomonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowEkon.value = true
    }
})

watch(SubSomonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowEkon.value = true
    }
})

/////////////////////////////////////////////// EKOS

const ShowEkon = ref(false)
const ShowSubEkon = ref(false)

// EKOS Text in Betom Chip
const EkonInputText = ref(null);
const SubEkonInputText = ref(null);

function FullEkonText() {
    if (BetomData.selectedEkon && BetomData.selectedSubEkon && BetomData.selectedSubSubEkon) {
        return BetomData.selectedEkon + "." + BetomData.selectedSubEkon + "." + BetomData.selectedSubSubEkon;
    }
    if (BetomData.selectedEkon && BetomData.selectedSubEkon) {
        return BetomData.selectedEkon + "." + BetomData.selectedSubEkon;
    }
    else if (BetomData.selectedEkon) {
        return BetomData.selectedEkon;
    }
}

const EkosFaktorText = computed(FullEkonText);


watch(EkonInputText, (newVal) => {
    if (newVal && newVal.endsWith('.')) {
        ShowSubEkon.value = true
    }
})

// Show VIA from EKOS
watch(EkonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowVion.value = true
    }
})

watch(SubEkonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowVion.value = true
    }
})

/////////////////////////////////////////////// VIA

// Show Vion when Pipe is pressed
const ShowVion = ref(false)
const ShowSubVion = ref(false)

// VIA Text in Betom Chip
const VionInputText = ref(null);
const SubVionInputText = ref(null);

function FullVionText() {
    if (BetomData.selectedVion && BetomData.selectedSubVion && BetomData.selectedSubSubVion) {
        return BetomData.selectedVion + "." + BetomData.selectedSubVion + "." + BetomData.selectedSubSubVion;
    }
    if (BetomData.selectedVion && BetomData.selectedSubVion) {
        return BetomData.selectedVion + "." + BetomData.selectedSubVion;
    }
    else if (BetomData.selectedVion) {
        return BetomData.selectedVion;
    }
}

const ViaFaktorText = computed(FullVionText);

// Show SubVION
watch(VionInputText, (newVal) => {
    if (newVal && newVal.endsWith('.')) {
        ShowSubVion.value = true
    }
})

// Show MOTOR from VIA
watch(VionInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowMoton.value = true
    }
})

watch(SubVionInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowMoton.value = true
    }
})

/////////////////////////////////////////////// MOTOR


const ShowMoton = ref(false)
const ShowSubMoton = ref(false)

// MOTOR Text in Betom Chip
const MotonInputText = ref(null);
const SubMotonInputText = ref(null);

function FullMotonText() {
    if (BetomData.selectedMoton && BetomData.selectedSubMoton && BetomData.selectedSubSubMoton) {
        return BetomData.selectedMoton + "." + BetomData.selectedSubMoton + "." + BetomData.selectedSubSubMoton;
    }
    if (BetomData.selectedMoton && BetomData.selectedSubMoton) {
        return BetomData.selectedMoton + "." + BetomData.selectedSubMoton;
    }
    else if (BetomData.selectedMoton) {
        return BetomData.selectedMoton;
    }
}

const MotorFaktorText = computed(FullMotonText);

// Show SubMoton when Period is pressed

watch(MotonInputText, (newVal) => {
    if (newVal && newVal.endsWith('.')) {
        ShowSubMoton.value = true
    }
})

// Show ANIMA from MOTOR
watch(MotonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowAnimon.value = true
    }
})

watch(SubMotonInputText, (newVal) => {
    if (newVal && newVal.endsWith('|') || newVal.endsWith('\\')) {
        ShowAnimon.value = true
    }
})

/////////////////////////////////////////////// ANIMA

const ShowAnimon = ref(false)
const ShowSubAnimon = ref(false)

// ANIMA Text in Betom Chip
const AnimonInputText = ref(null);
const SubAnimonInputText = ref(null);

function FullAnimonText() {
    if (BetomData.selectedAnimon && BetomData.selectedSubAnimon && BetomData.selectedSubSubAnimon) {
        return BetomData.selectedAnimon + "." + BetomData.selectedSubAnimon + "." + BetomData.selectedSubSubAnimon;
    }
    if (BetomData.selectedAnimon && BetomData.selectedSubAnimon) {
        return BetomData.selectedAnimon + "." + BetomData.selectedSubAnimon;
    }
    else if (BetomData.selectedAnimon) {
        return BetomData.selectedAnimon;
    }
}

const AnimaFaktorText = computed(FullAnimonText);

watch(AnimonInputText, (newVal) => {
    if (newVal && newVal.endsWith('.')) {
        ShowSubAnimon.value = true
    }
})

</script>

<style></style>