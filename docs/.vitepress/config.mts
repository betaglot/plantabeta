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
    ["link", { rel: "apple-touch-icon", href: "/BetaIkon/Ekos_Ikon.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/BetaIkon/Ekos_Ikon.png" }]
  ],
  themeConfig: {

    outline: [2, 4],
    logo: '/BetaIkon/Ekos_Ikon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/betaglot/plantabeta' }
    ],
    footer: {
      message: "Library released under <a style='text-decoration:underline;' href='https://github.com/betaglot/putplant/blob/main/LICENSE'>MIT License</a>.",
      copyright: `Copyright © 2023–${new Date().getUTCFullYear()} Christopher Duncan`
    },
    search: {
      provider: 'local'
    },

    siteTitle: 'PlantaBeta',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/tutorial/': sidebarTutorial(),
      '/reference/': sidebarReference(),
      '/dev/': sidebarDevelopment(),
      '/app/': sidebarApp()
    }
  }
})

// // #Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/What/WhatPutPlant',
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
      text: 'ELEMENTS',
      link: '/reference/RefOverview',
      activeMatch: '/reference/'
    },
    {
      text: '🔷',
      link: '/app/Overview',
      activeMatch: '/app/'
    },
    {
      text: '🛠',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    }
  ]
}
// #Dev
function sidebarDevelopment() {
  return [
    { text: '<dev>Dev Overview</dev>', link: '/dev/DevOverview' },
    { text: '<dev>🔷 Betaglot</dev>', link: '/dev/Betaglot' },
    { text: '<dev>Contact</dev>', link: '/dev/Contact' },
    { text: '<dev>Academia</dev>', link: '/dev/Academia' },
    { text: '<dev>Art</dev>', link: '/dev/art/Overview' },
    { text: '<dev>👩‍💻 BePython</dev>', link: '/dev/BePython' },
    { text: '<dev>Contribute</dev>', link: '/dev/Contribute' },
    { text: '<dev>Downloads</dev>', link: '/dev/Downloads' },
    { text: '<dev>DX</dev>', link: '/dev/DX' },
    { text: '<dev>ElementGraph</dev>', link: '/dev/ElementsGraph' },
    { text: '<dev>Filming</dev>', link: '/dev/Filming' },
    { text: '<dev>FireBeta</dev>', link: '/FireBeta/FireBeta' },
    { text: '<dev>GoPro</dev>', link: '/dev/GoPro' },
    {
      text: '<dev>Graphics</dev>', collapsed: true, items: [
        { text: '<dev>Overview</dev>', link: '/dev/Graphics/Overview' },
        { text: '<beta>Beta Graphics</beta>', link: '/dev/Graphics/BetaGraphic' },
        { text: '<ekos>Ekos Graphics</ekos>', link: '/dev/Graphics/EcoGraphic' },
        { text: '<mooves>Moove Graphics</mooves>', link: '/dev/Graphics/MoovesGraphic' },
        { text: '<psike>Psike Graphics</psike>', link: '/dev/Graphics/NeuroGraphic' },
        { text: '<via>Via Graphics</via>', link: '/dev/Graphics/ViaGraphic' },
        { text: 'UX Graphics', link: '/dev/Graphics/UXGraphic' },
        { text: '<dev>DX Graphics</dev>', link: '/dev/Graphics/DXGraphic' },
      ]
    },
    { text: '<dev>Mindmap</dev>', link: '/dev/Mindmap' },
    { text: '<dev>Offline</dev>', link: '/dev/Offline' },
    { text: '<dev>Open Source</dev>', link: '/dev/OpenSource' },
    { text: '<dev>PaperPhoto</dev>', link: '/dev/PaperPhoto' },
    { text: '<dev>Podcast</dev>', link: '/dev/Podcast' },
    { text: '<dev>Pylanter</dev>', link: '/dev/Pylanter' },
    { text: '<dev>Research Questions</dev>', link: '/dev/ResearchQuestions' },
    { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
    { text: '<dev>Sequence</dev>', link: '/dev/Sequence' },
    { text: '<dev>SocialMedia</dev>', link: '/dev/SocialMedia' },
    { text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide' },
    { text: '<dev>Tagging</dev>', link: '/dev/Tagging' },
    { text: '<dev>TaskList</dev>', link: '/dev/TaskList' },
    { text: '<dev>ToDo</dev>', link: '/dev/ToDo' },
    { text: '<dev>Tools</dev>', link: '/dev/Tools' },
    { text: '<dev>UX</dev>', link: '/dev/UX' },
    { text: '<dev>AfternoonTask</dev>', link: '/dev/AfternoonTask' },
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
        { text: 'What is 🔷<beta>Put(<ekos>Plant</ekos>)</beta>?', link: '/guide/What/WhatPutPlant' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: '🔥<ekos>To Support Ecosystems</ekos>', link: '/guide/Why/SupportEcosystem' },
        { text: '🟠<mooves>To Reduce Injury</mooves>', link: '/guide/Why/Injury' },
        { text: '🔻<via>To Increase Productivity</via>', link: '/guide/Why/Productivity' },
        { text: '🔷<beta>To Improve Communication</beta>', link: '/guide/Why/Communication' },
        { text: '💜<psike>To Steepen Learning Curve</psike>', link: '/guide/Why/LearningCurve' },
        { text: '💲To Increase Profit', link: '/guide/Why/Company' }
      ]
    },
    {
      text: 'Plantor Guide', collapsed: false, items: [
        { text: 'Potential Plantor', link: '/guide/Who/PotentialPlantor' },
        { text: 'Novice Plantor', link: '/guide/Who/NovicePlantor' },
        { text: 'Experienced Plantor', link: '/guide/Who/ExperiencedPlantor' },
        { text: 'Plantor Supervisor', link: '/guide/Who/PlantorSupervisor' },
        { text: 'Plantor Instructor', link: '/guide/Who/PlantorInstructor' }
      ]
    },
    {
      text: 'Gear Guide', collapsed: false, items: [
        { text: 'What Gear to bring?', link: '/guide/What/WhatGear' },
        { text: 'Gear List', link: '/guide/What/GearList' }
      ]
    },
    { text: 'Go to Examples', link: '/examples/Overview' },
  ]
}
// 
function sidebarReference() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference/RefOverview' },
    // #Beta
    {
      text: '🔷 <beta>Beta</beta>', link: '/reference/Beta/WhatBeta', collapsed: true, items: [
        { text: '🔷 <beta>BetaExamples</beta>', link: '/reference/Beta/BetaExamples' },
        { text: '🔷 <beta>BetaLingo</beta>', link: '/reference/Beta/BetaLingo/Overview' },
        { text: '🔷 <beta>BetaDiagram</beta>', link: '/reference/Beta/BetaDiagram' },
        {
          text: '🔷 <beta>Plantbeta</beta>', link: '/reference/Beta/Plantbeta/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaElement</beta>', link: '/reference/Beta/Plantbeta/BetaElement' },
            { text: '🔷 <beta>BetaMethod</beta>', link: '/reference/Beta/Plantbeta/BetaMethod' },
            { text: '🔷 <beta>BetaBlock</beta>', link: '/reference/Beta/Plantbeta/BetaBlock' },
          ]
        },
        {
          text: '🔷 <beta>BetaScore</beta>', link: '/reference/Beta/BetaScore/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaExecutionScore</beta>', link: '/reference/Beta/BetaScore/BetaExecutionScore' },
            {
              text: '🔷 <beta>BetaTeoriScore</beta>', link: '/reference/Beta/BetaScore/BetaTeoriScore/Overview', collapsed: true, items: [
                { text: '🔷 <beta>BetaTeknikScore</beta>', link: '/reference/Beta/BetaScore/BetaTeoriScore/BetaTeknikScore' },
                { text: '🔷 <beta>BetaKuboiScore</beta>', link: '/reference/Beta/BetaScore/BetaTeoriScore/BetaKuboiScore' },
                { text: '🔷 <beta>BetaKratosScore</beta>', link: '/reference/Beta/BetaScore/BetaTeoriScore/BetaKratosScore' }
              ]
            }
          ]
        },
        {
          text: '🔷 <beta>BetaTeori</beta>', link: '/reference/Beta/BetaTeori/Overview', collapsed: true, items: [
            { text: '🔷 <beta>BetaTeknik</beta>', link: '/reference/Beta/BetaTeori/BetaTeknik' },
            { text: '🔷 <beta>BetaKratos</beta>', link: '/reference/Beta/BetaTeori/BetaKratos' },
            { text: '🔷 <beta>BetaKuboi</beta>', link: '/reference/Beta/BetaTeori/BetaKuboi' }
          ]
        },
        {
          text: '🔷 <beta>BetaVideo</beta>', link: '/reference/Beta/BetaVideo/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    // #Eko
    {
      text: '🟩 <ekos>Ekos</ekos>', collapsed: true, link: '/reference/Eko/EkoOverview', items: [
        {
          text: '🔷 <ekos>Ekos Teori</ekos>', link: '/reference/Eko/EkoTeori', collapsed: true, items: [
            { text: '🟩 <ekos>EcoTeknik</ekos>', link: '/reference/Eko/EcoTeori/EcoTeknik' },
            { text: '🟩 <ekos>EcoKratos</ekos>', link: '/reference/Eko/EcoTeori/EcoKratos' },
            { text: '🟩 <ekos>EcoKuboi</ekos>', link: '/reference/Eko/EcoTeori/EcoKuboi' },
          ]
        },
        {
          text: '🟩 <ekos>Animals</ekos>', link: '/reference/Eko/Animals/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🟩 <ekos>Atmosphere</ekos>', link: '/reference/Eko/Atmosphere/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>AirTemperature</ekos>', link: '/reference/Eko/Atmosphere/AirTemperature' },
            { text: '🟩 <ekos>Humidity</ekos>', link: '/reference/Eko/Atmosphere/Humidity' },
            { text: '🟩 <ekos>Precipitation</ekos>', link: '/reference/Eko/Atmosphere/Precipitation' },
            { text: '🟩 <ekos>Wind</ekos>', link: '/reference/Eko/Atmosphere/Wind' },
          ]
        },
        {
          text: '🟩 <ekos>Block</ekos>', link: '/reference/Eko/Block/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>FillBlock</ekos>', link: '/reference/Eko/Block/FillBlock' },
            { text: '🟩 <ekos>Road</ekos>', link: '/reference/Eko/Block/Road' },
          ]
        },
        {
          text: '🟩 <ekos>Density</ekos>', link: '/reference/Eko/Density/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>Plot</ekos>', link: '/reference/Eko/Density/Plot' },
          ]
        },
        {
          text: '🟩 <ekos>LandSpeed</ekos>', link: '/reference/Eko/LandSpeed/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>FastLand</ekos>', link: '/reference/Eko/LandSpeed/FastLand' },
            { text: '🟩 <ekos>SlowLand</ekos>', link: '/reference/Eko/LandSpeed/SlowLand' },
          ]
        },
        {
          text: '🟩 <ekos>Obstacle</ekos>', link: '/reference/Eko/Obstacle/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>HoleObstacle</ekos>', link: '/reference/Eko/Obstacle/HoleObstacle' },
            { text: '🟩 <ekos>LogObstacle</ekos>', link: '/reference/Eko/Obstacle/LogObstacle' },
            { text: '🟩 <ekos>MicrositeObstacle</ekos>', link: '/reference/Eko/Obstacle/MicrositeObstacle' },
            { text: '🟩 <ekos>RockObstacle</ekos>', link: '/reference/Eko/Obstacle/RockObstacle' },
            { text: '🟩 <ekos>StumpObstacle</ekos>', link: '/reference/Eko/Obstacle/StumpObstacle' },
          ]
        },
        {
          text: '🟩 <ekos>Piece</ekos>', link: '/reference/Eko/Piece/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>PieceTopography</ekos>', link: '/reference/Eko/Piece/PieceTopography' },
          ]
        },
        {
          text: '🟩 <ekos>Prep</ekos>', link: '/reference/Eko/Prep/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>MoundLand</ekos>', link: '/reference/Eko/Prep/MoundLand' },
            { text: '🟩 <ekos>TrenchLand</ekos>', link: '/reference/Eko/Prep/TrenchLand' },
            { text: '🟩 <ekos>DeactivatedRoad</ekos>', link: '/reference/Eko/Prep/TrenchLand' },
          ]
        },
        {
          text: '🟩 <ekos>Raw</ekos>', link: '/reference/Eko/Raw/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>StumpLand</ekos>', link: '/reference/Eko/Raw/StumpLand' },
            { text: '🟩 <ekos>BurntLand</ekos>', link: '/reference/Eko/Raw/BurntLand' },
            { text: '🟩 <ekos>RiparianLand</ekos>', link: '/reference/Eko/Raw/RiparianLand' },
            { text: '🟩 <ekos>RockyLand</ekos>', link: '/reference/Eko/Raw/RockyLand' },
          ]
        },
        {
          text: '🟩 <ekos>Slash</ekos>', link: '/reference/Eko/Slash/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>BurnPileSlash</ekos>', link: '/reference/Eko/Slash/BurnPileSlash' },
            { text: '🟩 <ekos>HighSlash</ekos>', link: '/reference/Eko/Slash/HighSlash' },
            { text: '🟩 <ekos>LowSlash</ekos>', link: '/reference/Eko/Slash/LowSlash' },
            { text: '🟩 <ekos>WetSlash</ekos>', link: '/reference/Eko/Slash/WetSlash' },
          ]
        },
        {
          text: '🟩 <ekos>Soil</ekos>', link: '/reference/Eko/Soil/Overview', collapsed: true, items: [
            { text: '🟩 <ekos>Hole</ekos>', link: '/reference/Eko/Soil/Hole' },
            { text: '🟩 <ekos>ClaySoil</ekos>', link: '/reference/Eko/Soil/ClaySoil' },
            { text: '🟩 <ekos>DrySoil</ekos>', link: '/reference/Eko/Soil/DrySoil' },
            { text: '🟩 <ekos>GravelSoil</ekos>', link: '/reference/Eko/Soil/GravelSoil' },
            { text: '🟩 <ekos>MineralSoil</ekos>', link: '/reference/Eko/Soil/MineralSoil' },
            { text: '🟩 <ekos>RedRot</ekos>', link: '/reference/Eko/Soil/RedRot' },
            { text: '🟩 <ekos>SandSoil</ekos>', link: '/reference/Eko/Soil/SandSoil' },
            { text: '🟩 <ekos>WetSoil</ekos>', link: '/reference/Eko/Soil/WetSoil' },
          ]
        },
        {
          text: '🟩 <ekos>Sun</ekos>', link: '/reference/Eko/Sun/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🟩 <ekos>Plants</ekos>', link: '/reference/Eko/Plants/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    // #Moove
    {
      text: '🟠 <mooves>Mooves</mooves>', link: '/reference/Mooves/MoovesOverview', collapsed: true, items: [
        { text: '🟠 <mooves>Frase</mooves>', link: '/reference/Mooves/Frase/Overview' },
        {
          text: '🟠 <mooves>TEORI</mooves>', link: '/reference/Mooves/MoovesTeori/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>MooveTeknik</mooves>', link: '/reference/Mooves/MoovesTeori/MoovesTeknik' },
            { text: '🟠 <mooves>MooveKratos</mooves>', link: '/reference/Mooves/MoovesTeori/MoovesKratos' },
            { text: '🟠 <mooves>MooveKuboi</mooves>', link: '/reference/Mooves/MoovesTeori/MoovesKuboi' },
          ],
        },
        {
          text: '🟠 <mooves>MooveGeometry</mooves>', collapsed: true, items: [
            { text: '🟠 <mooves>Overview</mooves>', link: '/reference/Mooves/MoovesGeometry/Overview' },
            { text: '🟠 <mooves>MoovePoint</mooves>', link: '/reference/Mooves/MoovesGeometry/MoovesPoint' },
            { text: '🟠 <mooves>MooveCurve</mooves>', link: '/reference/Mooves/MoovesGeometry/MoovesCurve' },
            { text: '🟠 <mooves>MooveSpace</mooves>', link: '/reference/Mooves/MoovesGeometry/MoovesSpace' },
            { text: '🟠 <mooves>MooveSurface</mooves>', link: '/reference/Mooves/MoovesGeometry/MoovesSurface' },
          ]
        },
        {
          text: '🟠 <mooves>BrazoMoove</mooves>', link: '/reference/Mooves/BrazoMooves/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Arm Frase</mooves>', link: '/reference/Mooves/BrazoMooves/Frase/Overview' },
            { text: '🟠 <mooves>BrazoAma</mooves>', link: '/reference/Mooves/BrazoMooves/BrazoAma' },
            { text: '🟠 <mooves>ArmKurve</mooves>', link: '/reference/Mooves/BrazoMooves/ArmKurve' },
            { text: '🟠 <mooves>ArmWalk</mooves>', link: '/reference/Mooves/BrazoMooves/ArmWalk' },
            { text: '🟠 <mooves>ArmBalance</mooves>', link: '/reference/Mooves/BrazoMooves/ArmBalance' },
          ]
        },
        {
          text: '🟠 <mooves>KorposMooves</mooves>', link: '/reference/Mooves/KorposMooves/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Body Frase</mooves>', link: '/reference/Mooves/KorposMooves/Frase/Overview' },
            { text: '🟠 <mooves>BodyAbsorb</mooves>', link: '/reference/Mooves/KorposMooves/BodyAbsorb' },
            { text: '🟠 <mooves>BodyBend</mooves>', link: '/reference/Mooves/KorposMooves/BodyBend' },
            { text: '🟠 <mooves>BodyLean</mooves>', link: '/reference/Mooves/KorposMooves/BodyLean' },
            { text: '🟠 <mooves>KorpoOrbit</mooves>', link: '/reference/Mooves/KorposMooves/KorpoOrbit' },
            { text: '🟠 <mooves>BodyRotate</mooves>', link: '/reference/Mooves/KorposMooves/BodyRotate' },
            { text: '🟠 <mooves>BodySlot</mooves>', link: '/reference/Mooves/KorposMooves/BodySlot' },
            { text: '🟠 <mooves>Fall</mooves>', link: '/reference/Mooves/KorposMooves/Fall' },
          ]
        },
        {
          text: '🟠 <mooves>CacheMooves</mooves>', link: '/reference/Mooves/CacheMoove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Cache Frase</mooves>', link: '/reference/Mooves/CacheMoove/Frase/Overview' },
            { text: '🟠 <mooves>Eating</mooves>', link: '/reference/Mooves/CacheMoove/Eating' },
            { text: '🟠 <mooves>TarpOff</mooves>', link: '/reference/Mooves/CacheMoove/TarpOff' },
            { text: '🟠 <mooves>TarpOn</mooves>', link: '/reference/Mooves/CacheMoove/TarpOn' },
          ]
        },
        {
          text: '🟠 <mooves>ClothingMooves</mooves>', link: '/reference/Mooves/ClothingMooves/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Clothing Frase</mooves>', link: '/reference/Mooves/ClothingMooves/Frase/Overview' },
            { text: '🟠 <mooves>Button</mooves>', link: '/reference/Mooves/ClothingMooves/Button' },
            { text: '🟠 <mooves>ClothingLayer</mooves>', link: '/reference/Mooves/ClothingMooves/ClothingLayer' },
            { text: '🟠 <mooves>RemoveMud</mooves>', link: '/reference/Mooves/ClothingMooves/RemooveMud' },
            { text: '🟠 <mooves>ZipperMooves</mooves>', link: '/reference/Mooves/ClothingMooves/ZipperMoove' },
          ]
        },
        {
          text: '🟠 <mooves>FootMooves</mooves>', link: '/reference/Mooves/BaseMooves/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Foot Frase</mooves>', link: '/reference/Mooves/BaseMooves/Frase/Overview' },
            { text: '🟠 <mooves>FootArchSmear</mooves>', link: '/reference/Mooves/BaseMooves/FootArchSmear' },
            { text: '🟠 <mooves>FootSeal</mooves>', link: '/reference/Mooves/BaseMooves/FootSeal' },
            { text: '🟠 <mooves>FootDig</mooves>', link: '/reference/Mooves/BaseMooves/FootDig' },
            { text: '🟠 <mooves>FootDorsiflexion</mooves>', link: '/reference/Mooves/BaseMooves/FootDorsiflexion' },
            { text: '🟠 <mooves>FootDrag</mooves>', link: '/reference/Mooves/BaseMooves/FootDrag' },
            { text: '🟠 <mooves>FootEversion</mooves>', link: '/reference/Mooves/BaseMooves/FootEversion' },
            { text: '🟠 <mooves>FootInversion</mooves>', link: '/reference/Mooves/BaseMooves/FootInversion' },
            { text: '🟠 <mooves>FootSkreef</mooves>', link: '/reference/Mooves/BaseMooves/FootSkreef' },
            { text: '🟠 <mooves>PlantarFlexion</mooves>', link: '/reference/Mooves/BaseMooves/PlantarFlexion' },
          ]
        },
        {
          text: '🟠 <mooves>ManoMooves</mooves>', link: '/reference/Mooves/ManoMoove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Hand Frase</mooves>', link: '/reference/Mooves/ManoMoove/Frase/Overview' },
            { text: '🟠 <mooves>BagMano</mooves>', link: '/reference/Mooves/ManoMoove/BagMano' },
            { text: '🟠 <mooves>BoxMano</mooves>', link: '/reference/Mooves/ManoMoove/BoxMano' },
            { text: '🟠 <mooves>BranchMano</mooves>', link: '/reference/Mooves/ManoMoove/BranchMano' },
            { text: '🟠 <mooves>BranchSnapMano</mooves>', link: '/reference/Mooves/ManoMoove/BranchSnapMano' },
            { text: '🟠 <mooves>HandClose</mooves>', link: '/reference/Mooves/ManoMoove/HandClose' },
            { text: '🟠 <mooves>HandPoke</mooves>', link: '/reference/Mooves/ManoMoove/HandPoke' },
            { text: '🟠 <mooves>HandSkreef</mooves>', link: '/reference/Mooves/ManoMoove/HandSkreef' },
            { text: '🟠 <mooves>SpadeHandleMano</mooves>', link: '/reference/Mooves/ManoMoove/SpadeHandleMano' },
            { text: '🟠 <mooves>SpadeCollarMano</mooves>', link: '/reference/Mooves/ManoMoove/SpadeCollarMano' },
            { text: '🟠 <mooves>TreeMano</mooves>', link: '/reference/Mooves/ManoMoove/TreeMano' },
            { text: '🟠 <mooves>TreeTestMano</mooves>', link: '/reference/Mooves/ManoMoove/TreeTestMano' },
          ]
        },
        {
          text: '🟠 <mooves>HeadMooves</mooves>', link: '/reference/Mooves/HeadMoove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Head Frase</mooves>', link: '/reference/Mooves/HeadMoove/Frase/Overview' },
            { text: '🟠 <mooves>FocusLook</mooves>', link: '/reference/Mooves/HeadMoove/FocusLook' },
            { text: '🟠 <mooves>HeadProtraction</mooves>', link: '/reference/Mooves/HeadMoove/HeadProtraction' },
            { text: '🟠 <mooves>HeadRetraction</mooves>', link: '/reference/Mooves/HeadMoove/HeadRetraction' },
            { text: '🟠 <mooves>HeadTiltIntoWind</mooves>', link: '/reference/Mooves/HeadMoove/HeadTiltIntoWind' },
            { text: '🟠 <mooves>Hearing</mooves>', link: '/reference/Mooves/HeadMoove/Hearing' },
            { text: '🟠 <mooves>LookAway</mooves>', link: '/reference/Mooves/HeadMoove/LookAway' },
            { text: '🟠 <mooves>NeckExtension</mooves>', link: '/reference/Mooves/HeadMoove/NeckExtension' },
          ]
        },
        {
          text: '🟠 <mooves>HoleMooves</mooves>', link: '/reference/Mooves/HoleMoove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Hole Frase</mooves>', link: '/reference/Mooves/HoleMoove/Frase/Overview' },
            { text: '🟠 <mooves>HoleClose</mooves>', link: '/reference/Mooves/HoleMoove/HoleClose' },
            { text: '🟠 <mooves>HoleExpand</mooves>', link: '/reference/Mooves/HoleMoove/HoleExpand' },
            { text: '🟠 <mooves>HoleOpen</mooves>', link: '/reference/Mooves/HoleMoove/HoleOpen' },
          ]
        },
        {
          text: '🟠 <mooves>BaseMooves</mooves>', link: '/reference/Mooves/LegMoove/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>Leg Frase</mooves>', link: '/reference/Mooves/LegMoove/Frase/Overview' },
            { text: '🟠 <mooves>Crouch</mooves>', link: '/reference/Mooves/LegMoove/Overview' },
            { text: '🟠 <mooves>Jump</mooves>', link: '/reference/Mooves/LegMoove/Jump' },
            { text: '🟠 <mooves>Kneel</mooves>', link: '/reference/Mooves/LegMoove/Kneel' },
            { text: '🟠 <mooves>LegAbduction</mooves>', link: '/reference/Mooves/LegMoove/LegAbduction' },
            { text: '🟠 <mooves>LegAbsorb</mooves>', link: '/reference/Mooves/LegMoove/LegAbsorb' },
            { text: '🟠 <mooves>LegAdduction</mooves>', link: '/reference/Mooves/LegMoove/LegAdduction' },
            { text: '🟠 <mooves>LegFlap</mooves>', link: '/reference/Mooves/LegMoove/LegFlap' },
            { text: '🟠 <mooves>LegFlexion</mooves>', link: '/reference/Mooves/LegMoove/LegFlexion' },
            { text: '🟠 <mooves>BaseAma</mooves>', link: '/reference/Mooves/LegMoove/BaseAma' },
            { text: '🟠 <mooves>LegSidebagLift</mooves>', link: '/reference/Mooves/LegMoove/LegSidebagLift' },
            { text: '🟠 <mooves>LegKurve</mooves>', link: '/reference/Mooves/LegMoove/LegKurve' },
            { text: '🟠 <mooves>RunningStart</mooves>', link: '/reference/Mooves/LegMoove/RunningStart' },
            { text: '🟠 <mooves>Step</mooves>', link: '/reference/Mooves/LegMoove/Step' },
            { text: '🟠 <mooves>Stomp</mooves>', link: '/reference/Mooves/LegMoove/Stomp' },
          ]
        },
        {
          text: '🟠 <mooves>PlantMooves</mooves>', link: '/reference/Mooves/FloraMooves/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>BranchMooves</mooves>', link: '/reference/Mooves/FloraMooves/BranchMoove' },
            { text: '🟠 <mooves>BranchWhip</mooves>', link: '/reference/Mooves/FloraMooves/BranchWhip' },
            { text: '🟠 <mooves>Bush</mooves>', link: '/reference/Mooves/FloraMooves/Bush' },
            { text: '🟠 <mooves>Log</mooves>', link: '/reference/Mooves/FloraMooves/Log' },
            { text: '🟠 <mooves>SlashPile</mooves>', link: '/reference/Mooves/FloraMooves/SlashPile' },
            { text: '🟠 <mooves>Stump</mooves>', link: '/reference/Mooves/FloraMooves/Stump' },
          ]
        },
        {
          text: '🟠 <mooves>Skreef</mooves>', link: '/reference/Mooves/Skreef/Overview', collapsed: true, items: [
            { text: '🟠 <mooves>BootSkreef</mooves>', link: '/reference/Mooves/InstrumentMooves/Boot/BootSkreef' },
            { text: '🟠 <mooves>HandSkreef</mooves>', link: '/reference/Mooves/ManoMoove/HandSkreef' },
            { text: '🟠 <mooves>SpadeSkreef</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeSkreef' },
          ]
        },
        {
          text: '🟠 <mooves>InstrumentMooves</mooves>', link: '/reference/Mooves/InstrumentMooves/Overview', collapsed: true, items: [
            {
              text: '🟠 <mooves>Bag</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/Overview', collapsed: true, items: [
                { text: '🟠 <mooves>BagMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/BagMano' },
                { text: '🔷 <mooves>Bag Frase</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/Frase/Overview' },
                { text: '🟠 <mooves>BagAdjustment</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/BagAdjustment' },
                { text: '🟠 <mooves>BagDeadlift</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/BagDeadlift' },
                { text: '🟠 <mooves>BagEmpty</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/BagEmpty' },
                { text: '🟠 <mooves>BaggingUp</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/BaggingUp' },
                { text: '🟠 <mooves>BagOff</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/BagOff' },
                { text: '🟠 <mooves>BagOn</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/BagOn' },
                { text: '🟠 <mooves>BagSlide</mooves>', link: '/reference/Mooves/InstrumentMooves/Bag/BagSlide' },
              ]
            },
            {
              text: '🟠 <mooves>Boot</mooves>', link: '/reference/Mooves/InstrumentMooves/Boot/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Boot Frase</mooves>', link: '/reference/Mooves/InstrumentMooves/Boot/Frase/Overview' },
                { text: '🟠 <mooves>BootMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Boot/BootMano' },
                { text: '🟠 <mooves>BootSkreef</mooves>', link: '/reference/Mooves/InstrumentMooves/Boot/BootSkreef' },
                { text: '🟠 <mooves>LaceKnot</mooves>', link: '/reference/Mooves/InstrumentMooves/Boot/LaceKnot' },
              ]
            },
            {
              text: '🟠 <mooves>Box</mooves>', link: '/reference/Mooves/InstrumentMooves/Box/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Box Frase</mooves>', link: '/reference/Mooves/InstrumentMooves/Box/Frase/Overview' },
                { text: '🟠 <mooves>BoxMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Box/BoxMano' },
              ]
            },
            {
              text: '🟠 <mooves>Bundle</mooves>', link: '/reference/Mooves/InstrumentMooves/Bundle/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Bundle Frase</mooves>', link: '/reference/Mooves/InstrumentMooves/Bundle/Frase/Overview' },
                { text: '🟠 <mooves>BundleMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Bundle/BundleMano' },
                { text: '🟠 <mooves>BundlePeel</mooves>', link: '/reference/Mooves/InstrumentMooves/Bundle/BundlePeel' },
              ]
            },
            {
              text: '🟠 <mooves>Carabiner</mooves>', link: '/reference/Mooves/InstrumentMooves/Carabiner/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <mooves>Marka</mooves>', link: '/reference/Mooves/InstrumentMooves/Marka/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Marka Frase</mooves>', link: '/reference/Mooves/InstrumentMooves/Marka/Frase/Overview' },
                { text: '🟠 <mooves>MarkaMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaMano' },
                { text: '🟠 <mooves>MarkaKnot</mooves>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaKnot' },
                { text: '🟠 <mooves>MarkaReload</mooves>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaReload' },
                { text: '🟠 <mooves>MarkaRip</mooves>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaRip' },
                { text: '🟠 <mooves>MarkaRoll</mooves>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaRoll' },
              ]
            },
            {
              text: '🟠 <mooves>Tibior</mooves>', link: '/reference/Mooves/InstrumentMooves/Tibior/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Tibior Frase</mooves>', link: '/reference/Mooves/InstrumentMooves/Tibior/Frase/Overview' },
                { text: '🟠 <mooves>TibiorMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Tibior/TibiorMano' },
                { text: '🟠 <mooves>TibiorOn</mooves>', link: '/reference/Mooves/InstrumentMooves/Tibior/TibiorOn' },
                { text: '🟠 <mooves>TibiorOff</mooves>', link: '/reference/Mooves/InstrumentMooves/Tibior/TibiorOff' },
              ]
            },
            {
              text: '🟠 <mooves>Glove</mooves>', link: '/reference/Mooves/InstrumentMooves/Glove/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Glove Frase</mooves>', link: '/reference/Mooves/InstrumentMooves/Glove/Frase/Overview' },
                { text: '🟠 <mooves>GloveMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Glove/GloveMano' },
              ]
            },
            {
              text: '🟠 <mooves>Kit</mooves>', link: '/reference/Mooves/InstrumentMooves/Kit/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <mooves>Rope</mooves>', link: '/reference/Mooves/InstrumentMooves/Rope/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <mooves>Spade</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/Overview', collapsed: true, items: [
                { text: '🔷 <mooves>Spade Frase</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/Frase/Overview' },
                { text: '🟠 <mooves>SpadeAmble</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeAmble' },
                { text: '🟠 <mooves>SpadeAnchor</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeAnchor' },
                { text: '🟠 <mooves>SpadeChop</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeChop' },
                { text: '🟠 <mooves>SpadeCone</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeCone' },
                { text: '🟠 <mooves>SpadeDrag</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeDrag' },
                { text: '🟠 <mooves>SpadeMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeMano' },
                { text: '🟠 <mooves>SpadeBallista</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeBallista' },
                { text: '🟠 <mooves>SpadePendulum</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadePendulum' },
                { text: '🟠 <mooves>SpadePogo</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadePogo' },
                { text: '🟠 <mooves>SpadePoke</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadePoke' },
                { text: '🟠 <mooves>SpadePost</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadePost' },
                { text: '🟠 <mooves>SpadeAma</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeAma' },
                { text: '🟠 <mooves>SpadeRotate</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeRotate' },
                { text: '🟠 <mooves>SpadeSkreef</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeSkreef' },
                { text: '🟠 <mooves>SpadeImpact</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeImpact' },
                { text: '🟠 <mooves>SpadeStall</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeStall' },
                { text: '🟠 <mooves>SpadeStomp</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeStomp' },
                { text: '🟠 <mooves>SpadeKurve</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeKurve' },
                { text: '🟠 <mooves>SpadeTest</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeTest' },
                { text: '❌ <mooves>SpadeError</mooves>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeError' },
              ]
            },
            {
              text: '🟠 <mooves>Doru</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/Overview', collapsed: true, items: [
                { text: '🟠 <mooves>DoruAmble</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruAmble' },
                { text: '🟠 <mooves>DoruAmble</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruAmble' },
                { text: '🟠 <mooves>DoruAnchor</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruAnchor' },
                { text: '🟠 <mooves>DoruBridge</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruBridge' },
                { text: '🟠 <mooves>DoruBump</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruBump' },
                { text: '🟠 <mooves>DoruChop</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruChop' },
                { text: '🟠 <mooves>DoruCone</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruCone' },
                { text: '🟠 <mooves>DoruDrag</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruDrag' },
                { text: '🟠 <mooves>DoruMano</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruMano' },
                { text: '🟠 <mooves>DoruMatch</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruMatch' },
                { text: '🟠 <mooves>DoruPendulum</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPendulum' },
                { text: '🟠 <mooves>DoruPogo</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPogo' },
                { text: '🟠 <mooves>DoruPoke</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPoke' },
                { text: '🟠 <mooves>DoruPost</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPost' },
                { text: '🟠 <mooves>DoruProp</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruProp' },
                { text: '🟠 <mooves>DoruPost</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPost' },
                { text: '🟠 <mooves>DoruRotate</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruRotate' },
                { text: '🟠 <mooves>DoruSkreef</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruSkreef' },
                { text: '🟠 <mooves>DoruSlam</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruSlam' },
                { text: '🟠 <mooves>DoruSlap</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruSlap' },
                { text: '🟠 <mooves>DoruSlide</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruSlide' },
                { text: '🟠 <mooves>DoruStall</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruStall' },
                { text: '🟠 <mooves>DoruStomp</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruStomp' },
                { text: '🟠 <mooves>DoruOnda</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruOnda' },
                { text: '❌ <mooves>DoruError</mooves>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruError' },
              ]
            }
          ]
        },
        {
          text: '🟠 <mooves>Truck</mooves>', link: '/reference/Mooves/TruckMoove/Overview', collapsed: true, items: [
            { text: '🔷 <mooves>Truck Frase</mooves>', link: '/reference/Mooves/TruckMoove/Frase/Overview' },
            { text: '🟠 <mooves>Sleep</mooves>', link: '/reference/Mooves/TruckMoove/Sleep' },
            { text: '🟠 <mooves>Sit</mooves>', link: '/reference/Mooves/TruckMoove/Sit' },
          ]
        },
        { text: '🟠 <mooves>Kinesiology</mooves>', link: '/reference/Mooves/Kinesiology/KinesiologyOverview' },
      ],
    },
    // #Via
    {
      text: '🔻 <via>Via</via>', link: '/reference/Via/ViaOverview', collapsed: true, items: [
        { text: '🔷 <via>Via Sequence</via>', link: '/reference/Via/ViaSequence/Overview' },
        { text: '🔷 <via>Via Teori</via>', link: '/reference/Via/ViaTeori' },
        {
          text: '🔻 <via>ViaGeometry</via>', link: '/reference/Via/ViaGeometry/Overview', collapsed: true, items: [
            {
              text: '🔻 <via>ViaPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/Overview', collapsed: true, items: [
                { text: '🔻 <via>Viewpoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/Viewpoint' },
                { text: '🔻 <via>CenterPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/CenterPoint' },
                { text: '🔻 <via>InflectionPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/InflectionPoint' },
                { text: '🔻 <via>Midpoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/MidPoint' },
                { text: '🔻 <via>ReferencePoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/ReferencePoint' },
                { text: '🔻 <via>ReflectionPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
                { text: '🔻 <via>TargetPoint</via>', link: '/reference/Via/ViaGeometry/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔻 <via>Line</via>', link: '/reference/Via/ViaGeometry/Line/Overview', collapsed: true, items: [
                { text: '🔻 <via>AroundCurve</via>', link: '/reference/Via/ViaGeometry/Line/CircumventCurve' },
                { text: '🔻 <via>GhostLine</via>', link: '/reference/Via/ViaGeometry/Line/GhostLine' },
                { text: '🔻 <via>ParallelCurve</via>', link: '/reference/Via/ViaGeometry/Line/ParallelCurve' },
                { text: '🔻 <via>PerimeterCurve</via>', link: '/reference/Via/ViaGeometry/Line/PerimeterCurve' },
                { text: '🔻 <via>SpiralCurve</via>', link: '/reference/Via/ViaGeometry/Line/SpiralCurve' },
                { text: '🔻 <via>TurnAroundCurve</via>', link: '/reference/Via/ViaGeometry/Line/TurnAroundCurve' },
                { text: '🔻 <via>ZigzagCurve</via>', link: '/reference/Via/ViaGeometry/Line/ZigzagCurve' },
              ]
            },
            {
              text: '🔻 <via>ViaSpace</via>', link: '/reference/Via/ViaGeometry/ViaSpace/Overview', collapsed: true, items: [
                { text: '🔻 <via>MaximumSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
                { text: '🔻 <via>MinimumSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
                { text: '🔻 <via>OptimalSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
                { text: '🔻 <via>ElasticSpacing</via>', link: '/reference/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
                { text: '🔻 <via>SpacingOnSlope</via>', link: '/reference/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔻 <via>Contact</via>', link: '/reference/Via/ViaGeometry/Contact/Overview', collapsed: true, items: [
                { text: '🔻 <via>Contact Texture</via>', link: '/reference/Via/Contact/ContactTexture' },
              ]
            },
          ]
        },
        {
          text: '🔻 <via>Via Problem</via>', link: '/reference/Via/ViaProblem/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '🔻 <via>Via Theorem</via>', link: '/reference/Via/ViaTheorem/Overview', collapsed: true, items: [
            {
              text: '🔻 <via>Cover Algorithms</via>', link: '/reference/Via/ViaTheorem/CoverAlgorithm/Overview', collapsed: true, items: [
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
              text: '🔻 <via>ObstacleCover</via>', link: '/reference/Via/ViaTheorem/ObstacleCover/Overview', collapsed: true, items: [
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
          text: '🔻 <via>Marka</via>', link: '/reference/Via/Marka/Overview', collapsed: true, items: [
            { text: '🔻 <via>BoundaryMarka</via>', link: '/reference/Via/Marka/BoundaryMarka' },
            { text: '🔻 <via>MarkaLocation</via>', link: '/reference/Via/Marka/MarkaLocation' },
            { text: '🔻 <via>HighMarka</via>', link: '/reference/Via/Marka/HighMarka' },
            { text: '🔻 <via>LineInMarka</via>', link: '/reference/Via/Marka/LineInMarka' },
            { text: '🔻 <via>NaturalMarka</via>', link: '/reference/Via/Marka/NaturalMarka' },
            { text: '🔻 <via>TrenchExitMarka</via>', link: '/reference/Via/Marka/TrenchExitMarka' },
            { text: '🔻 <via>WastedMarka</via>', link: '/reference/Via/Marka/WastedMarka' },
          ]
        },
      ]
    },
    // #Psike
    {
      text: '💜 <psike>Psike</psike>', link: '/reference/Psike/NeuroOverview', collapsed: true, items: [
        { text: '🔷 <psike>Psike Teori</psike>', link: '/reference/Psike/NeuroTeori' },
        {
          text: '💜 <psike>Arousal</psike>', link: '/reference/Psike/Arousal/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Attention</psike>', link: '/reference/Psike/Attention/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Audio</psike>', link: '/reference/Psike/Audio/Overview', collapsed: true, items: [
            {
              text: '💜 <psike>Music</psike>', link: '/reference/Psike/Audio/Music/Overview', collapsed: true, items: [
                { text: '💜 <psike>Playlists</psike>', link: '/reference/Psike/Audio/Music/Overview' },
              ]
            },
            { text: '💜 <psike>BranchBreakSound</psike>', link: '/reference/Psike/Audio/BranchBreakSound' },
            { text: '💜 <psike>LogBreakSound</psike>', link: '/reference/Psike/Audio/LogBreakSound' },
            { text: '💜 <psike>SlashSound</psike>', link: '/reference/Psike/Audio/SlashSound' },
            { text: '💜 <psike>SpadeSound</psike>', link: '/reference/Psike/Audio/SpadeSound' },
            { text: '💜 <psike>SoilSound</psike>', link: '/reference/Psike/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 <psike>Awareness</psike>', link: '/reference/Psike/Awareness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Counting</psike>', link: '/reference/Psike/Counting/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Decision</psike>', collapsed: true, items: [
            { text: '💜 <psike>GoOrNoGo</psike>', link: '/reference/Psike/Decision/GoOrNoGo' },
            { text: '💜 <psike>MicrositeSelection</psike>', link: '/reference/Psike/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 <psike>Emotion</psike>', link: '/reference/Psike/Emotion/Overview', collapsed: true, items: [
            { text: '💜 <psike>Anger</psike>', link: '/reference/Psike/Emotion/Anger' },
            { text: '💜 <psike>Disgust</psike>', link: '/reference/Psike/Emotion/Disgust' },
            { text: '💜 <psike>Fear</psike>', link: '/reference/Psike/Emotion/Fear' },
            { text: '💜 <psike>Joy</psike>', link: '/reference/Psike/Emotion/Joy' },
            { text: '💜 <psike>Sadness</psike>', link: '/reference/Psike/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 <psike>Energy</psike>', link: '/reference/Psike/Energy/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Estimation</psike>', collapsed: true, items: [
            { text: '💜 <psike>AreaEstimation</psike>', link: '/reference/Psike/Estimation/AreaEstimation' },
            { text: '💜 <psike>BagCoverEstimation</psike>', link: '/reference/Psike/Estimation/BagCoverEstimation' },
            { text: '💜 <psike>DistanceEstimation</psike>', link: '/reference/Psike/Estimation/DistanceEstimation' },
            { text: '💜 <psike>TimeEstimation</psike>', link: '/reference/Psike/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 <psike>Event</psike>', link: '/reference/Psike/Event/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Homeostasis</psike>', link: '/reference/Psike/Homeostasis/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Memory</psike>', link: '/reference/Psike/Memory/Overview', collapsed: true, items: [
            { text: '💜 <psike>WorkingMemory</psike>', link: '/reference/Psike/Memory/WorkingMemory' },
            { text: '💜 <psike>ShortTermMemory</psike>', link: '/reference/Psike/Memory/ShortTermMemory' },
            { text: '💜 <psike>LongTermMemory</psike>', link: '/reference/Psike/Memory/LongTermMemory' },
            { text: '💜 <psike>NumberMemory</psike>', link: '/reference/Psike/Memory/NumberMemory' },
            { text: '💜 <psike>ViaMemory</psike>', link: '/reference/Psike/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 <psike>Mindfulness</psike>', link: '/reference/Psike/Mindfulness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Muscle</psike>', link: '/reference/Psike/Muscle/Overview', collapsed: true, items: [
          ]
        },
        { text: '💜 <psike>Proprioception</psike>', link: '/reference/Psike/Proprioception/Overview' },
        { text: '💜 <psike>Resilience</psike>', link: '/reference/Psike/Resilience/Overview' },
        {
          text: '💜 <psike>SpatialCognition</psike>', link: '/reference/Psike/SpatialCognition/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <psike>Time</psike>', link: '/reference/Psike/Time/Overview', collapsed: true, items: [
            { text: '💜 <psike>BagUpTime</psike>', link: '/reference/Psike/Time/BagUpTime' },
            { text: '💜 <psike>DailySchedule</psike>', link: '/reference/Psike/Time/DailySchedule' },
            { text: '💜 <psike>MooveTiming</psike>', link: '/reference/Psike/Time/MoovesTiming' },
            { text: '💜 <psike>Planning</psike>', link: '/reference/Psike/Time/Planning' },
            { text: '💜 <psike>Timer</psike>', link: '/reference/Psike/Time/Timer' },
          ]
        },
        { text: '💜 <psike>Thermoception</psike>', link: '/reference/Psike/Thermoception' },
      ]
    },
    { text: '📃 Lexikon', link: '/reference/glossary/Glossary' },
    { text: '📷 Media Database', link: '/reference/media/Overview' }
  ]
}

// #Tutorial
function sidebarTutorial() {
  return [
    { text: 'Tutorial Overview', link: '/tutorial/TutorialOverview' },
    { text: 'Lesson Plans', link: '/tutorial/LessonPlans' },
    { text: 'Video Tutorials Overview', link: '/tutorial/VideoTutorialsOverview' },
    { text: 'Labelling', link: '/tutorial/Test_LabelDiagram' },
    { text: 'Matching', link: '/tutorial/Test_Matching' },
    { text: 'MultipleChoice', link: '/tutorial/Test_MultipleChoice' },
    { text: 'Sequencing', link: '/tutorial/Test_Sequencing' },
    { text: 'Go to Reference', link: '/reference/Overview' },
  ]
}

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples/Overview' },
    { text: 'Go to Tutorial', link: '/tutorial/TutorialOverview' },
  ]
}

function sidebarApp() {
  return [
    {
      text: 'App', link: '/app/Overview', collapsed: false, items: [
        { text: 'BetaCard', link: '/app/BetaCard' },
        { text: 'BetaDataAnalysis', link: '/app/BetaDataAnalysis' },
        { text: 'BetaEditor', link: '/app/BetaEditor' },
        { text: 'BetaGraph', link: '/app/BetaGraph' },
        { text: 'BetaParser', link: '/app/BetaParser' },
        { text: 'BetaStringer', link: '/app/BetaStringer' },
        { text: 'BetaTranscriber', link: '/app/BetaTranscriber' },
      ]
    },
  ]
}
