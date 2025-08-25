import { defineConfig } from 'vitepress'
import { cs, el } from 'vuetify/locale'
import { withPwa } from '@vite-pwa/vitepress'

// export default withPwa(defineConfig({
  // pwa: {
  //   mode: 'development',
  //   base: '/',
  //   scope: '/',
  //   devOptions: {
  //     enabled: true,
  //     suppressWarnings: true,
  //     navigateFallback: '/',
  //   },
  // },
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
      '/examples/': sidebarExamples(),
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
      link: '/examples/ExampleOverview',
      activeMatch: '/examples/'
    },
    {
      text: 'Tutorial',
      link: 'tutorial/TutorialOverview',
      activeMatch: '/tutorial/'
    },
    {
      text: '🌈 ELEMENTS',
      link: '/PlantaBeta/Teori/Elements/ElementsOverview',
      activeMatch: '/PlantaBeta/Teori/Elements/'
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
    { text: '<dev>DevOverview</dev>', link: '/dev/DevOverview' },
    { text: '<dev>Captions</dev>', link: '/dev/BagOut_Captions' },
    { text: '<dev>Contact</dev>', link: '/dev/Contact' },
    {
      text: '<dev>ContentDev</dev>', collapsed: true, items: [
        { text: '<dev>GuideDev</dev>', link: '/dev/ContentDev/GuideDev' },
        { text: '<dev>TeoriDev</dev>', link: '/dev/ContentDev/TeoriDev' },
        { text: '<dev>VDev</dev>', link: '/dev/ContentDev/VDev' },
      ]
    },
    { text: '<dev>Art</dev>', link: '/dev/art/Overview' },
    { text: '<dev>Contribute</dev>', link: '/dev/Contribute' },
    { text: '<dev>DX</dev>', link: '/dev/DX' },
    { text: '<dev>Filming</dev>', link: '/dev/Filming' },
    { text: '<dev>GoPro</dev>', link: '/dev/GoPro' },
    {
      text: '<dev>Graphics</dev>', collapsed: true, items: [
        { text: '<dev>Overview</dev>', link: '/dev/Graphics/Overview' },
        { text: '<beta>BETA Graphics</beta>', link: '/dev/Graphics/Beta_Graphic' },
        { text: '<labor>LABOR</labor>', link: '/dev/Graphics/Labor_Graphic' },
        { text: '<soma>SOMA</soma>', link: '/dev/Graphics/Soma_Graphic' },
        { text: '<ekos>EKOS Graphics</ekos>', link: '/dev/Graphics/Ekos_Graphic' },
        { text: '<via>VIA Graphics</via>', link: '/dev/Graphics/Via_Graphic' },
        { text: '<motor>MOTOR Graphics</motor>', link: '/dev/Graphics/Motor_Graphic' },
        { text: '<anima>ANIMA Graphics</anima>', link: '/dev/Graphics/Anima_Graphic' },
        { text: '<dev>UX Graphics</dev>', link: '/dev/Graphics/UX_Graphic' },
        { text: '<dev>DX Graphics</dev>', link: '/dev/Graphics/DX_Graphic' },
      ]
    },
    { text: '<dev>Mindmap</dev>', link: '/dev/Mindmap' },
    { text: '<dev>Offline</dev>', link: '/dev/Offline' },
    { text: '<dev>OpenSource</dev>', link: '/dev/OpenSource' },
    {
      text: '<dev>Pedagogy</dev>', link: '/dev/Pedagogy/Overview', collapsed: true, items: [
        { text: '<dev>TutorialDev</dev>', link: '/dev/Pedagogy/TutorialDev' },
        { text: '<dev>Instructor</dev>', link: '/dev/Pedagogy/Instructor' },
        { text: '<dev>Motel_Pedagogy</dev>', link: '/dev/Pedagogy/Motel_Pedagogy' },
        { text: '<dev>Shadowing</dev>', link: '/dev/Pedagogy/Shadowing' },
        { text: '<dev>2024_Timeline</dev>', link: '/dev/Pedagogy/2024_Timeline' },
      ]
    },
    { text: '<dev>PodcastDev</dev>', link: '/dev/PodcastDev' },
    {
      text: '<dev>Research</dev>', link: '/dev/ResearchDev/Overview', collapsed: false, items: [
        { text: '<dev>AffordanceDev</dev>', link: '/dev/ResearchDev/Affordance' },
        { text: '<dev>AkademiaDev</dev>', link: '/dev/ResearchDev/AkademiaDev' },
        { text: '<dev>FieldNotes_2025</dev>', link: '/dev/ResearchDev/FieldNotes' },
        { text: '<dev>KeepNotes</dev>', link: '/dev/ResearchDev/KeepNotes' },
        { text: '<dev>ResearchQuestions</dev>', link: '/dev/ResearchDev/ResearchQuestions' },

      ]
    },
    { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
    { text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide' },
    { text: '<dev>UX</dev>', link: '/dev/UX' },
    { text: '<dev>VDev</dev>', link: '/dev/VDev' },
    { text: '<dev>AfternoonTask</dev>', link: '/dev/AfternoonTask' },
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
        { text: 'To Reduce Injury', link: '/guide/Why/Injury' },
        { text: 'To Increase Productivity', link: '/guide/Why/Productivity' },
        { text: 'To Improve Communication', link: '/guide/Why/Communication' },
        { text: 'To Steepen Learning Curve', link: '/guide/Why/LearningCurve' },
      ]
    },
    {
      text: 'Who are you?', collapsed: false, items: [
        { text: 'Potential Plantor', link: '/guide/Who/PotentialPlantor' },
        { text: 'Novice Plantor', link: '/guide/Who/NovicePlantor' },
        { text: 'Veteran Plantor', link: '/guide/Who/VeteranPlantor' },
        { text: 'Supervisor', link: '/guide/Who/Supervisor' },
        { text: 'Instructor', link: '/guide/Who/Instructor' }
      ]
    },
    { text: 'Go to Examples', link: '/examples/ExampleOverview' },
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
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/TeoriOverview' },
    // # BETOMIKS
    { text: '🌈 SISTEM', link: '/PlantaBeta/Teori/Sistem/SistemOverview' },
    { text: '🌈 ELEMENTS', link: '/PlantaBeta/Teori/Elements/ElementsOverview' },
    { text: '🌈 <beta>BETA</beta>', link: '/PlantaBeta/Teori/Beta/BetaOverview' },
    { text: '🌈 KOMPOSITION', link: '' },
    { text: '🌈 BETOMIKS', link: '/PlantaBeta/Teori/Betomiks/BetomiksOverview', },
    { text: '🌈 LEXIKON', link: '/PlantaBeta/Teori/Elements/glossary/Glossary' },
  ]
}
// Betomiks
function sidebarBetomiks() {
  return [
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/TeoriOverview' },
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
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/TeoriOverview' },
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
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/TeoriOverview' },
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
      text: '⭐<labor>LABOR</labor>', link: '/PlantaBeta/Teori/Elements/Labor/LaborOverview', collapsed: true, items: [
        {
          text: '<labor>LABON</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Labon/Overview', collapsed: true, items: [
            { text: '<labor>Atributs</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Labon/Atributs/Overview', collapsed: true, items: [] },
            { text: '<labor>Metods</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Labon/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        {
          text: '<labor>Definitions</Labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Overview', collapsed: true, items: [
            { text: '⭐<labor>Cache</labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Cache/Overview', collapsed: true, items: [] },
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
      text: '🔷<soma>SOMA</soma>', link: '/PlantaBeta/Teori/Elements/Soma/SomaOverview', collapsed: true, items: [
        {
          text: '<soma>SOMON</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Somon/Overview', collapsed: true, items: [
            { text: '<soma>Atributs</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Somon/Atributs/Overview', collapsed: true, items: [] },
            { text: '<soma>Metods</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Somon/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        {
          text: '<soma>Definitions</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Overview', collapsed: true, items: [
            { text: '🔷<soma>Korpo</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Korpo' },
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
      text: '🟩<ekos>EKOS</ekos>', collapsed: true, link: '/PlantaBeta/Teori/Elements/Ekos/EkosOverview', items: [
        {
          text: '<ekos>EKON</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Ekon/Overview', collapsed: true, items: [
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
              text: '<ekos>🟩Hidrosfera</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Hidrosfera/Overview', collapsed: true, items: [
                { text: '<ekos>🟩GroundWater</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Heliosfera/GroundWater' },
                { text: '<ekos>🟩MovingWater</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Heliosfera/MovingWater' },
                { text: '<ekos>🟩StagnantWater</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Heliosfera/StagnantWater' },
              ]
            },
            {
              text: '<ekos>🟩Litosfera</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Litosfera/Overview', collapsed: true, items: [
                { text: '<ekos>🟩RockCap</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Hidrosfera/RockCap' },
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
      text: '🔻<via>VIA</via>', link: '/PlantaBeta/Teori/Elements/Via/ViaOverview', collapsed: true, items: [
        {
          text: '<via>VION</via>', link: '/PlantaBeta/Teori/Elements/Via/Vion/Overview', collapsed: true, items: [
            { text: '<via>Atributs</via>', link: '/PlantaBeta/Teori/Elements/Via/Vion/Atributs/Overview', collapsed: true, items: [] },
            { text: '<via>Metods</via>', link: '/PlantaBeta/Teori/Elements/Via/Vion/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '<via>Axioms</via>', link: '/PlantaBeta/Teori/Elements/Via/Axiom/Overview', collapsed: true, items: [] },
        {
          text: '<via>Definitions</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Overview', collapsed: true, items: [
            { text: '🔻<via>Density</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Density/Overview' },
            {
              text: '🔻<via>Direction</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Direction/Overview', collapsed: true, items: [
                { text: '🔻<via>Direction_Cardinal</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Direction/DirectionCardinal' },

              ]
            },
            { text: '🔻<via>Displacement</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Displacement/Overview' },
            { text: '🔻<via>Distance</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Distance/Overview' },
            { text: '🔻<via>Div</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Div/Overview' },
            { text: '🔻<via>Limit</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Limit/Overview' },
            { text: '🔻<via>Line</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Line/Overview' },
            { text: '🔻<via>Orientation</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Orientation/Overview' },
            { text: '🔻<via>Point</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Point/Overview' },
            { text: '🔻<via>Takt</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Takt/Overview' },
            { text: '🔻<via>Time</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Time/Overview' },
            { text: '🔻<via>Zone</via>', link: '/PlantaBeta/Teori/Elements/Via/Definition/Zone/Overview' }
          ]
        },
        {
          text: '<via>Propositions</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Overview', collapsed: true, items: [
            {
              text: '<via>Teorem</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/Overview', collapsed: true, items: [
                {
                  text: '🔻<via>Direction_Relative</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/Overview', collapsed: true, items: [
                    { text: '🔻<via>Dia</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionDia' },
                    { text: '🔻<via>Egress</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionEgress' },
                    { text: '🔻<via>Ekto</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionEkto' },
                    { text: '🔻<via>In</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionIn' },
                    { text: '🔻<via>On</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionOn' },
                    { text: '🔻<via>Over</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionOver' },
                    { text: '🔻<via>Para</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionPara' },
                    { text: '🔻<via>Peri</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionPeri' },
                    { text: '🔻<via>Progress</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionProgress' },
                    { text: '🔻<via>Proximal</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionProximal' },
                    { text: '🔻<via>Regress</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Teorem/DirectionRelative/DirectionRegress' },
                  ]
                },
              ]
            },
            { text: '<via>Problem</via>', link: '/PlantaBeta/Teori/Elements/Via/Proposition/Problem/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
    // #MOTOR
    {
      text: '🟠<motor>MOTOR</motor>', link: '/PlantaBeta/Teori/Elements/Motor/MotorOverview', collapsed: true, items: [
        {
          text: '<motor>MOTON</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Moton/Overview', collapsed: true, items: [
            { text: '<motor>Atributs</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Moton/Atributs/Overview', collapsed: true, items: [] },
            { text: '<motor>Metdods</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Moton/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '<motor>Axioms</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Axiom/Overview', collapsed: true, items: [] },
        {
          text: '<motor>Definitions</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/Overview', collapsed: true, items: [
            { text: '<motor>MotonPlane</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonPlane/Overview', collapsed: true, items: [] },
            {
              text: '<motor>MotonType</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Overview', collapsed: true, items: [
                { text: '🟠<motor>Abduction</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Abduction' },
                { text: '🟠<motor>Absorb</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Absorb' },
                { text: '🟠<motor>Adduction</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Adduction' },
                { text: '🟠<motor>Adjust</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Adjust' },
                { text: '🟠<motor>Allo</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Allo' },
                { text: '🟠<motor>Ama</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Ama' },
                { text: '🟠<motor>Ankor</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Ankor' },
                { text: '🟠<motor>Aspis</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Aspis' },
                { text: '🟠<motor>Ballista</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Ballista' },
                { text: '🟠<motor>Catch</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Catch' },
                { text: '🟠<motor>Clean</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Clean' },
                { text: '🟠<motor>Construct</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Construct' },
                { text: '🟠<motor>Crawl</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Crawl' },
                { text: '🟠<motor>Dig</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Dig' },
                { text: '🟠<motor>Drag</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Drag' },
                { text: '🟠<motor>Drop</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Drop' },
                { text: '🟠<motor>Eval</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Eval' },
                { text: '🟠<motor>Fall</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Fall' },
                { text: '🟠<motor>Flexion</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Flexion' },
                { text: '🟠<motor>Hinge</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Hinge' },
                { text: '🟠<motor>Hook</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Hook' },
                { text: '🟠<motor>Insert</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Insert' },
                { text: '🟠<motor>Klose</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Klose' },
                { text: '🟠<motor>Knot</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Knot' },
                { text: '🟠<motor>Kompakt</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Kompakt' },
                { text: '🟠<motor>Kompress</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Kompress' },
                { text: '🟠<motor>Kontakt</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Kontakt' },
                { text: '🟠<motor>Launch</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Launch' },
                { text: '🟠<motor>Lift</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Lift' },
                { text: '🟠<motor>Load</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Load' },
                { text: '🟠<motor>Machete</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Machete' },
                { text: '🟠<motor>Onda</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Onda' },
                { text: '🟠<motor>Orbit</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Orbit' },
                { text: '🟠<motor>Parry</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Parry' },
                { text: '🟠<motor>Pop</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Pop' },
                { text: '🟠<motor>Preserve</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Preserve' },
                { text: '🟠<motor>Purga</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Purga' },
                { text: '🟠<motor>Reach</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Reach' },
                { text: '🟠<motor>Rip</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Rip' },
                { text: '🟠<motor>Rotation</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Rotation' },
                { text: '🟠<motor>Skreef</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Skreef' },
                { text: '🟠<motor>Slam</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Slam' },
                { text: '🟠<motor>Slot</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Slot' },
                { text: '🟠<motor>Snap</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Snap' },
                { text: '🟠<motor>Stack</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Stack' },
                { text: '🟠<motor>Stall</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Stall' },
                { text: '🟠<motor>Substitute</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Substitute' },
                { text: '🟠<motor>Tangent</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Tangent' },
                { text: '🟠<motor>Transport</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Transport' },
                { text: '🟠<motor>Wrap</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Definition/MotonType/Wrap' },
              ]
            },
          ]
        },
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
      text: '💜<anima>ANIMA</anima>', link: '/PlantaBeta/Teori/Elements/Anima/AnimaOverview', collapsed: true, items: [
        {
          text: '<anima>ANIMON</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Animon/Overview', collapsed: true, items: [
            { text: '<anima>Atributs</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Animon/Atributs/Overview', collapsed: true, items: [] },
            { text: '<anima>Metods</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Animon/Metods/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '<anima>Axioms</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Axiom/Overview', collapsed: true, items: [] },
        {
          text: '<anima>Definitions</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Overview', collapsed: true, items: [
            { text: '💜<anima>Attention</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Attention/Overview' },
            { text: '💜<anima>Awareness</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Awareness/Overview' },
            {
              text: '<anima>Cognition</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Overview', collapsed: true, items: [
                { text: '💜<anima>Affordance</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Affordance/Overview' },
                { text: '💜<anima>Compassion</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Compassion/Overview' },
                { text: '💜<anima>ControlFlow</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/ControlFlow/Overview' },
                { text: '💜<anima>Counting</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Counting/Overview' },
                { text: '💜<anima>Decision</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Decision/Overview' },
                { text: '💜<anima>Estimation</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Estimation/Overview' },
                { text: '💜<anima>Identification</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Identification/Overview' },
                { text: '💜<anima>Judgement</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Judgement/Overview' },
                { text: '💜<anima>Resilience</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Cognition/Resilience/Overview' },
              ]
            },
            { text: '💜<anima>Effort</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Effort/Overview' },
            { text: '💜<anima>Emotion</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Emotion/Overview' },
            { text: '💜<anima>Event</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Event/Overview' },
            { text: '💜<anima>Learning</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Learning/Overview' },
            { text: '💜<anima>Memory</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Memory/Overview' },
            { text: '💜<anima>Mindset</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Mindset/Overview' },
            {
              text: '<anima>MindState</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/MindState/Overview', collapsed: true, items: [
                { text: '💜<anima>Arousal</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/MindState/Arousal/Overview' },
                { text: '💜<anima>Confidence</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/MindState/Confidence/Overview' },
                { text: '💜<anima>Mindfulness</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/MindState/Mindfulness/Overview' },

              ]
            },
            {
              text: '<anima>Senses</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Sense/Overview', collapsed: true, items: [
                { text: '💜<anima>AuditorySense</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Sense/AuditorySense/Overview' },
                { text: '💜<anima>CompressionSense</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Sense/CompressionSense/Overview' },
                { text: '💜<anima>DangerSense</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Sense/DangerSense/Overview' },
                { text: '💜<anima>Proprioception</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Sense/Proprioception/Overview' },
                { text: '💜<anima>SpatialSense</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Sense/SpatialSense/Overview' },
                { text: '💜<anima>TimeSense</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Definition/Sense/TimeSense/Overview' },
              ]
            },





          ]
        },
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
        { text: '(⭐,🔷)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟩)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟩,🔻)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Vion/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟩,🔻,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟩,🔻,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟩,🔻,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟩,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Moton/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟩,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟩,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Ekon-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🔻)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Vion/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🔻,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🔻,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🔻,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Moton/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔷,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Somon-Animon/Overview', collapsed: true, items: [] },
        {
          text: '(⭐,🟩)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Overview', collapsed: true, items: [
            { text: '(<labor>Cream</labor>,<ekos>Soil</ekos>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Cream-Soil' },
            { text: '(<labor>Crop</labor>,<ekos>Flora</ekos>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Crop-Flora/Overview' },
            {
              text: '(<labor>Prep</labor>,<ekos>Ekon</ekos>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Prep-Ekon/Overview', collapsed: true, items: [
                { text: '(<labor>BurnPit</labor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Prep-Ekon/BurnPit' },
                { text: '(<labor>Prep</labor>,<ekos>Mound</ekos>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Prep-Ekon/Prep-Mound' },
                { text: '(<labor>Prep</labor>,<ekos>Skreef</ekos>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Prep-Ekon/Prep-Skreef' },
                { text: '(<labor>Prep</labor>,<ekos>Trench</ekos>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Prep-Ekon/Prep-Trench' },
              ]
            },
            { text: '(<labor>Road</labor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon/Road/Overview' },
          ]
        },
        { text: '(⭐,🟩,🔻)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Vion/Overview', collapsed: true, items: [] },
        { text: '(⭐,🟩,🔻,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '(⭐,🟩,🔻,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🟩,🔻,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🟩,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Moton/Overview', collapsed: true, items: [] },
        { text: '(⭐,🟩,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🟩,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Ekon-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔻)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Vion/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔻,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔻,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(⭐,🔻,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Vion-Animon/Overview', collapsed: true, items: [] },
        {
          text: '(⭐,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Overview', collapsed: true, items: [
            {
              text: '(<labor>Boot</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/Overview', collapsed: true, items: [
                { text: '(<labor>Boot</labor>,<motor>DragKlose</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/Boot-DragKlose/Overview' },
                { text: '(<labor>Boot</labor>,❌<error>Error</error>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/Boot-❌<error>Error</error>/Overview' },
                { text: '(<labor>Boot</labor>,<motor>Mano</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/Boot-Mano/Overview' },
                { text: '(<labor>Boot</labor>,<motor>Off</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/Boot-Off/Overview' },
                { text: '(<labor>Boot</labor>,<motor>On</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/Boot-On/Overview' },
                { text: '(<labor>Boot</labor>,<motor>Preserve</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/Boot-Preserve/Overview' },
                { text: '(<labor>BootArch</labor>,<motor>Klose</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootArch-Klose/Overview' },
                { text: '(<labor>BootArch</labor>,<motor>Kontakt</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootArch-Kontakt/Overview' },
                { text: '(<labor>BootDorsi</labor>,<motor>Kontakt</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootDorsi-Kontakt/Overview' },
                { text: '(<labor>BootHeel</labor>,<motor>DragKlose</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootHeel-DragKlose/Overview' },
                { text: '(<labor>BootHeel</labor>,<motor>KickKlose</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootHeel-KickKlose/Overview' },
                { text: '(<labor>BootLace</labor>,<motor>Adjust</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootLace-Adjust/Overview' },
                { text: '(<labor>BootLace</labor>,<motor>Knot</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootLace-Knot/Overview' },
                { text: '(<labor>BootToe</labor>,<motor>DragKlose</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootToe-DragKlose/Overview' },
                { text: '(<labor>BootToe</labor>,<motor>KickKlose</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Boot-Moton/BootToe-KickKlose/Overview' },
              ]
            },
            {
              text: '(<labor>Bottle</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bottle-Moton/Overview', collapsed: true, items: [
                { text: '(<labor>Bottle</labor>,<motor>Clean</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bottle-Moton/Bottle-Clean/Overview' },
                { text: '(<labor>Bottle</labor>,<motor>Drink</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bottle-Moton/Bottle-Drink/Overview' },
                { text: '(<labor>Bottle</labor>,<motor>Fill</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bottle-Moton/Bottle-Fill/Overview' },
              ]
            },
            {
              text: '(<labor>Box</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Overview', collapsed: true, items: [
                { text: '(<labor>Box</labor>,<motor>Construct</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Construct/Overview' },
                { text: '(<labor>Box</labor>,<motor>Lift</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Lift/Overview' },
                { text: '(<labor>Box</labor>,<motor>Lock</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Lock/Overview' },
                { text: '(<labor>Box</labor>,<motor>Mano</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Mano/Overview' },
                { text: '(<labor>Box</labor>,<motor>Pop</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Pop/Overview' },
                { text: '(<labor>Box</labor>,<motor>Slide</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Slide/Overview' },
                { text: '(<labor>Box</labor>,<motor>Stack</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Stack/Overview' },
                { text: '(<labor>Box</labor>,<motor>Transport</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Transport/Overview' },
                { text: '(<labor>Box</labor>,Error)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-❌<error>Error</error>/Overview' },
                { text: '(<labor>Box</labor>,<motor>Construct</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Box-Moton/Box-Construct/Overview' },
              ]
            },
            {
              text: '(<labor>Bundle</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bundle-Moton/Overview', collapsed: true, items: [
                { text: '(<labor>Bundle</labor>,Error)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bundle-Moton/Bundle-Error/Overview' },
                { text: '(<labor>Bundle</labor>,<motor>Mano</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bundle-Moton/Bundle-Mano/Overview' },
                { text: '(<labor>Bundle</labor>,<motor>Peel</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bundle-Moton/Bundle-Peel/Overview' },
                { text: '(<labor>Bundle</labor>,<motor>Unwrap</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Bundle-Moton/Bundle-Unwrap/Overview' },
              ]
            },
            {
              text: '(<labor>Cache</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Cache-Moton/Overview', collapsed: true, items: [
                { text: '(<labor>Cache</labor>,Error)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Cache-Moton/Cache-Error/Overview' },
              ]
            },
            {
              text: '(<labor>Doru</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Overview', collapsed: true, items: [
                { text: '(<labor>Doru</<motor>labor</motor>>,Amble)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Amble/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Ankor</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Ankor/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Bump</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Bump/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Drag</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Drag/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Error</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Error/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Mano</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Mano/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Onda</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Onda/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Pogo</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Pogo/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Poke</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Poke/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Pont</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Pont/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Pop</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Pop/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Post</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Post/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Prop</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Prop/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Rotate</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Rotate/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Skreef</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Skreef/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Slam</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Slam/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Slap</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Slap/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Slide</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Slide/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Stall</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Stall/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Stomp</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Stomp/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Swap</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Swap/Overview' },
                { text: '(<labor>Doru</labor>,<motor>Transfer</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Doru-Moton/Doru-Transfer/Overview' },
              ]
            },
            {
              text: '(<labor>Glove</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Glove-Moton/Overview', collapsed: true, items: [
                { text: '(<labor>Glove</labor>,Error)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Glove-Moton/Glove-Error/Overview' },
                { text: '(<labor>Glove</labor>,<motor>Mano</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Glove-Moton/Glove-Mano/Overview' },
                { text: '(<labor>Glove</labor>,<motor>Off</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Glove-Moton/Glove-Off/Overview' },
                { text: '(<labor>Glove</labor>,<motor>On</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Glove-Moton/Glove-On/Overview' },
                { text: '(<labor>Glove</labor>,<motor>Preserve</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Glove-Moton/Glove-Preserve/Overview' },
              ]
            },
            {
              text: '(<labor>Karabiner</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Karabiner-Moton/Overview', collapsed: true, items: [
                { text: '(<labor>Karabiner</labor>,<motor>Off</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Karabiner-Moton/Karabiner-Off/Overview' },
                { text: '(<labor>Karabiner</labor>,<motor>On</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Karabiner-Moton/Karabiner-On/Overview' },
              ]
            },
            { text: '(<labor>Kit</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Kit-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Layer</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Layer-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Marka</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Marka-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Microsite</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Microsite-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Neon</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Neon-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Plantafor</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Plantafor-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Radior</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Radior-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Repair</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Repair-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Rope</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Rope-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Spade</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Spade-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Tarp</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Tarp-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Tibior</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Tibior-Moton/Overview', collapsed: true, items: [] },
            { text: '(<labor>Truck</labor>,<motor>MOTON</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton/Truck-Moton/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '(⭐,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Moton-Animon/Overview', collapsed: true, items: [] },
        {
          text: '(⭐,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Animon/Overview', collapsed: true, items: [
            { text: '(<labor>Spade</labor>,<anima>Audio</anima>)', link: '/PlantaBeta/Teori/Beta/Definitions/Labon-Animon/Spade-Audio' },
          ]
        },
        { text: '(🔷,🟩)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon/Overview', collapsed: true, items: [] },
        { text: '(🔷,🟩,🔻)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Vion/Overview', collapsed: true, items: [] },
        { text: '(🔷,🟩,🔻,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '(🔷,🟩,🔻,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(🔷,🟩,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Moton/Overview', collapsed: true, items: [] },
        { text: '(🔷,🟩,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(🔷,🟩,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Ekon-Animon/Overview', collapsed: true, items: [] },
        { text: '(🔷,🔻)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Vion/Overview', collapsed: true, items: [] },
        { text: '(🔷,🔻,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '(🔷,🔻,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(🔷,🔻,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '(🔷,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Moton/Overview', collapsed: true, items: [] },
        { text: '(🔷,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(🔷,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Somon-Animon/Overview', collapsed: true, items: [] },
        {
          text: '(🟩,🔻)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Overview', collapsed: true, items: [
            {
              text: '(<ekos>Ekon</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Overview', collapsed: true, items: [
                {
                  text: '(<ekos>Flora</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Overview', collapsed: true, items: [
                    { text: '(<ekos>Bryophyte</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Bryophyte-Takt' },
                    { text: '(<ekos>BryophyteHidro</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/BryophyteHidro-Takt' },
                    { text: '(<ekos>BurntFlora</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/BurntFlora-Takt' },
                    { text: '(<ekos>Flower</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Flower-Takt' },
                    { text: '(<ekos>Leaf</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Leaf-Takt' },
                    { text: '(<ekos>Periderm</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Periderm-Takt' },
                    { text: '(<ekos>PeridermHidros</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/PeridermHidros-Takt' },
                    { text: '(<ekos>Poales</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Poales-Takt' },
                    { text: '(<ekos>Poales-Hidros</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Poales-Hidros-Takt' },
                    { text: '(<ekos>FloraStem</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/FloraStem-Takt' },
                    { text: '(<ekos>Stump</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Stump-Takt' },
                    { text: '(<ekos>Xilem</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/Xilem-Takt' },
                    { text: '(<ekos>XilemHidros</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Flora-Takt/XilemHidros-Takt' },
                  ]
                },
                { text: '(<ekos>Litos</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Litos-Takt/Overview', collapsed: true, items: [] },
                { text: '(<ekos>Soil</ekos>,<via>Takt</via>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion/Ekon-Takt/Soil-Takt/Overview', collapsed: true, items: [] },
              ]
            },
          ]
        },
        { text: '(🟩,🔻,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '(🟩,🔻,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(🟩,🔻,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
        {
          text: '(🟩,🟠 )', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Overview', collapsed: true, items: [
            {
              text: '(<ekos>Flora</ekos>,<motor>Moton</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Overview', collapsed: true, items: [
                { text: '(<ekos>Flora</ekos>,<motor>Aspis</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Aspis/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Ballista</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Ballista/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Catch</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Catch/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Eval</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Eval/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Flexion</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Flexion/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Knot</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Knot/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Machete</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Machete/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Mano</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Mano/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Parry</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Parry/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Pop</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Pop/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Slot</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Slot/Overview' },
                { text: '(<ekos>Flora</ekos>,<motor>Snap</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/Flora-Snap/Overview' },
                { text: '(<ekos>FloraBranch</ekos>),<motor>Moton</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/FloraBranch-Moton/Overview' },
                { text: '(<ekos>FloraRoot</ekos>,<motor>Moton</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/FloraRoot-Moton/Overview' },
                { text: '(<ekos>FloraTrunk</ekos>,<motor>Moton</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Flora-Moton/FloraTrunk-Moton/Overview' },
              ]
            },
            { text: '(<ekos>Hidros</ekos>,<motor>Moton</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Hidros-Moton/Overview', collapsed: true, items: [] },
            { text: '(<ekos>Litos</ekos>,<motor>Moton</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Litos-Moton/Overview', collapsed: true, items: [] },
            { text: '(<ekos>Soil</ekos>,<motor>Moton</motor>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton/Soil-Moton/Overview', collapsed: true, items: [] },
          ]
        },
        { text: '(🟩,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
        {
          text: '(🟩,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Overview', collapsed: true, items: [
            {
              text: '(<ekos>Ekon</ekos>,<anima>Audio</anima>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Overview', collapsed: true, items: [
                { text: '(<ekos>Branch</ekos>,<anima>Audio</anima>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Branch-Audio' },
                { text: '(<ekos>Log</ekos>,<anima>Audio</anima>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Log-Audio' },
                { text: '(<ekos>Slash</ekos>,<anima>Audio</anima>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Slash-Audio' },
                { text: '(<ekos>Soil</ekos>,<anima>Audio</anima>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Soil-Audio' },
              ]
            },
            { text: '(<ekos>Flora</ekos>,<anima>Emotion</anima>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Flora-Emotion/Overview' },
            { text: '(<ekos>Flora</ekos>,<anima>Identification</anima>)', link: '/PlantaBeta/Teori/Beta/Definitions/Ekon-Animon/Flora-Identification/Overview' },
          ]
        },
        { text: '(🔻,🟠)', link: '/PlantaBeta/Teori/Beta/Definitions/Vion-Moton/Overview', collapsed: true, items: [] },
        { text: '(🔻,🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Vion-Moton-Animon/Overview', collapsed: true, items: [] },
        { text: '(🔻,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Vion-Animon/Overview', collapsed: true, items: [] },
        { text: '(🟠,💜)', link: '/PlantaBeta/Teori/Beta/Definitions/Moton-Animon/Overview', collapsed: true, items: [] },
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
    { text: '<strong>PRAKTIK Overview</strong>', link: '/PlantaBeta/Praktik/Praktik_Overview' },
  ]
}

// Tutorial
function sidebarTutorial() {
  return [
    { text: 'Tutorial Overview', link: '/tutorial/TutorialOverview' },
    { text: 'Lesson Plans', link: '/tutorial/LessonPlans' },
  ]
}

// Examples
function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/examples/ExampleOverview' },
    { text: 'Plantor Questions', link: '/examples/PlantorQuestions' },
    { text: '2k of Beta', link: '/examples/2kBeta' },
  ]
}

