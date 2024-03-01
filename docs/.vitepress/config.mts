import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Plantbeta',
  description: '',
  lastUpdated: true,
  base: '/plantbeta/',
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/site.webmanifest" }],],
  themeConfig: {

    outline: [2, 4],
    logo: 'android-chrome-512x512.png',
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@Klimbeta' },
      { icon: 'instagram', link: 'https://www.instagram.com/the_plantbeta/' },
      { icon: 'github', link: 'https://github.com/klimbeta/plantbeta' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright Plantbeta © 2023-present'
    },
    search: {
      provider: 'local'
    },

    siteTitle: 'Plantbeta',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/tutorial/': sidebarTutorial(),
      '/reference/': sidebarReference(),
      '/dev/': sidebarDevelopment(),
    }
  }
})
// #Dev
function sidebarDevelopment() {
  return [
    { text: '<dev>Dev Overview</dev>', link: '/dev/DevOverview' },
    { text: '<dev>Contact</dev>', link: '/dev/Contact' },
    { text: '<dev>Academia</dev>', link: '/dev/Academia' },
    { text: '<dev>Art</dev>', link: '/dev/art/Overview' },
    { text: '<dev>Data Visualization</dev>', link: '/dev/ElementsGraph' },
    { text: '<dev>Contribute</dev>', link: '/dev/Contribute' },
    { text: '<dev>Downloads</dev>', link: '/dev/Downloads' },
    { text: '<dev>DX</dev>', link: '/dev/DX' },
    {
      text: '<dev>Graphics</dev>', collapsed: true, items: [
        { text: '<dev>Overview</dev>', link: '/dev/Graphics/Overview' },
        { text: '<beta>Beta Graphics</beta>', link: '/dev/Graphics/BetaGraphic' },
        { text: '<eco>Eco Graphics</eco>', link: '/dev/Graphics/EcoGraphic' },
        { text: '<moto>Moto Graphics</moto>', link: '/dev/Graphics/MotoGraphic' },
        { text: '<neuro>Neuro Graphics</neuro>', link: '/dev/Graphics/NeuroGraphic' },
        { text: '<via>Via Graphics</via>', link: '/dev/Graphics/ViaGraphic' },
        { text: 'UX Graphics', link: '/dev/Graphics/UXGraphic' },
        { text: '<dev>DX Graphics</dev>', link: '/dev/Graphics/DXGraphic' },
      ]
    },
    { text: '<dev>Offline</dev>', link: '/dev/Offline' },
    { text: '<dev>Open Source</dev>', link: '/dev/OpenSource' },
    { text: '<dev>PaperPhoto</dev>', link: '/dev/PaperPhoto' },
    { text: '<dev>Pylanter</dev>', link: '/dev/Pylanter' },
    { text: '<dev>Research Questions</dev>', link: '/dev/ResearchQuestions' },
    { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
    { text: '<dev>Sequence</dev>', link: '/dev/Sequence' },
    { text: '<dev>Simulation</dev>', link: '/dev/Simulation' },
    { text: '<dev>SocialMedia</dev>', link: '/dev/SocialMedia' },
    { text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide' },
    { text: '<dev>Tagging</dev>', link: '/dev/Tagging' },
    { text: '<dev>Tools</dev>', link: '/dev/Tools' },
    { text: '<dev>UX</dev>', link: '/dev/UX' },
    { text: '<dev>AfternoonTask</dev>', link: '/dev/AfternoonTask' },
  ]
}

// #Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/What/WhatPlantbeta',
      activeMatch: '/guide/'
    },
    {
      text: 'Examples',
      link: '/examples/Overview',
      activeMatch: '/examples/'
    },
    {
      text: 'Tutorial',
      link: '/tutorial/TutorialOverview',
      activeMatch: '/tutorial/'
    },
    {
      text: 'Reference',
      link: '/reference/RefOverview',
      activeMatch: '/reference/'
    },
    {
      text: '🛠',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    }
  ]
}

