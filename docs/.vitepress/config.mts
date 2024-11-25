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
//         { text: '<eko>Eco Graphics</eko>', link: '/dev/Graphics/EcoGraphic' },
//         { text: '<moto>Moto Graphics</moto>', link: '/dev/Graphics/MotoGraphic' },
//         { text: '<neuro>Neuro Graphics</neuro>', link: '/dev/Graphics/NeuroGraphic' },
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
//         { text: '🟠<moto>To Reduce Injury</moto>', link: '/guide/Why/Injury' },
//         { text: '🔻<via>To Increase Productivity</via>', link: '/guide/Why/Productivity' },
//         { text: '🔷<beta>To Improve Communication</beta>', link: '/guide/Why/Communication' },
//         { text: '💜<neuro>To Steepen Learning Curve</neuro>', link: '/guide/Why/LearningCurve' },
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
//     // #Eco
//     {
//       text: '🟩 <eko>Eco</eko>', collapsed: true, link: '/encyclopedia/Eko/EkoOverview', items: [
//         {
//           text: '🔷 <eko>Eco Theoria</eko>', link: '/encyclopedia/Eko/EkoTheoria', collapsed: true, items: [
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
//     // #Moto
//     {
//       text: '🟠 <moto>Moto</moto>', link: '/encyclopedia/Moto/MotoOverview', collapsed: true, items: [
//         { text: '🟠 <moto>Phrase</moto>', link: '/encyclopedia/Moto/Phrase/Overview' },
//         {
//           text: '🟠 <moto>Moto THEORIA</moto>', link: '/encyclopedia/Moto/MotoTheoria/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>MotoTeknik</moto>', link: '/encyclopedia/Moto/MotoTheoria/MotoTeknik' },
//             { text: '🟠 <moto>MotoKratos</moto>', link: '/encyclopedia/Moto/MotoTheoria/MotoKratos' },
//             { text: '🟠 <moto>MotoProbability</moto>', link: '/encyclopedia/Moto/MotoTheoria/MotoProbability' },
//           ],
//         },
//         {
//           text: '🟠 <moto>MotoGeometry</moto>', collapsed: true, items: [
//             { text: '🟠 <moto>Overview</moto>', link: '/encyclopedia/Moto/MotoGeometry/Overview' },
//             { text: '🟠 <moto>MotoPoint</moto>', link: '/encyclopedia/Moto/MotoGeometry/MotoPoint' },
//             { text: '🟠 <moto>MotoCurve</moto>', link: '/encyclopedia/Moto/MotoGeometry/MotoCurve' },
//             { text: '🟠 <moto>MotoSpace</moto>', link: '/encyclopedia/Moto/MotoGeometry/MotoSpace' },
//             { text: '🟠 <moto>MotoSurface</moto>', link: '/encyclopedia/Moto/MotoGeometry/MotoSurface' },
//           ]
//         },
//         {
//           text: '🟠 <moto>ArmMoto</moto>', link: '/encyclopedia/Moto/ArmMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Arm Phrase</moto>', link: '/encyclopedia/Moto/ArmMoto/Phrase/Overview' },
//             { text: '🟠 <moto>ArmProp</moto>', link: '/encyclopedia/Moto/ArmMoto/ArmProp' },
//             { text: '🟠 <moto>ArmSwing</moto>', link: '/encyclopedia/Moto/ArmMoto/ArmSwing' },
//             { text: '🟠 <moto>ArmWalk</moto>', link: '/encyclopedia/Moto/ArmMoto/ArmWalk' },
//             { text: '🟠 <moto>ArmBalance</moto>', link: '/encyclopedia/Moto/ArmMoto/ArmBalance' },
//           ]
//         },
//         {
//           text: '🟠 <moto>BodyMoto</moto>', link: '/encyclopedia/Moto/BodyMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Body Phrase</moto>', link: '/encyclopedia/Moto/BodyMoto/Phrase/Overview' },
//             { text: '🟠 <moto>BodyAbsorb</moto>', link: '/encyclopedia/Moto/BodyMoto/BodyAbsorb' },
//             { text: '🟠 <moto>BodyBend</moto>', link: '/encyclopedia/Moto/BodyMoto/BodyBend' },
//             { text: '🟠 <moto>BodyLean</moto>', link: '/encyclopedia/Moto/BodyMoto/BodyLean' },
//             { text: '🟠 <moto>BodyRevolve</moto>', link: '/encyclopedia/Moto/BodyMoto/BodyRevolve' },
//             { text: '🟠 <moto>BodyRotate</moto>', link: '/encyclopedia/Moto/BodyMoto/BodyRotate' },
//             { text: '🟠 <moto>BodySlot</moto>', link: '/encyclopedia/Moto/BodyMoto/BodySlot' },
//             { text: '🟠 <moto>Fall</moto>', link: '/encyclopedia/Moto/BodyMoto/Fall' },
//           ]
//         },
//         {
//           text: '🟠 <moto>CacheMoto</moto>', link: '/encyclopedia/Moto/CacheMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Cache Phrase</moto>', link: '/encyclopedia/Moto/CacheMoto/Phrase/Overview' },
//             { text: '🟠 <moto>Eating</moto>', link: '/encyclopedia/Moto/CacheMoto/Eating' },
//             { text: '🟠 <moto>TarpOff</moto>', link: '/encyclopedia/Moto/CacheMoto/TarpOff' },
//             { text: '🟠 <moto>TarpOn</moto>', link: '/encyclopedia/Moto/CacheMoto/TarpOn' },
//           ]
//         },
//         {
//           text: '🟠 <moto>ClothingMoto</moto>', link: '/encyclopedia/Moto/ClothingMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Clothing Phrase</moto>', link: '/encyclopedia/Moto/ClothingMoto/Phrase/Overview' },
//             { text: '🟠 <moto>Button</moto>', link: '/encyclopedia/Moto/ClothingMoto/Button' },
//             { text: '🟠 <moto>ClothingLayer</moto>', link: '/encyclopedia/Moto/ClothingMoto/ClothingLayer' },
//             { text: '🟠 <moto>RemoveMud</moto>', link: '/encyclopedia/Moto/ClothingMoto/RemoveMud' },
//             { text: '🟠 <moto>ZipperMoto</moto>', link: '/encyclopedia/Moto/ClothingMoto/ZipperMoto' },
//           ]
//         },
//         {
//           text: '🟠 <moto>FootMoto</moto>', link: '/encyclopedia/Moto/FootMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Foot Phrase</moto>', link: '/encyclopedia/Moto/FootMoto/Phrase/Overview' },
//             { text: '🟠 <moto>FootArchSmear</moto>', link: '/encyclopedia/Moto/FootMoto/FootArchSmear' },
//             { text: '🟠 <moto>FootClose</moto>', link: '/encyclopedia/Moto/FootMoto/FootClose' },
//             { text: '🟠 <moto>FootDig</moto>', link: '/encyclopedia/Moto/FootMoto/FootDig' },
//             { text: '🟠 <moto>FootDorsiflexion</moto>', link: '/encyclopedia/Moto/FootMoto/FootDorsiflexion' },
//             { text: '🟠 <moto>FootDrag</moto>', link: '/encyclopedia/Moto/FootMoto/FootDrag' },
//             { text: '🟠 <moto>FootEversion</moto>', link: '/encyclopedia/Moto/FootMoto/FootEversion' },
//             { text: '🟠 <moto>FootInversion</moto>', link: '/encyclopedia/Moto/FootMoto/FootInversion' },
//             { text: '🟠 <moto>FootScreef</moto>', link: '/encyclopedia/Moto/FootMoto/FootScreef' },
//             { text: '🟠 <moto>PlantarFlexion</moto>', link: '/encyclopedia/Moto/FootMoto/PlantarFlexion' },
//           ]
//         },
//         {
//           text: '🟠 <moto>HandMoto</moto>', link: '/encyclopedia/Moto/HandMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Hand Phrase</moto>', link: '/encyclopedia/Moto/HandMoto/Phrase/Overview' },
//             { text: '🟠 <moto>BagGrip</moto>', link: '/encyclopedia/Moto/HandMoto/BagGrip' },
//             { text: '🟠 <moto>BoxGrip</moto>', link: '/encyclopedia/Moto/HandMoto/BoxGrip' },
//             { text: '🟠 <moto>BranchGrip</moto>', link: '/encyclopedia/Moto/HandMoto/BranchGrip' },
//             { text: '🟠 <moto>BranchSnapGrip</moto>', link: '/encyclopedia/Moto/HandMoto/BranchSnapGrip' },
//             { text: '🟠 <moto>HandClose</moto>', link: '/encyclopedia/Moto/HandMoto/HandClose' },
//             { text: '🟠 <moto>HandPoke</moto>', link: '/encyclopedia/Moto/HandMoto/HandPoke' },
//             { text: '🟠 <moto>HandScreef</moto>', link: '/encyclopedia/Moto/HandMoto/HandScreef' },
//             { text: '🟠 <moto>SpadeHandleGrip</moto>', link: '/encyclopedia/Moto/HandMoto/SpadeHandleGrip' },
//             { text: '🟠 <moto>SpadeShaftGrip</moto>', link: '/encyclopedia/Moto/HandMoto/SpadeShaftGrip' },
//             { text: '🟠 <moto>TreeGrip</moto>', link: '/encyclopedia/Moto/HandMoto/TreeGrip' },
//             { text: '🟠 <moto>TreeTestGrip</moto>', link: '/encyclopedia/Moto/HandMoto/TreeTestGrip' },
//           ]
//         },
//         {
//           text: '🟠 <moto>HeadMoto</moto>', link: '/encyclopedia/Moto/HeadMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Head Phrase</moto>', link: '/encyclopedia/Moto/HeadMoto/Phrase/Overview' },
//             { text: '🟠 <moto>FocusLook</moto>', link: '/encyclopedia/Moto/HeadMoto/FocusLook' },
//             { text: '🟠 <moto>HeadProtraction</moto>', link: '/encyclopedia/Moto/HeadMoto/HeadProtraction' },
//             { text: '🟠 <moto>HeadRetraction</moto>', link: '/encyclopedia/Moto/HeadMoto/HeadRetraction' },
//             { text: '🟠 <moto>HeadTiltIntoWind</moto>', link: '/encyclopedia/Moto/HeadMoto/HeadTiltIntoWind' },
//             { text: '🟠 <moto>Hearing</moto>', link: '/encyclopedia/Moto/HeadMoto/Hearing' },
//             { text: '🟠 <moto>LookAway</moto>', link: '/encyclopedia/Moto/HeadMoto/LookAway' },
//             { text: '🟠 <moto>NeckExtension</moto>', link: '/encyclopedia/Moto/HeadMoto/NeckExtension' },
//           ]
//         },
//         {
//           text: '🟠 <moto>HoleMoto</moto>', link: '/encyclopedia/Moto/HoleMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Hole Phrase</moto>', link: '/encyclopedia/Moto/HoleMoto/Phrase/Overview' },
//             { text: '🟠 <moto>HoleClose</moto>', link: '/encyclopedia/Moto/HoleMoto/HoleClose' },
//             { text: '🟠 <moto>HoleExpand</moto>', link: '/encyclopedia/Moto/HoleMoto/HoleExpand' },
//             { text: '🟠 <moto>HoleOpen</moto>', link: '/encyclopedia/Moto/HoleMoto/HoleOpen' },
//           ]
//         },
//         {
//           text: '🟠 <moto>LegMoto</moto>', link: '/encyclopedia/Moto/LegMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Leg Phrase</moto>', link: '/encyclopedia/Moto/LegMoto/Phrase/Overview' },
//             { text: '🟠 <moto>Crouch</moto>', link: '/encyclopedia/Moto/LegMoto/Overview' },
//             { text: '🟠 <moto>Jump</moto>', link: '/encyclopedia/Moto/LegMoto/Jump' },
//             { text: '🟠 <moto>Kneel</moto>', link: '/encyclopedia/Moto/LegMoto/Kneel' },
//             { text: '🟠 <moto>LegAbduction</moto>', link: '/encyclopedia/Moto/LegMoto/LegAbduction' },
//             { text: '🟠 <moto>LegAbsorb</moto>', link: '/encyclopedia/Moto/LegMoto/LegAbsorb' },
//             { text: '🟠 <moto>LegAdduction</moto>', link: '/encyclopedia/Moto/LegMoto/LegAdduction' },
//             { text: '🟠 <moto>LegFlap</moto>', link: '/encyclopedia/Moto/LegMoto/LegFlap' },
//             { text: '🟠 <moto>LegFlexion</moto>', link: '/encyclopedia/Moto/LegMoto/LegFlexion' },
//             { text: '🟠 <moto>LegProp</moto>', link: '/encyclopedia/Moto/LegMoto/LegProp' },
//             { text: '🟠 <moto>LegSidebagLift</moto>', link: '/encyclopedia/Moto/LegMoto/LegSidebagLift' },
//             { text: '🟠 <moto>LegSwing</moto>', link: '/encyclopedia/Moto/LegMoto/LegSwing' },
//             { text: '🟠 <moto>RunningStart</moto>', link: '/encyclopedia/Moto/LegMoto/RunningStart' },
//             { text: '🟠 <moto>Step</moto>', link: '/encyclopedia/Moto/LegMoto/Step' },
//             { text: '🟠 <moto>Stomp</moto>', link: '/encyclopedia/Moto/LegMoto/Stomp' },
//           ]
//         },
//         {
//           text: '🟠 <moto>PlantMoto</moto>', link: '/encyclopedia/Moto/PlantMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>BranchMoto</moto>', link: '/encyclopedia/Moto/PlantMoto/BranchMoto' },
//             { text: '🟠 <moto>BranchWhip</moto>', link: '/encyclopedia/Moto/PlantMoto/BranchWhip' },
//             { text: '🟠 <moto>Bush</moto>', link: '/encyclopedia/Moto/PlantMoto/Bush' },
//             { text: '🟠 <moto>Log</moto>', link: '/encyclopedia/Moto/PlantMoto/Log' },
//             { text: '🟠 <moto>SlashPile</moto>', link: '/encyclopedia/Moto/PlantMoto/SlashPile' },
//             { text: '🟠 <moto>Stump</moto>', link: '/encyclopedia/Moto/PlantMoto/Stump' },
//           ]
//         },
//         {
//           text: '🟠 <moto>Screef</moto>', link: '/encyclopedia/Moto/Screef/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>BootScreef</moto>', link: '/encyclopedia/Moto/ToolMoto/Boot/BootScreef' },
//             { text: '🟠 <moto>HandScreef</moto>', link: '/encyclopedia/Moto/HandMoto/HandScreef' },
//             { text: '🟠 <moto>SpadeScreef</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeScreef' },
//           ]
//         },
//         {
//           text: '🟠 <moto>ToolMoto</moto>', link: '/encyclopedia/Moto/ToolMoto/Overview', collapsed: true, items: [
//             {
//               text: '🟠 <moto>Bag</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/Overview', collapsed: true, items: [
//                 { text: '🟠 <moto>BagGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/BagGrip' },
//                 { text: '🔷 <moto>Bag Phrase</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/Phrase/Overview' },
//                 { text: '🟠 <moto>BagAdjustment</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/BagAdjustment' },
//                 { text: '🟠 <moto>BagDeadlift</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/BagDeadlift' },
//                 { text: '🟠 <moto>BagEmpty</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/BagEmpty' },
//                 { text: '🟠 <moto>BaggingUp</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/BaggingUp' },
//                 { text: '🟠 <moto>BagOff</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/BagOff' },
//                 { text: '🟠 <moto>BagOn</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/BagOn' },
//                 { text: '🟠 <moto>BagSlide</moto>', link: '/encyclopedia/Moto/ToolMoto/Bag/BagSlide' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Boot</moto>', link: '/encyclopedia/Moto/ToolMoto/Boot/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Boot Phrase</moto>', link: '/encyclopedia/Moto/ToolMoto/Boot/Phrase/Overview' },
//                 { text: '🟠 <moto>BootGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Boot/BootGrip' },
//                 { text: '🟠 <moto>BootScreef</moto>', link: '/encyclopedia/Moto/ToolMoto/Boot/BootScreef' },
//                 { text: '🟠 <moto>LaceKnot</moto>', link: '/encyclopedia/Moto/ToolMoto/Boot/LaceKnot' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Box</moto>', link: '/encyclopedia/Moto/ToolMoto/Box/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Box Phrase</moto>', link: '/encyclopedia/Moto/ToolMoto/Box/Phrase/Overview' },
//                 { text: '🟠 <moto>BoxGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Box/BoxGrip' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Bundle</moto>', link: '/encyclopedia/Moto/ToolMoto/Bundle/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Bundle Phrase</moto>', link: '/encyclopedia/Moto/ToolMoto/Bundle/Phrase/Overview' },
//                 { text: '🟠 <moto>BundleGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Bundle/BundleGrip' },
//                 { text: '🟠 <moto>BundlePeel</moto>', link: '/encyclopedia/Moto/ToolMoto/Bundle/BundlePeel' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Carabiner</moto>', link: '/encyclopedia/Moto/ToolMoto/Carabiner/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <moto>Flag</moto>', link: '/encyclopedia/Moto/ToolMoto/Flag/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Flag Phrase</moto>', link: '/encyclopedia/Moto/ToolMoto/Flag/Phrase/Overview' },
//                 { text: '🟠 <moto>FlagGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Flag/FlagGrip' },
//                 { text: '🟠 <moto>FlagKnot</moto>', link: '/encyclopedia/Moto/ToolMoto/Flag/FlagKnot' },
//                 { text: '🟠 <moto>FlagReload</moto>', link: '/encyclopedia/Moto/ToolMoto/Flag/FlagReload' },
//                 { text: '🟠 <moto>FlagRip</moto>', link: '/encyclopedia/Moto/ToolMoto/Flag/FlagRip' },
//                 { text: '🟠 <moto>FlagRoll</moto>', link: '/encyclopedia/Moto/ToolMoto/Flag/FlagRoll' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Gaiter</moto>', link: '/encyclopedia/Moto/ToolMoto/Gaiter/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Gaiter Phrase</moto>', link: '/encyclopedia/Moto/ToolMoto/Gaiter/Phrase/Overview' },
//                 { text: '🟠 <moto>GaiterGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Gaiter/GaiterGrip' },
//                 { text: '🟠 <moto>GaiterOn</moto>', link: '/encyclopedia/Moto/ToolMoto/Gaiter/GaiterOn' },
//                 { text: '🟠 <moto>GaiterOff</moto>', link: '/encyclopedia/Moto/ToolMoto/Gaiter/GaiterOff' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Glove</moto>', link: '/encyclopedia/Moto/ToolMoto/Glove/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Glove Phrase</moto>', link: '/encyclopedia/Moto/ToolMoto/Glove/Phrase/Overview' },
//                 { text: '🟠 <moto>GloveGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Glove/GloveGrip' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Kit</moto>', link: '/encyclopedia/Moto/ToolMoto/Kit/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <moto>Rope</moto>', link: '/encyclopedia/Moto/ToolMoto/Rope/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <moto>Spade</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Spade Phrase</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/Phrase/Overview' },
//                 { text: '🟠 <moto>SpadeAmble</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeAmble' },
//                 { text: '🟠 <moto>SpadeAnchor</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeAnchor' },
//                 { text: '🟠 <moto>SpadeChop</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeChop' },
//                 { text: '🟠 <moto>SpadeCone</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeCone' },
//                 { text: '🟠 <moto>SpadeDrag</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeDrag' },
//                 { text: '🟠 <moto>SpadeGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeGrip' },
//                 { text: '🟠 <moto>SpadeJavelin</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeJavelin' },
//                 { text: '🟠 <moto>SpadePendulum</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadePendulum' },
//                 { text: '🟠 <moto>SpadePogo</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadePogo' },
//                 { text: '🟠 <moto>SpadePoke</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadePoke' },
//                 { text: '🟠 <moto>SpadePost</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadePost' },
//                 { text: '🟠 <moto>SpadeProp</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeProp' },
//                 { text: '🟠 <moto>SpadeRotate</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeRotate' },
//                 { text: '🟠 <moto>SpadeScreef</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeScreef' },
//                 { text: '🟠 <moto>SpadeSlam</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeSlam' },
//                 { text: '🟠 <moto>SpadeStall</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeStall' },
//                 { text: '🟠 <moto>SpadeStomp</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeStomp' },
//                 { text: '🟠 <moto>SpadeSwing</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeSwing' },
//                 { text: '🟠 <moto>SpadeTest</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeTest' },
//                 { text: '❌ <moto>SpadeError</moto>', link: '/encyclopedia/Moto/ToolMoto/Spade/SpadeError' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Staff</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/Overview', collapsed: true, items: [
//                 { text: '🟠 <moto>StaffAmble</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffAmble' },
//                 { text: '🟠 <moto>StaffAmble</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffAmble' },
//                 { text: '🟠 <moto>StaffAnchor</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffAnchor' },
//                 { text: '🟠 <moto>StaffBridge</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffBridge' },
//                 { text: '🟠 <moto>StaffBump</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffBump' },
//                 { text: '🟠 <moto>StaffChop</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffChop' },
//                 { text: '🟠 <moto>StaffCone</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffCone' },
//                 { text: '🟠 <moto>StaffDrag</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffDrag' },
//                 { text: '🟠 <moto>StaffGrip</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffGrip' },
//                 { text: '🟠 <moto>StaffMatch</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffMatch' },
//                 { text: '🟠 <moto>StaffPendulum</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffPendulum' },
//                 { text: '🟠 <moto>StaffPogo</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffPogo' },
//                 { text: '🟠 <moto>StaffPoke</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffPoke' },
//                 { text: '🟠 <moto>StaffPost</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffPost' },
//                 { text: '🟠 <moto>StaffProp</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffProp' },
//                 { text: '🟠 <moto>StaffPost</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffPost' },
//                 { text: '🟠 <moto>StaffRotate</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffRotate' },
//                 { text: '🟠 <moto>StaffScreef</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffScreef' },
//                 { text: '🟠 <moto>StaffSlam</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffSlam' },
//                 { text: '🟠 <moto>StaffSlap</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffSlap' },
//                 { text: '🟠 <moto>StaffSlide</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffSlide' },
//                 { text: '🟠 <moto>StaffStall</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffStall' },
//                 { text: '🟠 <moto>StaffStomp</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffStomp' },
//                 { text: '🟠 <moto>StaffSwing</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffSwing' },
//                 { text: '❌ <moto>StaffError</moto>', link: '/encyclopedia/Moto/ToolMoto/Staff/StaffError' },
//               ]
//             }
//           ]
//         },
//         {
//           text: '🟠 <moto>Truck</moto>', link: '/encyclopedia/Moto/TruckMoto/Overview', collapsed: true, items: [
//             { text: '🔷 <moto>Truck Phrase</moto>', link: '/encyclopedia/Moto/TruckMoto/Phrase/Overview' },
//             { text: '🟠 <moto>Sleep</moto>', link: '/encyclopedia/Moto/TruckMoto/Sleep' },
//             { text: '🟠 <moto>Sit</moto>', link: '/encyclopedia/Moto/TruckMoto/Sit' },
//           ]
//         },
//         { text: '🟠 <moto>Kinesiology</moto>', link: '/encyclopedia/Moto/Kinesiology/KinesiologyOverview' },
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
//     // #Neuro
//     {
//       text: '💜 <neuro>Neuro</neuro>', link: '/encyclopedia/Neuro/NeuroOverview', collapsed: true, items: [
//         { text: '🔷 <neuro>Neuro Theoria</neuro>', link: '/encyclopedia/Neuro/NeuroTheoria' },
//         {
//           text: '💜 <neuro>Arousal</neuro>', link: '/encyclopedia/Neuro/Arousal/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Attention</neuro>', link: '/encyclopedia/Neuro/Attention/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Audio</neuro>', link: '/encyclopedia/Neuro/Audio/Overview', collapsed: true, items: [
//             {
//               text: '💜 <neuro>Music</neuro>', link: '/encyclopedia/Neuro/Audio/Music/Overview', collapsed: true, items: [
//                 { text: '💜 <neuro>Playlists</neuro>', link: '/encyclopedia/Neuro/Audio/Music/Overview' },
//               ]
//             },
//             { text: '💜 <neuro>BranchBreakSound</neuro>', link: '/encyclopedia/Neuro/Audio/BranchBreakSound' },
//             { text: '💜 <neuro>LogBreakSound</neuro>', link: '/encyclopedia/Neuro/Audio/LogBreakSound' },
//             { text: '💜 <neuro>SlashSound</neuro>', link: '/encyclopedia/Neuro/Audio/SlashSound' },
//             { text: '💜 <neuro>SpadeSound</neuro>', link: '/encyclopedia/Neuro/Audio/SpadeSound' },
//             { text: '💜 <neuro>SoilSound</neuro>', link: '/encyclopedia/Neuro/Audio/SoilSound' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Awareness</neuro>', link: '/encyclopedia/Neuro/Awareness/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Counting</neuro>', link: '/encyclopedia/Neuro/Counting/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Decision</neuro>', collapsed: true, items: [
//             { text: '💜 <neuro>GoOrNoGo</neuro>', link: '/encyclopedia/Neuro/Decision/GoOrNoGo' },
//             { text: '💜 <neuro>MicrositeSelection</neuro>', link: '/encyclopedia/Neuro/Decision/MicrositeSelection' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Emotion</neuro>', link: '/encyclopedia/Neuro/Emotion/Overview', collapsed: true, items: [
//             { text: '💜 <neuro>Anger</neuro>', link: '/encyclopedia/Neuro/Emotion/Anger' },
//             { text: '💜 <neuro>Disgust</neuro>', link: '/encyclopedia/Neuro/Emotion/Disgust' },
//             { text: '💜 <neuro>Fear</neuro>', link: '/encyclopedia/Neuro/Emotion/Fear' },
//             { text: '💜 <neuro>Joy</neuro>', link: '/encyclopedia/Neuro/Emotion/Joy' },
//             { text: '💜 <neuro>Sadness</neuro>', link: '/encyclopedia/Neuro/Emotion/Sadness' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Energy</neuro>', link: '/encyclopedia/Neuro/Energy/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Estimation</neuro>', collapsed: true, items: [
//             { text: '💜 <neuro>AreaEstimation</neuro>', link: '/encyclopedia/Neuro/Estimation/AreaEstimation' },
//             { text: '💜 <neuro>BagCoverEstimation</neuro>', link: '/encyclopedia/Neuro/Estimation/BagCoverEstimation' },
//             { text: '💜 <neuro>DistanceEstimation</neuro>', link: '/encyclopedia/Neuro/Estimation/DistanceEstimation' },
//             { text: '💜 <neuro>TimeEstimation</neuro>', link: '/encyclopedia/Neuro/Estimation/TimeEstimation' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Event</neuro>', link: '/encyclopedia/Neuro/Event/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Homeostasis</neuro>', link: '/encyclopedia/Neuro/Homeostasis/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Memory</neuro>', link: '/encyclopedia/Neuro/Memory/Overview', collapsed: true, items: [
//             { text: '💜 <neuro>WorkingMemory</neuro>', link: '/encyclopedia/Neuro/Memory/WorkingMemory' },
//             { text: '💜 <neuro>ShortTermMemory</neuro>', link: '/encyclopedia/Neuro/Memory/ShortTermMemory' },
//             { text: '💜 <neuro>LongTermMemory</neuro>', link: '/encyclopedia/Neuro/Memory/LongTermMemory' },
//             { text: '💜 <neuro>NumberMemory</neuro>', link: '/encyclopedia/Neuro/Memory/NumberMemory' },
//             { text: '💜 <neuro>ViaMemory</neuro>', link: '/encyclopedia/Neuro/Memory/ViaMemory' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Mindfulness</neuro>', link: '/encyclopedia/Neuro/Mindfulness/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Muscle</neuro>', link: '/encyclopedia/Neuro/Muscle/Overview', collapsed: true, items: [
//           ]
//         },
//         { text: '💜 <neuro>Proprioception</neuro>', link: '/encyclopedia/Neuro/Proprioception/Overview' },
//         { text: '💜 <neuro>Resilience</neuro>', link: '/encyclopedia/Neuro/Resilience/Overview' },
//         {
//           text: '💜 <neuro>SpatialCognition</neuro>', link: '/encyclopedia/Neuro/SpatialCognition/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Time</neuro>', link: '/encyclopedia/Neuro/Time/Overview', collapsed: true, items: [
//             { text: '💜 <neuro>BagUpTime</neuro>', link: '/encyclopedia/Neuro/Time/BagUpTime' },
//             { text: '💜 <neuro>DailySchedule</neuro>', link: '/encyclopedia/Neuro/Time/DailySchedule' },
//             { text: '💜 <neuro>MotoTiming</neuro>', link: '/encyclopedia/Neuro/Time/MotoTiming' },
//             { text: '💜 <neuro>Planning</neuro>', link: '/encyclopedia/Neuro/Time/Planning' },
//             { text: '💜 <neuro>Timer</neuro>', link: '/encyclopedia/Neuro/Time/Timer' },
//           ]
//         },
//         { text: '💜 <neuro>Thermoception</neuro>', link: '/encyclopedia/Neuro/Thermoception' },
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
