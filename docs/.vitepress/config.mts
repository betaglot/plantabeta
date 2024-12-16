import { defineConfig } from 'vitepress'

export default defineConfig({

  cleanUrls: true,
  lang: 'en-US',
  title: 'Put(Plant)',
  description: '',
  lastUpdated: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ["link", { rel: "apple-touch-icon", href: "/Putplant_Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Putplant_Logo.png" }]
  ],
  themeConfig: {

    outline: [2, 4],
    logo: 'Putplant_Logo.png',
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/betaglot/putplant' }
    // ],
    // footer: {
    //   message: "Library released under <a style='text-decoration:underline;' href='https://github.com/betaglot/putplant/blob/main/LICENSE'>MIT License</a>.",
    //   copyright: `Copyright © 2023–${new Date().getUTCFullYear()} Christopher Duncan`
    // },
    // search: {
    //   provider: 'local'
    // },

    // siteTitle: 'Put(Plant)',
    // nav: nav(),

    // sidebar: {
    //   '/guide/': sidebarGuide(),
    //   '/examples/': sidebarExamples(),
    //   '/tutorial/': sidebarTutorial(),
    //   '/encyclopedia/': sidebarReference(),
    //   '/dev/': sidebarDevelopment(),
    //   '/app/': sidebarApp()
    // }
  }
})
// // #Dev
// function sidebarDevelopment() {
//   return [
//     { text: '<dev>Dev Overview</dev>', link: '/dev/DevOverview' },
//     { text: '<dev>🔷 Betaglot</dev>', link: '/dev/Betaglot' },
//     { text: '<dev>Contact</dev>', link: '/dev/Contact' },
//     { text: '<dev>Academia</dev>', link: '/dev/Academia' },
//     { text: '<dev>Art</dev>', link: '/dev/art/Overview' },
//     { text: '<dev>👩‍💻 BePython</dev>', link: '/dev/BePython' },
//     { text: '<dev>Contribute</dev>', link: '/dev/Contribute' },
//     { text: '<dev>Downloads</dev>', link: '/dev/Downloads' },
//     { text: '<dev>DX</dev>', link: '/dev/DX' },
//     { text: '<dev>ElementGraph</dev>', link: '/dev/ElementsGraph' },
//     { text: '<dev>Filming</dev>', link: '/dev/Filming' },
//     { text: '<dev>FireBeta</dev>', link: '/FireBeta/FireBeta' },
//     { text: '<dev>GoPro</dev>', link: '/dev/GoPro' },
//     {
//       text: '<dev>Graphics</dev>', collapsed: true, items: [
//         { text: '<dev>Overview</dev>', link: '/dev/Graphics/Overview' },
//         { text: '<beta>Beta Graphics</beta>', link: '/dev/Graphics/BetaGraphic' },
//         { text: '<eko>Eko Graphics</eko>', link: '/dev/Graphics/EcoGraphic' },
//         { text: '<move>Move Graphics</move>', link: '/dev/Graphics/MotoGraphic' },
//         { text: '<psike>Psike Graphics</psike>', link: '/dev/Graphics/NeuroGraphic' },
//         { text: '<via>Via Graphics</via>', link: '/dev/Graphics/ViaGraphic' },
//         { text: 'UX Graphics', link: '/dev/Graphics/UXGraphic' },
//         { text: '<dev>DX Graphics</dev>', link: '/dev/Graphics/DXGraphic' },
//       ]
//     },
//     { text: '<dev>Mindmap</dev>', link: '/dev/Mindmap' },
//     { text: '<dev>Offline</dev>', link: '/dev/Offline' },
//     { text: '<dev>Open Source</dev>', link: '/dev/OpenSource' },
//     { text: '<dev>PaperPhoto</dev>', link: '/dev/PaperPhoto' },
//     { text: '<dev>Podcast</dev>', link: '/dev/Podcast' },
//     { text: '<dev>Pylanter</dev>', link: '/dev/Pylanter' },
//     { text: '<dev>Research Questions</dev>', link: '/dev/ResearchQuestions' },
//     { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
//     { text: '<dev>Sequence</dev>', link: '/dev/Sequence' },
//     { text: '<dev>SocialMedia</dev>', link: '/dev/SocialMedia' },
//     { text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide' },
//     { text: '<dev>Tagging</dev>', link: '/dev/Tagging' },
//     { text: '<dev>TaskList</dev>', link: '/dev/TaskList' },
//     { text: '<dev>ToDo</dev>', link: '/dev/ToDo' },
//     { text: '<dev>Tools</dev>', link: '/dev/Tools' },
//     { text: '<dev>UX</dev>', link: '/dev/UX' },
//     { text: '<dev>AfternoonTask</dev>', link: '/dev/AfternoonTask' },
//   ]
// }

// // #Nav
// function nav() {
//   return [
//     {
//       text: 'Guide',
//       link: '/guide/What/WhatPutPlant',
//       activeMatch: '/guide/'
//     },
//     {
//       text: 'Examples',
//       link: '/examples/Overview',
//       activeMatch: '/examples/'
//     },
//     {
//       text: 'Tutorial',
//       link: '/tutorial/TutorialOverview',
//       activeMatch: '/tutorial/'
//     },
//     {
//       text: 'ENCYCLOPEDIA',
//       link: '/encyclopedia/RefOverview',
//       activeMatch: '/encyclopedia/'
//     },
//     {
//       text: '🔷',
//       link: '/app/Overview',
//       activeMatch: '/app/'
//     },
//     {
//       text: '🛠',
//       link: 'dev/DevOverview',
//       activeMatch: '/dev/'
//     }
//   ]
// }

