const ListAllAktions = [
    "Absorb",
    "Allo",
    "Ama",
    "Ateles",
    "Bonobo",
    "Bump",
    "Catch",
    "Clean",
    "Crawl",
    "Drag",
    "Drop",
    "Eval",
    "Fall",
    "Foka",
    "Gekko",
    "Gibbon",
    "Hinge",
    "Iguana",
    "Kangaroo",
    "Knot",
    "Koala",
    "Kontakt",
    "Kryos",
    "Lache",
    "Lemur",
    "Lift",
    "Mantis",
    "Modify",
    "Onda",
    "Orbit",
    "Overview",
    "Pendulate",
    "Pinza",
    "Pongo",
    "Pont",
    "Pop",
    "Preserve",
    "Progress",
    "Pugnus",
    "Pull",
    "Push",
    "Regress",
    "Rip",
    "Roll",
    "Sauros",
    "Slot",
    "Stack",
    "Stall",
    "Swap",
    "Tangent",
    "Toggle",
    "Transport",
    "TRex",
    "Ungulate",
    "Ursus",
    "Whip",
    "Wrap",
]

const ListAktionBodyOnly = [
    "Foka",
    "Sauros",
    "Lemur",
    "Gibbon",
    "Fall",
]

const ListAktionLegOnly = [
    "Iguana",
    "Hinge",
    "Ungulate",
    "Lift",
]

const ListAktionArmOnly = [
    "Ursus",
    "TRex",
    "Pugnus",
    "Pinza",
    "Pongo",
    "Mantis",
    "Koala",
    "Gekko",
    "Ateles",
    "Bonobo",
    "Knot",
    "Stack",
]

const ListAllLimbs = ["Arm", "Leg"]

const ListSubLegSomon = []

const ListSubArmSomon = []

const DictSubLegRequiredElement = {}

const DictLegRequiredElement = { "RightLeg": ">>", "LeftLeg": "<<", "BothLegs": "<>" }

const ListArmRequiredElement = { "RightArm": ">>", "LeftArm": "<<", "BothLegs": "<>" }

const DictWrapper = { "Sequence": ["[", "]"], "": ["{", "}"] }

const ListAktionArmANDLegOnly = []

const BetaglyfSequence = {
    "1": "ListAllLimbs",  // What about multiple limbs?
    "2": { // LimbRequiredElement ////Choose which side the Limb is on
        "Leg": "ListLegRequiredElement",
        "Arm": "ListArmRequiredElement",
        "Body": "ListBodyRequiredElement",
    },
    "3": {  // Recursive Dict for Arm.Hand.Finger.Fingertip
        "Leg": "DictSubLegSomon",
        "Arm": "DictSubArmSomon",
        "Body": "DictSubBodySomon",
    },
    "4": {  // SubLimbRequiredElement
        "Leg": "DictSubLegRequiredElement",
        "Arm": "DictSubArmRequiredElement",
        "Body": "DictSubBodyRequiredElement",
    },
    "5": [
        "DictWrapper",  // Wrapper to Delimit a Sequence of Elements
        {  // AktionLimb
            "Arm": "ListAktionArmOnly",
            "Leg": "ListAktionLegOnly",
            "Arm": "ListAktionArmANDLegOnly",
            "Body": "ListAktionBody",
            "SubArm": "",
        },
    ],
    "6": [
        {   // AktionSubLimb
            "Arm": "ListAktionSubArmOnly",
            "Leg": "ListAktionSubLegOnly",
            "Arm&Leg": "ListAktionSubArmANDLegOnly",
            "Body": "ListAktionSubBody",
        },
    ],
    "7": [ // FullAktion SubAktion ////// Dyno.Absorb.Onda is a FullAktion, that is an Aktion with all SubAktions stated
        "DictSubAktion"
    ],
    "8": ["ListEkon"],
    "9": ["DictSubEkon"],
    "10": [],
    "11": [],
    "12": [],
}
