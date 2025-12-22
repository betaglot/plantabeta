<template>
  <h2>Elements Filter</h2>

  <v-card class="rounded-xl">
    <v-data-iterator :items="elements"
                     :items-per-page="3"
                     :search="search"
                     :filter-keys="['elementEnglishName']">
      <template v-slot:header>
        <v-toolbar class="px-4 rounded-xl">
          <v-text-field v-model="search"
                        density="comfortable"
                        placeholder="Search"
                        prepend-inner-icon="mdi-magnify"
                        style="max-width: 600px;"
                        variant="solo"
                        clearable
                        hide-details></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:default="{ items }">
        <v-container class="pa-2"
                     fluid>
          <v-row justify="center"
                 dense>
            <v-col v-for="item in items"
                   :key="item.elementEnglishName"
                   cols="auto">

              <v-card class="pb-3 border-xl border-opacity-100 rounded-xl"
                      :class="`border-${item.raw.elementFaktor.toLowerCase()}`"
                      flat
                      density="compact"
                      width="300">
                <div :class="`text-${item.raw.elementFaktor.toLowerCase()}`"
                     class="text-center text-h4">{{ item.raw.elementEnglishName }}</div>
                  <v-img :src="`/Emblem/${item.raw.elementFaktor}-Emblem.png`"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn :disabled="page === 1"
                 density="comfortable"
                 icon="mdi-arrow-left"
                 variant="tonal"
                 rounded
                 @click="prevPage"></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn :disabled="page >= pageCount"
                 density="comfortable"
                 icon="mdi-arrow-right"
                 variant="tonal"
                 rounded
                 @click="nextPage"></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>

</template>

<script setup>
import { shallowRef } from 'vue'
import CardElementInfo from './ElementPage/Card-ElementInfo.vue'


