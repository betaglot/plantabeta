// docs/.vitepress/config.mts
import { defineConfig } from "file:///C:/Users/Owner/OneDrive/Documents/GitHub/putplant/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  lang: "en-US",
  title: "Put(Plant)",
  description: "",
  lastUpdated: true,
  base: "/putplant/",
  ignoreDeadLinks: true,
  appearance: "dark",
  head: [
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }]
  ],
  themeConfig: {
    outline: [2, 4],
    logo: "android-chrome-512x512.png",
    socialLinks: [
      { icon: "youtube", link: "https://www.youtube.com/@Klimbeta" },
      { icon: "github", link: "https://github.com/klimbeta/putplant" }
    ],
    footer: {
      message: "",
      copyright: "Copyright Put(Plant) \xA9 2023-present"
    },
    search: {
      provider: "local"
    },
    siteTitle: "Put(Plant)",
    nav: nav(),
    sidebar: {
      "/guide/": sidebarGuide(),
      "/examples/": sidebarExamples(),
      "/tutorial/": sidebarTutorial(),
      "/reference/": sidebarReference(),
      "/dev/": sidebarDevelopment()
    }
  }
});
function sidebarDevelopment() {
  return [
    { text: "<dev>Dev Overview</dev>", link: "/dev/DevOverview" },
    { text: "<dev>Contact</dev>", link: "/dev/Contact" },
    { text: "<dev>Academia</dev>", link: "/dev/Academia" },
    { text: "<dev>Art</dev>", link: "/dev/art/Overview" },
    { text: "<dev>Data Visualization</dev>", link: "/dev/ElementsGraph" },
    { text: "<dev>Contribute</dev>", link: "/dev/Contribute" },
    { text: "<dev>Downloads</dev>", link: "/dev/Downloads" },
    { text: "<dev>DX</dev>", link: "/dev/DX" },
    { text: "<dev>Filming</dev>", link: "/dev/Filming" },
    {
      text: "<dev>Graphics</dev>",
      collapsed: true,
      items: [
        { text: "<dev>Overview</dev>", link: "/dev/Graphics/Overview" },
        { text: "<beta>Beta Graphics</beta>", link: "/dev/Graphics/BetaGraphic" },
        { text: "<eco>Eco Graphics</eco>", link: "/dev/Graphics/EcoGraphic" },
        { text: "<moto>Moto Graphics</moto>", link: "/dev/Graphics/MotoGraphic" },
        { text: "<neuro>Neuro Graphics</neuro>", link: "/dev/Graphics/NeuroGraphic" },
        { text: "<via>Via Graphics</via>", link: "/dev/Graphics/ViaGraphic" },
        { text: "UX Graphics", link: "/dev/Graphics/UXGraphic" },
        { text: "<dev>DX Graphics</dev>", link: "/dev/Graphics/DXGraphic" }
      ]
    },
    { text: "<dev>Offline</dev>", link: "/dev/Offline" },
    { text: "<dev>Open Source</dev>", link: "/dev/OpenSource" },
    { text: "<dev>PaperPhoto</dev>", link: "/dev/PaperPhoto" },
    { text: "<dev>Pylanter</dev>", link: "/dev/Pylanter" },
    { text: "<dev>Research Questions</dev>", link: "/dev/ResearchQuestions" },
    { text: "<dev>Roadmap</dev>", link: "/dev/Roadmap" },
    { text: "<dev>Sequence</dev>", link: "/dev/Sequence" },
    { text: "<dev>SocialMedia</dev>", link: "/dev/SocialMedia" },
    { text: "<dev>StyleGuide</dev>", link: "/dev/StyleGuide" },
    { text: "<dev>Tagging</dev>", link: "/dev/Tagging" },
    { text: "<dev>ToDo</dev>", link: "/dev/ToDo" },
    { text: "<dev>Tools</dev>", link: "/dev/Tools" },
    { text: "<dev>UX</dev>", link: "/dev/UX" },
    { text: "<dev>AfternoonTask</dev>", link: "/dev/AfternoonTask" }
  ];
}
function nav() {
  return [
    {
      text: "Guide",
      link: "/guide/What/WhatPutPlant",
      activeMatch: "/guide/"
    },
    {
      text: "Examples",
      link: "/examples/Overview",
      activeMatch: "/examples/"
    },
    {
      text: "Tutorial",
      link: "/tutorial/TutorialOverview",
      activeMatch: "/tutorial/"
    },
    {
      text: "Reference",
      link: "/reference/RefOverview",
      activeMatch: "/reference/"
    },
    {
      text: "\u{1F6E0}",
      link: "dev/DevOverview",
      activeMatch: "/dev/"
    }
  ];
}
function sidebarGuide() {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is Tree Planting?", link: "/guide/What/WhatTreePlanting" },
        { text: "What is Put(Plant)?", link: "/guide/What/WhatPutPlant" }
      ]
    },
    {
      text: "Purpose",
      collapsed: false,
      items: [
        { text: "\u{1F525}\u{1F332}\u{1F525} <eco>To Replant Burnt Land</eco>", link: "/guide/Why/Wildfire" },
        { text: "\u{1F7E0} <moto>To Reduce Injury</moto>", link: "/guide/Why/Injury" },
        { text: "\u{1F53B} <via>To Increase Productivity</via>", link: "/guide/Why/Productivity" },
        { text: "\u{1F537} <beta>To Improve Communication</beta>", link: "/guide/Why/Communication" },
        { text: "\u{1F49C} <neuro>To Steepen Learning Curve</neuro>", link: "/guide/Why/LearningCurve" },
        { text: "\u{1F4B2} To Increase Profit", link: "/guide/Why/Company" }
      ]
    },
    {
      text: "Planter Guide",
      collapsed: false,
      items: [
        { text: "Potential Planter", link: "/guide/Who/PotentialPlanter" },
        { text: "Novice Planter", link: "/guide/Who/NovicePlanter" },
        { text: "Experienced Planter", link: "/guide/Who/ExperiencedPlanter" },
        { text: "Planter Supervisor", link: "/guide/Who/PlanterSupervisor" },
        { text: "Planter Instructor", link: "/guide/Who/PlanterInstructor" }
      ]
    },
    {
      text: "Gear Guide",
      collapsed: false,
      items: [
        { text: "What Gear to bring?", link: "/guide/What/WhatGear" },
        { text: "Gear List", link: "/guide/What/GearList" }
      ]
    },
    { text: "Go to Examples", link: "/examples/Overview" }
  ];
}
function sidebarReference() {
  return [
    { text: "<strong>Reference Overview</strong>", link: "/reference/RefOverview" },
    // #Beta
    {
      text: "\u{1F537} <beta>Beta</beta>",
      link: "/reference/Beta/WhatBeta",
      collapsed: true,
      items: [
        { text: "\u{1F537} <beta>BetaExamples</beta>", link: "/reference/Beta/BetaExamples" },
        { text: "\u{1F537} <beta>BetaLingo</beta>", link: "/reference/Beta/BetaLingo/Overview" },
        { text: "\u{1F537} <beta>BetaDiagram</beta>", link: "/reference/Beta/BetaDiagram" },
        {
          text: "\u{1F537} <beta>BetaCode</beta>",
          link: "/reference/Beta/BetaCode/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F537} <beta>BetaObject</beta>", link: "/reference/Beta/BetaCode/BetaObject" },
            { text: "\u{1F537} <beta>BetaMethod</beta>", link: "/reference/Beta/BetaCode/BetaMethod" },
            { text: "\u{1F537} <beta>BetaBlock</beta>", link: "/reference/Beta/BetaCode/BetaBlock" }
          ]
        },
        {
          text: "\u{1F537} <beta>BetaScore</beta>",
          link: "/reference/Beta/BetaScore/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F537} <beta>BetaExecutionScore</beta>", link: "/reference/Beta/BetaScore/BetaExecution" },
            {
              text: "\u{1F537} <beta>BetaDifficultyScore</beta>",
              link: "/reference/Beta/BetaScore/BetaDifficultyScore/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F537} <beta>BetaComplexityScore</beta>", link: "/reference/Beta/BetaScore/BetaDifficulty/BetaComplexityScore" },
                { text: "\u{1F537} <beta>BetaRiskScore</beta>", link: "/reference/Beta/BetaScore/BetaDifficulty/BetaRiskScore" },
                { text: "\u{1F537} <beta>BetaIntensityScore</beta>", link: "/reference/Beta/BetaScore/BetaDifficulty/BetaIntensityScore" }
              ]
            }
          ]
        },
        {
          text: "\u{1F537} <beta>BetaDifficulty</beta>",
          link: "/reference/Beta/BetaDifficulty/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F537} <beta>BetaComplexity</beta>", link: "/reference/Beta/BetaScore/BetaDifficulty/BetaComplexity" },
            { text: "\u{1F537} <beta>BetaIntensity</beta>", link: "/reference/Beta/BetaScore/BetaDifficulty/BetaIntensity" },
            { text: "\u{1F537} <beta>BetaRisk</beta>", link: "/reference/Beta/BetaScore/BetaDifficulty/BetaRisk" }
          ]
        },
        {
          text: "\u{1F537} <beta>BetaVideo</beta>",
          link: "/reference/Beta/BetaVideo/Overview",
          collapsed: true,
          items: []
        }
      ]
    },
    // #Eco
    {
      text: "\u{1F7E9} <eco>Eco</eco>",
      collapsed: true,
      link: "/reference/Eco/EcoOverview",
      items: [
        { text: "\u{1F537} <eco>Eco Difficulty</eco>", link: "/reference/Eco/EcoDifficulty" },
        {
          text: "\u{1F7E9} <eco>Animals</eco>",
          link: "/reference/Eco/Animals/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F7E9} <eco>Atmosphere</eco>",
          link: "/reference/Eco/Atmosphere/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>AirTemperature</eco>", link: "/reference/Eco/Atmosphere/AirTemperature" },
            { text: "\u{1F7E9} <eco>Humidity</eco>", link: "/reference/Eco/Atmosphere/Humidity" },
            { text: "\u{1F7E9} <eco>Precipitation</eco>", link: "/reference/Eco/Atmosphere/Precipitation" },
            { text: "\u{1F7E9} <eco>Wind</eco>", link: "/reference/Eco/Atmosphere/Wind" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Block</eco>",
          link: "/reference/Eco/Block/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>FillBlock</eco>", link: "/reference/Eco/Block/FillBlock" },
            { text: "\u{1F7E9} <eco>Road</eco>", link: "/reference/Eco/Block/Road" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Density</eco>",
          link: "/reference/Eco/Density/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>Plot</eco>", link: "/reference/Eco/Density/Plot" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>LandSpeed</eco>",
          link: "/reference/Eco/LandSpeed/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>FastLand</eco>", link: "/reference/Eco/LandSpeed/FastLand" },
            { text: "\u{1F7E9} <eco>SlowLand</eco>", link: "/reference/Eco/LandSpeed/SlowLand" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Obstacle</eco>",
          link: "/reference/Eco/Obstacle/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>HoleObstacle</eco>", link: "/reference/Eco/Obstacle/HoleObstacle" },
            { text: "\u{1F7E9} <eco>LogObstacle</eco>", link: "/reference/Eco/Obstacle/LogObstacle" },
            { text: "\u{1F7E9} <eco>MicrositeObstacle</eco>", link: "/reference/Eco/Obstacle/MicrositeObstacle" },
            { text: "\u{1F7E9} <eco>RockObstacle</eco>", link: "/reference/Eco/Obstacle/RockObstacle" },
            { text: "\u{1F7E9} <eco>StumpObstacle</eco>", link: "/reference/Eco/Obstacle/StumpObstacle" },
            { text: "\u{1F7E9} <eco>SlashPileArea</eco>", link: "/reference/Eco/Area/SlashPileArea" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Piece</eco>",
          link: "/reference/Eco/Piece/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>PieceTopography</eco>", link: "/reference/Eco/Piece/PieceTopography" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Prep</eco>",
          link: "/reference/Eco/Prep/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>MoundLand</eco>", link: "/reference/Eco/Prep/MoundLand" },
            { text: "\u{1F7E9} <eco>TrenchLand</eco>", link: "/reference/Eco/Prep/TrenchLand" },
            { text: "\u{1F7E9} <eco>DeactivatedRoad</eco>", link: "/reference/Eco/Prep/TrenchLand" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Raw</eco>",
          link: "/reference/Eco/Raw/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>StumpLand</eco>", link: "/reference/Eco/Raw/StumpLand" },
            { text: "\u{1F7E9} <eco>BurntLand</eco>", link: "/reference/Eco/Raw/BurntLand" },
            { text: "\u{1F7E9} <eco>RiparianLand</eco>", link: "/reference/Eco/Raw/RiparianLand" },
            { text: "\u{1F7E9} <eco>RockyLand</eco>", link: "/reference/Eco/Raw/RockyLand" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Slash</eco>",
          link: "/reference/Eco/Slash/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>BurnPileSlash</eco>", link: "/reference/Eco/Slash/BurnPileSlash" },
            { text: "\u{1F7E9} <eco>HighSlash</eco>", link: "/reference/Eco/Slash/HighSlash" },
            { text: "\u{1F7E9} <eco>LowSlash</eco>", link: "/reference/Eco/Slash/LowSlash" },
            { text: "\u{1F7E9} <eco>WetSlash</eco>", link: "/reference/Eco/Slash/WetSlash" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Soil</eco>",
          link: "/reference/Eco/Soil/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E9} <eco>Hole</eco>", link: "/reference/Eco/Soil/Hole" },
            { text: "\u{1F7E9} <eco>ClaySoil</eco>", link: "/reference/Eco/Soil/ClaySoil" },
            { text: "\u{1F7E9} <eco>DrySoil</eco>", link: "/reference/Eco/Soil/DrySoil" },
            { text: "\u{1F7E9} <eco>GravelSoil</eco>", link: "/reference/Eco/Soil/GravelSoil" },
            { text: "\u{1F7E9} <eco>MineralSoil</eco>", link: "/reference/Eco/Soil/MineralSoil" },
            { text: "\u{1F7E9} <eco>RedRot</eco>", link: "/reference/Eco/Soil/RedRot" },
            { text: "\u{1F7E9} <eco>SandSoil</eco>", link: "/reference/Eco/Soil/SandSoil" },
            { text: "\u{1F7E9} <eco>WetSoil</eco>", link: "/reference/Eco/Soil/WetSoil" }
          ]
        },
        {
          text: "\u{1F7E9} <eco>Sun</eco>",
          link: "/reference/Eco/Sun/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F7E9} <eco>Vegetation</eco>",
          link: "/reference/Eco/Vegetation/Overview",
          collapsed: true,
          items: []
        }
      ]
    },
    // #Moto
    {
      text: "\u{1F7E0} <moto>Moto</moto>",
      link: "/reference/Moto/MotoOverview",
      collapsed: true,
      items: [
        { text: "\u{1F7E0} <moto>Phrase</moto>", link: "/reference/Moto/Phrase/Overview" },
        { text: "\u{1F7E0} <moto>Moto Difficulty</moto>", link: "/reference/Moto/MotoDifficulty" },
        {
          text: "\u{1F7E0} <moto>MotoGeometry</moto>",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Overview</moto>", link: "/reference/Moto/MotoGeometry/Overview" },
            { text: "\u{1F7E0} <moto>MotoPoint</moto>", link: "/reference/Moto/MotoGeometry/MotoPoint" },
            { text: "\u{1F7E0} <moto>MotoCurve</moto>", link: "/reference/Moto/MotoGeometry/MotoCurve" },
            { text: "\u{1F7E0} <moto>MotoSpace</moto>", link: "/reference/Moto/MotoGeometry/MotoSpace" },
            { text: "\u{1F7E0} <moto>MotoSurface</moto>", link: "/reference/Moto/MotoGeometry/MotoSurface" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>ArmMoto</moto>",
          link: "/reference/Moto/ArmMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Arm Phrase</moto>", link: "/reference/Moto/ArmMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>ArmProp</moto>", link: "/reference/Moto/ArmMoto/ArmProp" },
            { text: "\u{1F7E0} <moto>ArmSwing</moto>", link: "/reference/Moto/ArmMoto/ArmSwing" },
            { text: "\u{1F7E0} <moto>ArmWalk</moto>", link: "/reference/Moto/ArmMoto/ArmWalk" },
            { text: "\u{1F7E0} <moto>ArmBalance</moto>", link: "/reference/Moto/ArmMoto/ArmBalance" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>BodyMoto</moto>",
          link: "/reference/Moto/BodyMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Body Phrase</moto>", link: "/reference/Moto/BodyMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>BodyAbsorb</moto>", link: "/reference/Moto/BodyMoto/BodyAbsorb" },
            { text: "\u{1F7E0} <moto>BodyBend</moto>", link: "/reference/Moto/BodyMoto/BodyBend" },
            { text: "\u{1F7E0} <moto>BodyLean</moto>", link: "/reference/Moto/BodyMoto/BodyLean" },
            { text: "\u{1F7E0} <moto>BodyRevolve</moto>", link: "/reference/Moto/BodyMoto/BodyRevolve" },
            { text: "\u{1F7E0} <moto>BodyRotate</moto>", link: "/reference/Moto/BodyMoto/BodyRotate" },
            { text: "\u{1F7E0} <moto>BodySlot</moto>", link: "/reference/Moto/BodyMoto/BodySlot" },
            { text: "\u{1F7E0} <moto>Fall</moto>", link: "/reference/Moto/BodyMoto/Fall" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>CacheMoto</moto>",
          link: "/reference/Moto/CacheMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Cache Phrase</moto>", link: "/reference/Moto/CacheMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>Eating</moto>", link: "/reference/Moto/CacheMoto/Eating" },
            { text: "\u{1F7E0} <moto>TarpOff</moto>", link: "/reference/Moto/CacheMoto/TarpOff" },
            { text: "\u{1F7E0} <moto>TarpOn</moto>", link: "/reference/Moto/CacheMoto/TarpOn" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>ClothingMoto</moto>",
          link: "/reference/Moto/ClothingMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Clothing Phrase</moto>", link: "/reference/Moto/ClothingMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>Button</moto>", link: "/reference/Moto/ClothingMoto/Button" },
            { text: "\u{1F7E0} <moto>ClothingLayer</moto>", link: "/reference/Moto/ClothingMoto/ClothingLayer" },
            { text: "\u{1F7E0} <moto>RemoveMud</moto>", link: "/reference/Moto/ClothingMoto/RemoveMud" },
            { text: "\u{1F7E0} <moto>ZipperMoto</moto>", link: "/reference/Moto/ClothingMoto/ZipperMoto" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>FootMoto</moto>",
          link: "/reference/Moto/FootMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Foot Phrase</moto>", link: "/reference/Moto/FootMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>FootArchSmear</moto>", link: "/reference/Moto/FootMoto/FootArchSmear" },
            { text: "\u{1F7E0} <moto>FootClose</moto>", link: "/reference/Moto/FootMoto/FootClose" },
            { text: "\u{1F7E0} <moto>FootDig</moto>", link: "/reference/Moto/FootMoto/FootDig" },
            { text: "\u{1F7E0} <moto>FootDorsiflexion</moto>", link: "/reference/Moto/FootMoto/FootDorsiflexion" },
            { text: "\u{1F7E0} <moto>FootDrag</moto>", link: "/reference/Moto/FootMoto/FootDrag" },
            { text: "\u{1F7E0} <moto>FootEversion</moto>", link: "/reference/Moto/FootMoto/FootEversion" },
            { text: "\u{1F7E0} <moto>FootInversion</moto>", link: "/reference/Moto/FootMoto/FootInversion" },
            { text: "\u{1F7E0} <moto>FootScreef</moto>", link: "/reference/Moto/FootMoto/FootScreef" },
            { text: "\u{1F7E0} <moto>PlantarFlexion</moto>", link: "/reference/Moto/FootMoto/PlantarFlexion" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>HandMoto</moto>",
          link: "/reference/Moto/HandMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Hand Phrase</moto>", link: "/reference/Moto/HandMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>BagGrip</moto>", link: "/reference/Moto/HandMoto/BagGrip" },
            { text: "\u{1F7E0} <moto>BoxGrip</moto>", link: "/reference/Moto/HandMoto/BoxGrip" },
            { text: "\u{1F7E0} <moto>BranchGrip</moto>", link: "/reference/Moto/HandMoto/BranchGrip" },
            { text: "\u{1F7E0} <moto>BranchSnapGrip</moto>", link: "/reference/Moto/HandMoto/BranchSnapGrip" },
            { text: "\u{1F7E0} <moto>HandClose</moto>", link: "/reference/Moto/HandMoto/HandClose" },
            { text: "\u{1F7E0} <moto>HandPoke</moto>", link: "/reference/Moto/HandMoto/HandPoke" },
            { text: "\u{1F7E0} <moto>HandScreef</moto>", link: "/reference/Moto/HandMoto/HandScreef" },
            { text: "\u{1F7E0} <moto>SpadeHandleGrip</moto>", link: "/reference/Moto/HandMoto/SpadeHandleGrip" },
            { text: "\u{1F7E0} <moto>SpadeShaftGrip</moto>", link: "/reference/Moto/HandMoto/SpadeShaftGrip" },
            { text: "\u{1F7E0} <moto>TreeGrip</moto>", link: "/reference/Moto/HandMoto/TreeGrip" },
            { text: "\u{1F7E0} <moto>TreeTestGrip</moto>", link: "/reference/Moto/HandMoto/TreeTestGrip" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>HeadMoto</moto>",
          link: "/reference/Moto/HeadMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Head Phrase</moto>", link: "/reference/Moto/HeadMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>FocusLook</moto>", link: "/reference/Moto/HeadMoto/FocusLook" },
            { text: "\u{1F7E0} <moto>HeadProtraction</moto>", link: "/reference/Moto/HeadMoto/HeadProtraction" },
            { text: "\u{1F7E0} <moto>HeadRetraction</moto>", link: "/reference/Moto/HeadMoto/HeadRetraction" },
            { text: "\u{1F7E0} <moto>HeadTiltIntoWind</moto>", link: "/reference/Moto/HeadMoto/HeadTiltIntoWind" },
            { text: "\u{1F7E0} <moto>Hearing</moto>", link: "/reference/Moto/HeadMoto/Hearing" },
            { text: "\u{1F7E0} <moto>LookAway</moto>", link: "/reference/Moto/HeadMoto/LookAway" },
            { text: "\u{1F7E0} <moto>NeckExtension</moto>", link: "/reference/Moto/HeadMoto/NeckExtension" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>HoleMoto</moto>",
          link: "/reference/Moto/HoleMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Hole Phrase</moto>", link: "/reference/Moto/HoleMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>HoleClose</moto>", link: "/reference/Moto/HoleMoto/HoleClose" },
            { text: "\u{1F7E0} <moto>HoleExpand</moto>", link: "/reference/Moto/HoleMoto/HoleExpand" },
            { text: "\u{1F7E0} <moto>HoleOpen</moto>", link: "/reference/Moto/HoleMoto/HoleOpen" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>LegMoto</moto>",
          link: "/reference/Moto/LegMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>Leg Phrase</moto>", link: "/reference/Moto/LegMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>Crouch</moto>", link: "/reference/Moto/LegMoto/Overview" },
            { text: "\u{1F7E0} <moto>Jump</moto>", link: "/reference/Moto/LegMoto/Jump" },
            { text: "\u{1F7E0} <moto>Kneel</moto>", link: "/reference/Moto/LegMoto/Kneel" },
            { text: "\u{1F7E0} <moto>LegAbduction</moto>", link: "/reference/Moto/LegMoto/LegAbduction" },
            { text: "\u{1F7E0} <moto>LegAbsorb</moto>", link: "/reference/Moto/LegMoto/LegAbsorb" },
            { text: "\u{1F7E0} <moto>LegAdduction</moto>", link: "/reference/Moto/LegMoto/LegAdduction" },
            { text: "\u{1F7E0} <moto>LegFlag</moto>", link: "/reference/Moto/LegMoto/LegFlag" },
            { text: "\u{1F7E0} <moto>LegFlexion</moto>", link: "/reference/Moto/LegMoto/LegFlexion" },
            { text: "\u{1F7E0} <moto>LegProp</moto>", link: "/reference/Moto/LegMoto/LegProp" },
            { text: "\u{1F7E0} <moto>LegSidebagLift</moto>", link: "/reference/Moto/LegMoto/LegSidebagLift" },
            { text: "\u{1F7E0} <moto>LegSwing</moto>", link: "/reference/Moto/LegMoto/LegSwing" },
            { text: "\u{1F7E0} <moto>RunningStart</moto>", link: "/reference/Moto/LegMoto/RunningStart" },
            { text: "\u{1F7E0} <moto>Step</moto>", link: "/reference/Moto/LegMoto/Step" },
            { text: "\u{1F7E0} <moto>Stomp</moto>", link: "/reference/Moto/LegMoto/Stomp" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>VegeMoto</moto>",
          link: "/reference/Moto/VegeMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>BranchArmDeflection</moto>", link: "/reference/Moto/VegeMoto/BranchArmDeflection" },
            { text: "\u{1F7E0} <moto>BranchDeflection</moto>", link: "/reference/Moto/VegeMoto/BranchDeflection" },
            { text: "\u{1F7E0} <moto>BranchMoto</moto>", link: "/reference/Moto/VegeMoto/BranchMoto" },
            { text: "\u{1F7E0} <moto>BranchWhip</moto>", link: "/reference/Moto/VegeMoto/BranchWhip" },
            { text: "\u{1F7E0} <moto>Bush</moto>", link: "/reference/Moto/VegeMoto/Bush" },
            { text: "\u{1F7E0} <moto>Log</moto>", link: "/reference/Moto/VegeMoto/Log" },
            { text: "\u{1F7E0} <moto>SlashPile</moto>", link: "/reference/Moto/VegeMoto/SlashPile" },
            { text: "\u{1F7E0} <moto>Stump</moto>", link: "/reference/Moto/VegeMoto/Stump" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>Screef</moto>",
          link: "/reference/Moto/Screef/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F7E0} <moto>BootScreef</moto>", link: "/reference/Moto/ToolMoto/Boot/BootScreef" },
            { text: "\u{1F7E0} <moto>HandScreef</moto>", link: "/reference/Moto/HandMoto/HandScreef" },
            { text: "\u{1F7E0} <moto>SpadeScreef</moto>", link: "/reference/Moto/ToolMoto/Spade/SpadeScreef" }
          ]
        },
        {
          text: "\u{1F7E0} <moto>ToolMoto</moto>",
          link: "/reference/Moto/ToolMoto/Overview",
          collapsed: true,
          items: [
            {
              text: "\u{1F7E0} <moto>Bag</moto>",
              link: "/reference/Moto/ToolMoto/Bag/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F7E0} <moto>BagGrip</moto>", link: "/reference/Moto/ToolMoto/Bag/BagGrip" },
                { text: "\u{1F537} <moto>Bag Phrase</moto>", link: "/reference/Moto/ToolMoto/Bag/Phrase/Overview" },
                { text: "\u{1F7E0} <moto>BagAdjustment</moto>", link: "/reference/Moto/ToolMoto/Bag/BagAdjustment" },
                { text: "\u{1F7E0} <moto>BagDeadlift</moto>", link: "/reference/Moto/ToolMoto/Bag/BagDeadlift" },
                { text: "\u{1F7E0} <moto>BagEmpty</moto>", link: "/reference/Moto/ToolMoto/Bag/BagEmpty" },
                { text: "\u{1F7E0} <moto>BaggingUp</moto>", link: "/reference/Moto/ToolMoto/Bag/BaggingUp" },
                { text: "\u{1F7E0} <moto>BagOff</moto>", link: "/reference/Moto/ToolMoto/Bag/BagOff" },
                { text: "\u{1F7E0} <moto>BagOn</moto>", link: "/reference/Moto/ToolMoto/Bag/BagOn" },
                { text: "\u{1F7E0} <moto>BagSlide</moto>", link: "/reference/Moto/ToolMoto/Bag/BagSlide" }
              ]
            },
            {
              text: "\u{1F7E0} <moto>Boot</moto>",
              link: "/reference/Moto/ToolMoto/Boot/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F537} <moto>Boot Phrase</moto>", link: "/reference/Moto/ToolMoto/Boot/Phrase/Overview" },
                { text: "\u{1F7E0} <moto>BootGrip</moto>", link: "/reference/Moto/ToolMoto/Boot/BootGrip" },
                { text: "\u{1F7E0} <moto>BootScreef</moto>", link: "/reference/Moto/ToolMoto/Boot/BootScreef" },
                { text: "\u{1F7E0} <moto>LaceKnot</moto>", link: "/reference/Moto/ToolMoto/Boot/LaceKnot" }
              ]
            },
            {
              text: "\u{1F7E0} <moto>Box</moto>",
              link: "/reference/Moto/ToolMoto/Box/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F537} <moto>Box Phrase</moto>", link: "/reference/Moto/ToolMoto/Box/Phrase/Overview" },
                { text: "\u{1F7E0} <moto>BoxGrip</moto>", link: "/reference/Moto/ToolMoto/Box/BoxGrip" }
              ]
            },
            {
              text: "\u{1F7E0} <moto>Bundle</moto>",
              link: "/reference/Moto/ToolMoto/Bundle/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F537} <moto>Bundle Phrase</moto>", link: "/reference/Moto/ToolMoto/Bundle/Phrase/Overview" },
                { text: "\u{1F7E0} <moto>BundleGrip</moto>", link: "/reference/Moto/ToolMoto/Bundle/BundleGrip" },
                { text: "\u{1F7E0} <moto>BundlePeel</moto>", link: "/reference/Moto/ToolMoto/Bundle/BundlePeel" }
              ]
            },
            {
              text: "\u{1F7E0} <moto>Carabiner</moto>",
              link: "/reference/Moto/ToolMoto/Carabiner/Overview",
              collapsed: true,
              items: []
            },
            {
              text: "\u{1F7E0} <moto>Flag</moto>",
              link: "/reference/Moto/ToolMoto/Flag/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F537} <moto>Flag Phrase</moto>", link: "/reference/Moto/ToolMoto/Flag/Phrase/Overview" },
                { text: "\u{1F7E0} <moto>FlagGrip</moto>", link: "/reference/Moto/ToolMoto/Flag/FlagGrip" },
                { text: "\u{1F7E0} <moto>FlagErrorRecovery</moto>", link: "/reference/Moto/ToolMoto/Flag/FlagErrorRecovery" },
                { text: "\u{1F7E0} <moto>FlagGet</moto>", link: "/reference/Moto/ToolMoto/Flag/FlagLoad" },
                { text: "\u{1F7E0} <moto>FlagRip</moto>", link: "/reference/Moto/ToolMoto/Flag/FlagRip" },
                { text: "\u{1F7E0} <moto>FlagRoll</moto>", link: "/reference/Moto/ToolMoto/Flag/FlagRoll" },
                { text: "\u{1F7E0} <moto>FlagUnload</moto>", link: "/reference/Moto/ToolMoto/Flag/FlagUnoad" }
              ]
            },
            {
              text: "\u{1F7E0} <moto>Gaiter</moto>",
              link: "/reference/Moto/ToolMoto/Gaiter/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F537} <moto>Gaiter Phrase</moto>", link: "/reference/Moto/ToolMoto/Gaiter/Phrase/Overview" },
                { text: "\u{1F7E0} <moto>GaiterGrip</moto>", link: "/reference/Moto/ToolMoto/Gaiter/GaiterGrip" },
                { text: "\u{1F7E0} <moto>GaiterOn</moto>", link: "/reference/Moto/ToolMoto/Gaiter/GaiterOn" },
                { text: "\u{1F7E0} <moto>GaiterOff</moto>", link: "/reference/Moto/ToolMoto/Gaiter/GaiterOff" }
              ]
            },
            {
              text: "\u{1F7E0} <moto>Glove</moto>",
              link: "/reference/Moto/ToolMoto/Glove/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F537} <moto>Glove Phrase</moto>", link: "/reference/Moto/ToolMoto/Glove/Phrase/Overview" },
                { text: "\u{1F7E0} <moto>GloveGrip</moto>", link: "/reference/Moto/ToolMoto/Glove/GloveGrip" }
              ]
            },
            {
              text: "\u{1F7E0} <moto>Kit</moto>",
              link: "/reference/Moto/ToolMoto/Kit/Overview",
              collapsed: true,
              items: []
            },
            {
              text: "\u{1F7E0} <moto>Rope</moto>",
              link: "/reference/Moto/ToolMoto/Rope/Overview",
              collapsed: true,
              items: []
            },
            {
              text: "\u{1F7E0} <moto>Spade</moto>",
              link: "/reference/Moto/ToolMoto/Spade/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F537} <moto>Spade Phrase</moto>", link: "/reference/Moto/ToolMoto/Spade/Phrase/Overview" },
                { text: "\u{1F7E0} <moto>SpadeGrip</moto>", link: "/reference/Moto/ToolMoto/Spade/SpadeGrip" },
                { text: "\u{1F7E0} <moto>SpadeChop</moto>", link: "/reference/Moto/ToolMoto/Spade/SpadeChop" },
                { text: "\u{1F7E0} <moto>SpadePogo</moto>", link: "/reference/Moto/ToolMoto/Spade/SpadePogo" },
                { text: "\u{1F7E0} <moto>SpadeProp</moto>", link: "/reference/Moto/ToolMoto/Spade/SpadeProp" },
                { text: "\u{1F7E0} <moto>SpadeScreef</moto>", link: "/reference/Moto/ToolMoto/Spade/SpadeScreef" },
                { text: "\u{1F7E0} <moto>SpadeSwing</moto>", link: "/reference/Moto/ToolMoto/Spade/SpadeSwing" },
                { text: "\u{1F7E0} <moto>SpadeTest</moto>", link: "/reference/Moto/ToolMoto/Spade/SpadeTest" }
              ]
            }
          ]
        },
        {
          text: "\u{1F7E0} <moto>Truck</moto>",
          link: "/reference/Moto/TruckMoto/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F537} <moto>Truck Phrase</moto>", link: "/reference/Moto/TruckMoto/Phrase/Overview" },
            { text: "\u{1F7E0} <moto>Sleep</moto>", link: "/reference/Moto/TruckMoto/Sleep" },
            { text: "\u{1F7E0} <moto>Sit</moto>", link: "/reference/Moto/TruckMoto/Sit" }
          ]
        },
        { text: "\u{1F7E0} <moto>Kinesiology</moto>", link: "/reference/Moto/Kinesiology/KinesiologyOverview" }
      ]
    },
    // #Via
    {
      text: "\u{1F53B} <via>Via</via>",
      link: "/reference/Via/ViaOverview",
      collapsed: true,
      items: [
        { text: "\u{1F537} <via>Via Sequence</via>", link: "/reference/Via/ViaSequence/Overview" },
        { text: "\u{1F537} <via>Via Difficulty</via>", link: "/reference/Via/ViaDifficulty" },
        {
          text: "\u{1F53B} <via>ViaGeometry</via>",
          link: "/reference/Via/ViaGeometry/Overview",
          collapsed: true,
          items: [
            {
              text: "\u{1F53B} <via>ViaPoint</via>",
              link: "/reference/Via/ViaGeometry/ViaPoint/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F53B} <via>Viewpoint</via>", link: "/reference/Via/ViaGeometry/ViaPoint/Viewpoint" },
                { text: "\u{1F53B} <via>CenterPoint</via>", link: "/reference/Via/ViaGeometry/ViaPoint/CenterPoint" },
                { text: "\u{1F53B} <via>InflectionPoint</via>", link: "/reference/Via/ViaGeometry/ViaPoint/InflectionPoint" },
                { text: "\u{1F53B} <via>Midpoint</via>", link: "/reference/Via/ViaGeometry/ViaPoint/MidPoint" },
                { text: "\u{1F53B} <via>ReferencePoint</via>", link: "/reference/Via/ViaGeometry/ViaPoint/ReferencePoint" },
                { text: "\u{1F53B} <via>ReflectionPoint</via>", link: "/reference/Via/ViaGeometry/ViaPoint/ReflectionPoint" },
                { text: "\u{1F53B} <via>TargetPoint</via>", link: "/reference/Via/ViaGeometry/ViaPoint/TargetPoint" }
              ]
            },
            {
              text: "\u{1F53B} <via>ViaCurve</via>",
              link: "/reference/Via/ViaGeometry/ViaCurve/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F53B} <via>AroundCurve</via>", link: "/reference/Via/ViaGeometry/ViaCurve/CircumventCurve" },
                { text: "\u{1F53B} <via>GhostLine</via>", link: "/reference/Via/ViaGeometry/ViaCurve/GhostLine" },
                { text: "\u{1F53B} <via>ParallelCurve</via>", link: "/reference/Via/ViaGeometry/ViaCurve/ParallelCurve" },
                { text: "\u{1F53B} <via>PerimeterCurve</via>", link: "/reference/Via/ViaGeometry/ViaCurve/PerimeterCurve" },
                { text: "\u{1F53B} <via>SpiralCurve</via>", link: "/reference/Via/ViaGeometry/ViaCurve/SpiralCurve" },
                { text: "\u{1F53B} <via>TurnAroundCurve</via>", link: "/reference/Via/ViaGeometry/ViaCurve/TurnAroundCurve" },
                { text: "\u{1F53B} <via>ZigzagCurve</via>", link: "/reference/Via/ViaGeometry/ViaCurve/ZigzagCurve" }
              ]
            },
            {
              text: "\u{1F53B} <via>ViaSpace</via>",
              link: "/reference/Via/ViaGeometry/ViaSpace/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F53B} <via>MaximumSpacing</via>", link: "/reference/Via/ViaGeometry/ViaSpace/MaximumSpacing" },
                { text: "\u{1F53B} <via>MinimumSpacing</via>", link: "/reference/Via/ViaGeometry/ViaSpace/MinimumSpacing" },
                { text: "\u{1F53B} <via>OptimalSpacing</via>", link: "/reference/Via/ViaGeometry/ViaSpace/OptimalSpacing" },
                { text: "\u{1F53B} <via>ElasticSpacing</via>", link: "/reference/Via/ViaGeometry/ViaSpace/ElasticSpacing" },
                { text: "\u{1F53B} <via>SpacingOnSlope</via>", link: "/reference/Via/ViaGeometry/ViaSpace/SpacingOnSlope" }
              ]
            },
            {
              text: "\u{1F53B} <via>ViaSurface</via>",
              link: "/reference/Via/ViaGeometry/ViaSurface/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F53B} <via>ViaSurface Texture</via>", link: "/reference/Via/ViaSurface/ViaSurfaceTexture" }
              ]
            }
          ]
        },
        {
          text: "\u{1F53B} <via>Via Problem</via>",
          link: "/reference/Via/ViaProblem/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F53B} <via>Via Theorem</via>",
          link: "/reference/Via/ViaTheorem/Overview",
          collapsed: true,
          items: [
            {
              text: "\u{1F53B} <via>Cover Algorithms</via>",
              link: "/reference/Via/ViaTheorem/CoverAlgorithm/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F53B} <via>BoustroCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/BoustroCover" },
                { text: "\u{1F53B} <via>CircleCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/CircleCover" },
                { text: "\u{1F53B} <via>DiamondCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/DiamondCover" },
                { text: "\u{1F53B} <via>SquareCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/SquareCover" },
                { text: "\u{1F53B} <via>TriangleCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/TriangleCover" },
                { text: "\u{1F53B} <via>ChunkCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/ChunkCover" },
                { text: "\u{1F53B} <via>BackCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/BackCover" },
                { text: "\u{1F53B} <via>OpenEndedCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/OpenEndedCover" },
                { text: "\u{1F53B} <via>PerimeterCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/PerimeterCover" },
                { text: "\u{1F53B} <via>TypewriterCover</via>", link: "/reference/Via/ViaTheorem/CoverAlgorithm/TypewriterCover" }
              ]
            },
            {
              text: "\u{1F53B} <via>ObstacleCover</via>",
              link: "/reference/Via/ViaTheorem/ObstacleCover/Overview",
              collapsed: true,
              items: []
            },
            {
              text: "\u{1F53B} <via>TeamCover</via>",
              collapsed: true,
              items: [
                { text: "\u{1F53B} <via>TeamPlant Overview</via>", link: "/reference/Via/ViaTheorem/TeamCover/Overview" },
                { text: "\u{1F53B} <via>BouncingCover</via>", link: "/reference/Via/ViaTheorem/TeamCover/BouncingCover" },
                { text: "\u{1F53B} <via>CrossingCover</via>", link: "/reference/Via/ViaTheorem/TeamCover/CrossingCover" },
                { text: "\u{1F53B} <via>FollowingCover</via>", link: "/reference/Via/ViaTheorem/TeamCover/FollowingCover" }
              ]
            }
          ]
        },
        {
          text: "\u{1F53B} <via>Flag</via>",
          link: "/reference/Via/Flag/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F53B} <via>BoundaryFlag</via>", link: "/reference/Via/Flag/BoundaryFlag" },
            { text: "\u{1F53B} <via>FlagLocation</via>", link: "/reference/Via/Flag/FlagLocation" },
            { text: "\u{1F53B} <via>HighFlag</via>", link: "/reference/Via/Flag/HighFlag" },
            { text: "\u{1F53B} <via>LineInFlag</via>", link: "/reference/Via/Flag/LineInFlag" },
            { text: "\u{1F53B} <via>NaturalFlag</via>", link: "/reference/Via/Flag/NaturalFlag" },
            { text: "\u{1F53B} <via>TrenchExitFlag</via>", link: "/reference/Via/Flag/TrenchExitFlag" },
            { text: "\u{1F53B} <via>WastedFlag</via>", link: "/reference/Via/Flag/WastedFlag" }
          ]
        }
      ]
    },
    // #Neuro
    {
      text: "\u{1F49C} <neuro>Neuro</neuro>",
      link: "/reference/Neuro/NeuroOverview",
      collapsed: true,
      items: [
        { text: "\u{1F537} <neuro>Neuro Difficulty</neuro>", link: "/reference/Neuro/NeuroDifficulty" },
        {
          text: "\u{1F49C} <neuro>Arousal</neuro>",
          link: "/reference/Neuro/Arousal/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Attention</neuro>",
          link: "/reference/Neuro/Attention/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Audio</neuro>",
          link: "/reference/Neuro/Audio/Overview",
          collapsed: true,
          items: [
            {
              text: "\u{1F49C} <neuro>Music</neuro>",
              link: "/reference/Neuro/Audio/Music/Overview",
              collapsed: true,
              items: [
                { text: "\u{1F49C} <neuro>Playlists</neuro>", link: "/reference/Neuro/Audio/Music/Overview" }
              ]
            },
            { text: "\u{1F49C} <neuro>BranchBreakSound</neuro>", link: "/reference/Neuro/Audio/BranchBreakSound" },
            { text: "\u{1F49C} <neuro>LogBreakSound</neuro>", link: "/reference/Neuro/Audio/LogBreakSound" },
            { text: "\u{1F49C} <neuro>SlashSound</neuro>", link: "/reference/Neuro/Audio/SlashSound" },
            { text: "\u{1F49C} <neuro>SpadeSound</neuro>", link: "/reference/Neuro/Audio/SpadeSound" },
            { text: "\u{1F49C} <neuro>SoilSound</neuro>", link: "/reference/Neuro/Audio/SoilSound" }
          ]
        },
        {
          text: "\u{1F49C} <neuro>Awareness</neuro>",
          link: "/reference/Neuro/Awareness/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Counting</neuro>",
          link: "/reference/Neuro/Counting/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Decision</neuro>",
          collapsed: true,
          items: [
            { text: "\u{1F49C} <neuro>GoOrNoGo</neuro>", link: "/reference/Neuro/Decision/GoOrNoGo" },
            { text: "\u{1F49C} <neuro>MicrositeSelection</neuro>", link: "/reference/Neuro/Decision/MicrositeSelection" }
          ]
        },
        {
          text: "\u{1F49C} <neuro>Emotion</neuro>",
          link: "/reference/Neuro/Emotion/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F49C} <neuro>Anger</neuro>", link: "/reference/Neuro/Emotion/Anger" },
            { text: "\u{1F49C} <neuro>Disgust</neuro>", link: "/reference/Neuro/Emotion/Disgust" },
            { text: "\u{1F49C} <neuro>Fear</neuro>", link: "/reference/Neuro/Emotion/Fear" },
            { text: "\u{1F49C} <neuro>Joy</neuro>", link: "/reference/Neuro/Emotion/Joy" },
            { text: "\u{1F49C} <neuro>Sadness</neuro>", link: "/reference/Neuro/Emotion/Sadness" }
          ]
        },
        {
          text: "\u{1F49C} <neuro>Energy</neuro>",
          link: "/reference/Neuro/Energy/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Estimation</neuro>",
          collapsed: true,
          items: [
            { text: "\u{1F49C} <neuro>AreaEstimation</neuro>", link: "/reference/Neuro/Estimation/AreaEstimation" },
            { text: "\u{1F49C} <neuro>BagCoverEstimation</neuro>", link: "/reference/Neuro/Estimation/BagCoverEstimation" },
            { text: "\u{1F49C} <neuro>DistanceEstimation</neuro>", link: "/reference/Neuro/Estimation/DistanceEstimation" },
            { text: "\u{1F49C} <neuro>TimeEstimation</neuro>", link: "/reference/Neuro/Estimation/TimeEstimation" }
          ]
        },
        {
          text: "\u{1F49C} <neuro>Event</neuro>",
          link: "/reference/Neuro/Event/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Homeostasis</neuro>",
          link: "/reference/Neuro/Homeostasis/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Memory</neuro>",
          link: "/reference/Neuro/Memory/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F49C} <neuro>WorkingMemory</neuro>", link: "/reference/Neuro/Memory/WorkingMemory" },
            { text: "\u{1F49C} <neuro>ShortTermMemory</neuro>", link: "/reference/Neuro/Memory/ShortTermMemory" },
            { text: "\u{1F49C} <neuro>LongTermMemory</neuro>", link: "/reference/Neuro/Memory/LongTermMemory" },
            { text: "\u{1F49C} <neuro>NumberMemory</neuro>", link: "/reference/Neuro/Memory/NumberMemory" },
            { text: "\u{1F49C} <neuro>ViaMemory</neuro>", link: "/reference/Neuro/Memory/ViaMemory" }
          ]
        },
        {
          text: "\u{1F49C} <neuro>Mindfulness</neuro>",
          link: "/reference/Neuro/Mindfulness/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Muscle</neuro>",
          link: "/reference/Neuro/Muscle/Overview",
          collapsed: true,
          items: []
        },
        { text: "\u{1F49C} <neuro>Proprioception</neuro>", link: "/reference/Neuro/Proprioception/Overview" },
        { text: "\u{1F49C} <neuro>Resilience</neuro>", link: "/reference/Neuro/Resilience/Overview" },
        {
          text: "\u{1F49C} <neuro>SpatialCognition</neuro>",
          link: "/reference/Neuro/SpatialCognition/Overview",
          collapsed: true,
          items: []
        },
        {
          text: "\u{1F49C} <neuro>Time</neuro>",
          link: "/reference/Neuro/Time/Overview",
          collapsed: true,
          items: [
            { text: "\u{1F49C} <neuro>BagUpTime</neuro>", link: "/reference/Neuro/Time/BagUpTime" },
            { text: "\u{1F49C} <neuro>DailySchedule</neuro>", link: "/reference/Neuro/Time/DailySchedule" },
            { text: "\u{1F49C} <neuro>MotoTiming</neuro>", link: "/reference/Neuro/Time/MotoTiming" },
            { text: "\u{1F49C} <neuro>Planning</neuro>", link: "/reference/Neuro/Time/Planning" },
            { text: "\u{1F49C} <neuro>Timer</neuro>", link: "/reference/Neuro/Time/Timer" }
          ]
        },
        { text: "\u{1F49C} <neuro>Thermoception</neuro>", link: "/reference/Neuro/Thermoception" }
      ]
    },
    { text: "\u{1F4C3} Glossary", link: "/reference/glossary/Glossary" },
    { text: "\u{1F4F7} Media Database", link: "/reference/media/Overview" }
  ];
}
function sidebarTutorial() {
  return [
    { text: "Tutorial Overview", link: "/tutorial/Overview" },
    { text: "Video Tutorials Overview", link: "/tutorial/VideoTutorialsOverview" },
    { text: "Labelling", link: "/tutorial/Test_LabelDiagram" },
    { text: "Matching", link: "/tutorial/Test_Matching" },
    { text: "MultipleChoice", link: "/tutorial/Test_MultipleChoice" },
    { text: "Sequencing", link: "/tutorial/Test_Sequencing" },
    { text: "Go to Reference", link: "/reference/Overview" }
  ];
}
function sidebarExamples() {
  return [
    { text: "Examples Overview", link: "/examples/Overview" },
    { text: "Go to Tutorial", link: "/tutorial/TutorialOverview" }
  ];
}
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxPd25lclxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXHB1dHBsYW50XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcT3duZXJcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxwdXRwbGFudFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvT3duZXIvT25lRHJpdmUvRG9jdW1lbnRzL0dpdEh1Yi9wdXRwbGFudC9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgbGFuZzogJ2VuLVVTJyxcclxuICB0aXRsZTogJ1B1dChQbGFudCknLFxyXG4gIGRlc2NyaXB0aW9uOiAnJyxcclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICBiYXNlOiAnL3B1dHBsYW50LycsXHJcbiAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxyXG4gIGFwcGVhcmFuY2U6ICdkYXJrJyxcclxuICBoZWFkOiBbXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogXCJhcHBsZS10b3VjaC1pY29uXCIsIHNpemVzOiBcIjE4MHgxODBcIiwgaHJlZjogXCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiB9XSxcclxuICAgIFsnbGluaycsIHsgcmVsOiBcImljb25cIiwgdHlwZTogXCJpbWFnZS9wbmdcIiwgc2l6ZXM6IFwiMzJ4MzJcIiwgaHJlZjogXCIvZmF2aWNvbi0zMngzMi5wbmdcIiB9XSxcclxuICAgIFsnbGluaycsIHsgcmVsOiBcImljb25cIiwgdHlwZTogXCJpbWFnZS9wbmdcIiwgc2l6ZXM6IFwiMTZ4MTZcIiwgaHJlZjogXCIvZmF2aWNvbi0xNngxNi5wbmdcIiB9XSxcclxuICAgIFsnbGluaycsIHsgcmVsOiBcIm1hbmlmZXN0XCIsIGhyZWY6IFwiL3NpdGUud2VibWFuaWZlc3RcIiB9XSxdLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcblxyXG4gICAgb3V0bGluZTogWzIsIDRdLFxyXG4gICAgbG9nbzogJ2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcclxuICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgIHsgaWNvbjogJ3lvdXR1YmUnLCBsaW5rOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vQEtsaW1iZXRhJyB9LFxyXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2tsaW1iZXRhL3B1dHBsYW50JyB9XHJcbiAgICBdLFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgUHV0KFBsYW50KSBcdTAwQTkgMjAyMy1wcmVzZW50J1xyXG4gICAgfSxcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICBwcm92aWRlcjogJ2xvY2FsJ1xyXG4gICAgfSxcclxuXHJcbiAgICBzaXRlVGl0bGU6ICdQdXQoUGxhbnQpJyxcclxuICAgIG5hdjogbmF2KCksXHJcblxyXG4gICAgc2lkZWJhcjoge1xyXG4gICAgICAnL2d1aWRlLyc6IHNpZGViYXJHdWlkZSgpLFxyXG4gICAgICAnL2V4YW1wbGVzLyc6IHNpZGViYXJFeGFtcGxlcygpLFxyXG4gICAgICAnL3R1dG9yaWFsLyc6IHNpZGViYXJUdXRvcmlhbCgpLFxyXG4gICAgICAnL3JlZmVyZW5jZS8nOiBzaWRlYmFyUmVmZXJlbmNlKCksXHJcbiAgICAgICcvZGV2Lyc6IHNpZGViYXJEZXZlbG9wbWVudCgpLFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuLy8gI0RldlxyXG5mdW5jdGlvbiBzaWRlYmFyRGV2ZWxvcG1lbnQoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgdGV4dDogJzxkZXY+RGV2IE92ZXJ2aWV3PC9kZXY+JywgbGluazogJy9kZXYvRGV2T3ZlcnZpZXcnIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2PkNvbnRhY3Q8L2Rldj4nLCBsaW5rOiAnL2Rldi9Db250YWN0JyB9LFxyXG4gICAgeyB0ZXh0OiAnPGRldj5BY2FkZW1pYTwvZGV2PicsIGxpbms6ICcvZGV2L0FjYWRlbWlhJyB9LFxyXG4gICAgeyB0ZXh0OiAnPGRldj5BcnQ8L2Rldj4nLCBsaW5rOiAnL2Rldi9hcnQvT3ZlcnZpZXcnIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2PkRhdGEgVmlzdWFsaXphdGlvbjwvZGV2PicsIGxpbms6ICcvZGV2L0VsZW1lbnRzR3JhcGgnIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2PkNvbnRyaWJ1dGU8L2Rldj4nLCBsaW5rOiAnL2Rldi9Db250cmlidXRlJyB9LFxyXG4gICAgeyB0ZXh0OiAnPGRldj5Eb3dubG9hZHM8L2Rldj4nLCBsaW5rOiAnL2Rldi9Eb3dubG9hZHMnIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2PkRYPC9kZXY+JywgbGluazogJy9kZXYvRFgnIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2PkZpbG1pbmc8L2Rldj4nLCBsaW5rOiAnL2Rldi9GaWxtaW5nJyB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnPGRldj5HcmFwaGljczwvZGV2PicsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6ICc8ZGV2Pk92ZXJ2aWV3PC9kZXY+JywgbGluazogJy9kZXYvR3JhcGhpY3MvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnPGJldGE+QmV0YSBHcmFwaGljczwvYmV0YT4nLCBsaW5rOiAnL2Rldi9HcmFwaGljcy9CZXRhR3JhcGhpYycgfSxcclxuICAgICAgICB7IHRleHQ6ICc8ZWNvPkVjbyBHcmFwaGljczwvZWNvPicsIGxpbms6ICcvZGV2L0dyYXBoaWNzL0Vjb0dyYXBoaWMnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnPG1vdG8+TW90byBHcmFwaGljczwvbW90bz4nLCBsaW5rOiAnL2Rldi9HcmFwaGljcy9Nb3RvR3JhcGhpYycgfSxcclxuICAgICAgICB7IHRleHQ6ICc8bmV1cm8+TmV1cm8gR3JhcGhpY3M8L25ldXJvPicsIGxpbms6ICcvZGV2L0dyYXBoaWNzL05ldXJvR3JhcGhpYycgfSxcclxuICAgICAgICB7IHRleHQ6ICc8dmlhPlZpYSBHcmFwaGljczwvdmlhPicsIGxpbms6ICcvZGV2L0dyYXBoaWNzL1ZpYUdyYXBoaWMnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnVVggR3JhcGhpY3MnLCBsaW5rOiAnL2Rldi9HcmFwaGljcy9VWEdyYXBoaWMnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnPGRldj5EWCBHcmFwaGljczwvZGV2PicsIGxpbms6ICcvZGV2L0dyYXBoaWNzL0RYR3JhcGhpYycgfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHsgdGV4dDogJzxkZXY+T2ZmbGluZTwvZGV2PicsIGxpbms6ICcvZGV2L09mZmxpbmUnIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2Pk9wZW4gU291cmNlPC9kZXY+JywgbGluazogJy9kZXYvT3BlblNvdXJjZScgfSxcclxuICAgIHsgdGV4dDogJzxkZXY+UGFwZXJQaG90bzwvZGV2PicsIGxpbms6ICcvZGV2L1BhcGVyUGhvdG8nIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2PlB5bGFudGVyPC9kZXY+JywgbGluazogJy9kZXYvUHlsYW50ZXInIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2PlJlc2VhcmNoIFF1ZXN0aW9uczwvZGV2PicsIGxpbms6ICcvZGV2L1Jlc2VhcmNoUXVlc3Rpb25zJyB9LFxyXG4gICAgeyB0ZXh0OiAnPGRldj5Sb2FkbWFwPC9kZXY+JywgbGluazogJy9kZXYvUm9hZG1hcCcgfSxcclxuICAgIHsgdGV4dDogJzxkZXY+U2VxdWVuY2U8L2Rldj4nLCBsaW5rOiAnL2Rldi9TZXF1ZW5jZScgfSxcclxuICAgIHsgdGV4dDogJzxkZXY+U29jaWFsTWVkaWE8L2Rldj4nLCBsaW5rOiAnL2Rldi9Tb2NpYWxNZWRpYScgfSxcclxuICAgIHsgdGV4dDogJzxkZXY+U3R5bGVHdWlkZTwvZGV2PicsIGxpbms6ICcvZGV2L1N0eWxlR3VpZGUnIH0sXHJcbiAgICB7IHRleHQ6ICc8ZGV2PlRhZ2dpbmc8L2Rldj4nLCBsaW5rOiAnL2Rldi9UYWdnaW5nJyB9LFxyXG4gICAgeyB0ZXh0OiAnPGRldj5Ub0RvPC9kZXY+JywgbGluazogJy9kZXYvVG9EbycgfSxcclxuICAgIHsgdGV4dDogJzxkZXY+VG9vbHM8L2Rldj4nLCBsaW5rOiAnL2Rldi9Ub29scycgfSxcclxuICAgIHsgdGV4dDogJzxkZXY+VVg8L2Rldj4nLCBsaW5rOiAnL2Rldi9VWCcgfSxcclxuICAgIHsgdGV4dDogJzxkZXY+QWZ0ZXJub29uVGFzazwvZGV2PicsIGxpbms6ICcvZGV2L0FmdGVybm9vblRhc2snIH0sXHJcbiAgXVxyXG59XHJcblxyXG4vLyAjTmF2XHJcbmZ1bmN0aW9uIG5hdigpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnR3VpZGUnLFxyXG4gICAgICBsaW5rOiAnL2d1aWRlL1doYXQvV2hhdFB1dFBsYW50JyxcclxuICAgICAgYWN0aXZlTWF0Y2g6ICcvZ3VpZGUvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcclxuICAgICAgbGluazogJy9leGFtcGxlcy9PdmVydmlldycsXHJcbiAgICAgIGFjdGl2ZU1hdGNoOiAnL2V4YW1wbGVzLydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdUdXRvcmlhbCcsXHJcbiAgICAgIGxpbms6ICcvdHV0b3JpYWwvVHV0b3JpYWxPdmVydmlldycsXHJcbiAgICAgIGFjdGl2ZU1hdGNoOiAnL3R1dG9yaWFsLydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdSZWZlcmVuY2UnLFxyXG4gICAgICBsaW5rOiAnL3JlZmVyZW5jZS9SZWZPdmVydmlldycsXHJcbiAgICAgIGFjdGl2ZU1hdGNoOiAnL3JlZmVyZW5jZS8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHVEODNEXHVERUUwJyxcclxuICAgICAgbGluazogJ2Rldi9EZXZPdmVydmlldycsXHJcbiAgICAgIGFjdGl2ZU1hdGNoOiAnL2Rldi8nXHJcbiAgICB9XHJcbiAgXVxyXG59XHJcblxyXG4vLyNHdWlkZVxyXG5mdW5jdGlvbiBzaWRlYmFyR3VpZGUoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0ludHJvZHVjdGlvbicsXHJcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnV2hhdCBpcyBUcmVlIFBsYW50aW5nPycsIGxpbms6ICcvZ3VpZGUvV2hhdC9XaGF0VHJlZVBsYW50aW5nJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1doYXQgaXMgUHV0KFBsYW50KT8nLCBsaW5rOiAnL2d1aWRlL1doYXQvV2hhdFB1dFBsYW50JyB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnUHVycG9zZScsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDI1XHVEODNDXHVERjMyXHVEODNEXHVERDI1IDxlY28+VG8gUmVwbGFudCBCdXJudCBMYW5kPC9lY28+JywgbGluazogJy9ndWlkZS9XaHkvV2lsZGZpcmUnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPlRvIFJlZHVjZSBJbmp1cnk8L21vdG8+JywgbGluazogJy9ndWlkZS9XaHkvSW5qdXJ5JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPlRvIEluY3JlYXNlIFByb2R1Y3Rpdml0eTwvdmlhPicsIGxpbms6ICcvZ3VpZGUvV2h5L1Byb2R1Y3Rpdml0eScgfSxcclxuICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREMzcgPGJldGE+VG8gSW1wcm92ZSBDb21tdW5pY2F0aW9uPC9iZXRhPicsIGxpbms6ICcvZ3VpZGUvV2h5L0NvbW11bmljYXRpb24nIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5UbyBTdGVlcGVuIExlYXJuaW5nIEN1cnZlPC9uZXVybz4nLCBsaW5rOiAnL2d1aWRlL1doeS9MZWFybmluZ0N1cnZlJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1RENCMiBUbyBJbmNyZWFzZSBQcm9maXQnLCBsaW5rOiAnL2d1aWRlL1doeS9Db21wYW55JyB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdQbGFudGVyIEd1aWRlJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6ICdQb3RlbnRpYWwgUGxhbnRlcicsIGxpbms6ICcvZ3VpZGUvV2hvL1BvdGVudGlhbFBsYW50ZXInIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnTm92aWNlIFBsYW50ZXInLCBsaW5rOiAnL2d1aWRlL1doby9Ob3ZpY2VQbGFudGVyJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ0V4cGVyaWVuY2VkIFBsYW50ZXInLCBsaW5rOiAnL2d1aWRlL1doby9FeHBlcmllbmNlZFBsYW50ZXInIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnUGxhbnRlciBTdXBlcnZpc29yJywgbGluazogJy9ndWlkZS9XaG8vUGxhbnRlclN1cGVydmlzb3InIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnUGxhbnRlciBJbnN0cnVjdG9yJywgbGluazogJy9ndWlkZS9XaG8vUGxhbnRlckluc3RydWN0b3InIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0dlYXIgR3VpZGUnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogW1xyXG4gICAgICAgIHsgdGV4dDogJ1doYXQgR2VhciB0byBicmluZz8nLCBsaW5rOiAnL2d1aWRlL1doYXQvV2hhdEdlYXInIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnR2VhciBMaXN0JywgbGluazogJy9ndWlkZS9XaGF0L0dlYXJMaXN0JyB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7IHRleHQ6ICdHbyB0byBFeGFtcGxlcycsIGxpbms6ICcvZXhhbXBsZXMvT3ZlcnZpZXcnIH0sXHJcbiAgXVxyXG59XHJcbi8vIFxyXG5mdW5jdGlvbiBzaWRlYmFyUmVmZXJlbmNlKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHRleHQ6ICc8c3Ryb25nPlJlZmVyZW5jZSBPdmVydmlldzwvc3Ryb25nPicsIGxpbms6ICcvcmVmZXJlbmNlL1JlZk92ZXJ2aWV3JyB9LFxyXG4gICAgLy8gI0JldGFcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1RDgzRFx1REQzNyA8YmV0YT5CZXRhPC9iZXRhPicsIGxpbms6ICcvcmVmZXJlbmNlL0JldGEvV2hhdEJldGEnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFFeGFtcGxlczwvYmV0YT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9CZXRhL0JldGFFeGFtcGxlcycgfSxcclxuICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREMzcgPGJldGE+QmV0YUxpbmdvPC9iZXRhPicsIGxpbms6ICcvcmVmZXJlbmNlL0JldGEvQmV0YUxpbmdvL092ZXJ2aWV3JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8YmV0YT5CZXRhRGlhZ3JhbTwvYmV0YT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9CZXRhL0JldGFEaWFncmFtJyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdUREMzcgPGJldGE+QmV0YUNvZGU8L2JldGE+JywgbGluazogJy9yZWZlcmVuY2UvQmV0YS9CZXRhQ29kZS9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFPYmplY3Q8L2JldGE+JywgbGluazogJy9yZWZlcmVuY2UvQmV0YS9CZXRhQ29kZS9CZXRhT2JqZWN0JyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREMzcgPGJldGE+QmV0YU1ldGhvZDwvYmV0YT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9CZXRhL0JldGFDb2RlL0JldGFNZXRob2QnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8YmV0YT5CZXRhQmxvY2s8L2JldGE+JywgbGluazogJy9yZWZlcmVuY2UvQmV0YS9CZXRhQ29kZS9CZXRhQmxvY2snIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFTY29yZTwvYmV0YT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9CZXRhL0JldGFTY29yZS9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFFeGVjdXRpb25TY29yZTwvYmV0YT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9CZXRhL0JldGFTY29yZS9CZXRhRXhlY3V0aW9uJyB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REQzNyA8YmV0YT5CZXRhRGlmZmljdWx0eVNjb3JlPC9iZXRhPicsIGxpbms6ICcvcmVmZXJlbmNlL0JldGEvQmV0YVNjb3JlL0JldGFEaWZmaWN1bHR5U2NvcmUvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREMzcgPGJldGE+QmV0YUNvbXBsZXhpdHlTY29yZTwvYmV0YT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9CZXRhL0JldGFTY29yZS9CZXRhRGlmZmljdWx0eS9CZXRhQ29tcGxleGl0eVNjb3JlJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFSaXNrU2NvcmU8L2JldGE+JywgbGluazogJy9yZWZlcmVuY2UvQmV0YS9CZXRhU2NvcmUvQmV0YURpZmZpY3VsdHkvQmV0YVJpc2tTY29yZScgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8YmV0YT5CZXRhSW50ZW5zaXR5U2NvcmU8L2JldGE+JywgbGluazogJy9yZWZlcmVuY2UvQmV0YS9CZXRhU2NvcmUvQmV0YURpZmZpY3VsdHkvQmV0YUludGVuc2l0eVNjb3JlJyB9XHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFEaWZmaWN1bHR5PC9iZXRhPicsIGxpbms6ICcvcmVmZXJlbmNlL0JldGEvQmV0YURpZmZpY3VsdHkvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8YmV0YT5CZXRhQ29tcGxleGl0eTwvYmV0YT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9CZXRhL0JldGFTY29yZS9CZXRhRGlmZmljdWx0eS9CZXRhQ29tcGxleGl0eScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFJbnRlbnNpdHk8L2JldGE+JywgbGluazogJy9yZWZlcmVuY2UvQmV0YS9CZXRhU2NvcmUvQmV0YURpZmZpY3VsdHkvQmV0YUludGVuc2l0eScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFSaXNrPC9iZXRhPicsIGxpbms6ICcvcmVmZXJlbmNlL0JldGEvQmV0YVNjb3JlL0JldGFEaWZmaWN1bHR5L0JldGFSaXNrJyB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDM3IDxiZXRhPkJldGFWaWRlbzwvYmV0YT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9CZXRhL0JldGFWaWRlby9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgLy8gI0Vjb1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+RWNvPC9lY28+JywgY29sbGFwc2VkOiB0cnVlLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vRWNvT3ZlcnZpZXcnLCBpdGVtczogW1xyXG4gICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8ZWNvPkVjbyBEaWZmaWN1bHR5PC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL0Vjb0RpZmZpY3VsdHknIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPkFuaW1hbHM8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vQW5pbWFscy9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+QXRtb3NwaGVyZTwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9BdG1vc3BoZXJlL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5BaXJUZW1wZXJhdHVyZTwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9BdG1vc3BoZXJlL0FpclRlbXBlcmF0dXJlJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5IdW1pZGl0eTwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9BdG1vc3BoZXJlL0h1bWlkaXR5JyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5QcmVjaXBpdGF0aW9uPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL0F0bW9zcGhlcmUvUHJlY2lwaXRhdGlvbicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+V2luZDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9BdG1vc3BoZXJlL1dpbmQnIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+QmxvY2s8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vQmxvY2svT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPkZpbGxCbG9jazwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9CbG9jay9GaWxsQmxvY2snIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlJvYWQ8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vQmxvY2svUm9hZCcgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5EZW5zaXR5PC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL0RlbnNpdHkvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlBsb3Q8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vRGVuc2l0eS9QbG90JyB9LFxyXG5cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5MYW5kU3BlZWQ8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vTGFuZFNwZWVkL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5GYXN0TGFuZDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9MYW5kU3BlZWQvRmFzdExhbmQnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlNsb3dMYW5kPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL0xhbmRTcGVlZC9TbG93TGFuZCcgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5PYnN0YWNsZTwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9PYnN0YWNsZS9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+SG9sZU9ic3RhY2xlPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL09ic3RhY2xlL0hvbGVPYnN0YWNsZScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+TG9nT2JzdGFjbGU8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vT2JzdGFjbGUvTG9nT2JzdGFjbGUnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPk1pY3Jvc2l0ZU9ic3RhY2xlPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL09ic3RhY2xlL01pY3Jvc2l0ZU9ic3RhY2xlJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5Sb2NrT2JzdGFjbGU8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vT2JzdGFjbGUvUm9ja09ic3RhY2xlJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5TdHVtcE9ic3RhY2xlPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL09ic3RhY2xlL1N0dW1wT2JzdGFjbGUnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlNsYXNoUGlsZUFyZWE8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vQXJlYS9TbGFzaFBpbGVBcmVhJyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlBpZWNlPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL1BpZWNlL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5QaWVjZVRvcG9ncmFwaHk8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vUGllY2UvUGllY2VUb3BvZ3JhcGh5JyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlByZXA8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vUHJlcC9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+TW91bmRMYW5kPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL1ByZXAvTW91bmRMYW5kJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5UcmVuY2hMYW5kPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL1ByZXAvVHJlbmNoTGFuZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+RGVhY3RpdmF0ZWRSb2FkPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL1ByZXAvVHJlbmNoTGFuZCcgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5SYXc8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vUmF3L092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5TdHVtcExhbmQ8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vUmF3L1N0dW1wTGFuZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+QnVybnRMYW5kPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL1Jhdy9CdXJudExhbmQnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlJpcGFyaWFuTGFuZDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9SYXcvUmlwYXJpYW5MYW5kJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5Sb2NreUxhbmQ8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vUmF3L1JvY2t5TGFuZCcgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5TbGFzaDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9TbGFzaC9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+QnVyblBpbGVTbGFzaDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9TbGFzaC9CdXJuUGlsZVNsYXNoJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5IaWdoU2xhc2g8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vU2xhc2gvSGlnaFNsYXNoJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5Mb3dTbGFzaDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9TbGFzaC9Mb3dTbGFzaCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+V2V0U2xhc2g8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vU2xhc2gvV2V0U2xhc2gnIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+U29pbDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9Tb2lsL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5Ib2xlPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL1NvaWwvSG9sZScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+Q2xheVNvaWw8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vU29pbC9DbGF5U29pbCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+RHJ5U29pbDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9Tb2lsL0RyeVNvaWwnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPkdyYXZlbFNvaWw8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vU29pbC9HcmF2ZWxTb2lsJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5NaW5lcmFsU29pbDwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9Tb2lsL01pbmVyYWxTb2lsJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTkgPGVjbz5SZWRSb3Q8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vU29pbC9SZWRSb3QnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlNhbmRTb2lsPC9lY28+JywgbGluazogJy9yZWZlcmVuY2UvRWNvL1NvaWwvU2FuZFNvaWwnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPldldFNvaWw8L2Vjbz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9FY28vU29pbC9XZXRTb2lsJyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFOSA8ZWNvPlN1bjwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9TdW4vT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkU5IDxlY28+VmVnZXRhdGlvbjwvZWNvPicsIGxpbms6ICcvcmVmZXJlbmNlL0Vjby9WZWdldGF0aW9uL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICAvLyAjTW90b1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPk1vdG88L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Nb3RvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPlBocmFzZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1BocmFzZS9PdmVydmlldycgfSxcclxuICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+TW90byBEaWZmaWN1bHR5PC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vTW90b0RpZmZpY3VsdHknIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Nb3RvR2VvbWV0cnk8L21vdG8+JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+T3ZlcnZpZXc8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Nb3RvR2VvbWV0cnkvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Nb3RvUG9pbnQ8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Nb3RvR2VvbWV0cnkvTW90b1BvaW50JyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+TW90b0N1cnZlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vTW90b0dlb21ldHJ5L01vdG9DdXJ2ZScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPk1vdG9TcGFjZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL01vdG9HZW9tZXRyeS9Nb3RvU3BhY2UnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Nb3RvU3VyZmFjZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL01vdG9HZW9tZXRyeS9Nb3RvU3VyZmFjZScgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QXJtTW90bzwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0FybU1vdG8vT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Bcm0gUGhyYXNlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vQXJtTW90by9QaHJhc2UvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Bcm1Qcm9wPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vQXJtTW90by9Bcm1Qcm9wJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QXJtU3dpbmc8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Bcm1Nb3RvL0FybVN3aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QXJtV2FsazwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0FybU1vdG8vQXJtV2FsaycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkFybUJhbGFuY2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Bcm1Nb3RvL0FybUJhbGFuY2UnIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJvZHlNb3RvPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vQm9keU1vdG8vT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Cb2R5IFBocmFzZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0JvZHlNb3RvL1BocmFzZS9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJvZHlBYnNvcmI8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Cb2R5TW90by9Cb2R5QWJzb3JiJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Qm9keUJlbmQ8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Cb2R5TW90by9Cb2R5QmVuZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJvZHlMZWFuPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vQm9keU1vdG8vQm9keUxlYW4nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Cb2R5UmV2b2x2ZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0JvZHlNb3RvL0JvZHlSZXZvbHZlJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Qm9keVJvdGF0ZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0JvZHlNb3RvL0JvZHlSb3RhdGUnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Cb2R5U2xvdDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0JvZHlNb3RvL0JvZHlTbG90JyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+RmFsbDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0JvZHlNb3RvL0ZhbGwnIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkNhY2hlTW90bzwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0NhY2hlTW90by9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkNhY2hlIFBocmFzZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0NhY2hlTW90by9QaHJhc2UvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5FYXRpbmc8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9DYWNoZU1vdG8vRWF0aW5nJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+VGFycE9mZjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0NhY2hlTW90by9UYXJwT2ZmJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+VGFycE9uPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vQ2FjaGVNb3RvL1RhcnBPbicgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Q2xvdGhpbmdNb3RvPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vQ2xvdGhpbmdNb3RvL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Q2xvdGhpbmcgUGhyYXNlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vQ2xvdGhpbmdNb3RvL1BocmFzZS9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJ1dHRvbjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0Nsb3RoaW5nTW90by9CdXR0b24nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5DbG90aGluZ0xheWVyPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vQ2xvdGhpbmdNb3RvL0Nsb3RoaW5nTGF5ZXInIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5SZW1vdmVNdWQ8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9DbG90aGluZ01vdG8vUmVtb3ZlTXVkJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+WmlwcGVyTW90bzwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0Nsb3RoaW5nTW90by9aaXBwZXJNb3RvJyB9LFxyXG5cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Rm9vdE1vdG88L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Gb290TW90by9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkZvb3QgUGhyYXNlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vRm9vdE1vdG8vUGhyYXNlL092ZXJ2aWV3JyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Rm9vdEFyY2hTbWVhcjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0Zvb3RNb3RvL0Zvb3RBcmNoU21lYXInIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Gb290Q2xvc2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Gb290TW90by9Gb290Q2xvc2UnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Gb290RGlnPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vRm9vdE1vdG8vRm9vdERpZycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkZvb3REb3JzaWZsZXhpb248L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Gb290TW90by9Gb290RG9yc2lmbGV4aW9uJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Rm9vdERyYWc8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Gb290TW90by9Gb290RHJhZycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkZvb3RFdmVyc2lvbjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0Zvb3RNb3RvL0Zvb3RFdmVyc2lvbicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkZvb3RJbnZlcnNpb248L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Gb290TW90by9Gb290SW52ZXJzaW9uJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Rm9vdFNjcmVlZjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0Zvb3RNb3RvL0Zvb3RTY3JlZWYnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5QbGFudGFyRmxleGlvbjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0Zvb3RNb3RvL1BsYW50YXJGbGV4aW9uJyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5IYW5kTW90bzwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0hhbmRNb3RvL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+SGFuZCBQaHJhc2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IYW5kTW90by9QaHJhc2UvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5CYWdHcmlwPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSGFuZE1vdG8vQmFnR3JpcCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJveEdyaXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IYW5kTW90by9Cb3hHcmlwJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QnJhbmNoR3JpcDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0hhbmRNb3RvL0JyYW5jaEdyaXAnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5CcmFuY2hTbmFwR3JpcDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0hhbmRNb3RvL0JyYW5jaFNuYXBHcmlwJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+SGFuZENsb3NlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSGFuZE1vdG8vSGFuZENsb3NlJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+SGFuZFBva2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IYW5kTW90by9IYW5kUG9rZScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkhhbmRTY3JlZWY8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IYW5kTW90by9IYW5kU2NyZWVmJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U3BhZGVIYW5kbGVHcmlwPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSGFuZE1vdG8vU3BhZGVIYW5kbGVHcmlwJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U3BhZGVTaGFmdEdyaXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IYW5kTW90by9TcGFkZVNoYWZ0R3JpcCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPlRyZWVHcmlwPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSGFuZE1vdG8vVHJlZUdyaXAnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5UcmVlVGVzdEdyaXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IYW5kTW90by9UcmVlVGVzdEdyaXAnIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkhlYWRNb3RvPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSGVhZE1vdG8vT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5IZWFkIFBocmFzZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0hlYWRNb3RvL1BocmFzZS9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkZvY3VzTG9vazwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0hlYWRNb3RvL0ZvY3VzTG9vaycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkhlYWRQcm90cmFjdGlvbjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0hlYWRNb3RvL0hlYWRQcm90cmFjdGlvbicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkhlYWRSZXRyYWN0aW9uPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSGVhZE1vdG8vSGVhZFJldHJhY3Rpb24nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5IZWFkVGlsdEludG9XaW5kPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSGVhZE1vdG8vSGVhZFRpbHRJbnRvV2luZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkhlYXJpbmc8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IZWFkTW90by9IZWFyaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+TG9va0F3YXk8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IZWFkTW90by9Mb29rQXdheScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPk5lY2tFeHRlbnNpb248L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IZWFkTW90by9OZWNrRXh0ZW5zaW9uJyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Ib2xlTW90bzwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0hvbGVNb3RvL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+SG9sZSBQaHJhc2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ib2xlTW90by9QaHJhc2UvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Ib2xlQ2xvc2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ib2xlTW90by9Ib2xlQ2xvc2UnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Ib2xlRXhwYW5kPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSG9sZU1vdG8vSG9sZUV4cGFuZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkhvbGVPcGVuPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vSG9sZU1vdG8vSG9sZU9wZW4nIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkxlZ01vdG88L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9MZWdNb3RvL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+TGVnIFBocmFzZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0xlZ01vdG8vUGhyYXNlL092ZXJ2aWV3JyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Q3JvdWNoPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vTGVnTW90by9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkp1bXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9MZWdNb3RvL0p1bXAnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5LbmVlbDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0xlZ01vdG8vS25lZWwnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5MZWdBYmR1Y3Rpb248L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9MZWdNb3RvL0xlZ0FiZHVjdGlvbicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkxlZ0Fic29yYjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0xlZ01vdG8vTGVnQWJzb3JiJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+TGVnQWRkdWN0aW9uPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vTGVnTW90by9MZWdBZGR1Y3Rpb24nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5MZWdGbGFnPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vTGVnTW90by9MZWdGbGFnJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+TGVnRmxleGlvbjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0xlZ01vdG8vTGVnRmxleGlvbicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkxlZ1Byb3A8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9MZWdNb3RvL0xlZ1Byb3AnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5MZWdTaWRlYmFnTGlmdDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0xlZ01vdG8vTGVnU2lkZWJhZ0xpZnQnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5MZWdTd2luZzwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0xlZ01vdG8vTGVnU3dpbmcnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5SdW5uaW5nU3RhcnQ8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9MZWdNb3RvL1J1bm5pbmdTdGFydCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPlN0ZXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9MZWdNb3RvL1N0ZXAnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5TdG9tcDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0xlZ01vdG8vU3RvbXAnIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPlZlZ2VNb3RvPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVmVnZU1vdG8vT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5CcmFuY2hBcm1EZWZsZWN0aW9uPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVmVnZU1vdG8vQnJhbmNoQXJtRGVmbGVjdGlvbicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJyYW5jaERlZmxlY3Rpb248L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9WZWdlTW90by9CcmFuY2hEZWZsZWN0aW9uJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QnJhbmNoTW90bzwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1ZlZ2VNb3RvL0JyYW5jaE1vdG8nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5CcmFuY2hXaGlwPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVmVnZU1vdG8vQnJhbmNoV2hpcCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJ1c2g8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9WZWdlTW90by9CdXNoJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+TG9nPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVmVnZU1vdG8vTG9nJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U2xhc2hQaWxlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVmVnZU1vdG8vU2xhc2hQaWxlJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U3R1bXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9WZWdlTW90by9TdHVtcCcgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U2NyZWVmPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vU2NyZWVmL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Qm9vdFNjcmVlZjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0Jvb3QvQm9vdFNjcmVlZicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkhhbmRTY3JlZWY8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9IYW5kTW90by9IYW5kU2NyZWVmJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U3BhZGVTY3JlZWY8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9TcGFkZS9TcGFkZVNjcmVlZicgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+VG9vbE1vdG88L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QmFnPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vQmFnL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJhZ0dyaXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9CYWcvQmFnR3JpcCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8bW90bz5CYWcgUGhyYXNlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vQmFnL1BocmFzZS9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5CYWdBZGp1c3RtZW50PC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vQmFnL0JhZ0FkanVzdG1lbnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QmFnRGVhZGxpZnQ8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9CYWcvQmFnRGVhZGxpZnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QmFnRW1wdHk8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9CYWcvQmFnRW1wdHknIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QmFnZ2luZ1VwPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vQmFnL0JhZ2dpbmdVcCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5CYWdPZmY8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9CYWcvQmFnT2ZmJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJhZ09uPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vQmFnL0JhZ09uJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJhZ1NsaWRlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vQmFnL0JhZ1NsaWRlJyB9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Qm9vdDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0Jvb3QvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREMzcgPG1vdG8+Qm9vdCBQaHJhc2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9Cb290L1BocmFzZS9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Cb290R3JpcDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0Jvb3QvQm9vdEdyaXAnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Qm9vdFNjcmVlZjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0Jvb3QvQm9vdFNjcmVlZicgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5MYWNlS25vdDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0Jvb3QvTGFjZUtub3QnIH0sXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5Cb3g8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9Cb3gvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREMzcgPG1vdG8+Qm94IFBocmFzZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0JveC9QaHJhc2UvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Qm94R3JpcDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0JveC9Cb3hHcmlwJyB9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+QnVuZGxlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vQnVuZGxlL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxtb3RvPkJ1bmRsZSBQaHJhc2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9CdW5kbGUvUGhyYXNlL092ZXJ2aWV3JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkJ1bmRsZUdyaXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9CdW5kbGUvQnVuZGxlR3JpcCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5CdW5kbGVQZWVsPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vQnVuZGxlL0J1bmRsZVBlZWwnIH0sXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5DYXJhYmluZXI8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9DYXJhYmluZXIvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5GbGFnPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vRmxhZy9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8bW90bz5GbGFnIFBocmFzZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0ZsYWcvUGhyYXNlL092ZXJ2aWV3JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkZsYWdHcmlwPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vRmxhZy9GbGFnR3JpcCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5GbGFnRXJyb3JSZWNvdmVyeTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0ZsYWcvRmxhZ0Vycm9yUmVjb3ZlcnknIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+RmxhZ0dldDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0ZsYWcvRmxhZ0xvYWQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+RmxhZ1JpcDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0ZsYWcvRmxhZ1JpcCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5GbGFnUm9sbDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0ZsYWcvRmxhZ1JvbGwnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+RmxhZ1VubG9hZDwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0ZsYWcvRmxhZ1Vub2FkJyB9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+R2FpdGVyPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vR2FpdGVyL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxtb3RvPkdhaXRlciBQaHJhc2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9HYWl0ZXIvUGhyYXNlL092ZXJ2aWV3JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPkdhaXRlckdyaXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9HYWl0ZXIvR2FpdGVyR3JpcCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5HYWl0ZXJPbjwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL0dhaXRlci9HYWl0ZXJPbicgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5HYWl0ZXJPZmY8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9HYWl0ZXIvR2FpdGVyT2ZmJyB9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+R2xvdmU8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9HbG92ZS9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8bW90bz5HbG92ZSBQaHJhc2U8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9HbG92ZS9QaHJhc2UvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+R2xvdmVHcmlwPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vR2xvdmUvR2xvdmVHcmlwJyB9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+S2l0PC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vS2l0L092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+Um9wZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL1JvcGUvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5TcGFkZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL1NwYWRlL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDxtb3RvPlNwYWRlIFBocmFzZTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL1NwYWRlL1BocmFzZS9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5TcGFkZUdyaXA8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9TcGFkZS9TcGFkZUdyaXAnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U3BhZGVDaG9wPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vU3BhZGUvU3BhZGVDaG9wJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPlNwYWRlUG9nbzwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL1Rvb2xNb3RvL1NwYWRlL1NwYWRlUG9nbycgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5TcGFkZVByb3A8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9TcGFkZS9TcGFkZVByb3AnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U3BhZGVTY3JlZWY8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9TcGFkZS9TcGFkZVNjcmVlZicgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5TcGFkZVN3aW5nPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVG9vbE1vdG8vU3BhZGUvU3BhZGVTd2luZycgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5TcGFkZVRlc3Q8L21vdG8+JywgbGluazogJy9yZWZlcmVuY2UvTW90by9Ub29sTW90by9TcGFkZS9TcGFkZVRlc3QnIH0sXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPlRydWNrPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVHJ1Y2tNb3RvL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREMzcgPG1vdG8+VHJ1Y2sgUGhyYXNlPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVHJ1Y2tNb3RvL1BocmFzZS9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERkUwIDxtb3RvPlNsZWVwPC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVHJ1Y2tNb3RvL1NsZWVwJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURGRTAgPG1vdG8+U2l0PC9tb3RvPicsIGxpbms6ICcvcmVmZXJlbmNlL01vdG8vVHJ1Y2tNb3RvL1NpdCcgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REZFMCA8bW90bz5LaW5lc2lvbG9neTwvbW90bz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9Nb3RvL0tpbmVzaW9sb2d5L0tpbmVzaW9sb2d5T3ZlcnZpZXcnIH0sXHJcblxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIC8vICNWaWFcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPlZpYTwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFPdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREMzcgPHZpYT5WaWEgU2VxdWVuY2U8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhU2VxdWVuY2UvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDM3IDx2aWE+VmlhIERpZmZpY3VsdHk8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhRGlmZmljdWx0eScgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VmlhR2VvbWV0cnk8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VmlhUG9pbnQ8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhUG9pbnQvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5WaWV3cG9pbnQ8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhUG9pbnQvVmlld3BvaW50JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+Q2VudGVyUG9pbnQ8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhUG9pbnQvQ2VudGVyUG9pbnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5JbmZsZWN0aW9uUG9pbnQ8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhUG9pbnQvSW5mbGVjdGlvblBvaW50JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+TWlkcG9pbnQ8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhUG9pbnQvTWlkUG9pbnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5SZWZlcmVuY2VQb2ludDwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFQb2ludC9SZWZlcmVuY2VQb2ludCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPlJlZmxlY3Rpb25Qb2ludDwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFQb2ludC9SZWZsZWN0aW9uUG9pbnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5UYXJnZXRQb2ludDwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFQb2ludC9UYXJnZXRQb2ludCcgfSxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VmlhQ3VydmU8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhQ3VydmUvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5Bcm91bmRDdXJ2ZTwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFDdXJ2ZS9DaXJjdW12ZW50Q3VydmUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5HaG9zdExpbmU8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhQ3VydmUvR2hvc3RMaW5lJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+UGFyYWxsZWxDdXJ2ZTwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFDdXJ2ZS9QYXJhbGxlbEN1cnZlJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+UGVyaW1ldGVyQ3VydmU8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhQ3VydmUvUGVyaW1ldGVyQ3VydmUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5TcGlyYWxDdXJ2ZTwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFDdXJ2ZS9TcGlyYWxDdXJ2ZScgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPlR1cm5Bcm91bmRDdXJ2ZTwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFDdXJ2ZS9UdXJuQXJvdW5kQ3VydmUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5aaWd6YWdDdXJ2ZTwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFDdXJ2ZS9aaWd6YWdDdXJ2ZScgfSxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VmlhU3BhY2U8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhU3BhY2UvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5NYXhpbXVtU3BhY2luZzwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFTcGFjZS9NYXhpbXVtU3BhY2luZycgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPk1pbmltdW1TcGFjaW5nPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYUdlb21ldHJ5L1ZpYVNwYWNlL01pbmltdW1TcGFjaW5nJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+T3B0aW1hbFNwYWNpbmc8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhR2VvbWV0cnkvVmlhU3BhY2UvT3B0aW1hbFNwYWNpbmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5FbGFzdGljU3BhY2luZzwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFHZW9tZXRyeS9WaWFTcGFjZS9FbGFzdGljU3BhY2luZycgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPlNwYWNpbmdPblNsb3BlPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYUdlb21ldHJ5L1ZpYVNwYWNlL1NwYWNpbmdPblNsb3BlJyB9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5WaWFTdXJmYWNlPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYUdlb21ldHJ5L1ZpYVN1cmZhY2UvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5WaWFTdXJmYWNlIFRleHR1cmU8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhU3VyZmFjZS9WaWFTdXJmYWNlVGV4dHVyZScgfSxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VmlhIFByb2JsZW08L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhUHJvYmxlbS9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5WaWEgVGhlb3JlbTwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFUaGVvcmVtL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPkNvdmVyIEFsZ29yaXRobXM8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhVGhlb3JlbS9Db3ZlckFsZ29yaXRobS9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPkJvdXN0cm9Db3ZlcjwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFUaGVvcmVtL0NvdmVyQWxnb3JpdGhtL0JvdXN0cm9Db3ZlcicgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPkNpcmNsZUNvdmVyPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYVRoZW9yZW0vQ292ZXJBbGdvcml0aG0vQ2lyY2xlQ292ZXInIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5EaWFtb25kQ292ZXI8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhVGhlb3JlbS9Db3ZlckFsZ29yaXRobS9EaWFtb25kQ292ZXInIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5TcXVhcmVDb3ZlcjwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFUaGVvcmVtL0NvdmVyQWxnb3JpdGhtL1NxdWFyZUNvdmVyJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VHJpYW5nbGVDb3ZlcjwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFUaGVvcmVtL0NvdmVyQWxnb3JpdGhtL1RyaWFuZ2xlQ292ZXInIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5DaHVua0NvdmVyPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYVRoZW9yZW0vQ292ZXJBbGdvcml0aG0vQ2h1bmtDb3ZlcicgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPkJhY2tDb3ZlcjwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFUaGVvcmVtL0NvdmVyQWxnb3JpdGhtL0JhY2tDb3ZlcicgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPk9wZW5FbmRlZENvdmVyPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYVRoZW9yZW0vQ292ZXJBbGdvcml0aG0vT3BlbkVuZGVkQ292ZXInIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5QZXJpbWV0ZXJDb3ZlcjwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFUaGVvcmVtL0NvdmVyQWxnb3JpdGhtL1BlcmltZXRlckNvdmVyJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VHlwZXdyaXRlckNvdmVyPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYVRoZW9yZW0vQ292ZXJBbGdvcml0aG0vVHlwZXdyaXRlckNvdmVyJyB9LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5PYnN0YWNsZUNvdmVyPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYVRoZW9yZW0vT2JzdGFjbGVDb3Zlci9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VGVhbUNvdmVyPC92aWE+JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+VGVhbVBsYW50IE92ZXJ2aWV3PC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL1ZpYVRoZW9yZW0vVGVhbUNvdmVyL092ZXJ2aWV3JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+Qm91bmNpbmdDb3ZlcjwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFUaGVvcmVtL1RlYW1Db3Zlci9Cb3VuY2luZ0NvdmVyJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+Q3Jvc3NpbmdDb3ZlcjwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9WaWFUaGVvcmVtL1RlYW1Db3Zlci9Dcm9zc2luZ0NvdmVyJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+Rm9sbG93aW5nQ292ZXI8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvVmlhVGhlb3JlbS9UZWFtQ292ZXIvRm9sbG93aW5nQ292ZXInIH0sXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPkZsYWc8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvRmxhZy9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVERDNCIDx2aWE+Qm91bmRhcnlGbGFnPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL0ZsYWcvQm91bmRhcnlGbGFnJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5GbGFnTG9jYXRpb248L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvRmxhZy9GbGFnTG9jYXRpb24nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPkhpZ2hGbGFnPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL0ZsYWcvSGlnaEZsYWcnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzQiA8dmlhPkxpbmVJbkZsYWc8L3ZpYT4nLCBsaW5rOiAnL3JlZmVyZW5jZS9WaWEvRmxhZy9MaW5lSW5GbGFnJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5OYXR1cmFsRmxhZzwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9GbGFnL05hdHVyYWxGbGFnJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5UcmVuY2hFeGl0RmxhZzwvdmlhPicsIGxpbms6ICcvcmVmZXJlbmNlL1ZpYS9GbGFnL1RyZW5jaEV4aXRGbGFnJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdUREM0IgPHZpYT5XYXN0ZWRGbGFnPC92aWE+JywgbGluazogJy9yZWZlcmVuY2UvVmlhL0ZsYWcvV2FzdGVkRmxhZycgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgLy8gI05ldXJvXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPk5ldXJvPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9OZXVyb092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REQzNyA8bmV1cm8+TmV1cm8gRGlmZmljdWx0eTwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vTmV1cm9EaWZmaWN1bHR5JyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPkFyb3VzYWw8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0Fyb3VzYWwvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5BdHRlbnRpb248L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0F0dGVudGlvbi9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPkF1ZGlvPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9BdWRpby9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPk11c2ljPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9BdWRpby9NdXNpYy9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+UGxheWxpc3RzPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9BdWRpby9NdXNpYy9PdmVydmlldycgfSxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+QnJhbmNoQnJlYWtTb3VuZDwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vQXVkaW8vQnJhbmNoQnJlYWtTb3VuZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5Mb2dCcmVha1NvdW5kPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9BdWRpby9Mb2dCcmVha1NvdW5kJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPlNsYXNoU291bmQ8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0F1ZGlvL1NsYXNoU291bmQnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+U3BhZGVTb3VuZDwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vQXVkaW8vU3BhZGVTb3VuZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5Tb2lsU291bmQ8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0F1ZGlvL1NvaWxTb3VuZCcgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPkF3YXJlbmVzczwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vQXdhcmVuZXNzL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+Q291bnRpbmc8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0NvdW50aW5nL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+RGVjaXNpb248L25ldXJvPicsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5Hb09yTm9HbzwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vRGVjaXNpb24vR29Pck5vR28nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+TWljcm9zaXRlU2VsZWN0aW9uPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9EZWNpc2lvbi9NaWNyb3NpdGVTZWxlY3Rpb24nIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5FbW90aW9uPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9FbW90aW9uL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPkFuZ2VyPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9FbW90aW9uL0FuZ2VyJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPkRpc2d1c3Q8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0Vtb3Rpb24vRGlzZ3VzdCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5GZWFyPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9FbW90aW9uL0ZlYXInIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+Sm95PC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9FbW90aW9uL0pveScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5TYWRuZXNzPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9FbW90aW9uL1NhZG5lc3MnIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5FbmVyZ3k8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0VuZXJneS9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPkVzdGltYXRpb248L25ldXJvPicsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5BcmVhRXN0aW1hdGlvbjwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vRXN0aW1hdGlvbi9BcmVhRXN0aW1hdGlvbicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5CYWdDb3ZlckVzdGltYXRpb248L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0VzdGltYXRpb24vQmFnQ292ZXJFc3RpbWF0aW9uJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPkRpc3RhbmNlRXN0aW1hdGlvbjwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vRXN0aW1hdGlvbi9EaXN0YW5jZUVzdGltYXRpb24nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+VGltZUVzdGltYXRpb248L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL0VzdGltYXRpb24vVGltZUVzdGltYXRpb24nIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5FdmVudDwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vRXZlbnQvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5Ib21lb3N0YXNpczwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vSG9tZW9zdGFzaXMvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5NZW1vcnk8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL01lbW9yeS9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5Xb3JraW5nTWVtb3J5PC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9NZW1vcnkvV29ya2luZ01lbW9yeScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5TaG9ydFRlcm1NZW1vcnk8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL01lbW9yeS9TaG9ydFRlcm1NZW1vcnknIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+TG9uZ1Rlcm1NZW1vcnk8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL01lbW9yeS9Mb25nVGVybU1lbW9yeScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5OdW1iZXJNZW1vcnk8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL01lbW9yeS9OdW1iZXJNZW1vcnknIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+VmlhTWVtb3J5PC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9NZW1vcnkvVmlhTWVtb3J5JyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+TWluZGZ1bG5lc3M8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL01pbmRmdWxuZXNzL092ZXJ2aWV3JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+TXVzY2xlPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9NdXNjbGUvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPlByb3ByaW9jZXB0aW9uPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9Qcm9wcmlvY2VwdGlvbi9PdmVydmlldycgfSxcclxuICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPlJlc2lsaWVuY2U8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL1Jlc2lsaWVuY2UvT3ZlcnZpZXcnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+U3BhdGlhbENvZ25pdGlvbjwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vU3BhdGlhbENvZ25pdGlvbi9PdmVydmlldycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPlRpbWU8L25ldXJvPicsIGxpbms6ICcvcmVmZXJlbmNlL05ldXJvL1RpbWUvT3ZlcnZpZXcnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+QmFnVXBUaW1lPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9UaW1lL0JhZ1VwVGltZScgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5EYWlseVNjaGVkdWxlPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9UaW1lL0RhaWx5U2NoZWR1bGUnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1RDgzRFx1REM5QyA8bmV1cm8+TW90b1RpbWluZzwvbmV1cm8+JywgbGluazogJy9yZWZlcmVuY2UvTmV1cm8vVGltZS9Nb3RvVGltaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPlBsYW5uaW5nPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9UaW1lL1BsYW5uaW5nJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdUQ4M0RcdURDOUMgPG5ldXJvPlRpbWVyPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9UaW1lL1RpbWVyJyB9LFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHVEODNEXHVEQzlDIDxuZXVybz5UaGVybW9jZXB0aW9uPC9uZXVybz4nLCBsaW5rOiAnL3JlZmVyZW5jZS9OZXVyby9UaGVybW9jZXB0aW9uJyB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgeyB0ZXh0OiAnXHVEODNEXHVEQ0MzIEdsb3NzYXJ5JywgbGluazogJy9yZWZlcmVuY2UvZ2xvc3NhcnkvR2xvc3NhcnknIH0sXHJcbiAgICB7IHRleHQ6ICdcdUQ4M0RcdURDRjcgTWVkaWEgRGF0YWJhc2UnLCBsaW5rOiAnL3JlZmVyZW5jZS9tZWRpYS9PdmVydmlldycgfVxyXG4gIF1cclxufVxyXG5cclxuLy8gI1R1dG9yaWFsXHJcbmZ1bmN0aW9uIHNpZGViYXJUdXRvcmlhbCgpIHtcclxuICByZXR1cm4gW1xyXG4gICAgeyB0ZXh0OiAnVHV0b3JpYWwgT3ZlcnZpZXcnLCBsaW5rOiAnL3R1dG9yaWFsL092ZXJ2aWV3JyB9LFxyXG4gICAgeyB0ZXh0OiAnVmlkZW8gVHV0b3JpYWxzIE92ZXJ2aWV3JywgbGluazogJy90dXRvcmlhbC9WaWRlb1R1dG9yaWFsc092ZXJ2aWV3JyB9LFxyXG4gICAgeyB0ZXh0OiAnTGFiZWxsaW5nJywgbGluazogJy90dXRvcmlhbC9UZXN0X0xhYmVsRGlhZ3JhbScgfSxcclxuICAgIHsgdGV4dDogJ01hdGNoaW5nJywgbGluazogJy90dXRvcmlhbC9UZXN0X01hdGNoaW5nJyB9LFxyXG4gICAgeyB0ZXh0OiAnTXVsdGlwbGVDaG9pY2UnLCBsaW5rOiAnL3R1dG9yaWFsL1Rlc3RfTXVsdGlwbGVDaG9pY2UnIH0sXHJcbiAgICB7IHRleHQ6ICdTZXF1ZW5jaW5nJywgbGluazogJy90dXRvcmlhbC9UZXN0X1NlcXVlbmNpbmcnIH0sXHJcbiAgICB7IHRleHQ6ICdHbyB0byBSZWZlcmVuY2UnLCBsaW5rOiAnL3JlZmVyZW5jZS9PdmVydmlldycgfSxcclxuICBdXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWRlYmFyRXhhbXBsZXMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgdGV4dDogJ0V4YW1wbGVzIE92ZXJ2aWV3JywgbGluazogJy9leGFtcGxlcy9PdmVydmlldycgfSxcclxuICAgIHsgdGV4dDogJ0dvIHRvIFR1dG9yaWFsJywgbGluazogJy90dXRvcmlhbC9UdXRvcmlhbE92ZXJ2aWV3JyB9LFxyXG4gIF1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1gsU0FBUyxvQkFBb0I7QUFFNVosSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04saUJBQWlCO0FBQUEsRUFDakIsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxvQkFBb0IsT0FBTyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFBQSxJQUNyRixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxhQUFhLE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBQUEsSUFDdkYsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sYUFBYSxPQUFPLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUFBLElBQ3ZGLENBQUMsUUFBUSxFQUFFLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQUEsRUFBRTtBQUFBLEVBQzNELGFBQWE7QUFBQSxJQUVYLFNBQVMsQ0FBQyxHQUFHLENBQUM7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxXQUFXLE1BQU0sb0NBQW9DO0FBQUEsTUFDN0QsRUFBRSxNQUFNLFVBQVUsTUFBTSx1Q0FBdUM7QUFBQSxJQUNqRTtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04s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
