import { defineConfig } from 'vitepress'

export default defineConfig({

  cleanUrls: true,
  lang: 'en-US',
  title: 'PlantaBeta',
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

    // siteTitle: 'PlantaBeta',
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
//         { text: '<move>Move Graphics</move>', link: '/dev/Graphics/MoveGraphic' },
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
//       text: 'Plantor Guide', collapsed: false, items: [
//         { text: 'Potential Plantor', link: '/guide/Who/PotentialPlantor' },
//         { text: 'Novice Plantor', link: '/guide/Who/NovicePlantor' },
//         { text: 'Experienced Plantor', link: '/guide/Who/ExperiencedPlantor' },
//         { text: 'Plantor Supervisor', link: '/guide/Who/PlantorSupervisor' },
//         { text: 'Plantor Instructor', link: '/guide/Who/PlantorInstructor' }
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
//       text: '🟠 <move>Move</move>', link: '/encyclopedia/Move/MoveOverview', collapsed: true, items: [
//         { text: '🟠 <move>Frase</move>', link: '/encyclopedia/Move/Frase/Overview' },
//         {
//           text: '🟠 <move>Move THEORIA</move>', link: '/encyclopedia/Move/MoveTheoria/Overview', collapsed: true, items: [
//             { text: '🟠 <move>MoveTeknik</move>', link: '/encyclopedia/Move/MoveTheoria/MoveTeknik' },
//             { text: '🟠 <move>MoveKratos</move>', link: '/encyclopedia/Move/MoveTheoria/MoveKratos' },
//             { text: '🟠 <move>MoveProbability</move>', link: '/encyclopedia/Move/MoveTheoria/MoveProbability' },
//           ],
//         },
//         {
//           text: '🟠 <move>MoveGeometry</move>', collapsed: true, items: [
//             { text: '🟠 <move>Overview</move>', link: '/encyclopedia/Move/MoveGeometry/Overview' },
//             { text: '🟠 <move>MovePoint</move>', link: '/encyclopedia/Move/MoveGeometry/MovePoint' },
//             { text: '🟠 <move>MoveCurve</move>', link: '/encyclopedia/Move/MoveGeometry/MoveCurve' },
//             { text: '🟠 <move>MoveSpace</move>', link: '/encyclopedia/Move/MoveGeometry/MoveSpace' },
//             { text: '🟠 <move>MoveSurface</move>', link: '/encyclopedia/Move/MoveGeometry/MoveSurface' },
//           ]
//         },
//         {
//           text: '🟠 <move>ArmMove</move>', link: '/encyclopedia/Move/ArmMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Arm Frase</move>', link: '/encyclopedia/Move/ArmMove/Frase/Overview' },
//             { text: '🟠 <move>BrazoAma</move>', link: '/encyclopedia/Move/ArmMove/BrazoAma' },
//             { text: '🟠 <move>ArmKurve</move>', link: '/encyclopedia/Move/ArmMove/ArmKurve' },
//             { text: '🟠 <move>ArmWalk</move>', link: '/encyclopedia/Move/ArmMove/ArmWalk' },
//             { text: '🟠 <move>ArmBalance</move>', link: '/encyclopedia/Move/ArmMove/ArmBalance' },
//           ]
//         },
//         {
//           text: '🟠 <move>BodyMove</move>', link: '/encyclopedia/Move/BodyMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Body Frase</move>', link: '/encyclopedia/Move/BodyMove/Frase/Overview' },
//             { text: '🟠 <move>BodyAbsorb</move>', link: '/encyclopedia/Move/BodyMove/BodyAbsorb' },
//             { text: '🟠 <move>BodyBend</move>', link: '/encyclopedia/Move/BodyMove/BodyBend' },
//             { text: '🟠 <move>BodyLean</move>', link: '/encyclopedia/Move/BodyMove/BodyLean' },
//             { text: '🟠 <move>CorpoOrbit</move>', link: '/encyclopedia/Move/BodyMove/CorpoOrbit' },
//             { text: '🟠 <move>BodyRotate</move>', link: '/encyclopedia/Move/BodyMove/BodyRotate' },
//             { text: '🟠 <move>BodySlot</move>', link: '/encyclopedia/Move/BodyMove/BodySlot' },
//             { text: '🟠 <move>Fall</move>', link: '/encyclopedia/Move/BodyMove/Fall' },
//           ]
//         },
//         {
//           text: '🟠 <move>CacheMove</move>', link: '/encyclopedia/Move/CacheMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Cache Frase</move>', link: '/encyclopedia/Move/CacheMove/Frase/Overview' },
//             { text: '🟠 <move>Eating</move>', link: '/encyclopedia/Move/CacheMove/Eating' },
//             { text: '🟠 <move>TarpOff</move>', link: '/encyclopedia/Move/CacheMove/TarpOff' },
//             { text: '🟠 <move>TarpOn</move>', link: '/encyclopedia/Move/CacheMove/TarpOn' },
//           ]
//         },
//         {
//           text: '🟠 <move>ClothingMove</move>', link: '/encyclopedia/Move/ClothingMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Clothing Frase</move>', link: '/encyclopedia/Move/ClothingMove/Frase/Overview' },
//             { text: '🟠 <move>Button</move>', link: '/encyclopedia/Move/ClothingMove/Button' },
//             { text: '🟠 <move>ClothingLayer</move>', link: '/encyclopedia/Move/ClothingMove/ClothingLayer' },
//             { text: '🟠 <move>RemoveMud</move>', link: '/encyclopedia/Move/ClothingMove/RemoveMud' },
//             { text: '🟠 <move>ZipperMove</move>', link: '/encyclopedia/Move/ClothingMove/ZipperMove' },
//           ]
//         },
//         {
//           text: '🟠 <move>FootMove</move>', link: '/encyclopedia/Move/FootMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Foot Frase</move>', link: '/encyclopedia/Move/FootMove/Frase/Overview' },
//             { text: '🟠 <move>FootArchSmear</move>', link: '/encyclopedia/Move/FootMove/FootArchSmear' },
//             { text: '🟠 <move>FootSeal</move>', link: '/encyclopedia/Move/FootMove/FootSeal' },
//             { text: '🟠 <move>FootDig</move>', link: '/encyclopedia/Move/FootMove/FootDig' },
//             { text: '🟠 <move>FootDorsiflexion</move>', link: '/encyclopedia/Move/FootMove/FootDorsiflexion' },
//             { text: '🟠 <move>FootDrag</move>', link: '/encyclopedia/Move/FootMove/FootDrag' },
//             { text: '🟠 <move>FootEversion</move>', link: '/encyclopedia/Move/FootMove/FootEversion' },
//             { text: '🟠 <move>FootInversion</move>', link: '/encyclopedia/Move/FootMove/FootInversion' },
//             { text: '🟠 <move>FootSkreef</move>', link: '/encyclopedia/Move/FootMove/FootSkreef' },
//             { text: '🟠 <move>PlantarFlexion</move>', link: '/encyclopedia/Move/FootMove/PlantarFlexion' },
//           ]
//         },
//         {
//           text: '🟠 <move>ManoMove</move>', link: '/encyclopedia/Move/ManoMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Hand Frase</move>', link: '/encyclopedia/Move/ManoMove/Frase/Overview' },
//             { text: '🟠 <move>BagMano</move>', link: '/encyclopedia/Move/ManoMove/BagMano' },
//             { text: '🟠 <move>BoxMano</move>', link: '/encyclopedia/Move/ManoMove/BoxMano' },
//             { text: '🟠 <move>BranchMano</move>', link: '/encyclopedia/Move/ManoMove/BranchMano' },
//             { text: '🟠 <move>BranchSnapMano</move>', link: '/encyclopedia/Move/ManoMove/BranchSnapMano' },
//             { text: '🟠 <move>HandClose</move>', link: '/encyclopedia/Move/ManoMove/HandClose' },
//             { text: '🟠 <move>HandPoke</move>', link: '/encyclopedia/Move/ManoMove/HandPoke' },
//             { text: '🟠 <move>HandSkreef</move>', link: '/encyclopedia/Move/ManoMove/HandSkreef' },
//             { text: '🟠 <move>SpadeHandleMano</move>', link: '/encyclopedia/Move/ManoMove/SpadeHandleMano' },
//             { text: '🟠 <move>SpadeCollarMano</move>', link: '/encyclopedia/Move/ManoMove/SpadeCollarMano' },
//             { text: '🟠 <move>TreeMano</move>', link: '/encyclopedia/Move/ManoMove/TreeMano' },
//             { text: '🟠 <move>TreeTestMano</move>', link: '/encyclopedia/Move/ManoMove/TreeTestMano' },
//           ]
//         },
//         {
//           text: '🟠 <move>HeadMove</move>', link: '/encyclopedia/Move/HeadMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Head Frase</move>', link: '/encyclopedia/Move/HeadMove/Frase/Overview' },
//             { text: '🟠 <move>FocusLook</move>', link: '/encyclopedia/Move/HeadMove/FocusLook' },
//             { text: '🟠 <move>HeadProtraction</move>', link: '/encyclopedia/Move/HeadMove/HeadProtraction' },
//             { text: '🟠 <move>HeadRetraction</move>', link: '/encyclopedia/Move/HeadMove/HeadRetraction' },
//             { text: '🟠 <move>HeadTiltIntoWind</move>', link: '/encyclopedia/Move/HeadMove/HeadTiltIntoWind' },
//             { text: '🟠 <move>Hearing</move>', link: '/encyclopedia/Move/HeadMove/Hearing' },
//             { text: '🟠 <move>LookAway</move>', link: '/encyclopedia/Move/HeadMove/LookAway' },
//             { text: '🟠 <move>NeckExtension</move>', link: '/encyclopedia/Move/HeadMove/NeckExtension' },
//           ]
//         },
//         {
//           text: '🟠 <move>HoleMove</move>', link: '/encyclopedia/Move/HoleMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Hole Frase</move>', link: '/encyclopedia/Move/HoleMove/Frase/Overview' },
//             { text: '🟠 <move>HoleClose</move>', link: '/encyclopedia/Move/HoleMove/HoleClose' },
//             { text: '🟠 <move>HoleExpand</move>', link: '/encyclopedia/Move/HoleMove/HoleExpand' },
//             { text: '🟠 <move>HoleOpen</move>', link: '/encyclopedia/Move/HoleMove/HoleOpen' },
//           ]
//         },
//         {
//           text: '🟠 <move>LegMove</move>', link: '/encyclopedia/Move/LegMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>Leg Frase</move>', link: '/encyclopedia/Move/LegMove/Frase/Overview' },
//             { text: '🟠 <move>Crouch</move>', link: '/encyclopedia/Move/LegMove/Overview' },
//             { text: '🟠 <move>Jump</move>', link: '/encyclopedia/Move/LegMove/Jump' },
//             { text: '🟠 <move>Kneel</move>', link: '/encyclopedia/Move/LegMove/Kneel' },
//             { text: '🟠 <move>LegAbduction</move>', link: '/encyclopedia/Move/LegMove/LegAbduction' },
//             { text: '🟠 <move>LegAbsorb</move>', link: '/encyclopedia/Move/LegMove/LegAbsorb' },
//             { text: '🟠 <move>LegAdduction</move>', link: '/encyclopedia/Move/LegMove/LegAdduction' },
//             { text: '🟠 <move>LegFlap</move>', link: '/encyclopedia/Move/LegMove/LegFlap' },
//             { text: '🟠 <move>LegFlexion</move>', link: '/encyclopedia/Move/LegMove/LegFlexion' },
//             { text: '🟠 <move>BaseAma</move>', link: '/encyclopedia/Move/LegMove/BaseAma' },
//             { text: '🟠 <move>LegSidebagLift</move>', link: '/encyclopedia/Move/LegMove/LegSidebagLift' },
//             { text: '🟠 <move>LegKurve</move>', link: '/encyclopedia/Move/LegMove/LegKurve' },
//             { text: '🟠 <move>RunningStart</move>', link: '/encyclopedia/Move/LegMove/RunningStart' },
//             { text: '🟠 <move>Step</move>', link: '/encyclopedia/Move/LegMove/Step' },
//             { text: '🟠 <move>Stomp</move>', link: '/encyclopedia/Move/LegMove/Stomp' },
//           ]
//         },
//         {
//           text: '🟠 <move>PlantMove</move>', link: '/encyclopedia/Move/PlantMove/Overview', collapsed: true, items: [
//             { text: '🟠 <move>BranchMove</move>', link: '/encyclopedia/Move/PlantMove/BranchMove' },
//             { text: '🟠 <move>BranchWhip</move>', link: '/encyclopedia/Move/PlantMove/BranchWhip' },
//             { text: '🟠 <move>Bush</move>', link: '/encyclopedia/Move/PlantMove/Bush' },
//             { text: '🟠 <move>Log</move>', link: '/encyclopedia/Move/PlantMove/Log' },
//             { text: '🟠 <move>SlashPile</move>', link: '/encyclopedia/Move/PlantMove/SlashPile' },
//             { text: '🟠 <move>Stump</move>', link: '/encyclopedia/Move/PlantMove/Stump' },
//           ]
//         },
//         {
//           text: '🟠 <move>Skreef</move>', link: '/encyclopedia/Move/Skreef/Overview', collapsed: true, items: [
//             { text: '🟠 <move>BootSkreef</move>', link: '/encyclopedia/Move/ToolMove/Boot/BootSkreef' },
//             { text: '🟠 <move>HandSkreef</move>', link: '/encyclopedia/Move/ManoMove/HandSkreef' },
//             { text: '🟠 <move>SpadeSkreef</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeSkreef' },
//           ]
//         },
//         {
//           text: '🟠 <move>ToolMove</move>', link: '/encyclopedia/Move/ToolMove/Overview', collapsed: true, items: [
//             {
//               text: '🟠 <move>Bag</move>', link: '/encyclopedia/Move/ToolMove/Bag/Overview', collapsed: true, items: [
//                 { text: '🟠 <move>BagMano</move>', link: '/encyclopedia/Move/ToolMove/Bag/BagMano' },
//                 { text: '🔷 <move>Bag Frase</move>', link: '/encyclopedia/Move/ToolMove/Bag/Frase/Overview' },
//                 { text: '🟠 <move>BagAdjustment</move>', link: '/encyclopedia/Move/ToolMove/Bag/BagAdjustment' },
//                 { text: '🟠 <move>BagDeadlift</move>', link: '/encyclopedia/Move/ToolMove/Bag/BagDeadlift' },
//                 { text: '🟠 <move>BagEmpty</move>', link: '/encyclopedia/Move/ToolMove/Bag/BagEmpty' },
//                 { text: '🟠 <move>BaggingUp</move>', link: '/encyclopedia/Move/ToolMove/Bag/BaggingUp' },
//                 { text: '🟠 <move>BagOff</move>', link: '/encyclopedia/Move/ToolMove/Bag/BagOff' },
//                 { text: '🟠 <move>BagOn</move>', link: '/encyclopedia/Move/ToolMove/Bag/BagOn' },
//                 { text: '🟠 <move>BagSlide</move>', link: '/encyclopedia/Move/ToolMove/Bag/BagSlide' },
//               ]
//             },
//             {
//               text: '🟠 <move>Boot</move>', link: '/encyclopedia/Move/ToolMove/Boot/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Boot Frase</move>', link: '/encyclopedia/Move/ToolMove/Boot/Frase/Overview' },
//                 { text: '🟠 <move>BootMano</move>', link: '/encyclopedia/Move/ToolMove/Boot/BootMano' },
//                 { text: '🟠 <move>BootSkreef</move>', link: '/encyclopedia/Move/ToolMove/Boot/BootSkreef' },
//                 { text: '🟠 <move>LaceKnot</move>', link: '/encyclopedia/Move/ToolMove/Boot/LaceKnot' },
//               ]
//             },
//             {
//               text: '🟠 <move>Box</move>', link: '/encyclopedia/Move/ToolMove/Box/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Box Frase</move>', link: '/encyclopedia/Move/ToolMove/Box/Frase/Overview' },
//                 { text: '🟠 <move>BoxMano</move>', link: '/encyclopedia/Move/ToolMove/Box/BoxMano' },
//               ]
//             },
//             {
//               text: '🟠 <move>Bundle</move>', link: '/encyclopedia/Move/ToolMove/Bundle/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Bundle Frase</move>', link: '/encyclopedia/Move/ToolMove/Bundle/Frase/Overview' },
//                 { text: '🟠 <move>BundleMano</move>', link: '/encyclopedia/Move/ToolMove/Bundle/BundleMano' },
//                 { text: '🟠 <move>BundlePeel</move>', link: '/encyclopedia/Move/ToolMove/Bundle/BundlePeel' },
//               ]
//             },
//             {
//               text: '🟠 <move>Carabiner</move>', link: '/encyclopedia/Move/ToolMove/Carabiner/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <move>Marka</move>', link: '/encyclopedia/Move/ToolMove/Marka/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Marka Frase</move>', link: '/encyclopedia/Move/ToolMove/Marka/Frase/Overview' },
//                 { text: '🟠 <move>MarkaMano</move>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaMano' },
//                 { text: '🟠 <move>MarkaKnot</move>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaKnot' },
//                 { text: '🟠 <move>MarkaReload</move>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaReload' },
//                 { text: '🟠 <move>MarkaRip</move>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaRip' },
//                 { text: '🟠 <move>MarkaRoll</move>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaRoll' },
//               ]
//             },
//             {
//               text: '🟠 <move>Tibior</move>', link: '/encyclopedia/Move/ToolMove/Tibior/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Tibior Frase</move>', link: '/encyclopedia/Move/ToolMove/Tibior/Frase/Overview' },
//                 { text: '🟠 <move>TibiorMano</move>', link: '/encyclopedia/Move/ToolMove/Tibior/TibiorMano' },
//                 { text: '🟠 <move>TibiorOn</move>', link: '/encyclopedia/Move/ToolMove/Tibior/TibiorOn' },
//                 { text: '🟠 <move>TibiorOff</move>', link: '/encyclopedia/Move/ToolMove/Tibior/TibiorOff' },
//               ]
//             },
//             {
//               text: '🟠 <move>Glove</move>', link: '/encyclopedia/Move/ToolMove/Glove/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Glove Frase</move>', link: '/encyclopedia/Move/ToolMove/Glove/Frase/Overview' },
//                 { text: '🟠 <move>GloveMano</move>', link: '/encyclopedia/Move/ToolMove/Glove/GloveMano' },
//               ]
//             },
//             {
//               text: '🟠 <move>Kit</move>', link: '/encyclopedia/Move/ToolMove/Kit/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <move>Rope</move>', link: '/encyclopedia/Move/ToolMove/Rope/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <move>Spade</move>', link: '/encyclopedia/Move/ToolMove/Spade/Overview', collapsed: true, items: [
//                 { text: '🔷 <move>Spade Frase</move>', link: '/encyclopedia/Move/ToolMove/Spade/Frase/Overview' },
//                 { text: '🟠 <move>SpadeAmble</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeAmble' },
//                 { text: '🟠 <move>SpadeAnchor</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeAnchor' },
//                 { text: '🟠 <move>SpadeChop</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeChop' },
//                 { text: '🟠 <move>SpadeCone</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeCone' },
//                 { text: '🟠 <move>SpadeDrag</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeDrag' },
//                 { text: '🟠 <move>SpadeMano</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeMano' },
//                 { text: '🟠 <move>SpadeBallista</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeBallista' },
//                 { text: '🟠 <move>SpadePendulum</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadePendulum' },
//                 { text: '🟠 <move>SpadePogo</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadePogo' },
//                 { text: '🟠 <move>SpadePoke</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadePoke' },
//                 { text: '🟠 <move>SpadePost</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadePost' },
//                 { text: '🟠 <move>SpadeAma</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeAma' },
//                 { text: '🟠 <move>SpadeRotate</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeRotate' },
//                 { text: '🟠 <move>SpadeSkreef</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeSkreef' },
//                 { text: '🟠 <move>SpadeImpact</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeImpact' },
//                 { text: '🟠 <move>SpadeStall</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeStall' },
//                 { text: '🟠 <move>SpadeStomp</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeStomp' },
//                 { text: '🟠 <move>SpadeKurve</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeKurve' },
//                 { text: '🟠 <move>SpadeTest</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeTest' },
//                 { text: '❌ <move>SpadeError</move>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeError' },
//               ]
//             },
//             {
//               text: '🟠 <move>Doru</move>', link: '/encyclopedia/Move/ToolMove/Doru/Overview', collapsed: true, items: [
//                 { text: '🟠 <move>DoruAmble</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruAmble' },
//                 { text: '🟠 <move>DoruAmble</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruAmble' },
//                 { text: '🟠 <move>DoruAnchor</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruAnchor' },
//                 { text: '🟠 <move>DoruBridge</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruBridge' },
//                 { text: '🟠 <move>DoruBump</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruBump' },
//                 { text: '🟠 <move>DoruChop</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruChop' },
//                 { text: '🟠 <move>DoruCone</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruCone' },
//                 { text: '🟠 <move>DoruDrag</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruDrag' },
//                 { text: '🟠 <move>DoruMano</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruMano' },
//                 { text: '🟠 <move>DoruMatch</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruMatch' },
//                 { text: '🟠 <move>DoruPendulum</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPendulum' },
//                 { text: '🟠 <move>DoruPogo</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPogo' },
//                 { text: '🟠 <move>DoruPoke</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPoke' },
//                 { text: '🟠 <move>DoruPost</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPost' },
//                 { text: '🟠 <move>DoruProp</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruProp' },
//                 { text: '🟠 <move>DoruPost</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPost' },
//                 { text: '🟠 <move>DoruRotate</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruRotate' },
//                 { text: '🟠 <move>DoruSkreef</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruSkreef' },
//                 { text: '🟠 <move>DoruSlam</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruSlam' },
//                 { text: '🟠 <move>DoruSlap</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruSlap' },
//                 { text: '🟠 <move>DoruSlide</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruSlide' },
//                 { text: '🟠 <move>DoruStall</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruStall' },
//                 { text: '🟠 <move>DoruStomp</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruStomp' },
//                 { text: '🟠 <move>DoruOnda</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruOnda' },
//                 { text: '❌ <move>DoruError</move>', link: '/encyclopedia/Move/ToolMove/Doru/DoruError' },
//               ]
//             }
//           ]
//         },
//         {
//           text: '🟠 <move>Truck</move>', link: '/encyclopedia/Move/TruckMove/Overview', collapsed: true, items: [
//             { text: '🔷 <move>Truck Frase</move>', link: '/encyclopedia/Move/TruckMove/Frase/Overview' },
//             { text: '🟠 <move>Sleep</move>', link: '/encyclopedia/Move/TruckMove/Sleep' },
//             { text: '🟠 <move>Sit</move>', link: '/encyclopedia/Move/TruckMove/Sit' },
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
//               text: '🔻 <via>Line</via>', link: '/encyclopedia/Via/ViaGeometry/Line/Overview', collapsed: true, items: [
//                 { text: '🔻 <via>AroundCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/CircumventCurve' },
//                 { text: '🔻 <via>GhostLine</via>', link: '/encyclopedia/Via/ViaGeometry/Line/GhostLine' },
//                 { text: '🔻 <via>ParallelCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/ParallelCurve' },
//                 { text: '🔻 <via>PerimeterCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/PerimeterCurve' },
//                 { text: '🔻 <via>SpiralCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/SpiralCurve' },
//                 { text: '🔻 <via>TurnAroundCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/TurnAroundCurve' },
//                 { text: '🔻 <via>ZigzagCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/ZigzagCurve' },
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
//               text: '🔻 <via>Contact</via>', link: '/encyclopedia/Via/ViaGeometry/Contact/Overview', collapsed: true, items: [
//                 { text: '🔻 <via>Contact Texture</via>', link: '/encyclopedia/Via/Contact/ContactTexture' },
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
//           text: '🔻 <via>Marka</via>', link: '/encyclopedia/Via/Marka/Overview', collapsed: true, items: [
//             { text: '🔻 <via>BoundaryMarka</via>', link: '/encyclopedia/Via/Marka/BoundaryMarka' },
//             { text: '🔻 <via>MarkaLocation</via>', link: '/encyclopedia/Via/Marka/MarkaLocation' },
//             { text: '🔻 <via>HighMarka</via>', link: '/encyclopedia/Via/Marka/HighMarka' },
//             { text: '🔻 <via>LineInMarka</via>', link: '/encyclopedia/Via/Marka/LineInMarka' },
//             { text: '🔻 <via>NaturalMarka</via>', link: '/encyclopedia/Via/Marka/NaturalMarka' },
//             { text: '🔻 <via>TrenchExitMarka</via>', link: '/encyclopedia/Via/Marka/TrenchExitMarka' },
//             { text: '🔻 <via>WastedMarka</via>', link: '/encyclopedia/Via/Marka/WastedMarka' },
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
//             { text: '💜 <psike>MoveTiming</psike>', link: '/encyclopedia/Psike/Time/MoveTiming' },
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