const search = shallowRef('')
const elements = [
  {
    "elementEnglishName": "Task",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Task"
    ],
    "elementAlias": [],
    "elementDescription": "a piece of work to be done",
    "elementBetanyms": [
      "tasked"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Route",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Route"
    ],
    "elementAlias": [],
    "elementDescription": "a path with a defined start and finish",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Aktion",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion"
    ],
    "elementAlias": [
      "action",
      "trick",
      "move",
      "maneuver"
    ],
    "elementDescription": "an action performed by a Klimber",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Absorb",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Absorb"
    ],
    "elementAlias": [],
    "elementDescription": "to reduce the effect of a physical force",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Adjust",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Adjust"
    ],
    "elementAlias": [],
    "elementDescription": "to change something slightly, especially to make it more correct, effective",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Allo",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Allo"
    ],
    "elementAlias": [],
    "elementDescription": "To swap hands or feet",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Ama",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Ama"
    ],
    "elementAlias": [],
    "elementDescription": "to support something physically, often by leaning it against something else",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-109_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Catch",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Catch"
    ],
    "elementAlias": [],
    "elementDescription": "to grip something while moving",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Clean",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Clean"
    ],
    "elementAlias": [],
    "elementDescription": "to remove chalk from something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Crawl",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Crawl"
    ],
    "elementAlias": [],
    "elementDescription": "to move along on hands and knees or with your body stretched out along a surface",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Drag",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Drag"
    ],
    "elementAlias": [],
    "elementDescription": "to move something by pulling it along a surface",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Drop",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Drop"
    ],
    "elementAlias": [],
    "elementDescription": "to fall or to allow something to fall",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Eval",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Eval"
    ],
    "elementAlias": [],
    "elementDescription": "the process of judging or calculating the quality, importance, amount, or value of something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Fall",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Fall"
    ],
    "elementAlias": [],
    "elementDescription": "to suddenly go down onto the ground or towards the ground without intending to or by accident",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Hinge",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Hinge"
    ],
    "elementAlias": [],
    "elementDescription": "Hinging at the hips means bending forward from the hip joint while maintaining a neutral spine",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Hook",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Hook"
    ],
    "elementAlias": [],
    "elementDescription": "something curved or bent like a hook used for catching, holding, or pulling",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Suspend",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Suspend"
    ],
    "elementAlias": [],
    "elementDescription": "to hang down from something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-103_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Insert",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Insert"
    ],
    "elementAlias": [],
    "elementDescription": "to put something inside something else",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Knot",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Knot"
    ],
    "elementAlias": [],
    "elementDescription": "a join made by tying together the ends of a piece or pieces of rope",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Kontakt",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Kontakt"
    ],
    "elementAlias": [],
    "elementDescription": "to touch something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-119_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Lift",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Lift"
    ],
    "elementAlias": [],
    "elementDescription": "to move something from a lower to a higher position",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-105_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Kryos",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Kryos"
    ],
    "elementAlias": [
      "Lock",
      "Lock off",
      "Freeze",
      "Maintain",
      "Keep",
      "Steadicam"
    ],
    "elementDescription": "to freeze the Degrees of Freedom of a particular joint",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-113_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Onda",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Onda"
    ],
    "elementAlias": [
      "Swing",
      "wave"
    ],
    "elementDescription": "a movement back and forth or in a curve from a fixed point",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-108_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Orbit",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Orbit"
    ],
    "elementAlias": [
      "Revolve"
    ],
    "elementDescription": "to move or cause something to move in a circular or curving path around a central point or line",
    "elementBetanyms": [
      "orbit",
      "orbital",
      "orbiting",
      "orbits"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Pop",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Pop"
    ],
    "elementAlias": [],
    "elementDescription": "the rapid contraction and release of muscles, producing rhythmic and precise movements",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Pull",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tasks",
      "Aktions",
      "Pull"
    ],
    "elementAlias": [],
    "elementDescription": "to move something towards yourself",
    "elementBetanyms": [
      "pull",
      "pull up"
    ],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-122_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Push",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tasks",
      "Aktions",
      "Push"
    ],
    "elementAlias": [],
    "elementDescription": "to move something into a different position, usually one that is further away from you",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Preserve",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Preserve"
    ],
    "elementAlias": [],
    "elementDescription": "to keep something as it is, especially in order to prevent it from decaying or being damaged or destroyed",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Reach",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Reach"
    ],
    "elementAlias": [],
    "elementDescription": "to stretch out your arm or leg to get or touch something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-081_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Rip",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Rip"
    ],
    "elementAlias": [],
    "elementDescription": "to pull apart; to tear or be torn",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Pendulate",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Pendulate"
    ],
    "elementAlias": [],
    "elementDescription": "to move like a Pendulum",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-121_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Slot",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Slot"
    ],
    "elementAlias": [],
    "elementDescription": "to put something into a narrow hole or opening",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Stack",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Stack"
    ],
    "elementAlias": [],
    "elementDescription": "things arranged one on top of another",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Stall",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Stall"
    ],
    "elementAlias": [],
    "elementDescription": "to stop suddenly",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Tangent",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Tangent"
    ],
    "elementAlias": [],
    "elementDescription": "A tangent is also a line that touches a curve or solid at a particular point",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Swap",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Swap"
    ],
    "elementAlias": [],
    "elementDescription": "exchanging one Kontakt for another Kontakt, usually exchanging to another limb, but you can swap within limbs such as from [Kontakt|Knee] to [Kontakt|Foot]",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-096_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Toggle",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Toggle"
    ],
    "elementAlias": [
      "Rock over",
      "Rock up"
    ],
    "elementDescription": "a linkage system (bars connected by pivots) that converts small input motion into large output force or creates a strong locking action, often using an over-center principle where resistance peaks at the center, snapping the mechanism into a locked end position, ideal for clamps, presses, and switches. It works by amplifying force as links align, making them very strong when locked but requiring significant force to move them through the locked-straight position",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Transport",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Transport"
    ],
    "elementAlias": [],
    "elementDescription": "to bring a tool from one place to another without using it",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Roll",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Roll"
    ],
    "elementAlias": [],
    "elementDescription": "rolling motion, a combination of rotation and translation, like a wheel moving without slipping",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-107_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Whip",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Whip"
    ],
    "elementAlias": [],
    "elementDescription": "to move like a whip",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Wrap",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Aktion",
      "Wrap"
    ],
    "elementAlias": [],
    "elementDescription": "to put a body part around something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Difficulty",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Difficulty"
    ],
    "elementAlias": [],
    "elementDescription": "the state or quality of being hard to do, understand, or deal with, encompassing problems, obstacles, lack of ease, or a challenging nature, often measured as a level of complexity requiring significant effort or skill to overcome",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Competition",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Competition"
    ],
    "elementAlias": [],
    "elementDescription": "a situation in which someone is trying to win something or be more successful than someone else",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Strategy",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Strategy"
    ],
    "elementAlias": [],
    "elementDescription": "a detailed plan for achieving success in situations",
    "elementBetanyms": [
      "strategic",
      "strategic risk",
      "strategically",
      "strategically risky",
      "strategy"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Tactic",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tactic"
    ],
    "elementAlias": [],
    "elementDescription": "a specific action intended to get a particular result",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Tool",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool"
    ],
    "elementAlias": [],
    "elementDescription": "an object that helps you to do a particular activity",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Fall Protection",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "FallProtection"
    ],
    "elementAlias": [],
    "elementDescription": "an object or device which prevents a klimber from becoming injured from the impact of a fall",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Crashpad",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tools",
      "FallProtection",
      "Crashpad"
    ],
    "elementAlias": [],
    "elementDescription": "a movable thick piece of shock-absorbing material",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "GriGri",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tools",
      "FallProtection",
      "GriGri"
    ],
    "elementAlias": [],
    "elementDescription": "an assisted braking belay device manufactured by Petzl",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Matting",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tools",
      "FallProtection",
      "Matting"
    ],
    "elementAlias": [],
    "elementDescription": "a shock-absorbing material which extends along the floor away from the wall at least 2 meters",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-080_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Quickdraw",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tools",
      "FallProtection",
      "Quickdraw"
    ],
    "elementAlias": [],
    "elementDescription": "two carabiners linked by a short, sewn sling, used to connect a klimber's rope to bolts or anchors on a route, reducing friction and allowing the rope to run smoothly for safer leading. One carabiner clips to the bolt, while the other clips to the rope",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Top Rope",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tools",
      "FallProtection",
      "TopRope"
    ],
    "elementAlias": [],
    "elementDescription": "a klimber is protected by a rope that runs from a belayer on the ground, up through a fixed anchor at the top of the route, and back down to the klimber",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Chalk",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tools",
      "KontaktTools",
      "Chalk"
    ],
    "elementAlias": [],
    "elementDescription": "a powder used by climbers to absorb sweat and moisture from their hands",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Chalkbag",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tools",
      "KontaktTools",
      "Chalkbag"
    ],
    "elementAlias": [],
    "elementDescription": "a small pouch, worn on a climber's waist or harness, that holds climbing chalk",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Kontakt Tool",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tools",
      "KontaktTool"
    ],
    "elementAlias": [],
    "elementDescription": "a tool used to Kontakt a site",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Rope",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "FallProtection",
      "Rope"
    ],
    "elementAlias": [],
    "elementDescription": "a strong, thick cord of strands (such as natural or synthetic fibers, or wire) that are twisted or braided together into a larger and stronger form",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Carabiner",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "FallProtection",
      "Carabiner"
    ],
    "elementAlias": [
      "Karabiner"
    ],
    "elementDescription": "an object used for attaching two things, for example by a Klimber for attaching a rope to a harness. It is oval or like a letter D in shape, with a part that opens and closes",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Harness",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "FallProtection",
      "Harness"
    ],
    "elementAlias": [],
    "elementDescription": "a piece of equipment with straps and belts, used to control or hold in place a person",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Helmet",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "FallProtection",
      "Helmet"
    ],
    "elementAlias": [],
    "elementDescription": "a strong, hard hat that covers and protects the head",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Cam",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "FallProtection",
      "Cam"
    ],
    "elementAlias": [],
    "elementDescription": " a spring-loaded camming device, is a piece of active protection equipment used to create temporary anchor points",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Anchor",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "FallProtection",
      "Anchor"
    ],
    "elementAlias": [],
    "elementDescription": "any device or system of devices used to securely attach a klimber, rope, or load to a fixed position",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Sling",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "FallProtection",
      "Sling"
    ],
    "elementAlias": [],
    "elementDescription": "a tied or sewn loop of webbing or cord",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Shoe",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "KontaktTool",
      "Shoe"
    ],
    "elementAlias": [],
    "elementDescription": "one of a pair of coverings for your feet, usually made of a strong material such as leather, with a thick leather or plastic sole and usually a heel",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Kneepad",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "KontaktTool",
      "Kneepad"
    ],
    "elementAlias": [],
    "elementDescription": "artificial pad that is worn on the lower thigh to protect a Klimber when performing a kneebar",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Glove",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "KontaktTool",
      "Glove"
    ],
    "elementAlias": [],
    "elementDescription": "a piece of clothing that is worn on the hand and wrist for warmth or protection, with separate parts for each finger",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Piolet",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "KontaktTool",
      "Axe"
    ],
    "elementAlias": [
      "ice tool",
      "technical axe",
      "ice axe"
    ],
    "elementDescription": "a tool consisting of a shaft with a metal head that combines a pick and an adze",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Clothing",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "Clothing"
    ],
    "elementAlias": [],
    "elementDescription": "things you wear to cover your body",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Kit",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Tool",
      "Kit"
    ],
    "elementAlias": [],
    "elementDescription": "a bag used to transport tools",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Performance",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Performance"
    ],
    "elementAlias": [],
    "elementDescription": "the act of doing something",
    "elementBetanyms": [
      "perform",
      "perform a new",
      "perform a new exercise",
      "perform a new trick",
      "perform the task",
      "performance",
      "performance anxiety",
      "performance coaching",
      "performance curve",
      "performance development",
      "performance field",
      "performance plateau",
      "performance sport coaching",
      "performance sports",
      "performatory",
      "performant",
      "performed",
      "performer",
      "performing",
      "performs"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Effectiveness",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Performance",
      "Effectiveness"
    ],
    "elementAlias": [],
    "elementDescription": "successful or achieving the results that you want",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Efficiency",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Performance",
      "Efficiency"
    ],
    "elementAlias": [],
    "elementDescription": "the quality of achieving the largest amount of useful work using as little energy, fuel, effort, etc. as possible",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Error",
    "elementFaktor": "Labor",
    "elementIcon": "⭐",
    "elementEmblem": "",
    "elementID": "",
    "elementTaxonomy": [
      "Labor",
      "Performance",
      "Error"
    ],
    "elementAlias": [],
    "elementDescription": "something performed that is not correct, not accurate, or does not give the right result",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-096_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Anatomy",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy"
    ],
    "elementAlias": [],
    "elementDescription": "the scientific study of the body and how its parts are arranged",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Body",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Body"
    ],
    "elementAlias": [],
    "elementDescription": "the whole physical structure that forms a person or animal",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Spine",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Body",
      "Spine"
    ],
    "elementAlias": [],
    "elementDescription": "the line of bones down the centre of the back that provides support for the body and protects the spinal cord",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Ribs",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Body",
      "Ribs"
    ],
    "elementAlias": [],
    "elementDescription": "a set of bones that curve around from your back to your chest",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Head",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Head"
    ],
    "elementAlias": [],
    "elementDescription": "the part of the body above the neck where the eyes, nose, mouth, ears, and brain are",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Cranium",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Head",
      "Cranium"
    ],
    "elementAlias": [],
    "elementDescription": "the hard bone case that gives an animal's or a human's head its shape and protects the brain",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Ear",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Head",
      "Ear"
    ],
    "elementAlias": [],
    "elementDescription": "either of the two organs, one on each side of the head, by which people or animals hear sounds, or the piece of skin and tissue outside the head connected to this organ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Face",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Head",
      "Face"
    ],
    "elementAlias": [],
    "elementDescription": "the front of the head, where the eyes, nose, and mouth are",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Neck",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Head",
      "Neck"
    ],
    "elementAlias": [],
    "elementDescription": "the part of the body that joins the head to the shoulders",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Arm",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm"
    ],
    "elementAlias": [],
    "elementDescription": "either of the two long parts of the upper body that are attached to the shoulders and have the hands at the end",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Scapula",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Scapula"
    ],
    "elementAlias": [],
    "elementDescription": "a large, flat bone on each side of your back below your shoulder that helps to increase the range of movement of your arm",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Humerus",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Humerus"
    ],
    "elementAlias": [],
    "elementDescription": "the long bone in the upper half of your arm, between your shoulder and your elbow",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Forearm",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Forearm"
    ],
    "elementAlias": [],
    "elementDescription": "the lower part of the arm, between the wrist and the elbow ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Hand",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Hand"
    ],
    "elementAlias": [],
    "elementDescription": "the part of the body at the end of the arm that is used for holding, moving, touching, and feeling things",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Thumb",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Hand",
      "Thumb"
    ],
    "elementAlias": [],
    "elementDescription": "the short, thick finger on the side of your hand that makes it possible to hold and pick things up easily",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Index Finger",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Hand",
      "IndexFinger"
    ],
    "elementAlias": [],
    "elementDescription": "the finger next to the thumb",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Middle Finger",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Hand",
      "MiddleFinger"
    ],
    "elementAlias": [],
    "elementDescription": "the longest finger on the hand",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Ring Finger",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Hand",
      "RingFinger"
    ],
    "elementAlias": [],
    "elementDescription": "the longest finger on the hand",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Pinky Finger",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Arm",
      "Hand",
      "PinkyFinger"
    ],
    "elementAlias": [
      "little finger"
    ],
    "elementDescription": "the smallest finger on each hand",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Leg",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Leg"
    ],
    "elementAlias": [],
    "elementDescription": "one of the parts of the body of a human or animal that is used for standing or walking",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Hips",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Leg",
      "Hips"
    ],
    "elementAlias": [],
    "elementDescription": "the area below the waist and above the legs at either side of the body, or the joint that connects the leg to the upper part of the body",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Femur",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Leg",
      "Femur"
    ],
    "elementAlias": [
      "thighbone"
    ],
    "elementDescription": "the long bone in the upper part of the leg",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Tibia",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Leg",
      "Tibia"
    ],
    "elementAlias": [
      "shin",
      "shinbone"
    ],
    "elementDescription": "the large bone at the front of the lower leg",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Foot",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Anatomy",
      "Leg",
      "Foot"
    ],
    "elementAlias": [],
    "elementDescription": "the part of the body at the bottom of the leg on which a person or animal stands",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Physiology",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Physiology"
    ],
    "elementAlias": [],
    "elementDescription": "the scientific study of the way in which the bodies of animals work",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Endurance",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Physiology",
      "Endurance"
    ],
    "elementAlias": [],
    "elementDescription": "used to describe sports or activities that demand the ability to make a lot of physical effort over a long period of time",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Suppleness",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Physiology",
      "Suppleness"
    ],
    "elementAlias": [
      "flexibility",
      "limberness"
    ],
    "elementDescription": "the quality of being able to bend easily or be bent easily",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Strength",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Physiology",
      "Strength"
    ],
    "elementAlias": [],
    "elementDescription": "the degree to which something is strong or powerful",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Injury Prevention",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Physiology",
      "InjuryPrevention"
    ],
    "elementAlias": [],
    "elementDescription": "physical harm or damage to someone's body caused by an accident",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Nutrition",
    "elementFaktor": "Soma",
    "elementIcon": "🔷",
    "elementID": "",
    "elementTaxonomy": [
      "Soma",
      "Nutrition"
    ],
    "elementAlias": [],
    "elementDescription": "the substances that you take into your body as food and the way that they influence your health and athletic performance",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Gym",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Edifice",
      "Gym"
    ],
    "elementAlias": [],
    "elementDescription": "an indoor facility with artificial walls featuring textured panels and plasts, designed for rock climbing, bouldering, and training in a safe, controlled environment",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Sediment",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Lithosphere",
      "Sediment"
    ],
    "elementAlias": [],
    "elementDescription": "solid material, such as dirt or minerals, that falls to the bottom of a liquid",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Material",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Material"
    ],
    "elementAlias": [],
    "elementDescription": "solid material, such as dirt or minerals, that falls to the bottom of a liquid",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Site Material",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "Ekos,SiteMaterial",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "the material of a Site",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Natural",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural"
    ],
    "elementAlias": [],
    "elementDescription": "as found in nature and not involving anything made or done by people",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Lithosphere",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Lithosphere"
    ],
    "elementAlias": [],
    "elementDescription": "the solid outer layer of a planet",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Hydrosphere",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Hydrosphere"
    ],
    "elementAlias": [],
    "elementDescription": "all of the water, ice, and water vapor at or near the surface of a planet",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Ice",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Hydrosphere",
      "Ice"
    ],
    "elementAlias": [],
    "elementDescription": "frozen water",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Water",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Hydrosphere",
      "Water"
    ],
    "elementAlias": [],
    "elementDescription": "a clear liquid, without color or taste, that falls from the sky as rain",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Snow",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Hydrosphere",
      "Snow"
    ],
    "elementAlias": [],
    "elementDescription": "the small, soft, white pieces of ice that sometimes fall from the sky when it is cold, or the white layer on the ground and other surfaces that it forms",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Rain",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Hydrosphere",
      "Rain"
    ],
    "elementAlias": [],
    "elementDescription": "drops of water from clouds",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Plant",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Plant"
    ],
    "elementAlias": [],
    "elementDescription": "a living thing that grows in earth, in water, or on other plants, usually has a stem, leaves, roots, and flowers, and produces seeds",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Bush",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Plant",
      "Bush"
    ],
    "elementAlias": [],
    "elementDescription": "a plant with many small branches growing either directly from the ground or from a hard stem, giving the plant a rounded shape",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Grass",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Plant",
      "Grass"
    ],
    "elementAlias": [],
    "elementDescription": "a low, green plant that grows naturally over a lot of the earth's surface, having groups of very thin leaves that grow close together in large numbers",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Moss",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Plant",
      "Moss"
    ],
    "elementAlias": [],
    "elementDescription": "a very small, green or yellow plant that grows especially in wet earth or on rocks, walls, and tree trunks",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Tree",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Natural",
      "Plant",
      "Tree"
    ],
    "elementAlias": [],
    "elementDescription": "a tall plant that has a wooden trunk and branches that grow from its upper part",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Rock",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Lithosphere",
      "Rock"
    ],
    "elementAlias": [],
    "elementDescription": "the dry solid part of the earth's surface, or any large piece of this that sticks up out of the ground",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Granite",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Lithosphere",
      "Rock",
      "Granite"
    ],
    "elementAlias": [],
    "elementDescription": "is a coarse-grained, intrusive igneous rock composed primarily of quartz and feldspars. ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Limestone",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Lithosphere",
      "Rock",
      "Limestone"
    ],
    "elementAlias": [],
    "elementDescription": "a sedimentary rock consisting predominantly of calcium carbonate, primarily in the form of the mineral calcite or aragonite. It is defined geologically as a rock containing at least 50% calcium carbonate. ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Sandstone",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Lithosphere",
      "Rock",
      "Sandstone"
    ],
    "elementAlias": [],
    "elementDescription": "a clastic sedimentary rock composed primarily of sand-sized mineral or rock grains (specifically, particles between 0.0625 mm and 2 mm in diameter) that have been naturally cemented together",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Basalt",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Lithosphere",
      "Rock",
      "Basalt"
    ],
    "elementAlias": [],
    "elementDescription": "a dark-colored, fine-grained, extrusive igneous rock that forms from the rapid cooling of magnesium-rich and iron-rich (mafic) lava at or very near a planet's surface. It is the most common volcanic rock type on Earth, making up most of the oceanic crust",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Artificial",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Artificial"
    ],
    "elementAlias": [],
    "elementDescription": "made by people, often as a copy of something natural",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Plast",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Artificial",
      "Plast"
    ],
    "elementAlias": [
      "climbing hold",
      "rock",
      "hold",
      "macro",
      "macro hold",
      "grip"
    ],
    "elementDescription": "an artificial object fixed to walls which have sites for Kontakt Aktions",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Volume",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Artificial",
      "Volume"
    ],
    "elementAlias": [],
    "elementDescription": "a large plast which can support other plasts, usually made of wood",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Wall",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Artificial",
      "Wall"
    ],
    "elementAlias": [],
    "elementDescription": "an artificial wall with places to attach plasts using TNuts and bolts, or screws",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "T-Nut",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "SiteMaterial",
      "Artificial",
      "Wall",
      "TNut"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Environment",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment"
    ],
    "elementAlias": [],
    "elementDescription": "the conditions that you perform in and the way that they influence how you feel or how effectively you can perform",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Atmosphere",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Atmosphere"
    ],
    "elementAlias": [],
    "elementDescription": "a mixture of gases that surrounds Earth",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Air Temperature",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Atmosphere",
      "AirTemperature"
    ],
    "elementAlias": [],
    "elementDescription": "a measure of how hot or cold the atmosphere is, which is determined by the average thermal energy of air molecules",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Humidity",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Atmosphere",
      "Humidity"
    ],
    "elementAlias": [],
    "elementDescription": " containing extremely small drops of water in the air",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Smoke",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Atmosphere",
      "Smoke"
    ],
    "elementAlias": [],
    "elementDescription": "the grey, black, or white mixture of gas and very small pieces of carbon that is produced when something burns",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Animal",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Biosphere",
      "Animal"
    ],
    "elementAlias": [],
    "elementDescription": "anything that lives and moves, including people, birds, etc.",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Bird",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Biosphere",
      "Animal",
      "Bird"
    ],
    "elementAlias": [],
    "elementDescription": "a creature with feathers and wings, usually able to fly",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Insect",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Biosphere",
      "Animal",
      "Insect"
    ],
    "elementAlias": [],
    "elementDescription": "a type of very small animal with six legs, a body divided into three parts and usually two pairs of wings",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Fungi",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Biosphere",
      "Fungi"
    ],
    "elementAlias": [],
    "elementDescription": "any of various types of organisms that get their food from decaying material or other living things",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Biosphere",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Biosphere"
    ],
    "elementAlias": [],
    "elementDescription": "any of various types of organisms that get their food from decaying material or other living things",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Wind",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Atmosphere",
      "Wind"
    ],
    "elementAlias": [],
    "elementDescription": "a current of air moving approximately horizontally, especially one strong enough to be felt",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Edifice",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "a large building",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Crag",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Environment",
      "Crag"
    ],
    "elementAlias": [],
    "elementDescription": "a high, rough mass of rock that sticks out from the land around it",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Surface",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Surface"
    ],
    "elementAlias": [],
    "elementDescription": "the outer or top part or layer of something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Texture",
    "elementFaktor": "Ekos",
    "elementIcon": "🟩",
    "elementID": "",
    "elementTaxonomy": [
      "Ekos",
      "Surface",
      "Texture"
    ],
    "elementAlias": [],
    "elementDescription": "the quality of something that can be decided by touch",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Angle",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "Via,Geometry,Angle",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [
      "angle",
      "angle of approach",
      "angular",
      "angular displacement",
      "oblique angle",
      "obtuse angle",
      "right angle",
      "square angle",
      "acute angle"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Abduction",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "Via,Geometry,Direction,Abduction",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "the movement of a part of the body away from the central part of the body or from another body part",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Adduction",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Direction",
      "Adduction"
    ],
    "elementAlias": [],
    "elementDescription": "the movement of a body part toward the midline of the body or the midline of a limb. This motion primarily occurs within the coronal (frontal) plane. ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-121_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Extension",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Direction",
      "Extension"
    ],
    "elementAlias": [],
    "elementDescription": "a movement that increases the angle between two bones at a joint, or the act of straightening a limb",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Flexion",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Direction",
      "Flexion"
    ],
    "elementAlias": [],
    "elementDescription": "a movement that decreases the angle between two bones at a joint, or the act of bending a limb",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Perimeter Line",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Line",
      "PerimeterLine"
    ],
    "elementAlias": [],
    "elementDescription": "the outer edge of an area of land or the border around it",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Straight Line",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Line",
      "StraightLine"
    ],
    "elementAlias": [],
    "elementDescription": "moving or placed in a position that continues in one direction without bending or curving",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Position",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Position"
    ],
    "elementAlias": [],
    "elementDescription": "an object's location relative to a reference point (origin) using coordinates, distances, and directions",
    "elementBetanyms": [
      "Position",
      "position for",
      "upright position",
      "compromised position",
      "reposition",
      "from this position",
      "optimal position",
      "malpositioned",
      "position in order to",
      "position in space",
      "position of"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Circuit Passage",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Affordance",
      "Passage",
      "CircuitPassage"
    ],
    "elementAlias": [],
    "elementDescription": "a path which start and finishes in the same position",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Boustro Passage",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Affordance",
      "Passage",
      "BoustroPassage"
    ],
    "elementAlias": [],
    "elementDescription": "is a style of writing in which alternate lines of writing are reversed, with letters also written in reverse, mirror-style",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Circumvent Passage",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Affordance",
      "Passage",
      "CircumventPath"
    ],
    "elementAlias": [],
    "elementDescription": "to avoid something by going around it",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Geometry",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry"
    ],
    "elementAlias": [],
    "elementDescription": "the area of mathematics relating to the study of space and the relationships between points, lines, curves, and surfaces",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Density",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Density"
    ],
    "elementAlias": [
      "denseness"
    ],
    "elementDescription": "the number of people or things in a place in relation to the size of the place",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Direction",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Direction"
    ],
    "elementAlias": [],
    "elementDescription": "the position towards which someone or something moves",
    "elementBetanyms": [
      "opposite direction",
      "other direction",
      "in a circle each direction",
      "particular direction",
      "parallel direction",
      "unidirectional",
      "cardinal",
      "cardinal directions",
      "Direction",
      "Direction of loading",
      "in either direction",
      "directionless",
      "bidirectional",
      "while the rear half rotates in the opposite direction",
      "without direction",
      "rotation in the backwards direction",
      "specific direction",
      "omnidirectional"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Absolute Direction",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Direction",
      "AbsoluteDirection"
    ],
    "elementAlias": [
      "Cardinal Direction",
      "compass directions"
    ],
    "elementDescription": "one of the four main points of the compass: north, south, east, and west",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Relative Direction",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Direction",
      "RelativeDirection"
    ],
    "elementAlias": [],
    "elementDescription": "describes location or orientation based on your own body or a nearby object, using terms like left, right, forward, backward, up, and down, as opposed to fixed compass points (north, south) which are absolute directions",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Displacement",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Displacement"
    ],
    "elementAlias": [],
    "elementDescription": "the change in an object's position",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Distance",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Distance"
    ],
    "elementAlias": [],
    "elementDescription": "the total length of the actual path traveled by an object during its motion, irrespective of the direction of travel",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Div",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Div"
    ],
    "elementAlias": [
      "division",
      "section",
      "zone",
      "area"
    ],
    "elementDescription": "the div element serves as a versatile container for other KlimBeta elements. It doesn't inherently convey any semantic meaning about its content",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Line",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Line"
    ],
    "elementAlias": [],
    "elementDescription": "a long, thin mark on the surface of something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Spiral Line",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Line",
      "SpiralLine"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Morfos",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Morfos"
    ],
    "elementAlias": [
      "morphology",
      "form"
    ],
    "elementDescription": "the structure and form of animals and plants",
    "elementBetanyms": [
      "forming",
      "formless",
      "morph",
      "morphology",
      "morphologies"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Orientation",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Orientation"
    ],
    "elementAlias": [],
    "elementDescription": "the position of something in relation to its surroundings",
    "elementBetanyms": [
      "orientation"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Point",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Point"
    ],
    "elementAlias": [],
    "elementDescription": "a fundamental, zero-dimensional object representing a precise location in space, having no size, length, or width, only position",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Center Point",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Point",
      "Center"
    ],
    "elementAlias": [
      "central point",
      "centre point"
    ],
    "elementDescription": "",
    "elementBetanyms": [
      "centrality",
      "centralized",
      "centration",
      "centre",
      "centric"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Reference Point",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Point",
      "Reference"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Reflection Point",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Point",
      "Reflection Point"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Target Point",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Point",
      "TargetPoint"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Mid Point",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Point",
      "Mid"
    ],
    "elementAlias": [
      "middle point",
      "halfway point",
      "halfway in between"
    ],
    "elementDescription": "a fundamental, zero-dimensional object representing a precise location in space, having no size, length, or width, only position",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Vertex",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Point",
      "Vertex"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Shape",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Shape"
    ],
    "elementAlias": [],
    "elementDescription": "outline of an object. Shapes are closed by an outline or boundary, which is made up of points, lines and curves",
    "elementBetanyms": [
      "shape",
      "shaped",
      "shaped by",
      "shapeless",
      "shaping"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Logic",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Logic"
    ],
    "elementAlias": [],
    "elementDescription": "the rigorous study of valid reasoning and inference, using abstract symbols and precise rules to analyze the structure of arguments, independent of content, to determine if conclusions necessarily follow from premises. It provides the foundation for mathematical proofs, ensuring that steps taken in reasoning are deductively sound, essentially formalizing thought processes into mechanical systems. ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Probability",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability"
    ],
    "elementAlias": [],
    "elementDescription": "the level of possibility of something happening or being true",
    "elementBetanyms": [
      "less likely",
      "likely to be",
      "many times more likely to",
      "more likely to",
      "most likely",
      "makes it possible",
      "predictable",
      "predictably",
      "might",
      "might also",
      "might be a sign that",
      "might cause",
      "might lead to",
      "might lead you to",
      "predictive",
      "probabilistic",
      "probabilities",
      "probably",
      "unlikely they could",
      "possibilities",
      "possible",
      "possible from impossible",
      "possibly around",
      "unpredictable",
      "likely to use",
      "unpredictable ranges",
      "improbable",
      "impossible",
      "unpredictably"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Affordance",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Affordance"
    ],
    "elementAlias": [
      "action possibilities"
    ],
    "elementDescription": "a use or purpose that a thing can have, that people notice as part of the way they see or experience it",
    "elementBetanyms": [
      "trainable",
      "reliable",
      "suitable",
      "given",
      "given a chance",
      "given line",
      "given only",
      "given point",
      "given shape",
      "offer",
      "offer a more",
      "offer to",
      "offered only a limited",
      "offering",
      "offering structured",
      "coachability",
      "suited",
      "susceptible",
      "more adaptable",
      "tolerable",
      "incapable",
      "most capable",
      "observable",
      "more capable at",
      "no longer available",
      "knowable",
      "manageable",
      "multi-applicable",
      "more variable",
      "more approachable",
      "measurable",
      "incapacity",
      "inevitable",
      "inhabitable",
      "memorable",
      "to be able to",
      "inseparable",
      "sustainable",
      "tenable",
      "sustainably",
      "suited to",
      "scalable",
      "that enables",
      "readable",
      "skateable",
      "skiable",
      "perceivable",
      "reasonable",
      "potent",
      "perfectly capable",
      "repeatable",
      "potent basis for",
      "potential",
      "potential alternatives",
      "potential for",
      "potential opportunities",
      "potential to",
      "potentially",
      "potentiate",
      "will",
      "able to",
      "able to handle",
      "accountable",
      "doable",
      "enable",
      "graspable",
      "enables",
      "frequently not able to",
      "enabling",
      "enabling full",
      "conceivable",
      "coachable",
      "bearable",
      "attainable",
      "achievable",
      "able to use",
      "adaptable",
      "would",
      "transferable",
      "unobtainable",
      "available",
      "available to",
      "unreasonable",
      "viable",
      "unforeseeable",
      "unreliable",
      "vulnerable",
      "walkable",
      "wasn't able to",
      "variable",
      "untenable",
      "unrepeatable",
      "undroppable",
      "transferable to",
      "would also",
      "uncontrollable",
      "would as if",
      "would certainly",
      "wouldn't",
      "will adapt",
      "will always",
      "will depend on",
      "will eventually",
      "will not",
      "will only",
      "will sometimes",
      "will tend to",
      "will ultimately",
      "will ultimately give a greater",
      "abilities",
      "abilities into",
      "usable",
      "usable cue",
      "usage",
      "utility",
      "utilize",
      "use",
      "use of",
      "use of obstacles",
      "use similar approaches",
      "used",
      "used as",
      "used by",
      "used for",
      "used in",
      "used to",
      "useful",
      "useful despite",
      "useful for",
      "useful model",
      "usefulness",
      "useless",
      "uselessness",
      "using",
      "using closed",
      "using open",
      "using the means of",
      "ability",
      "ability of",
      "ability to",
      "afford",
      "combinatory ability",
      "affordable",
      "coupling ability",
      "affordance",
      "falsifiability",
      "accountability for",
      "adaptability",
      "inability",
      "liability",
      "ability to adjust",
      "ability to function as a whole rather than isolated segments",
      "ability to read",
      "readability",
      "trainability",
      "unpredictability",
      "variability",
      "requires adaptability",
      "reliability",
      "spatial orientation ability",
      "predictability",
      "affordances for",
      "portability",
      "affords",
      "allowing for",
      "allowing little room for",
      "allows",
      "allows for",
      "limited without the ability",
      "allows for a greater range of",
      "allows simple yet",
      "allows the two sides of",
      "can",
      "can add",
      "can bypass",
      "can cause",
      "can ensure",
      "can fit through",
      "can foster",
      "can handle",
      "can if",
      "can insert into",
      "can lead to",
      "can only foster",
      "can open",
      "can originate from",
      "can originate in",
      "can provide",
      "can spread in relationships",
      "can still",
      "can't",
      "can't fit",
      "can't fully",
      "cannot",
      "capability",
      "capable of",
      "capable to",
      "capacious",
      "capacity"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Site",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Affordance",
      "Site"
    ],
    "elementAlias": [],
    "elementDescription": "a surface which affords a Kontakt",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Passage",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Affordance",
      "Passage"
    ],
    "elementAlias": [
      "trajectory",
      "path"
    ],
    "elementDescription": "the specific continuous sequence of positions in space (or spacetime) that an object or system occupies as it moves from an initial state to a final state",
    "elementBetanyms": [
      "pass",
      "pass by",
      "passed",
      "passing",
      "Path",
      "path of least resistance",
      "path taken",
      "pathway",
      "pathways often limit"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Perimeter Passage",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Affordance",
      "Passage",
      "PerimeterPassage"
    ],
    "elementAlias": [
      "trajectory",
      "path"
    ],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Constraint",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Constraint"
    ],
    "elementAlias": [
      "constraints",
      "constrains",
      "constraining",
      "constrained"
    ],
    "elementDescription": "something that controls what you do by keeping you within particular limits",
    "elementBetanyms": [
      "spatial constraints",
      "break free",
      "restricts free",
      "reduce the degrees of freedom",
      "Degrees Of Freedom",
      "degrees of freedom in relation to",
      "physical constraints",
      "restrict",
      "free",
      "delimit",
      "delimiter",
      "unlimited",
      "not limited to",
      "including but not limited to",
      "free range",
      "free to",
      "freedom",
      "freedom to",
      "constraining",
      "constraint",
      "interacting constraints",
      "less constrained",
      "constraints led approach",
      "limit",
      "limitation",
      "limited",
      "limited amount",
      "limited by",
      "limited capacity",
      "limited options",
      "limited potential",
      "limited to",
      "limited with",
      "limited without",
      "limiters",
      "limiting",
      "limiting factor",
      "limitless",
      "limits"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Degrees Of Freedom",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Constraint",
      "DegreesOfFreedom"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Fortuna",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Fortuna"
    ],
    "elementAlias": [
      "chance",
      "luck",
      "fortune",
      "fortunate",
      "unfortunate"
    ],
    "elementDescription": "chance and the way it affects your life",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Frequency",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Probability",
      "Frequency"
    ],
    "elementAlias": [],
    "elementDescription": "the number of instances something happens within a particular period",
    "elementBetanyms": [
      "extremely rare",
      "exceedingly rare",
      "much more often",
      "much more often than",
      "often",
      "often at the root of",
      "too often no match for",
      "while often",
      "also often",
      "can often lead to",
      "often at the root of some",
      "often leads to",
      "often less",
      "often more",
      "often on",
      "often shape",
      "often use",
      "on average",
      "often used with"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Propositional Logic",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "a formal system that studies how to combine simple declarative statements (propositions, which are either true or false) using logical connectives (like AND, OR, NOT, IF...THEN) to form complex statements, analyzing the truth and validity of these compound statements and the logical relationships between them, without delving into the internal structure of the propositions themselves. It provides a framework for constructing valid arguments and understanding truth conditions in mathematics, philosophy, and computer science",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Conditional Logic",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "a fundamental concept used to control the flow of a program based on whether certain conditions are met. It allows for decision-making within algorithms by executing different blocks of code depending on the evaluation of a Boolean expression (which is either true or false)",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Contingency",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Logic",
      "ConditionalLogic",
      "Contingency"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Consequence",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "the result or effect of an action, decision, or event. It refers to something that follows logically from a preceding occurrence.",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Convex",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "curved or swelling out",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Zigzag Line",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "a line or pattern that looks like a Z or a row of Zs joined together",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Concave",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "curving in",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Transformation",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Transformation"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Dilation",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Transformation",
      "Dilation"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Reflection",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Transformation",
      "Reflection"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Rotation",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Transformation",
      "Rotation"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [
      "axes of rotation",
      "axis of rotation",
      "center of rotation",
      "degrees of rotation",
      "of rotations",
      "primary rotation on the horizontal axis",
      "counterrotation",
      "rotational",
      "rotational equivalent",
      "rotary",
      "rotate",
      "rotating"
    ],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Translation",
    "elementFaktor": "Via",
    "elementIcon": "🔻",
    "elementID": "",
    "elementTaxonomy": [
      "Via",
      "Geometry",
      "Transformation",
      "Translation"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Elastic Energy",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Energy",
      "ElasticEnergy"
    ],
    "elementAlias": [],
    "elementDescription": "the energy stored in an object when it's temporarily deformed (stretched, compressed, or twisted) by an external force, allowing it to return to its original shape and release that energy",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Potential Energy",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Energy",
      "PotentialEnergy"
    ],
    "elementAlias": [],
    "elementDescription": "stored energy an object has due to its position, configuration, or state",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Normal Force",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Forces",
      "NormalForce"
    ],
    "elementAlias": [],
    "elementDescription": "the support force a surface exerts on an object touching it, acting perpendicular (at a 90° angle) to the surface to prevent the object from passing through",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Projectile Motion",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "ProjectileMotion"
    ],
    "elementAlias": [],
    "elementDescription": "the movement of an object under the influence of gravity alone, following a curved path called a trajectory",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Ritmo",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Time",
      "Ritmo"
    ],
    "elementAlias": [
      "Rhythm"
    ],
    "elementDescription": "a regularly repeated pattern of sounds or beats used in music, poems, and dances",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Syncopation",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Time",
      "Syncopation"
    ],
    "elementAlias": [],
    "elementDescription": "a type of musical rhythm in which strong notes are not on the beat",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Tempo",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Time",
      "Tempo"
    ],
    "elementAlias": [],
    "elementDescription": "the speed at which an event happens",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Dynamics",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics"
    ],
    "elementAlias": [],
    "elementDescription": "the branch of physics that studies how forces affect the motion of objects",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-120_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Force",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Force"
    ],
    "elementAlias": [],
    "elementDescription": "an interaction that causes a mass to accelerate, which means it can change an object's velocity or shape",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Centripetal Force",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Centripetal"
    ],
    "elementAlias": [],
    "elementDescription": "a net force that acts on an object moving in a curved or circular path, directed toward the center of curvature or axis of rotation. This center-seeking force is necessary to constantly change the object's direction and keep it from flying off in a straight line due to inertia, as described by Newton's first law of motion",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Friction",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Friction"
    ],
    "elementAlias": [],
    "elementDescription": "a contact force that opposes the relative motion, or attempted motion, between two systems in contact. It acts tangentially, or parallel, to the contact surface between the objects",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Gravity",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Gravity"
    ],
    "elementAlias": [
      "gravitation"
    ],
    "elementDescription": "the force that pulls objects toward each other",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "/Gifs/KlimBeta-097_cropped.gif",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Pressure",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Pressure"
    ],
    "elementAlias": [],
    "elementDescription": "the force applied perpendicular (normal) to a surface per unit area over which that force is distributed",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Tension",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Dynamics",
      "Tension"
    ],
    "elementAlias": [],
    "elementDescription": "the pulling force that is transmitted axially through a string, rope, cable, or similar one-dimensional continuous object when it is pulled tight by forces acting from opposite ends",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Energy",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Energy"
    ],
    "elementAlias": [],
    "elementDescription": "the quantitative property of a system that enables it to do work or cause change",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Inertia",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Inertia"
    ],
    "elementAlias": [
      "Newton's First Law"
    ],
    "elementDescription": "the fundamental property of an object that describes its resistance to changes in its state of motion (whether at rest or moving with constant velocity). This concept is formally defined by Sir Isaac Newton's first law of motion. ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Momentum",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Momentum"
    ],
    "elementAlias": [],
    "elementDescription": "the quantity of motion of a moving body, measured as a product of its mass and velocity",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Power",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Power"
    ],
    "elementAlias": [
      "Watts"
    ],
    "elementDescription": "the rate at which work is done or energy is transferred, meaning how quickly energy changes form or moves from one place to another, expressed as work (W) or energy (E) per unit of time (t). Its standard SI unit is the Watt (W)",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Work",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Work"
    ],
    "elementAlias": [],
    "elementDescription": "the energy transferred to or from an object when a force causes it to move over a distance",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Torque",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Torque"
    ],
    "elementAlias": [],
    "elementDescription": "the measure of the force that causes an object to rotate or turn around an axis",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Kinetic Energy",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [],
    "elementAlias": [],
    "elementDescription": "is the energy an object possesses due to its motion",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Kinematics",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Kinematics"
    ],
    "elementAlias": [],
    "elementDescription": "description of motion (how objects move) without considering the forces, mass, or energy involved that cause the motion. It is often referred to as the geometry of motion",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Speed",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Kinematics",
      "Speed"
    ],
    "elementAlias": [],
    "elementDescription": "the rate at which someone or something is able to move or operate",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Velocity",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Kinematics",
      "Velocity"
    ],
    "elementAlias": [],
    "elementDescription": "the speed of something in a given direction",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Acceleration",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Kinematics",
      "Acceleration"
    ],
    "elementAlias": [],
    "elementDescription": "the rate of change of the velocity of an object with respect to time",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Jerk",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Kinematics",
      "Jerk"
    ],
    "elementAlias": [],
    "elementDescription": "the rate of change of an object's acceleration with respect to time. It is the third derivative of position (or displacement) and the first derivative of acceleration",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Time",
    "elementFaktor": "Motor",
    "elementIcon": "🟠",
    "elementID": "",
    "elementTaxonomy": [
      "Motor",
      "Kinematics",
      "Time"
    ],
    "elementAlias": [],
    "elementDescription": "the irreversible, continuous progression of existence and events from the past, through the present, into the future, enabling the measurement of duration, intervals, and rates of change, often conceptualized as the fourth dimension intertwined with space in spacetime. It's the fundamental framework for sequencing reality, measured by clocks and calendars, and described by physics as a dimension inseparable from the three spatial dimensions",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Commitment",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognitions",
      "Decision",
      "Commitment"
    ],
    "elementAlias": [
      "GoOrNoGo"
    ],
    "elementDescription": "a promise or firm decision to do something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Time Estimation",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognitions",
      "Estimation",
      "TimeEstimation"
    ],
    "elementAlias": [],
    "elementDescription": "the process of predicting the time needed to complete a specific task",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Long Term Memory",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognitions",
      "Memory",
      "LongTermMemory"
    ],
    "elementAlias": [],
    "elementDescription": "he cognitive process for storing and retrieving information over extended periods, from minutes to decades",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Short Term Memory",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognitions",
      "Memory",
      "ShortTermMemory"
    ],
    "elementAlias": [],
    "elementDescription": "the brain's temporary workspace for holding a small amount of information (around 4-7 items) for a brief period, typically 15-30 seconds",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Via Memory",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognitions",
      "Memory",
      "ViaMemory"
    ],
    "elementAlias": [],
    "elementDescription": "our brain's ability to learn, store, and recall information about locations, paths, and the arrangement of objects in space, crucial for navigation, orientation, and forming cognitive maps",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Working Memory",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognitions",
      "Memory",
      "WorkingMemory"
    ],
    "elementAlias": [],
    "elementDescription": "your brain's temporary mental workspace, allowing you to hold and manipulate a small amount of information (like numbers, words, or steps) for immediate use while performing complex tasks like reasoning, learning, comprehension, and problem-solving. It's like a mental scratchpad",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Compassion",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Compassion"
    ],
    "elementAlias": [],
    "elementDescription": "a strong feeling of empathy and sadness for other people's suffering or bad luck and a desire to help",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Mind State",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "MindState"
    ],
    "elementAlias": [],
    "elementDescription": "your temporary mental and emotional condition—your mood, attitude, or cognitive condition at a specific time",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Mindset",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Mindset"
    ],
    "elementAlias": [],
    "elementDescription": "a person's way of thinking and their opinions",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Control",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "Control"
    ],
    "elementAlias": [],
    "elementDescription": "the ability or power to decide or strongly influence the particular way in which something will happen or someone will behave",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Good Ease",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognitions",
      "CognitiveEase",
      "GoodEase"
    ],
    "elementAlias": [],
    "elementDescription": "a good mood itself can increase cognitive ease",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Music",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses",
      "AuditorySense",
      "Music"
    ],
    "elementAlias": [],
    "elementDescription": "a pattern of sounds made by musical instruments, voices, or computers, or a combination of these, intended to give pleasure to people listening to it",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Playlist",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses",
      "AuditorySense",
      "Music",
      "Playlist"
    ],
    "elementAlias": [],
    "elementDescription": "a list of pieces of music chosen by someone to listen to",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Pressure Sense",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses",
      "PressureSense"
    ],
    "elementAlias": [],
    "elementDescription": "the sensory ability to perceive sustained distortion or indentation of the skin and deep tissues",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Attention",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Attention"
    ],
    "elementAlias": [],
    "elementDescription": "the process of selectively concentrating on specific information from the environment or internal thoughts while intentionally ignoring other, irrelevant stimuli",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Cognition",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition"
    ],
    "elementAlias": [],
    "elementDescription": "all forms of knowing and awareness, such as perceiving, conceiving, remembering, reasoning, judging, imagining, and problem solving",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Learning",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "Learning"
    ],
    "elementAlias": [],
    "elementDescription": "",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Cognitive Ease",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "CognitiveEase"
    ],
    "elementAlias": [],
    "elementDescription": "the mental state of effortless information processing, where familiar, clear, and simple information feels true, good, and safe, leading to confidence and reduced mental strain",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Clarity",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "CognitiveEase",
      "Clarity"
    ],
    "elementAlias": [],
    "elementDescription": " the mental state in which thoughts are organized, focused, and free from confusion or brain fog. It is the ability to perceive, understand, and organize information effectively, enabling clear decision-making, problem-solving, and purposeful action",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Priming",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "CognitiveEase",
      "Priming"
    ],
    "elementAlias": [],
    "elementDescription": "a phenomenon in which exposure to one stimulus influences how a person responds to a subsequent, related stimulus",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Repetition",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "CognitiveEase",
      "Repetition"
    ],
    "elementAlias": [],
    "elementDescription": "something that happens in the same way as something that happened before",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Feels Good",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "CognitiveEase",
      "FeelsGood"
    ],
    "elementAlias": [],
    "elementDescription": "very satisfactory, enjoyable, pleasant, or interesting",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Feels Familiar",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "CognitiveEase",
      "FeelsFamiliar"
    ],
    "elementAlias": [
      "familiarity"
    ],
    "elementDescription": "the state of being well-acquainted or having good knowledge/mastery of someone or something",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Feels Effortless",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "CognitiveEase",
      "FeelsEffortless"
    ],
    "elementAlias": [
      "effortlessness"
    ],
    "elementDescription": "seeming not to need any effort",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Feels True",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "CognitiveEase",
      "FeelsTrue"
    ],
    "elementAlias": [],
    "elementDescription": "being what exists, rather than what was thought, intended, or stated",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Decision",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "Decision"
    ],
    "elementAlias": [],
    "elementDescription": "a choice that you make about something after thinking about several possibilities",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Estimation",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "Estimation"
    ],
    "elementAlias": [],
    "elementDescription": "the process of finding an estimate or approximation, which is a value that is usable for some purpose even if input data may be incomplete, uncertain, or unstable",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Identification",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "Identification"
    ],
    "elementAlias": [],
    "elementDescription": "recognizing or proving what something is by categorizing it (term, class, distinguishing features)",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Judgement",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Cognition",
      "Judgement"
    ],
    "elementAlias": [],
    "elementDescription": "a decision that you make, or an opinion that you have, after considering all the facts in a situation",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Emotion",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Emotion"
    ],
    "elementAlias": [],
    "elementDescription": "physiological and psychological responses that help people react to events or situations.",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Anger",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Emotion",
      "Anger"
    ],
    "elementAlias": [],
    "elementDescription": "a strong feeling that makes you want to hurt someone or be unpleasant because of something unfair or unkind that has happened",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Disgust",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Emotion",
      "Disgust"
    ],
    "elementAlias": [],
    "elementDescription": "a strong feeling of disapproval and dislike at a situation, object or person",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Fear",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Emotion",
      "Fear"
    ],
    "elementAlias": [],
    "elementDescription": "a primal, protective emotion triggered by a perceived immediate threat, prompting a biochemical & physiological alarm (like increased heart rate, adrenaline) to prepare the body for fight or flight, keeping us safe from harm. Unlike anxiety, which is future-oriented and vague, fear is a direct response to a present, identifiable danger, involving brain centers like the amygdala, and serves as a vital survival mechanism, though it can become problematic if excessive",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Joy",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Emotion",
      "Joy"
    ],
    "elementAlias": [],
    "elementDescription": "a profound, intense positive emotion, deeper than fleeting happiness, often stemming from meaningful connections, alignment with values, purpose, or unexpected positive events, and it signifies deep well-being, boosting resilience, motivation, and connection, with types including passive contentment and active engagement. Unlike happiness (a broader life evaluation), joy is a transcendent state that can emerge even amid hardship, characterized by a sense of blessedness, exhilaration, or deep delight",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Sadness",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Emotion",
      "Sadness"
    ],
    "elementAlias": [],
    "elementDescription": "an emotion resulting from the loss of someone or something important",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Memory",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Memory"
    ],
    "elementAlias": [],
    "elementDescription": "the ability to remember information, experiences, and people",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Arousal",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Memory",
      "MindState",
      "Arousal"
    ],
    "elementAlias": [],
    "elementDescription": "a state of mental alertness, attention, or energy. It involves the cognitive processes that activate the brain's alertness and attentiveness. This state is distinct from physical or emotional arousal, though they are often related",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Confidence",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Memory",
      "MindState",
      "Confidence"
    ],
    "elementAlias": [],
    "elementDescription": "a feeling of trust or belief in a person, thing, or one's own abilities. It is a state of mind marked by an absence of uncertainty, shyness, or embarrassment. ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Mindfulness",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Memory",
      "MindState",
      "Mindfulness"
    ],
    "elementAlias": [],
    "elementDescription": "Mindfulness means paying attention in a particular way: on purpose, in the present moment, and non judgmentally",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Flow State",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Memory",
      "MindState",
      "FlowState"
    ],
    "elementAlias": [],
    "elementDescription": "A state in which people are so involved in an activity that nothing else seems to matter; the experience is so enjoyable that people will continue to do it even at great cost, for the sheer sake of doing it",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Senses",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses"
    ],
    "elementAlias": [],
    "elementDescription": "a biological system for sensation, detecting stimuli (light, sound, chemicals) via specialized cells in sense organs, converting them into neural signals the brain interprets, encompassing traditional ones like sight/hearing but also more complex ones (balance, body position)",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Auditory Sense",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses",
      "Audio"
    ],
    "elementAlias": [],
    "elementDescription": "the physiological process and ability to perceive sounds by detecting vibrations (sound waves) as periodic changes in the pressure of a surrounding medium, such as air or water. ",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Touch",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses",
      "Touch"
    ],
    "elementAlias": [
      "haptics"
    ],
    "elementDescription": "the complex sensory system responsible for the body's ability to perceive physical stimuli through specialized receptors primarily located in the skin, as well as in muscles, joints, and internal organs",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Compression",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses",
      "Compression"
    ],
    "elementAlias": [],
    "elementDescription": "is the conscious appreciation of sustained mechanical deformation or indentation of the skin and underlying deep tissues",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Proprioception",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses",
      "Proprioception"
    ],
    "elementAlias": [],
    "elementDescription": "the sense of self-movement, force, and body position",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  },
  {
    "elementEnglishName": "Sight",
    "elementFaktor": "Anima",
    "elementIcon": "💜",
    "elementID": "",
    "elementTaxonomy": [
      "Anima",
      "Senses",
      "Sight"
    ],
    "elementAlias": [
      "vision"
    ],
    "elementDescription": "the physical sense or faculty by which light stimuli received by the eye are interpreted by the brain and constructed into a representation of objects in space",
    "elementBetanyms": [],
    "elementInBetom": [],
    "elementProfilePic": "",
    "elementExample": {
      "elementVideo": [],
      "elementImage": [],
      "elementQuote": []
    }
  }
]

const items = [
  {
    "elementEnglishName": "Task",
    "elementFaktor": "labor",
    "elementIcon": "⭐",
  },
  {
    "elementEnglishName": "Route",
    "elementFaktor": "labor",
    "elementIcon": "⭐",
  },
  {
    "elementEnglishName": "Aktion",
    "elementFaktor": "labor",
    "elementIcon": "⭐",
  },
]

</script>

<style></style>