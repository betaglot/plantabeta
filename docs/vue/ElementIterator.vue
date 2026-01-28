<template>
    <v-data-iterator :items="elementsList"
                     :page="page"
                     :items-per-page="5">
        <template v-slot:default="{ items }">
            <template v-for="(item, i) in items"
                      :key="i">
                <v-card v-bind="item.raw">{{ item.raw.elementName }}</v-card>

                <br>
            </template>
        </template>
        <template v-slot:footer="{ pageCount }">
            <v-pagination v-model="page"
                          :length="pageCount"
                          rounded="circle"
                          :total-visible="3"
                          ></v-pagination>
        </template>
    </v-data-iterator>
</template>


<script setup>
import {  ref } from 'vue'
const page = ref(1)

const elementsList = JSON.parse(`[
    {
        "elementName": "Task",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Task",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Route",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Route",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Aktion",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Abduction",
        "elementFaktor": "Labor",
        "elementID": "Labor,Aktion,Abduction",
        "elementPath": "",
        "elementAlias": [],
        "elementDescription": "the movement of a part of the body away from the central part of the body or from another body part",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Absorb",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Absorb",
        "elementAlias": [],
        "elementDescription": "to reduce the effect of a physical force",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Adjust",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Adjust",
        "elementAlias": [],
        "elementDescription": "to change something slightly, especially to make it more correct, effective",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Allo",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Allo",
        "elementAlias": [],
        "elementDescription": "To swap hands or feet",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Ama",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Ama",
        "elementAlias": [],
        "elementDescription": "to support something physically, often by leaning it against something else",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Ankor",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Ankor",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Catch",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Catch",
        "elementAlias": [],
        "elementDescription": "to grip something while moving",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Clean",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Clean",
        "elementAlias": [],
        "elementDescription": "to remove chalk from something",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Crawl",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Crawl",
        "elementAlias": [],
        "elementDescription": "to move along on hands and knees or with your body stretched out along a surface",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Drag",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Drag",
        "elementAlias": [],
        "elementDescription": "to move something by pulling it along a surface",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Drop",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Drop",
        "elementAlias": [],
        "elementDescription": "to fall or to allow something to fall",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Eval",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Eval",
        "elementAlias": [],
        "elementDescription": "the process of judging or calculating the quality, importance, amount, or value of something",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Fall",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Fall",
        "elementAlias": [],
        "elementDescription": "to suddenly go down onto the ground or towards the ground without intending to or by accident",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Flexion",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Flexion",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Hinge",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Hinge",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Hook",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Hook",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Insert",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Insert",
        "elementAlias": [],
        "elementDescription": "to put something inside something else",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Knot",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Knot",
        "elementAlias": [],
        "elementDescription": "a join made by tying together the ends of a piece or pieces of rope",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Kontakt",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Kontakt",
        "elementAlias": [],
        "elementDescription": "to touch something",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Launch",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Launch",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Lift",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Lift",
        "elementAlias": [],
        "elementDescription": "to move something from a lower to a higher position",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Freeze",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Freeze",
        "elementAlias": ["Lock"],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Onda",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Onda",
        "elementAlias": ["Swing"],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Orbit",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Orbit",
        "elementAlias": ["Revolve"],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Pop",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Pop",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Preserve",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Preserve",
        "elementAlias": [],
        "elementDescription": "to keep something as it is, especially in order to prevent it from decaying or being damaged or destroyed",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Reach",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Reach",
        "elementAlias": [],
        "elementDescription": "to stretch out your arm or leg to get or touch something",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Rip",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Rip",
        "elementAlias": [],
        "elementDescription": "to pull apart; to tear or be torn",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Slot",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Slot",
        "elementAlias": [],
        "elementDescription": "to put something into a narrow hole or opening",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Stack",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Stack",
        "elementAlias": [],
        "elementDescription": "things arranged one on top of another",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Stall",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Stall",
        "elementAlias": [],
        "elementDescription": "to stop suddenly",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Tangent",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Tangent",
        "elementAlias": [],
        "elementDescription": "A tangent is also a line that touches a curve or solid at a particular point",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Toggle",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Toggle",
        "elementAlias": ["Rock over","Rock up"],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Transport",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Transport",
        "elementAlias": [],
        "elementDescription": "to bring a tool from one place to another without using it",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Whip",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Whip",
        "elementAlias": [],
        "elementDescription": "to move like a whip",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Wrap",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Aktion,Wrap",
        "elementAlias": [],
        "elementDescription": "to put a body part around something",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Difficulty",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Difficulty",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Competition",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Competition",
        "elementAlias": [],
        "elementDescription": "a situation in which someone is trying to win something or be more successful than someone else",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Strategy",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Strategy",
        "elementAlias": [],
        "elementDescription": "a detailed plan for achieving success in situations",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Tactics",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tactics",
        "elementAlias": [],
        "elementDescription": "a specific action intended to get a particular result",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Tool",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool",
        "elementAlias": [],
        "elementDescription": "an object that helps you to do a particular activity",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Fall Protection",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,FallProtection",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Rope",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,FallProtection,Rope",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Karabiner",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,FallProtection,Karabiner",
        "elementAlias": [],
        "elementDescription": "an object used for attaching two things, for example by a Klimber for attaching a rope to a harness. It is oval or like a letter D in shape, with a part that opens and closes",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Harness",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,FallProtection,Harness",
        "elementAlias": [],
        "elementDescription": "a piece of equipment with straps and belts, used to control or hold in place a person",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Helmet",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,FallProtection,Helmet",
        "elementAlias": [],
        "elementDescription": "a strong, hard hat that covers and protects the head",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Cam",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,FallProtection,Cam",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Anchor",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,FallProtection,Anchor",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Sling",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,FallProtection,Sling",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Kontakt Tool",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,KontaktTool",
        "elementAlias": [],
        "elementDescription": "a tool which is used to Kontakt",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Shoe",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,KontaktTool,Shoe",
        "elementAlias": [],
        "elementDescription": "one of a pair of coverings for your feet, usually made of a strong material such as leather, with a thick leather or plastic sole and usually a heel",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Kneepad",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,KontaktTool,Kneepad",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Glove",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,KontaktTool,Glove",
        "elementAlias": [],
        "elementDescription": "a piece of clothing that is worn on the hand and wrist for warmth or protection, with separate parts for each finger",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Axe",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,KontaktTool,Axe",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Clothing",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,Clothing",
        "elementAlias": [],
        "elementDescription": "things you wear to cover your body",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Kit",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Tool,Kit",
        "elementAlias": [],
        "elementDescription": "a bag used to transport tools",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Performance",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Performance",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Effectiveness",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Performance,Effectiveness",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Efficiency",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Performance,Efficiency",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Error",
        "elementFaktor": "Labor",
        "elementID": "",
        "elementPath": "Labor,Performance,Error",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Anatomy",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Body",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Body",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Spine",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Body,Spine",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Ribs",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Body,Ribs",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Head",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Head",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Cranium",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Head,Cranium",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Ear",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Head,Ear",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Face",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Head,Face",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Neck",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Head,Neck",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Arm",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Scapula",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Scapula",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Humerus",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Humerus",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Forearm",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Forearm",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Hand",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Hand",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Thumb",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Hand,Thumb",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Index Finger",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Hand,IndexFinger",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Middle Finger",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Hand,MiddleFinger",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Ring Finger",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Hand,RingFinger",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Pinky Finger",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Arm,Hand,PinkyFinger",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Leg",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Leg",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Hips",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Leg,Hips",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Femur",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Leg,Femur",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Tibia",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Leg,Tibia",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Foot",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Anatomy,Leg,Foot",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Physiology",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Physiology",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Endurance",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Physiology,Endurance",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Limberness",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Physiology,Limberness",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Strength",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Physiology,Strength",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Injury Prevention",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Physiology,InjuryPrevention",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Nutrition",
        "elementFaktor": "Soma",
        "elementID": "",
        "elementPath": "Soma,Nutrition",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Kontakt Material",
        "elementFaktor": "Ekos",
        "elementID": "Ekos,KontaktMaterial",
        "elementPath": "",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Natural",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,KontaktMaterial,Natural",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Lithosphere",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,KontaktMaterial,Natural,Lithosphere",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Hydrosphere",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,KontaktMaterial,Natural,Hydrosphere",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Plant",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,KontaktMaterial,Natural,Plant",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Artificial",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,KontaktMaterial,Artificial",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Plast",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,KontaktMaterial,Artificial,Plast",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Volume",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,KontaktMaterial,Artificial,Volume",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Wall",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,KontaktMaterial,Artificial,Wall",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Environment",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Environment",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Atmosphere",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Environment,Atmosphere",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Air Temperature",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Environment,Atmosphere,AirTemperature",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Humidity",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Environment,Atmosphere,Humidity",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Smoke",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Environment,Atmosphere,Smoke",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Wind",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Environment,Atmosphere,Wind",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Architecture",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Environment,Atmosphere,",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Crag",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Environment,Crag",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Surface",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Surface",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Texture",
        "elementFaktor": "Ekos",
        "elementID": "",
        "elementPath": "Ekos,Surface,Texture",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Geometry",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Density",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Density",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Direction",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Direction",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Displacement",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Displacement",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Distance",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Distance",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Div",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Div",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Line",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Line",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Morfos",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Morfos",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Orientation",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Orientation",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Point",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Point",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Shape",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Geometry,Shape",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Logic",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Logic",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Conditional Logic",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Logic,ConditionalLogic",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Propositional Logic",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,LogicPropositionalLogic",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Probability",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Probability",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Affordance",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Probability,Affordance",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Site",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Probability,Affordance,Site",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Path",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Probability,Affordance,Path",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Constraint",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Probability,Constraint",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Fortuna",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Probability,Fortuna",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Frequency",
        "elementFaktor": "Via",
        "elementID": "",
        "elementPath": "Via,Probability,Frequency",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Dynamics",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Dynamics",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Force",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Dynamics,Force",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Centripetal",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Dynamics,Centripetal",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Friction",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Dynamics,Friction",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Gravity",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Dynamics,Gravity",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Normal Force",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Dynamics,NormalForce",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Pressure",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Dynamics,Pressure",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Tension",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Dynamics,Tension",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Energy",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Energy",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Inertia",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Inertia",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Momentum",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Momentum",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Power",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Power",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Work",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Work",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Torque",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Torque",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Kinematics",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Kinematics",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Speed",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Kinematics,Speed",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Velocity",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Kinematics,Velocity",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Acceleration",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Kinematics,Acceleration",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Jerk",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Kinematics,Jerk",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Time",
        "elementFaktor": "Motor",
        "elementID": "",
        "elementPath": "Motor,Kinematics,Time",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Attention",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Attention",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Cognition",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Cognitive Ease",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,CognitiveEase",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Clarity",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,CognitiveEase,Clarity",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Priming",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,CognitiveEase,Priming",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Repetition",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,CognitiveEase,Repetition",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "FeelsGood",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,CognitiveEase,FeelsGood",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "FeelsFamiliar",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,CognitiveEase,FeelsFamiliar",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "FeelsEffortless",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,CognitiveEase,FeelsEffortless",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "FeelsTrue",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,CognitiveEase,FeelsTrue",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Decision",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,Decision",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Estimation",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,Estimation",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Identification",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,Identification",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Judgement",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Cognition,Judgement",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Emotion",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Emotion",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Anger",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Emotion,Anger",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Disgust",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Emotion,Disgust",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Fear",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Emotion,Fear",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Joy",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Emotion,Joy",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Sadness",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Emotion,Sadness",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Memory",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Long Term Memory",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory,LongTermMemory",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Short Term Memory",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory,ShortTermMemory",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Working Memory",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory,WorkingMemory",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Mind State",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory,MindState",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Arousal",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory,MindState,Arousal",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Confidence",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory,MindState,Confidence",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Mindfulness",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory,MindState,Mindfulness",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Flow State",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Memory,MindState,FlowState",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Senses",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Senses",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Audio",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Senses,Audio",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Touch",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Senses,Touch",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Compression",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Senses,Compression",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Proprioception",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Senses,Proprioception",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    },
    {
        "elementName": "Sight",
        "elementFaktor": "Anima",
        "elementID": "",
        "elementPath": "Anima,Senses,Sight",
        "elementAlias": [],
        "elementDescription": "",
        "elementIkon": "",
        "elementInBetom": [],
        "elementExample": {
            "elementVideo": [],
            "elementImage": [],
            "elementQuote": []
        }
    }
]`)

</script>