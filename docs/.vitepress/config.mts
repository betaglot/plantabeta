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
//         { text: '<ekos>Eko Graphics</ekos>', link: '/dev/Graphics/EcoGraphic' },
//         { text: '<mooves>Move Graphics</mooves>', link: '/dev/Graphics/MoveGraphic' },
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
//         { text: 'What is 🔷<beta>Put(<ekos>Plant</ekos>)</beta>?', link: '/guide/What/WhatPutPlant' },
//       ]
//     },
//     {
//       text: 'Purpose', collapsed: false, items: [
//         { text: '🔥<ekos>To Support Ecosystems</ekos>', link: '/guide/Why/SupportEcosystem' },
//         { text: '🟠<mooves>To Reduce Injury</mooves>', link: '/guide/Why/Injury' },
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
function sidebarReference() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/encyclopedia/RefOverview' },
    // #Beta
    {
      text: '🔷 <beta>Beta</beta>', link: '/encyclopedia/Beta/WhatBeta', collapsed: true, items: [
        { text: '🔷 <beta>BetaExamples</beta>', link: '/encyclopedia/Beta/BetaExamples' },
        { text: '🔷 <beta>BetaLingo</beta>', link: '/encyclopedia/Beta/BetaLingo/Overview' },
        { text: '🔷 <beta>BetaDiagram</beta>', link: '/encyclopedia/Beta/BetaDiagram' },
        {
          text: '🔷 <beta>Plantbeta</beta>', link: '/encyclopedia/Beta/Plantbeta/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaElement</beta>', link: '/encyclopedia/Beta/Plantbeta/BetaElement' },
            { text: '🔷 <beta>BetaMethod</beta>', link: '/encyclopedia/Beta/Plantbeta/BetaMethod' },
            { text: '🔷 <beta>BetaBlock</beta>', link: '/encyclopedia/Beta/Plantbeta/BetaBlock' },
          ]
        },
        {
          text: '🔷 <beta>BetaScore</beta>', link: '/encyclopedia/Beta/BetaScore/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaExecutionScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaExecutionScore' },
            {
              text: '🔷 <beta>BetaTheoriaScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaTheoriaScore/Overview', collapsed: true, items: [
                { text: '🔷 <beta>BetaTeknikScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaTheoriaScore/BetaTeknikScore' },
                { text: '🔷 <beta>BetaProbabilityScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaTheoriaScore/BetaProbabilityScore' },
                { text: '🔷 <beta>BetaKratosScore</beta>', link: '/encyclopedia/Beta/BetaScore/BetaTheoriaScore/BetaKratosScore' }
              ]
            }
          ]
        },
        {
          text: '🔷 <beta>BetaTheoria</beta>', link: '/encyclopedia/Beta/BetaTheoria/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaTeknik</beta>', link: '/encyclopedia/Beta/BetaTheoria/BetaTeknik' },
            { text: '🔷 <beta>BetaKratos</beta>', link: '/encyclopedia/Beta/BetaTheoria/BetaKratos' },
            { text: '🔷 <beta>BetaProbability</beta>', link: '/encyclopedia/Beta/BetaTheoria/BetaProbability' }
          ]
        },
        {
          text: '🔷 <beta>BetaVideo</beta>', link: '/encyclopedia/Beta/BetaVideo/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    // #Eko
    {
      text: '🟩 <ekos>Eko</ekos>', collapsed: true, link: '/encyclopedia/Eko/EkoOverview', items: [
        {
          text: '🔷 <ekos>Eko Theoria</ekos>', link: '/encyclopedia/Eko/EkoTheoria', collapsed: true, items: [
            { text: '🟩 <ekos>EcoTeknik</ekos>', link: '/encyclopedia/Eko/EcoTheoria/EcoTeknik' },
            { text: '🟩 <ekos>EcoKratos</ekos>', link: '/encyclopedia/Eko/EcoTheoria/EcoKratos' },
            { text: '🟩 <ekos>EcoProbability</ekos>', link: '/encyclopedia/Eko/EcoTheoria/EcoProbability' },
          ]
        },
        {
          text: '🟩 <ekos>Animals</ekos>', link: '/encyclopedia/Eko/Animals/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🟩 <ekos>Atmosphere</ekos>', link: '/encyclopedia/Eko/Atmosphere/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>AirTemperature</ekos>', link: '/encyclopedia/Eko/Atmosphere/AirTemperature' },
            { text: '🟩 <ekos>Humidity</ekos>', link: '/encyclopedia/Eko/Atmosphere/Humidity' },
            { text: '🟩 <ekos>Precipitation</ekos>', link: '/encyclopedia/Eko/Atmosphere/Precipitation' },
            { text: '🟩 <ekos>Wind</ekos>', link: '/encyclopedia/Eko/Atmosphere/Wind' },
          ]
        },
        {
          text: '🟩 <ekos>Block</ekos>', link: '/encyclopedia/Eko/Block/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>FillBlock</ekos>', link: '/encyclopedia/Eko/Block/FillBlock' },
            { text: '🟩 <ekos>Road</ekos>', link: '/encyclopedia/Eko/Block/Road' },
          ]
        },
        {
          text: '🟩 <ekos>Density</ekos>', link: '/encyclopedia/Eko/Density/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>Plot</ekos>', link: '/encyclopedia/Eko/Density/Plot' },
          ]
        },
        {
          text: '🟩 <ekos>LandSpeed</ekos>', link: '/encyclopedia/Eko/LandSpeed/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>FastLand</ekos>', link: '/encyclopedia/Eko/LandSpeed/FastLand' },
            { text: '🟩 <ekos>SlowLand</ekos>', link: '/encyclopedia/Eko/LandSpeed/SlowLand' },
          ]
        },
        {
          text: '🟩 <ekos>Obstacle</ekos>', link: '/encyclopedia/Eko/Obstacle/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>HoleObstacle</ekos>', link: '/encyclopedia/Eko/Obstacle/HoleObstacle' },
            { text: '🟩 <ekos>LogObstacle</ekos>', link: '/encyclopedia/Eko/Obstacle/LogObstacle' },
            { text: '🟩 <ekos>MicrositeObstacle</ekos>', link: '/encyclopedia/Eko/Obstacle/MicrositeObstacle' },
            { text: '🟩 <ekos>RockObstacle</ekos>', link: '/encyclopedia/Eko/Obstacle/RockObstacle' },
            { text: '🟩 <ekos>StumpObstacle</ekos>', link: '/encyclopedia/Eko/Obstacle/StumpObstacle' },
          ]
        },
        {
          text: '🟩 <ekos>Piece</ekos>', link: '/encyclopedia/Eko/Piece/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>PieceTopography</ekos>', link: '/encyclopedia/Eko/Piece/PieceTopography' },
          ]
        },
        {
          text: '🟩 <ekos>Prep</ekos>', link: '/encyclopedia/Eko/Prep/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>MoundLand</ekos>', link: '/encyclopedia/Eko/Prep/MoundLand' },
            { text: '🟩 <ekos>TrenchLand</ekos>', link: '/encyclopedia/Eko/Prep/TrenchLand' },
            { text: '🟩 <ekos>DeactivatedRoad</ekos>', link: '/encyclopedia/Eko/Prep/TrenchLand' },
          ]
        },
        {
          text: '🟩 <ekos>Raw</ekos>', link: '/encyclopedia/Eko/Raw/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>StumpLand</ekos>', link: '/encyclopedia/Eko/Raw/StumpLand' },
            { text: '🟩 <ekos>BurntLand</ekos>', link: '/encyclopedia/Eko/Raw/BurntLand' },
            { text: '🟩 <ekos>RiparianLand</ekos>', link: '/encyclopedia/Eko/Raw/RiparianLand' },
            { text: '🟩 <ekos>RockyLand</ekos>', link: '/encyclopedia/Eko/Raw/RockyLand' },
          ]
        },
        {
          text: '🟩 <ekos>Slash</ekos>', link: '/encyclopedia/Eko/Slash/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>BurnPileSlash</ekos>', link: '/encyclopedia/Eko/Slash/BurnPileSlash' },
            { text: '🟩 <ekos>HighSlash</ekos>', link: '/encyclopedia/Eko/Slash/HighSlash' },
            { text: '🟩 <ekos>LowSlash</ekos>', link: '/encyclopedia/Eko/Slash/LowSlash' },
            { text: '🟩 <ekos>WetSlash</ekos>', link: '/encyclopedia/Eko/Slash/WetSlash' },
          ]
        },
        {
          text: '🟩 <ekos>Soil</ekos>', link: '/encyclopedia/Eko/Soil/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>Hole</ekos>', link: '/encyclopedia/Eko/Soil/Hole' },
            { text: '🟩 <ekos>ClaySoil</ekos>', link: '/encyclopedia/Eko/Soil/ClaySoil' },
            { text: '🟩 <ekos>DrySoil</ekos>', link: '/encyclopedia/Eko/Soil/DrySoil' },
            { text: '🟩 <ekos>GravelSoil</ekos>', link: '/encyclopedia/Eko/Soil/GravelSoil' },
            { text: '🟩 <ekos>MineralSoil</ekos>', link: '/encyclopedia/Eko/Soil/MineralSoil' },
            { text: '🟩 <ekos>RedRot</ekos>', link: '/encyclopedia/Eko/Soil/RedRot' },
            { text: '🟩 <ekos>SandSoil</ekos>', link: '/encyclopedia/Eko/Soil/SandSoil' },
            { text: '🟩 <ekos>WetSoil</ekos>', link: '/encyclopedia/Eko/Soil/WetSoil' },
          ]
        },
        {
          text: '🟩 <ekos>Sun</ekos>', link: '/encyclopedia/Eko/Sun/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🟩 <ekos>Plants</ekos>', link: '/encyclopedia/Eko/Plants/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    // #Move
    {
      text: '🟠 <mooves>Move</mooves>', link: '/encyclopedia/Move/MoveOverview', collapsed: true, items: [
        { text: '🟠 <mooves>Frase</mooves>', link: '/encyclopedia/Move/Frase/Overview' },
        {
          text: '🟠 <mooves>Move THEORIA</mooves>', link: '/encyclopedia/Move/MoveTheoria/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>MoveTeknik</mooves>', link: '/encyclopedia/Move/MoveTheoria/MoveTeknik' },
            { text: '🟠 <mooves>MoveKratos</mooves>', link: '/encyclopedia/Move/MoveTheoria/MoveKratos' },
            { text: '🟠 <mooves>MoveProbability</mooves>', link: '/encyclopedia/Move/MoveTheoria/MoveProbability' },
          ],
        },
        {
          text: '🟠 <mooves>MoveGeometry</mooves>', collapsed: true, items: [
            { text: '🟠 <mooves>Overview</mooves>', link: '/encyclopedia/Move/MoveGeometry/Overview' },
            { text: '🟠 <mooves>MovePoint</mooves>', link: '/encyclopedia/Move/MoveGeometry/MovePoint' },
            { text: '🟠 <mooves>MoveCurve</mooves>', link: '/encyclopedia/Move/MoveGeometry/MoveCurve' },
            { text: '🟠 <mooves>MoveSpace</mooves>', link: '/encyclopedia/Move/MoveGeometry/MoveSpace' },
            { text: '🟠 <mooves>MoveSurface</mooves>', link: '/encyclopedia/Move/MoveGeometry/MoveSurface' },
          ]
        },
        {
          text: '🟠 <mooves>ArmMove</mooves>', link: '/encyclopedia/Move/ArmMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Arm Frase</mooves>', link: '/encyclopedia/Move/ArmMove/Frase/Overview' },
            { text: '🟠 <mooves>BrazoAma</mooves>', link: '/encyclopedia/Move/ArmMove/BrazoAma' },
            { text: '🟠 <mooves>ArmKurve</mooves>', link: '/encyclopedia/Move/ArmMove/ArmKurve' },
            { text: '🟠 <mooves>ArmWalk</mooves>', link: '/encyclopedia/Move/ArmMove/ArmWalk' },
            { text: '🟠 <mooves>ArmBalance</mooves>', link: '/encyclopedia/Move/ArmMove/ArmBalance' },
          ]
        },
        {
          text: '🟠 <mooves>BodyMove</mooves>', link: '/encyclopedia/Move/BodyMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Body Frase</mooves>', link: '/encyclopedia/Move/BodyMove/Frase/Overview' },
            { text: '🟠 <mooves>BodyAbsorb</mooves>', link: '/encyclopedia/Move/BodyMove/BodyAbsorb' },
            { text: '🟠 <mooves>BodyBend</mooves>', link: '/encyclopedia/Move/BodyMove/BodyBend' },
            { text: '🟠 <mooves>BodyLean</mooves>', link: '/encyclopedia/Move/BodyMove/BodyLean' },
            { text: '🟠 <mooves>KorpoOrbit</mooves>', link: '/encyclopedia/Move/BodyMove/KorpoOrbit' },
            { text: '🟠 <mooves>BodyRotate</mooves>', link: '/encyclopedia/Move/BodyMove/BodyRotate' },
            { text: '🟠 <mooves>BodySlot</mooves>', link: '/encyclopedia/Move/BodyMove/BodySlot' },
            { text: '🟠 <mooves>Fall</mooves>', link: '/encyclopedia/Move/BodyMove/Fall' },
          ]
        },
        {
          text: '🟠 <mooves>CacheMove</mooves>', link: '/encyclopedia/Move/CacheMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Cache Frase</mooves>', link: '/encyclopedia/Move/CacheMove/Frase/Overview' },
            { text: '🟠 <mooves>Eating</mooves>', link: '/encyclopedia/Move/CacheMove/Eating' },
            { text: '🟠 <mooves>TarpOff</mooves>', link: '/encyclopedia/Move/CacheMove/TarpOff' },
            { text: '🟠 <mooves>TarpOn</mooves>', link: '/encyclopedia/Move/CacheMove/TarpOn' },
          ]
        },
        {
          text: '🟠 <mooves>ClothingMove</mooves>', link: '/encyclopedia/Move/ClothingMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Clothing Frase</mooves>', link: '/encyclopedia/Move/ClothingMove/Frase/Overview' },
            { text: '🟠 <mooves>Button</mooves>', link: '/encyclopedia/Move/ClothingMove/Button' },
            { text: '🟠 <mooves>ClothingLayer</mooves>', link: '/encyclopedia/Move/ClothingMove/ClothingLayer' },
            { text: '🟠 <mooves>RemoveMud</mooves>', link: '/encyclopedia/Move/ClothingMove/RemoveMud' },
            { text: '🟠 <mooves>ZipperMove</mooves>', link: '/encyclopedia/Move/ClothingMove/ZipperMove' },
          ]
        },
        {
          text: '🟠 <mooves>FootMove</mooves>', link: '/encyclopedia/Move/FootMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Foot Frase</mooves>', link: '/encyclopedia/Move/FootMove/Frase/Overview' },
            { text: '🟠 <mooves>FootArchSmear</mooves>', link: '/encyclopedia/Move/FootMove/FootArchSmear' },
            { text: '🟠 <mooves>FootSeal</mooves>', link: '/encyclopedia/Move/FootMove/FootSeal' },
            { text: '🟠 <mooves>FootDig</mooves>', link: '/encyclopedia/Move/FootMove/FootDig' },
            { text: '🟠 <mooves>FootDorsiflexion</mooves>', link: '/encyclopedia/Move/FootMove/FootDorsiflexion' },
            { text: '🟠 <mooves>FootDrag</mooves>', link: '/encyclopedia/Move/FootMove/FootDrag' },
            { text: '🟠 <mooves>FootEversion</mooves>', link: '/encyclopedia/Move/FootMove/FootEversion' },
            { text: '🟠 <mooves>FootInversion</mooves>', link: '/encyclopedia/Move/FootMove/FootInversion' },
            { text: '🟠 <mooves>FootSkreef</mooves>', link: '/encyclopedia/Move/FootMove/FootSkreef' },
            { text: '🟠 <mooves>PlantarFlexion</mooves>', link: '/encyclopedia/Move/FootMove/PlantarFlexion' },
          ]
        },
        {
          text: '🟠 <mooves>ManoMove</mooves>', link: '/encyclopedia/Move/ManoMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Hand Frase</mooves>', link: '/encyclopedia/Move/ManoMove/Frase/Overview' },
            { text: '🟠 <mooves>BagMano</mooves>', link: '/encyclopedia/Move/ManoMove/BagMano' },
            { text: '🟠 <mooves>BoxMano</mooves>', link: '/encyclopedia/Move/ManoMove/BoxMano' },
            { text: '🟠 <mooves>BranchMano</mooves>', link: '/encyclopedia/Move/ManoMove/BranchMano' },
            { text: '🟠 <mooves>BranchSnapMano</mooves>', link: '/encyclopedia/Move/ManoMove/BranchSnapMano' },
            { text: '🟠 <mooves>HandClose</mooves>', link: '/encyclopedia/Move/ManoMove/HandClose' },
            { text: '🟠 <mooves>HandPoke</mooves>', link: '/encyclopedia/Move/ManoMove/HandPoke' },
            { text: '🟠 <mooves>HandSkreef</mooves>', link: '/encyclopedia/Move/ManoMove/HandSkreef' },
            { text: '🟠 <mooves>SpadeHandleMano</mooves>', link: '/encyclopedia/Move/ManoMove/SpadeHandleMano' },
            { text: '🟠 <mooves>SpadeCollarMano</mooves>', link: '/encyclopedia/Move/ManoMove/SpadeCollarMano' },
            { text: '🟠 <mooves>TreeMano</mooves>', link: '/encyclopedia/Move/ManoMove/TreeMano' },
            { text: '🟠 <mooves>TreeTestMano</mooves>', link: '/encyclopedia/Move/ManoMove/TreeTestMano' },
          ]
        },
        {
          text: '🟠 <mooves>HeadMove</mooves>', link: '/encyclopedia/Move/HeadMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Head Frase</mooves>', link: '/encyclopedia/Move/HeadMove/Frase/Overview' },
            { text: '🟠 <mooves>FocusLook</mooves>', link: '/encyclopedia/Move/HeadMove/FocusLook' },
            { text: '🟠 <mooves>HeadProtraction</mooves>', link: '/encyclopedia/Move/HeadMove/HeadProtraction' },
            { text: '🟠 <mooves>HeadRetraction</mooves>', link: '/encyclopedia/Move/HeadMove/HeadRetraction' },
            { text: '🟠 <mooves>HeadTiltIntoWind</mooves>', link: '/encyclopedia/Move/HeadMove/HeadTiltIntoWind' },
            { text: '🟠 <mooves>Hearing</mooves>', link: '/encyclopedia/Move/HeadMove/Hearing' },
            { text: '🟠 <mooves>LookAway</mooves>', link: '/encyclopedia/Move/HeadMove/LookAway' },
            { text: '🟠 <mooves>NeckExtension</mooves>', link: '/encyclopedia/Move/HeadMove/NeckExtension' },
          ]
        },
        {
          text: '🟠 <mooves>HoleMove</mooves>', link: '/encyclopedia/Move/HoleMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Hole Frase</mooves>', link: '/encyclopedia/Move/HoleMove/Frase/Overview' },
            { text: '🟠 <mooves>HoleClose</mooves>', link: '/encyclopedia/Move/HoleMove/HoleClose' },
            { text: '🟠 <mooves>HoleExpand</mooves>', link: '/encyclopedia/Move/HoleMove/HoleExpand' },
            { text: '🟠 <mooves>HoleOpen</mooves>', link: '/encyclopedia/Move/HoleMove/HoleOpen' },
          ]
        },
        {
          text: '🟠 <mooves>LegMove</mooves>', link: '/encyclopedia/Move/LegMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Leg Frase</mooves>', link: '/encyclopedia/Move/LegMove/Frase/Overview' },
            { text: '🟠 <mooves>Crouch</mooves>', link: '/encyclopedia/Move/LegMove/Overview' },
            { text: '🟠 <mooves>Jump</mooves>', link: '/encyclopedia/Move/LegMove/Jump' },
            { text: '🟠 <mooves>Kneel</mooves>', link: '/encyclopedia/Move/LegMove/Kneel' },
            { text: '🟠 <mooves>LegAbduction</mooves>', link: '/encyclopedia/Move/LegMove/LegAbduction' },
            { text: '🟠 <mooves>LegAbsorb</mooves>', link: '/encyclopedia/Move/LegMove/LegAbsorb' },
            { text: '🟠 <mooves>LegAdduction</mooves>', link: '/encyclopedia/Move/LegMove/LegAdduction' },
            { text: '🟠 <mooves>LegFlap</mooves>', link: '/encyclopedia/Move/LegMove/LegFlap' },
            { text: '🟠 <mooves>LegFlexion</mooves>', link: '/encyclopedia/Move/LegMove/LegFlexion' },
            { text: '🟠 <mooves>BaseAma</mooves>', link: '/encyclopedia/Move/LegMove/BaseAma' },
            { text: '🟠 <mooves>LegSidebagLift</mooves>', link: '/encyclopedia/Move/LegMove/LegSidebagLift' },
            { text: '🟠 <mooves>LegKurve</mooves>', link: '/encyclopedia/Move/LegMove/LegKurve' },
            { text: '🟠 <mooves>RunningStart</mooves>', link: '/encyclopedia/Move/LegMove/RunningStart' },
            { text: '🟠 <mooves>Step</mooves>', link: '/encyclopedia/Move/LegMove/Step' },
            { text: '🟠 <mooves>Stomp</mooves>', link: '/encyclopedia/Move/LegMove/Stomp' },
          ]
        },
        {
          text: '🟠 <mooves>PlantMove</mooves>', link: '/encyclopedia/Move/PlantMove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>BranchMove</mooves>', link: '/encyclopedia/Move/PlantMove/BranchMove' },
            { text: '🟠 <mooves>BranchWhip</mooves>', link: '/encyclopedia/Move/PlantMove/BranchWhip' },
            { text: '🟠 <mooves>Bush</mooves>', link: '/encyclopedia/Move/PlantMove/Bush' },
            { text: '🟠 <mooves>Log</mooves>', link: '/encyclopedia/Move/PlantMove/Log' },
            { text: '🟠 <mooves>SlashPile</mooves>', link: '/encyclopedia/Move/PlantMove/SlashPile' },
            { text: '🟠 <mooves>Stump</mooves>', link: '/encyclopedia/Move/PlantMove/Stump' },
          ]
        },
        {
          text: '🟠 <mooves>Skreef</mooves>', link: '/encyclopedia/Move/Skreef/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>BootSkreef</mooves>', link: '/encyclopedia/Move/ToolMove/Boot/BootSkreef' },
            { text: '🟠 <mooves>HandSkreef</mooves>', link: '/encyclopedia/Move/ManoMove/HandSkreef' },
            { text: '🟠 <mooves>SpadeSkreef</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeSkreef' },
          ]
        },
        {
          text: '🟠 <mooves>ToolMove</mooves>', link: '/encyclopedia/Move/ToolMove/Overview', collapsed: true, items: [
            {
              text: '🟠 <mooves>Bag</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/Overview', collapsed: true, items: [
                { text: '🟠 <mooves>BagMano</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/BagMano' },
                { text: '🔷 <mooves>Bag Frase</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/Frase/Overview' },
                { text: '🟠 <mooves>BagAdjustment</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/BagAdjustment' },
                { text: '🟠 <mooves>BagDeadlift</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/BagDeadlift' },
                { text: '🟠 <mooves>BagEmpty</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/BagEmpty' },
                { text: '🟠 <mooves>BaggingUp</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/BaggingUp' },
                { text: '🟠 <mooves>BagOff</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/BagOff' },
                { text: '🟠 <mooves>BagOn</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/BagOn' },
                { text: '🟠 <mooves>BagSlide</mooves>', link: '/encyclopedia/Move/ToolMove/Bag/BagSlide' },
              ]
            },
            {
              text: '🟠 <mooves>Boot</mooves>', link: '/encyclopedia/Move/ToolMove/Boot/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Boot Frase</mooves>', link: '/encyclopedia/Move/ToolMove/Boot/Frase/Overview' },
                { text: '🟠 <mooves>BootMano</mooves>', link: '/encyclopedia/Move/ToolMove/Boot/BootMano' },
                { text: '🟠 <mooves>BootSkreef</mooves>', link: '/encyclopedia/Move/ToolMove/Boot/BootSkreef' },
                { text: '🟠 <mooves>LaceKnot</mooves>', link: '/encyclopedia/Move/ToolMove/Boot/LaceKnot' },
              ]
            },
            {
              text: '🟠 <mooves>Box</mooves>', link: '/encyclopedia/Move/ToolMove/Box/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Box Frase</mooves>', link: '/encyclopedia/Move/ToolMove/Box/Frase/Overview' },
                { text: '🟠 <mooves>BoxMano</mooves>', link: '/encyclopedia/Move/ToolMove/Box/BoxMano' },
              ]
            },
            {
              text: '🟠 <mooves>Bundle</mooves>', link: '/encyclopedia/Move/ToolMove/Bundle/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Bundle Frase</mooves>', link: '/encyclopedia/Move/ToolMove/Bundle/Frase/Overview' },
                { text: '🟠 <mooves>BundleMano</mooves>', link: '/encyclopedia/Move/ToolMove/Bundle/BundleMano' },
                { text: '🟠 <mooves>BundlePeel</mooves>', link: '/encyclopedia/Move/ToolMove/Bundle/BundlePeel' },
              ]
            },
            {
              text: '🟠 <mooves>Carabiner</mooves>', link: '/encyclopedia/Move/ToolMove/Carabiner/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <mooves>Marka</mooves>', link: '/encyclopedia/Move/ToolMove/Marka/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Marka Frase</mooves>', link: '/encyclopedia/Move/ToolMove/Marka/Frase/Overview' },
                { text: '🟠 <mooves>MarkaMano</mooves>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaMano' },
                { text: '🟠 <mooves>MarkaKnot</mooves>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaKnot' },
                { text: '🟠 <mooves>MarkaReload</mooves>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaReload' },
                { text: '🟠 <mooves>MarkaRip</mooves>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaRip' },
                { text: '🟠 <mooves>MarkaRoll</mooves>', link: '/encyclopedia/Move/ToolMove/Marka/MarkaRoll' },
              ]
            },
            {
              text: '🟠 <mooves>Tibior</mooves>', link: '/encyclopedia/Move/ToolMove/Tibior/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Tibior Frase</mooves>', link: '/encyclopedia/Move/ToolMove/Tibior/Frase/Overview' },
                { text: '🟠 <mooves>TibiorMano</mooves>', link: '/encyclopedia/Move/ToolMove/Tibior/TibiorMano' },
                { text: '🟠 <mooves>TibiorOn</mooves>', link: '/encyclopedia/Move/ToolMove/Tibior/TibiorOn' },
                { text: '🟠 <mooves>TibiorOff</mooves>', link: '/encyclopedia/Move/ToolMove/Tibior/TibiorOff' },
              ]
            },
            {
              text: '🟠 <mooves>Glove</mooves>', link: '/encyclopedia/Move/ToolMove/Glove/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Glove Frase</mooves>', link: '/encyclopedia/Move/ToolMove/Glove/Frase/Overview' },
                { text: '🟠 <mooves>GloveMano</mooves>', link: '/encyclopedia/Move/ToolMove/Glove/GloveMano' },
              ]
            },
            {
              text: '🟠 <mooves>Kit</mooves>', link: '/encyclopedia/Move/ToolMove/Kit/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <mooves>Rope</mooves>', link: '/encyclopedia/Move/ToolMove/Rope/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <mooves>Spade</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Spade Frase</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/Frase/Overview' },
                { text: '🟠 <mooves>SpadeAmble</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeAmble' },
                { text: '🟠 <mooves>SpadeAnchor</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeAnchor' },
                { text: '🟠 <mooves>SpadeChop</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeChop' },
                { text: '🟠 <mooves>SpadeCone</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeCone' },
                { text: '🟠 <mooves>SpadeDrag</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeDrag' },
                { text: '🟠 <mooves>SpadeMano</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeMano' },
                { text: '🟠 <mooves>SpadeBallista</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeBallista' },
                { text: '🟠 <mooves>SpadePendulum</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadePendulum' },
                { text: '🟠 <mooves>SpadePogo</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadePogo' },
                { text: '🟠 <mooves>SpadePoke</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadePoke' },
                { text: '🟠 <mooves>SpadePost</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadePost' },
                { text: '🟠 <mooves>SpadeAma</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeAma' },
                { text: '🟠 <mooves>SpadeRotate</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeRotate' },
                { text: '🟠 <mooves>SpadeSkreef</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeSkreef' },
                { text: '🟠 <mooves>SpadeImpact</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeImpact' },
                { text: '🟠 <mooves>SpadeStall</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeStall' },
                { text: '🟠 <mooves>SpadeStomp</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeStomp' },
                { text: '🟠 <mooves>SpadeKurve</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeKurve' },
                { text: '🟠 <mooves>SpadeTest</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeTest' },
                { text: '❌ <mooves>SpadeError</mooves>', link: '/encyclopedia/Move/ToolMove/Spade/SpadeError' },
              ]
            },
            {
              text: '🟠 <mooves>Doru</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/Overview', collapsed: true, items: [
                { text: '🟠 <mooves>DoruAmble</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruAmble' },
                { text: '🟠 <mooves>DoruAmble</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruAmble' },
                { text: '🟠 <mooves>DoruAnchor</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruAnchor' },
                { text: '🟠 <mooves>DoruBridge</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruBridge' },
                { text: '🟠 <mooves>DoruBump</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruBump' },
                { text: '🟠 <mooves>DoruChop</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruChop' },
                { text: '🟠 <mooves>DoruCone</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruCone' },
                { text: '🟠 <mooves>DoruDrag</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruDrag' },
                { text: '🟠 <mooves>DoruMano</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruMano' },
                { text: '🟠 <mooves>DoruMatch</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruMatch' },
                { text: '🟠 <mooves>DoruPendulum</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPendulum' },
                { text: '🟠 <mooves>DoruPogo</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPogo' },
                { text: '🟠 <mooves>DoruPoke</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPoke' },
                { text: '🟠 <mooves>DoruPost</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPost' },
                { text: '🟠 <mooves>DoruProp</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruProp' },
                { text: '🟠 <mooves>DoruPost</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruPost' },
                { text: '🟠 <mooves>DoruRotate</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruRotate' },
                { text: '🟠 <mooves>DoruSkreef</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruSkreef' },
                { text: '🟠 <mooves>DoruSlam</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruSlam' },
                { text: '🟠 <mooves>DoruSlap</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruSlap' },
                { text: '🟠 <mooves>DoruSlide</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruSlide' },
                { text: '🟠 <mooves>DoruStall</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruStall' },
                { text: '🟠 <mooves>DoruStomp</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruStomp' },
                { text: '🟠 <mooves>DoruOnda</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruOnda' },
                { text: '❌ <mooves>DoruError</mooves>', link: '/encyclopedia/Move/ToolMove/Doru/DoruError' },
              ]
            }
          ]
        },
        {
          text: '🟠 <mooves>Truck</mooves>', link: '/encyclopedia/Move/TruckMove/Overview', collapsed: true, items: [
            { text: '🔷 <mooves>Truck Frase</mooves>', link: '/encyclopedia/Move/TruckMove/Frase/Overview' },
            { text: '🟠 <mooves>Sleep</mooves>', link: '/encyclopedia/Move/TruckMove/Sleep' },
            { text: '🟠 <mooves>Sit</mooves>', link: '/encyclopedia/Move/TruckMove/Sit' },
          ]
        },
        { text: '🟠 <mooves>Kinesiology</mooves>', link: '/encyclopedia/Move/Kinesiology/KinesiologyOverview' },
      ],
    },
    // #Via
    {
      text: '🔻 <via>Via</via>', link: '/encyclopedia/Via/ViaOverview', collapsed: true, items: [
        { text: '🔷 <via>Via Sequence</via>', link: '/encyclopedia/Via/ViaSequence/Overview' },
        { text: '🔷 <via>Via Theoria</via>', link: '/encyclopedia/Via/ViaTheoria' },
        {
          text: '🔻 <via>ViaGeometry</via>', link: '/encyclopedia/Via/ViaGeometry/Overview', collapsed: true, items: [
            {
              text: '🔻 <via>ViaPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/Overview', collapsed: true, items: [
                { text: '🔻 <via>Viewpoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/Viewpoint' },
                { text: '🔻 <via>CenterPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/CenterPoint' },
                { text: '🔻 <via>InflectionPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/InflectionPoint' },
                { text: '🔻 <via>Midpoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/MidPoint' },
                { text: '🔻 <via>ReferencePoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/ReferencePoint' },
                { text: '🔻 <via>ReflectionPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
                { text: '🔻 <via>TargetPoint</via>', link: '/encyclopedia/Via/ViaGeometry/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔻 <via>Line</via>', link: '/encyclopedia/Via/ViaGeometry/Line/Overview', collapsed: true, items: [
                { text: '🔻 <via>AroundCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/CircumventCurve' },
                { text: '🔻 <via>GhostLine</via>', link: '/encyclopedia/Via/ViaGeometry/Line/GhostLine' },
                { text: '🔻 <via>ParallelCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/ParallelCurve' },
                { text: '🔻 <via>PerimeterCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/PerimeterCurve' },
                { text: '🔻 <via>SpiralCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/SpiralCurve' },
                { text: '🔻 <via>TurnAroundCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/TurnAroundCurve' },
                { text: '🔻 <via>ZigzagCurve</via>', link: '/encyclopedia/Via/ViaGeometry/Line/ZigzagCurve' },
              ]
            },
            {
              text: '🔻 <via>ViaSpace</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/Overview', collapsed: true, items: [
                { text: '🔻 <via>MaximumSpacing</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
                { text: '🔻 <via>MinimumSpacing</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
                { text: '🔻 <via>OptimalSpacing</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
                { text: '🔻 <via>ElasticSpacing</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
                { text: '🔻 <via>SpacingOnSlope</via>', link: '/encyclopedia/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔻 <via>Contact</via>', link: '/encyclopedia/Via/ViaGeometry/Contact/Overview', collapsed: true, items: [
                { text: '🔻 <via>Contact Texture</via>', link: '/encyclopedia/Via/Contact/ContactTexture' },
              ]
            },
          ]
        },
        {
          text: '🔻 <via>Via Problem</via>', link: '/encyclopedia/Via/ViaProblem/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🔻 <via>Via Theorem</via>', link: '/encyclopedia/Via/ViaTheorem/Overview', collapsed: true, items: [
            {
              text: '🔻 <via>Cover Algorithms</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/Overview', collapsed: true, items: [
                { text: '🔻 <via>BoustroCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/BoustroCover' },
                { text: '🔻 <via>CircleCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/CircleCover' },
                { text: '🔻 <via>DiamondCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/DiamondCover' },
                { text: '🔻 <via>SquareCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/SquareCover' },
                { text: '🔻 <via>TriangleCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/TriangleCover' },
                { text: '🔻 <via>ChunkCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/ChunkCover' },
                { text: '🔻 <via>BackCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/BackCover' },
                { text: '🔻 <via>OpenEndedCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/OpenEndedCover' },
                { text: '🔻 <via>PerimeterCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/PerimeterCover' },
                { text: '🔻 <via>TypewriterCover</via>', link: '/encyclopedia/Via/ViaTheorem/CoverAlgorithm/TypewriterCover' },
              ]
            },
            {
              text: '🔻 <via>ObstacleCover</via>', link: '/encyclopedia/Via/ViaTheorem/ObstacleCover/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🔻 <via>TeamCover</via>', collapsed: true, items: [
                { text: '🔻 <via>TeamPlant Overview</via>', link: '/encyclopedia/Via/ViaTheorem/TeamCover/Overview' },
                { text: '🔻 <via>BouncingCover</via>', link: '/encyclopedia/Via/ViaTheorem/TeamCover/BouncingCover' },
                { text: '🔻 <via>CrossingCover</via>', link: '/encyclopedia/Via/ViaTheorem/TeamCover/CrossingCover' },
                { text: '🔻 <via>FollowingCover</via>', link: '/encyclopedia/Via/ViaTheorem/TeamCover/FollowingCover' },
              ]
            },
          ]
        },
        {
          text: '🔻 <via>Marka</via>', link: '/encyclopedia/Via/Marka/Overview', collapsed: true, items: [
            { text: '🔻 <via>BoundaryMarka</via>', link: '/encyclopedia/Via/Marka/BoundaryMarka' },
            { text: '🔻 <via>MarkaLocation</via>', link: '/encyclopedia/Via/Marka/MarkaLocation' },
            { text: '🔻 <via>HighMarka</via>', link: '/encyclopedia/Via/Marka/HighMarka' },
            { text: '🔻 <via>LineInMarka</via>', link: '/encyclopedia/Via/Marka/LineInMarka' },
            { text: '🔻 <via>NaturalMarka</via>', link: '/encyclopedia/Via/Marka/NaturalMarka' },
            { text: '🔻 <via>TrenchExitMarka</via>', link: '/encyclopedia/Via/Marka/TrenchExitMarka' },
            { text: '🔻 <via>WastedMarka</via>', link: '/encyclopedia/Via/Marka/WastedMarka' },
          ]
        },
      ]
    },
    // #Psike
    {
      text: '💜 <psike>Psike</psike>', link: '/encyclopedia/Psike/NeuroOverview', collapsed: true, items: [
        { text: '🔷 <psike>Psike Theoria</psike>', link: '/encyclopedia/Psike/NeuroTheoria' },
        {
          text: '💜 <psike>Arousal</psike>', link: '/encyclopedia/Psike/Arousal/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Attention</psike>', link: '/encyclopedia/Psike/Attention/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Audio</psike>', link: '/encyclopedia/Psike/Audio/Overview', collapsed: true, items: [
            {
              text: '💜 <psike>Music</psike>', link: '/encyclopedia/Psike/Audio/Music/Overview', collapsed: true, items: [
                { text: '💜 <psike>Playlists</psike>', link: '/encyclopedia/Psike/Audio/Music/Overview' },
              ]
            },
            { text: '💜 <psike>BranchBreakSound</psike>', link: '/encyclopedia/Psike/Audio/BranchBreakSound' },
            { text: '💜 <psike>LogBreakSound</psike>', link: '/encyclopedia/Psike/Audio/LogBreakSound' },
            { text: '💜 <psike>SlashSound</psike>', link: '/encyclopedia/Psike/Audio/SlashSound' },
            { text: '💜 <psike>SpadeSound</psike>', link: '/encyclopedia/Psike/Audio/SpadeSound' },
            { text: '💜 <psike>SoilSound</psike>', link: '/encyclopedia/Psike/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 <psike>Awareness</psike>', link: '/encyclopedia/Psike/Awareness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Counting</psike>', link: '/encyclopedia/Psike/Counting/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Decision</psike>', collapsed: true, items: [
            { text: '💜 <psike>GoOrNoGo</psike>', link: '/encyclopedia/Psike/Decision/GoOrNoGo' },
            { text: '💜 <psike>MicrositeSelection</psike>', link: '/encyclopedia/Psike/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 <psike>Emotion</psike>', link: '/encyclopedia/Psike/Emotion/Overview', collapsed: true, items: [
            { text: '💜 <psike>Anger</psike>', link: '/encyclopedia/Psike/Emotion/Anger' },
            { text: '💜 <psike>Disgust</psike>', link: '/encyclopedia/Psike/Emotion/Disgust' },
            { text: '💜 <psike>Fear</psike>', link: '/encyclopedia/Psike/Emotion/Fear' },
            { text: '💜 <psike>Joy</psike>', link: '/encyclopedia/Psike/Emotion/Joy' },
            { text: '💜 <psike>Sadness</psike>', link: '/encyclopedia/Psike/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 <psike>Energy</psike>', link: '/encyclopedia/Psike/Energy/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Estimation</psike>', collapsed: true, items: [
            { text: '💜 <psike>AreaEstimation</psike>', link: '/encyclopedia/Psike/Estimation/AreaEstimation' },
            { text: '💜 <psike>BagCoverEstimation</psike>', link: '/encyclopedia/Psike/Estimation/BagCoverEstimation' },
            { text: '💜 <psike>DistanceEstimation</psike>', link: '/encyclopedia/Psike/Estimation/DistanceEstimation' },
            { text: '💜 <psike>TimeEstimation</psike>', link: '/encyclopedia/Psike/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 <psike>Event</psike>', link: '/encyclopedia/Psike/Event/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Homeostasis</psike>', link: '/encyclopedia/Psike/Homeostasis/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Memory</psike>', link: '/encyclopedia/Psike/Memory/Overview', collapsed: true, items: [
            { text: '💜 <psike>WorkingMemory</psike>', link: '/encyclopedia/Psike/Memory/WorkingMemory' },
            { text: '💜 <psike>ShortTermMemory</psike>', link: '/encyclopedia/Psike/Memory/ShortTermMemory' },
            { text: '💜 <psike>LongTermMemory</psike>', link: '/encyclopedia/Psike/Memory/LongTermMemory' },
            { text: '💜 <psike>NumberMemory</psike>', link: '/encyclopedia/Psike/Memory/NumberMemory' },
            { text: '💜 <psike>ViaMemory</psike>', link: '/encyclopedia/Psike/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 <psike>Mindfulness</psike>', link: '/encyclopedia/Psike/Mindfulness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Muscle</psike>', link: '/encyclopedia/Psike/Muscle/Overview', collapsed: true, items: [
          ]
        },
        { text: '💜 <psike>Proprioception</psike>', link: '/encyclopedia/Psike/Proprioception/Overview' },
        { text: '💜 <psike>Resilience</psike>', link: '/encyclopedia/Psike/Resilience/Overview' },
        {
          text: '💜 <psike>SpatialCognition</psike>', link: '/encyclopedia/Psike/SpatialCognition/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Time</psike>', link: '/encyclopedia/Psike/Time/Overview', collapsed: true, items: [
            { text: '💜 <psike>BagUpTime</psike>', link: '/encyclopedia/Psike/Time/BagUpTime' },
            { text: '💜 <psike>DailySchedule</psike>', link: '/encyclopedia/Psike/Time/DailySchedule' },
            { text: '💜 <psike>MoveTiming</psike>', link: '/encyclopedia/Psike/Time/MoveTiming' },
            { text: '💜 <psike>Planning</psike>', link: '/encyclopedia/Psike/Time/Planning' },
            { text: '💜 <psike>Timer</psike>', link: '/encyclopedia/Psike/Time/Timer' },
          ]
        },
        { text: '💜 <psike>Thermoception</psike>', link: '/encyclopedia/Psike/Thermoception' },
      ]
    },
    { text: '📃 Lexikon', link: '/encyclopedia/glossary/Glossary' },
    { text: '📷 Media Database', link: '/encyclopedia/media/Overview' }
  ]
}

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
