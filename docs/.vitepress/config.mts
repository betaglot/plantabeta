import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Plantbeta',
  description: 'The elements ',
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
      '/reference/': sidebarReference(),
      '/tutorials/': sidebarTutorials(),
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
    { text: '<dev>Donate Media</dev>', link: '/dev/Donation' },
    { text: '<dev>Downloads</dev>', link: '/dev/Downloads' },
    { text: '<dev>DX</dev>', link: '/dev/DX' },
    {
      text: '<dev>Graphics</dev>', collapsed: true, items: [
        { text: '<dev><beta>Beta Graphics</beta>', link: '/dev/Graphics/BetaGraphic' },
        { text: '<eco>Eco Graphics</eco>', link: '/dev/Graphics/EcoGraphic' },
        { text: '<moto>Move Graphics</moto>', link: '/dev/Graphics/MoveGraphic' },
        { text: '<neuro>Neuro Graphics</neuro>', link: '/dev/Graphics/NeuroGraphic' },
        { text: '<route>Via Graphics</route>', link: '/dev/Graphics/ViaGraphic' },
        { text: 'UX Graphics', link: '/dev/Graphics/UXGraphic' },
        { text: '<dev>DX Graphics</dev>', link: '/dev/Graphics/DXGraphic' },
      ]
    },
    { text: '<dev>Offline</dev>', link: '/dev/Offline' },
    { text: '<dev>Open Source</dev>', link: '/dev/OpenSource' },
    { text: '<dev>PaperPhoto</dev>', link: '/dev/PaperPhoto' },
    { text: '<dev>PythonPlanter</dev>', link: '/dev/PythonPlanter' },
    { text: '<dev>Research Questions</dev>', link: '/dev/ResearchQuestions' },
    { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
    { text: '🔷 <dev>Phrase</dev>', link: '/dev/Phrase' },
    { text: '<dev>Simulation</dev>', link: '/dev/Simulation' },
    { text: '<dev>SocialMedia</dev>', link: '/dev/SocialMedia' },
    { text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide' },
    { text: '<dev>Tagging</dev>', link: '/dev/Tagging' },
    { text: '<dev>Tools</dev>', link: '/dev/Tools' },
    { text: '<dev>UX</dev>', link: '/dev/UX' },
    { text: '<dev>AfternoonTask</dev>', link: '/dev/AfternoonTask' },
  ]
}

// # Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/What/WhatPlantbeta',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/ReferenceOverview',
      activeMatch: '/reference/'
    },
    {
      text: 'Tutorials',
      link: '/tutorials/TutorialsOverview',
      activeMatch: '/tutorials/'
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
        { text: '🔺 <route>To Increase Productivity</route>', link: '/guide/Why/Productivity' },
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
    { text: '<strong>Reference Overview</strong>', link: '/reference/ReferenceOverview' },
    // #Beta
    {
      text: '🔷 <beta>Beta</beta>', collapsed: true, items: [
        { text: '🔷 <beta>What is Beta</beta>?', link: '/reference/Beta/BetaOverview' },
        { text: '🔷 <beta>Beta Examples</beta>', link: '/reference/Beta/BetaExamples' },
        { text: '🔷 <beta>BetaAction</beta>', link: '/reference/Beta/BetaAction' },
        { text: '🔷 <beta>BetaDiagram</beta>', link: '/reference/Beta/BetaDiagram' },
        {
          text: '🔷 <beta>BetaScript</beta>', collapsed: true, items: [
            { text: '🔷 <beta>Overview</beta>', link: '/reference/Beta/BetaScript/Overview' },
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
            { text: '🟩 <eco>FillBlock</eco>', link: '/reference/Eco/Block/FillBlock' },
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
    // #Move
    {
      text: '🟠 <moto>Move</moto>', collapsed: true, items: [
        { text: '🟠 <moto>Move Overview</moto>', link: '/reference/Move/MoveOverview' },
        { text: '🟠 <moto>Move Phrase</moto>', link: '/reference/Move/MovePhrase/Overview' },
        { text: '🟠 <moto>Move Difficulty</moto>', link: '/reference/Move/MoveDifficulty' },
        {
          text: '🟠 <moto>MoveGeometry</moto>', collapsed: true, items: [
            { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/MoveGeometry/Overview' },
            { text: '🟠 <moto>MovePoint</moto>', link: '/reference/Move/MoveGeometry/MovePoint' },
            { text: '🟠 <moto>MoveCurve</moto>', link: '/reference/Move/MoveGeometry/MoveCurve' },
            { text: '🟠 <moto>MoveSpace</moto>', link: '/reference/Move/MoveGeometry/MoveSpace' },
            { text: '🟠 <moto>MoveSurface</moto>', link: '/reference/Move/MoveGeometry/MoveSurface' },
          ]
        },
        {
          text: '🟠 <moto>ArmMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>ArmMove Overview</moto>', link: '/reference/Move/ArmMove/Overview' },
            { text: '🟠 <moto>Arm Phrase</moto>', link: '/reference/Move/ArmMove/Phrase/Overview' },
            { text: '🟠 <moto>ArmBlock</moto>', link: '/reference/Move/ArmMove/ArmBlock' },
            { text: '🟠 <moto>ArmProp</moto>', link: '/reference/Move/ArmMove/ArmProp' },
            { text: '🟠 <moto>ArmSwing</moto>', link: '/reference/Move/ArmMove/ArmSwing' },
            { text: '🟠 <moto>ArmWalk</moto>', link: '/reference/Move/ArmMove/ArmWalk' },
            { text: '🟠 <moto>ArmFlag</moto>', link: '/reference/Move/ArmMove/ArmFlag' },
          ]
        },
        {
          text: '🟠 <moto>BodyMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>BodyMove Overview</moto>', link: '/reference/Move/BodyMove/Overview' },
            { text: '🟠 <moto>Body Phrase</moto>', link: '/reference/Move/BodyMove/Phrase/Overview' },
            { text: '🟠 <moto>BodyAbsorb</moto>', link: '/reference/Move/BodyMove/BodyAbsorb' },
            { text: '🟠 <moto>BodyBend</moto>', link: '/reference/Move/BodyMove/BodyBend' },
            { text: '🟠 <moto>BodyLean</moto>', link: '/reference/Move/BodyMove/BodyLean' },
            { text: '🟠 <moto>BodyRevolve</moto>', link: '/reference/Move/BodyMove/BodyRevolve' },
            { text: '🟠 <moto>BodyRotate</moto>', link: '/reference/Move/BodyMove/BodyRotate' },
            { text: '🟠 <moto>BodySlot</moto>', link: '/reference/Move/BodyMove/BodySlot' },
            { text: '🟠 <moto>Fall</moto>', link: '/reference/Move/BodyMove/Fall' },
          ]
        },
        {
          text: '🟠 <moto>CacheMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>CacheMove Overview</moto>', link: '/reference/Move/CacheMove/Overview' },
            { text: '🟠 <moto>Cache Phrase</moto>', link: '/reference/Move/CacheMove/Phrase/Overview' },
            { text: '🟠 <moto>Eating</moto>', link: '/reference/Move/CacheMove/Eating' },
            { text: '🟠 <moto>TarpOff</moto>', link: '/reference/Move/CacheMove/TarpOff' },
            { text: '🟠 <moto>TarpOn</moto>', link: '/reference/Move/CacheMove/TarpOn' },
          ]
        },
        {
          text: '🟠 <moto>ClothingMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>ClothingMove Overview</moto>', link: '/reference/Move/ClothingMove/Overview' },
            { text: '🟠 <moto>Clothing Phrase</moto>', link: '/reference/Move/ClothingMove/Phrase/Overview' },
            { text: '🟠 <moto>Button</moto>', link: '/reference/Move/ClothingMove/Button' },
            { text: '🟠 <moto>ClothingLayer</moto>', link: '/reference/Move/ClothingMove/ClothingLayer' },
            { text: '🟠 <moto>RemoveMud</moto>', link: '/reference/Move/ClothingMove/RemoveMud' },
            { text: '🟠 <moto>ZipperMove</moto>', link: '/reference/Move/ClothingMove/ZipperMove' },

          ]
        },
        {
          text: '🟠 <moto>FootMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>FootMove Overview</moto>', link: '/reference/Move/FootMove/Overview' },
            { text: '🟠 <moto>Foot Phrase</moto>', link: '/reference/Move/FootMove/Phrase/Overview' },
            { text: '🟠 <moto>FootArchSmear</moto>', link: '/reference/Move/FootMove/FootArchSmear' },
            { text: '🟠 <moto>FootClose</moto>', link: '/reference/Move/FootMove/FootClose' },
            { text: '🟠 <moto>FootDig</moto>', link: '/reference/Move/FootMove/FootDig' },
            { text: '🟠 <moto>FootDorsiflexion</moto>', link: '/reference/Move/FootMove/FootDorsiflexion' },
            { text: '🟠 <moto>FootDrag</moto>', link: '/reference/Move/FootMove/FootDrag' },
            { text: '🟠 <moto>FootEversion</moto>', link: '/reference/Move/FootMove/FootEversion' },
            { text: '🟠 <moto>FootInversion</moto>', link: '/reference/Move/FootMove/FootInversion' },
            { text: '🟠 <moto>FootScreef</moto>', link: '/reference/Move/FootMove/FootScreef' },
            { text: '🟠 <moto>PlantarFlexion</moto>', link: '/reference/Move/FootMove/PlantarFlexion' },
          ]
        },
        {
          text: '🟠 <moto>HandMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>HandMove Overview</moto>', link: '/reference/Move/HandMove/Overview' },
            { text: '🟠 <moto>Hand Phrase</moto>', link: '/reference/Move/HandMove/Phrase/Overview' },
            { text: '🟠 <moto>BagGrip</moto>', link: '/reference/Move/HandMove/BagGrip' },
            { text: '🟠 <moto>BoxGrip</moto>', link: '/reference/Move/HandMove/BoxGrip' },
            { text: '🟠 <moto>BranchGrip</moto>', link: '/reference/Move/HandMove/BranchGrip' },
            { text: '🟠 <moto>BranchSnapGrip</moto>', link: '/reference/Move/HandMove/BranchSnapGrip' },
            { text: '🟠 <moto>HandClose</moto>', link: '/reference/Move/HandMove/HandClose' },
            { text: '🟠 <moto>HandPoke</moto>', link: '/reference/Move/HandMove/HandPoke' },
            { text: '🟠 <moto>HandPut</moto>', link: '/reference/Move/HandMove/HandPut' },
            { text: '🟠 <moto>HandScreef</moto>', link: '/reference/Move/HandMove/HandScreef' },
            { text: '🟠 <moto>SpadeHandleGrip</moto>', link: '/reference/Move/HandMove/SpadeHandleGrip' },
            { text: '🟠 <moto>SpadeShaftGrip</moto>', link: '/reference/Move/HandMove/SpadeShaftGrip' },
            { text: '🟠 <moto>TreeGrip</moto>', link: '/reference/Move/HandMove/Overview' },
            { text: '🟠 <moto>TreeTestGrip</moto>', link: '/reference/Move/HandMove/TreeTestGrip' },
          ]
        },
        {
          text: '🟠 <moto>HeadMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>HeadMove Overview</moto>', link: '/reference/Move/HeadMove/Overview' },
            { text: '🟠 <moto>Head Phrase</moto>', link: '/reference/Move/HeadMove/Phrase/Overview' },
            { text: '🟠 <moto>FocusLook</moto>', link: '/reference/Move/HeadMove/FocusLook' },
            { text: '🟠 <moto>HeadProtraction</moto>', link: '/reference/Move/HeadMove/HeadProtraction' },
            { text: '🟠 <moto>HeadRetraction</moto>', link: '/reference/Move/HeadMove/HeadRetraction' },
            { text: '🟠 <moto>HeadTiltIntoWind</moto>', link: '/reference/Move/HeadMove/HeadTiltIntoWind' },
            { text: '🟠 <moto>Hearing</moto>', link: '/reference/Move/HeadMove/Hearing' },
            { text: '🟠 <moto>LookAway</moto>', link: '/reference/Move/HeadMove/LookAway' },
            { text: '🟠 <moto>NeckExtension</moto>', link: '/reference/Move/HeadMove/NeckExtension' },
          ]
        },
        {
          text: '🟠 <moto>HoleMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>HoleMove Overview</moto>', link: '/reference/Move/HoleMove/Overview' },
            { text: '🟠 <moto>Hole Phrase</moto>', link: '/reference/Move/HoleMove/Phrase/Overview' },
            { text: '🟠 <moto>HoleClose</moto>', link: '/reference/Move/HoleMove/HoleClose' },
            { text: '🟠 <moto>HoleExpand</moto>', link: '/reference/Move/HoleMove/HoleExpand' },
            { text: '🟠 <moto>HoleOpen</moto>', link: '/reference/Move/HoleMove/HoleOpen' },
          ]
        },
        {
          text: '🟠 <moto>LegMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>LegMove Overview</moto>', link: '/reference/Move/LegMove/Overview' },
            { text: '🟠 <moto>Leg Phrase</moto>', link: '/reference/Move/LegMove/Phrase/Overview' },
            { text: '🟠 <moto>Crouch</moto>', link: '/reference/Move/LegMove/Overview' },
            { text: '🟠 <moto>Jump</moto>', link: '/reference/Move/LegMove/Jump' },
            { text: '🟠 <moto>Kneel</moto>', link: '/reference/Move/LegMove/Kneel' },
            { text: '🟠 <moto>LegAbduction</moto>', link: '/reference/Move/LegMove/LegAbduction' },
            { text: '🟠 <moto>LegAbsorb</moto>', link: '/reference/Move/LegMove/LegAbsorb' },
            { text: '🟠 <moto>LegAdduction</moto>', link: '/reference/Move/LegMove/LegAdduction' },
            { text: '🟠 <moto>LegFlag</moto>', link: '/reference/Move/LegMove/LegFlag' },
            { text: '🟠 <moto>LegFlexion</moto>', link: '/reference/Move/LegMove/LegFlexion' },
            { text: '🟠 <moto>LegProp</moto>', link: '/reference/Move/LegMove/LegProp' },
            { text: '🟠 <moto>LegSidebagLift</moto>', link: '/reference/Move/LegMove/LegSidebagLift' },
            { text: '🟠 <moto>LegSwing</moto>', link: '/reference/Move/LegMove/LegSwing' },
            { text: '🟠 <moto>RunningStart</moto>', link: '/reference/Move/LegMove/RunningStart' },
            { text: '🟠 <moto>Step</moto>', link: '/reference/Move/LegMove/Step' },
            { text: '🟠 <moto>Stomp</moto>', link: '/reference/Move/LegMove/Stomp' },
          ]
        },
        {
          text: '🟠 <moto>VegeMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>VegeMove Overview</moto>', link: '/reference/Move/VegeMove/Overview' },
            { text: '🟠 <moto>BranchArmDeflection</moto>', link: '/reference/Move/VegeMove/BranchArmDeflection' },
            { text: '🟠 <moto>BranchDeflection</moto>', link: '/reference/Move/VegeMove/BranchDeflection' },
            { text: '🟠 <moto>BranchMove</moto>', link: '/reference/Move/VegeMove/BranchMove' },
            { text: '🟠 <moto>BranchWhip</moto>', link: '/reference/Move/VegeMove/BranchWhip' },
            { text: '🟠 <moto>Bush</moto>', link: '/reference/Move/VegeMove/Bush' },
            { text: '🟠 <moto>Log</moto>', link: '/reference/Move/VegeMove/Log' },
            { text: '🟠 <moto>SlashPile</moto>', link: '/reference/Move/VegeMove/SlashPile' },
            { text: '🟠 <moto>Stump</moto>', link: '/reference/Move/VegeMove/Stump' },
          ]
        },
        {
          text: '🟠 <moto>Screef</moto>', collapsed: true, items: [
            { text: '🟠 <moto>Screefing Overview</moto>', link: '/reference/Move/Screef/Overview' },
            { text: '🟠 <moto>BootScreef</moto>', link: '/reference/Move/ToolMove/Boot/BootScreef' },
            { text: '🟠 <moto>HandScreef</moto>', link: '/reference/Move/HandMove/HandScreef' },
            { text: '🟠 <moto>SpadeScreef</moto>', link: '/reference/Move/ToolMove/Spade/SpadeScreef' },
          ]
        },
        {
          text: '🟠 <moto>ToolMove</moto>', collapsed: true, items: [
            { text: '🟠 <moto>Tool Overview</moto>', link: '/reference/Move/ToolMove/Overview' },
            {
              text: '🟠 <moto>Bag</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Bag/Overview' },
                { text: '🟠 <moto>BagGrip</moto>', link: '/reference/Move/ToolMove/Bag/BagGrip' },
                { text: '🔷 <moto>Bag Phrase</moto>', link: '/reference/Move/ToolMove/Bag/Phrase/Overview' },
                { text: '🟠 <moto>BagAdjustment</moto>', link: '/reference/Move/ToolMove/Bag/BagAdjustment' },
                { text: '🟠 <moto>BagDeadlift</moto>', link: '/reference/Move/ToolMove/Bag/BagDeadlift' },
                { text: '🟠 <moto>BagEmpty</moto>', link: '/reference/Move/ToolMove/Bag/BagEmpty' },
                { text: '🟠 <moto>BaggingUp</moto>', link: '/reference/Move/ToolMove/Bag/BaggingUp' },
                { text: '🟠 <moto>BagOff</moto>', link: '/reference/Move/ToolMove/Bag/BagOff' },
                { text: '🟠 <moto>BagOn</moto>', link: '/reference/Move/ToolMove/Bag/BagOn' },
                { text: '🟠 <moto>BagSlide</moto>', link: '/reference/Move/ToolMove/Bag/BagSlide' },
              ]
            },
            {
              text: '🟠 <moto>Boot</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Boot/Overview' },
                { text: '🔷 <moto>Boot Phrase</moto>', link: '/reference/Move/ToolMove/Boot/Phrase/Overview' },
                { text: '🟠 <moto>BootGrip</moto>', link: '/reference/Move/ToolMove/Boot/BootGrip' },
                { text: '🟠 <moto>BootScreef</moto>', link: '/reference/Move/ToolMove/Boot/BootScreef' },
                { text: '🟠 <moto>LaceKnot</moto>', link: '/reference/Move/ToolMove/Boot/LaceKnot' },
              ]
            },
            {
              text: '🟠 <moto>Box</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Box/Overview' },
                { text: '🔷 <moto>Box Phrase</moto>', link: '/reference/Move/ToolMove/Box/Phrase/Overview' },
                { text: '🟠 <moto>BoxGrip</moto>', link: '/reference/Move/ToolMove/Box/BoxGrip' },
              ]
            },
            {
              text: '🟠 <moto>Bundle</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Bundle/Overview' },
                { text: '🔷 <moto>Bundle Phrase</moto>', link: '/reference/Move/ToolMove/Bundle/Phrase/Overview' },
                { text: '🟠 <moto>BundleGrip</moto>', link: '/reference/Move/ToolMove/Bundle/BundleGrip' },
                { text: '🟠 <moto>BundlePeel</moto>', link: '/reference/Move/ToolMove/Bundle/BundlePeel' },
              ]
            },
            {
              text: '🟠 <moto>Carabiner</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Carabiner/Overview' },
              ]
            },
            {
              text: '🟠 <moto>Flag</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Flag/Overview' },
                { text: '🔷 <moto>Flag Phrase</moto>', link: '/reference/Move/ToolMove/Flag/Phrase/Overview' },
                { text: '🟠 <moto>FlagGrip</moto>', link: '/reference/Move/ToolMove/Flag/FlagGrip' },
                { text: '🟠 <moto>FlagErrorRecovery</moto>', link: '/reference/Move/ToolMove/Flag/FlagErrorRecovery' },
                { text: '🟠 <moto>FlagGet</moto>', link: '/reference/Move/ToolMove/Flag/FlagLoad' },
                { text: '🟠 <moto>FlagRip</moto>', link: '/reference/Move/ToolMove/Flag/FlagRip' },
                { text: '🟠 <moto>FlagRoll</moto>', link: '/reference/Move/ToolMove/Flag/FlagRoll' },
                { text: '🟠 <moto>FlagUnload</moto>', link: '/reference/Move/ToolMove/Flag/FlagUnoad' },
              ]
            },
            {
              text: '🟠 <moto>Gaiter</moto>', collapsed: true, items: [

                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Gaiter/Overview' },
                { text: '🔷 <moto>Gaiter Phrase</moto>', link: '/reference/Move/ToolMove/Gaiter/Phrase/Overview' },
                { text: '🟠 <moto>GaiterGrip</moto>', link: '/reference/Move/ToolMove/Gaiter/GaiterGrip' },
                { text: '🟠 <moto>GaiterOn</moto>', link: '/reference/Move/ToolMove/Gaiter/GaiterOn' },
                { text: '🟠 <moto>GaiterOff</moto>', link: '/reference/Move/ToolMove/Gaiter/GaiterOff' },
              ]
            },
            {
              text: '🟠 <moto>Glove</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Glove/Overview' },
                { text: '🔷 <moto>Glove Phrase</moto>', link: '/reference/Move/ToolMove/Glove/Phrase/Overview' },
                { text: '🟠 <moto>GloveGrip</moto>', link: '/reference/Move/ToolMove/Glove/GloveGrip' },
              ]
            },
            {
              text: '🟠 <moto>Kit</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Kit/Overview' },
              ]
            },
            {
              text: '🟠 <moto>Rope</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Rope/Overview' },
              ]
            },
            {
              text: '🟠 <moto>Spade</moto>', collapsed: true, items: [
                { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/ToolMove/Spade/Overview' },
                { text: '🔷 <moto>Spade Phrase</moto>', link: '/reference/Move/ToolMove/Spade/Phrase/Overview' },
                { text: '🟠 <moto>SpadeGrip</moto>', link: '/reference/Move/ToolMove/Spade/SpadeGrip' },
                { text: '🟠 <moto>SpadeChop</moto>', link: '/reference/Move/ToolMove/Spade/SpadeChop' },
                { text: '🟠 <moto>SpadePogo</moto>', link: '/reference/Move/ToolMove/Spade/SpadePogo' },
                { text: '🟠 <moto>SpadeProp</moto>', link: '/reference/Move/ToolMove/Spade/SpadeProp' },
                { text: '🟠 <moto>SpadeScreef</moto>', link: '/reference/Move/ToolMove/Spade/SpadeScreef' },
                { text: '🟠 <moto>SpadeSwing</moto>', link: '/reference/Move/ToolMove/Spade/SpadeSwing' },
                { text: '🟠 <moto>SpadeTest</moto>', link: '/reference/Move/ToolMove/Spade/SpadeTest' },
              ]
            }
          ]
        },
        {
          text: '🟠 <moto>Truck</moto>', collapsed: true, items: [
            { text: '🟠 <moto>Overview</moto>', link: '/reference/Move/TruckMove/Overview' },
            { text: '🔷 <moto>Truck Phrase</moto>', link: '/reference/Move/TruckMove/Phrase/Overview' },
            { text: '🟠 <moto>Sleep</moto>', link: '/reference/Move/TruckMove/Sleep' },
            { text: '🟠 <moto>Sit</moto>', link: '/reference/Move/TruckMove/Sit' },
          ]
        },
        { text: '🟠 <moto>Kinesiology</moto>', link: '/reference/Move/Kinesiology/KinesiologyOverview' },

      ],
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
            { text: '💜 <neuro>BagFillEstimation</neuro>', link: '/reference/Neuro/Estimation/BagFillEstimation' },
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
            { text: '💜 <neuro>MoveTiming</neuro>', link: '/reference/Neuro/Time/MoveTiming' },
            { text: '💜 <neuro>Planning</neuro>', link: '/reference/Neuro/Time/Planning' },
            { text: '💜 <neuro>Timer</neuro>', link: '/reference/Neuro/Time/Timer' },
          ]
        },
        { text: '💜 <neuro>Thermoception</neuro>', link: '/reference/Neuro/Thermoception' },
      ]
    },
    // #Via
    {
      text: '🔺 <route>Via</route>', collapsed: true, items: [
        { text: '🔺 <route>Via Overview</route>', link: '/reference/Via/ViaOverview' },
        { text: '🔷 <route>Via Phrase</route>', link: '/reference/Via/ViaSequence/Overview' },
        { text: '🔷 <route>Via Difficulty</route>', link: '/reference/Via/ViaDifficulty' },
        {
          text: '🔺 <route>Fill Algorithms</route>', collapsed: true, items: [
            { text: '🔺 <route>Fill Algorithms Overview</route>', link: '/reference/Via/FillAlgorithm/Overview' },
            { text: '🔺 <route>BoustroFill</route>', link: '/reference/Via/FillAlgorithm/BoustroFill' },
            { text: '🔺 <route>CircleFill</route>', link: '/reference/Via/FillAlgorithm/CircleFill' },
            { text: '🔺 <route>DiamondFill</route>', link: '/reference/Via/FillAlgorithm/DiamondFill' },
            { text: '🔺 <route>SquareFill</route>', link: '/reference/Via/FillAlgorithm/SquareFill' },
            { text: '🔺 <route>TriangleFill</route>', link: '/reference/Via/FillAlgorithm/TriangleFill' },
            { text: '🔺 <route>ChunkFill</route>', link: '/reference/Via/FillAlgorithm/ChunkFill' },
            { text: '🔺 <route>BackFill</route>', link: '/reference/Via/FillAlgorithm/BackFill' },
            { text: '🔺 <route>OpenEndedFill</route>', link: '/reference/Via/FillAlgorithm/OpenEndedFill' },
            { text: '🔺 <route>PerimeterFill</route>', link: '/reference/Via/FillAlgorithm/PerimeterFill' },
            { text: '🔺 <route>TypewriterFill</route>', link: '/reference/Via/FillAlgorithm/TypewriterFill' },
          ]
        },
        {
          text: '🔺 <route>Flag</route>', collapsed: true, items: [
            { text: '🔺 <route>Flag Overview</route>', link: '/reference/Via/Flag/Overview' },
            { text: '🔺 <route>BoundaryFlag</route>', link: '/reference/Via/Flag/BoundaryFlag' },
            { text: '🔺 <route>FlagLocation</route>', link: '/reference/Via/Flag/FlagLocation' },
            { text: '🔺 <route>HighFlag</route>', link: '/reference/Via/Flag/HighFlag' },
            { text: '🔺 <route>LineInFlag</route>', link: '/reference/Via/Flag/LineInFlag' },
            { text: '🔺 <route>NaturalFlag</route>', link: '/reference/Via/Flag/NaturalFlag' },
            { text: '🔺 <route>TrenchExitFlag</route>', link: '/reference/Via/Flag/TrenchExitFlag' },
            { text: '🔺 <route>WastedFlag</route>', link: '/reference/Via/Flag/WastedFlag' },
          ]
        },
        {
          text: '🔺 <route>ObstacleFill</route>', collapsed: true, items: [
            { text: '🔺 <route>ObstacleFill Overview</route>', link: '/reference/Via/ObstacleFill/Overview' },
          ]
        },
        {
          text: '🔺 <route>ViaGeometry</route>', collapsed: true, items: [
            {
              text: '🔺 <route>ViaPoint</route>', collapsed: true, items: [
                { text: '🔺 <route>Overview</route>', link: '/reference/Via/ViaPoint/Overview' },
                { text: '🔺 <route>CenterPoint</route>', link: '/reference/Via/ViaPoint/CenterPoint' },
                { text: '🔺 <route>InflectionPoint</route>', link: '/reference/Via/ViaPoint/InflectionPoint' },
                { text: '🔺 <route>Midpoint</route>', link: '/reference/Via/ViaPoint/Midpoint' },
                { text: '🔺 <route>ReferencePoint</route>', link: '/reference/Via/ViaPoint/ReferencePoint' },
                { text: '🔺 <route>ReflectionPoint</route>', link: '/reference/Via/ViaPoint/ReflectionPoint' },
                { text: '🔺 <route>TargetPoint</route>', link: '/reference/Via/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔺 <route>ViaCurve</route>', collapsed: true, items: [
                { text: '🔺 <route>ViaCurve Overview</route>', link: '/reference/Via/ViaCurve/Overview' },
                { text: '🔺 <route>AroundCurve</route>', link: '/reference/Via/ViaCurve/AroundCurve' },
                { text: '🔺 <route>GhostLine</route>', link: '/reference/Via/ViaCurve/GhostLine' },
                { text: '🔺 <route>ParallelCurve</route>', link: '/reference/Via/ViaCurve/ParalleCurvee' },
                { text: '🔺 <route>PerimeterCurve</route>', link: '/reference/Via/ViaCurve/PerimeterCurve' },
                { text: '🔺 <route>SpiralCurve</route>', link: '/reference/Via/ViaCurve/SpiralCurve' },
                { text: '🔺 <route>TurnAroundCurve</route>', link: '/reference/Via/ViaCurve/TurnAroundCurve' },
                { text: '🔺 <route>ZigzagCurve</route>', link: '/reference/Via/ViaCurve/ZigzagCurve' },
              ]
            },
            {
              text: '🔺 <route>ViaSpace</route>', collapsed: true, items: [
                { text: '🔺 <route>Spacing Overview</route>', link: '/reference/Via/ViaSpace/Overview' },
                { text: '🔺 <route>MaximumSpacing</route>', link: '/reference/Via/ViaSpace/MaximumSpacing' },
                { text: '🔺 <route>MinimumSpacing</route>', link: '/reference/Via/ViaSpace/MinimumSpacing' },
                { text: '🔺 <route>OptimalSpacing</route>', link: '/reference/Via/ViaSpace/OptimalSpacing' },
                { text: '🔺 <route>ElasticSpacing</route>', link: '/reference/Via/ViaSpace/ElasticSpacing' },
                { text: '🔺 <route>SpacingOnSlope</route>', link: '/reference/Via/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔺 <route>ViaSurface</route>', collapsed: true, items: [
                { text: '🔺 <route>Overview</route>', link: '/reference/Via/ViaSurface/Overview' },
                { text: '🔺 <route>ViaSurface Texture</route>', link: '/reference/Via/ViaSurface/ViaSurfaceTexture' },
              ]
            },
          ]
        },
        {
          text: '🔺 <route>TeamPlant</route>', collapsed: true, items: [
            { text: '🔺 <route>TeamPlant Overview</route>', link: '/reference/Via/TeamPlant/Overview' },
            { text: '🔺 <route>BouncingFill</route>', link: '/reference/Via/TeamPlant/BouncingFill' },
            { text: '🔺 <route>CrossingFill</route>', link: '/reference/Via/TeamPlant/CrossingFill' },
            { text: '🔺 <route>FollowingFill</route>', link: '/reference/Via/TeamPlant/FollowingFill' },
          ]
        },
      ]
    },
    { text: '📃 Glossary</route>', link: '/reference/glossary/Glossary' },
    { text: '📷 Media Database', link: '/reference/media/Overview' }
  ]
}

// #Tutorial
function sidebarTutorials() {
  return [
    { text: 'Tutorial Overview', link: '/tutorials/Overview' },
    { text: 'Video Tutorials Overview', link: '/tutorials/VideoTutorialsOverview' },
    { text: 'Labelling', link: '/tutorials/Test_LabelDiagram' },
    { text: 'Matching', link: '/tutorials/Test_Matching' },
    { text: 'MultipleChoice', link: '/tutorials/Test_MultipleChoice' },
    { text: 'Sequencing', link: '/tutorials/Test_Sequencing' },
  ]

}