//#Guide
function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Tree Planting?', link: '/guide/What/WhatTreePlanting' },
        { text: 'What is Plantbeta?', link: '/guide/What/WhatPlantbeta' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: '🔥🌲🔥 <eco>To Replant Burnt Land</eco>', link: '/guide/Why/Wildfire' },
        { text: '🟠 <moto>To Reduce Injury</moto>', link: '/guide/Why/Injury' },
        { text: '🔻 <via>To Increase Productivity</via>', link: '/guide/Why/Productivity' },
        { text: '🔷 <beta>To Improve Communication</beta>', link: '/guide/Why/Communication' },
        { text: '💜 <neuro>To Steepen Learning Curve</neuro>', link: '/guide/Why/LearningCurve' },
        { text: '💲 To Increase Profit', link: '/guide/Why/Company' }
      ]
    },
    {
      text: 'Planter Guide', collapsed: false, items: [
        { text: 'Potential Planter', link: '/guide/Who/PotentialPlanter' },
        { text: 'Novice Planter', link: '/guide/Who/NovicePlanter' },
        { text: 'Experienced Planter', link: '/guide/Who/ExperiencedPlanter' },
        { text: 'Planter Supervisor', link: '/guide/Who/PlanterSupervisor' },
        { text: 'Planter Instructor', link: '/guide/Who/PlanterInstructor' }
      ]
    },
    {
      text: 'Gear Guide', collapsed: false, items: [
        { text: 'What Gear to bring?', link: '/guide/What/WhatGear' },
        { text: 'Gear List', link: '/guide/What/GearList' }
      ]
    },
    { text: 'Go to Reference', link: '/reference/Overview' },
  ]
}
// 
function sidebarReference() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference/RefOverview' },
    // #Beta
    {
      text: '🔷 <beta>Beta</beta>', collapsed: true, items: [
        { text: '🔷 <beta>What is Beta?</beta>', link: '/reference/Beta/WhatBeta' },
        { text: '🔷 <beta>BetaLingo</beta>', link: '/reference/Beta/BetaLingo/Overview' },
        { text: '🔷 <beta>BetaAction</beta>', link: '/reference/Beta/BetaAction' },
        { text: '🔷 <beta>BetaDiagram</beta>', link: '/reference/Beta/BetaDiagram' },
        {
          text: '🔷 <beta>BetaCode</beta>', collapsed: true, items: [
            { text: '🔷 <beta>Overview</beta>', link: '/reference/Beta/BetaCode/Overview' },
          ]
        },
        {
          text: '🔷 <beta>BetaScore</beta>', collapsed: true, items: [
            { text: '🔷 <beta>Overview</beta>', link: '/reference/Beta/BetaScore/Overview' },
            { text: '🔷 <beta>BetaExecution</beta>', link: '/reference/Beta/BetaScore/BetaExecution' },
            {
              text: '🔷 <beta>BetaDifficulty</beta>', collapsed: true, items: [
                { text: '🔷 <beta>Overview</beta>', link: '/reference/Beta/BetaScore/BetaDifficulty/Overview' },
                { text: '🔷 <beta>BetaComplexity</beta>', link: '/reference/Beta/BetaScore/BetaDifficulty/BetaComplexity' },
                { text: '🔷 <beta>BetaRisk</beta>', link: '/reference/Beta/BetaScore/BetaDifficulty/BetaRisk' },
                { text: '🔷 <beta>BetaIntensity</beta>', link: '/reference/Beta/BetaScore/BetaDifficulty/BetaIntensity' }
              ]
            }
          ]
        },
      ]
    },
    // #Eco
    {
      text: '🟩 <eco>Eco</eco>', collapsed: true, items: [
        { text: '🟩 <eco>Eco Overview</eco>', link: '/reference/Eco/EcoOverview' },
        { text: '🔷 <eco>Eco Phrase</eco>', link: '/reference/Eco/EcoPhrase/Overview' },
        { text: '🔷 <eco>Eco Difficulty</eco>', link: '/reference/Eco/EcoDifficulty' },
        {
          text: '🟩 <eco>Animals</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Animals Overview</eco>', link: '/reference/Eco/Animals/Overview' },

          ]
        },
        {
          text: '🟩 <eco>Area</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Area Overview</eco>', link: '/reference/Eco/Area/Overview' },
            { text: '🟩 <eco>PocketArea</eco>', link: '/reference/Eco/Area/PocketArea' },
            { text: '🟩 <eco>RiparianArea</eco>', link: '/reference/Eco/Area/RiparianArea' },
            { text: '🟩 <eco>RockCapArea</eco>', link: '/reference/Eco/Area/RockCapArea' },
            { text: '🟩 <eco>SlashPileArea</eco>', link: '/reference/Eco/Area/SlashPileArea' },
          ]
        },
        {
          text: '🟩 <eco>Atmosphere</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Overview</eco>', link: '/reference/Eco/Atmosphere/Overview' },
            { text: '🟩 <eco>AirTemperature</eco>', link: '/reference/Eco/Atmosphere/AirTemperature' },
            { text: '🟩 <eco>Humidity</eco>', link: '/reference/Eco/Atmosphere/Humidity' },
            { text: '🟩 <eco>Precipitation</eco>', link: '/reference/Eco/Atmosphere/Precipitation' },
            { text: '🟩 <eco>Wind</eco>', link: '/reference/Eco/Atmosphere/Wind' },
          ]
        },
        {
          text: '🟩 <eco>Block</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Block Overview</eco>', link: '/reference/Eco/Block/Overview' },
            { text: '🟩 <eco>CoverBlock</eco>', link: '/reference/Eco/Block/CoverBlock' },
            { text: '🟩 <eco>Road</eco>', link: '/reference/Eco/Block/Road' },
          ]
        },
        {
          text: '🟩 <eco>Density</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Density Overview</eco>', link: '/reference/Eco/Density/Overview' },
            { text: '🟩 <eco>Plot</eco>', link: '/reference/Eco/Density/Plot' },

          ]
        },
        {
          text: '🟩 <eco>LandSpeed</eco>', collapsed: true, items: [
            { text: '🟩 <eco>LandSpeed Overview</eco>', link: '/reference/Eco/LandSpeed/Overview' },
            { text: '🟩 <eco>FastLand</eco>', link: '/reference/Eco/LandSpeed/FastLand' },
            { text: '🟩 <eco>SlowLand</eco>', link: '/reference/Eco/LandSpeed/SlowLand' },
          ]
        },
        {
          text: '🟩 <eco>Obstacle</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Obstacle Overview</eco>', link: '/reference/Eco/Obstacle/Overview' },
            { text: '🟩 <eco>HoleObstacle</eco>', link: '/reference/Eco/Obstacle/HoleObstacle' },
            { text: '🟩 <eco>LogObstacle</eco>', link: '/reference/Eco/Obstacle/LogObstacle' },
            { text: '🟩 <eco>MicrositeObstacle</eco>', link: '/reference/Eco/Obstacle/MicrositeObstacle' },
            { text: '🟩 <eco>RockObstacle</eco>', link: '/reference/Eco/Obstacle/RockObstacle' },
            { text: '🟩 <eco>StumpObstacle</eco>', link: '/reference/Eco/Obstacle/StumpObstacle' },
          ]
        },
        {
          text: '🟩 <eco>Piece</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Piece Overview</eco>', link: '/reference/Eco/Piece/Overview' },
            { text: '🟩 <eco>PieceTopography</eco>', link: '/reference/Eco/Piece/PieceTopography' },
          ]
        },
        {
          text: '🟩 <eco>Prep</eco>', collapsed: true, items: [
            { text: '🟩 <eco>PrepLand Overview</eco>', link: '/reference/Eco/Prep/Overview' },
            { text: '🟩 <eco>MoundLand</eco>', link: '/reference/Eco/Prep/MoundLand' },
            { text: '🟩 <eco>TrenchLand</eco>', link: '/reference/Eco/Prep/TrenchLand' },
          ]
        },
        {
          text: '🟩 <eco>Raw</eco>', collapsed: true, items: [
            { text: '🟩 <eco>RawLand Overview</eco>', link: '/reference/Eco/Raw/Overview' },
            { text: '🟩 <eco>BurnPit</eco>', link: '/reference/Eco/Raw/BurnPit' },
            { text: '🟩 <eco>BurntLand</eco>', link: '/reference/Eco/Raw/BurntLand' },

          ]
        },
        {
          text: '🟩 <eco>Slash</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Slash Overview</eco>', link: '/reference/Eco/Slash/Overview' },
            { text: '🟩 <eco>BurnPileSlash</eco>', link: '/reference/Eco/Slash/BurnPileSlash' },
            { text: '🟩 <eco>HighSlash</eco>', link: '/reference/Eco/Slash/HighSlash' },
            { text: '🟩 <eco>LowSlash</eco>', link: '/reference/Eco/Slash/LowSlash' },
            { text: '🟩 <eco>WetSlash</eco>', link: '/reference/Eco/Slash/WetSlash' },
          ]
        },
        {
          text: '🟩 <eco>Soil</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Soil Overview</eco>', link: '/reference/Eco/Soil/Overview' },
            { text: '🟩 <eco>ClaySoil</eco>', link: '/reference/Eco/Soil/ClaySoil' },
            { text: '🟩 <eco>DrySoil</eco>', link: '/reference/Eco/Soil/DrySoil' },
            { text: '🟩 <eco>GravelSoil</eco>', link: '/reference/Eco/Soil/GravelSoil' },
            { text: '🟩 <eco>MineralSoil</eco>', link: '/reference/Eco/Soil/MineralSoil' },
            { text: '🟩 <eco>RedRot</eco>', link: '/reference/Eco/Soil/RedRot' },
            { text: '🟩 <eco>SandSoil</eco>', link: '/reference/Eco/Soil/SandSoil' },
            { text: '🟩 <eco>WetSoil</eco>', link: '/reference/Eco/Soil/WetSoil' },
          ]
        },
        {
          text: '🟩 <eco>Sun</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Overview</eco>', link: '/reference/Eco/Sun/Overview' },
          ]
        },
      ]
    },
    // #Moto
    {
      text: '🟠 <moto>Moto</moto>', collapsed: true, items: [
        { text: '🟠 <moto>Moto Overview</moto>', link: '/reference/Moto/MotoOverview' },
        { text: '🟠 <moto>Phrase</moto>', link: '/reference/Moto/Phrase/Overview' },
        { text: '🟠 <moto>Moto Difficulty</moto>', link: '/reference/Moto/MotoDifficulty' },
        {
          text: '🟠 <moto>MotoGeometry</moto>', collapsed: true, items: [
            { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/MotoGeometry/Overview' },
            { text: '🟠 <moto>MotoPoint</moto>', link: '/reference/Moto/MotoGeometry/MotoPoint' },
            { text: '🟠 <moto>MotoCurve</moto>', link: '/reference/Moto/MotoGeometry/MotoCurve' },
            { text: '🟠 <moto>MotoSpace</moto>', link: '/reference/Moto/MotoGeometry/MotoSpace' },
            { text: '🟠 <moto>MotoSurface</moto>', link: '/reference/Moto/MotoGeometry/MotoSurface' },
          ]
        },
        {
          text: '🟠 <moto>ArmMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>ArmMoto Overview</moto>', link: '/reference/Moto/ArmMoto/Overview' },
            { text: '🟠 <moto>Arm Phrase</moto>', link: '/reference/Moto/ArmMoto/Phrase/Overview' },
            { text: '🟠 <moto>ArmBlock</moto>', link: '/reference/Moto/ArmMoto/ArmBlock' },
            { text: '🟠 <moto>ArmProp</moto>', link: '/reference/Moto/ArmMoto/ArmProp' },
            { text: '🟠 <moto>ArmSwing</moto>', link: '/reference/Moto/ArmMoto/ArmSwing' },
            { text: '🟠 <moto>ArmWalk</moto>', link: '/reference/Moto/ArmMoto/ArmWalk' },
            { text: '🟠 <moto>ArmFlag</moto>', link: '/reference/Moto/ArmMoto/ArmFlag' },
          ]
        },
        {
          text: '🟠 <moto>BodyMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>BodyMoto Overview</moto>', link: '/reference/Moto/BodyMoto/Overview' },
            { text: '🟠 <moto>Body Phrase</moto>', link: '/reference/Moto/BodyMoto/Phrase/Overview' },
            { text: '🟠 <moto>BodyAbsorb</moto>', link: '/reference/Moto/BodyMoto/BodyAbsorb' },
            { text: '🟠 <moto>BodyBend</moto>', link: '/reference/Moto/BodyMoto/BodyBend' },
            { text: '🟠 <moto>BodyLean</moto>', link: '/reference/Moto/BodyMoto/BodyLean' },
            { text: '🟠 <moto>BodyRevolve</moto>', link: '/reference/Moto/BodyMoto/BodyRevolve' },
            { text: '🟠 <moto>BodyRotate</moto>', link: '/reference/Moto/BodyMoto/BodyRotate' },
            { text: '🟠 <moto>BodySlot</moto>', link: '/reference/Moto/BodyMoto/BodySlot' },
            { text: '🟠 <moto>Fall</moto>', link: '/reference/Moto/BodyMoto/Fall' },
          ]
        },
        {
          text: '🟠 <moto>CacheMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>CacheMoto Overview</moto>', link: '/reference/Moto/CacheMoto/Overview' },
            { text: '🟠 <moto>Cache Phrase</moto>', link: '/reference/Moto/CacheMoto/Phrase/Overview' },
            { text: '🟠 <moto>Eating</moto>', link: '/reference/Moto/CacheMoto/Eating' },
            { text: '🟠 <moto>TarpOff</moto>', link: '/reference/Moto/CacheMoto/TarpOff' },
            { text: '🟠 <moto>TarpOn</moto>', link: '/reference/Moto/CacheMoto/TarpOn' },
          ]
        },
        {
          text: '🟠 <moto>ClothingMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>ClothingMoto Overview</moto>', link: '/reference/Moto/ClothingMoto/Overview' },
            { text: '🟠 <moto>Clothing Phrase</moto>', link: '/reference/Moto/ClothingMoto/Phrase/Overview' },
            { text: '🟠 <moto>Button</moto>', link: '/reference/Moto/ClothingMoto/Button' },
            { text: '🟠 <moto>ClothingLayer</moto>', link: '/reference/Moto/ClothingMoto/ClothingLayer' },
            { text: '🟠 <moto>RemotoMud</moto>', link: '/reference/Moto/ClothingMoto/RemotoMud' },
            { text: '🟠 <moto>ZipperMoto</moto>', link: '/reference/Moto/ClothingMoto/ZipperMoto' },

          ]
        },
        {
          text: '🟠 <moto>FootMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>FootMoto Overview</moto>', link: '/reference/Moto/FootMoto/Overview' },
            { text: '🟠 <moto>Foot Phrase</moto>', link: '/reference/Moto/FootMoto/Phrase/Overview' },
            { text: '🟠 <moto>FootArchSmear</moto>', link: '/reference/Moto/FootMoto/FootArchSmear' },
            { text: '🟠 <moto>FootClose</moto>', link: '/reference/Moto/FootMoto/FootClose' },
            { text: '🟠 <moto>FootDig</moto>', link: '/reference/Moto/FootMoto/FootDig' },
            { text: '🟠 <moto>FootDorsiflexion</moto>', link: '/reference/Moto/FootMoto/FootDorsiflexion' },
            { text: '🟠 <moto>FootDrag</moto>', link: '/reference/Moto/FootMoto/FootDrag' },
            { text: '🟠 <moto>FootEversion</moto>', link: '/reference/Moto/FootMoto/FootEversion' },
            { text: '🟠 <moto>FootInversion</moto>', link: '/reference/Moto/FootMoto/FootInversion' },
            { text: '🟠 <moto>FootScreef</moto>', link: '/reference/Moto/FootMoto/FootScreef' },
            { text: '🟠 <moto>PlantarFlexion</moto>', link: '/reference/Moto/FootMoto/PlantarFlexion' },
          ]
        },
        {
          text: '🟠 <moto>HandMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>HandMoto Overview</moto>', link: '/reference/Moto/HandMoto/Overview' },
            { text: '🟠 <moto>Hand Phrase</moto>', link: '/reference/Moto/HandMoto/Phrase/Overview' },
            { text: '🟠 <moto>BagGrip</moto>', link: '/reference/Moto/HandMoto/BagGrip' },
            { text: '🟠 <moto>BoxGrip</moto>', link: '/reference/Moto/HandMoto/BoxGrip' },
            { text: '🟠 <moto>BranchGrip</moto>', link: '/reference/Moto/HandMoto/BranchGrip' },
            { text: '🟠 <moto>BranchSnapGrip</moto>', link: '/reference/Moto/HandMoto/BranchSnapGrip' },
            { text: '🟠 <moto>HandClose</moto>', link: '/reference/Moto/HandMoto/HandClose' },
            { text: '🟠 <moto>HandPoke</moto>', link: '/reference/Moto/HandMoto/HandPoke' },
            { text: '🟠 <moto>HandPut</moto>', link: '/reference/Moto/HandMoto/HandPut' },
            { text: '🟠 <moto>HandScreef</moto>', link: '/reference/Moto/HandMoto/HandScreef' },
            { text: '🟠 <moto>SpadeHandleGrip</moto>', link: '/reference/Moto/HandMoto/SpadeHandleGrip' },
            { text: '🟠 <moto>SpadeShaftGrip</moto>', link: '/reference/Moto/HandMoto/SpadeShaftGrip' },
            { text: '🟠 <moto>TreeGrip</moto>', link: '/reference/Moto/HandMoto/Overview' },
            { text: '🟠 <moto>TreeTestGrip</moto>', link: '/reference/Moto/HandMoto/TreeTestGrip' },
          ]
        },
        {
          text: '🟠 <moto>HeadMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>HeadMoto Overview</moto>', link: '/reference/Moto/HeadMoto/Overview' },
            { text: '🟠 <moto>Head Phrase</moto>', link: '/reference/Moto/HeadMoto/Phrase/Overview' },
            { text: '🟠 <moto>FocusLook</moto>', link: '/reference/Moto/HeadMoto/FocusLook' },
            { text: '🟠 <moto>HeadProtraction</moto>', link: '/reference/Moto/HeadMoto/HeadProtraction' },
            { text: '🟠 <moto>HeadRetraction</moto>', link: '/reference/Moto/HeadMoto/HeadRetraction' },
            { text: '🟠 <moto>HeadTiltIntoWind</moto>', link: '/reference/Moto/HeadMoto/HeadTiltIntoWind' },
            { text: '🟠 <moto>Hearing</moto>', link: '/reference/Moto/HeadMoto/Hearing' },
            { text: '🟠 <moto>LookAway</moto>', link: '/reference/Moto/HeadMoto/LookAway' },
            { text: '🟠 <moto>NeckExtension</moto>', link: '/reference/Moto/HeadMoto/NeckExtension' },
          ]
        },
        {
          text: '🟠 <moto>HoleMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>HoleMoto Overview</moto>', link: '/reference/Moto/HoleMoto/Overview' },
            { text: '🟠 <moto>Hole Phrase</moto>', link: '/reference/Moto/HoleMoto/Phrase/Overview' },
            { text: '🟠 <moto>HoleClose</moto>', link: '/reference/Moto/HoleMoto/HoleClose' },
            { text: '🟠 <moto>HoleExpand</moto>', link: '/reference/Moto/HoleMoto/HoleExpand' },
            { text: '🟠 <moto>HoleOpen</moto>', link: '/reference/Moto/HoleMoto/HoleOpen' },
          ]
        },
        {
          text: '🟠 <moto>LegMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>LegMoto Overview</moto>', link: '/reference/Moto/LegMoto/Overview' },
            { text: '🟠 <moto>Leg Phrase</moto>', link: '/reference/Moto/LegMoto/Phrase/Overview' },
            { text: '🟠 <moto>Crouch</moto>', link: '/reference/Moto/LegMoto/Overview' },
            { text: '🟠 <moto>Jump</moto>', link: '/reference/Moto/LegMoto/Jump' },
            { text: '🟠 <moto>Kneel</moto>', link: '/reference/Moto/LegMoto/Kneel' },
            { text: '🟠 <moto>LegAbduction</moto>', link: '/reference/Moto/LegMoto/LegAbduction' },
            { text: '🟠 <moto>LegAbsorb</moto>', link: '/reference/Moto/LegMoto/LegAbsorb' },
            { text: '🟠 <moto>LegAdduction</moto>', link: '/reference/Moto/LegMoto/LegAdduction' },
            { text: '🟠 <moto>LegFlag</moto>', link: '/reference/Moto/LegMoto/LegFlag' },
            { text: '🟠 <moto>LegFlexion</moto>', link: '/reference/Moto/LegMoto/LegFlexion' },
            { text: '🟠 <moto>LegProp</moto>', link: '/reference/Moto/LegMoto/LegProp' },
            { text: '🟠 <moto>LegSidebagLift</moto>', link: '/reference/Moto/LegMoto/LegSidebagLift' },
            { text: '🟠 <moto>LegSwing</moto>', link: '/reference/Moto/LegMoto/LegSwing' },
            { text: '🟠 <moto>RunningStart</moto>', link: '/reference/Moto/LegMoto/RunningStart' },
            { text: '🟠 <moto>Step</moto>', link: '/reference/Moto/LegMoto/Step' },
            { text: '🟠 <moto>Stomp</moto>', link: '/reference/Moto/LegMoto/Stomp' },
          ]
        },
        {
          text: '🟠 <moto>VegeMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>VegeMoto Overview</moto>', link: '/reference/Moto/VegeMoto/Overview' },
            { text: '🟠 <moto>BranchArmDeflection</moto>', link: '/reference/Moto/VegeMoto/BranchArmDeflection' },
            { text: '🟠 <moto>BranchDeflection</moto>', link: '/reference/Moto/VegeMoto/BranchDeflection' },
            { text: '🟠 <moto>BranchMoto</moto>', link: '/reference/Moto/VegeMoto/BranchMoto' },
            { text: '🟠 <moto>BranchWhip</moto>', link: '/reference/Moto/VegeMoto/BranchWhip' },
            { text: '🟠 <moto>Bush</moto>', link: '/reference/Moto/VegeMoto/Bush' },
            { text: '🟠 <moto>Log</moto>', link: '/reference/Moto/VegeMoto/Log' },
            { text: '🟠 <moto>SlashPile</moto>', link: '/reference/Moto/VegeMoto/SlashPile' },
            { text: '🟠 <moto>Stump</moto>', link: '/reference/Moto/VegeMoto/Stump' },
          ]
        },
        {
          text: '🟠 <moto>Screef</moto>', collapsed: true, items: [
            { text: '🟠 <moto>Screefing Overview</moto>', link: '/reference/Moto/Screef/Overview' },
            { text: '🟠 <moto>BootScreef</moto>', link: '/reference/Moto/ToolMoto/Boot/BootScreef' },
            { text: '🟠 <moto>HandScreef</moto>', link: '/reference/Moto/HandMoto/HandScreef' },
            { text: '🟠 <moto>SpadeScreef</moto>', link: '/reference/Moto/ToolMoto/Spade/SpadeScreef' },
          ]
        },
        {
          text: '🟠 <moto>ToolMoto</moto>', collapsed: true, items: [
            { text: '🟠 <moto>Tool Overview</moto>', link: '/reference/Moto/ToolMoto/Overview' },
            {
              text: '🟠 <moto>Bag</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Bag/Overview' },
                { text: '🟠 <moto>BagGrip</moto>', link: '/reference/Moto/ToolMoto/Bag/BagGrip' },
                { text: '🔷 <moto>Bag Phrase</moto>', link: '/reference/Moto/ToolMoto/Bag/Phrase/Overview' },
                { text: '🟠 <moto>BagAdjustment</moto>', link: '/reference/Moto/ToolMoto/Bag/BagAdjustment' },
                { text: '🟠 <moto>BagDeadlift</moto>', link: '/reference/Moto/ToolMoto/Bag/BagDeadlift' },
                { text: '🟠 <moto>BagEmpty</moto>', link: '/reference/Moto/ToolMoto/Bag/BagEmpty' },
                { text: '🟠 <moto>BaggingUp</moto>', link: '/reference/Moto/ToolMoto/Bag/BaggingUp' },
                { text: '🟠 <moto>BagOff</moto>', link: '/reference/Moto/ToolMoto/Bag/BagOff' },
                { text: '🟠 <moto>BagOn</moto>', link: '/reference/Moto/ToolMoto/Bag/BagOn' },
                { text: '🟠 <moto>BagSlide</moto>', link: '/reference/Moto/ToolMoto/Bag/BagSlide' },
              ]
            },
            {
              text: '🟠 <moto>Boot</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Boot/Overview' },
                { text: '🔷 <moto>Boot Phrase</moto>', link: '/reference/Moto/ToolMoto/Boot/Phrase/Overview' },
                { text: '🟠 <moto>BootGrip</moto>', link: '/reference/Moto/ToolMoto/Boot/BootGrip' },
                { text: '🟠 <moto>BootScreef</moto>', link: '/reference/Moto/ToolMoto/Boot/BootScreef' },
                { text: '🟠 <moto>LaceKnot</moto>', link: '/reference/Moto/ToolMoto/Boot/LaceKnot' },
              ]
            },
            {
              text: '🟠 <moto>Box</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Box/Overview' },
                { text: '🔷 <moto>Box Phrase</moto>', link: '/reference/Moto/ToolMoto/Box/Phrase/Overview' },
                { text: '🟠 <moto>BoxGrip</moto>', link: '/reference/Moto/ToolMoto/Box/BoxGrip' },
              ]
            },
            {
              text: '🟠 <moto>Bundle</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Bundle/Overview' },
                { text: '🔷 <moto>Bundle Phrase</moto>', link: '/reference/Moto/ToolMoto/Bundle/Phrase/Overview' },
                { text: '🟠 <moto>BundleGrip</moto>', link: '/reference/Moto/ToolMoto/Bundle/BundleGrip' },
                { text: '🟠 <moto>BundlePeel</moto>', link: '/reference/Moto/ToolMoto/Bundle/BundlePeel' },
              ]
            },
            {
              text: '🟠 <moto>Carabiner</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Carabiner/Overview' },
              ]
            },
            {
              text: '🟠 <moto>Flag</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Flag/Overview' },
                { text: '🔷 <moto>Flag Phrase</moto>', link: '/reference/Moto/ToolMoto/Flag/Phrase/Overview' },
                { text: '🟠 <moto>FlagGrip</moto>', link: '/reference/Moto/ToolMoto/Flag/FlagGrip' },
                { text: '🟠 <moto>FlagErrorRecovery</moto>', link: '/reference/Moto/ToolMoto/Flag/FlagErrorRecovery' },
                { text: '🟠 <moto>FlagGet</moto>', link: '/reference/Moto/ToolMoto/Flag/FlagLoad' },
                { text: '🟠 <moto>FlagRip</moto>', link: '/reference/Moto/ToolMoto/Flag/FlagRip' },
                { text: '🟠 <moto>FlagRoll</moto>', link: '/reference/Moto/ToolMoto/Flag/FlagRoll' },
                { text: '🟠 <moto>FlagUnload</moto>', link: '/reference/Moto/ToolMoto/Flag/FlagUnoad' },
              ]
            },
            {
              text: '🟠 <moto>Gaiter</moto>', collapsed: true, items: [

                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Gaiter/Overview' },
                { text: '🔷 <moto>Gaiter Phrase</moto>', link: '/reference/Moto/ToolMoto/Gaiter/Phrase/Overview' },
                { text: '🟠 <moto>GaiterGrip</moto>', link: '/reference/Moto/ToolMoto/Gaiter/GaiterGrip' },
                { text: '🟠 <moto>GaiterOn</moto>', link: '/reference/Moto/ToolMoto/Gaiter/GaiterOn' },
                { text: '🟠 <moto>GaiterOff</moto>', link: '/reference/Moto/ToolMoto/Gaiter/GaiterOff' },
              ]
            },
            {
              text: '🟠 <moto>Glove</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Glove/Overview' },
                { text: '🔷 <moto>Glove Phrase</moto>', link: '/reference/Moto/ToolMoto/Glove/Phrase/Overview' },
                { text: '🟠 <moto>GloveGrip</moto>', link: '/reference/Moto/ToolMoto/Glove/GloveGrip' },
              ]
            },
            {
              text: '🟠 <moto>Kit</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Kit/Overview' },
              ]
            },
            {
              text: '🟠 <moto>Rope</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Rope/Overview' },
              ]
            },
            {
              text: '🟠 <moto>Spade</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/ToolMoto/Spade/Overview' },
                { text: '🔷 <moto>Spade Phrase</moto>', link: '/reference/Moto/ToolMoto/Spade/Phrase/Overview' },
                { text: '🟠 <moto>SpadeGrip</moto>', link: '/reference/Moto/ToolMoto/Spade/SpadeGrip' },
                { text: '🟠 <moto>SpadeChop</moto>', link: '/reference/Moto/ToolMoto/Spade/SpadeChop' },
                { text: '🟠 <moto>SpadePogo</moto>', link: '/reference/Moto/ToolMoto/Spade/SpadePogo' },
                { text: '🟠 <moto>SpadeProp</moto>', link: '/reference/Moto/ToolMoto/Spade/SpadeProp' },
                { text: '🟠 <moto>SpadeScreef</moto>', link: '/reference/Moto/ToolMoto/Spade/SpadeScreef' },
                { text: '🟠 <moto>SpadeSwing</moto>', link: '/reference/Moto/ToolMoto/Spade/SpadeSwing' },
                { text: '🟠 <moto>SpadeTest</moto>', link: '/reference/Moto/ToolMoto/Spade/SpadeTest' },
              ]
            }
          ]
        },
        {
          text: '🟠 <moto>Truck</moto>', collapsed: true, items: [
            { text: '🟠 <moto>Overview</moto>', link: '/reference/Moto/TruckMoto/Overview' },
            { text: '🔷 <moto>Truck Phrase</moto>', link: '/reference/Moto/TruckMoto/Phrase/Overview' },
            { text: '🟠 <moto>Sleep</moto>', link: '/reference/Moto/TruckMoto/Sleep' },
            { text: '🟠 <moto>Sit</moto>', link: '/reference/Moto/TruckMoto/Sit' },
          ]
        },
        { text: '🟠 <moto>Kinesiology</moto>', link: '/reference/Moto/Kinesiology/KinesiologyOverview' },

      ],
    },
    // #Via
    {
      text: '🔻 <via>Via</via>', collapsed: true, items: [
        { text: '🔻 <via>Via Overview</via>', link: '/reference/Via/ViaOverview' },
        { text: '🔷 <via>Via Sequence</via>', link: '/reference/Via/ViaSequence/Overview' },
        { text: '🔷 <via>Via Difficulty</via>', link: '/reference/Via/ViaDifficulty' },
        {
          text: '🔻 <via>ViaGeometry</via>', collapsed: true, items: [
            {
              text: '🔻 <via>ViaPoint</via>', collapsed: true, items: [
                { text: '🔻 <via>Overview</via>', link: '/reference/Via/ViaGeometry/ViaPoint/Overview' },
                { text: '🔻 <via>CenterPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/CenterPoint' },
                { text: '🔻 <via>InflectionPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/InflectionPoint' },
                { text: '🔻 <via>Midpoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/MidPoint' },
                { text: '🔻 <via>ReferencePoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/ReferencePoint' },
                { text: '🔻 <via>ReflectionPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
                { text: '🔻 <via>TargetPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔻 <via>ViaCurve</via>', collapsed: true, items: [
                { text: '🔻 <via>ViaCurve Overview</via>', link: '/reference/Via/ViaGeometry/ViaCurve/Overview' },
                { text: '🔻 <via>AroundCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/CircumventCurve' },
                { text: '🔻 <via>GhostLine</via>', link: '/reference/Via/ViaGeometry/ViaCurve/GhostLine' },
                { text: '🔻 <via>ParallelCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/ParallelCurve' },
                { text: '🔻 <via>PerimeterCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/PerimeterCurve' },
                { text: '🔻 <via>SpiralCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/SpiralCurve' },
                { text: '🔻 <via>TurnAroundCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/TurnAroundCurve' },
                { text: '🔻 <via>ZigzagCurve</via>', link: '/reference/Via/ViaGeometry/ViaCurve/ZigzagCurve' },
              ]
            },
            {
              text: '🔻 <via>ViaSpace</via>', collapsed: true, items: [
                { text: '🔻 <via>Spacing Overview</via>', link: '/reference/Via/ViaGeometry/ViaSpace/Overview' },
                { text: '🔻 <via>MaximumSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
                { text: '🔻 <via>MinimumSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
                { text: '🔻 <via>OptimalSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
                { text: '🔻 <via>ElasticSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
                { text: '🔻 <via>SpacingOnSlope</via>', link: '/reference/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔻 <via>ViaSurface</via>', collapsed: true, items: [
                { text: '🔻 <via>Overview</via>', link: '/reference/Via/ViaSurface/Overview' },
                { text: '🔻 <via>ViaSurface Texture</via>', link: '/reference/Via/ViaSurface/ViaSurfaceTexture' },
              ]
            },
          ]
        },
        {
          text: '🔻 <via>Via Problem</via>', collapsed: true, items: [
            { text: '🔻 <via>Overview</via>', link: '/reference/Via/ViaProblem/Overview' },
          ]
        },
        {
          text: '🔻 <via>Via Theorem</via>', collapsed: true, items: [
            { text: '🔻 <via>Overview</via>', link: '/reference/Via/ViaTheorem/Overview' },
            {
              text: '🔻 <via>Cover Algorithms</via>', collapsed: true, items: [
                { text: '🔻 <via>Overview</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/Overview' },
                { text: '🔻 <via>BoustroCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/BoustroCover' },
                { text: '🔻 <via>CircleCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/CircleCover' },
                { text: '🔻 <via>DiamondCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/DiamondCover' },
                { text: '🔻 <via>SquareCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/SquareCover' },
                { text: '🔻 <via>TriangleCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/TriangleCover' },
                { text: '🔻 <via>ChunkCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/ChunkCover' },
                { text: '🔻 <via>BackCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/BackCover' },
                { text: '🔻 <via>OpenEndedCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/OpenEndedCover' },
                { text: '🔻 <via>PerimeterCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/PerimeterCover' },
                { text: '🔻 <via>TypewriterCover</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/TypewriterCover' },
              ]
            },
            {
              text: '🔻 <via>ObstacleCover</via>', collapsed: true, items: [
                { text: '🔻 <via>ObstacleCover Overview</via>', link: '/reference/Via/ViaTheorem/ObstacleCover/Overview' },
              ]
            },
            {
              text: '🔻 <via>TeamCover</via>', collapsed: true, items: [
                { text: '🔻 <via>TeamPlant Overview</via>', link: '/reference/Via/ViaTheorem/TeamCover/Overview' },
                { text: '🔻 <via>BouncingCover</via>', link: '/reference/Via/ViaTheorem/TeamCover/BouncingCover' },
                { text: '🔻 <via>CrossingCover</via>', link: '/reference/Via/ViaTheorem/TeamCover/CrossingCover' },
                { text: '🔻 <via>FollowingCover</via>', link: '/reference/Via/ViaTheorem/TeamCover/FollowingCover' },
              ]
            },
          ]
        },
        {
          text: '🔻 <via>Flag</via>', collapsed: true, items: [
            { text: '🔻 <via>Flag Overview</via>', link: '/reference/Via/Flag/Overview' },
            { text: '🔻 <via>BoundaryFlag</via>', link: '/reference/Via/Flag/BoundaryFlag' },
            { text: '🔻 <via>FlagLocation</via>', link: '/reference/Via/Flag/FlagLocation' },
            { text: '🔻 <via>HighFlag</via>', link: '/reference/Via/Flag/HighFlag' },
            { text: '🔻 <via>LineInFlag</via>', link: '/reference/Via/Flag/LineInFlag' },
            { text: '🔻 <via>NaturalFlag</via>', link: '/reference/Via/Flag/NaturalFlag' },
            { text: '🔻 <via>TrenchExitFlag</via>', link: '/reference/Via/Flag/TrenchExitFlag' },
            { text: '🔻 <via>WastedFlag</via>', link: '/reference/Via/Flag/WastedFlag' },
          ]
        },
      ]
    },
    // #Neuro
    {
      text: '💜 <neuro>Neuro</neuro>', collapsed: true, items: [
        { text: '💜 <neuro>Neuro Overview</neuro>', link: '/reference/Neuro/NeuroOverview' },
        { text: '🔷 <neuro>Neuro Difficulty</neuro>', link: '/reference/Neuro/NeuroDifficulty' },
        {
          text: '💜 <neuro>Arousal</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Arousal Overview</neuro>', link: '/reference/Neuro/Arousal/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Attention</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Attention Overview</neuro>', link: '/reference/Neuro/Attention/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Audio</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Audio Overview</neuro>', link: '/reference/Neuro/Audio/Overview' },
            {
              text: '💜 <neuro>Music</neuro>', collapsed: true, items: [
                { text: '💜 <neuro>Music Overview</neuro>', link: '/reference/Neuro/Audio/Music/Overview' },
                { text: '💜 <neuro>Playlists</neuro>', link: '/reference/Neuro/Audio/Music/Overview' },
              ]
            },
            { text: '💜 <neuro>BranchBreakSound</neuro>', link: '/reference/Neuro/Audio/BranchBreakSound' },
            { text: '💜 <neuro>LogBreakSound</neuro>', link: '/reference/Neuro/Audio/LogBreakSound' },
            { text: '💜 <neuro>SlashSound</neuro>', link: '/reference/Neuro/Audio/SlashSound' },
            { text: '💜 <neuro>SpadeSound</neuro>', link: '/reference/Neuro/Audio/SpadeSound' },
            { text: '💜 <neuro>SoilSound</neuro>', link: '/reference/Neuro/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 <neuro>Awareness</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Awareness Overview</neuro>', link: '/reference/Neuro/Awareness/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Counting</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Counting Overview</neuro>', link: '/reference/Neuro/Counting/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Decision</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>GoOrNoGo</neuro>', link: '/reference/Neuro/Decision/GoOrNoGo' },
            { text: '💜 <neuro>MicrositeSelection</neuro>', link: '/reference/Neuro/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 <neuro>Emotion</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Emotion Overview</neuro>', link: '/reference/Neuro/Emotion/Overview' },
            { text: '💜 <neuro>Anger</neuro>', link: '/reference/Neuro/Emotion/Anger' },
            { text: '💜 <neuro>Disgust</neuro>', link: '/reference/Neuro/Emotion/Disgust' },
            { text: '💜 <neuro>Fear</neuro>', link: '/reference/Neuro/Emotion/Fear' },
            { text: '💜 <neuro>Joy</neuro>', link: '/reference/Neuro/Emotion/Joy' },
            { text: '💜 <neuro>Sadness</neuro>', link: '/reference/Neuro/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 <neuro>Energy</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Energy Overview</neuro>', link: '/reference/Neuro/Energy/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Estimation</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>AreaEstimation</neuro>', link: '/reference/Neuro/Estimation/AreaEstimation' },
            { text: '💜 <neuro>BagCoverEstimation</neuro>', link: '/reference/Neuro/Estimation/BagCoverEstimation' },
            { text: '💜 <neuro>DistanceEstimation</neuro>', link: '/reference/Neuro/Estimation/DistanceEstimation' },
            { text: '💜 <neuro>TimeEstimation</neuro>', link: '/reference/Neuro/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 <neuro>Event</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Event Overview</neuro>', link: '/reference/Neuro/Event/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Homeostasis</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Homeostasis Overview</neuro>', link: '/reference/Neuro/Homeostasis/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Memory</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Overview</neuro>', link: '/reference/Neuro/Memory/Overview' },
            { text: '💜 <neuro>WorkingMemory</neuro>', link: '/reference/Neuro/Memory/WorkingMemory' },
            { text: '💜 <neuro>ShortTermMemory</neuro>', link: '/reference/Neuro/Memory/ShortTermMemory' },
            { text: '💜 <neuro>LongTermMemory</neuro>', link: '/reference/Neuro/Memory/LongTermMemory' },
            { text: '💜 <neuro>NumberMemory</neuro>', link: '/reference/Neuro/Memory/NumberMemory' },
            { text: '💜 <neuro>ViaMemory</neuro>', link: '/reference/Neuro/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 <neuro>Mindfulness</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Overview</neuro>', link: '/reference/Neuro/Mindfulness/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Muscle</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Muscle Overview</neuro>', link: '/reference/Neuro/Muscle/Overview' },
          ]
        },
        { text: '💜 <neuro>Proprioception</neuro>', link: '/reference/Neuro/Proprioception/Overview' },
        { text: '💜 <neuro>Resilience</neuro>', link: '/reference/Neuro/Resilience/Overview' },
        {
          text: '💜 <neuro>SpatialCognition</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>SpatialCognition Overview</neuro>', link: '/reference/Neuro/SpatialCognition/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Time</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Time Overview</neuro>', link: '/reference/Neuro/Time/Overview' },
            { text: '💜 <neuro>BagUpTime</neuro>', link: '/reference/Neuro/Time/BagUpTime' },
            { text: '💜 <neuro>DailySchedule</neuro>', link: '/reference/Neuro/Time/DailySchedule' },
            { text: '💜 <neuro>MotoTiming</neuro>', link: '/reference/Neuro/Time/MotoTiming' },
            { text: '💜 <neuro>Planning</neuro>', link: '/reference/Neuro/Time/Planning' },
            { text: '💜 <neuro>Timer</neuro>', link: '/reference/Neuro/Time/Timer' },
          ]
        },
        { text: '💜 <neuro>Thermoception</neuro>', link: '/reference/Neuro/Thermoception' },
      ]
    },
    { text: '📃 Glossary', link: '/reference/glossary/Glossary' },
    { text: '📷 Media Database', link: '/reference/media/Overview' }
  ]
}

// #Tutorial
function sidebarTutorial() {
  return [
    { text: 'Tutorial Overview', link: '/tutorial/Overview' },
    { text: 'Video Tutorials Overview', link: '/tutorial/VideoTutorialsOverview' },
    { text: 'Labelling', link: '/tutorial/Test_LabelDiagram' },
    { text: 'Matching', link: '/tutorial/Test_Matching' },
    { text: 'MultipleChoice', link: '/tutorial/Test_MultipleChoice' },
    { text: 'Sequencing', link: '/tutorial/Test_Sequencing' },
  ]

}

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples/Overview' },
  ]
}