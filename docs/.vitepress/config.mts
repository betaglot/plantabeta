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
//         { text: '<moto>Move Graphics</moto>', link: '/dev/Graphics/MotoGraphic' },
//         { text: '<neuro>Psike Graphics</neuro>', link: '/dev/Graphics/NeuroGraphic' },
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
//       text: '🟠 <moto>Move</moto>', link: '/encyclopedia/Move/MotoOverview', collapsed: true, items: [
//         { text: '🟠 <moto>Phrase</moto>', link: '/encyclopedia/Move/Phrase/Overview' },
//         {
//           text: '🟠 <moto>Move THEORIA</moto>', link: '/encyclopedia/Move/MotoTheoria/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>MotoTeknik</moto>', link: '/encyclopedia/Move/MotoTheoria/MotoTeknik' },
//             { text: '🟠 <moto>MotoKratos</moto>', link: '/encyclopedia/Move/MotoTheoria/MotoKratos' },
//             { text: '🟠 <moto>MotoProbability</moto>', link: '/encyclopedia/Move/MotoTheoria/MotoProbability' },
//           ],
//         },
//         {
//           text: '🟠 <moto>MotoGeometry</moto>', collapsed: true, items: [
//             { text: '🟠 <moto>Overview</moto>', link: '/encyclopedia/Move/MotoGeometry/Overview' },
//             { text: '🟠 <moto>MotoPoint</moto>', link: '/encyclopedia/Move/MotoGeometry/MotoPoint' },
//             { text: '🟠 <moto>MotoCurve</moto>', link: '/encyclopedia/Move/MotoGeometry/MotoCurve' },
//             { text: '🟠 <moto>MotoSpace</moto>', link: '/encyclopedia/Move/MotoGeometry/MotoSpace' },
//             { text: '🟠 <moto>MotoSurface</moto>', link: '/encyclopedia/Move/MotoGeometry/MotoSurface' },
//           ]
//         },
//         {
//           text: '🟠 <moto>ArmMoto</moto>', link: '/encyclopedia/Move/ArmMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Arm Phrase</moto>', link: '/encyclopedia/Move/ArmMoto/Phrase/Overview' },
//             { text: '🟠 <moto>ArmProp</moto>', link: '/encyclopedia/Move/ArmMoto/ArmProp' },
//             { text: '🟠 <moto>ArmSwing</moto>', link: '/encyclopedia/Move/ArmMoto/ArmSwing' },
//             { text: '🟠 <moto>ArmWalk</moto>', link: '/encyclopedia/Move/ArmMoto/ArmWalk' },
//             { text: '🟠 <moto>ArmBalance</moto>', link: '/encyclopedia/Move/ArmMoto/ArmBalance' },
//           ]
//         },
//         {
//           text: '🟠 <moto>BodyMoto</moto>', link: '/encyclopedia/Move/BodyMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Body Phrase</moto>', link: '/encyclopedia/Move/BodyMoto/Phrase/Overview' },
//             { text: '🟠 <moto>BodyAbsorb</moto>', link: '/encyclopedia/Move/BodyMoto/BodyAbsorb' },
//             { text: '🟠 <moto>BodyBend</moto>', link: '/encyclopedia/Move/BodyMoto/BodyBend' },
//             { text: '🟠 <moto>BodyLean</moto>', link: '/encyclopedia/Move/BodyMoto/BodyLean' },
//             { text: '🟠 <moto>BodyRevolve</moto>', link: '/encyclopedia/Move/BodyMoto/BodyRevolve' },
//             { text: '🟠 <moto>BodyRotate</moto>', link: '/encyclopedia/Move/BodyMoto/BodyRotate' },
//             { text: '🟠 <moto>BodySlot</moto>', link: '/encyclopedia/Move/BodyMoto/BodySlot' },
//             { text: '🟠 <moto>Fall</moto>', link: '/encyclopedia/Move/BodyMoto/Fall' },
//           ]
//         },
//         {
//           text: '🟠 <moto>CacheMoto</moto>', link: '/encyclopedia/Move/CacheMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Cache Phrase</moto>', link: '/encyclopedia/Move/CacheMoto/Phrase/Overview' },
//             { text: '🟠 <moto>Eating</moto>', link: '/encyclopedia/Move/CacheMoto/Eating' },
//             { text: '🟠 <moto>TarpOff</moto>', link: '/encyclopedia/Move/CacheMoto/TarpOff' },
//             { text: '🟠 <moto>TarpOn</moto>', link: '/encyclopedia/Move/CacheMoto/TarpOn' },
//           ]
//         },
//         {
//           text: '🟠 <moto>ClothingMoto</moto>', link: '/encyclopedia/Move/ClothingMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Clothing Phrase</moto>', link: '/encyclopedia/Move/ClothingMoto/Phrase/Overview' },
//             { text: '🟠 <moto>Button</moto>', link: '/encyclopedia/Move/ClothingMoto/Button' },
//             { text: '🟠 <moto>ClothingLayer</moto>', link: '/encyclopedia/Move/ClothingMoto/ClothingLayer' },
//             { text: '🟠 <moto>RemoveMud</moto>', link: '/encyclopedia/Move/ClothingMoto/RemoveMud' },
//             { text: '🟠 <moto>ZipperMoto</moto>', link: '/encyclopedia/Move/ClothingMoto/ZipperMoto' },
//           ]
//         },
//         {
//           text: '🟠 <moto>FootMoto</moto>', link: '/encyclopedia/Move/FootMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Foot Phrase</moto>', link: '/encyclopedia/Move/FootMoto/Phrase/Overview' },
//             { text: '🟠 <moto>FootArchSmear</moto>', link: '/encyclopedia/Move/FootMoto/FootArchSmear' },
//             { text: '🟠 <moto>FootClose</moto>', link: '/encyclopedia/Move/FootMoto/FootClose' },
//             { text: '🟠 <moto>FootDig</moto>', link: '/encyclopedia/Move/FootMoto/FootDig' },
//             { text: '🟠 <moto>FootDorsiflexion</moto>', link: '/encyclopedia/Move/FootMoto/FootDorsiflexion' },
//             { text: '🟠 <moto>FootDrag</moto>', link: '/encyclopedia/Move/FootMoto/FootDrag' },
//             { text: '🟠 <moto>FootEversion</moto>', link: '/encyclopedia/Move/FootMoto/FootEversion' },
//             { text: '🟠 <moto>FootInversion</moto>', link: '/encyclopedia/Move/FootMoto/FootInversion' },
//             { text: '🟠 <moto>FootScreef</moto>', link: '/encyclopedia/Move/FootMoto/FootScreef' },
//             { text: '🟠 <moto>PlantarFlexion</moto>', link: '/encyclopedia/Move/FootMoto/PlantarFlexion' },
//           ]
//         },
//         {
//           text: '🟠 <moto>HandMoto</moto>', link: '/encyclopedia/Move/HandMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Hand Phrase</moto>', link: '/encyclopedia/Move/HandMoto/Phrase/Overview' },
//             { text: '🟠 <moto>BagGrip</moto>', link: '/encyclopedia/Move/HandMoto/BagGrip' },
//             { text: '🟠 <moto>BoxGrip</moto>', link: '/encyclopedia/Move/HandMoto/BoxGrip' },
//             { text: '🟠 <moto>BranchGrip</moto>', link: '/encyclopedia/Move/HandMoto/BranchGrip' },
//             { text: '🟠 <moto>BranchSnapGrip</moto>', link: '/encyclopedia/Move/HandMoto/BranchSnapGrip' },
//             { text: '🟠 <moto>HandClose</moto>', link: '/encyclopedia/Move/HandMoto/HandClose' },
//             { text: '🟠 <moto>HandPoke</moto>', link: '/encyclopedia/Move/HandMoto/HandPoke' },
//             { text: '🟠 <moto>HandScreef</moto>', link: '/encyclopedia/Move/HandMoto/HandScreef' },
//             { text: '🟠 <moto>SpadeHandleGrip</moto>', link: '/encyclopedia/Move/HandMoto/SpadeHandleGrip' },
//             { text: '🟠 <moto>SpadeShaftGrip</moto>', link: '/encyclopedia/Move/HandMoto/SpadeShaftGrip' },
//             { text: '🟠 <moto>TreeGrip</moto>', link: '/encyclopedia/Move/HandMoto/TreeGrip' },
//             { text: '🟠 <moto>TreeTestGrip</moto>', link: '/encyclopedia/Move/HandMoto/TreeTestGrip' },
//           ]
//         },
//         {
//           text: '🟠 <moto>HeadMoto</moto>', link: '/encyclopedia/Move/HeadMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Head Phrase</moto>', link: '/encyclopedia/Move/HeadMoto/Phrase/Overview' },
//             { text: '🟠 <moto>FocusLook</moto>', link: '/encyclopedia/Move/HeadMoto/FocusLook' },
//             { text: '🟠 <moto>HeadProtraction</moto>', link: '/encyclopedia/Move/HeadMoto/HeadProtraction' },
//             { text: '🟠 <moto>HeadRetraction</moto>', link: '/encyclopedia/Move/HeadMoto/HeadRetraction' },
//             { text: '🟠 <moto>HeadTiltIntoWind</moto>', link: '/encyclopedia/Move/HeadMoto/HeadTiltIntoWind' },
//             { text: '🟠 <moto>Hearing</moto>', link: '/encyclopedia/Move/HeadMoto/Hearing' },
//             { text: '🟠 <moto>LookAway</moto>', link: '/encyclopedia/Move/HeadMoto/LookAway' },
//             { text: '🟠 <moto>NeckExtension</moto>', link: '/encyclopedia/Move/HeadMoto/NeckExtension' },
//           ]
//         },
//         {
//           text: '🟠 <moto>HoleMoto</moto>', link: '/encyclopedia/Move/HoleMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Hole Phrase</moto>', link: '/encyclopedia/Move/HoleMoto/Phrase/Overview' },
//             { text: '🟠 <moto>HoleClose</moto>', link: '/encyclopedia/Move/HoleMoto/HoleClose' },
//             { text: '🟠 <moto>HoleExpand</moto>', link: '/encyclopedia/Move/HoleMoto/HoleExpand' },
//             { text: '🟠 <moto>HoleOpen</moto>', link: '/encyclopedia/Move/HoleMoto/HoleOpen' },
//           ]
//         },
//         {
//           text: '🟠 <moto>LegMoto</moto>', link: '/encyclopedia/Move/LegMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>Leg Phrase</moto>', link: '/encyclopedia/Move/LegMoto/Phrase/Overview' },
//             { text: '🟠 <moto>Crouch</moto>', link: '/encyclopedia/Move/LegMoto/Overview' },
//             { text: '🟠 <moto>Jump</moto>', link: '/encyclopedia/Move/LegMoto/Jump' },
//             { text: '🟠 <moto>Kneel</moto>', link: '/encyclopedia/Move/LegMoto/Kneel' },
//             { text: '🟠 <moto>LegAbduction</moto>', link: '/encyclopedia/Move/LegMoto/LegAbduction' },
//             { text: '🟠 <moto>LegAbsorb</moto>', link: '/encyclopedia/Move/LegMoto/LegAbsorb' },
//             { text: '🟠 <moto>LegAdduction</moto>', link: '/encyclopedia/Move/LegMoto/LegAdduction' },
//             { text: '🟠 <moto>LegFlap</moto>', link: '/encyclopedia/Move/LegMoto/LegFlap' },
//             { text: '🟠 <moto>LegFlexion</moto>', link: '/encyclopedia/Move/LegMoto/LegFlexion' },
//             { text: '🟠 <moto>LegProp</moto>', link: '/encyclopedia/Move/LegMoto/LegProp' },
//             { text: '🟠 <moto>LegSidebagLift</moto>', link: '/encyclopedia/Move/LegMoto/LegSidebagLift' },
//             { text: '🟠 <moto>LegSwing</moto>', link: '/encyclopedia/Move/LegMoto/LegSwing' },
//             { text: '🟠 <moto>RunningStart</moto>', link: '/encyclopedia/Move/LegMoto/RunningStart' },
//             { text: '🟠 <moto>Step</moto>', link: '/encyclopedia/Move/LegMoto/Step' },
//             { text: '🟠 <moto>Stomp</moto>', link: '/encyclopedia/Move/LegMoto/Stomp' },
//           ]
//         },
//         {
//           text: '🟠 <moto>PlantMoto</moto>', link: '/encyclopedia/Move/PlantMoto/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>BranchMoto</moto>', link: '/encyclopedia/Move/PlantMoto/BranchMoto' },
//             { text: '🟠 <moto>BranchWhip</moto>', link: '/encyclopedia/Move/PlantMoto/BranchWhip' },
//             { text: '🟠 <moto>Bush</moto>', link: '/encyclopedia/Move/PlantMoto/Bush' },
//             { text: '🟠 <moto>Log</moto>', link: '/encyclopedia/Move/PlantMoto/Log' },
//             { text: '🟠 <moto>SlashPile</moto>', link: '/encyclopedia/Move/PlantMoto/SlashPile' },
//             { text: '🟠 <moto>Stump</moto>', link: '/encyclopedia/Move/PlantMoto/Stump' },
//           ]
//         },
//         {
//           text: '🟠 <moto>Screef</moto>', link: '/encyclopedia/Move/Screef/Overview', collapsed: true, items: [
//             { text: '🟠 <moto>BootScreef</moto>', link: '/encyclopedia/Move/ToolMoto/Boot/BootScreef' },
//             { text: '🟠 <moto>HandScreef</moto>', link: '/encyclopedia/Move/HandMoto/HandScreef' },
//             { text: '🟠 <moto>SpadeScreef</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeScreef' },
//           ]
//         },
//         {
//           text: '🟠 <moto>ToolMoto</moto>', link: '/encyclopedia/Move/ToolMoto/Overview', collapsed: true, items: [
//             {
//               text: '🟠 <moto>Bag</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/Overview', collapsed: true, items: [
//                 { text: '🟠 <moto>BagGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/BagGrip' },
//                 { text: '🔷 <moto>Bag Phrase</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/Phrase/Overview' },
//                 { text: '🟠 <moto>BagAdjustment</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/BagAdjustment' },
//                 { text: '🟠 <moto>BagDeadlift</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/BagDeadlift' },
//                 { text: '🟠 <moto>BagEmpty</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/BagEmpty' },
//                 { text: '🟠 <moto>BaggingUp</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/BaggingUp' },
//                 { text: '🟠 <moto>BagOff</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/BagOff' },
//                 { text: '🟠 <moto>BagOn</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/BagOn' },
//                 { text: '🟠 <moto>BagSlide</moto>', link: '/encyclopedia/Move/ToolMoto/Bag/BagSlide' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Boot</moto>', link: '/encyclopedia/Move/ToolMoto/Boot/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Boot Phrase</moto>', link: '/encyclopedia/Move/ToolMoto/Boot/Phrase/Overview' },
//                 { text: '🟠 <moto>BootGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Boot/BootGrip' },
//                 { text: '🟠 <moto>BootScreef</moto>', link: '/encyclopedia/Move/ToolMoto/Boot/BootScreef' },
//                 { text: '🟠 <moto>LaceKnot</moto>', link: '/encyclopedia/Move/ToolMoto/Boot/LaceKnot' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Box</moto>', link: '/encyclopedia/Move/ToolMoto/Box/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Box Phrase</moto>', link: '/encyclopedia/Move/ToolMoto/Box/Phrase/Overview' },
//                 { text: '🟠 <moto>BoxGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Box/BoxGrip' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Bundle</moto>', link: '/encyclopedia/Move/ToolMoto/Bundle/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Bundle Phrase</moto>', link: '/encyclopedia/Move/ToolMoto/Bundle/Phrase/Overview' },
//                 { text: '🟠 <moto>BundleGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Bundle/BundleGrip' },
//                 { text: '🟠 <moto>BundlePeel</moto>', link: '/encyclopedia/Move/ToolMoto/Bundle/BundlePeel' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Carabiner</moto>', link: '/encyclopedia/Move/ToolMoto/Carabiner/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <moto>Flag</moto>', link: '/encyclopedia/Move/ToolMoto/Flag/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Flag Phrase</moto>', link: '/encyclopedia/Move/ToolMoto/Flag/Phrase/Overview' },
//                 { text: '🟠 <moto>FlagGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagGrip' },
//                 { text: '🟠 <moto>FlagKnot</moto>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagKnot' },
//                 { text: '🟠 <moto>FlagReload</moto>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagReload' },
//                 { text: '🟠 <moto>FlagRip</moto>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagRip' },
//                 { text: '🟠 <moto>FlagRoll</moto>', link: '/encyclopedia/Move/ToolMoto/Flag/FlagRoll' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Gaiter</moto>', link: '/encyclopedia/Move/ToolMoto/Gaiter/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Gaiter Phrase</moto>', link: '/encyclopedia/Move/ToolMoto/Gaiter/Phrase/Overview' },
//                 { text: '🟠 <moto>GaiterGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Gaiter/GaiterGrip' },
//                 { text: '🟠 <moto>GaiterOn</moto>', link: '/encyclopedia/Move/ToolMoto/Gaiter/GaiterOn' },
//                 { text: '🟠 <moto>GaiterOff</moto>', link: '/encyclopedia/Move/ToolMoto/Gaiter/GaiterOff' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Glove</moto>', link: '/encyclopedia/Move/ToolMoto/Glove/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Glove Phrase</moto>', link: '/encyclopedia/Move/ToolMoto/Glove/Phrase/Overview' },
//                 { text: '🟠 <moto>GloveGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Glove/GloveGrip' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Kit</moto>', link: '/encyclopedia/Move/ToolMoto/Kit/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <moto>Rope</moto>', link: '/encyclopedia/Move/ToolMoto/Rope/Overview', collapsed: true, items: [
//               ]
//             },
//             {
//               text: '🟠 <moto>Spade</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/Overview', collapsed: true, items: [
//                 { text: '🔷 <moto>Spade Phrase</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/Phrase/Overview' },
//                 { text: '🟠 <moto>SpadeAmble</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeAmble' },
//                 { text: '🟠 <moto>SpadeAnchor</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeAnchor' },
//                 { text: '🟠 <moto>SpadeChop</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeChop' },
//                 { text: '🟠 <moto>SpadeCone</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeCone' },
//                 { text: '🟠 <moto>SpadeDrag</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeDrag' },
//                 { text: '🟠 <moto>SpadeGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeGrip' },
//                 { text: '🟠 <moto>SpadeJavelin</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeJavelin' },
//                 { text: '🟠 <moto>SpadePendulum</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadePendulum' },
//                 { text: '🟠 <moto>SpadePogo</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadePogo' },
//                 { text: '🟠 <moto>SpadePoke</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadePoke' },
//                 { text: '🟠 <moto>SpadePost</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadePost' },
//                 { text: '🟠 <moto>SpadeProp</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeProp' },
//                 { text: '🟠 <moto>SpadeRotate</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeRotate' },
//                 { text: '🟠 <moto>SpadeScreef</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeScreef' },
//                 { text: '🟠 <moto>SpadeSlam</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeSlam' },
//                 { text: '🟠 <moto>SpadeStall</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeStall' },
//                 { text: '🟠 <moto>SpadeStomp</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeStomp' },
//                 { text: '🟠 <moto>SpadeSwing</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeSwing' },
//                 { text: '🟠 <moto>SpadeTest</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeTest' },
//                 { text: '❌ <moto>SpadeError</moto>', link: '/encyclopedia/Move/ToolMoto/Spade/SpadeError' },
//               ]
//             },
//             {
//               text: '🟠 <moto>Staff</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/Overview', collapsed: true, items: [
//                 { text: '🟠 <moto>StaffAmble</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffAmble' },
//                 { text: '🟠 <moto>StaffAmble</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffAmble' },
//                 { text: '🟠 <moto>StaffAnchor</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffAnchor' },
//                 { text: '🟠 <moto>StaffBridge</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffBridge' },
//                 { text: '🟠 <moto>StaffBump</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffBump' },
//                 { text: '🟠 <moto>StaffChop</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffChop' },
//                 { text: '🟠 <moto>StaffCone</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffCone' },
//                 { text: '🟠 <moto>StaffDrag</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffDrag' },
//                 { text: '🟠 <moto>StaffGrip</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffGrip' },
//                 { text: '🟠 <moto>StaffMatch</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffMatch' },
//                 { text: '🟠 <moto>StaffPendulum</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPendulum' },
//                 { text: '🟠 <moto>StaffPogo</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPogo' },
//                 { text: '🟠 <moto>StaffPoke</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPoke' },
//                 { text: '🟠 <moto>StaffPost</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPost' },
//                 { text: '🟠 <moto>StaffProp</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffProp' },
//                 { text: '🟠 <moto>StaffPost</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffPost' },
//                 { text: '🟠 <moto>StaffRotate</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffRotate' },
//                 { text: '🟠 <moto>StaffScreef</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffScreef' },
//                 { text: '🟠 <moto>StaffSlam</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffSlam' },
//                 { text: '🟠 <moto>StaffSlap</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffSlap' },
//                 { text: '🟠 <moto>StaffSlide</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffSlide' },
//                 { text: '🟠 <moto>StaffStall</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffStall' },
//                 { text: '🟠 <moto>StaffStomp</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffStomp' },
//                 { text: '🟠 <moto>StaffSwing</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffSwing' },
//                 { text: '❌ <moto>StaffError</moto>', link: '/encyclopedia/Move/ToolMoto/Staff/StaffError' },
//               ]
//             }
//           ]
//         },
//         {
//           text: '🟠 <moto>Truck</moto>', link: '/encyclopedia/Move/TruckMoto/Overview', collapsed: true, items: [
//             { text: '🔷 <moto>Truck Phrase</moto>', link: '/encyclopedia/Move/TruckMoto/Phrase/Overview' },
//             { text: '🟠 <moto>Sleep</moto>', link: '/encyclopedia/Move/TruckMoto/Sleep' },
//             { text: '🟠 <moto>Sit</moto>', link: '/encyclopedia/Move/TruckMoto/Sit' },
//           ]
//         },
//         { text: '🟠 <moto>Kinesiology</moto>', link: '/encyclopedia/Move/Kinesiology/KinesiologyOverview' },
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
//       text: '💜 <neuro>Psike</neuro>', link: '/encyclopedia/Psike/NeuroOverview', collapsed: true, items: [
//         { text: '🔷 <neuro>Psike Theoria</neuro>', link: '/encyclopedia/Psike/NeuroTheoria' },
//         {
//           text: '💜 <neuro>Arousal</neuro>', link: '/encyclopedia/Psike/Arousal/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Attention</neuro>', link: '/encyclopedia/Psike/Attention/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Audio</neuro>', link: '/encyclopedia/Psike/Audio/Overview', collapsed: true, items: [
//             {
//               text: '💜 <neuro>Music</neuro>', link: '/encyclopedia/Psike/Audio/Music/Overview', collapsed: true, items: [
//                 { text: '💜 <neuro>Playlists</neuro>', link: '/encyclopedia/Psike/Audio/Music/Overview' },
//               ]
//             },
//             { text: '💜 <neuro>BranchBreakSound</neuro>', link: '/encyclopedia/Psike/Audio/BranchBreakSound' },
//             { text: '💜 <neuro>LogBreakSound</neuro>', link: '/encyclopedia/Psike/Audio/LogBreakSound' },
//             { text: '💜 <neuro>SlashSound</neuro>', link: '/encyclopedia/Psike/Audio/SlashSound' },
//             { text: '💜 <neuro>SpadeSound</neuro>', link: '/encyclopedia/Psike/Audio/SpadeSound' },
//             { text: '💜 <neuro>SoilSound</neuro>', link: '/encyclopedia/Psike/Audio/SoilSound' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Awareness</neuro>', link: '/encyclopedia/Psike/Awareness/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Counting</neuro>', link: '/encyclopedia/Psike/Counting/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Decision</neuro>', collapsed: true, items: [
//             { text: '💜 <neuro>GoOrNoGo</neuro>', link: '/encyclopedia/Psike/Decision/GoOrNoGo' },
//             { text: '💜 <neuro>MicrositeSelection</neuro>', link: '/encyclopedia/Psike/Decision/MicrositeSelection' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Emotion</neuro>', link: '/encyclopedia/Psike/Emotion/Overview', collapsed: true, items: [
//             { text: '💜 <neuro>Anger</neuro>', link: '/encyclopedia/Psike/Emotion/Anger' },
//             { text: '💜 <neuro>Disgust</neuro>', link: '/encyclopedia/Psike/Emotion/Disgust' },
//             { text: '💜 <neuro>Fear</neuro>', link: '/encyclopedia/Psike/Emotion/Fear' },
//             { text: '💜 <neuro>Joy</neuro>', link: '/encyclopedia/Psike/Emotion/Joy' },
//             { text: '💜 <neuro>Sadness</neuro>', link: '/encyclopedia/Psike/Emotion/Sadness' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Energy</neuro>', link: '/encyclopedia/Psike/Energy/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Estimation</neuro>', collapsed: true, items: [
//             { text: '💜 <neuro>AreaEstimation</neuro>', link: '/encyclopedia/Psike/Estimation/AreaEstimation' },
//             { text: '💜 <neuro>BagCoverEstimation</neuro>', link: '/encyclopedia/Psike/Estimation/BagCoverEstimation' },
//             { text: '💜 <neuro>DistanceEstimation</neuro>', link: '/encyclopedia/Psike/Estimation/DistanceEstimation' },
//             { text: '💜 <neuro>TimeEstimation</neuro>', link: '/encyclopedia/Psike/Estimation/TimeEstimation' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Event</neuro>', link: '/encyclopedia/Psike/Event/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Homeostasis</neuro>', link: '/encyclopedia/Psike/Homeostasis/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Memory</neuro>', link: '/encyclopedia/Psike/Memory/Overview', collapsed: true, items: [
//             { text: '💜 <neuro>WorkingMemory</neuro>', link: '/encyclopedia/Psike/Memory/WorkingMemory' },
//             { text: '💜 <neuro>ShortTermMemory</neuro>', link: '/encyclopedia/Psike/Memory/ShortTermMemory' },
//             { text: '💜 <neuro>LongTermMemory</neuro>', link: '/encyclopedia/Psike/Memory/LongTermMemory' },
//             { text: '💜 <neuro>NumberMemory</neuro>', link: '/encyclopedia/Psike/Memory/NumberMemory' },
//             { text: '💜 <neuro>ViaMemory</neuro>', link: '/encyclopedia/Psike/Memory/ViaMemory' },
//           ]
//         },
//         {
//           text: '💜 <neuro>Mindfulness</neuro>', link: '/encyclopedia/Psike/Mindfulness/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Muscle</neuro>', link: '/encyclopedia/Psike/Muscle/Overview', collapsed: true, items: [
//           ]
//         },
//         { text: '💜 <neuro>Proprioception</neuro>', link: '/encyclopedia/Psike/Proprioception/Overview' },
//         { text: '💜 <neuro>Resilience</neuro>', link: '/encyclopedia/Psike/Resilience/Overview' },
//         {
//           text: '💜 <neuro>SpatialCognition</neuro>', link: '/encyclopedia/Psike/SpatialCognition/Overview', collapsed: true, items: [
//           ]
//         },
//         {
//           text: '💜 <neuro>Time</neuro>', link: '/encyclopedia/Psike/Time/Overview', collapsed: true, items: [
//             { text: '💜 <neuro>BagUpTime</neuro>', link: '/encyclopedia/Psike/Time/BagUpTime' },
//             { text: '💜 <neuro>DailySchedule</neuro>', link: '/encyclopedia/Psike/Time/DailySchedule' },
//             { text: '💜 <neuro>MotoTiming</neuro>', link: '/encyclopedia/Psike/Time/MotoTiming' },
//             { text: '💜 <neuro>Planning</neuro>', link: '/encyclopedia/Psike/Time/Planning' },
//             { text: '💜 <neuro>Timer</neuro>', link: '/encyclopedia/Psike/Time/Timer' },
//           ]
//         },
//         { text: '💜 <neuro>Thermoception</neuro>', link: '/encyclopedia/Psike/Thermoception' },
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
