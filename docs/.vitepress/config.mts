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

    search: {
      provider: 'local'
    },

    siteTitle: 'PlantaBeta',
    nav: nav(),

    sidebar: {
      '/content/guide/': sidebarGuide(),
      '/content/example/': sidebarExamples(),
      'content/content/tutorial/': sidebarTutorial(),
      '/content/PLANTABETA/TEORI/': sidebarTEORI(),
      '/content/PLANTABETA/PRAKTIK/': sidebarPRAKTIK(),
      '/dev/': sidebarDevelopment(),
    }
  }
})

// // #Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/content/GUIDE/What/WhatPLANTABETA',
      activeMatch: '/content/GUIDE/'
    },
    {
      text: 'Examples',
      link: '/content/example/Overview',
      activeMatch: '/content/example/'
    },
    {
      text: 'Tutorial',
      link: '/content/tutorial/TutorialOverview',
      activeMatch: '/content/tutorial/'
    },
    {
      text: '🔷TEORI',
      link: '/content/PLANTABETA/TEORI/TEORIoverview',
      activeMatch: '/content/PLANTABETA/TEORI/'
    },
    {
      text: '🔷PRAKTIK',
      link: '/content/PLANTABETA/PRAKTIK/PRAKTIKoverview',
      activeMatch: '/content/PLANTABETA/PRAKTIK/'
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
    { text: '<dev>Contact</dev>', link: '/dev/Contact' },
    { text: '<dev>AcademiaDev</dev>', link: '/dev/AcademiaDev' },
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
        { text: '<beta>BETA Graphics</beta>', link: '/dev/Graphics/BETAGraphic' },
        { text: '<ekos>EKOS Graphics</ekos>', link: '/dev/Graphics/EKOSGraphic' },
        { text: '<motor>MOTOR Graphics</motor>', link: '/dev/Graphics/MOTORGraphic' },
        { text: '<anima>ANIMA Graphics</anima>', link: '/dev/Graphics/ANIMAGraphic' },
        { text: '<via>VIA Graphics</via>', link: '/dev/Graphics/VIAGraphic' },
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
        { text: 'What is Tree Planting?', link: '/content/GUIDE/What/WhatTreePlanting' },
        { text: 'What is 🔷<beta>Put(<ekos>Plant</ekos>)</beta>?', link: '/content/GUIDE/What/WhatPLANTABETA' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: '🔥<ekos>To Support Ecosystems</ekos>', link: '/content/GUIDE/Why/SupportEcosystem' },
        { text: '🟠<motor>To Reduce Injury</motor>', link: '/content/GUIDE/Why/Injury' },
        { text: '🔻<via>To Increase Productivity</via>', link: '/content/GUIDE/Why/Productivity' },
        { text: '🔷<beta>To Improve Communication</beta>', link: '/content/GUIDE/Why/Communication' },
        { text: '💜<anima>To Steepen Learning Curve</anima>', link: '/content/GUIDE/Why/LearningCurve' },
        { text: '💲To Increase Profit', link: '/content/GUIDE/Why/Company' }
      ]
    },
    {
      text: 'Plantor Guide', collapsed: false, items: [
        { text: 'Potential Plantor', link: '/content/GUIDE/Who/PotentialPlantor' },
        { text: 'Novice Plantor', link: '/content/GUIDE/Who/NovicePlantor' },
        { text: 'Experienced Plantor', link: '/content/GUIDE/Who/ExperiencedPlantor' },
        { text: 'Plantor Supervisor', link: '/content/GUIDE/Who/PlantorSupervisor' },
        { text: 'Plantor Instructor', link: '/content/GUIDE/Who/PlantorInstructor' }
      ]
    },
    {
      text: 'Gear Guide', collapsed: false, items: [
        { text: 'What Gear to bring?', link: '/content/GUIDE/What/WhatGear' },
        { text: 'Gear List', link: '/content/GUIDE/What/GearList' }
      ]
    },
    { text: 'Go to Examples', link: '/content/example/Overview' },
  ]
}
// 
function sidebarTEORI() {
  return [
    { text: '<strong>TEORI Overview</strong>', link: '/content/PLANTABETA/TEORI/ELEMENTS/TEORIoverview' },

    // # SISTEM
    {
      text: '🔷<beta>SISTEM</beta>', link: '/content/PLANTABETA/TEORI/SISTEM/SISTEMoverview', collapsed: true, items: []
    },
    // # ELEMENTS
    {
      text: '🔷 <beta>ELEMENTS</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/ELEMENTSoverview', collapsed: true, items: [
        // #BETA
        {
          text: '🔷 <beta>BETA</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BETAoverview', collapsed: true, items: [
            { text: '🔷 <beta>BetaExamples</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaExamples' },
            { text: '🔷 <beta>BetaLingo</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaLingo/Overview' },
            { text: '🔷 <beta>BetaDiagram</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaDiagram' },
            {
              text: '🔷 <beta>Plantbeta</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/Plantbeta/Overview', collapsed: true, items: [
                { text: '🔷 <beta>BetaElement</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/Plantbeta/BetaElement' },
                { text: '🔷 <beta>BetaMethod</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/Plantbeta/BetaMethod' },
                { text: '🔷 <beta>BetaBlock</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/Plantbeta/BetaBlock' },
              ]
            },
            {
              text: '🔷 <beta>BetaScore</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaScore/Overview', collapsed: true, items: [
                { text: '🔷 <beta>BetaExecutionScore</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaScore/BetaExecutionScore' },
                {
                  text: '🔷 <beta>BetaTeoriScore</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaScore/BetaTeoriScore/Overview', collapsed: true, items: [
                    { text: '🔷 <beta>BetaTeknikScore</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaScore/BetaTeoriScore/BetaTeknikScore' },
                    { text: '🔷 <beta>BetaKuboiScore</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaScore/BetaTeoriScore/BetaKuboiScore' },
                    { text: '🔷 <beta>BetaKratosScore</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaScore/BetaTeoriScore/BetaKratosScore' }
                  ]
                }
              ]
            },
            {
              text: '🔷 <beta>BetaTeori</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaTeori/Overview', collapsed: true, items: [
                { text: '🔷 <beta>BetaTeknik</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaTeori/BetaTeknik' },
                { text: '🔷 <beta>BetaKratos</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaTeori/BetaKratos' },
                { text: '🔷 <beta>BetaKuboi</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaTeori/BetaKuboi' }
              ]
            },
            {
              text: '🔷 <beta>BetaVideo</beta>', link: '/content/PLANTABETA/TEORI/ELEMENTS/BETA/BetaVideo/Overview', collapsed: true, items: [
              ]
            },
          ]
        },
        // #SOMA
        {
          text: '💜<soma>SOMA</soma>', link: '/content/PLANTABETA/TEORI/ELEMENTS/SOMA/SOMAoverview', collapsed: true, items: []
        },
        // #LABOR
        {
          text: '⭐<labor>LABOR</labor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/LABOR/LABORoverview', collapsed: true, items: []
        },
        // #EKOS
        {
          text: '🟩 <ekos>EKOS</ekos>', collapsed: true, link: '/content/PLANTABETA/TEORI/ELEMENTS/EKOS/EKOSoverview', items: [
            {
              text: '🔷 <ekos>Ekos Teori</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/EkoTeori', collapsed: true, items: [
                { text: '🟩 <ekos>EcoTeknik</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/EcoTeori/EcoTeknik' },
                { text: '🟩 <ekos>EcoKratos</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/EcoTeori/EcoKratos' },
                { text: '🟩 <ekos>EcoKuboi</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/EcoTeori/EcoKuboi' },
              ]
            },
            {
              text: '🟩 <ekos>Animals</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Animals/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟩 <ekos>Atmosphere</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Atmosphere/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>AirTemperature</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Atmosphere/AirTemperature' },
                { text: '🟩 <ekos>Humidity</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Atmosphere/Humidity' },
                { text: '🟩 <ekos>Precipitation</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Atmosphere/Precipitation' },
                { text: '🟩 <ekos>Wind</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Atmosphere/Wind' },
              ]
            },
            {
              text: '🟩 <ekos>Block</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Block/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>FillBlock</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Block/FillBlock' },
                { text: '🟩 <ekos>Road</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Block/Road' },
              ]
            },
            {
              text: '🟩 <ekos>Density</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Density/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>Plot</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Density/Plot' },
              ]
            },
            {
              text: '🟩 <ekos>LandSpeed</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/LandSpeed/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>FastLand</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/LandSpeed/FastLand' },
                { text: '🟩 <ekos>SlowLand</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/LandSpeed/SlowLand' },
              ]
            },
            {
              text: '🟩 <ekos>Obstacle</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Obstacle/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>HoleObstacle</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Obstacle/HoleObstacle' },
                { text: '🟩 <ekos>LogObstacle</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Obstacle/LogObstacle' },
                { text: '🟩 <ekos>MicrositeObstacle</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Obstacle/MicrositeObstacle' },
                { text: '🟩 <ekos>RockObstacle</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Obstacle/RockObstacle' },
                { text: '🟩 <ekos>StumpObstacle</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Obstacle/StumpObstacle' },
              ]
            },
            {
              text: '🟩 <ekos>Piece</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Piece/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>PieceTopography</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Piece/PieceTopography' },
              ]
            },
            {
              text: '🟩 <ekos>Prep</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Prep/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>MoundLand</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Prep/MoundLand' },
                { text: '🟩 <ekos>TrenchLand</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Prep/TrenchLand' },
                { text: '🟩 <ekos>DeactivatedRoad</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Prep/TrenchLand' },
              ]
            },
            {
              text: '🟩 <ekos>Raw</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Raw/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>StumpLand</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Raw/StumpLand' },
                { text: '🟩 <ekos>BurntLand</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Raw/BurntLand' },
                { text: '🟩 <ekos>RiparianLand</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Raw/RiparianLand' },
                { text: '🟩 <ekos>RockyLand</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Raw/RockyLand' },
              ]
            },
            {
              text: '🟩 <ekos>Slash</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Slash/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>BurnPileSlash</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Slash/BurnPileSlash' },
                { text: '🟩 <ekos>HighSlash</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Slash/HighSlash' },
                { text: '🟩 <ekos>LowSlash</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Slash/LowSlash' },
                { text: '🟩 <ekos>WetSlash</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Slash/WetSlash' },
              ]
            },
            {
              text: '🟩 <ekos>Soil</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/Overview', collapsed: true, items: [
                { text: '🟩 <ekos>Hole</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/Hole' },
                { text: '🟩 <ekos>ClaySoil</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/ClaySoil' },
                { text: '🟩 <ekos>DrySoil</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/DrySoil' },
                { text: '🟩 <ekos>GravelSoil</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/GravelSoil' },
                { text: '🟩 <ekos>MineralSoil</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/MineralSoil' },
                { text: '🟩 <ekos>RedRot</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/RedRot' },
                { text: '🟩 <ekos>SandSoil</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/SandSoil' },
                { text: '🟩 <ekos>WetSoil</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Soil/WetSoil' },
              ]
            },
            {
              text: '🟩 <ekos>Sun</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Sun/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟩 <ekos>Plants</ekos>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Eko/Plants/Overview', collapsed: true, items: [
              ]
            },
          ]
        },
        // #VIA
        {
          text: '🔻 <via>VIA</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/VIA/VIAoverview', collapsed: true, items: [
            { text: '🔷 <via>Via Sequence</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaSequence/Overview' },
            { text: '🔷 <via>Via Teori</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTeori' },
            {
              text: '🔻 <via>ViaGeometry</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Overview', collapsed: true, items: [
                {
                  text: '🔻 <via>ViaPoint</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaPoint/Overview', collapsed: true, items: [
                    { text: '🔻 <via>Viewpoint</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaPoint/Viewpoint' },
                    { text: '🔻 <via>CenterPoint</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaPoint/CenterPoint' },
                    { text: '🔻 <via>InflectionPoint</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaPoint/InflectionPoint' },
                    { text: '🔻 <via>Midpoint</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaPoint/MidPoint' },
                    { text: '🔻 <via>ReferencePoint</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaPoint/ReferencePoint' },
                    { text: '🔻 <via>ReflectionPoint</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaPoint/ReflectionPoint' },
                    { text: '🔻 <via>TargetPoint</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaPoint/TargetPoint' },
                  ]
                },
                {
                  text: '🔻 <via>Line</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Line/Overview', collapsed: true, items: [
                    { text: '🔻 <via>AroundCurve</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Line/CircumventCurve' },
                    { text: '🔻 <via>GhostLine</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Line/GhostLine' },
                    { text: '🔻 <via>ParallelCurve</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Line/ParallelCurve' },
                    { text: '🔻 <via>PerimeterCurve</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Line/PerimeterCurve' },
                    { text: '🔻 <via>SpiralCurve</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Line/SpiralCurve' },
                    { text: '🔻 <via>TurnAroundCurve</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Line/TurnAroundCurve' },
                    { text: '🔻 <via>ZigzagCurve</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Line/ZigzagCurve' },
                  ]
                },
                {
                  text: '🔻 <via>ViaSpace</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaSpace/Overview', collapsed: true, items: [
                    { text: '🔻 <via>MaximumSpacing</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaSpace/MaximumSpacing' },
                    { text: '🔻 <via>MinimumSpacing</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaSpace/MinimumSpacing' },
                    { text: '🔻 <via>OptimalSpacing</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaSpace/OptimalSpacing' },
                    { text: '🔻 <via>ElasticSpacing</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaSpace/ElasticSpacing' },
                    { text: '🔻 <via>SpacingOnSlope</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/ViaSpace/SpacingOnSlope' },
                  ]
                },
                {
                  text: '🔻 <via>Contact</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaGeometry/Contact/Overview', collapsed: true, items: [
                    { text: '🔻 <via>Contact Texture</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Contact/ContactTexture' },
                  ]
                },
              ]
            },
            {
              text: '🔻 <via>Via Problem</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaProblem/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🔻 <via>Via Theorem</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/Overview', collapsed: true, items: [
                {
                  text: '🔻 <via>Cover Algorithms</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/Overview', collapsed: true, items: [
                    { text: '🔻 <via>BoustroCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/BoustroCover' },
                    { text: '🔻 <via>CircleCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/CircleCover' },
                    { text: '🔻 <via>DiamondCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/DiamondCover' },
                    { text: '🔻 <via>SquareCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/SquareCover' },
                    { text: '🔻 <via>TriangleCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/TriangleCover' },
                    { text: '🔻 <via>ChunkCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/ChunkCover' },
                    { text: '🔻 <via>BackCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/BackCover' },
                    { text: '🔻 <via>OpenEndedCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/OpenEndedCover' },
                    { text: '🔻 <via>PerimeterCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/PerimeterCover' },
                    { text: '🔻 <via>TypewriterCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/CoverAlgorithm/TypewriterCover' },
                  ]
                },
                {
                  text: '🔻 <via>ObstacleCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/ObstacleCover/Overview', collapsed: true, items: [
                  ]
                },
                {
                  text: '🔻 <via>TeamCover</via>', collapsed: true, items: [
                    { text: '🔻 <via>TeamPlant Overview</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/TeamCover/Overview' },
                    { text: '🔻 <via>BouncingCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/TeamCover/BouncingCover' },
                    { text: '🔻 <via>CrossingCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/TeamCover/CrossingCover' },
                    { text: '🔻 <via>FollowingCover</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/ViaTheorem/TeamCover/FollowingCover' },
                  ]
                },
              ]
            },
            {
              text: '🔻 <via>Marka</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Marka/Overview', collapsed: true, items: [
                { text: '🔻 <via>BoundaryMarka</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Marka/BoundaryMarka' },
                { text: '🔻 <via>MarkaLocation</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Marka/MarkaLocation' },
                { text: '🔻 <via>HighMarka</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Marka/HighMarka' },
                { text: '🔻 <via>LineInMarka</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Marka/LineInMarka' },
                { text: '🔻 <via>NaturalMarka</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Marka/NaturalMarka' },
                { text: '🔻 <via>TrenchExitMarka</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Marka/TrenchExitMarka' },
                { text: '🔻 <via>WastedMarka</via>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Via/Marka/WastedMarka' },
              ]
            },
          ]
        },
        // #MOTOR
        {
          text: '🟠 <motor>MOTOR</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/MOTOR/MOTORoverview', collapsed: true, items: [
            { text: '🟠 <motor>Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/Frase/Overview' },
            {
              text: '🟠 <motor>TEORI</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesTeori/Overview', collapsed: true, items: [
                { text: '🟠 <motor>MooveTeknik</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesTeori/MoovesTeknik' },
                { text: '🟠 <motor>MooveKratos</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesTeori/MoovesKratos' },
                { text: '🟠 <motor>MooveKuboi</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesTeori/MoovesKuboi' },
              ],
            },
            {
              text: '🟠 <motor>MooveGeometry</motor>', collapsed: true, items: [
                { text: '🟠 <motor>Overview</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesGeometry/Overview' },
                { text: '🟠 <motor>MoovePoint</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesGeometry/MoovesPoint' },
                { text: '🟠 <motor>MooveCurve</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesGeometry/MoovesCurve' },
                { text: '🟠 <motor>MooveSpace</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesGeometry/MoovesSpace' },
                { text: '🟠 <motor>MooveSurface</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/MoovesGeometry/MoovesSurface' },
              ]
            },
            {
              text: '🟠 <motor>BrazoMoove</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BrazoMooves/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Arm Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BrazoMooves/Frase/Overview' },
                { text: '🟠 <motor>BrazoAma</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BrazoMooves/BrazoAma' },
                { text: '🟠 <motor>ArmKurve</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BrazoMooves/ArmKurve' },
                { text: '🟠 <motor>ArmWalk</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BrazoMooves/ArmWalk' },
                { text: '🟠 <motor>ArmBalance</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BrazoMooves/ArmBalance' },
              ]
            },
            {
              text: '🟠 <motor>KorposMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Body Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/Frase/Overview' },
                { text: '🟠 <motor>BodyAbsorb</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/BodyAbsorb' },
                { text: '🟠 <motor>BodyBend</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/BodyBend' },
                { text: '🟠 <motor>BodyLean</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/BodyLean' },
                { text: '🟠 <motor>KorpoOrbit</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/KorpoOrbit' },
                { text: '🟠 <motor>BodyRotate</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/BodyRotate' },
                { text: '🟠 <motor>BodySlot</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/BodySlot' },
                { text: '🟠 <motor>Fall</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/KorposMooves/Fall' },
              ]
            },
            {
              text: '🟠 <motor>CacheMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/CacheMoove/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Cache Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/CacheMoove/Frase/Overview' },
                { text: '🟠 <motor>Eating</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/CacheMoove/Eating' },
                { text: '🟠 <motor>TarpOff</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/CacheMoove/TarpOff' },
                { text: '🟠 <motor>TarpOn</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/CacheMoove/TarpOn' },
              ]
            },
            {
              text: '🟠 <motor>ClothingMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ClothingMooves/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Clothing Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ClothingMooves/Frase/Overview' },
                { text: '🟠 <motor>Button</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ClothingMooves/Button' },
                { text: '🟠 <motor>ClothingLayer</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ClothingMooves/ClothingLayer' },
                { text: '🟠 <motor>RemoveMud</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ClothingMooves/RemooveMud' },
                { text: '🟠 <motor>ZipperMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ClothingMooves/ZipperMoove' },
              ]
            },
            {
              text: '🟠 <motor>FootMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Foot Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/Frase/Overview' },
                { text: '🟠 <motor>FootArchSmear</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/FootArchSmear' },
                { text: '🟠 <motor>FootSeal</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/FootSeal' },
                { text: '🟠 <motor>FootDig</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/FootDig' },
                { text: '🟠 <motor>FootDorsiflexion</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/FootDorsiflexion' },
                { text: '🟠 <motor>FootDrag</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/FootDrag' },
                { text: '🟠 <motor>FootEversion</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/FootEversion' },
                { text: '🟠 <motor>FootInversion</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/FootInversion' },
                { text: '🟠 <motor>FootSkreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/FootSkreef' },
                { text: '🟠 <motor>PlantarFlexion</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/BaseMooves/PlantarFlexion' },
              ]
            },
            {
              text: '🟠 <motor>ManoMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Hand Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/Frase/Overview' },
                { text: '🟠 <motor>BagMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/BagMano' },
                { text: '🟠 <motor>BoxMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/BoxMano' },
                { text: '🟠 <motor>BranchMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/BranchMano' },
                { text: '🟠 <motor>BranchSnapMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/BranchSnapMano' },
                { text: '🟠 <motor>HandClose</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/HandClose' },
                { text: '🟠 <motor>HandPoke</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/HandPoke' },
                { text: '🟠 <motor>HandSkreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/HandSkreef' },
                { text: '🟠 <motor>SpadeHandleMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/SpadeHandleMano' },
                { text: '🟠 <motor>SpadeCollarMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/SpadeCollarMano' },
                { text: '🟠 <motor>TreeMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/TreeMano' },
                { text: '🟠 <motor>TreeTestMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/TreeTestMano' },
              ]
            },
            {
              text: '🟠 <motor>HeadMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Head Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/Frase/Overview' },
                { text: '🟠 <motor>FocusLook</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/FocusLook' },
                { text: '🟠 <motor>HeadProtraction</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/HeadProtraction' },
                { text: '🟠 <motor>HeadRetraction</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/HeadRetraction' },
                { text: '🟠 <motor>HeadTiltIntoWind</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/HeadTiltIntoWind' },
                { text: '🟠 <motor>Hearing</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/Hearing' },
                { text: '🟠 <motor>LookAway</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/LookAway' },
                { text: '🟠 <motor>NeckExtension</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HeadMoove/NeckExtension' },
              ]
            },
            {
              text: '🟠 <motor>HoleMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HoleMoove/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Hole Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HoleMoove/Frase/Overview' },
                { text: '🟠 <motor>HoleClose</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HoleMoove/HoleClose' },
                { text: '🟠 <motor>HoleExpand</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HoleMoove/HoleExpand' },
                { text: '🟠 <motor>HoleOpen</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/HoleMoove/HoleOpen' },
              ]
            },
            {
              text: '🟠 <motor>BaseMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/Overview', collapsed: true, items: [
                { text: '🟠 <motor>Leg Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/Frase/Overview' },
                { text: '🟠 <motor>Crouch</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/Overview' },
                { text: '🟠 <motor>Jump</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/Jump' },
                { text: '🟠 <motor>Kneel</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/Kneel' },
                { text: '🟠 <motor>LegAbduction</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/LegAbduction' },
                { text: '🟠 <motor>LegAbsorb</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/LegAbsorb' },
                { text: '🟠 <motor>LegAdduction</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/LegAdduction' },
                { text: '🟠 <motor>LegFlap</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/LegFlap' },
                { text: '🟠 <motor>LegFlexion</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/LegFlexion' },
                { text: '🟠 <motor>BaseAma</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/BaseAma' },
                { text: '🟠 <motor>LegSidebagLift</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/LegSidebagLift' },
                { text: '🟠 <motor>LegKurve</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/LegKurve' },
                { text: '🟠 <motor>RunningStart</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/RunningStart' },
                { text: '🟠 <motor>Step</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/Step' },
                { text: '🟠 <motor>Stomp</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/LegMoove/Stomp' },
              ]
            },
            {
              text: '🟠 <motor>PlantMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/FloraMooves/Overview', collapsed: true, items: [
                { text: '🟠 <motor>BranchMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/FloraMooves/BranchMoove' },
                { text: '🟠 <motor>BranchWhip</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/FloraMooves/BranchWhip' },
                { text: '🟠 <motor>Bush</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/FloraMooves/Bush' },
                { text: '🟠 <motor>Log</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/FloraMooves/Log' },
                { text: '🟠 <motor>SlashPile</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/FloraMooves/SlashPile' },
                { text: '🟠 <motor>Stump</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/FloraMooves/Stump' },
              ]
            },
            {
              text: '🟠 <motor>Skreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/Skreef/Overview', collapsed: true, items: [
                { text: '🟠 <motor>BootSkreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Boot/BootSkreef' },
                { text: '🟠 <motor>HandSkreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/ManoMoove/HandSkreef' },
                { text: '🟠 <motor>SpadeSkreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeSkreef' },
              ]
            },
            {
              text: '🟠 <motor>InstrumentMooves</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Overview', collapsed: true, items: [
                {
                  text: '🟠 <motor>Bag</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/Overview', collapsed: true, items: [
                    { text: '🟠 <motor>BagMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/BagMano' },
                    { text: '🔷 <motor>Bag Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/Frase/Overview' },
                    { text: '🟠 <motor>BagAdjustment</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/BagAdjustment' },
                    { text: '🟠 <motor>BagDeadlift</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/BagDeadlift' },
                    { text: '🟠 <motor>BagEmpty</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/BagEmpty' },
                    { text: '🟠 <motor>BaggingUp</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/BaggingUp' },
                    { text: '🟠 <motor>BagOff</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/BagOff' },
                    { text: '🟠 <motor>BagOn</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/BagOn' },
                    { text: '🟠 <motor>BagSlide</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bag/BagSlide' },
                  ]
                },
                {
                  text: '🟠 <motor>Boot</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Boot/Overview', collapsed: true, items: [
                    { text: '🔷 <motor>Boot Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Boot/Frase/Overview' },
                    { text: '🟠 <motor>BootMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Boot/BootMano' },
                    { text: '🟠 <motor>BootSkreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Boot/BootSkreef' },
                    { text: '🟠 <motor>LaceKnot</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Boot/LaceKnot' },
                  ]
                },
                {
                  text: '🟠 <motor>Box</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Box/Overview', collapsed: true, items: [
                    { text: '🔷 <motor>Box Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Box/Frase/Overview' },
                    { text: '🟠 <motor>BoxMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Box/BoxMano' },
                  ]
                },
                {
                  text: '🟠 <motor>Bundle</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bundle/Overview', collapsed: true, items: [
                    { text: '🔷 <motor>Bundle Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bundle/Frase/Overview' },
                    { text: '🟠 <motor>BundleMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bundle/BundleMano' },
                    { text: '🟠 <motor>BundlePeel</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Bundle/BundlePeel' },
                  ]
                },
                {
                  text: '🟠 <motor>Carabiner</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Carabiner/Overview', collapsed: true, items: [
                  ]
                },
                {
                  text: '🟠 <motor>Marka</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Marka/Overview', collapsed: true, items: [
                    { text: '🔷 <motor>Marka Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Marka/Frase/Overview' },
                    { text: '🟠 <motor>MarkaMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Marka/MarkaMano' },
                    { text: '🟠 <motor>MarkaKnot</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Marka/MarkaKnot' },
                    { text: '🟠 <motor>MarkaReload</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Marka/MarkaReload' },
                    { text: '🟠 <motor>MarkaRip</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Marka/MarkaRip' },
                    { text: '🟠 <motor>MarkaRoll</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Marka/MarkaRoll' },
                  ]
                },
                {
                  text: '🟠 <motor>Tibior</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Tibior/Overview', collapsed: true, items: [
                    { text: '🔷 <motor>Tibior Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Tibior/Frase/Overview' },
                    { text: '🟠 <motor>TibiorMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Tibior/TibiorMano' },
                    { text: '🟠 <motor>TibiorOn</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Tibior/TibiorOn' },
                    { text: '🟠 <motor>TibiorOff</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Tibior/TibiorOff' },
                  ]
                },
                {
                  text: '🟠 <motor>Glove</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Glove/Overview', collapsed: true, items: [
                    { text: '🔷 <motor>Glove Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Glove/Frase/Overview' },
                    { text: '🟠 <motor>GloveMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Glove/GloveMano' },
                  ]
                },
                {
                  text: '🟠 <motor>Kit</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Kit/Overview', collapsed: true, items: [
                  ]
                },
                {
                  text: '🟠 <motor>Rope</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Rope/Overview', collapsed: true, items: [
                  ]
                },
                {
                  text: '🟠 <motor>Spade</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/Overview', collapsed: true, items: [
                    { text: '🔷 <motor>Spade Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/Frase/Overview' },
                    { text: '🟠 <motor>SpadeAmble</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeAmble' },
                    { text: '🟠 <motor>SpadeAnchor</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeAnchor' },
                    { text: '🟠 <motor>SpadeChop</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeChop' },
                    { text: '🟠 <motor>SpadeCone</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeCone' },
                    { text: '🟠 <motor>SpadeDrag</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeDrag' },
                    { text: '🟠 <motor>SpadeMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeMano' },
                    { text: '🟠 <motor>SpadeBallista</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeBallista' },
                    { text: '🟠 <motor>SpadePendulum</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadePendulum' },
                    { text: '🟠 <motor>SpadePogo</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadePogo' },
                    { text: '🟠 <motor>SpadePoke</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadePoke' },
                    { text: '🟠 <motor>SpadePost</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadePost' },
                    { text: '🟠 <motor>SpadeAma</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeAma' },
                    { text: '🟠 <motor>SpadeRotate</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeRotate' },
                    { text: '🟠 <motor>SpadeSkreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeSkreef' },
                    { text: '🟠 <motor>SpadeImpact</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeImpact' },
                    { text: '🟠 <motor>SpadeStall</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeStall' },
                    { text: '🟠 <motor>SpadeStomp</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeStomp' },
                    { text: '🟠 <motor>SpadeKurve</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeKurve' },
                    { text: '🟠 <motor>SpadeTest</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeTest' },
                    { text: '❌ <motor>SpadeError</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Spade/SpadeError' },
                  ]
                },
                {
                  text: '🟠 <motor>Doru</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/Overview', collapsed: true, items: [
                    { text: '🟠 <motor>DoruAmble</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruAmble' },
                    { text: '🟠 <motor>DoruAmble</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruAmble' },
                    { text: '🟠 <motor>DoruAnchor</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruAnchor' },
                    { text: '🟠 <motor>DoruBridge</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruBridge' },
                    { text: '🟠 <motor>DoruBump</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruBump' },
                    { text: '🟠 <motor>DoruChop</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruChop' },
                    { text: '🟠 <motor>DoruCone</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruCone' },
                    { text: '🟠 <motor>DoruDrag</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruDrag' },
                    { text: '🟠 <motor>DoruMano</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruMano' },
                    { text: '🟠 <motor>DoruMatch</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruMatch' },
                    { text: '🟠 <motor>DoruPendulum</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruPendulum' },
                    { text: '🟠 <motor>DoruPogo</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruPogo' },
                    { text: '🟠 <motor>DoruPoke</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruPoke' },
                    { text: '🟠 <motor>DoruPost</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruPost' },
                    { text: '🟠 <motor>DoruProp</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruProp' },
                    { text: '🟠 <motor>DoruPost</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruPost' },
                    { text: '🟠 <motor>DoruRotate</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruRotate' },
                    { text: '🟠 <motor>DoruSkreef</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruSkreef' },
                    { text: '🟠 <motor>DoruSlam</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruSlam' },
                    { text: '🟠 <motor>DoruSlap</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruSlap' },
                    { text: '🟠 <motor>DoruSlide</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruSlide' },
                    { text: '🟠 <motor>DoruStall</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruStall' },
                    { text: '🟠 <motor>DoruStomp</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruStomp' },
                    { text: '🟠 <motor>DoruOnda</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruOnda' },
                    { text: '❌ <motor>DoruError</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/InstrumentMooves/Doru/DoruError' },
                  ]
                }
              ]
            },
            {
              text: '🟠 <motor>Truck</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/TruckMoove/Overview', collapsed: true, items: [
                { text: '🔷 <motor>Truck Frase</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/TruckMoove/Frase/Overview' },
                { text: '🟠 <motor>Sleep</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/TruckMoove/Sleep' },
                { text: '🟠 <motor>Sit</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/TruckMoove/Sit' },
              ]
            },
            { text: '🟠 <motor>Kinesiology</motor>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Mooves/Kinesiology/KinesiologyOverview' },
          ],
        },
        // #ANIMA
        {
          text: '🕸 <anima>ANIMA</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/ANIMA/ANIMAoverview', collapsed: true, items: [
            { text: '🔷 <anima>Psike Teori</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/NeuroTeori' },
            {
              text: '🕸 <anima>Arousal</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Arousal/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Attention</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Attention/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Audio</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Audio/Overview', collapsed: true, items: [
                {
                  text: '🕸 <anima>Music</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Audio/Music/Overview', collapsed: true, items: [
                    { text: '🕸 <anima>Playlists</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Audio/Music/Overview' },
                  ]
                },
                { text: '🕸 <anima>BranchBreakSound</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Audio/BranchBreakSound' },
                { text: '🕸 <anima>LogBreakSound</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Audio/LogBreakSound' },
                { text: '🕸 <anima>SlashSound</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Audio/SlashSound' },
                { text: '🕸 <anima>SpadeSound</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Audio/SpadeSound' },
                { text: '🕸 <anima>SoilSound</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Audio/SoilSound' },
              ]
            },
            {
              text: '🕸 <anima>Awareness</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Awareness/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Counting</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Counting/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Decision</anima>', collapsed: true, items: [
                { text: '🕸 <anima>GoOrNoGo</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Decision/GoOrNoGo' },
                { text: '🕸 <anima>MicrositeSelection</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Decision/MicrositeSelection' },
              ]
            },
            {
              text: '🕸 <anima>Emotion</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Emotion/Overview', collapsed: true, items: [
                { text: '🕸 <anima>Anger</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Emotion/Anger' },
                { text: '🕸 <anima>Disgust</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Emotion/Disgust' },
                { text: '🕸 <anima>Fear</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Emotion/Fear' },
                { text: '🕸 <anima>Joy</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Emotion/Joy' },
                { text: '🕸 <anima>Sadness</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Emotion/Sadness' },
              ]
            },
            {
              text: '🕸 <anima>Energy</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Energy/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Estimation</anima>', collapsed: true, items: [
                { text: '🕸 <anima>AreaEstimation</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Estimation/AreaEstimation' },
                { text: '🕸 <anima>BagCoverEstimation</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Estimation/BagCoverEstimation' },
                { text: '🕸 <anima>DistanceEstimation</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Estimation/DistanceEstimation' },
                { text: '🕸 <anima>TimeEstimation</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Estimation/TimeEstimation' },
              ]
            },
            {
              text: '🕸 <anima>Event</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Event/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Homeostasis</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Homeostasis/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Memory</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Memory/Overview', collapsed: true, items: [
                { text: '🕸 <anima>WorkingMemory</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Memory/WorkingMemory' },
                { text: '🕸 <anima>ShortTermMemory</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Memory/ShortTermMemory' },
                { text: '🕸 <anima>LongTermMemory</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Memory/LongTermMemory' },
                { text: '🕸 <anima>NumberMemory</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Memory/NumberMemory' },
                { text: '🕸 <anima>ViaMemory</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Memory/ViaMemory' },
              ]
            },
            {
              text: '🕸 <anima>Mindfulness</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Mindfulness/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Muscle</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Muscle/Overview', collapsed: true, items: [
              ]
            },
            { text: '🕸 <anima>Proprioception</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Proprioception/Overview' },
            { text: '🕸 <anima>Resilience</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Resilience/Overview' },
            {
              text: '🕸 <anima>SpatialCognition</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/SpatialCognition/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🕸 <anima>Time</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Time/Overview', collapsed: true, items: [
                { text: '🕸 <anima>BagUpTime</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Time/BagUpTime' },
                { text: '🕸 <anima>DailySchedule</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Time/DailySchedule' },
                { text: '🕸 <anima>MooveTiming</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Time/MoovesTiming' },
                { text: '🕸 <anima>Planning</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Time/Planning' },
                { text: '🕸 <anima>Timer</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Time/Timer' },
              ]
            },
            { text: '🕸 <anima>Thermoception</anima>', link: '/content/PLANTABETA/TEORI/ELEMENTS/Psike/Thermoception' },
          ]
        },
      ]
    },
    // # COMPOUNDS
    {
      text: '🔷 <beta>COMPOUNDS</beta>', link: '/content/PLANTABETA/TEORI/COMPOUNDS/COMPOUNDSoverview', collapsed: true, items: [
        { text: '💜_⭐', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🔻', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🔻_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🔻_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🔻_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🔻', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🔻_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🔻_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🔻_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_🟩', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🔻', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🔻_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🔻_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🔻', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🔻_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🔻_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🔻_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🔻', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🔻_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🔻_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🔻_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🔻', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🔻_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🔻_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🔻_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🔻', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🔻_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🔻_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🔻_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🟠 ', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🔻_🟠', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🔻_🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🔻_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟠_🕸', link: '/content/PLANTABETA/TEORI/COMPOUNDS/', collapsed: true, items: [] },
      ]
    },


    { text: '📃 Lexikon', link: '/content/PLANTABETA/TEORI/ELEMENTS/glossary/Glossary' },
    { text: '📷 Media Database', link: '/content/PLANTABETA/TEORI/ELEMENTS/media/Overview' }
  ]
}

function sidebarPRAKTIK() {
  return [
    { text: '<strong>PRAKTIK Overview</strong>', link: '/content/PLANTABETA/PRAKTIK/ELEMENTS/PRAKTIKoverview' },
  ]
}

// #Tutorial
function sidebarTutorial() {
  return [
    { text: 'Tutorial Overview', link: '/content/tutorial/TutorialOverview' },
    { text: 'Lesson Plans', link: '/content/tutorial/LessonPlans' },
    { text: 'Video Tutorials Overview', link: '/content/tutorial/VideoTutorialsOverview' },
    { text: 'Labelling', link: '/content/tutorial/Test_LabelDiagram' },
    { text: 'Matching', link: '/content/tutorial/Test_Matching' },
    { text: 'MultipleChoice', link: '/content/tutorial/Test_MultipleChoice' },
    { text: 'Sequencing', link: '/content/tutorial/Test_Sequencing' },
    { text: 'Go to Reference', link: '/content/PLANTABETA/TEORI/ELEMENTS/Overview' },
  ]
}

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/content/example/Overview' },
    { text: 'Go to Tutorial', link: '/content/tutorial/TutorialOverview' },
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