// //#Guide
// function sidebarGuide() {
//   return [
//     {
//       text: 'Introduction',
//       collapsed: false,
//       items: [
//         { text: 'What is Tree Planting?', link: '/guide/What/WhatTreePlanting' },
//         { text: 'What is 🔷<beta>Put(<eko>Plant</eko>)</beta>?', link: '/guide/What/WhatPutPlant' },
//       ]
//     },
//     {
//       text: 'Purpose', collapsed: false, items: [
//         { text: '🔥<eko>To Support Ecosystems</eko>', link: '/guide/Why/SupportEcosystem' },
//         { text: '🟠<move>To Reduce Injury</move>', link: '/guide/Why/Injury' },
//         { text: '🔻<via>To Increase Productivity</via>', link: '/guide/Why/Productivity' },
//         { text: '🔷<beta>To Improve Communication</beta>', link: '/guide/Why/Communication' },
//         { text: '💜<psike>To Steepen Learning Curve</psike>', link: '/guide/Why/LearningCurve' },
//         { text: '💲To Increase Profit', link: '/guide/Why/Company' }
//       ]
//     },
//     {
//       text: 'Planter Guide', collapsed: false, items: [
//         { text: 'Potential Planter', link: '/guide/Who/PotentialPlanter' },
//         { text: 'Novice Planter', link: '/guide/Who/NovicePlanter' },
//         { text: 'Experienced Planter', link: '/guide/Who/ExperiencedPlanter' },
//         { text: 'Planter Supervisor', link: '/guide/Who/PlanterSupervisor' },
//         { text: 'Planter Instructor', link: '/guide/Who/PlanterInstructor' }
//       ]
//     },
//     {
//       text: 'Gear Guide', collapsed: false, items: [
//         { text: 'What Gear to bring?', link: '/guide/What/WhatGear' },
//         { text: 'Gear List', link: '/guide/What/GearList' }
//       ]
//     },
//     { text: 'Go to Examples', link: '/examples/Overview' },
//   ]
// }
// // 
// function sidebarReference() {
//   return [
//     { text: '<strong>Reference Overview</strong>', link: '/encyclopedia/RefOverview' },
//     // #Beta
//     {
//       text: '🔷 <beta>Beta</beta>', link: '/encyclopedia/Beta/WhatBeta', collapsed: true, items: [
//         { text: '🔷 <beta>BetaExamples</beta>', link: '/encyclopedia/Beta/BetaExamples' },
//         { text: '🔷 <beta>BetaLingo</beta>', link: '/encyclopedia/Beta/BetaLingo/Overview' },
//         { text: '🔷 <beta>BetaDiagram</beta>', link: '/encyclopedia/Beta/BetaDiagram' },
//         {
//           text: '🔷 <beta>Plantbeta</beta>', link: '/encyclopedia/Beta/Plantbeta/Overview', collapsed: true, items: [
//             { text: '🔷 <beta>BetaElement</beta>', link: '/encyclopedia/Beta/Plantbeta/BetaElement' },
//             { text: '🔷 <beta>BetaMethod</beta>', link: '/encyclopedia/Beta/Plantbeta/BetaMethod' },
//             { text: '🔷 <beta>BetaBlock</beta>', link: '/encyclopedia/Beta/Plantbeta/BetaBlock' },
//           ]
//         },
//         {
//           text: '🔷 <beta>BetaScore</beta>', link: '/encyclopedia/Beta/BetaScore/Overview', collapsed: true, items: [
//             { text: '🔷 <beta>BetaExecutionScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaExecutionScore' },
//             {
//               text: '🔷 <beta>BetaTheoriaScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaTheoriaScore/Overview', collapsed: true, items: [
//                 { text: '🔷 <beta>BetaTeknikScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaTheoriaScore/BetaTeknikScore' },
//                 { text: '🔷 <beta>BetaProbabilityScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaTheoriaScore/BetaProbabilityScore' },
//                 { text: '🔷 <beta>BetaKratosScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaTheoriaScore/BetaKratosScore' }
//               ]
//             }
//           ]
//         },
//         {
//           text: '🔷 <beta>BetaTheoria</beta>', link: '/encyclopedia/Beta/BetaTheoria/Overview', collapsed: true, items: [
//             { text: '🔷 <beta>BetaTeknik</beta>', link: '/encyclopedia/Beta/BetaTheoria/BetaTeknik' },
//             { text: '🔷 <beta>BetaKratos</beta>', link: '/encyclopedia/Beta/BetaTheoria/BetaKratos' },
//             { text: '🔷 <beta>BetaProbability</beta>', link: '/encyclopedia/Beta/BetaTheoria/BetaProbability' }
//           ]
//         },
//         {
//           text: '🔷 <beta>BetaVideo</beta>', link: '/encyclopedia/Beta/BetaVideo/Overview', collapsed: true, items: [
//           ]
//         },
//       ]
//     },
//     // #Eko
//     {
//       text: '🟩 <eko>Eko</eko>', collapsed: true, link: '/encyclopedia/Eko/EkoOverview', items: [
//         {
//           text: '🔷 <eko>Eko Theoria</eko>', link: '/encyclopedia/Eko/EkoTheoria', collapsed: true, items: [
//             { text: '🟩 <eko>EcoTeknik</eko>', link: '/encyclopedia/Eko/EcoTheoria/EcoTeknik' },
//             { text: '🟩 <eko>EcoKratos</eko>', link: '/encyclopedia/Eko/EcoTheoria/EcoKratos' },
//             { text: '🟩 <eko>EcoProbability</eko>', link: '/encyclopedia/Eko/EcoTheoria/EcoProbability' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Animals</eko>', link: '/encyclopedia/Eko/Animals/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '🟩 <eko>Atmosphere</eko>', link: '/encyclopedia/Eko/Atmosphere/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>AirTemperature</eko>', link: '/encyclopedia/Eko/Atmosphere/AirTemperature' },
//             { text: '🟩 <eko>Humidity</eko>', link: '/encyclopedia/Eko/Atmosphere/Humidity' },
//             { text: '🟩 <eko>Precipitation</eko>', link: '/encyclopedia/Eko/Atmosphere/Precipitation' },
//             { text: '🟩 <eko>Wind</eko>', link: '/encyclopedia/Eko/Atmosphere/Wind' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Block</eko>', link: '/encyclopedia/Eko/Block/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>FillBlock</eko>', link: '/encyclopedia/Eko/Block/FillBlock' },
//             { text: '🟩 <eko>Road</eko>', link: '/encyclopedia/Eko/Block/Road' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Density</eko>', link: '/encyclopedia/Eko/Density/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>Plot</eko>', link: '/encyclopedia/Eko/Density/Plot' },
//           ]
//         },
//         {
//           text: '🟩 <eko>LandSpeed</eko>', link: '/encyclopedia/Eko/LandSpeed/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>FastLand</eko>', link: '/encyclopedia/Eko/LandSpeed/FastLand' },
//             { text: '🟩 <eko>SlowLand</eko>', link: '/encyclopedia/Eko/LandSpeed/SlowLand' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Obstacle</eko>', link: '/encyclopedia/Eko/Obstacle/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>HoleObstacle</eko>', link: '/encyclopedia/Eko/Obstacle/HoleObstacle' },
//             { text: '🟩 <eko>LogObstacle</eko>', link: '/encyclopedia/Eko/Obstacle/LogObstacle' },
//             { text: '🟩 <eko>MicrositeObstacle</eko>', link: '/encyclopedia/Eko/Obstacle/MicrositeObstacle' },
//             { text: '🟩 <eko>RockObstacle</eko>', link: '/encyclopedia/Eko/Obstacle/RockObstacle' },
//             { text: '🟩 <eko>StumpObstacle</eko>', link: '/encyclopedia/Eko/Obstacle/StumpObstacle' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Piece</eko>', link: '/encyclopedia/Eko/Piece/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>PieceTopography</eko>', link: '/encyclopedia/Eko/Piece/PieceTopography' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Prep</eko>', link: '/encyclopedia/Eko/Prep/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>MoundLand</eko>', link: '/encyclopedia/Eko/Prep/MoundLand' },
//             { text: '🟩 <eko>TrenchLand</eko>', link: '/encyclopedia/Eko/Prep/TrenchLand' },
//             { text: '🟩 <eko>DeactivatedRoad</eko>', link: '/encyclopedia/Eko/Prep/TrenchLand' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Raw</eko>', link: '/encyclopedia/Eko/Raw/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>StumpLand</eko>', link: '/encyclopedia/Eko/Raw/StumpLand' },
//             { text: '🟩 <eko>BurntLand</eko>', link: '/encyclopedia/Eko/Raw/BurntLand' },
//             { text: '🟩 <eko>RiparianLand</eko>', link: '/encyclopedia/Eko/Raw/RiparianLand' },
//             { text: '🟩 <eko>RockyLand</eko>', link: '/encyclopedia/Eko/Raw/RockyLand' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Slash</eko>', link: '/encyclopedia/Eko/Slash/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>BurnPileSlash</eko>', link: '/encyclopedia/Eko/Slash/BurnPileSlash' },
//             { text: '🟩 <eko>HighSlash</eko>', link: '/encyclopedia/Eko/Slash/HighSlash' },
//             { text: '🟩 <eko>LowSlash</eko>', link: '/encyclopedia/Eko/Slash/LowSlash' },
//             { text: '🟩 <eko>WetSlash</eko>', link: '/encyclopedia/Eko/Slash/WetSlash' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Soil</eko>', link: '/encyclopedia/Eko/Soil/Overview', collapsed: true, items: [
//             { text: '🟩 <eko>Hole</eko>', link: '/encyclopedia/Eko/Soil/Hole' },
//             { text: '🟩 <eko>ClaySoil</eko>', link: '/encyclopedia/Eko/Soil/ClaySoil' },
//             { text: '🟩 <eko>DrySoil</eko>', link: '/encyclopedia/Eko/Soil/DrySoil' },
//             { text: '🟩 <eko>GravelSoil</eko>', link: '/encyclopedia/Eko/Soil/GravelSoil' },
//             { text: '🟩 <eko>MineralSoil</eko>', link: '/encyclopedia/Eko/Soil/MineralSoil' },
//             { text: '🟩 <eko>RedRot</eko>', link: '/encyclopedia/Eko/Soil/RedRot' },
//             { text: '🟩 <eko>SandSoil</eko>', link: '/encyclopedia/Eko/Soil/SandSoil' },
//             { text: '🟩 <eko>WetSoil</eko>', link: '/encyclopedia/Eko/Soil/WetSoil' },
//           ]
//         },
//         {
//           text: '🟩 <eko>Sun</eko>', link: '/encyclopedia/Eko/Sun/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '🟩 <eko>Plants</eko>', link: '/encyclopedia/Eko/Plants/Overview', collapsed: true, items: [
//           ]
//         },
//       ]
//     },
//     // #Move
//     {
//       text: '🟠 <move>Move</move>', link: '/encyclopedia/Move/MotoOverview', collapsed: true, items: [
//         { text: '🟠 <move>Phrase</move>', link: '/encyclopedia/Move/Phrase/Overview' },
//         {
//           text: '🟠 <move>Move THEORIA</move>', link: '/encyclopedia/Move/MotoTheoria/Overview', collapsed: true, items: [
//             { text: '🟠 <move>MotoTeknik</move>', link: '/encyclopedia/Move/MotoTheoria/MotoTeknik' },
//             { text: '🟠 <move>MotoKratos</move>', link: '/encyclopedia/Move/MotoTheoria/MotoKratos' },
//             { text: '🟠 <move>MotoProbability</move>', link: '/encyclopedia/Move/MotoTheoria/MotoProbability' },
//           ],
//         },
//         {
//           text: '🟠 <move>MotoGeometry</move>', collapsed: true, items: [
//             { text: '🟠 <move>Overview</move>', link: '/encyclopedia/Move/MotoGeometry/Overview' },
//             { text: '🟠 <move>MotoPoint</move>', link: '/encyclopedia/Move/MotoGeometry/MotoPoint' },
//             { text: '🟠 <move>MotoCurve</move>', link: '/encyclopedia/Move/MotoGeometry/MotoCurve' },
//             { text: '🟠 <move>MotoSpace</move>', link: '/encyclopedia/Move/MotoGeometry/MotoSpace' },
//             { text: '🟠 <move>MotoSurface</move>', link: '/encyclopedia/Move/MotoGeometry/MotoSurface' },
//           ]
//         },
//         {
//           text: '🟠 <move>ArmMoto</move>', link: '/encyclopedia/Move/ArmMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Arm Phrase</move>', link: '/encyclopedia/Move/ArmMoto/Phrase/Overview' },
//             { text: '🟠 <move>ArmProp</move>', link: '/encyclopedia/Move/ArmMoto/ArmProp' },
//             { text: '🟠 <move>ArmSwing</move>', link: '/encyclopedia/Move/ArmMoto/ArmSwing' },
//             { text: '🟠 <move>ArmWalk</move>', link: '/encyclopedia/Move/ArmMoto/ArmWalk' },
//             { text: '🟠 <move>ArmBalance</move>', link: '/encyclopedia/Move/ArmMoto/ArmBalance' },
//           ]
//         },
//         {
//           text: '🟠 <move>BodyMoto</move>', link: '/encyclopedia/Move/BodyMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Body Phrase</move>', link: '/encyclopedia/Move/BodyMoto/Phrase/Overview' },
//             { text: '🟠 <move>BodyAbsorb</move>', link: '/encyclopedia/Move/BodyMoto/BodyAbsorb' },
//             { text: '🟠 <move>BodyBend</move>', link: '/encyclopedia/Move/BodyMoto/BodyBend' },
//             { text: '🟠 <move>BodyLean</move>', link: '/encyclopedia/Move/BodyMoto/BodyLean' },
//             { text: '🟠 <move>BodyRevolve</move>', link: '/encyclopedia/Move/BodyMoto/BodyRevolve' },
//             { text: '🟠 <move>BodyRotate</move>', link: '/encyclopedia/Move/BodyMoto/BodyRotate' },
//             { text: '🟠 <move>BodySlot</move>', link: '/encyclopedia/Move/BodyMoto/BodySlot' },
//             { text: '🟠 <move>Fall</move>', link: '/encyclopedia/Move/BodyMoto/Fall' },
//           ]
//         },
//         {
//           text: '🟠 <move>CacheMoto</move>', link: '/encyclopedia/Move/CacheMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Cache Phrase</move>', link: '/encyclopedia/Move/CacheMoto/Phrase/Overview' },
//             { text: '🟠 <move>Eating</move>', link: '/encyclopedia/Move/CacheMoto/Eating' },
//             { text: '🟠 <move>TarpOff</move>', link: '/encyclopedia/Move/CacheMoto/TarpOff' },
//             { text: '🟠 <move>TarpOn</move>', link: '/encyclopedia/Move/CacheMoto/TarpOn' },
//           ]
//         },
//         {
//           text: '🟠 <move>ClothingMoto</move>', link: '/encyclopedia/Move/ClothingMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Clothing Phrase</move>', link: '/encyclopedia/Move/ClothingMoto/Phrase/Overview' },
//             { text: '🟠 <move>Button</move>', link: '/encyclopedia/Move/ClothingMoto/Button' },
//             { text: '🟠 <move>ClothingLayer</move>', link: '/encyclopedia/Move/ClothingMoto/ClothingLayer' },
//             { text: '🟠 <move>RemoveMud</move>', link: '/encyclopedia/Move/ClothingMoto/RemoveMud' },
//             { text: '🟠 <move>ZipperMoto</move>', link: '/encyclopedia/Move/ClothingMoto/ZipperMoto' },
//           ]
//         },
//         {
//           text: '🟠 <move>FootMoto</move>', link: '/encyclopedia/Move/FootMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Foot Phrase</move>', link: '/encyclopedia/Move/FootMoto/Phrase/Overview' },
//             { text: '🟠 <move>FootArchSmear</move>', link: '/encyclopedia/Move/FootMoto/FootArchSmear' },
//             { text: '🟠 <move>FootClose</move>', link: '/encyclopedia/Move/FootMoto/FootClose' },
//             { text: '🟠 <move>FootDig</move>', link: '/encyclopedia/Move/FootMoto/FootDig' },
//             { text: '🟠 <move>FootDorsiflexion</move>', link: '/encyclopedia/Move/FootMoto/FootDorsiflexion' },
//             { text: '🟠 <move>FootDrag</move>', link: '/encyclopedia/Move/FootMoto/FootDrag' },
//             { text: '🟠 <move>FootEversion</move>', link: '/encyclopedia/Move/FootMoto/FootEversion' },
//             { text: '🟠 <move>FootInversion</move>', link: '/encyclopedia/Move/FootMoto/FootInversion' },
//             { text: '🟠 <move>FootScreef</move>', link: '/encyclopedia/Move/FootMoto/FootScreef' },
//             { text: '🟠 <move>PlantarFlexion</move>', link: '/encyclopedia/Move/FootMoto/PlantarFlexion' },
//           ]
//         },
//         {
//           text: '🟠 <move>HandMoto</move>', link: '/encyclopedia/Move/HandMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Hand Phrase</move>', link: '/encyclopedia/Move/HandMoto/Phrase/Overview' },
//             { text: '🟠 <move>BagGrip</move>', link: '/encyclopedia/Move/HandMoto/BagGrip' },
//             { text: '🟠 <move>BoxGrip</move>', link: '/encyclopedia/Move/HandMoto/BoxGrip' },
//             { text: '🟠 <move>BranchGrip</move>', link: '/encyclopedia/Move/HandMoto/BranchGrip' },
//             { text: '🟠 <move>BranchSnapGrip</move>', link: '/encyclopedia/Move/HandMoto/BranchSnapGrip' },
//             { text: '🟠 <move>HandClose</move>', link: '/encyclopedia/Move/HandMoto/HandClose' },
//             { text: '🟠 <move>HandPoke</move>', link: '/encyclopedia/Move/HandMoto/HandPoke' },
//             { text: '🟠 <move>HandScreef</move>', link: '/encyclopedia/Move/HandMoto/HandScreef' },
//             { text: '🟠 <move>SpadeHandleGrip</move>', link: '/encyclopedia/Move/HandMoto/SpadeHandleGrip' },
//             { text: '🟠 <move>SpadeShaftGrip</move>', link: '/encyclopedia/Move/HandMoto/SpadeShaftGrip' },
//             { text: '🟠 <move>TreeGrip</move>', link: '/encyclopedia/Move/HandMoto/TreeGrip' },
//             { text: '🟠 <move>TreeTestGrip</move>', link: '/encyclopedia/Move/HandMoto/TreeTestGrip' },
//           ]
//         },
//         {
//           text: '🟠 <move>HeadMoto</move>', link: '/encyclopedia/Move/HeadMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Head Phrase</move>', link: '/encyclopedia/Move/HeadMoto/Phrase/Overview' },
//             { text: '🟠 <move>FocusLook</move>', link: '/encyclopedia/Move/HeadMoto/FocusLook' },
//             { text: '🟠 <move>HeadProtraction</move>', link: '/encyclopedia/Move/HeadMoto/HeadProtraction' },
//             { text: '🟠 <move>HeadRetraction</move>', link: '/encyclopedia/Move/HeadMoto/HeadRetraction' },
//             { text: '🟠 <move>HeadTiltIntoWind</move>', link: '/encyclopedia/Move/HeadMoto/HeadTiltIntoWind' },
//             { text: '🟠 <move>Hearing</move>', link: '/encyclopedia/Move/HeadMoto/Hearing' },
//             { text: '🟠 <move>LookAway</move>', link: '/encyclopedia/Move/HeadMoto/LookAway' },
//             { text: '🟠 <move>NeckExtension</move>', link: '/encyclopedia/Move/HeadMoto/NeckExtension' },
//           ]
//         },
//         {
//           text: '🟠 <move>HoleMoto</move>', link: '/encyclopedia/Move/HoleMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Hole Phrase</move>', link: '/encyclopedia/Move/HoleMoto/Phrase/Overview' },
//             { text: '🟠 <move>HoleClose</move>', link: '/encyclopedia/Move/HoleMoto/HoleClose' },
//             { text: '🟠 <move>HoleExpand</move>', link: '/encyclopedia/Move/HoleMoto/HoleExpand' },
//             { text: '🟠 <move>HoleOpen</move>', link: '/encyclopedia/Move/HoleMoto/HoleOpen' },
//           ]
//         },
//         {
//           text: '🟠 <move>LegMoto</move>', link: '/encyclopedia/Move/LegMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Leg Phrase</move>', link: '/encyclopedia/Move/LegMoto/Phrase/Overview' },
//             { text: '🟠 <move>Crouch</move>', link: '/encyclopedia/Move/LegMoto/Overview' },
//             { text: '🟠 <move>Jump</move>', link: '/encyclopedia/Move/LegMoto/Jump' },
//             { text: '🟠 <move>Kneel</move>', link: '/encyclopedia/Move/LegMoto/Kneel' },
//             { text: '🟠 <move>LegAbduction</move>', link: '/encyclopedia/Move/LegMoto/LegAbduction' },
//             { text: '🟠 <move>LegAbsorb</move>', link: '/encyclopedia/Move/LegMoto/LegAbsorb' },
//             { text: '🟠 <move>LegAdduction</move>', link: '/encyclopedia/Move/LegMoto/LegAdduction' },
//             { text: '🟠 <move>LegFlap</move>', link: '/encyclopedia/Move/LegMoto/LegFlap' },
//             { text: '🟠 <move>LegFlexion</move>', link: '/encyclopedia/Move/LegMoto/LegFlexion' },
//             { text: '🟠 <move>LegProp</move>', link: '/encyclopedia/Move/LegMoto/LegProp' },
//             { text: '🟠 <move>LegSidebagLift</move>', link: '/encyclopedia/Move/LegMoto/LegSidebagLift' },
//             { text: '🟠 <move>LegSwing</move>', link: '/encyclopedia/Move/LegMoto/LegSwing' },
//             { text: '🟠 <move>RunningStart</move>', link: '/encyclopedia/Move/LegMoto/RunningStart' },
//             { text: '🟠 <move>Step</move>', link: '/encyclopedia/Move/LegMoto/Step' },
//             { text: '🟠 <move>Stomp</move>', link: '/encyclopedia/Move/LegMoto/Stomp' },
//           ]
//         },
//         {
//           text: '🟠 <move>PlantMoto</move>', link: '/encyclopedia/Move/PlantMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <move>BranchMoto</move>', link: '/encyclopedia/Move/PlantMoto/BranchMoto' },
//             { text: '🟠 <move>BranchWhip</move>', link: '/encyclopedia/Move/PlantMoto/BranchWhip' },
//             { text: '🟠 <move>Bush</move>', link: '/encyclopedia/Move/PlantMoto/Bush' },
//             { text: '🟠 <move>Log</move>', link: '/encyclopedia/Move/PlantMoto/Log' },
//             { text: '🟠 <move>SlashPile</move>', link: '/encyclopedia/Move/PlantMoto/SlashPile' },
//             { text: '🟠 <move>Stump</move>', link: '/encyclopedia/Move/PlantMoto/Stump' },
//           ]
//         },
//         {
//           text: '🟠 <move>Screef</move>', link: '/encyclopedia/Move/Screef/Overview', collapsed: true, items: [
//             { text: '🟠 <move>BootScreef</move>', link: '/encyclopedia/Move/ToolMoto/Boot/BootScreef' },
//             { text: '🟠 <move>HandScreef</move>', link: '/encyclopedia/Move/HandMoto/HandScreef' },
//             { text: '🟠 <move>SpadeScreef</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeScreef' },
//           ]
//         },
//         {
//           text: '🟠 <move>ToolMoto</move>', link: '/encyclopedia/Move/ToolMoto/Overview', collapsed: true, items: [
//             {
//               text: '🟠 <move>Bag</move>', link: '/encyclopedia/Move/ToolMoto/Bag/Overview', collapsed: true, items: [
//                 { text: '🟠 <move>BagGrip</move>', link: '/encyclopedia/Move/ToolMoto/Bag/BagGrip' },
//                 { text: '🔷 <move>Bag Phrase</move>', link: '/encyclopedia/Move/ToolMoto/Bag/Phrase/Overview' },
//                 { text: '🟠 <move>BagAdjustment</move>', link: '/encyclopedia/Move/ToolMoto/Bag/BagAdjustment' },
//                 { text: '🟠 <move>BagDeadlift</move>', link: '/encyclopedia/Move/ToolMoto/Bag/BagDeadlift' },
//                 { text: '🟠 <move>BagEmpty</move>', link: '/encyclopedia/Move/ToolMoto/Bag/BagEmpty' },
//                 { text: '🟠 <move>BaggingUp</move>', link: '/encyclopedia/Move/ToolMoto/Bag/BaggingUp' },
//                 { text: '🟠 <move>BagOff</move>', link: '/encyclopedia/Move/ToolMoto/Bag/BagOff' },
//                 { text: '🟠 <move>BagOn</move>', link: '/encyclopedia/Move/ToolMoto/Bag/BagOn' },
//                 { text: '🟠 <move>BagSlide</move>', link: '/encyclopedia/Move/ToolMoto/Bag/BagSlide' },
//               ]
//             },
//             {
//               text: '🟠 <move>Boot</move>', link: '/encyclopedia/Move/ToolMoto/Boot/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Boot Phrase</move>', link: '/encyclopedia/Move/ToolMoto/Boot/Phrase/Overview' },
//                 { text: '🟠 <move>BootGrip</move>', link: '/encyclopedia/Move/ToolMoto/Boot/BootGrip' },
//                 { text: '🟠 <move>BootScreef</move>', link: '/encyclopedia/Move/ToolMoto/Boot/BootScreef' },
//                 { text: '🟠 <move>LaceKnot</move>', link: '/encyclopedia/Move/ToolMoto/Boot/LaceKnot' },
//               ]
//             },
//             {
//               text: '🟠 <move>Box</move>', link: '/encyclopedia/Move/ToolMoto/Box/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Box Phrase</move>', link: '/encyclopedia/Move/ToolMoto/Box/Phrase/Overview' },
//                 { text: '🟠 <move>BoxGrip</move>', link: '/encyclopedia/Move/ToolMoto/Box/BoxGrip' },
//               ]
//             },
//             {
//               text: '🟠 <move>Bundle</move>', link: '/encyclopedia/Move/ToolMoto/Bundle/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Bundle Phrase</move>', link: '/encyclopedia/Move/ToolMoto/Bundle/Phrase/Overview' },
//                 { text: '🟠 <move>BundleGrip</move>', link: '/encyclopedia/Move/ToolMoto/Bundle/BundleGrip' },
//                 { text: '🟠 <move>BundlePeel</move>', link: '/encyclopedia/Move/ToolMoto/Bundle/BundlePeel' },
//               ]
//             },
//             {
//               text: '🟠 <move>Carabiner</move>', link: '/encyclopedia/Move/ToolMoto/Carabiner/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <move>Flag</move>', link: '/encyclopedia/Move/ToolMoto/Flag/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Flag Phrase</move>', link: '/encyclopedia/Move/ToolMoto/Flag/Phrase/Overview' },
//                 { text: '🟠 <move>FlagGrip</move>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagGrip' },
//                 { text: '🟠 <move>FlagKnot</move>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagKnot' },
//                 { text: '🟠 <move>FlagReload</move>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagReload' },
//                 { text: '🟠 <move>FlagRip</move>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagRip' },
//                 { text: '🟠 <move>FlagRoll</move>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagRoll' },
//               ]
//             },
//             {
//               text: '🟠 <move>Gaiter</move>', link: '/encyclopedia/Move/ToolMoto/Gaiter/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Gaiter Phrase</move>', link: '/encyclopedia/Move/ToolMoto/Gaiter/Phrase/Overview' },
//                 { text: '🟠 <move>GaiterGrip</move>', link: '/encyclopedia/Move/ToolMoto/Gaiter/GaiterGrip' },
//                 { text: '🟠 <move>GaiterOn</move>', link: '/encyclopedia/Move/ToolMoto/Gaiter/GaiterOn' },
//                 { text: '🟠 <move>GaiterOff</move>', link: '/encyclopedia/Move/ToolMoto/Gaiter/GaiterOff' },
//               ]
//             },
//             {
//               text: '🟠 <move>Glove</move>', link: '/encyclopedia/Move/ToolMoto/Glove/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Glove Phrase</move>', link: '/encyclopedia/Move/ToolMoto/Glove/Phrase/Overview' },
//                 { text: '🟠 <move>GloveGrip</move>', link: '/encyclopedia/Move/ToolMoto/Glove/GloveGrip' },
//               ]
//             },
//             {
//               text: '🟠 <move>Kit</move>', link: '/encyclopedia/Move/ToolMoto/Kit/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <move>Rope</move>', link: '/encyclopedia/Move/ToolMoto/Rope/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <move>Spade</move>', link: '/encyclopedia/Move/ToolMoto/Spade/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Spade Phrase</move>', link: '/encyclopedia/Move/ToolMoto/Spade/Phrase/Overview' },
//                 { text: '🟠 <move>SpadeAmble</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeAmble' },
//                 { text: '🟠 <move>SpadeAnchor</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeAnchor' },
//                 { text: '🟠 <move>SpadeChop</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeChop' },
//                 { text: '🟠 <move>SpadeCone</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeCone' },
//                 { text: '🟠 <move>SpadeDrag</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeDrag' },
//                 { text: '🟠 <move>SpadeGrip</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeGrip' },
//                 { text: '🟠 <move>SpadeJavelin</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeJavelin' },
//                 { text: '🟠 <move>SpadePendulum</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadePendulum' },
//                 { text: '🟠 <move>SpadePogo</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadePogo' },
//                 { text: '🟠 <move>SpadePoke</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadePoke' },
//                 { text: '🟠 <move>SpadePost</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadePost' },
//                 { text: '🟠 <move>SpadeProp</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeProp' },
//                 { text: '🟠 <move>SpadeRotate</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeRotate' },
//                 { text: '🟠 <move>SpadeScreef</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeScreef' },
//                 { text: '🟠 <move>SpadeSlam</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeSlam' },
//                 { text: '🟠 <move>SpadeStall</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeStall' },
//                 { text: '🟠 <move>SpadeStomp</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeStomp' },
//                 { text: '🟠 <move>SpadeSwing</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeSwing' },
//                 { text: '🟠 <move>SpadeTest</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeTest' },
//                 { text: '❌ <move>SpadeError</move>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeError' },
//               ]
//             },
//             {
//               text: '🟠 <move>Staff</move>', link: '/encyclopedia/Move/ToolMoto/Staff/Overview', collapsed: true, items: [
//                 { text: '🟠 <move>StaffAmble</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffAmble' },
//                 { text: '🟠 <move>StaffAmble</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffAmble' },
//                 { text: '🟠 <move>StaffAnchor</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffAnchor' },
//                 { text: '🟠 <move>StaffBridge</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffBridge' },
//                 { text: '🟠 <move>StaffBump</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffBump' },
//                 { text: '🟠 <move>StaffChop</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffChop' },
//                 { text: '🟠 <move>StaffCone</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffCone' },
//                 { text: '🟠 <move>StaffDrag</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffDrag' },
//                 { text: '🟠 <move>StaffGrip</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffGrip' },
//                 { text: '🟠 <move>StaffMatch</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffMatch' },
//                 { text: '🟠 <move>StaffPendulum</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPendulum' },
//                 { text: '🟠 <move>StaffPogo</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPogo' },
//                 { text: '🟠 <move>StaffPoke</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPoke' },
//                 { text: '🟠 <move>StaffPost</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPost' },
//                 { text: '🟠 <move>StaffProp</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffProp' },
//                 { text: '🟠 <move>StaffPost</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPost' },
//                 { text: '🟠 <move>StaffRotate</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffRotate' },
//                 { text: '🟠 <move>StaffScreef</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffScreef' },
//                 { text: '🟠 <move>StaffSlam</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffSlam' },
//                 { text: '🟠 <move>StaffSlap</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffSlap' },
//                 { text: '🟠 <move>StaffSlide</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffSlide' },
//                 { text: '🟠 <move>StaffStall</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffStall' },
//                 { text: '🟠 <move>StaffStomp</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffStomp' },
//                 { text: '🟠 <move>StaffSwing</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffSwing' },
//                 { text: '❌ <move>StaffError</move>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffError' },
//               ]
//             }
//           ]
//         },
//         {
//           text: '🟠 <move>Truck</move>', link: '/encyclopedia/Move/TruckMoto/Overview', collapsed: true, items: [
//             { text: '🔷 <move>Truck Phrase</move>', link: '/encyclopedia/Move/TruckMoto/Phrase/Overview' },
//             { text: '🟠 <move>Sleep</move>', link: '/encyclopedia/Move/TruckMoto/Sleep' },
//             { text: '🟠 <move>Sit</move>', link: '/encyclopedia/Move/TruckMoto/Sit' },
//           ]
//         },
//         { text: '🟠 <move>Kinesiology</move>', link: '/encyclopedia/Move/Kinesiology/KinesiologyOverview' },
//       ],
//     },
//     // #Via
//     {
//       text: '🔻 <via>Via</via>', link: '/encyclopedia/Via/ViaOverview', collapsed: true, items: [
//         { text: '🔷 <via>Via Sequence</via>', link: '/encyclopedia/Via/ViaSequence/Overview' },
//         { text: '🔷 <via>Via Theoria</via>', link: '/encyclopedia/Via/ViaTheoria' },
//         {
//           text: '🔻 <via>ViaGeometry</via>', link: '/encyclopedia/Via/ViaGeometry/Overview', collapsed: true, items: [
//             {
//               text: '🔻 <via>ViaPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/Overview', collapsed: true, items: [
//                 { text: '🔻 <via>Viewpoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/Viewpoint' },
//                 { text: '🔻 <via>CenterPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/CenterPoint' },
//                 { text: '🔻 <via>InflectionPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/InflectionPoint' },
//                 { text: '🔻 <via>Midpoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/MidPoint' },
//                 { text: '🔻 <via>ReferencePoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/ReferencePoint' },
//                 { text: '🔻 <via>ReflectionPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
//                 { text: '🔻 <via>TargetPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/TargetPoint' },
//               ]
//             },
//             {
//               text: '🔻 <via>ViaCurve</via>', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/Overview', collapsed: true, items: [
//                 { text: '🔻 <via>AroundCurve</via>', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/CircumventCurve' },
//                 { text: '🔻 <via>GhostLine</via>', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/GhostLine' },
//                 { text: '🔻 <via>ParallelCurve</via>', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/ParallelCurve' },
//                 { text: '🔻 <via>PerimeterCurve</via>', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/PerimeterCurve' },
//                 { text: '🔻 <via>SpiralCurve</via>', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/SpiralCurve' },
//                 { text: '🔻 <via>TurnAroundCurve</via>', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/TurnAroundCurve' },
//                 { text: '🔻 <via>ZigzagCurve</via>', link: '/encyclopedia/Via/ViaGeometry/ViaCurve/ZigzagCurve' },
//               ]
//             },
//             {
//               text: '🔻 <via>ViaSpace</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/Overview', collapsed: true, items: [
//                 { text: '🔻 <via>MaximumSpacing</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
//                 { text: '🔻 <via>MinimumSpacing</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
//                 { text: '🔻 <via>OptimalSpacing</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
//                 { text: '🔻 <via>ElasticSpacing</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
//                 { text: '🔻 <via>SpacingOnSlope</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
//               ]
//             },
//             {
//               text: '🔻 <via>ViaSurface</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSurface/Overview', collapsed: true, items: [
//                 { text: '🔻 <via>ViaSurface Texture</via>', link: '/encyclopedia/Via/ViaSurface/ViaSurfaceTexture' },
//               ]
//             },
//           ]
//         },
//         {
//           text: '🔻 <via>Via Problem</via>', link: '/encyclopedia/Via/ViaProblem/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '🔻 <via>Via Theorem</via>', link: '/encyclopedia/Via/ViaTheorem/Overview', collapsed: true, items: [
//             {
//               text: '🔻 <via>Cover Algorithms</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/Overview', collapsed: true, items: [
//                 { text: '🔻 <via>BoustroCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/BoustroCover' },
//                 { text: '🔻 <via>CircleCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/CircleCover' },
//                 { text: '🔻 <via>DiamondCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/DiamondCover' },
//                 { text: '🔻 <via>SquareCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/SquareCover' },
//                 { text: '🔻 <via>TriangleCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/TriangleCover' },
//                 { text: '🔻 <via>ChunkCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/ChunkCover' },
//                 { text: '🔻 <via>BackCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/BackCover' },
//                 { text: '🔻 <via>OpenEndedCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/OpenEndedCover' },
//                 { text: '🔻 <via>PerimeterCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/PerimeterCover' },
//                 { text: '🔻 <via>TypewriterCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/TypewriterCover' },
//               ]
//             },
//             {
//               text: '🔻 <via>ObstacleCover</via>', link: '/encyclopedia/Via/ViaTheorem/ObstacleCover/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🔻 <via>TeamCover</via>', collapsed: true, items: [
//                 { text: '🔻 <via>TeamPlant Overview</via>', link: '/encyclopedia/Via/ViaTheorem/TeamCover/Overview' },
//                 { text: '🔻 <via>BouncingCover</via>', link: '/encyclopedia/Via/ViaTheorem/TeamCover/BouncingCover' },
//                 { text: '🔻 <via>CrossingCover</via>', link: '/encyclopedia/Via/ViaTheorem/TeamCover/CrossingCover' },
//                 { text: '🔻 <via>FollowingCover</via>', link: '/encyclopedia/Via/ViaTheorem/TeamCover/FollowingCover' },
//               ]
//             },
//           ]
//         },
//         {
//           text: '🔻 <via>Flag</via>', link: '/encyclopedia/Via/Flag/Overview', collapsed: true, items: [
//             { text: '🔻 <via>BoundaryFlag</via>', link: '/encyclopedia/Via/Flag/BoundaryFlag' },
//             { text: '🔻 <via>FlagLocation</via>', link: '/encyclopedia/Via/Flag/FlagLocation' },
//             { text: '🔻 <via>HighFlag</via>', link: '/encyclopedia/Via/Flag/HighFlag' },
//             { text: '🔻 <via>LineInFlag</via>', link: '/encyclopedia/Via/Flag/LineInFlag' },
//             { text: '🔻 <via>NaturalFlag</via>', link: '/encyclopedia/Via/Flag/NaturalFlag' },
//             { text: '🔻 <via>TrenchExitFlag</via>', link: '/encyclopedia/Via/Flag/TrenchExitFlag' },
//             { text: '🔻 <via>WastedFlag</via>', link: '/encyclopedia/Via/Flag/WastedFlag' },
//           ]
//         },
//       ]
//     },
//     // #Psike
//     {
//       text: '💜 <psike>Psike</psike>', link: '/encyclopedia/Psike/NeuroOverview', collapsed: true, items: [
//         { text: '🔷 <psike>Psike Theoria</psike>', link: '/encyclopedia/Psike/NeuroTheoria' },
//         {
//           text: '💜 <psike>Arousal</psike>', link: '/encyclopedia/Psike/Arousal/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Attention</psike>', link: '/encyclopedia/Psike/Attention/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Audio</psike>', link: '/encyclopedia/Psike/Audio/Overview', collapsed: true, items: [
//             {
//               text: '💜 <psike>Music</psike>', link: '/encyclopedia/Psike/Audio/Music/Overview', collapsed: true, items: [
//                 { text: '💜 <psike>Playlists</psike>', link: '/encyclopedia/Psike/Audio/Music/Overview' },
//               ]
//             },
//             { text: '💜 <psike>BranchBreakSound</psike>', link: '/encyclopedia/Psike/Audio/BranchBreakSound' },
//             { text: '💜 <psike>LogBreakSound</psike>', link: '/encyclopedia/Psike/Audio/LogBreakSound' },
//             { text: '💜 <psike>SlashSound</psike>', link: '/encyclopedia/Psike/Audio/SlashSound' },
//             { text: '💜 <psike>SpadeSound</psike>', link: '/encyclopedia/Psike/Audio/SpadeSound' },
//             { text: '💜 <psike>SoilSound</psike>', link: '/encyclopedia/Psike/Audio/SoilSound' },
//           ]
//         },
//         {
//           text: '💜 <psike>Awareness</psike>', link: '/encyclopedia/Psike/Awareness/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Counting</psike>', link: '/encyclopedia/Psike/Counting/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Decision</psike>', collapsed: true, items: [
//             { text: '💜 <psike>GoOrNoGo</psike>', link: '/encyclopedia/Psike/Decision/GoOrNoGo' },
//             { text: '💜 <psike>MicrositeSelection</psike>', link: '/encyclopedia/Psike/Decision/MicrositeSelection' },
//           ]
//         },
//         {
//           text: '💜 <psike>Emotion</psike>', link: '/encyclopedia/Psike/Emotion/Overview', collapsed: true, items: [
//             { text: '💜 <psike>Anger</psike>', link: '/encyclopedia/Psike/Emotion/Anger' },
//             { text: '💜 <psike>Disgust</psike>', link: '/encyclopedia/Psike/Emotion/Disgust' },
//             { text: '💜 <psike>Fear</psike>', link: '/encyclopedia/Psike/Emotion/Fear' },
//             { text: '💜 <psike>Joy</psike>', link: '/encyclopedia/Psike/Emotion/Joy' },
//             { text: '💜 <psike>Sadness</psike>', link: '/encyclopedia/Psike/Emotion/Sadness' },
//           ]
//         },
//         {
//           text: '💜 <psike>Energy</psike>', link: '/encyclopedia/Psike/Energy/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Estimation</psike>', collapsed: true, items: [
//             { text: '💜 <psike>AreaEstimation</psike>', link: '/encyclopedia/Psike/Estimation/AreaEstimation' },
//             { text: '💜 <psike>BagCoverEstimation</psike>', link: '/encyclopedia/Psike/Estimation/BagCoverEstimation' },
//             { text: '💜 <psike>DistanceEstimation</psike>', link: '/encyclopedia/Psike/Estimation/DistanceEstimation' },
//             { text: '💜 <psike>TimeEstimation</psike>', link: '/encyclopedia/Psike/Estimation/TimeEstimation' },
//           ]
//         },
//         {
//           text: '💜 <psike>Event</psike>', link: '/encyclopedia/Psike/Event/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Homeostasis</psike>', link: '/encyclopedia/Psike/Homeostasis/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Memory</psike>', link: '/encyclopedia/Psike/Memory/Overview', collapsed: true, items: [
//             { text: '💜 <psike>WorkingMemory</psike>', link: '/encyclopedia/Psike/Memory/WorkingMemory' },
//             { text: '💜 <psike>ShortTermMemory</psike>', link: '/encyclopedia/Psike/Memory/ShortTermMemory' },
//             { text: '💜 <psike>LongTermMemory</psike>', link: '/encyclopedia/Psike/Memory/LongTermMemory' },
//             { text: '💜 <psike>NumberMemory</psike>', link: '/encyclopedia/Psike/Memory/NumberMemory' },
//             { text: '💜 <psike>ViaMemory</psike>', link: '/encyclopedia/Psike/Memory/ViaMemory' },
//           ]
//         },
//         {
//           text: '💜 <psike>Mindfulness</psike>', link: '/encyclopedia/Psike/Mindfulness/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Muscle</psike>', link: '/encyclopedia/Psike/Muscle/Overview', collapsed: true, items: [
//           ]
//         },
//         { text: '💜 <psike>Proprioception</psike>', link: '/encyclopedia/Psike/Proprioception/Overview' },
//         { text: '💜 <psike>Resilience</psike>', link: '/encyclopedia/Psike/Resilience/Overview' },
//         {
//           text: '💜 <psike>SpatialCognition</psike>', link: '/encyclopedia/Psike/SpatialCognition/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <psike>Time</psike>', link: '/encyclopedia/Psike/Time/Overview', collapsed: true, items: [
//             { text: '💜 <psike>BagUpTime</psike>', link: '/encyclopedia/Psike/Time/BagUpTime' },
//             { text: '💜 <psike>DailySchedule</psike>', link: '/encyclopedia/Psike/Time/DailySchedule' },
//             { text: '💜 <psike>MotoTiming</psike>', link: '/encyclopedia/Psike/Time/MotoTiming' },
//             { text: '💜 <psike>Planning</psike>', link: '/encyclopedia/Psike/Time/Planning' },
//             { text: '💜 <psike>Timer</psike>', link: '/encyclopedia/Psike/Time/Timer' },
//           ]
//         },
//         { text: '💜 <psike>Thermoception</psike>', link: '/encyclopedia/Psike/Thermoception' },
//       ]
//     },
//     { text: '📃 Glossary', link: '/encyclopedia/glossary/Glossary' },
//     { text: '📷 Media Database', link: '/encyclopedia/media/Overview' }
//   ]
// }

