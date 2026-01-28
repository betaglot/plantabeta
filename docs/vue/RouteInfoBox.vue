<template>
    <VSheet class="rounded-xl border"
            border="md">
        <VContainer>
            <VRow dense
                  class="rounded-xl">
                <VCol cols="12"
                      sm="6"
                      class="rounded-xl">

                    <v-window show-arrows>
                        <template v-slot:next="{ props }">
                            <v-sheet density="compact"
                                     class="rounded-xl"
                                     @click="props.onClick">
                                ⭐
                            </v-sheet>
                        </template>
                        <template v-slot:prev="{ props }">
                            <v-sheet density="compact"
                                     class="rounded-xl"
                                     @click="props.onClick">
                                🟡
                            </v-sheet>
                        </template>
                        <v-window-item>
                            <VImg max-height="700"
                                  class="rounded-xl"
                                  :src="routePhoto" />
                        </v-window-item>
                        <v-window-item>
                            <VImg max-height="700"
                                  class="rounded-xl"
                                  :src="routeLabelled" />
                        </v-window-item>
                    </v-window>

                </VCol>
                <VCol cols="12"
                      sm="6"
                      class="rounded-xl">
                    <div class="slotContainer">
                        <slot></slot>
                    </div>
                </VCol>
            </VRow>
        </VContainer>
    </VSheet>
</template>

<script setup>

const props = defineProps(
    {
        routePhoto: String,
        routeLabelled: String
    }
)


</script>

<style>
.slotContainer {
    overflow-y: auto;
    max-height: 700px;
    display: flex;
    flex-direction: column;
}

.border {
    border-top-color: blue;
}
</style>