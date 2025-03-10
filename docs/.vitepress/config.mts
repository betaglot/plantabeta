import { defineConfig } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  vite: {
    // ...
    ssr: {
      noExternal: ['vuetify']
    }
  },
  cleanUrls: true,
  lang: 'en-US',
  title: 'PLANTABETA',
  description: 'Everything is Connected',
  lastUpdated: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ["link", { rel: "apple-touch-icon", href: "/PlantaBeta_Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/PlantaBeta_Logo.png" }]
  ],
  themeConfig: {
    notFound: {
      title: 'PAGE NOT FOUND',
      quote: "Quote", // set to '' to hide
      linkLabel: 'go to home', // aria-label
      linkText: 'Back to home',
      code: '404'
    },
    outline: [2, 4],
    logo: '/PlantaBeta_Logo.png',
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@BETAGLOT' },
      { icon: 'github', link: 'https://github.com/betaglot/plantabeta' }
    ],
// Search
    search: {
      provider: 'local'
    },
    nav: nav(),
// Sidebar
    sidebar: {
      '/about/': sidebarAbout(),
      '/guide/': sidebarGuide(),
      '/example/': sidebarExamples(),
      '/tutorial/': sidebarTutorial(),
      '/PlantaBeta/Teori/': sidebarTEORI(),
      '/PlantaBeta/Teori/Elements/': sidebarElements(),
      '/PlantaBeta/Teori/Sistem/': sidebarSistem(),
      '/PlantaBeta/Teori/Betomiks/': sidebarBetomiks(),
      '/PlantaBeta/Teori/Komposition/': sidebarKomposition(),
      '/PlantaBeta/Teori/Beta/': sidebarBeta(),
      '/PlantaBeta/Praktik/': sidebarPRAKTIK(),
      '/dev/': sidebarDev(),
    }
  }
})

// Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: 'guide/GuideOverview',
      activeMatch: '/guide/'
    },
    {
      text: 'Examples',
      link: '/example/ExampleOverview',
      activeMatch: '/example/'
    },
    {
      text: 'Tutorial',
      link: 'tutorial/TutorialOverview',
      activeMatch: '/tutorial/'
    },
    {
      text: '[ TEORI ]',
      link: '/PlantaBeta/Teori/TeoriOverview',
      activeMatch: '/PlantaBeta/Teori/'
    },
    {
      text: '[ PRAKTIK ]',
      link: '/PlantaBeta/Praktik/PraktikOverview',
      activeMatch: '/PlantaBeta/Praktik/'
    },
    {
      text: 'About',
      link: '/about/AboutOverview',
      activeMatch: '/about/'
    },
    {
      text: '🛠',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    }
  ]
}
// Dev
function sidebarDev() {
  return [
    { text: 'Dev Overview', link: '/dev/DevOverview' },
    { text: 'Captions', link: '/dev/BagOut_Captions' },
    { text: 'Contact', link: '/dev/Contact' },
    { text: 'AcademiaDev', link: '/dev/AcademiaDev' },
    { text: 'Art', link: '/dev/art/Overview' },
    { text: '👩‍💻 BePython', link: '/dev/BePython' },
    { text: 'Contribute', link: '/dev/Contribute' },
    { text: 'Downloads', link: '/dev/Downloads' },
    { text: 'DX', link: '/dev/DX' },
    { text: 'ElementGraph', link: '/dev/ElementsGraph' },
    { text: 'Filming', link: '/dev/Filming' },
    { text: 'FireBeta', link: '/FireBeta/FireBeta' },
    { text: 'GoPro', link: '/dev/GoPro' },
    {
      text: 'Graphics', collapsed: true, items: [
        { text: 'Overview', link: '/dev/Graphics/Overview' },
        { text: '<beta>BETA Graphics</beta>', link: '/dev/Graphics/BETAGraphic' },
        { text: '<ekos>EKOS Graphics</ekos>', link: '/dev/Graphics/EKOSGraphic' },
        { text: '<motor>MOTOR Graphics</motor>', link: '/dev/Graphics/MOTORGraphic' },
        { text: '<anima>ANIMA Graphics</anima>', link: '/dev/Graphics/ANIMAGraphic' },
        { text: '<via>VIA Graphics</via>', link: '/dev/Graphics/VIAGraphic' },
        { text: 'UX Graphics', link: '/dev/Graphics/UXGraphic' },
        { text: 'DX Graphics', link: '/dev/Graphics/DXGraphic' },
      ]
    },
    { text: 'Mindmap', link: '/dev/Mindmap' },
    { text: 'Offline', link: '/dev/Offline' },
    { text: 'Open Source', link: '/dev/OpenSource' },
    { text: 'PaperPhoto', link: '/dev/PaperPhoto' },
    { text: 'Podcast', link: '/dev/Podcast' },
    { text: 'Pylanter', link: '/dev/Pylanter' },
    { text: 'Research Questions', link: '/dev/ResearchQuestions' },
    { text: 'Roadmap', link: '/dev/Roadmap' },
    { text: 'Sequence', link: '/dev/Sequence' },
    { text: 'SocialMedia', link: '/dev/SocialMedia' },
    { text: 'StyleGuide', link: '/dev/StyleGuide' },
    { text: 'Tagging', link: '/dev/Tagging' },
    { text: 'TaskList', link: '/dev/TaskList' },
    { text: 'ToDo', link: '/dev/ToDo' },
    { text: 'Tools', link: '/dev/Tools' },
    { text: 'UX', link: '/dev/UX' },
    { text: 'VDev', link: '/dev/VDev' },
    { text: 'AfternoonTask', link: '/dev/AfternoonTask' },
  ]
}
// Guide
function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Tree Planting?', link: '/guide/What/WhatTreePlanting' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: 'To Support Ecosystems', link: '/guide/Why/SupportEcosystem' },
        { text: 'To Reduce Injury', link: '/guide/Why/Injury' },
        { text: 'To Increase Productivity', link: '/guide/Why/Productivity' },
        { text: 'To Improve Communication', link: '/guide/Why/Communication' },
        { text: 'To Steepen Learning Curve', link: '/guide/Why/LearningCurve' },
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
    { text: 'Go to Examples', link: '/example/ExampleOverview' },
  ]
}
// About
function sidebarAbout() {
  return [
    {
      text: 'About', link: '/about/AboutOverview', collapsed: false, items: [
      ]
    },
  ]
}
// TEORI
function sidebarTEORI() {
  return [
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/Elements/TeoriOverview' },
    // # BETOMIKS
    { text: 'SISTEM', link: '/PlantaBeta/Teori/Sistem/SistemOverview' },
    { text: 'ELEMENTS', link: '/PlantaBeta/Teori/Elements/ElementsOverview' },
    { text: '🌈 <beta>BETA</beta>', link: '/PlantaBeta/Teori/Beta/BetaOverview' },
    { text: 'KOMPOSITION', link: '' },
    { text: 'BETOMIKS', link: '/PlantaBeta/Teori/BETOMIKS/BETOMIKSoverview', },
    { text: 'LEXIKON', link: '/PlantaBeta/Teori/Elements/glossary/Glossary' },
  ]
}
// Betomiks
function sidebarBetomiks() {
  return [
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/Elements/TeoriOverview' },
    {
      text: 'BETOMIKS', link: '/PlantaBeta/Teori/Betomiks/BetomiksOverview', collapsed: false, items: [
        { text: 'Attention', link: '/PlantaBeta/Teori/Betomiks/Attention/Overview' },
        { text: 'Flux', link: '/PlantaBeta/Teori/Betomiks/Flux/Overview' },
        { text: 'Image', link: '/PlantaBeta/Teori/Betomiks/Image/Overview' },
        { text: 'Moment', link: '/PlantaBeta/Teori/Betomiks/Moment/Overview' },
        { text: 'Text', link: '/PlantaBeta/Teori/Betomiks/Text/Overview' },
      ]
    },
  ]
}
// Komposition
function sidebarKomposition() {
  return [
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/Elements/TeoriOverview' },
    {
      text: 'KOMPOSITION', link: '/PlantaBeta/Teori/Komposition/KompositionOverview', collapsed: false, items: [
        { text: 'Density', link: '/PlantaBeta/Teori/Komposition/Density/Overview' },
        { text: 'Flux', link: '/PlantaBeta/Teori/Komposition/Flux/Overview' },
        { text: 'Harmony', link: '/PlantaBeta/Teori/Komposition/Harmony/Overview' },
        { text: 'Melody', link: '/PlantaBeta/Teori/Komposition/Melody/Overview' },
        { text: 'Moment', link: '/PlantaBeta/Teori/Komposition/Moment/Overview' },
        { text: 'Ritmo', link: '/PlantaBeta/Teori/Komposition/Ritmo/Overview' },
        { text: 'Komposor', link: '/PlantaBeta/Teori/Komposition/Komposor/Overview' },
      ]
    },
  ]
}
// Sistem
function sidebarSistem() {
  return [
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/Elements/TeoriOverview' },
    {
      text: '<beta>SISTEM</beta>', link: '/PlantaBeta/Teori/Sistem/SistemOverview', collapsed: true, items: []
    },
  ]
}
// Elements
function sidebarElements() {
  return [
    {
      text: 'TEORI', link: '/PlantaBeta/Teori/TeoriOverview'
    },
    // #LABOR
    {
      text: '⭐<labor>LABOR</labor>⭐', link: '/PlantaBeta/Teori/Elements/Labor/LaborOverview', collapsed: true, items: [
        {
          text: '⭐<labor>LABON</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Labon/Overview', collapsed: true, items: [
            { text: '<labor>Atributs</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Labon/Atributs/Overview', collapsed: true, items: [] },
            { text: '<labor>Metods</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Labon/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        {
          text: '<labor>Definitions</Labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Overview', collapsed: true, items: [
            { text: '⭐<labor>Cache</labor>', link: '//PlantaBeta/Teori/Elements/Labor/Definition/Cache/Overview', collapsed: true, items: [] },
            { text: '⭐<labor>Crop</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Crop/Overview', collapsed: true, items: [] },
            {
              text: '⭐<labor>Instrument</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Overview', collapsed: true, items: [
                { text: '⭐<labor>Boot</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Boot/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Bottle</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Bottle/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Box</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Box/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Bundle</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Bundle/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Doru</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Doru/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Glove</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Glove/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Karabiner</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Karabiner/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Kit</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Kit/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Marka</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Marka/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Plantafor</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Plantafor/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>PlotCord</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/PlotCord/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Radior</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Radior/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Rope</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Rope/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Repair</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Repair/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Spade</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Spade/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Tibior</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Instrument/Tibior/Overview', collapsed: true, items: [] },
              ]
            },
            { text: '⭐<labor>Neon</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Neon/Overview', collapsed: true, items: [] },
            {
              text: '⭐<labor>Site</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Site/Overview', collapsed: true, items: [
                { text: '⭐<labor>Block</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Site/Block/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Div</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Site/Div/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Microsite</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Site/Microsite/Overview', collapsed: true, items: [] },
                { text: '⭐<labor>Piece</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Site/Piece/Overview', collapsed: true, items: [] },
              ]
            },
            { text: '⭐<labor>Task</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Task/Overview', collapsed: true, items: [] },
            { text: '⭐<labor>Team</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Team/Overview', collapsed: true, items: [] },
          ]
        },
        {
          text: '<labor>Propositions</Labor>', link: '/PlantaBeta/Teori/Elements/Labor/Proposition/Overview', collapsed: true, items: [
            { text: '<labor>Teorem</Labor>', link: '/PlantaBeta/Teori/Elements/Labor/Proposition/Teorem/Overview', collapsed: true, items: [] },
            { text: '<labor>Problem</Labor>', link: '/PlantaBeta/Teori/Elements/Labor/Proposition/Problem/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
    // #SOMA
    {
      text: '🔷<soma>SOMA</soma>🔷', link: '/PlantaBeta/Teori/Elements/Soma/SomaOverview', collapsed: true, items: [
        {
          text: '🔷<soma>SOMON</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Somon/Overview', collapsed: true, items: [
            { text: '<soma>Atributs</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Somon/Atributs/Overview', collapsed: true, items: [] },
            { text: '<soma>Metods</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Somon/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        {
          text: '<soma>Definitions</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Overview', collapsed: true, items: [
            { text: '🔷<soma>Korpos</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Korpos' },
            { text: '🔷<soma>Head</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Head' },
            { text: '🔷<soma>Brazo</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Brazo' },
            { text: '🔷<soma>Mano</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Mano' },
            { text: '🔷<soma>Base</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Base' },
          ]
        },
        {
          text: '<soma>Propositions</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Proposition/Overview', collapsed: true, items: [
            { text: '<soma>Teorem</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Proposition/Teorem/Overview', collapsed: true, items: [] },
            { text: '<soma>Problem</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Proposition/Problem/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
    // #EKOS
    {
      text: '🟩<ekos>EKOS</ekos>🟩', collapsed: true, link: '/PlantaBeta/Teori/Elements/Ekos/EkosOverview', items: [
        {
          text: '🟩<ekos>EKON</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Ekon/Overview', collapsed: true, items: [
            { text: '<ekos>Atributs</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Ekon/Atributs/Overview', collapsed: true, items: [] },
            { text: '<ekos>Metods</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Ekon/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '<ekos>Axioms</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Axiom/Overview', collapsed: true, items: [] },
        {
          text: '<ekos>Definitions</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Overview', collapsed: true, items: [
            {
              text: '<ekos>🟩Atmosfera</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Overview', collapsed: true, items: [
                { text: '<ekos>🟩Air Temperature</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/AirTemperature' },
                { text: '<ekos>🟩Humidity</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Humidity' },
                { text: '<ekos>🟩Lightning</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Lightning' },
                {
                  text: '<ekos>🟩Particulates</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Particulates/Overview', collapsed: true, items: [
                    { text: '<ekos>🟩Ash</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Particulates/Ash' },
                    { text: '<ekos>🟩Dust</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Particulates/Dust' },
                    { text: '<ekos>🟩Smoke</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Particulates/Smoke' },
                    { text: '<ekos>🟩Spores</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Particulates/Spores' },
                  ]
                },
                {
                  text: '<ekos>🟩Precipitation</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Precipitation/Overview', collapsed: true, items: [
                    { text: '<ekos>🟩Fog</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Precipitation/Fog' },
                    { text: '<ekos>🟩Hail</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Precipitation/Hail' },
                    { text: '<ekos>🟩Rain</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Precipitation/Rain' },
                    { text: '<ekos>🟩Snow</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Precipitation/Snow' },
                  ]
                },
                { text: '<ekos>🟩Wind</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Atmosfera/Wind' },
              ]
            },
            {
              text: '<ekos>🟩Biosfera</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Overview', collapsed: true, items: [
                {
                  text: '<ekos>🟩Dendron</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Dendron/Overview', collapsed: true, items: [
                    { text: '<ekos>🟩Larix</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Dendron/Larix' },
                    { text: '<ekos>🟩Picea</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Dendron/Picea' },
                    { text: '<ekos>🟩Pinus</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Dendron/Pinus' },
                    { text: '<ekos>🟩Pseudotsuga</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Dendron/Pseudotsuga' },
                    { text: '<ekos>🟩Quercus</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Dendron/Quercus' },
                    { text: '<ekos>🟩Thuja</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Dendron/Thuja' },
                    { text: '<ekos>🟩Tsuga</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Dendron/Tsuga' },
                  ]
                },
                {
                  text: '<ekos>🟩Fauna</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Fauna/Overview', collapsed: true, items: [
                    { text: '<ekos>🟩Ant</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Fauna/Ant' },
                    { text: '<ekos>🟩Bear</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Fauna/Bear' },
                    { text: '<ekos>🟩Flies</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Fauna/Flies' },
                    { text: '<ekos>🟩Hornet</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Fauna/Hornet' },
                    { text: '<ekos>🟩Moose</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Fauna/Moose' },
                    { text: '<ekos>🟩Mosquito</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Fauna/Mosquito' },
                  ]
                },
                {
                  text: '<ekos>🟩Flora</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Flora/Overview', collapsed: true, items: [
                    { text: '<ekos>🟩Abies</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Flora/Abies' },
                    { text: '<ekos>🟩Bryophyta</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Flora/Bryophyta' },
                    { text: '<ekos>🟩BurntFlora</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Flora/BurntFlora' },
                    { text: '<ekos>🟩Flower</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Flora/Flower' },
                    { text: '<ekos>🟩Log</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Flora/Log' },
                    { text: '<ekos>🟩Poales</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Flora/Poales' },
                    {
                      text: '<ekos>🟩Slash</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Slash/Overview', collapsed: true, items: [
                        { text: '<ekos>🟩BurnPileSlash</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Slash/BurnPileSlash' },
                        { text: '<ekos>🟩HighSlash</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Slash/HighSlash' },
                        { text: '<ekos>🟩LowSlash</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Slash/LowSlash' },
                        { text: '<ekos>🟩WetSlash</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Slash/WetSlash' },
                      ]
                    },
                    { text: '<ekos>🟩Stump</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Biosfera/Flora/Stump' },
                  ]
                },
              ]
            },
            {
              text: '<ekos>🟩Heliosfera</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Heliosfera/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '<ekos>🟩Hidrosfera</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Hirdosfera/Overview', collapsed: true, items: [
                { text: '<ekos>🟩GroundWater</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Heliosfera/GroundWater' },
                { text: '<ekos>🟩MovingWater</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Heliosfera/MovingWater' },
                { text: '<ekos>🟩StagnantWater</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Heliosfera/StagnantWater' },
              ]
            },
            {
              text: '<ekos>🟩Litosfera</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Litosfera/Overview', collapsed: true, items: [
                { text: '<ekos>🟩RockCap</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Hirdosfera/RockCap' },
              ]
            },
            {
              text: '<ekos>🟩Pedosfera</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/Overview', collapsed: true, items: [
                {
                  text: '<ekos>🟩SoilMaterial</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/MaterialModifiers/Overview', collapsed: true, items: [
                    { text: '<ekos>🟩BoulderSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/MaterialModifiers/BoulderSoil' },
                    { text: '<ekos>🟩ClaySoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/MaterialModifiers/ClaySoil' },
                    { text: '<ekos>🟩CobbleSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/MaterialModifiers/CobbleSoil' },
                    { text: '<ekos>🟩PebbleSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/MaterialModifiers/PebbleSoil' },
                    { text: '<ekos>🟩RubbleSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/MaterialModifiers/RubbleSoil' },
                    { text: '<ekos>🟩SandSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/MaterialModifiers/SandSoil' },
                    { text: '<ekos>🟩SiltSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/MaterialModifiers/SiltSoil' },
                  ]
                },
                {
                  text: '<ekos>🟩SoilFiber</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/SoilFiber/Overview', collapsed: true, items: [
                    { text: '<ekos>🟩FibricSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/SoilFiber/FibricSoil' },
                    { text: '<ekos>🟩HumicSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/SoilFiber/HumicSoil' },
                    { text: '<ekos>🟩MesicSoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/SoilFiber/MesicSoil' },
                    { text: '<ekos>🟩WoodySoil</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Pedosfera/SoilFiber/WoodySoil' },
                  ]
                },
              ]
            },
            { text: '<ekos>🟩Terrain</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Terrain/Overview', collapsed: true, items: [] },
          ]
        },
        {
          text: '<ekos>Propositions</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Proposition/Overview', collapsed: true, items: [
            { text: '<ekos>Teorem</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Proposition/Teorem/Overview', collapsed: true, items: [] },
            { text: '<ekos>Problem</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Proposition/Problem/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
    // #VIA
    {
      text: '🔻<via>VIA</via>🔻', link: '/PlantaBeta/Teori/Elements/Via/ViaOverview', collapsed: true, items: [
        {
          text: '🔻<via>VION</via>', link: '/PlantaBeta/Teori/Elements/Via/Vion/Overview', collapsed: true, items: [
            { text: '<via>Atributs</via>', link: '/PlantaBeta/Teori/Elements/Via/Vion/Atributs/Overview', collapsed: true, items: [] },
            { text: '<via>Metods</via>', link: '/PlantaBeta/Teori/Elements/Via/Vion/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '<via>Axioms</via>', link: '/PlantaBeta/Teori/Elements/Via/Axiom/Overview', collapsed: true, items: [] },
        { text: '<via>Definitions</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Overview', collapsed: true, items: [] },
        {
          text: '<via>Propositions</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Overview', collapsed: true, items: [
            { text: '<via>Teorem</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/Overview', collapsed: true, items: [] },
            { text: '<via>Problem</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Problem/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
    // #MOTOR
    {
      text: '🟠<motor>MOTOR</motor>🟠', link: '/PlantaBeta/Teori/Elements/Motor/MotorOverview', collapsed: true, items: [
        {
          text: '🟠<motor>MOTON</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Moton/Overview', collapsed: true, items: [
            { text: '<motor>Atributs</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Moton/Atributs/Overview', collapsed: true, items: [] },
            { text: '<motor>Metdods</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Moton/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '<motor>Axioms</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Axiom/Overview', collapsed: true, items: [] },
        { text: '<motor>Definitions</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/Overview', collapsed: true, items: [] },
        {
          text: '<motor>Propositions</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Proposition/Overview', collapsed: true, items: [
            { text: '<motor>Teorem</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Proposition/Teorem/Overview', collapsed: true, items: [] },
            { text: '<motor>Problem</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Proposition/Problem/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
    // #ANIMA
    {
      text: '💜<anima>ANIMA</anima>💜', link: '/PlantaBeta/Teori/Elements/Anima/AnimaOverview', collapsed: true, items: [
        {
          text: '💜<anima>ANIMON</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Animon/Overview', collapsed: true, items: [
            { text: '<anima>Atributs</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Animon/Atributs/Overview', collapsed: true, items: [] },
            { text: '<anima>Metods</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Animon/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '<anima>Axioms</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Axiom/Overview', collapsed: true, items: [] },
        { text: '<anima>Definitions</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Overview', collapsed: true, items: [] },
        {
          text: '<anima>Propositions</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Proposition/Overview', collapsed: true, items: [
            { text: '<anima>Teorem</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Proposition/Teorem/Overview', collapsed: true, items: [] },
            { text: '<anima>Problem</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Proposition/Problem/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
  ]
}
// Beta
function sidebarBeta() {
  return [
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/TeoriOverview' },
    { text: '🌈<beta>BETA</beta>🌈', link: '/PlantaBeta/Teori/Beta/BetaOverview' },
    {
      text: '🌈<beta>BETUM</beta>', link: '/PlantaBeta/Teori/Beta/Betum/Overview', collapsed: true, items: [
        { text: '<beta>Atributs</beta>', link: '/PlantaBeta/Teori/Beta/Betum/Atributs/Overview', collapsed: true, items: [] },
        { text: '<beta>Metods</beta>', link: '/PlantaBeta/Teori/Beta/Betum/Metods/Overview', collapsed: true, items: [] },
      ]
    },
    { text: '<beta>Axioms</beta>', link: '/PlantaBeta/Teori/Beta/Axioms/Overview', collapsed: true, items: [] },
    {
      text: '<beta>Definitions</beta>', link: '/PlantaBeta/Teori/Beta/Definitions/Overview', collapsed: true, items: [
        { text: '⭐-🔷', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟩', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟩-🔻', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Vion/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟩-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟩-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟩-🔻-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟩-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Moton/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟩-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟩-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🔻', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Vion/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🔻-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Moton/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔷-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🟩', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Overview', collapsed: true, items: [] },
        { text: '⭐-🟩-🔻', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Vion/Overview', collapsed: true, items: [] },
        { text: '⭐-🟩-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '⭐-🟩-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🟩-🔻-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🟩-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Moton/Overview', collapsed: true, items: [] },
        { text: '⭐-🟩-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🟩-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔻', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Vion/Overview', collapsed: true, items: [] },
        { text: '⭐-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '⭐-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🔻-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Overview', collapsed: true, items: [] },
        { text: '⭐-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '⭐-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Animon/Overview', collapsed: true, items: [] },
        { text: '🔷-🟩', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon/Overview', collapsed: true, items: [] },
        { text: '🔷-🟩-🔻', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Vion/Overview', collapsed: true, items: [] },
        { text: '🔷-🟩-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '🔷-🟩-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '🔷-🟩-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Moton/Overview', collapsed: true, items: [] },
        { text: '🔷-🟩-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '🔷-🟩-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Animon/Overview', collapsed: true, items: [] },
        { text: '🔷-🔻', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Vion/Overview', collapsed: true, items: [] },
        { text: '🔷-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '🔷-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '🔷-🔻-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '🔷-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Moton/Overview', collapsed: true, items: [] },
        { text: '🔷-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '🔷-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Animon/Overview', collapsed: true, items: [] },
        { text: '🟩-🔻', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Overview', collapsed: true, items: [] },
        { text: '🟩-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '🟩-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '🟩-🔻-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '🟩-🟠 ', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Overview', collapsed: true, items: [] },
        { text: '🟩-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '🟩-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Overview', collapsed: true, items: [] },
        { text: '🔻-🟠', link: '/PlantaBeta/Teori/Beta/Definitions/Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '🔻-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '🟠-💜', link: '/PlantaBeta/Teori/Beta/Definitions/Moton-Animon/Overview', collapsed: true, items: [] },
      ]
    },
    {
      text: '<beta>Propositions</beta>', link: '/PlantaBeta/Teori/Beta/Propositions/Overview', collapsed: true, items: [
        { text: '<beta>Teorem</beta>', link: '/PlantaBeta/Teori/Beta/Propositions/Teorem/Overview', collapsed: true, items: [] },
        { text: '<beta>Problem</beta>', link: '/PlantaBeta/Teori/Beta/Propositions/Problem/Overview', collapsed: true, items: [] },
      ]
    },
  ]
}

// PRAKTIK
function sidebarPRAKTIK() {
  return [
    { text: '<strong>PRAKTIK Overview</strong>', link: '/PlantaBeta/Praktik/PRAKTIKoverview' },
  ]
}

// Tutorial
function sidebarTutorial() {
  return [
    { text: 'Tutorial Overview', link: '/tutorial/TutorialOverview' },
    { text: 'Lesson Plans', link: '/tutorial/LessonPlans' },
    { text: 'Video Tutorials Overview', link: '/tutorial/VideoTutorialsOverview' },
    { text: 'Labelling', link: '/tutorial/Test_LabelDiagram' },
    { text: 'Matching', link: '/tutorial/Test_Matching' },
    { text: 'MultipleChoice', link: '/tutorial/Test_MultipleChoice' },
    { text: 'Sequencing', link: '/tutorial/Test_Sequencing' },
    { text: 'Go to Reference', link: '/PlantaBeta/Teori/Elements/Overview' },
  ]
}

// Examples
function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/example/ExampleOverview' },
    { text: 'Go to Tutorial', link: '/tutorial/TutorialOverview' },
  ]
}

