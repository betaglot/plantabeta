import json

Skema_List = [
    {
        "ElementName": "TeamBeta",
        "Namespace": "Beta/TeamBeta",
        "SuperElementName": "Beta",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EkoKratos",
        "Namespace": "Eko/EkoMetron/EkoKratos",
        "SuperElementName": "EkoMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EkoKuboi",
        "Namespace": "Eko/EkoMetron/EkoKuboi",
        "SuperElementName": "EkoMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EkoTeknik",
        "Namespace": "Eko/EkoMetron/EkoTeknik",
        "SuperElementName": "EkoMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EkoMetron",
        "Namespace": "Eko/EkoMetron",
        "SuperElementName": "Eko",
        "SubElementName": [
            "EkoKratos",
            "EkoKuboi",
            "EkoTeknik"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EkoOverview",
        "Namespace": "Eko/EkoOverview",
        "SuperElementName": "Eko",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EkoError",
        "Namespace": "Eko/EkoPraktik/EkoError",
        "SuperElementName": "EkoPraktik",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Antrosfera",
        "Namespace": "Eko/EkoTeori/EkoElements/Antrosfera",
        "SuperElementName": "EkoElements",
        "SubElementName": [
            "Prep",
            "Road"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BurnPit",
        "Namespace": "Eko/EkoTeori/EkoElements/Antrosfera/Prep/BurnPit",
        "SuperElementName": "Prep",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Dust",
            "Cream"
        ],
        "ViaElementName": [
            "CircleZone",
            "ZoneMarka"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoundPrep",
        "Namespace": "Eko/EkoTeori/EkoElements/Antrosfera/Prep/MoundPrep",
        "SuperElementName": "Prep",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "MoundMarka",
            "MoundSite"
        ],
        "MoveElementName": [
            "StepInto"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Prep",
        "Namespace": "Eko/EkoTeori/EkoElements/Antrosfera/Prep",
        "SuperElementName": "Antrosfera",
        "SubElementName": [
            "BurnPit",
            "MoundPrep",
            "SkreefPrep",
            "TrenchPrep"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SkreefPrep",
        "Namespace": "Eko/EkoTeori/EkoElements/Antrosfera/Prep/SkreefPrep",
        "SuperElementName": "Prep",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "SkreefMarka",
            "SkreefSite"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TrenchPrep",
        "Namespace": "Eko/EkoTeori/EkoElements/Antrosfera/Prep/TrenchPrep",
        "SuperElementName": "Prep",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "TrenchSite",
            "TrenchExitMarka",
            "TrenchEnterMarka"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Road",
        "Namespace": "Eko/EkoTeori/EkoElements/Antrosfera/Road",
        "SuperElementName": "Antrosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "CompactSoil",
            "HardSoil"
        ],
        "ViaElementName": [
            "CacheLocation"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "AirTemperature",
        "Namespace": "Eko/EkoTeori/EkoElements/Atmosfera/AirTemperature",
        "SuperElementName": "Atmosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "BlockAltitude"
        ],
        "ViaElementName": [],
        "MoveElementName": [
            "ClothingLayering"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Humidity",
        "Namespace": "Eko/EkoTeori/EkoElements/Atmosfera/Humidity",
        "SuperElementName": "Atmosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "WindChill"
        ],
        "ViaElementName": [],
        "MoveElementName": [
            "ClothingLayering",
            "Sweating"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Atmosfera",
        "Namespace": "Eko/EkoTeori/EkoElements/Atmosfera",
        "SuperElementName": "EkoElements",
        "SubElementName": [
            "AirTemperature",
            "Humidity",
            "Precipitation",
            "Wind"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Precipitation",
        "Namespace": "Eko/EkoTeori/EkoElements/Atmosfera/Precipitation",
        "SuperElementName": "Atmosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "WastedMarka"
        ],
        "MoveElementName": [
            "ClothingLayering"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Wind",
        "Namespace": "Eko/EkoTeori/EkoElements/Atmosfera/Wind",
        "SuperElementName": "Atmosfera",
        "SubElementName": [
            "WindChill"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "DangerTree"
        ],
        "ViaElementName": [
            "WastedMarka"
        ],
        "MoveElementName": [
            "ShellLayer"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Abies",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Abies",
        "SuperElementName": "Flora",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FirTree"
        ]
    },
    {
        "ElementName": "Larix",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Dendron/Larix",
        "SuperElementName": "Dendron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LarchTree"
        ]
    },
    {
        "ElementName": "Dendron",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Dendron",
        "SuperElementName": "Biosfera",
        "SubElementName": [
            "Larix",
            "Picea",
            "Pinus",
            "Pseudotsuga",
            "Quercus",
            "Spruce",
            "Thuja",
            "Tsuga"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Seedling",
            "Semis"
        ]
    },
    {
        "ElementName": "Picea",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Dendron/Picea",
        "SuperElementName": "Dendron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SpruceTree"
        ]
    },
    {
        "ElementName": "Pinus",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Dendron/Pinus",
        "SuperElementName": "Dendron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "PineTree"
        ]
    },
    {
        "ElementName": "Pseudotsuga",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Dendron/Pseudotsuga",
        "SuperElementName": "Dendron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "DouglasFirTree"
        ]
    },
    {
        "ElementName": "Quercus",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Dendron/Quercus",
        "SuperElementName": "Dendron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "OakTree"
        ]
    },
    {
        "ElementName": "Thuja",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Dendron/Thuja",
        "SuperElementName": "Dendron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "RedCedarTree"
        ]
    },
    {
        "ElementName": "Tsuga",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Dendron/Tsuga",
        "SuperElementName": "Dendron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Pseudotsuga",
            "Flora"
        ],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [
            "SpeciesIdentification"
        ],
        "Description": "",
        "Alias": [
            "Hemlock"
        ]
    },
    {
        "ElementName": "Fauna",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Fauna",
        "SuperElementName": "Biosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Bryophyta",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Bryophyta",
        "SuperElementName": "Flora",
        "SubElementName": [
            "Sfagnum"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [
            "SpeciesIdentification"
        ],
        "Description": "",
        "Alias": [
            "Moss"
        ]
    },
    {
        "ElementName": "BurntLand",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/BurntLand",
        "SuperElementName": "Flora",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Ash",
            "Dust",
            "Exposure",
            "DangerTree"
        ],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CropFlora",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/CropFlora",
        "SuperElementName": "Flora",
        "SubElementName": [
            "Pseudotsuga",
            "Quercus",
            "Pinus",
            "Larix",
            "Picea",
            "Thuja"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Flower",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Flower",
        "SuperElementName": "Flora",
        "SubElementName": [
            "Chamaenerion",
            "Lupinus",
            "Castilleja"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [
            "SpeciesIdentification"
        ],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Log",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Log",
        "SuperElementName": "Flora",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Flora",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora",
        "SuperElementName": "Biosfera",
        "SubElementName": [
            "Bryophyta",
            "BurntLand",
            "CropFlora",
            "Flower",
            "Log",
            "Poales",
            "RiparianZone",
            "Slash",
            "Stump"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Poales",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Poales",
        "SuperElementName": "Flora",
        "SubElementName": [
            "Cyperaceae ",
            "Juncaceae ",
            "Poaceae"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Grass"
        ]
    },
    {
        "ElementName": "RiparianZone",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/RiparianZone",
        "SuperElementName": "Flora",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Raw",
            "Hidrosfera"
        ],
        "ViaElementName": [
            "BorderMarka"
        ],
        "MoveElementName": [
            "FloraMove"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BurnPileSlash",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Slash/BurnPileSlash",
        "SuperElementName": "Slash",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HighSlash",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Slash/HighSlash",
        "SuperElementName": "Slash",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [
            "SlashClimb",
            "StepUnder"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LowSlash",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Slash/LowSlash",
        "SuperElementName": "Slash",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [
            "StepOver"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Slash",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Slash",
        "SuperElementName": "Flora",
        "SubElementName": [
            "BurnPileSlash",
            "HighSlash",
            "LowSlash",
            "WetSlash"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "WetSlash",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Slash/WetSlash",
        "SuperElementName": "Slash",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Precipitation",
            "Coastal",
            "DeBark"
        ],
        "ViaElementName": [],
        "MoveElementName": [
            "BaseSlip",
            "Fall",
            "BootSpike"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Stump",
        "Namespace": "Eko/EkoTeori/EkoElements/Biosfera/Flora/Stump",
        "SuperElementName": "Flora",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EcoCurve",
        "Namespace": "Eko/EkoTeori/EkoElements/EkoDefinitions/EcoCurve",
        "SuperElementName": "EkoDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EcoPoint",
        "Namespace": "Eko/EkoTeori/EkoElements/EkoDefinitions/EcoPoint",
        "SuperElementName": "EkoDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EcoSpace",
        "Namespace": "Eko/EkoTeori/EkoElements/EkoDefinitions/EcoSpace",
        "SuperElementName": "EkoDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EcoSurface",
        "Namespace": "Eko/EkoTeori/EkoElements/EkoDefinitions/EcoSurface",
        "SuperElementName": "EkoDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Flat",
        "Namespace": "Eko/EkoTeori/EkoElements/Geomorfologia/Flat",
        "SuperElementName": "Geomorfologia",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Incline",
        "Namespace": "Eko/EkoTeori/EkoElements/Geomorfologia/Incline",
        "SuperElementName": "Geomorfologia",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Slope",
            "SlopeLand"
        ]
    },
    {
        "ElementName": "Geomorfologia",
        "Namespace": "Eko/EkoTeori/EkoElements/Geomorfologia",
        "SuperElementName": "EkoElements",
        "SubElementName": [
            "Flat",
            "Incline",
            "Valley"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Terrain"
        ]
    },
    {
        "ElementName": "Valley",
        "Namespace": "Eko/EkoTeori/EkoElements/Geomorfologia/Valley",
        "SuperElementName": "Geomorfologia",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Hidrosfera"
        ],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Gully",
            "Draw"
        ]
    },
    {
        "ElementName": "Helios",
        "Namespace": "Eko/EkoTeori/EkoElements/Helios",
        "SuperElementName": "EkoElements",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "AirTemperature"
        ],
        "ViaElementName": [],
        "MoveElementName": [
            "ClothingLayering",
            "SunBurn",
            "HatMove"
        ],
        "PsikeElementName": [
            "Mood"
        ],
        "Description": "",
        "Alias": [
            "Sun"
        ]
    },
    {
        "ElementName": "GroundWater",
        "Namespace": "Eko/EkoTeori/EkoElements/Hidrosfera/GroundWater",
        "SuperElementName": "Hidrosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "WetSoil"
        ],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MovingWater",
        "Namespace": "Eko/EkoTeori/EkoElements/Hidrosfera/MovingWater",
        "SuperElementName": "Hidrosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Creek",
            "Stream",
            "River"
        ]
    },
    {
        "ElementName": "Hidrosfera",
        "Namespace": "Eko/EkoTeori/EkoElements/Hidrosfera",
        "SuperElementName": "EkoElements",
        "SubElementName": [
            "GroundWater",
            "MovingWater",
            "Pond",
            "Puddle"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Pond",
        "Namespace": "Eko/EkoTeori/EkoElements/Hidrosfera/Pond",
        "SuperElementName": "Hidrosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Puddle",
        "Namespace": "Eko/EkoTeori/EkoElements/Hidrosfera/Puddle",
        "SuperElementName": "Hidrosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [
            "PeriLine",
            "OverLine"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Litosfera",
        "Namespace": "Eko/EkoTeori/EkoElements/Litosfera",
        "SuperElementName": "EkoElements",
        "SubElementName": [
            "RockCap",
            "Gravel",
            "SkreeSlope",
            "Boulder",
            "Pebble"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RockCap",
        "Namespace": "Eko/EkoTeori/EkoElements/Litosfera/RockCap",
        "SuperElementName": "Litosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "DrySoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/DrySoil",
        "SuperElementName": "Pedosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Road"
        ],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "IceSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/IceSoil",
        "SuperElementName": "Pedosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "AirTemperature",
            "BlockAltitude"
        ],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FrozenSoil"
        ]
    },
    {
        "ElementName": "BoulderSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/MaterialModifiers/BoulderSoil",
        "SuperElementName": "MaterialModifiers",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "RockyLand"
        ]
    },
    {
        "ElementName": "ClaySoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/MaterialModifiers/ClaySoil",
        "SuperElementName": "MaterialModifiers",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [
            "SpadePurga"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CobbleSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/MaterialModifiers/CobbleSoil",
        "SuperElementName": "MaterialModifiers",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "RockyLand"
        ]
    },
    {
        "ElementName": "PebbleSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/MaterialModifiers/PebbleSoil",
        "SuperElementName": "MaterialModifiers",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RubbleSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/MaterialModifiers/RubbleSoil",
        "SuperElementName": "MaterialModifiers",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "TrenchPrep"
        ],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [
            "RockSkreef"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ExplodedRock"
        ]
    },
    {
        "ElementName": "SandSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/MaterialModifiers/SandSoil",
        "SuperElementName": "MaterialModifiers",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "UnstableSlope"
        ],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiltSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/MaterialModifiers/SiltSoil",
        "SuperElementName": "MaterialModifiers",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Dust",
            "CreamSoil",
            "UnstableSlope"
        ],
        "ViaElementName": [
            "Site"
        ],
        "MoveElementName": [
            "SoilCompress"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MineralSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/MineralSoil",
        "SuperElementName": "Pedosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Site"
        ],
        "MoveElementName": [
            "SkreefMove"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Pedosfera",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera",
        "SuperElementName": "EkoElements",
        "SubElementName": [
            "DrySoil",
            "IceSoil",
            "MineralSoil",
            "RedRotSoil",
            "SubjectiveSoil",
            "WetSoil"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Soil"
        ]
    },
    {
        "ElementName": "RedRotSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/RedRotSoil",
        "SuperElementName": "Pedosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Obstacle"
        ],
        "MoveElementName": [
            "RedRotSkreef"
        ],
        "PsikeElementName": [
            "Judgement"
        ],
        "Description": "",
        "Alias": [
            "RedRot"
        ]
    },
    {
        "ElementName": "FibricSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/SoilFiber/FibricSoil",
        "SuperElementName": "SoilFiber",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Rooty"
        ]
    },
    {
        "ElementName": "HumicSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/SoilFiber/HumicSoil",
        "SuperElementName": "SoilFiber",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MesicSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/SoilFiber/MesicSoil",
        "SuperElementName": "SoilFiber",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "WoodySoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/SoilFiber/WoodySoil",
        "SuperElementName": "SoilFiber",
        "SubElementName": [
            "RootySoil"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SubjectiveSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/SubjectiveSoil",
        "SuperElementName": "Pedosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "WetSoil",
        "Namespace": "Eko/EkoTeori/EkoElements/Pedosfera/WetSoil",
        "SuperElementName": "Pedosfera",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Hidrosfera"
        ],
        "ViaElementName": [],
        "MoveElementName": [
            "SlapKlose"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "DiscernSigns",
        "Namespace": "Eko/EkoTeori/EkoPropositions/Tracking/DiscernSigns",
        "SuperElementName": "Tracking",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "PlantedZone"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Tracking",
        "Namespace": "Eko/EkoTeori/EkoPropositions/Tracking",
        "SuperElementName": "EkoPropositions",
        "SubElementName": [
            "DiscernSigns"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EkoSimbols",
        "Namespace": "Eko/EkoTeori/EkoSimbols",
        "SuperElementName": "EkoTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Ergon",
        "Namespace": "Ergon",
        "SuperElementName": [],
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [
            "Mood",
            "Competitiveness"
        ],
        "Description": "",
        "Alias": [
            "Work",
            "Job",
            "Production"
        ]
    },
    {
        "ElementName": "Fisik",
        "Namespace": "Fisik",
        "SuperElementName": [],
        "SubElementName": [
            "Kinematics",
            "Dynamics",
            "Gravity"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveKratos",
        "Namespace": "Move/MoveMetron/MoveKratos",
        "SuperElementName": "MoveMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "MoveIntensity"
        ]
    },
    {
        "ElementName": "MoveKuboi",
        "Namespace": "Move/MoveMetron/MoveKuboi",
        "SuperElementName": "MoveMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "MoveRisk"
        ]
    },
    {
        "ElementName": "MoveTeknik",
        "Namespace": "Move/MoveMetron/MoveTeknik",
        "SuperElementName": "MoveMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "MoveComplexity"
        ]
    },
    {
        "ElementName": "MoveOverview",
        "Namespace": "Move/MoveOverview",
        "SuperElementName": "Move",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MovePraktik/MoveCompositions/Frase",
        "SuperElementName": "MoveCompositions",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveError",
        "Namespace": "Move/MovePraktik/MoveError",
        "SuperElementName": "MovePraktik",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MovePraktik",
        "Namespace": "Move/MovePraktik",
        "SuperElementName": "Move",
        "SubElementName": [
            "MoveError"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveAxiom",
        "Namespace": "Move/MoveTeori/MoveAxiom",
        "SuperElementName": "MoveTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "AnteriorDirection",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MoveDirection/AnteriorDirection",
        "SuperElementName": "MoveDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Forwards",
            "In front"
        ]
    },
    {
        "ElementName": "DistalDirection",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MoveDirection/DistalDirection",
        "SuperElementName": "MoveDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Away"
        ]
    },
    {
        "ElementName": "LateralDirection",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MoveDirection/LateralDirection",
        "SuperElementName": "MoveDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MedialDirection",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MoveDirection/MedialDirection",
        "SuperElementName": "MoveDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PosteriorDirection",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MoveDirection/PosteriorDirection",
        "SuperElementName": "MoveDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Behind",
            "Backwards"
        ]
    },
    {
        "ElementName": "ProximalDirection",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MoveDirection/ProximalDirection",
        "SuperElementName": "MoveDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Closer"
        ]
    },
    {
        "ElementName": "FrontalPlane",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MovePlane/FrontalPlane",
        "SuperElementName": "MovePlane",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "CoronalPlane"
        ]
    },
    {
        "ElementName": "HorizontalPlane",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MovePlane/HorizontalPlane",
        "SuperElementName": "MovePlane",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "AxialPlane",
            "TransversePlane"
        ]
    },
    {
        "ElementName": "SagittalPlane",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MovePlane/SagittalPlane",
        "SuperElementName": "MovePlane",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LongitudinalPlane"
        ]
    },
    {
        "ElementName": "MoveSurface",
        "Namespace": "Move/MoveTeori/MoveDefinitions/MoveSurface",
        "SuperElementName": "MoveDefinitions",
        "SubElementName": [
            "Skin",
            "Rubber",
            "Clothing",
            "Instrument"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveDefinitions",
        "Namespace": "Move/MoveTeori/MoveDefinitions",
        "SuperElementName": "MoveTeori",
        "SubElementName": [
            "MoveSurface"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BaseAbduction",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseAbduction",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegAbduction"
        ]
    },
    {
        "ElementName": "BaseAbsorb",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseAbsorb",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegAbsorb"
        ]
    },
    {
        "ElementName": "BaseAdduction",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseAdduction",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegAdduction"
        ]
    },
    {
        "ElementName": "BaseAma",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseAma",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegFlag",
            "LegProp"
        ]
    },
    {
        "ElementName": "BaseArchSmear",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseArchSmear",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FootArchSmear"
        ]
    },
    {
        "ElementName": "BaseDig",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseDig",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FootDig"
        ]
    },
    {
        "ElementName": "BaseDorsiflexion",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseDorsiflexion",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FootDorsiFlexion"
        ]
    },
    {
        "ElementName": "BaseDrag",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseDrag",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FootDrag"
        ]
    },
    {
        "ElementName": "BaseError",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseError",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegError",
            "FootError"
        ]
    },
    {
        "ElementName": "BaseEversion",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseEversion",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FootEversion"
        ]
    },
    {
        "ElementName": "BaseFlexion",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseFlexion",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegFlexion"
        ]
    },
    {
        "ElementName": "BaseInversion",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseInversion",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FootInversion"
        ]
    },
    {
        "ElementName": "BaseOnda",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseOnda",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegFlag",
            "LegSwing",
            "LegWhip"
        ]
    },
    {
        "ElementName": "BaseSkreef",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/BaseSkreef",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FootSkreef"
        ]
    },
    {
        "ElementName": "Crouch",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/Crouch",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Squat"
        ]
    },
    {
        "ElementName": "Error",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/Error",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Mistake"
        ]
    },
    {
        "ElementName": "ArchDragKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose/ArchDragKlose",
        "SuperElementName": "FootKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ArchKickKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose/ArchKickKlose",
        "SuperElementName": "FootKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FootArchKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose/FootArchKlose",
        "SuperElementName": "FootKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FootDragKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose/FootDragKlose",
        "SuperElementName": "FootKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HeelDragKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose/HeelDragKlose",
        "SuperElementName": "FootKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HeelKickKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose/HeelKickKlose",
        "SuperElementName": "FootKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FootKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose",
        "SuperElementName": "BaseMove",
        "SubElementName": [
            "ArchDragKlose",
            "ArchKickKlose",
            "FootArchKlose",
            "FootDragKlose",
            "HeelDragKlose",
            "HeelKickKlose",
            "ToeDragKlose",
            "ToeKickKlose"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ToeDragKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose/ToeDragKlose",
        "SuperElementName": "FootKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ToeKickKlose",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/FootKlose/ToeKickKlose",
        "SuperElementName": "FootKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BaseMoveFrase",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/Frase",
        "SuperElementName": "BaseMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegMoveFrase",
            "FootMoveFrase"
        ]
    },
    {
        "ElementName": "Hop",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/Hop",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Jump"
        ]
    },
    {
        "ElementName": "Kneel",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/Kneel",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BaseMove",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "BaseAbduction",
            "BaseAbsorb",
            "BaseAdduction",
            "BaseAma",
            "BaseArchSmear",
            "BaseDig",
            "BaseDorsiflexion",
            "BaseDrag",
            "BaseError",
            "BaseEversion",
            "BaseFlexion",
            "BaseInversion",
            "BaseOnda",
            "BaseSkreef",
            "Crouch",
            "Error",
            "FootKlose",
            "Frase",
            "Hop",
            "Kneel",
            "PlantarFlexion",
            "RunStart",
            "Step",
            "Stomp"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LegMove",
            "FootMove"
        ]
    },
    {
        "ElementName": "PlantarFlexion",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/PlantarFlexion",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RunStart",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/RunStart",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "RunningStart"
        ]
    },
    {
        "ElementName": "Step",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/Step",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Stomp",
        "Namespace": "Move/MoveTeori/MoveElements/BaseMove/Stomp",
        "SuperElementName": "BaseMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Stamp"
        ]
    },
    {
        "ElementName": "BrazoAma",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove/BrazoAma",
        "SuperElementName": "BrazoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ArmProp"
        ]
    },
    {
        "ElementName": "BrazoAmble",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove/BrazoAmble",
        "SuperElementName": "BrazoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ArmAmble",
            "ArmAmble"
        ]
    },
    {
        "ElementName": "BrazoCompress",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove/BrazoCompress",
        "SuperElementName": "BrazoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ArmCompression"
        ]
    },
    {
        "ElementName": "BrazoError",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove/BrazoError",
        "SuperElementName": "BrazoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ArmError"
        ]
    },
    {
        "ElementName": "BrazoHook",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove/BrazoHook",
        "SuperElementName": "BrazoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ArmHook"
        ]
    },
    {
        "ElementName": "BrazoOnda",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove/BrazoOnda",
        "SuperElementName": "BrazoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ArmSwing",
            "ArmWhip",
            "ArmFlag"
        ]
    },
    {
        "ElementName": "BrazoRockOver",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove/BrazoRockOver",
        "SuperElementName": "BrazoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ArmRockOver"
        ]
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove/Frase",
        "SuperElementName": "BrazoMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BrazoMove",
        "Namespace": "Move/MoveTeori/MoveElements/BrazoMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "BrazoAma",
            "BrazoAmble",
            "BrazoCompress",
            "BrazoError",
            "BrazoHook",
            "BrazoOnda",
            "BrazoRockOver",
            "Frase"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ArmMove"
        ]
    },
    {
        "ElementName": "CacheError",
        "Namespace": "Move/MoveTeori/MoveElements/CacheMove/CacheError",
        "SuperElementName": "CacheMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Eating",
        "Namespace": "Move/MoveTeori/MoveElements/CacheMove/Eating",
        "SuperElementName": "CacheMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/CacheMove/Frase",
        "SuperElementName": "CacheMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TarpOff",
        "Namespace": "Move/MoveTeori/MoveElements/CacheMove/Frase/TarpOff",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TarpOn",
        "Namespace": "Move/MoveTeori/MoveElements/CacheMove/Frase/TarpOn",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CacheMove",
        "Namespace": "Move/MoveTeori/MoveElements/CacheMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "CacheError",
            "Eating",
            "Frase"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BaseLayerMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/BaseLayerMove",
        "SuperElementName": "ClothingMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BuckleMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/FastenerMove/BuckleMove",
        "SuperElementName": "FastenerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ButtonMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/FastenerMove/ButtonMove",
        "SuperElementName": "FastenerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FastenerMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/FastenerMove",
        "SuperElementName": "ClothingMove",
        "SubElementName": [
            "BuckleMove",
            "ButtonMove",
            "SnapMove",
            "ZelcroMove",
            "ZipperMove"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SnapMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/FastenerMove/SnapMove",
        "SuperElementName": "FastenerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SnapButtonMove"
        ]
    },
    {
        "ElementName": "ZelcroMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/FastenerMove/ZelcroMove",
        "SuperElementName": "FastenerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ZipperMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/FastenerMove/ZipperMove",
        "SuperElementName": "FastenerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "zip up"
        ]
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/Frase",
        "SuperElementName": "ClothingMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "InsulationLayerMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/InsulationLayerMove",
        "SuperElementName": "ClothingMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Layering",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/Layering",
        "SuperElementName": "ClothingMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ClothingLayering"
        ]
    },
    {
        "ElementName": "ClothingMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "BaseLayerMove",
            "FastenerMove",
            "Frase",
            "InsulationLayerMove",
            "Layering",
            "ShellLayerMove",
            "TextilePreservation"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HatMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/ShellLayerMove/HatMove",
        "SuperElementName": "ShellLayerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ShellLayerMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/ShellLayerMove",
        "SuperElementName": "ClothingMove",
        "SubElementName": [
            "HatMove",
            "PocketMove",
            "RainShell",
            "RemoveMud",
            "WindShell"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PocketMove",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/ShellLayerMove/PocketMove",
        "SuperElementName": "ShellLayerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ClothingPocketMove"
        ]
    },
    {
        "ElementName": "RainShell",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/ShellLayerMove/RainShell",
        "SuperElementName": "ShellLayerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "RainJacket",
            "RainCoat"
        ]
    },
    {
        "ElementName": "RemoveMud",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/ShellLayerMove/RemoveMud",
        "SuperElementName": "ShellLayerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "ClaySoil"
        ],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ClothingPurga"
        ]
    },
    {
        "ElementName": "WindShell",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/ShellLayerMove/WindShell",
        "SuperElementName": "ShellLayerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "WindBreaker"
        ]
    },
    {
        "ElementName": "TextilePreservation",
        "Namespace": "Move/MoveTeori/MoveElements/ClothingMove/TextilePreservation",
        "SuperElementName": "ClothingMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ClothingCare"
        ]
    },
    {
        "ElementName": "KorpoAbsorb",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoAbsorb",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyAbsorb"
        ]
    },
    {
        "ElementName": "KorpoBend",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoBend",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyBend"
        ]
    },
    {
        "ElementName": "KorpoError",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoError",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyError"
        ]
    },
    {
        "ElementName": "KorpoLean",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoLean",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyLean"
        ]
    },
    {
        "ElementName": "KorpoOrbit",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoOrbit",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyOrbit"
        ]
    },
    {
        "ElementName": "KorpoPosture",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoPosture",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyPosture"
        ]
    },
    {
        "ElementName": "KorpoPropel",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoPropel",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyPropel"
        ]
    },
    {
        "ElementName": "KorpoRotate",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoRotate",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyRotate"
        ]
    },
    {
        "ElementName": "KorpoSlot",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoSlot",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodySlot"
        ]
    },
    {
        "ElementName": "KorpoTangent",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoTangent",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyTangent"
        ]
    },
    {
        "ElementName": "KorpoTwist",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoTwist",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyTwist",
            "Twist"
        ]
    },
    {
        "ElementName": "KorpoUnder",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/KorpoUnder",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BodyUnder"
        ]
    },
    {
        "ElementName": "Crawl",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/Crawl",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "on all fours"
        ]
    },
    {
        "ElementName": "Fall",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/Fall",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/Frase",
        "SuperElementName": "KorpoMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HipHinge",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/HipHinge",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "InclineAmble",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/InclineAmble",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SlopeAmble"
        ]
    },
    {
        "ElementName": "Jump",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/Jump",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LogAmble",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/LogAmble",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [
            "Speed"
        ],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LogAmble"
        ]
    },
    {
        "ElementName": "KorpoMove",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "KorpoAbsorb",
            "KorpoBend",
            "KorpoError",
            "KorpoLean",
            "KorpoOrbit",
            "KorpoPosture",
            "KorpoPropel",
            "KorpoRotate",
            "KorpoSlot",
            "KorpoTangent",
            "KorpoTwist",
            "KorpoUnder",
            "Crawl",
            "Fall",
            "Frase",
            "HipHinge",
            "InclineAmble",
            "Jump",
            "LogAmble",
            "SpineExtension",
            "SpineFlexion",
            "Stand",
            "StandUp",
            "StepInto",
            "StepOver",
            "TrenchAmble",
            "Amble"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpineExtension",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/SpineExtension",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [
            "JellyPump"
        ],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BendBackwards"
        ]
    },
    {
        "ElementName": "SpineFlexion",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/SpineFlexion",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "bend over"
        ]
    },
    {
        "ElementName": "Stand",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/Stand",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "MountainPose"
        ]
    },
    {
        "ElementName": "StandUp",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/StandUp",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "get up"
        ]
    },
    {
        "ElementName": "StepInto",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/StepInto",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "StepOver",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/StepOver",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TrenchAmble",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/TrenchAmble",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Amble",
        "Namespace": "Move/MoveTeori/MoveElements/KorpoMove/Amble",
        "SuperElementName": "KorpoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "slow walk"
        ]
    },
    {
        "ElementName": "DendroEval",
        "Namespace": "Move/MoveTeori/MoveElements/DendroMove/DendroEval",
        "SuperElementName": "DendroMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "DendroTest",
            "TreeTest",
            "SeedlingTest"
        ]
    },
    {
        "ElementName": "DendroInsert",
        "Namespace": "Move/MoveTeori/MoveElements/DendroMove/DendroInsert",
        "SuperElementName": "DendroMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "TreeInsert"
        ]
    },
    {
        "ElementName": "DendroLoad",
        "Namespace": "Move/MoveTeori/MoveElements/DendroMove/DendroLoad",
        "SuperElementName": "DendroMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "TreeLoad",
            "TreeReload",
            "GetTree",
            "draw a tree"
        ]
    },
    {
        "ElementName": "DendroMano",
        "Namespace": "Move/MoveTeori/MoveElements/DendroMove/DendroMano",
        "SuperElementName": "DendroMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "DendroGrip",
            "TreeGrip"
        ]
    },
    {
        "ElementName": "DendroMove",
        "Namespace": "Move/MoveTeori/MoveElements/DendroMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "DendroEval",
            "DendroInsert",
            "DendroLoad",
            "DendroMano"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SeedingMove"
        ]
    },
    {
        "ElementName": "BranchSnap",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/BranchMove/BranchSnap",
        "SuperElementName": "BranchMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BranchBreak"
        ]
    },
    {
        "ElementName": "BranchMove",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/BranchMove",
        "SuperElementName": "FloraMove",
        "SubElementName": [
            "BranchSnap"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FloraBlock",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraBlock",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "PlantBlock"
        ]
    },
    {
        "ElementName": "FloraCatch",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraCatch",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FloraError",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraError",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FloraFold",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraFold",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FloraBend"
        ]
    },
    {
        "ElementName": "FloraMachete",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraMachete",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FloraAxe",
            "FloraHack"
        ]
    },
    {
        "ElementName": "FloraMano",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraMano",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FloraGrip"
        ]
    },
    {
        "ElementName": "FloraParry",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraParry",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FloraDeflect"
        ]
    },
    {
        "ElementName": "FloraPassage",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraPassage",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FlorTraverse"
        ]
    },
    {
        "ElementName": "FloraSnap",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/FloraSnap",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FloraBreak"
        ]
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/Frase",
        "SuperElementName": "FloraMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LogLaunch",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/LogLaunch",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LogThrow"
        ]
    },
    {
        "ElementName": "FloraMove",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "BranchMove",
            "FloraBlock",
            "FloraCatch",
            "FloraError",
            "FloraFold",
            "FloraMachete",
            "FloraMano",
            "FloraParry",
            "FloraPassage",
            "FloraSnap",
            "Frase",
            "LogLaunch",
            "TrunkMove",
            "TrunkMove"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TrunkMove",
        "Namespace": "Move/MoveTeori/MoveElements/FloraMove/TrunkMove",
        "SuperElementName": "FloraMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FocusLook",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/FocusLook",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/Frase",
        "SuperElementName": "HeadMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleAlloMano",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HeadError",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/HeadError",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HeadProtraction",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/HeadProtraction",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "move head forwards"
        ]
    },
    {
        "ElementName": "HeadRetraction",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/HeadRetraction",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "move head backwards"
        ]
    },
    {
        "ElementName": "HeadTilt",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/HeadTilt",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ListenTo",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/ListenTo",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LookAway",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/LookAway",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "NeckExtension",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/NeckExtension",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LookUp",
            "tilt head up"
        ]
    },
    {
        "ElementName": "NeckFlexion",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/NeckFlexion",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "LookDown",
            "tilt head down"
        ]
    },
    {
        "ElementName": "HeadMove",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "FocusLook",
            "Frase",
            "HeadError",
            "HeadProtraction",
            "HeadRetraction",
            "HeadTilt",
            "ListenTo",
            "LookAway",
            "NeckExtension",
            "NeckFlexion",
            "Speak"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Speak",
        "Namespace": "Move/MoveTeori/MoveElements/HeadMove/Speak",
        "SuperElementName": "HeadMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Talk"
        ]
    },
    {
        "ElementName": "BootError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/BootError",
        "SuperElementName": "BootMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BootMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/BootMano",
        "SuperElementName": "BootMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BootGrip"
        ]
    },
    {
        "ElementName": "BootPreservation",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/BootPreservation",
        "SuperElementName": "BootMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BootSkreef",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/BootSkreef",
        "SuperElementName": "BootMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BootOff",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/Frase/BootOff",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BootOn",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/Frase/BootOn",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LaceLoosen",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/Frase/LaceLoosen",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LaceTighten",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/Frase/LaceTighten",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/Frase",
        "SuperElementName": "BootMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LaceMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove/LaceMove",
        "SuperElementName": "BootMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BootMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BootMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "BootError",
            "BootMano",
            "BootPreservation",
            "BootSkreef",
            "Frase",
            "LaceMove"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BottleMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BottleMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Waterbottle",
            "Flask"
        ]
    },
    {
        "ElementName": "BoxConstruct",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/BoxConstruct",
        "SuperElementName": "BoxMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "build a Box",
            "make a Box",
            "assemble a Box"
        ]
    },
    {
        "ElementName": "BoxError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/BoxError",
        "SuperElementName": "BoxMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BoxLift",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/BoxLift",
        "SuperElementName": "BoxMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BoxLock",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/BoxLock",
        "SuperElementName": "BoxMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BoxClose"
        ]
    },
    {
        "ElementName": "BoxMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/BoxMano",
        "SuperElementName": "BoxMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BoxGrip"
        ]
    },
    {
        "ElementName": "BoxSlide",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/BoxSlide",
        "SuperElementName": "BoxMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BoxTransport",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/BoxTransport",
        "SuperElementName": "BoxMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BoxCarry"
        ]
    },
    {
        "ElementName": "BoxStack",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/Frase/BoxStack",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove/Frase",
        "SuperElementName": "BoxMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BoxMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BoxMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "BoxConstruct",
            "BoxError",
            "BoxLift",
            "BoxLock",
            "BoxMano",
            "BoxSlide",
            "BoxTransport",
            "Frase"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BundleError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove/BundleError",
        "SuperElementName": "BundleMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BundleMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove/BundleMano",
        "SuperElementName": "BundleMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BundleGrip"
        ]
    },
    {
        "ElementName": "BundlePeel",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove/BundlePeel",
        "SuperElementName": "BundleMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BundleUnwrap",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove/BundleUnwrap",
        "SuperElementName": "BundleMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BundleCount",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove/Frase/BundleCount",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "Bundle counting"
        ]
    },
    {
        "ElementName": "BundleAlloMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove/Frase/BundleAlloMano",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BundleStack",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove/Frase/BundleStack",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove/Frase",
        "SuperElementName": "BundleMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BundleMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/BundleMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "BundleError",
            "BundleMano",
            "BundlePeel",
            "BundleUnwrap",
            "Frase"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "DoruAmble",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruAmble",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffAmble"
        ]
    },
    {
        "ElementName": "DoruAnkor",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruAnkor",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffAnchor",
            "DoruAnchor"
        ]
    },
    {
        "ElementName": "DoruBump",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruBump",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffBump"
        ]
    },
    {
        "ElementName": "DoruPont",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruPont",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffBridge",
            "DoruBridge"
        ]
    },
    {
        "ElementName": "DoruDrag",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruDrag",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffDrag"
        ]
    },
    {
        "ElementName": "DoruError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruError",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffError"
        ]
    },
    {
        "ElementName": "DoruMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruMano",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffGrip"
        ]
    },
    {
        "ElementName": "DoruPogo",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruPogo",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffPogo"
        ]
    },
    {
        "ElementName": "DoruPoke",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruPoke",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffPoke"
        ]
    },
    {
        "ElementName": "DoruPost",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruPost",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffPost",
            "StaffPlant",
            "DoruPlant"
        ]
    },
    {
        "ElementName": "DoruAma",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruAma",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "DoruProp",
            "StaffProp"
        ]
    },
    {
        "ElementName": "DoruPropel",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruPropel",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "DoruSlam",
            "StaffSlam"
        ]
    },
    {
        "ElementName": "DoruRotate",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruRotate",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffRotate"
        ]
    },
    {
        "ElementName": "DoruSkreef",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruSkreef",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffSkreef"
        ]
    },
    {
        "ElementName": "DoruSlap",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruSlap",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffSlap"
        ]
    },
    {
        "ElementName": "DoruSlide",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruSlide",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffSlide"
        ]
    },
    {
        "ElementName": "DoruStall",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruStall",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffStall"
        ]
    },
    {
        "ElementName": "DoruStomp",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruStomp",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffStomp"
        ]
    },
    {
        "ElementName": "DoruAllo",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruAllo",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffAllo"
        ]
    },
    {
        "ElementName": "DoruOnda",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove/DoruOnda",
        "SuperElementName": "DoruMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "StaffOnda",
            "StaffSwing"
        ]
    },
    {
        "ElementName": "DoruMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/DoruMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "DoruAmble",
            "DoruAnkor",
            "DoruBump",
            "DoruPont",
            "DoruDrag",
            "DoruError",
            "DoruMano",
            "DoruPogo",
            "DoruPoke",
            "DoruPost",
            "DoruAma",
            "DoruPropel",
            "DoruRotate",
            "DoruSkreef",
            "DoruSlap",
            "DoruSlide",
            "DoruStall",
            "DoruStomp",
            "DoruAllo",
            "DoruOnda",
            "DoruTransfer"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "GloveOff",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/GloveMove/Frase/GloveOff",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "GloveOn",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/GloveMove/Frase/GloveOn",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/GloveMove/Frase",
        "SuperElementName": "GloveMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "GloveError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/GloveMove/GloveError",
        "SuperElementName": "GloveMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "GloveMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/GloveMove/GloveMano",
        "SuperElementName": "GloveMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "GlovePreservation",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/GloveMove/GlovePreservation",
        "SuperElementName": "GloveMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "GloveMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/GloveMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "Frase",
            "GloveError",
            "GloveMano",
            "GlovePreservation"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "KarabinerError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/KarabinerMove/KarabinerError",
        "SuperElementName": "KarabinerMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "CarabinerError"
        ]
    },
    {
        "ElementName": "KarabinerMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/KarabinerMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "KarabinerError"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "CarabinerMove"
        ]
    },
    {
        "ElementName": "KitOffFrase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/KitMove/Frase/KitOffFrase",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "CacheBag"
        ]
    },
    {
        "ElementName": "KitOnFrase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/KitMove/Frase/KitOnFrase",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/KitMove/Frase",
        "SuperElementName": "KitMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "KitError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/KitMove/KitError",
        "SuperElementName": "KitMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "CacheBagError"
        ]
    },
    {
        "ElementName": "KitPreservation",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/KitMove/KitPreservation",
        "SuperElementName": "KitMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "KitMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/KitMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "Frase",
            "KitError",
            "KitPreservation"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "CacheBagMove"
        ]
    },
    {
        "ElementName": "MarkaPut",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/Frase/MarkaPut",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "MarkaPlace"
        ]
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/Frase",
        "SuperElementName": "MarkaMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MarkaError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/MarkaError",
        "SuperElementName": "MarkaMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MarkaforMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/MarkaforMove",
        "SuperElementName": "MarkaMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FlaggerMove"
        ]
    },
    {
        "ElementName": "MarkaKnot",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/MarkaKnot",
        "SuperElementName": "MarkaMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FlagKnot"
        ]
    },
    {
        "ElementName": "MarkaLoad",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/MarkaLoad",
        "SuperElementName": "MarkaMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FlagLoad"
        ]
    },
    {
        "ElementName": "MarkaMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/MarkaMano",
        "SuperElementName": "MarkaMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FlagGrip"
        ]
    },
    {
        "ElementName": "MarkaRip",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/MarkaRip",
        "SuperElementName": "MarkaMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FlagRip"
        ]
    },
    {
        "ElementName": "MarkaRoll",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove/MarkaRoll",
        "SuperElementName": "MarkaMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "FlagRoll"
        ]
    },
    {
        "ElementName": "MarkaMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/MarkaMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "Frase",
            "MarkaError",
            "MarkaforMove",
            "MarkaKnot",
            "MarkaLoad",
            "MarkaMano",
            "MarkaRip",
            "MarkaRoll"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "InstrumentMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "BootMove",
            "BottleMove",
            "BoxMove",
            "BundleMove",
            "DoruMove",
            "GloveMove",
            "KarabinerMove",
            "KitMove",
            "MarkaMove",
            "PlantaforMove",
            "RadiorMove",
            "RepairMove",
            "RopeMove",
            "SpadeMove",
            "TibiorMove"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "ToolMove"
        ]
    },
    {
        "ElementName": "BackBagMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/BagMove/BackBagMove",
        "SuperElementName": "BagMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BagEmpty",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/BagMove/BagEmpty",
        "SuperElementName": "BagMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BagIn",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/BagMove/BagIn",
        "SuperElementName": "BagMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "BagUp"
        ]
    },
    {
        "ElementName": "BagLift",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/BagMove/BagLift",
        "SuperElementName": "BagMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BagBlock",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/BagMove/BagShield",
        "SuperElementName": "BagMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/Frase",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PlantaforMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "Frase",
            "PlantaforAdjust",
            "PlantaforError",
            "PlantaforLift",
            "PlantaforOff",
            "PlantaforOn",
            "PlantaforPreservation",
            "PlantaforSlide",
            "PlantaforTransport"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "PlantingBagsMove"
        ]
    },
    {
        "ElementName": "PlantaforAdjust",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/PlantaforAdjust",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "PlantingBagsAdjust"
        ]
    },
    {
        "ElementName": "PlantaforError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/PlantaforError",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "PlantingBagsError"
        ]
    },
    {
        "ElementName": "PlantaforLift",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/PlantaforLift",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "PlantingBagsLift"
        ]
    },
    {
        "ElementName": "PlantaforOff",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/PlantaforOff",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "PlantingBagsOff",
            "BagsOff"
        ]
    },
    {
        "ElementName": "PlantaforOn",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/PlantaforOn",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "bag on",
            "PlantingBagsOn"
        ]
    },
    {
        "ElementName": "PlantaforPreservation",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/PlantaforPreservation",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PlantaforSlide",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/PlantaforSlide",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PlantaforTransport",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/PlantaforMove/PlantaforTransport",
        "SuperElementName": "PlantaforMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RadiorMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/RadiorMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "RadiorPreservation"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "VambraceMove"
        ]
    },
    {
        "ElementName": "RadiorPreservation",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/RadiorMove/RadiorPreservation",
        "SuperElementName": "RadiorMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SewingFrase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/RepairMove/Frase/SewingFrase",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RepairMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/RepairMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "RepairError"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RepairError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/RepairMove/RepairError",
        "SuperElementName": "RepairMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RopeMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/RopeMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "RopeError"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RopeError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/RopeMove/RopeError",
        "SuperElementName": "RopeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CollarMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/CollarMano",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "CollarGrip"
        ]
    },
    {
        "ElementName": "SpadeTest",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/Frase/SpadeTest",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SpadeProbe"
        ]
    },
    {
        "ElementName": "SpadeMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "CollarMano",
            "SpadeAma",
            "SpadeAmble",
            "SpadeAnkor",
            "SpadeBallista",
            "SpadeBlock",
            "SpadeDendrektomi",
            "SpadeOpen",
            "SpadeDrag",
            "SpadeError",
            "SpadeHook",
            "SpadeMano",
            "SpadeMuscleUp",
            "SpadeOnda",
            "SpadePlastBimano",
            "SpadePlastMano",
            "SpadePogo",
            "SpadePoke",
            "SpadePost",
            "SpadePreservation",
            "SpadePropel",
            "SpadePurga",
            "SpadeRotate",
            "SpadeKlose",
            "SpadeSkreef",
            "SpadeSlap",
            "SpadeStall",
            "SpadeStomp",
            "SpadeTomi",
            "SpadeAlloMano",
            "SpadeTransport"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeAma",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeAma",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SpadeProp"
        ]
    },
    {
        "ElementName": "SpadeAmble",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeAmble",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SpadeWalk"
        ]
    },
    {
        "ElementName": "SpadeAnkor",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeAnkor",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeBallista",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeBallista",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SpadeThrow"
        ]
    },
    {
        "ElementName": "SpadeBlock",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeBlock",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SpadeDeflect"
        ]
    },
    {
        "ElementName": "SpadeDendrektomi",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeDendrektomi",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "RemoveTree",
            "RemoveDendron",
            "pull a tree"
        ]
    },
    {
        "ElementName": "SpadeOpen",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeOpen",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeDrag",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeDrag",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeError",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeHook",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeHook",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeMano",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SpadeGrip"
        ]
    },
    {
        "ElementName": "SpadeMuscleUp",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeMuscleUp",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeOnda",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeOnda",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "SpadeWhip",
            "SpadeSwing",
            "SpadeFlag"
        ]
    },
    {
        "ElementName": "SpadePlastBimano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadePlastBimano",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["SpadeHandleMatch"]
    },
    {
        "ElementName": "SpadePlastMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadePlastMano",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["SpadeHandleGrip"]
    },
    {
        "ElementName": "SpadePogo",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadePogo",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadePoke",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadePoke",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadePost",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadePost",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["SpadePlant"]
    },
    {
        "ElementName": "SpadePreservation",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadePreservation",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["SpadeCare"]
    },
    {
        "ElementName": "SpadePropel",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadePropel",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["SpadeSlam"]
    },
    {
        "ElementName": "SpadePurga",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadePurga",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["SpadeClean"]
    },
    {
        "ElementName": "SpadeRotate",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeRotate",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeKlose",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeKlose",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["SpadeClose"]
    },
    {
        "ElementName": "SpadeSkreef",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeSkreef",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["SpadeScreef"]
    },
    {
        "ElementName": "SpadeSlap",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeSlap",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeStall",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeStall",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeStomp",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeStomp",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeTomi",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeTomi",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeAllo",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeAlloMano",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["HandAllo","AlloMano"]
    },
    {
        "ElementName": "SpadeTransport",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/SpadeMove/SpadeTransport",
        "SuperElementName": "SpadeMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/TibiorMove/Frase",
        "SuperElementName": "TibiorMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TibiorOffFrase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/TibiorMove/Frase/TibiorOffFrase",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TibiorOnFrase",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/TibiorMove/Frase/TibiorOnFrase",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TibiorMove",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/TibiorMove",
        "SuperElementName": "InstrumentMove",
        "SubElementName": [
            "Frase",
            "TibiorError",
            "TibiorMano",
            "TibiorPreservation"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TibiorError",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/TibiorMove/TibiorError",
        "SuperElementName": "TibiorMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TibiorMano",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/TibiorMove/TibiorMano",
        "SuperElementName": "TibiorMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TibiorPreservation",
        "Namespace": "Move/MoveTeori/MoveElements/InstrumentMove/TibiorMove/TibiorPreservation",
        "SuperElementName": "TibiorMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BagMano",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/BagMano",
        "SuperElementName": "ManoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BoxMano",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/BoxMano",
        "SuperElementName": "ManoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/Frase",
        "SuperElementName": "ManoMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoCompress",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoCompress",
        "SuperElementName": "ManoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoDig",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoDig",
        "SuperElementName": "ManoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoOrbit",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoOrbit",
        "SuperElementName": "ManoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoPoke",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoPoke",
        "SuperElementName": "ManoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HammerKlose",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoKlose/HammerKlose",
        "SuperElementName": "ManoKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoDragKlose",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoKlose/ManoDragKlose",
        "SuperElementName": "ManoKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoKlose",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoKlose",
        "SuperElementName": "ManoMove",
        "SubElementName": [
            "HammerKlose",
            "ManoDragKlose",
            "PalmKlose",
            "PunchKlose",
            "SlapKlose"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PalmKlose",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoKlose/PalmKlose",
        "SuperElementName": "ManoKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PunchKlose",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoKlose/PunchKlose",
        "SuperElementName": "ManoKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SlapKlose",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoKlose/SlapKlose",
        "SuperElementName": "ManoKlose",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoSkreef",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoSkreef",
        "SuperElementName": "ManoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoSlide",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove/ManoSlide",
        "SuperElementName": "ManoMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ManoMove",
        "Namespace": "Move/MoveTeori/MoveElements/ManoMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "BagMano",
            "BoxMano",
            "Frase",
            "ManoCompress",
            "ManoDig",
            "ManoOrbit",
            "ManoPoke",
            "ManoKlose",
            "ManoSkreef",
            "ManoSlide"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveElements",
        "Namespace": "Move/MoveTeori/MoveElements",
        "SuperElementName": "MoveTeori",
        "SubElementName": [
            "BaseMove",
            "BrazoMove",
            "CacheMove",
            "ClothingMove",
            "KorpoMove",
            "DendroMove",
            "FloraMove",
            "HeadMove",
            "InstrumentMove",
            "ManoMove",
            "SiteMove",
            "TruckMove"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Frase",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/Frase",
        "SuperElementName": "SiteMove",
        "SubElementName": [
            "TarpOff",
            "TarpOn",
            "BootOff",
            "BootOn",
            "LaceLoosen",
            "LaceTighten",
            "BoxStack",
            "BundleCount",
            "BundleManoAllo",
            "BundleStack",
            "GloveOff",
            "GloveOn",
            "KitOffFrase",
            "KitOnFrase",
            "MarkaGet",
            "MarkaPut",
            "SewingFrase",
            "SpadeTest",
            "TibiorOffFrase",
            "TibiorOnFrase",
            "TruckSequence"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteMove",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "Frase",
            "SiteOpen",
            "SiteEnter",
            "SiteError",
            "SiteEval",
            "SiteExtract",
            "SiteMark",
            "SiteKlose",
            "SiteSelect",
            "SiteSkreef"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteOpen",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteOpen",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": ["open a hole","OpenHole"]
    },
    {
        "ElementName": "SiteEnter",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteEnter",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteError",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteError",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteEval",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteEval",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteExtract",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteExtract",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteMark",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteMark",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteKlose",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteKlose",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteSelect",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteSelect",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteSkreef",
        "Namespace": "Move/MoveTeori/MoveElements/SiteMove/SiteSkreef",
        "SuperElementName": "SiteMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TruckSequence",
        "Namespace": "Move/MoveTeori/MoveElements/TruckMove/Frase/TruckSequence",
        "SuperElementName": "Frase",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TruckMove",
        "Namespace": "Move/MoveTeori/MoveElements/TruckMove",
        "SuperElementName": "MoveElements",
        "SubElementName": [
            "TruckError",
            "TruckSit",
            "TruckSleep"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TruckError",
        "Namespace": "Move/MoveTeori/MoveElements/TruckMove/TruckError",
        "SuperElementName": "TruckMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TruckSit",
        "Namespace": "Move/MoveTeori/MoveElements/TruckMove/TruckSit",
        "SuperElementName": "TruckMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TruckSleep",
        "Namespace": "Move/MoveTeori/MoveElements/TruckMove/TruckSleep",
        "SuperElementName": "TruckMove",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveCoverage",
        "Namespace": "Move/MoveTeori/MovePropositions/MoveCoverage",
        "SuperElementName": "MovePropositions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveDensity",
        "Namespace": "Move/MoveTeori/MovePropositions/MoveDensity",
        "SuperElementName": "MovePropositions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BaseExtreme",
        "Namespace": "Move/MoveTeori/MovePropositions/MoveExtreme/BaseExtreme",
        "SuperElementName": "MoveExtreme",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BrazoExtreme",
        "Namespace": "Move/MoveTeori/MovePropositions/MoveExtreme/BrazoExtreme",
        "SuperElementName": "MoveExtreme",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveExtreme",
        "Namespace": "Move/MoveTeori/MovePropositions/MoveExtreme",
        "SuperElementName": "MovePropositions",
        "SubElementName": [
            "BaseExtreme",
            "BrazoExtreme"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveLine",
        "Namespace": "Move/MoveTeori/MovePropositions/MoveLine",
        "SuperElementName": "MovePropositions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveSpace",
        "Namespace": "Move/MoveTeori/MovePropositions/MoveSpace",
        "SuperElementName": "MovePropositions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveSimbols",
        "Namespace": "Move/MoveTeori/MoveSimbols",
        "SuperElementName": "MoveTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveTeori",
        "Namespace": "Move/MoveTeori",
        "SuperElementName": "Move",
        "SubElementName": [
            "MoveAxiom",
            "MoveDefinitions",
            "MoveElements",
            "MoveSimbols"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PsikeOverview",
        "Namespace": "Psike/PsikeOverview",
        "SuperElementName": "Psike",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Arousal",
        "Namespace": "Psike/PsikeTeori/Arousal",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Attention",
        "Namespace": "Psike/PsikeTeori/Attention",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BranchBreakSound",
        "Namespace": "Psike/PsikeTeori/Audio/BranchBreakSound",
        "SuperElementName": "Audio",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LogBreakSound",
        "Namespace": "Psike/PsikeTeori/Audio/LogBreakSound",
        "SuperElementName": "Audio",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Music",
        "Namespace": "Psike/PsikeTeori/Audio/Music",
        "SuperElementName": "Audio",
        "SubElementName": [
            "Playlists"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Playlists",
        "Namespace": "Psike/PsikeTeori/Audio/Music/Playlists",
        "SuperElementName": "Music",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Audio",
        "Namespace": "Psike/PsikeTeori/Audio",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "BranchBreakSound",
            "LogBreakSound",
            "Music",
            "SlashSound",
            "SoilSound",
            "SpadeSound"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SlashSound",
        "Namespace": "Psike/PsikeTeori/Audio/SlashSound",
        "SuperElementName": "Audio",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SoilSound",
        "Namespace": "Psike/PsikeTeori/Audio/SoilSound",
        "SuperElementName": "Audio",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpadeSound",
        "Namespace": "Psike/PsikeTeori/Audio/SpadeSound",
        "SuperElementName": "Audio",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Avoidance",
        "Namespace": "Psike/PsikeTeori/Avoidance",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Awareness",
        "Namespace": "Psike/PsikeTeori/Awareness",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Compassion",
        "Namespace": "Psike/PsikeTeori/Compassion",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Competition",
        "Namespace": "Psike/PsikeTeori/Competition",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CompressionSense",
        "Namespace": "Psike/PsikeTeori/CompressionSense",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Confidence",
        "Namespace": "Psike/PsikeTeori/Confidence",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ControlFlow",
        "Namespace": "Psike/PsikeTeori/ControlFlow",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BundleCounting",
        "Namespace": "Psike/PsikeTeori/Counting/BundleCounting",
        "SuperElementName": "Counting",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Counting",
        "Namespace": "Psike/PsikeTeori/Counting",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "BundleCounting",
            "StepCount"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "StepCount",
        "Namespace": "Psike/PsikeTeori/Counting/StepCount",
        "SuperElementName": "Counting",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BagUpSizeDecision",
        "Namespace": "Psike/PsikeTeori/Decision/BagUpSizeDecision",
        "SuperElementName": "Decision",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "GoOrNoGo",
        "Namespace": "Psike/PsikeTeori/Decision/GoOrNoGo",
        "SuperElementName": "Decision",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MicrositeSelection",
        "Namespace": "Psike/PsikeTeori/Decision/MicrositeSelection",
        "SuperElementName": "Decision",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Decision",
        "Namespace": "Psike/PsikeTeori/Decision",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "BagUpSizeDecision",
            "GoOrNoGo",
            "MicrositeSelection"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Anger",
        "Namespace": "Psike/PsikeTeori/Emotion/Anger",
        "SuperElementName": "Emotion",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Disgust",
        "Namespace": "Psike/PsikeTeori/Emotion/Disgust",
        "SuperElementName": "Emotion",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Fear",
        "Namespace": "Psike/PsikeTeori/Emotion/Fear",
        "SuperElementName": "Emotion",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Joy",
        "Namespace": "Psike/PsikeTeori/Emotion/Joy",
        "SuperElementName": "Emotion",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Emotion",
        "Namespace": "Psike/PsikeTeori/Emotion",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "Anger",
            "Disgust",
            "Fear",
            "Joy",
            "Sadness"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Sadness",
        "Namespace": "Psike/PsikeTeori/Emotion/Sadness",
        "SuperElementName": "Emotion",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Fatigue",
        "Namespace": "Psike/PsikeTeori/Energy/Fatigue",
        "SuperElementName": "Energy",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Energy",
        "Namespace": "Psike/PsikeTeori/Energy",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "Fatigue"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BagFillEstimation",
        "Namespace": "Psike/PsikeTeori/Estimation/BagFillEstimation",
        "SuperElementName": "Estimation",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Estimation",
        "Namespace": "Psike/PsikeTeori/Estimation",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "BagFillEstimation",
            "SpaceEstimation",
            "TimeEstimation"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpaceEstimation",
        "Namespace": "Psike/PsikeTeori/Estimation/SpaceEstimation",
        "SuperElementName": "Estimation",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TimeEstimation",
        "Namespace": "Psike/PsikeTeori/Estimation/TimeEstimation",
        "SuperElementName": "Estimation",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Event",
        "Namespace": "Psike/PsikeTeori/Event",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Homeostasis",
        "Namespace": "Psike/PsikeTeori/Homeostasis",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Judgement",
        "Namespace": "Psike/PsikeTeori/Judgement",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Learning",
        "Namespace": "Psike/PsikeTeori/Learning",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LongTermMemory",
        "Namespace": "Psike/PsikeTeori/Memory/LongTermMemory",
        "SuperElementName": "Memory",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "NumberMemory",
        "Namespace": "Psike/PsikeTeori/Memory/NumberMemory",
        "SuperElementName": "Memory",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Memory",
        "Namespace": "Psike/PsikeTeori/Memory",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "LongTermMemory",
            "NumberMemory",
            "ShortTermMemory",
            "ViaMemory",
            "WorkingMemory"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ShortTermMemory",
        "Namespace": "Psike/PsikeTeori/Memory/ShortTermMemory",
        "SuperElementName": "Memory",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaMemory",
        "Namespace": "Psike/PsikeTeori/Memory/ViaMemory",
        "SuperElementName": "Memory",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "WorkingMemory",
        "Namespace": "Psike/PsikeTeori/Memory/WorkingMemory",
        "SuperElementName": "Memory",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Mindfulness",
        "Namespace": "Psike/PsikeTeori/Mindfulness",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Mindset",
        "Namespace": "Psike/PsikeTeori/Mindset",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Muscle",
        "Namespace": "Psike/PsikeTeori/Muscle",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FlowState",
        "Namespace": "Psike/PsikeTeori/NeuroState/FlowState",
        "SuperElementName": "NeuroState",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "NeuroState",
        "Namespace": "Psike/PsikeTeori/NeuroState",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "FlowState"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Proprioception",
        "Namespace": "Psike/PsikeTeori/Proprioception",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Resilience",
        "Namespace": "Psike/PsikeTeori/Resilience",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpatialCognition",
        "Namespace": "Psike/PsikeTeori/SpatialCognition",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BagOutTime",
        "Namespace": "Psike/PsikeTeori/Time/BagOutTime",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CacheTime",
        "Namespace": "Psike/PsikeTeori/Time/CacheTime",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "DailySchedule",
        "Namespace": "Psike/PsikeTeori/Time/DailySchedule",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MoveTiming",
        "Namespace": "Psike/PsikeTeori/Time/MoveTiming",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Time",
        "Namespace": "Psike/PsikeTeori/Time",
        "SuperElementName": "PsikeTeori",
        "SubElementName": [
            "BagOutTime",
            "CacheTime",
            "DailySchedule",
            "MoveTiming",
            "Planning",
            "Timer",
            "AnteTime",
            "DuringTime",
            "PostTime",
            "Speed"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Planning",
        "Namespace": "Psike/PsikeTeori/Time/Planning",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Timer",
        "Namespace": "Psike/PsikeTeori/Time/Timer",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RefOverview",
        "Namespace": "RefOverview",
        "SuperElementName": [],
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "InputElement.py",
        "Namespace": "Skema/InputElement.py",
        "SuperElementName": "Skema",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Skema",
        "Namespace": "Skema",
        "SuperElementName": [],
        "SubElementName": [
            "InputElement.py",
            "Skema_AllElements.json"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Skema_AllElements.json",
        "Namespace": "Skema/Skema_AllElements.json",
        "SuperElementName": "Skema",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FastLand",
        "Namespace": "Via/ViaMetron/LandSpeed/FastLand",
        "SuperElementName": "LandSpeed",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LandSpeed",
        "Namespace": "Via/ViaMetron/LandSpeed",
        "SuperElementName": "ViaMetron",
        "SubElementName": [
            "FastLand",
            "SlowLand"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SlowLand",
        "Namespace": "Via/ViaMetron/LandSpeed/SlowLand",
        "SuperElementName": "LandSpeed",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaMetron",
        "Namespace": "Via/ViaMetron",
        "SuperElementName": "Via",
        "SubElementName": [
            "LandSpeed",
            "ViaKratos",
            "ViaKuboi",
            "ViaTeknik"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaKratos",
        "Namespace": "Via/ViaMetron/ViaKratos",
        "SuperElementName": "ViaMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaKuboi",
        "Namespace": "Via/ViaMetron/ViaKuboi",
        "SuperElementName": "ViaMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaTeknik",
        "Namespace": "Via/ViaMetron/ViaTeknik",
        "SuperElementName": "ViaMetron",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaOverview",
        "Namespace": "Via/ViaOverview",
        "SuperElementName": "Via",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FillPlanSelection",
        "Namespace": "Via/ViaPraktik/FillPlanSelection",
        "SuperElementName": "ViaPraktik",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaError",
        "Namespace": "Via/ViaPraktik/ViaError",
        "SuperElementName": "ViaPraktik",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaElements",
        "Namespace": "Via/ViaTeori/ViaElements",
        "SuperElementName": "ViaTeori",
        "SubElementName": [
            "ViaAxiom",
            "ViaPropositions"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaAxiom",
        "Namespace": "Via/ViaTeori/ViaElements/ViaAxiom",
        "SuperElementName": "ViaElements",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Density",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Density",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CardinalDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/CardinalDirection",
        "SuperElementName": "Direction",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Direction",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [
            "CardinalDirection",
            "RelativeDirection"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "AnteriorDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/AnteriorDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "DiaDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/DiaDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "EktoDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/EktoDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "InDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/InDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "OnDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/OnDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "OverDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/OverDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RelativeDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection",
        "SuperElementName": "Direction",
        "SubElementName": [
            "AnteriorDirection",
            "DiaDirection",
            "EktoDirection",
            "InDirection",
            "OnDirection",
            "OverDirection",
            "ParaDirection",
            "PeriDirection",
            "PosteriorDirection",
            "ProgressDirection",
            "ProximalDirection",
            "RegressDirection"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ParaDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/ParaDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PeriDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/PeriDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PosteriorDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/PosteriorDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ProgressDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/ProgressDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ProximalDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/ProximalDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RegressDirection",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Direction/RelativeDirection/RegressDirection",
        "SuperElementName": "RelativeDirection",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Fill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Fill",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [
            "ObstacleFill",
            "TeamFill",
            "ZoneFill"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Kontakt",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Kontakt",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Limit",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Limit",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Line",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Line",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Marka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Marka",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CenterPoint",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point/CenterPoint",
        "SuperElementName": "Point",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "InflectionPoint",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point/InflectionPoint",
        "SuperElementName": "Point",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MidPoint",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point/MidPoint",
        "SuperElementName": "Point",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Point",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [
            "CenterPoint",
            "InflectionPoint",
            "MidPoint",
            "ReferencePoint",
            "ReflectionPoint",
            "TargetPoint",
            "VertexPoint",
            "Viewpoint"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ReferencePoint",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point/ReferencePoint",
        "SuperElementName": "Point",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ReflectionPoint",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point/ReflectionPoint",
        "SuperElementName": "Point",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TargetPoint",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point/TargetPoint",
        "SuperElementName": "Point",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "VertexPoint",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point/VertexPoint",
        "SuperElementName": "Point",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Viewpoint",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Point/Viewpoint",
        "SuperElementName": "Point",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Space",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Space",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "AnteTime",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Time/AnteTime",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "DuringTime",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Time/DuringTime",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Time",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Time",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [
            "BagOutTime",
            "CacheTime",
            "DailySchedule",
            "MoveTiming",
            "Planning",
            "Timer",
            "AnteTime",
            "DuringTime",
            "PostTime",
            "Speed"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PostTime",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Time/PostTime",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Speed",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Time/Speed",
        "SuperElementName": "Time",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Vium",
        "Namespace": "Via/ViaTeori/ViaElements/ViaDefinitions/Vium",
        "SuperElementName": "ViaDefinitions",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaPropositions",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions",
        "SuperElementName": "ViaElements",
        "SubElementName": [
            "ViaProblem",
            "ViaTeorem"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Alignment",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Alignment",
        "SuperElementName": "ViaProblem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ObstacleFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/ObstacleFill",
        "SuperElementName": "Fill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Fill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill",
        "SuperElementName": "ViaProblem",
        "SubElementName": [
            "ObstacleFill",
            "TeamFill",
            "ZoneFill"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BouncingFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/TeamFill/BouncingFill",
        "SuperElementName": "TeamFill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CrossingFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/TeamFill/CrossingFill",
        "SuperElementName": "TeamFill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "TeamFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/TeamFill",
        "SuperElementName": "Fill",
        "SubElementName": [
            "BouncingFill",
            "CrossingFill"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ApogeeFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/ZoneFill/ApogeeFill",
        "SuperElementName": "ZoneFill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "DivFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/ZoneFill/DivFill",
        "SuperElementName": "ZoneFill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "OpenEndedFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/ZoneFill/OpenEndedFill",
        "SuperElementName": "ZoneFill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ZoneFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/ZoneFill",
        "SuperElementName": "Fill",
        "SubElementName": [
            "ApogeeFill",
            "DivFill",
            "OpenEndedFill",
            "ParaBorderFill",
            "PerimeterFill",
            "StraigtenFill"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ParaBorderFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/ZoneFill/ParaBorderFill",
        "SuperElementName": "ZoneFill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "PerimeterFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/ZoneFill/PerimeterFill",
        "SuperElementName": "ZoneFill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "StraigtenFill",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/Fill/ZoneFill/StraigtenFill",
        "SuperElementName": "ZoneFill",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "DecreaseDensity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/ModifyDensity/DecreaseDensity",
        "SuperElementName": "ModifyDensity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "IncreaseDensity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/ModifyDensity/IncreaseDensity",
        "SuperElementName": "ModifyDensity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ViaProblem",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem",
        "SuperElementName": "ViaPropositions",
        "SubElementName": [
            "Alignment",
            "Fill",
            "SelectNeosite"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BisectLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectLine/BisectLine",
        "SuperElementName": "SelectLine",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectLine/BLine",
        "SuperElementName": "SelectLine",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "NeoSitePolygon",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSitePolygon",
        "SuperElementName": "SelectNeosite",
        "SubElementName": [
            "SiteDiamond",
            "SiteSquare",
            "SiteTrapezoid",
            "SiteTriangle"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteDiamond",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSitePolygon/SiteDiamond",
        "SuperElementName": "NeoSitePolygon",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteSquare",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSitePolygon/SiteSquare",
        "SuperElementName": "NeoSitePolygon",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteTrapezoid",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSitePolygon/SiteTrapezoid",
        "SuperElementName": "NeoSitePolygon",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteTriangle",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSitePolygon/SiteTriangle",
        "SuperElementName": "NeoSitePolygon",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "AdaptiveProximity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSiteProximity/AdaptiveProximity",
        "SuperElementName": "NeoSiteProximity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RigidProximity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSiteProximity/RigidProximity",
        "SuperElementName": "NeoSiteProximity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SlopedProximity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite/NeoSiteProximity/SlopedProximity",
        "SuperElementName": "NeoSiteProximity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SelectNeosite",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaProblem/SelectNeosite",
        "SuperElementName": "ViaProblem",
        "SubElementName": [
            "NeoSitePolygon"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Plot",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/DensityTeorem/Plot",
        "SuperElementName": "DensityTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "KontaktDensity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/KontaktTeorem/KontaktDensity",
        "SuperElementName": "KontaktTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BoustroLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/BoustroLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CircumventLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/CircumventLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "GhostLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/GhostLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HypotenuseLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/HypotenuseLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "OrbitLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/OrbitLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LineTeorem",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem",
        "SuperElementName": "ViaTeorem",
        "SubElementName": [
            "BoustroLine",
            "CircumventLine",
            "GhostLine",
            "HypotenuseLine",
            "OrbitLine",
            "RacingLine",
            "RotationLine",
            "SpiralLine",
            "StraightLine",
            "AmbleInLine",
            "AmbleoutLine",
            "ZigzagLine"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RacingLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/RacingLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "RotationLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/RotationLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SpiralLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/SpiralLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "StraightLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/StraightLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "AmbleInLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/AmbleInLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "AmbleoutLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/AmbleoutLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ZigzagLine",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/LineTeorem/ZigzagLine",
        "SuperElementName": "LineTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "BorderMarka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/MarkaTeorem/BorderMarka",
        "SuperElementName": "MarkaTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "HighMarka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/MarkaTeorem/HighMarka",
        "SuperElementName": "MarkaTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "LineInMarka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/MarkaTeorem/LineInMarka",
        "SuperElementName": "MarkaTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "NaturalMarka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/MarkaTeorem/NaturalMarka",
        "SuperElementName": "MarkaTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteMarka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/MarkaTeorem/SiteMarka",
        "SuperElementName": "MarkaTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "TreeMarka"
        ]
    },
    {
        "ElementName": "TrenchExitMarka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/MarkaTeorem/TrenchExitMarka",
        "SuperElementName": "MarkaTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "TrenchExitFlag"
        ]
    },
    {
        "ElementName": "WastedMarka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/MarkaTeorem/WastedMarka",
        "SuperElementName": "MarkaTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [
            "Wind"
        ],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "WastedFlag"
        ]
    },
    {
        "ElementName": "ZoneMarka",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/MarkaTeorem/ZoneMarka",
        "SuperElementName": "MarkaTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": [
            "AreaFlagging"
        ]
    },
    {
        "ElementName": "ViaTeorem",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem",
        "SuperElementName": "ViaPropositions",
        "SubElementName": [
            "LineTeorem",
            "ZoneTeorem"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "FillBlock",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Block/FillBlock",
        "SuperElementName": "Block",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Block",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Block",
        "SuperElementName": "ZoneTeorem",
        "SubElementName": [
            "FillBlock"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Border",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Border",
        "SuperElementName": "ZoneTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Div",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Div",
        "SuperElementName": "ZoneTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Obstacle",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Obstacle",
        "SuperElementName": "ZoneTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ZoneTeorem",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem",
        "SuperElementName": "ViaTeorem",
        "SubElementName": [
            "Block",
            "Border",
            "Div",
            "Obstacle",
            "Piece",
            "Site",
            "ZoneGeometry"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Piece",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Piece",
        "SuperElementName": "ZoneTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "Site",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site",
        "SuperElementName": "ZoneTeorem",
        "SubElementName": [
            "SiteDensity",
            "SiteProximity"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "4Density",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteDensity/4Density",
        "SuperElementName": "SiteDensity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "5Density",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteDensity/5Density",
        "SuperElementName": "SiteDensity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "6Density",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteDensity/6Density",
        "SuperElementName": "SiteDensity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "7Density",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteDensity/7Density",
        "SuperElementName": "SiteDensity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "8Density",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteDensity/8Density",
        "SuperElementName": "SiteDensity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "9Density",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteDensity/9Density",
        "SuperElementName": "SiteDensity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteDensity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteDensity",
        "SuperElementName": "Site",
        "SubElementName": [
            "4Density",
            "5Density",
            "6Density",
            "7Density",
            "8Density",
            "9Density"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MaximumProximity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteProximity/MaximumProximity",
        "SuperElementName": "SiteProximity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "MinimumProximity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteProximity/MinimumProximity",
        "SuperElementName": "SiteProximity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "OptimalProximity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteProximity/OptimalProximity",
        "SuperElementName": "SiteProximity",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "SiteProximity",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/Site/SiteProximity",
        "SuperElementName": "Site",
        "SubElementName": [
            "MaximumProximity",
            "MinimumProximity",
            "OptimalProximity"
        ],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "CompletionLimit",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/ZoneCompletion/CompletionLimit",
        "SuperElementName": "ZoneCompletion",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    },
    {
        "ElementName": "ZoneGeometry",
        "Namespace": "Via/ViaTeori/ViaElements/ViaPropositions/ViaTeorem/ZoneTeorem/ZoneGeometry",
        "SuperElementName": "ZoneTeorem",
        "SubElementName": [],
        "ConcurrentElementName": [],
        "EkoElementName": [],
        "ViaElementName": [],
        "MoveElementName": [],
        "PsikeElementName": [],
        "Description": "",
        "Alias": []
    }
]
# def AddDescription():
#     for item in Skema_List:
#         item.update({"Description": ""})

#     with open("sample.json", "w") as outfile: 
#         json.dump(Skema_List, outfile)

# AddDescription()

def AddAttribute(attributeName):

    for item in Skema_List:
        item.update({f"{attributeName}": []})

# Add a timestamp 

    with open("AddElement_Output.json", "w") as outfile: 
        json.dump(Skema_List, outfile)

AddAttribute("Dev")