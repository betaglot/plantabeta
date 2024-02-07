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
      '/sponsor/': sidebarSponsor(),
    }
  }
})
// #Dev
function sidebarDevelopment() {
  return [
    { text: 'Development Overview', link: '/dev/DevOverview' },
    { text: 'Contact', link: '/dev/Contact' },
    { text: 'Academia', link: '/dev/Academia' },
    { text: 'Data Visualization', link: '/dev/ElementsGraph' },
    { text: 'Donate Media', link: '/dev/Donation' },
    { text: 'Downloads', link: '/dev/Downloads' },
    { text: 'DX', link: '/dev/DX' },
    {
      text: 'Graphics', collapsed: true, items: [
        { text: 'Beta Graphics', link: '/dev/Graphics/BetaGraphic' },
        { text: 'DX Graphics', link: '/dev/Graphics/BetaGraphic' },
        { text: 'Eco Graphics', link: '/dev/Graphics/BetaGraphic' },
        { text: 'Move Graphics', link: '/dev/Graphics/BetaGraphic' },
        { text: 'Neuro Graphics', link: '/dev/Graphics/BetaGraphic' },
        { text: 'Route Graphics', link: '/dev/Graphics/RouteGraphic' },
        { text: 'UX Graphics', link: '/dev/Graphics/UXGraphic' },
      ]
    },
    { text: 'Offline', link: '/dev/Offline' },
    { text: 'Open Source', link: '/dev/OpenSource' },
    { text: 'PaperPhoto', link: '/dev/PaperPhoto' },
    { text: 'Python', link: '/dev/PythonPlanter' },
    { text: 'Research Questions', link: '/dev/ResearchQuestions' },
    { text: 'Roadmap', link: '/dev/Roadmap' },
    { text: 'Sequence', link: '/dev/Sequence' },
    { text: 'Simulation', link: '/dev/Simulation' },
    { text: 'StyleGuide', link: '/dev/StyleGuide' },
    { text: 'Tagging', link: '/dev/Tagging' },
    { text: 'NewTools', link: '/dev/NewTools' },
    { text: 'UX', link: '/dev/UX' },
    { text: 'AfternoonTask', link: '/dev/AfternoonTask' },
  ]
}

