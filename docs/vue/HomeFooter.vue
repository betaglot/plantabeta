<template>
    <VSheet class="rounded-xl">
        <VContainer>
            <VRow dense
                  class="rounded-xl"
                  min-height="285">
                <VCol cols="12"
                      sm="6"
                      class="rounded-xl">
                    <v-hover v-slot="{ isHovering, props }"
                             open-delay="200">
                        <VSheet class="rounded-xl pa-4 text-center"
                                border="md"
                                height=100%
                                :class="{ 'on-hover': isHovering }"
                                :elevation="isHovering ? 24 : 6"
                                v-bind="props">
                            <div class="text-h1 my-4">🙌</div>
                            <div class="text-h3 my-4">
                                <span class="beta">PlantaBeta</span> is Free to Use!
                            </div>
                        </VSheet>

                    </v-hover>


                </VCol>
                <VCol cols="12"
                      sm="6"
                      class="rounded-xl">
                    <v-hover v-slot="{ isHovering, props }"
                             open-delay="200">
                        <VSheet class="rounded-xl pa-4 text-center"
                                border="md"
                                height=100%
                                :class="{ 'on-hover': isHovering }"
                                :elevation="isHovering ? 24 : 6"
                                v-bind="props">
                            <div class="text-h2 my-4">🛠️</div>
                            
                            <!-- Last Updated -->
                             <div class="text-h4 my-4">
                                <span class="beta">PlantaBeta</span> is under development
                            </div>
                            <div class="text-h6 my-4">
                                Last Updated on November 17, 2025
                            </div>
                        </VSheet>
                    </v-hover>
                </VCol>
            </VRow>
        </VContainer>
    </VSheet>

</template>

<script setup>

</script>

<style></style>


<!-- - icon: 🙌
    title: KlimBeta is Free to Use!
    details: Click here to learn about Open Source Projects
    link: https://opensource.com/resources/what-open-source
  - icon: 🛠️
    title:
    details: 
     -->