// // #Tutorial
// function sidebarTutorial() {
//   return [
//     { text: 'Tutorial Overview', link: '/tutorial/TutorialOverview' },
//     { text: 'Lesson Plans', link: '/tutorial/LessonPlans' },
//     { text: 'Video Tutorials Overview', link: '/tutorial/VideoTutorialsOverview' },
//     { text: 'Labelling', link: '/tutorial/Test_LabelDiagram' },
//     { text: 'Matching', link: '/tutorial/Test_Matching' },
//     { text: 'MultipleChoice', link: '/tutorial/Test_MultipleChoice' },
//     { text: 'Sequencing', link: '/tutorial/Test_Sequencing' },
//     { text: 'Go to Reference', link: '/encyclopedia/Overview' },
//   ]
// }

// function sidebarExamples() {
//   return [
//     { text: 'Examples Overview', link: '/examples/Overview' },
//     { text: 'Go to Tutorial', link: '/tutorial/TutorialOverview' },
//   ]
// }

// function sidebarApp() {
//   return [
//     {
//       text: 'App', link: '/app/Overview', collapsed: false, items: [
//         { text: 'BetaCard', link: '/app/BetaCard' },
//         { text: 'BetaDataAnalysis', link: '/app/BetaDataAnalysis' },
//         { text: 'BetaEditor', link: '/app/BetaEditor' },
//         { text: 'BetaGraph', link: '/app/BetaGraph' },
//         { text: 'BetaParser', link: '/app/BetaParser' },
//         { text: 'BetaStringer', link: '/app/BetaStringer' },
//         { text: 'BetaTranscriber', link: '/app/BetaTranscriber' },
//       ]
//     },
//   ]
// }