function sidebarSponsor() {
  return [
    { text: 'How to be a Sponsor', link: '/sponsor/Overview' },
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
      text: 'Development',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    },
    {
      text: 'Sponsors',
      link: '/sponsor/Overview',
      activeMatch: '/sponsor/'
    },
    // {
    //   text: '🔷 Klimbeta',
    //   link: 'https://klimbeta.github.io/klimbeta/',
    // },

    {
      text: 'Deployed',
      link: 'https://klimbeta.github.io/plantbeta/'
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
        { text: '🟠 <move>To Reduce Injury</move>', link: '/guide/Why/Injury' },
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
// #Reference
function sidebarReference() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference/ReferenceOverview' },
    {
      text: '🔷 <beta>Beta</beta>', collapsed: true, items: [
        { text: '🔷 What is <beta>Beta</beta>?', link: '/reference/Beta/BetaOverview' },
        { text: '🔷 <beta>Beta</beta> Examples', link: '/reference/Beta/BetaExamples' },
        { text: '🔷 <beta>BetaDiagram</beta>', link: '/reference/Beta/BetaDiagram' },
        { text: '🔷 <beta>BetaScript</beta>', link: '/reference/Beta/BetaScript' },

      ]
    },
    // #Eco
    {
      text: '🟩 <eco>Eco</eco>', collapsed: true, items: [
        { text: '🟩 <eco>Eco Overview</eco>', link: '/reference/Eco/EcoOverview' },
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
            { text: '🟩 <eco>LogObstacle</eco>', link: '/reference/Eco/Obstacle/LogObstacle' },
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
      text: '🟠 <move>Move</move>', collapsed: true, items: [
        { text: '🟠 <move>Move Overview</move>', link: '/reference/Move/MoveOverview' },
        {
          text: '🟠 <move>ArmMove</move>', collapsed: true, items: [
            { text: '🟠 <move>ArmMove Overview</move>', link: '/reference/Move/ArmMove/Overview' },
            { text: '🟠 <move>Arm Sequence</move>', link: '/reference/Move/ArmMove/ArmSequence' },
            { text: '🟠 <move>ArmBlock</move>', link: '/reference/Move/ArmMove/ArmBlock' },
            { text: '🟠 <move>ArmProp</move>', link: '/reference/Move/ArmMove/ArmProp' },
            { text: '🟠 <move>ArmSwing</move>', link: '/reference/Move/ArmMove/ArmSwing' },
            { text: '🟠 <move>ArmWalk</move>', link: '/reference/Move/ArmMove/ArmWalk' },
            { text: '🟠 <move>ArmFlag</move>', link: '/reference/Move/ArmMove/ArmFlag' },
          ]
        },
        {
          text: '🟠 <move>BodyMove</move>', collapsed: true, items: [
            { text: '🟠 <move>BodyMove Overview</move>', link: '/reference/Move/BodyMove/Overview' },
            { text: '🟠 <move>Body Sequence</move>', link: '/reference/Move/BodyMove/BodySequence' },
            { text: '🟠 <move>BodyAbsorb</move>', link: '/reference/Move/BodyMove/BodyAbsorb' },
            { text: '🟠 <move>BodyBend</move>', link: '/reference/Move/BodyMove/BodyBend' },
            { text: '🟠 <move>BodyLean</move>', link: '/reference/Move/BodyMove/BodyLean' },
            { text: '🟠 <move>BodyRevolve</move>', link: '/reference/Move/BodyMove/BodyRevolve' },
            { text: '🟠 <move>BodyRotate</move>', link: '/reference/Move/BodyMove/BodyRotate' },
            { text: '🟠 <move>BodySlot</move>', link: '/reference/Move/BodyMove/BodySlot' },
            { text: '🟠 <move>Fall</move>', link: '/reference/Move/BodyMove/Fall' },
          ]
        },
        {
          text: '🟠 <move>CacheMove</move>', collapsed: true, items: [
            { text: '🟠 <move>CacheMove Overview</move>', link: '/reference/Move/CacheMove/Overview' },
            { text: '🟠 <move>Cache Sequence</move>', link: '/reference/Move/CacheMove/CacheSequence' },
            { text: '🟠 <move>Eating</move>', link: '/reference/Move/CacheMove/Eating' },
            { text: '🟠 <move>TarpOff</move>', link: '/reference/Move/CacheMove/TarpOff' },
            { text: '🟠 <move>TarpOn</move>', link: '/reference/Move/CacheMove/TarpOn' },
          ]
        },
        {
          text: '🟠 <move>ClothingMove</move>', collapsed: true, items: [
            { text: '🟠 <move>ClothingMove Overview</move>', link: '/reference/Move/ClothingMove/Overview' },
            { text: '🟠 <move>Clothing Sequence</move>', link: '/reference/Move/ClothingMove/ClothingSequence' },
            { text: '🟠 <move>Button</move>', link: '/reference/Move/ClothingMove/Button' },
            { text: '🟠 <move>ClothingLayer</move>', link: '/reference/Move/ClothingMove/ClothingLayer' },
            { text: '🟠 <move>RemoveMud</move>', link: '/reference/Move/ClothingMove/RemoveMud' },
            { text: '🟠 <move>ZipperMove</move>', link: '/reference/Move/ClothingMove/ZipperMove' },

          ]
        },
        {
          text: '🟠 <move>FootMove</move>', collapsed: true, items: [
            { text: '🟠 <move>FootMove Overview</move>', link: '/reference/Move/FootMove/Overview' },
            { text: '🟠 <move>Foot Sequence</move>', link: '/reference/Move/FootMove/FootSequence' },
            { text: '🟠 <move>FootArchSmear</move>', link: '/reference/Move/FootMove/FootArchSmear' },
            { text: '🟠 <move>FootClose</move>', link: '/reference/Move/FootMove/FootClose' },
            { text: '🟠 <move>FootDig</move>', link: '/reference/Move/FootMove/FootDig' },
            { text: '🟠 <move>FootDorsiflexion</move>', link: '/reference/Move/FootMove/FootDorsiflexion' },
            { text: '🟠 <move>FootDrag</move>', link: '/reference/Move/FootMove/FootDrag' },
            { text: '🟠 <move>FootEversion</move>', link: '/reference/Move/FootMove/FootEversion' },
            { text: '🟠 <move>FootInversion</move>', link: '/reference/Move/FootMove/FootInversion' },
            { text: '🟠 <move>FootScreef</move>', link: '/reference/Move/FootMove/FootScreef' },
            { text: '🟠 <move>PlantarFlexion</move>', link: '/reference/Move/FootMove/PlantarFlexion' },
          ]
        },

        {
          text: '🟠 <move>HandMove</move>', collapsed: true, items: [
            { text: '🟠 <move>HandMove Overview</move>', link: '/reference/Move/HandMove/Overview' },
            { text: '🟠 <move>Hand Sequence</move>', link: '/reference/Move/HandMove/HandSequence' },
            { text: '🟠 <move>BagGrip</move>', link: '/reference/Move/HandMove/BagGrip' },
            { text: '🟠 <move>BoxGrip</move>', link: '/reference/Move/HandMove/BoxGrip' },
            { text: '🟠 <move>BranchGrip</move>', link: '/reference/Move/HandMove/BranchGrip' },
            { text: '🟠 <move>BranchSnapGrip</move>', link: '/reference/Move/HandMove/BranchSnapGrip' },
            { text: '🟠 <move>HandClose</move>', link: '/reference/Move/HandMove/HandClose' },
            { text: '🟠 <move>HandPoke</move>', link: '/reference/Move/HandMove/HandPoke' },
            { text: '🟠 <move>HandScreef</move>', link: '/reference/Move/HandMove/HandScreef' },
            { text: '🟠 <move>InsertTree</move>', link: '/reference/Move/HandMove/InsertTree' },
            { text: '🟠 <move>SpadeHandleGrip</move>', link: '/reference/Move/HandMove/SpadeHandleGrip' },
            { text: '🟠 <move>SpadeShaftGrip</move>', link: '/reference/Move/HandMove/SpadeShaftGrip' },
            { text: '🟠 <move>TreeGrip</move>', link: '/reference/Move/HandMove/Overview' },
            { text: '🟠 <move>TreeTestGrip</move>', link: '/reference/Move/HandMove/TreeTestGrip' },
          ]
        },

        {
          text: '🟠 <move>HeadMove</move>', collapsed: true, items: [
            { text: '🟠 <move>HeadMove Overview</move>', link: '/reference/Move/HeadMove/Overview' },
            { text: '🟠 <move>Head Sequence</move>', link: '/reference/Move/HeadMove/HeadSequence' },
            { text: '🟠 <move>FocusLook</move>', link: '/reference/Move/HeadMove/FocusLook' },
            { text: '🟠 <move>HeadProtraction</move>', link: '/reference/Move/HeadMove/HeadProtraction' },
            { text: '🟠 <move>HeadRetraction</move>', link: '/reference/Move/HeadMove/HeadRetraction' },
            { text: '🟠 <move>HeadTiltIntoWind</move>', link: '/reference/Move/HeadMove/HeadTiltIntoWind' },
            { text: '🟠 <move>Hearing</move>', link: '/reference/Move/HeadMove/Hearing' },
            { text: '🟠 <move>LookAway</move>', link: '/reference/Move/HeadMove/LookAway' },
            { text: '🟠 <move>NeckExtension</move>', link: '/reference/Move/HeadMove/NeckExtension' },
          ]
        },
        {
          text: '🟠 <move>HoleMove</move>', collapsed: true, items: [
            { text: '🟠 <move>HoleMove Overview</move>', link: '/reference/Move/HoleMove/Overview' },
            { text: '🟠 <move>Hole Sequence</move>', link: '/reference/Move/HoleMove/HoleSequence' },
            { text: '🟠 <move>HoleClose</move>', link: '/reference/Move/HoleMove/HoleClose' },
            { text: '🟠 <move>HoleExpand</move>', link: '/reference/Move/HoleMove/HoleExpand' },
            { text: '🟠 <move>HoleOpen</move>', link: '/reference/Move/HoleMove/HoleOpen' },

          ]
        },
        {
          text: '🟠 <move>LegMove</move>', collapsed: true, items: [
            { text: '🟠 <move>LegMove Overview</move>', link: '/reference/Move/LegMove/Overview' },
            { text: '🟠 <move>Leg Sequence</move>', link: '/reference/Move/LegMove/LegSequence' },
            { text: '🟠 <move>Crouch</move>', link: '/reference/Move/LegMove/Overview' },
            { text: '🟠 <move>Jump</move>', link: '/reference/Move/LegMove/Jump' },
            { text: '🟠 <move>Kneel</move>', link: '/reference/Move/LegMove/Kneel' },
            { text: '🟠 <move>LegAbduction</move>', link: '/reference/Move/LegMove/LegAbduction' },
            { text: '🟠 <move>LegAbsorb</move>', link: '/reference/Move/LegMove/LegAbsorb' },
            { text: '🟠 <move>LegAdduction</move>', link: '/reference/Move/LegMove/LegAdduction' },
            { text: '🟠 <move>LegFlag</move>', link: '/reference/Move/LegMove/LegFlag' },
            { text: '🟠 <move>LegFlexion</move>', link: '/reference/Move/LegMove/LegFlexion' },
            { text: '🟠 <move>LegProp</move>', link: '/reference/Move/LegMove/LegProp' },
            { text: '🟠 <move>LegSidebagLift</move>', link: '/reference/Move/LegMove/LegSidebagLift' },
            { text: '🟠 <move>LegSwing</move>', link: '/reference/Move/LegMove/LegSwing' },
            { text: '🟠 <move>RunningStart</move>', link: '/reference/Move/LegMove/RunningStart' },
            { text: '🟠 <move>Step</move>', link: '/reference/Move/LegMove/Step' },
            { text: '🟠 <move>Stomp</move>', link: '/reference/Move/LegMove/Stomp' },


          ]
        },
        {
          text: '🟠 <move>PlantMove</move>', collapsed: true, items: [
            { text: '🟠 <move>PlantMove Overview</move>', link: '/reference/Move/PlantMove/Overview' },
            { text: '🟠 <move>BranchArmDeflection</move>', link: '/reference/Move/PlantMove/BranchArmDeflection' },
            { text: '🟠 <move>BranchDeflection</move>', link: '/reference/Move/PlantMove/BranchDeflection' },
            { text: '🟠 <move>BranchMove</move>', link: '/reference/Move/PlantMove/BranchMove' },
            { text: '🟠 <move>BranchWhip</move>', link: '/reference/Move/PlantMove/BranchWhip' },
            { text: '🟠 <move>Bush</move>', link: '/reference/Move/PlantMove/Bush' },
            { text: '🟠 <move>SlashPile</move>', link: '/reference/Move/PlantMove/SlashPile' },
            { text: '🟠 <move>Log</move>', link: '/reference/Move/PlantMove/Log' },
            { text: '🟠 <move>Stump</move>', link: '/reference/Move/PlantMove/Stump' },

          ]
        },
        {
          text: '🟠 <move>ScreefMove</move>', collapsed: true, items: [
            { text: '🟠 <move>Screefing Overview</move>', link: '/reference/Move/ScreefMove/Overview' },
            { text: '🟠 <move>BootScreef</move>', link: '/reference/Move/ToolMove/Boot/BootScreef' },
            { text: '🟠 <move>HandScreef</move>', link: '/reference/Move/HandMove/HandScreef' },
            { text: '🟠 <move>SpadeScreef</move>', link: '/reference/Move/ToolMove/Spade/SpadeScreef' },

          ]
        },
        {
          text: '🟠 <move>ToolMove</move>', collapsed: true, items: [
            { text: '🟠 <move>Tool Overview</move>', link: '/reference/Move/ToolMove/Overview' },
            {
              text: '🟠 <move>Bag</move>', collapsed: true, items: [
                { text: 'Overview</move>', link: '/reference/Move/ToolMove/Bag/Overview' },
                { text: 'BagGrip</move>', link: '/reference/Move/ToolMove/Bag/BagGrip' },
                { text: 'Bag Sequence</move>', link: '/reference/Move/ToolMove/Bag/BagSequence' },
                { text: 'BagAdjustment</move>', link: '/reference/Move/ToolMove/Bag/BagAdjustment' },
                { text: 'BagDeadlift</move>', link: '/reference/Move/ToolMove/Bag/BagDeadlift' },
                { text: 'BagEmpty</move>', link: '/reference/Move/ToolMove/Bag/BagEmpty' },
                { text: 'BaggingUp</move>', link: '/reference/Move/ToolMove/Bag/BaggingUp' },
                { text: 'BagOff</move>', link: '/reference/Move/ToolMove/Bag/BagOff' },
                { text: 'BagOn</move>', link: '/reference/Move/ToolMove/Bag/BagOn' },
                { text: 'BagSlide</move>', link: '/reference/Move/ToolMove/Bag/BagSlide' },

              ]
            },
            {
              text: '🟠 <move>Boot </move>', collapsed: true, items: [
                { text: 'Overview</move>', link: '/reference/Move/ToolMove/Boot/Overview' },
                { text: 'Boot Sequence</move>', link: '/reference/Move/ToolMove/Boot/BootSequence' },
                { text: 'BootGrip</move>', link: '/reference/Move/ToolMove/Boot/BootGrip' },
                { text: 'BootScreef</move>', link: '/reference/Move/ToolMove/Boot/BootScreef' },
                { text: 'LaceKnot</move>', link: '/reference/Move/ToolMove/Boot/LaceKnot' },
              ]
            },
            {
              text: '🟠 <move>Box</move>', collapsed: true, items: [
                { text: 'Overview</move>', link: '/reference/Move/ToolMove/Box/Overview' },
                { text: 'Box Sequence</move>', link: '/reference/Move/ToolMove/Box/BoxSequence' },
                { text: 'BoxGrip</move>', link: '/reference/Move/ToolMove/Box/BoxGrip' },
              ]
            },
            {
              text: '🟠 <move>Bundle </move>', collapsed: true, items: [
                { text: 'Overview</move>', link: '/reference/Move/ToolMove/Bundle/Overview' },
                { text: 'Bundle Sequence</move>', link: '/reference/Move/ToolMove/Bundle/BundleSequence' },
                { text: 'BundleGrip</move>', link: '/reference/Move/ToolMove/Bundle/BundleGrip' },
                { text: 'BundlePeel</move>', link: '/reference/Move/ToolMove/Bundle/BundlePeel' },
              ]
            },
            {
              text: '🟠 <move>Carabiner </move>', collapsed: true, items: [
                { text: 'Overview</move>', link: '/reference/Move/ToolMove/Carabiner/Overview' },
              ]
            },
            {
              text: '🟠 <move>Flag</move>', collapsed: true, items: [
                { text: 'Overview</move>', link: '/reference/Move/ToolMove/Flag/Overview' },
                { text: 'Flag Sequence</move>', link: '/reference/Move/ToolMove/Flag/FlagSequence' },
                { text: 'FlagGrip</move>', link: '/reference/Move/ToolMove/Flag/FlagGrip' },
                { text: 'FlagErrorRecovery</move>', link: '/reference/Move/ToolMove/Flag/FlagErrorRecovery' },
                { text: 'FlagKnot</move>', link: '/reference/Move/ToolMove/Flag/FlagKnot' },
                { text: 'FlagLoad</move>', link: '/reference/Move/ToolMove/Flag/FlagLoad' },
                { text: 'FlagRip</move>', link: '/reference/Move/ToolMove/Flag/FlagRip' },
                { text: 'FlagRoll</move>', link: '/reference/Move/ToolMove/Flag/FlagRoll' },
                { text: 'FlagThrow</move>', link: '/reference/Move/ToolMove/Flag/FlagThrow' },
                { text: 'FlagUnload</move>', link: '/reference/Move/ToolMove/Flag/FlagUnoad' },
                { text: 'FlagWeave</move>', link: '/reference/Move/ToolMove/Flag/FlagWeave' },
                { text: 'FlagWrap</move>', link: '/reference/Move/ToolMove/Flag/FlagWrap' },
              ]
            },
            {
              text: '🟠 <move>Gaiter </move>', collapsed: true, items: [

                { text: 'Overview</move>', link: '/reference/Move/ToolMove/Gaiter/Overview' },
                { text: 'Gaiter Sequence</move>', link: '/reference/Move/ToolMove/Gaiter/GaiterSequence' },
                { text: 'GaiterGrip</move>', link: '/reference/Move/ToolMove/Gaiter/GaiterGrip' },
                { text: 'GaiterOn</move>', link: '/reference/Move/ToolMove/Gaiter/GaiterOn' },
                { text: 'GaiterOff</move>', link: '/reference/Move/ToolMove/Gaiter/GaiterOff' },
              ]
            },
            {
              text: '🟠 <move>Glove</move>', collapsed: true, items: [
                { text: 'Overview</move>', link: '/reference/Move/ToolMove/Glove/Overview' },
                { text: 'Glove Sequence</move>', link: '/reference/Move/ToolMove/Glove/GloveSequence' },
                { text: 'GloveGrip</move>', link: '/reference/Move/ToolMove/Glove/GloveGrip' },

              ]
            },
            {
              text: '🟠 <move>Rope</move>', collapsed: true, items: [
                { text: 'Overview</move>', link: '/reference/Move/ToolMove/RopeOverview' },
              ]
            },
            {
              text: '🟠 <move>Spade</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Spade/Overview' },
                { text: '🟠 <move>Spade Sequence</move>', link: '/reference/Move/ToolMove/Spade/SpadeSequence' },
                { text: '🟠 <move>SpadeGrip</move>', link: '/reference/Move/ToolMove/Spade/SpadeGrip' },
                { text: '🟠 <move>SpadeChop</move>', link: '/reference/Move/ToolMove/Spade/SpadeChop' },
                { text: '🟠 <move>SpadePogo</move>', link: '/reference/Move/ToolMove/Spade/SpadePogo' },
                { text: '🟠 <move>SpadeProp</move>', link: '/reference/Move/ToolMove/Spade/SpadeProp' },
                { text: '🟠 <move>SpadeScreef</move>', link: '/reference/Move/ToolMove/Spade/SpadeScreef' },
                { text: '🟠 <move>SpadeSwing</move>', link: '/reference/Move/ToolMove/Spade/SpadeSwing' },
                { text: '🟠 <move>SpadeTest</move>', link: '/reference/Move/ToolMove/Spade/SpadeTest' },
              ]
            }
          ]
        },
        {
          text: '🟠 <move>Truck</move>', collapsed: true, items: [
            { text: '🟠 <move>Overview</move>', link: '/reference/Move/TruckMove/Overview' },
            { text: '🟠 <move>Truck Sequence</move>', link: '/reference/Move/TruckMove/TruckSequence' },
            { text: '🟠 <move>Sleep</move>', link: '/reference/Move/TruckMove/Sleep' },
            { text: '🟠 <move>Sit</move>', link: '/reference/Move/TruckMove/Sit' },
          ]
        },
        { text: '🟠 <move>Kinesiology</move>', link: '/reference/Move/Kinesiology/KinesiologyOverview' },

      ],
    },
    // #Neuro
    {
      text: '💜 <neuro>Neuro</neuro>', collapsed: true, items: [
        { text: '💜 <neuro>Neuro Overview</neuro>', link: '/reference/Neuro/NeuroOverview' },
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
            { text: '💜 <neuro> GoOrNoGo</neuro>', link: '/reference/Neuro/Decision/GoOrNoGo' },
            { text: '💜 <neuro> MicrositeSelection</neuro>', link: '/reference/Neuro/Decision/MicrositeSelection' },
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
          text: '💜 <neuro> Estimation</neuro>', collapsed: true, items: [
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
          text: '💜 <neuro> Memory</neuro>', collapsed: true, items: [
            { text: '💜 <neuro> Overview</neuro>', link: '/reference/Neuro/Memory/Overview' },
            { text: '💜 <neuro> WorkingMemory</neuro>', link: '/reference/Neuro/Memory/WorkingMemory' },
            { text: '💜 <neuro> ShortTermMemory</neuro>', link: '/reference/Neuro/Memory/ShortTermMemory' },
            { text: '💜 <neuro> LongTermMemory</neuro>', link: '/reference/Neuro/Memory/LongTermMemory' },
            { text: '💜 <neuro> NumberMemory</neuro>', link: '/reference/Neuro/Memory/NumberMemory' },
            { text: '💜 <neuro> RouteMemory</neuro>', link: '/reference/Neuro/Memory/RouteMemory' },


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
    // #Route
    {
      text: '🔺 <route>Route</route>', collapsed: true, items: [
        { text: '🔺 <route>Route Overview</route>', link: '/reference/Route/RouteOverview' },
        {
          text: '🔺 <route>Fill Algorithms</route>', collapsed: true, items: [
            { text: '🔺 <route>Fill Algorithms Overview</route>', link: '/reference/Route/FillAlgorithm/Overview' },
            { text: '🔺 <route>BoustroFill</route>', link: '/reference/Route/FillAlgorithm/BoustroFill' },
            { text: '🔺 <route>CircleFill</route>', link: '/reference/Route/FillAlgorithm/CircleFill' },
            { text: '🔺 <route>DiamondFill</route>', link: '/reference/Route/FillAlgorithm/DiamondFill' },
            { text: '🔺 <route>SquareFill</route>', link: '/reference/Route/FillAlgorithm/SquareFill' },
            { text: '🔺 <route>TriangleFill</route>', link: '/reference/Route/FillAlgorithm/TriangleFill' },
            { text: '🔺 <route>ChunkFill</route>', link: '/reference/Route/FillAlgorithm/ChunkFill' },
            { text: '🔺 <route>BackFill</route>', link: '/reference/Route/FillAlgorithm/BackFill' },
            { text: '🔺 <route>OpenEndedFill</route>', link: '/reference/Route/FillAlgorithm/OpenEndedFill' },
            { text: '🔺 <route>PerimeterFill</route>', link: '/reference/Route/FillAlgorithm/PerimeterFill' },
            { text: '🔺 <route>TypewriterFill</route>', link: '/reference/Route/FillAlgorithm/TypewriterFill' },

          ]
        },
        {
          text: '🔺 <route>Flag</route>', collapsed: true, items: [
            { text: '🔺 <route>Flag Overview</route>', link: '/reference/Route/Flag/Overview' },
            { text: '🔺 <route>BoundaryFlag</route>', link: '/reference/Route/Flag/BoundaryFlag' },
            { text: '🔺 <route>FlagLocation</route>', link: '/reference/Route/Flag/FlagLocation' },
            { text: '🔺 <route>HighFlag</route>', link: '/reference/Route/Flag/HighFlag' },
            { text: '🔺 <route>LineInFlag</route>', link: '/reference/Route/Flag/LineInFlag' },
            { text: '🔺 <route>NaturalFlag</route>', link: '/reference/Route/Flag/NaturalFlag' },
            { text: '🔺 <route>TrenchExitFlag</route>', link: '/reference/Route/Flag/TrenchExitFlag' },
            { text: '🔺 <route>WastedFlag</route>', link: '/reference/Route/Flag/WastedFlag' },
          ]
        },

        {
          text: '🔺 <route>ObstacleFill</route>', collapsed: true, items: [
            { text: '🔺 <route>ObstacleFill Overview</route>', link: '/reference/Route/ObstacleFill/Overview' },
          ]
        },
        {
          text: '🔺 <route>RouteCurve</route>', collapsed: true, items: [
            { text: '🔺 <route>RouteCurve Overview</route>', link: '/reference/Route/RouteCurve/Overview' },
            { text: '🔺 <route>AroundCurve</route>', link: '/reference/Route/RouteCurve/AroundCurve' },
            { text: '🔺 <route>GhostLine</route>', link: '/reference/Route/RouteCurve/GhostLine' },
            { text: '🔺 <route>ParallelCurve</route>', link: '/reference/Route/RouteCurve/ParalleCurvee' },
            { text: '🔺 <route>PerimeterCurve</route>', link: '/reference/Route/RouteCurve/PerimeterCurve' },
            { text: '🔺 <route>SpiralCurve</route>', link: '/reference/Route/RouteCurve/SpiralCurve' },
            { text: '🔺 <route>TurnAroundCurve</route>', link: '/reference/Route/RouteCurve/TurnAroundCurve' },
            { text: '🔺 <route>ZigzagCurve</route>', link: '/reference/Route/RouteCurve/ZigzagCurve' },
          ]
        },
        {
          text: '🔺 <route>RouteSpace</route>', collapsed: true, items: [
            { text: '🔺 <route>Spacing Overview</route>', link: '/reference/Route/RouteSpace/Overview' },
            { text: '🔺 <route>MaximumSpacing</route>', link: '/reference/Route/RouteSpace/MaximumSpacing' },
            { text: '🔺 <route>MinimumSpacing</route>', link: '/reference/Route/RouteSpace/MinimumSpacing' },
            { text: '🔺 <route>OptimalSpacing</route>', link: '/reference/Route/RouteSpace/OptimalSpacing' },
            { text: '🔺 <route>ElasticSpacing</route>', link: '/reference/Route/RouteSpace/ElasticSpacing' },
            { text: '🔺 <route>SpacingOnSlope</route>', link: '/reference/Route/RouteSpace/SpacingOnSlope' },

          ]
        },
        {
          text: '🔺 <route>RoutePoint</route>', collapsed: true, items: [
            { text: '🔺 <route>Overview</route>', link: '/reference/Route/RoutePoint/Overview' },
            { text: '🔺 <route>CenterPoint</route>', link: '/reference/Route/RoutePoint/CenterPoint' },
            { text: '🔺 <route>InflectionPoint</route>', link: '/reference/Route/RoutePoint/InflectionPoint' },
            { text: '🔺 <route>Midpoint</route>', link: '/reference/Route/RoutePoint/Midpoint' },
            { text: '🔺 <route>ReferencePoint</route>', link: '/reference/Route/RoutePoint/ReferencePoint' },
            { text: '🔺 <route>ReflectionPoint</route>', link: '/reference/Route/RoutePoint/ReflectionPoint' },
            { text: '🔺 <route>TargetPoint</route>', link: '/reference/Route/RoutePoint/TargetPoint' },

          ]
        },
        {
          text: '🔺 <route>RouteSurface</route>', collapsed: true, items: [
            { text: '🔺 <route>Overview</route>', link: '/reference/Route/RouteSurface/Overview' },
            { text: '🔺 <route>RouteSurface Texture</route>', link: '/reference/Route/RouteSurface/RouteSurfaceTexture' },


          ]
        },
        {
          text: '🔺 <route>TeamPlant</route>', collapsed: true, items: [
            { text: '🔺 <route>TeamPlant Overview</route>', link: '/reference/Route/TeamPlant/Overview' },
            { text: '🔺 <route>BouncingFill</route>', link: '/reference/Route/TeamPlant/BouncingFill' },
            { text: '🔺 <route>CrossingFill</route>', link: '/reference/Route/TeamPlant/CrossingFill' },
            { text: '🔺 <route>FollowingFill</route>', link: '/reference/Route/TeamPlant/FollowingFill' },
          ]
        },
      ]
    },
    { text: '📃 Glossary</route>', link: '/reference/glossary/Glossary' },
    { text: '📷 Media Database', link: '/reference/media/Overview' }
  ]
}



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
