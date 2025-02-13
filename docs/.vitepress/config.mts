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
        { text: '<motor>Moove Graphics</motor>', link: '/dev/Graphics/MoovesGraphic' },
        { text: '<anima>Psike Graphics</anima>', link: '/dev/Graphics/NeuroGraphic' },
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
        { text: '🟠<motor>To Reduce Injury</motor>', link: '/guide/Why/Injury' },
        { text: '🔻<via>To Increase Productivity</via>', link: '/guide/Why/Productivity' },
        { text: '🔷<beta>To Improve Communication</beta>', link: '/guide/Why/Communication' },
        { text: '💜<anima>To Steepen Learning Curve</anima>', link: '/guide/Why/LearningCurve' },
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
      text: '🟠 <motor>Mooves</motor>', link: '/reference/Mooves/MoovesOverview', collapsed: true, items: [
        { text: '🟠 <motor>Frase</motor>', link: '/reference/Mooves/Frase/Overview' },
        {
          text: '🟠 <motor>TEORI</motor>', link: '/reference/Mooves/MoovesTeori/Overview', collapsed: true, items: [
            { text: '🟠 <motor>MooveTeknik</motor>', link: '/reference/Mooves/MoovesTeori/MoovesTeknik' },
            { text: '🟠 <motor>MooveKratos</motor>', link: '/reference/Mooves/MoovesTeori/MoovesKratos' },
            { text: '🟠 <motor>MooveKuboi</motor>', link: '/reference/Mooves/MoovesTeori/MoovesKuboi' },
          ],
        },
        {
          text: '🟠 <motor>MooveGeometry</motor>', collapsed: true, items: [
            { text: '🟠 <motor>Overview</motor>', link: '/reference/Mooves/MoovesGeometry/Overview' },
            { text: '🟠 <motor>MoovePoint</motor>', link: '/reference/Mooves/MoovesGeometry/MoovesPoint' },
            { text: '🟠 <motor>MooveCurve</motor>', link: '/reference/Mooves/MoovesGeometry/MoovesCurve' },
            { text: '🟠 <motor>MooveSpace</motor>', link: '/reference/Mooves/MoovesGeometry/MoovesSpace' },
            { text: '🟠 <motor>MooveSurface</motor>', link: '/reference/Mooves/MoovesGeometry/MoovesSurface' },
          ]
        },
        {
          text: '🟠 <motor>BrazoMoove</motor>', link: '/reference/Mooves/BrazoMooves/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Arm Frase</motor>', link: '/reference/Mooves/BrazoMooves/Frase/Overview' },
            { text: '🟠 <motor>BrazoAma</motor>', link: '/reference/Mooves/BrazoMooves/BrazoAma' },
            { text: '🟠 <motor>ArmKurve</motor>', link: '/reference/Mooves/BrazoMooves/ArmKurve' },
            { text: '🟠 <motor>ArmWalk</motor>', link: '/reference/Mooves/BrazoMooves/ArmWalk' },
            { text: '🟠 <motor>ArmBalance</motor>', link: '/reference/Mooves/BrazoMooves/ArmBalance' },
          ]
        },
        {
          text: '🟠 <motor>KorposMooves</motor>', link: '/reference/Mooves/KorposMooves/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Body Frase</motor>', link: '/reference/Mooves/KorposMooves/Frase/Overview' },
            { text: '🟠 <motor>BodyAbsorb</motor>', link: '/reference/Mooves/KorposMooves/BodyAbsorb' },
            { text: '🟠 <motor>BodyBend</motor>', link: '/reference/Mooves/KorposMooves/BodyBend' },
            { text: '🟠 <motor>BodyLean</motor>', link: '/reference/Mooves/KorposMooves/BodyLean' },
            { text: '🟠 <motor>KorpoOrbit</motor>', link: '/reference/Mooves/KorposMooves/KorpoOrbit' },
            { text: '🟠 <motor>BodyRotate</motor>', link: '/reference/Mooves/KorposMooves/BodyRotate' },
            { text: '🟠 <motor>BodySlot</motor>', link: '/reference/Mooves/KorposMooves/BodySlot' },
            { text: '🟠 <motor>Fall</motor>', link: '/reference/Mooves/KorposMooves/Fall' },
          ]
        },
        {
          text: '🟠 <motor>CacheMooves</motor>', link: '/reference/Mooves/CacheMoove/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Cache Frase</motor>', link: '/reference/Mooves/CacheMoove/Frase/Overview' },
            { text: '🟠 <motor>Eating</motor>', link: '/reference/Mooves/CacheMoove/Eating' },
            { text: '🟠 <motor>TarpOff</motor>', link: '/reference/Mooves/CacheMoove/TarpOff' },
            { text: '🟠 <motor>TarpOn</motor>', link: '/reference/Mooves/CacheMoove/TarpOn' },
          ]
        },
        {
          text: '🟠 <motor>ClothingMooves</motor>', link: '/reference/Mooves/ClothingMooves/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Clothing Frase</motor>', link: '/reference/Mooves/ClothingMooves/Frase/Overview' },
            { text: '🟠 <motor>Button</motor>', link: '/reference/Mooves/ClothingMooves/Button' },
            { text: '🟠 <motor>ClothingLayer</motor>', link: '/reference/Mooves/ClothingMooves/ClothingLayer' },
            { text: '🟠 <motor>RemoveMud</motor>', link: '/reference/Mooves/ClothingMooves/RemooveMud' },
            { text: '🟠 <motor>ZipperMooves</motor>', link: '/reference/Mooves/ClothingMooves/ZipperMoove' },
          ]
        },
        {
          text: '🟠 <motor>FootMooves</motor>', link: '/reference/Mooves/BaseMooves/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Foot Frase</motor>', link: '/reference/Mooves/BaseMooves/Frase/Overview' },
            { text: '🟠 <motor>FootArchSmear</motor>', link: '/reference/Mooves/BaseMooves/FootArchSmear' },
            { text: '🟠 <motor>FootSeal</motor>', link: '/reference/Mooves/BaseMooves/FootSeal' },
            { text: '🟠 <motor>FootDig</motor>', link: '/reference/Mooves/BaseMooves/FootDig' },
            { text: '🟠 <motor>FootDorsiflexion</motor>', link: '/reference/Mooves/BaseMooves/FootDorsiflexion' },
            { text: '🟠 <motor>FootDrag</motor>', link: '/reference/Mooves/BaseMooves/FootDrag' },
            { text: '🟠 <motor>FootEversion</motor>', link: '/reference/Mooves/BaseMooves/FootEversion' },
            { text: '🟠 <motor>FootInversion</motor>', link: '/reference/Mooves/BaseMooves/FootInversion' },
            { text: '🟠 <motor>FootSkreef</motor>', link: '/reference/Mooves/BaseMooves/FootSkreef' },
            { text: '🟠 <motor>PlantarFlexion</motor>', link: '/reference/Mooves/BaseMooves/PlantarFlexion' },
          ]
        },
        {
          text: '🟠 <motor>ManoMooves</motor>', link: '/reference/Mooves/ManoMoove/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Hand Frase</motor>', link: '/reference/Mooves/ManoMoove/Frase/Overview' },
            { text: '🟠 <motor>BagMano</motor>', link: '/reference/Mooves/ManoMoove/BagMano' },
            { text: '🟠 <motor>BoxMano</motor>', link: '/reference/Mooves/ManoMoove/BoxMano' },
            { text: '🟠 <motor>BranchMano</motor>', link: '/reference/Mooves/ManoMoove/BranchMano' },
            { text: '🟠 <motor>BranchSnapMano</motor>', link: '/reference/Mooves/ManoMoove/BranchSnapMano' },
            { text: '🟠 <motor>HandClose</motor>', link: '/reference/Mooves/ManoMoove/HandClose' },
            { text: '🟠 <motor>HandPoke</motor>', link: '/reference/Mooves/ManoMoove/HandPoke' },
            { text: '🟠 <motor>HandSkreef</motor>', link: '/reference/Mooves/ManoMoove/HandSkreef' },
            { text: '🟠 <motor>SpadeHandleMano</motor>', link: '/reference/Mooves/ManoMoove/SpadeHandleMano' },
            { text: '🟠 <motor>SpadeCollarMano</motor>', link: '/reference/Mooves/ManoMoove/SpadeCollarMano' },
            { text: '🟠 <motor>TreeMano</motor>', link: '/reference/Mooves/ManoMoove/TreeMano' },
            { text: '🟠 <motor>TreeTestMano</motor>', link: '/reference/Mooves/ManoMoove/TreeTestMano' },
          ]
        },
        {
          text: '🟠 <motor>HeadMooves</motor>', link: '/reference/Mooves/HeadMoove/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Head Frase</motor>', link: '/reference/Mooves/HeadMoove/Frase/Overview' },
            { text: '🟠 <motor>FocusLook</motor>', link: '/reference/Mooves/HeadMoove/FocusLook' },
            { text: '🟠 <motor>HeadProtraction</motor>', link: '/reference/Mooves/HeadMoove/HeadProtraction' },
            { text: '🟠 <motor>HeadRetraction</motor>', link: '/reference/Mooves/HeadMoove/HeadRetraction' },
            { text: '🟠 <motor>HeadTiltIntoWind</motor>', link: '/reference/Mooves/HeadMoove/HeadTiltIntoWind' },
            { text: '🟠 <motor>Hearing</motor>', link: '/reference/Mooves/HeadMoove/Hearing' },
            { text: '🟠 <motor>LookAway</motor>', link: '/reference/Mooves/HeadMoove/LookAway' },
            { text: '🟠 <motor>NeckExtension</motor>', link: '/reference/Mooves/HeadMoove/NeckExtension' },
          ]
        },
        {
          text: '🟠 <motor>HoleMooves</motor>', link: '/reference/Mooves/HoleMoove/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Hole Frase</motor>', link: '/reference/Mooves/HoleMoove/Frase/Overview' },
            { text: '🟠 <motor>HoleClose</motor>', link: '/reference/Mooves/HoleMoove/HoleClose' },
            { text: '🟠 <motor>HoleExpand</motor>', link: '/reference/Mooves/HoleMoove/HoleExpand' },
            { text: '🟠 <motor>HoleOpen</motor>', link: '/reference/Mooves/HoleMoove/HoleOpen' },
          ]
        },
        {
          text: '🟠 <motor>BaseMooves</motor>', link: '/reference/Mooves/LegMoove/Overview', collapsed: true, items: [
            { text: '🟠 <motor>Leg Frase</motor>', link: '/reference/Mooves/LegMoove/Frase/Overview' },
            { text: '🟠 <motor>Crouch</motor>', link: '/reference/Mooves/LegMoove/Overview' },
            { text: '🟠 <motor>Jump</motor>', link: '/reference/Mooves/LegMoove/Jump' },
            { text: '🟠 <motor>Kneel</motor>', link: '/reference/Mooves/LegMoove/Kneel' },
            { text: '🟠 <motor>LegAbduction</motor>', link: '/reference/Mooves/LegMoove/LegAbduction' },
            { text: '🟠 <motor>LegAbsorb</motor>', link: '/reference/Mooves/LegMoove/LegAbsorb' },
            { text: '🟠 <motor>LegAdduction</motor>', link: '/reference/Mooves/LegMoove/LegAdduction' },
            { text: '🟠 <motor>LegFlap</motor>', link: '/reference/Mooves/LegMoove/LegFlap' },
            { text: '🟠 <motor>LegFlexion</motor>', link: '/reference/Mooves/LegMoove/LegFlexion' },
            { text: '🟠 <motor>BaseAma</motor>', link: '/reference/Mooves/LegMoove/BaseAma' },
            { text: '🟠 <motor>LegSidebagLift</motor>', link: '/reference/Mooves/LegMoove/LegSidebagLift' },
            { text: '🟠 <motor>LegKurve</motor>', link: '/reference/Mooves/LegMoove/LegKurve' },
            { text: '🟠 <motor>RunningStart</motor>', link: '/reference/Mooves/LegMoove/RunningStart' },
            { text: '🟠 <motor>Step</motor>', link: '/reference/Mooves/LegMoove/Step' },
            { text: '🟠 <motor>Stomp</motor>', link: '/reference/Mooves/LegMoove/Stomp' },
          ]
        },
        {
          text: '🟠 <motor>PlantMooves</motor>', link: '/reference/Mooves/FloraMooves/Overview', collapsed: true, items: [
            { text: '🟠 <motor>BranchMooves</motor>', link: '/reference/Mooves/FloraMooves/BranchMoove' },
            { text: '🟠 <motor>BranchWhip</motor>', link: '/reference/Mooves/FloraMooves/BranchWhip' },
            { text: '🟠 <motor>Bush</motor>', link: '/reference/Mooves/FloraMooves/Bush' },
            { text: '🟠 <motor>Log</motor>', link: '/reference/Mooves/FloraMooves/Log' },
            { text: '🟠 <motor>SlashPile</motor>', link: '/reference/Mooves/FloraMooves/SlashPile' },
            { text: '🟠 <motor>Stump</motor>', link: '/reference/Mooves/FloraMooves/Stump' },
          ]
        },
        {
          text: '🟠 <motor>Skreef</motor>', link: '/reference/Mooves/Skreef/Overview', collapsed: true, items: [
            { text: '🟠 <motor>BootSkreef</motor>', link: '/reference/Mooves/InstrumentMooves/Boot/BootSkreef' },
            { text: '🟠 <motor>HandSkreef</motor>', link: '/reference/Mooves/ManoMoove/HandSkreef' },
            { text: '🟠 <motor>SpadeSkreef</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeSkreef' },
          ]
        },
        {
          text: '🟠 <motor>InstrumentMooves</motor>', link: '/reference/Mooves/InstrumentMooves/Overview', collapsed: true, items: [
            {
              text: '🟠 <motor>Bag</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/Overview', collapsed: true, items: [
                { text: '🟠 <motor>BagMano</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/BagMano' },
                { text: '🔷 <motor>Bag Frase</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/Frase/Overview' },
                { text: '🟠 <motor>BagAdjustment</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/BagAdjustment' },
                { text: '🟠 <motor>BagDeadlift</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/BagDeadlift' },
                { text: '🟠 <motor>BagEmpty</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/BagEmpty' },
                { text: '🟠 <motor>BaggingUp</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/BaggingUp' },
                { text: '🟠 <motor>BagOff</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/BagOff' },
                { text: '🟠 <motor>BagOn</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/BagOn' },
                { text: '🟠 <motor>BagSlide</motor>', link: '/reference/Mooves/InstrumentMooves/Bag/BagSlide' },
              ]
            },
            {
              text: '🟠 <motor>Boot</motor>', link: '/reference/Mooves/InstrumentMooves/Boot/Overview', collapsed: true, items: [
                { text: '🔷 <motor>Boot Frase</motor>', link: '/reference/Mooves/InstrumentMooves/Boot/Frase/Overview' },
                { text: '🟠 <motor>BootMano</motor>', link: '/reference/Mooves/InstrumentMooves/Boot/BootMano' },
                { text: '🟠 <motor>BootSkreef</motor>', link: '/reference/Mooves/InstrumentMooves/Boot/BootSkreef' },
                { text: '🟠 <motor>LaceKnot</motor>', link: '/reference/Mooves/InstrumentMooves/Boot/LaceKnot' },
              ]
            },
            {
              text: '🟠 <motor>Box</motor>', link: '/reference/Mooves/InstrumentMooves/Box/Overview', collapsed: true, items: [
                { text: '🔷 <motor>Box Frase</motor>', link: '/reference/Mooves/InstrumentMooves/Box/Frase/Overview' },
                { text: '🟠 <motor>BoxMano</motor>', link: '/reference/Mooves/InstrumentMooves/Box/BoxMano' },
              ]
            },
            {
              text: '🟠 <motor>Bundle</motor>', link: '/reference/Mooves/InstrumentMooves/Bundle/Overview', collapsed: true, items: [
                { text: '🔷 <motor>Bundle Frase</motor>', link: '/reference/Mooves/InstrumentMooves/Bundle/Frase/Overview' },
                { text: '🟠 <motor>BundleMano</motor>', link: '/reference/Mooves/InstrumentMooves/Bundle/BundleMano' },
                { text: '🟠 <motor>BundlePeel</motor>', link: '/reference/Mooves/InstrumentMooves/Bundle/BundlePeel' },
              ]
            },
            {
              text: '🟠 <motor>Carabiner</motor>', link: '/reference/Mooves/InstrumentMooves/Carabiner/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <motor>Marka</motor>', link: '/reference/Mooves/InstrumentMooves/Marka/Overview', collapsed: true, items: [
                { text: '🔷 <motor>Marka Frase</motor>', link: '/reference/Mooves/InstrumentMooves/Marka/Frase/Overview' },
                { text: '🟠 <motor>MarkaMano</motor>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaMano' },
                { text: '🟠 <motor>MarkaKnot</motor>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaKnot' },
                { text: '🟠 <motor>MarkaReload</motor>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaReload' },
                { text: '🟠 <motor>MarkaRip</motor>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaRip' },
                { text: '🟠 <motor>MarkaRoll</motor>', link: '/reference/Mooves/InstrumentMooves/Marka/MarkaRoll' },
              ]
            },
            {
              text: '🟠 <motor>Tibior</motor>', link: '/reference/Mooves/InstrumentMooves/Tibior/Overview', collapsed: true, items: [
                { text: '🔷 <motor>Tibior Frase</motor>', link: '/reference/Mooves/InstrumentMooves/Tibior/Frase/Overview' },
                { text: '🟠 <motor>TibiorMano</motor>', link: '/reference/Mooves/InstrumentMooves/Tibior/TibiorMano' },
                { text: '🟠 <motor>TibiorOn</motor>', link: '/reference/Mooves/InstrumentMooves/Tibior/TibiorOn' },
                { text: '🟠 <motor>TibiorOff</motor>', link: '/reference/Mooves/InstrumentMooves/Tibior/TibiorOff' },
              ]
            },
            {
              text: '🟠 <motor>Glove</motor>', link: '/reference/Mooves/InstrumentMooves/Glove/Overview', collapsed: true, items: [
                { text: '🔷 <motor>Glove Frase</motor>', link: '/reference/Mooves/InstrumentMooves/Glove/Frase/Overview' },
                { text: '🟠 <motor>GloveMano</motor>', link: '/reference/Mooves/InstrumentMooves/Glove/GloveMano' },
              ]
            },
            {
              text: '🟠 <motor>Kit</motor>', link: '/reference/Mooves/InstrumentMooves/Kit/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <motor>Rope</motor>', link: '/reference/Mooves/InstrumentMooves/Rope/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟠 <motor>Spade</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/Overview', collapsed: true, items: [
                { text: '🔷 <motor>Spade Frase</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/Frase/Overview' },
                { text: '🟠 <motor>SpadeAmble</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeAmble' },
                { text: '🟠 <motor>SpadeAnchor</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeAnchor' },
                { text: '🟠 <motor>SpadeChop</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeChop' },
                { text: '🟠 <motor>SpadeCone</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeCone' },
                { text: '🟠 <motor>SpadeDrag</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeDrag' },
                { text: '🟠 <motor>SpadeMano</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeMano' },
                { text: '🟠 <motor>SpadeBallista</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeBallista' },
                { text: '🟠 <motor>SpadePendulum</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadePendulum' },
                { text: '🟠 <motor>SpadePogo</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadePogo' },
                { text: '🟠 <motor>SpadePoke</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadePoke' },
                { text: '🟠 <motor>SpadePost</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadePost' },
                { text: '🟠 <motor>SpadeAma</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeAma' },
                { text: '🟠 <motor>SpadeRotate</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeRotate' },
                { text: '🟠 <motor>SpadeSkreef</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeSkreef' },
                { text: '🟠 <motor>SpadeImpact</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeImpact' },
                { text: '🟠 <motor>SpadeStall</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeStall' },
                { text: '🟠 <motor>SpadeStomp</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeStomp' },
                { text: '🟠 <motor>SpadeKurve</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeKurve' },
                { text: '🟠 <motor>SpadeTest</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeTest' },
                { text: '❌ <motor>SpadeError</motor>', link: '/reference/Mooves/InstrumentMooves/Spade/SpadeError' },
              ]
            },
            {
              text: '🟠 <motor>Doru</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/Overview', collapsed: true, items: [
                { text: '🟠 <motor>DoruAmble</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruAmble' },
                { text: '🟠 <motor>DoruAmble</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruAmble' },
                { text: '🟠 <motor>DoruAnchor</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruAnchor' },
                { text: '🟠 <motor>DoruBridge</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruBridge' },
                { text: '🟠 <motor>DoruBump</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruBump' },
                { text: '🟠 <motor>DoruChop</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruChop' },
                { text: '🟠 <motor>DoruCone</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruCone' },
                { text: '🟠 <motor>DoruDrag</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruDrag' },
                { text: '🟠 <motor>DoruMano</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruMano' },
                { text: '🟠 <motor>DoruMatch</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruMatch' },
                { text: '🟠 <motor>DoruPendulum</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPendulum' },
                { text: '🟠 <motor>DoruPogo</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPogo' },
                { text: '🟠 <motor>DoruPoke</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPoke' },
                { text: '🟠 <motor>DoruPost</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPost' },
                { text: '🟠 <motor>DoruProp</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruProp' },
                { text: '🟠 <motor>DoruPost</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruPost' },
                { text: '🟠 <motor>DoruRotate</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruRotate' },
                { text: '🟠 <motor>DoruSkreef</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruSkreef' },
                { text: '🟠 <motor>DoruSlam</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruSlam' },
                { text: '🟠 <motor>DoruSlap</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruSlap' },
                { text: '🟠 <motor>DoruSlide</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruSlide' },
                { text: '🟠 <motor>DoruStall</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruStall' },
                { text: '🟠 <motor>DoruStomp</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruStomp' },
                { text: '🟠 <motor>DoruOnda</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruOnda' },
                { text: '❌ <motor>DoruError</motor>', link: '/reference/Mooves/InstrumentMooves/Doru/DoruError' },
              ]
            }
          ]
        },
        {
          text: '🟠 <motor>Truck</motor>', link: '/reference/Mooves/TruckMoove/Overview', collapsed: true, items: [
            { text: '🔷 <motor>Truck Frase</motor>', link: '/reference/Mooves/TruckMoove/Frase/Overview' },
            { text: '🟠 <motor>Sleep</motor>', link: '/reference/Mooves/TruckMoove/Sleep' },
            { text: '🟠 <motor>Sit</motor>', link: '/reference/Mooves/TruckMoove/Sit' },
          ]
        },
        { text: '🟠 <motor>Kinesiology</motor>', link: '/reference/Mooves/Kinesiology/KinesiologyOverview' },
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
      text: '💜 <anima>Psike</anima>', link: '/reference/Psike/NeuroOverview', collapsed: true, items: [
        { text: '🔷 <anima>Psike Teori</anima>', link: '/reference/Psike/NeuroTeori' },
        {
          text: '💜 <anima>Arousal</anima>', link: '/reference/Psike/Arousal/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Attention</anima>', link: '/reference/Psike/Attention/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Audio</anima>', link: '/reference/Psike/Audio/Overview', collapsed: true, items: [
            {
              text: '💜 <anima>Music</anima>', link: '/reference/Psike/Audio/Music/Overview', collapsed: true, items: [
                { text: '💜 <anima>Playlists</anima>', link: '/reference/Psike/Audio/Music/Overview' },
              ]
            },
            { text: '💜 <anima>BranchBreakSound</anima>', link: '/reference/Psike/Audio/BranchBreakSound' },
            { text: '💜 <anima>LogBreakSound</anima>', link: '/reference/Psike/Audio/LogBreakSound' },
            { text: '💜 <anima>SlashSound</anima>', link: '/reference/Psike/Audio/SlashSound' },
            { text: '💜 <anima>SpadeSound</anima>', link: '/reference/Psike/Audio/SpadeSound' },
            { text: '💜 <anima>SoilSound</anima>', link: '/reference/Psike/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 <anima>Awareness</anima>', link: '/reference/Psike/Awareness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Counting</anima>', link: '/reference/Psike/Counting/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Decision</anima>', collapsed: true, items: [
            { text: '💜 <anima>GoOrNoGo</anima>', link: '/reference/Psike/Decision/GoOrNoGo' },
            { text: '💜 <anima>MicrositeSelection</anima>', link: '/reference/Psike/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 <anima>Emotion</anima>', link: '/reference/Psike/Emotion/Overview', collapsed: true, items: [
            { text: '💜 <anima>Anger</anima>', link: '/reference/Psike/Emotion/Anger' },
            { text: '💜 <anima>Disgust</anima>', link: '/reference/Psike/Emotion/Disgust' },
            { text: '💜 <anima>Fear</anima>', link: '/reference/Psike/Emotion/Fear' },
            { text: '💜 <anima>Joy</anima>', link: '/reference/Psike/Emotion/Joy' },
            { text: '💜 <anima>Sadness</anima>', link: '/reference/Psike/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 <anima>Energy</anima>', link: '/reference/Psike/Energy/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Estimation</anima>', collapsed: true, items: [
            { text: '💜 <anima>AreaEstimation</anima>', link: '/reference/Psike/Estimation/AreaEstimation' },
            { text: '💜 <anima>BagCoverEstimation</anima>', link: '/reference/Psike/Estimation/BagCoverEstimation' },
            { text: '💜 <anima>DistanceEstimation</anima>', link: '/reference/Psike/Estimation/DistanceEstimation' },
            { text: '💜 <anima>TimeEstimation</anima>', link: '/reference/Psike/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 <anima>Event</anima>', link: '/reference/Psike/Event/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Homeostasis</anima>', link: '/reference/Psike/Homeostasis/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Memory</anima>', link: '/reference/Psike/Memory/Overview', collapsed: true, items: [
            { text: '💜 <anima>WorkingMemory</anima>', link: '/reference/Psike/Memory/WorkingMemory' },
            { text: '💜 <anima>ShortTermMemory</anima>', link: '/reference/Psike/Memory/ShortTermMemory' },
            { text: '💜 <anima>LongTermMemory</anima>', link: '/reference/Psike/Memory/LongTermMemory' },
            { text: '💜 <anima>NumberMemory</anima>', link: '/reference/Psike/Memory/NumberMemory' },
            { text: '💜 <anima>ViaMemory</anima>', link: '/reference/Psike/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 <anima>Mindfulness</anima>', link: '/reference/Psike/Mindfulness/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Muscle</anima>', link: '/reference/Psike/Muscle/Overview', collapsed: true, items: [
          ]
        },
        { text: '💜 <anima>Proprioception</anima>', link: '/reference/Psike/Proprioception/Overview' },
        { text: '💜 <anima>Resilience</anima>', link: '/reference/Psike/Resilience/Overview' },
        {
          text: '💜 <anima>SpatialCognition</anima>', link: '/reference/Psike/SpatialCognition/Overview', collapsed: true, items: [
          ]
        },
        {
          text: '💜 <anima>Time</anima>', link: '/reference/Psike/Time/Overview', collapsed: true, items: [
            { text: '💜 <anima>BagUpTime</anima>', link: '/reference/Psike/Time/BagUpTime' },
            { text: '💜 <anima>DailySchedule</anima>', link: '/reference/Psike/Time/DailySchedule' },
            { text: '💜 <anima>MooveTiming</anima>', link: '/reference/Psike/Time/MoovesTiming' },
            { text: '💜 <anima>Planning</anima>', link: '/reference/Psike/Time/Planning' },
            { text: '💜 <anima>Timer</anima>', link: '/reference/Psike/Time/Timer' },
          ]
        },
        { text: '💜 <anima>Thermoception</anima>', link: '/reference/Psike/Thermoception' },
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
