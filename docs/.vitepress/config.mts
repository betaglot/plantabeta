import { defineConfig } from 'vitepress'

export default defineConfig({

  cleanUrls: true,
  lang: 'en-US',
  title: 'PLANTABETA',
  description: '',
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

    search: {
      provider: 'local'
    },

    siteTitle: '',
    nav: nav(),

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
      '/dev/': sidebarDevelopment(),
    }
  }
})


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

function sidebarDevelopment() {
  return [
    { text: 'Dev Overview', link: '/dev/DevOverview' },
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
    { text: 'AfternoonTask', link: '/dev/AfternoonTask' },
  ]
}

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
    { text: '🌈 BETA', link: '/PlantaBeta/Teori/Beta/BetaOverview' },
    { text: 'KOMPOSITION', link: '' },
    { text: 'BETOMIKS', link: '/PlantaBeta/Teori/BETOMIKS/BETOMIKSoverview', },
    { text: 'LEXIKON', link: '/PlantaBeta/Teori/Elements/glossary/Glossary' },
  ]
}


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


function sidebarSistem() {
  return [
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/Elements/TeoriOverview' },
    {
      text: '<beta>SISTEM</beta>', link: '/PlantaBeta/Teori/Sistem/SistemOverview', collapsed: true, items: []
    },
  ]
}

function sidebarElements() {
  return [
    {
      text: '<beta>TEORI</beta>', link: '/PlantaBeta/Teori/TeoriOverview'
    },
    // #LABOR
    {
      text: '⭐<labor>LABOR</labor>⭐', link: '/PlantaBeta/Teori/Elements/Labor/LaborOverview', collapsed: true, items: [
        {
          text: '<labor>Definitions</Labor>', link: '/PlantaBeta/Teori/Elements/Labor/Definition/Overview', collapsed: true, items: [
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
        { text: '<ekos>Atributs</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Atributs/Overview', collapsed: true, items: [] },
        { text: '<ekos>Axioms</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Axiom/Overview', collapsed: true, items: [] },
        { text: '<ekos>Definitions</ekos>', link: '/PlantaBeta/Teori/Elements/Ekos/Definition/Overview', collapsed: true, items: [] },
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
        { text: '<via>Atributs</via>', link: '/PlantaBeta/Teori/Elements/Via/Atributs/Overview', collapsed: true, items: [] },
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
        { text: '<motor>Atributs</motor>', link: '/PlantaBeta/Teori/Elements/Motor/Atributs/Overview', collapsed: true, items: [] },
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
        { text: '<anima>Atributs</anima>', link: '/PlantaBeta/Teori/Elements/Anima/Atributs/Overview', collapsed: true, items: [] },
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

function sidebarBeta() {
  return [
    { text: '<strong>TEORI</strong>', link: '/PlantaBeta/Teori/Elements/TeoriOverview' },
    { text: '<beta>BETA</beta>', link: '/PlantaBeta/Teori/Beta/BetaOverview' },
    { text: '⭐-🔷', link: '/PlantaBeta/Teori/Beta/Labon-Somon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟩', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Ekon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟩-🔻', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Ekon-Vion/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟩-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟩-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Ekon-Vion-Moton-Anima/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟩-🔻-💜', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟩-🟠', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Ekon-Moton/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟩-🟠-💜', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟩-💜', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Ekon/Animon', collapsed: true, items: [] },
    { text: '⭐-🔷-🔻', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Vion/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Vion-Moton/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🔻-💜', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Vion-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟠', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Moton/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-🟠-💜', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔷-💜', link: '/PlantaBeta/Teori/Beta/Labon-Somon-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🟩', link: '/PlantaBeta/Teori/Beta/Labon-Ekon/Overview', collapsed: true, items: [] },
    { text: '⭐-🟩-🔻', link: '/PlantaBeta/Teori/Beta/Labon-Ekon-Vion/Overview', collapsed: true, items: [] },
    { text: '⭐-🟩-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Labon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
    { text: '⭐-🟩-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Labon-Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🟩-🔻-💜', link: '/PlantaBeta/Teori/Beta/Labon-Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🟩-🟠', link: '/PlantaBeta/Teori/Beta/Labon-Ekon-Moton/Overview', collapsed: true, items: [] },
    { text: '⭐-🟩-🟠-💜', link: '/PlantaBeta/Teori/Beta/Labon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🟩-💜', link: '/PlantaBeta/Teori/Beta/Labon-Ekon-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔻', link: '/PlantaBeta/Teori/Beta/Labon-Vion/Overview', collapsed: true, items: [] },
    { text: '⭐-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Labon-Vion-Moton/Overview', collapsed: true, items: [] },
    { text: '⭐-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Labon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🔻-💜', link: '/PlantaBeta/Teori/Beta/Labon-Vion-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-🟠', link: '/PlantaBeta/Teori/Beta/Labon-Moton/Overview', collapsed: true, items: [] },
    { text: '⭐-🟠-💜', link: '/PlantaBeta/Teori/Beta/Labon-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '⭐-💜', link: '/PlantaBeta/Teori/Beta/Labon-Animon/Overview', collapsed: true, items: [] },
    { text: '🔷-🟩', link: '/PlantaBeta/Teori/Beta/Somon-Ekon/Overview', collapsed: true, items: [] },
    { text: '🔷-🟩-🔻', link: '/PlantaBeta/Teori/Beta/Somon-Ekon-Vion/Overview', collapsed: true, items: [] },
    { text: '🔷-🟩-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Somon-Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
    { text: '🔷-🟩-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Somon-Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '🔷-🟩-🟠', link: '/PlantaBeta/Teori/Beta/Somon-Ekon-Moton/Overview', collapsed: true, items: [] },
    { text: '🔷-🟩-🟠-💜', link: '/PlantaBeta/Teori/Beta/Somon-Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '🔷-🟩-💜', link: '/PlantaBeta/Teori/Beta/Somon-Ekon-Animon/Overview', collapsed: true, items: [] },
    { text: '🔷-🔻', link: '/PlantaBeta/Teori/Beta/Somon-Vion/Overview', collapsed: true, items: [] },
    { text: '🔷-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Somon-Vion-Moton/Overview', collapsed: true, items: [] },
    { text: '🔷-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Somon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '🔷-🔻-💜', link: '/PlantaBeta/Teori/Beta/Somon-Vion-Animon/Overview', collapsed: true, items: [] },
    { text: '🔷-🟠', link: '/PlantaBeta/Teori/Beta/Somon-Moton/Overview', collapsed: true, items: [] },
    { text: '🔷-🟠-💜', link: '/PlantaBeta/Teori/Beta/Somon-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '🔷-💜', link: '/PlantaBeta/Teori/Beta/Somon-Animon/Overview', collapsed: true, items: [] },
    { text: '🟩-🔻', link: '/PlantaBeta/Teori/Beta/Ekon-Vion/Overview', collapsed: true, items: [] },
    { text: '🟩-🔻-🟠', link: '/PlantaBeta/Teori/Beta/Ekon-Vion-Moton/Overview', collapsed: true, items: [] },
    { text: '🟩-🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Ekon-Vion-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '🟩-🔻-💜', link: '/PlantaBeta/Teori/Beta/Ekon-Vion-Animon/Overview', collapsed: true, items: [] },
    { text: '🟩-🟠 ', link: '/PlantaBeta/Teori/Beta/Ekon-Moton/Overview', collapsed: true, items: [] },
    { text: '🟩-🟠-💜', link: '/PlantaBeta/Teori/Beta/Ekon-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '🟩-💜', link: '/PlantaBeta/Teori/Beta/Ekon-Animon/Overview', collapsed: true, items: [] },
    { text: '🔻-🟠', link: '/PlantaBeta/Teori/Beta/Vion-Moton/Overview', collapsed: true, items: [] },
    { text: '🔻-🟠-💜', link: '/PlantaBeta/Teori/Beta/Vion-Moton-Animon/Overview', collapsed: true, items: [] },
    { text: '🔻-💜', link: '/PlantaBeta/Teori/Beta/Vion-Animon/Overview', collapsed: true, items: [] },
    { text: '🟠-💜', link: '/PlantaBeta/Teori/Beta/Moton-Animon/Overview', collapsed: true, items: [] },
  ]
}



// PRAKTIK
function sidebarPRAKTIK() {
  return [
    { text: '<strong>PRAKTIK Overview</strong>', link: '/PlantaBeta/Praktik/Elements/PRAKTIKoverview' },
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
    { text: 'Examples Overview', link: '/example/Overview' },
    { text: 'Go to Tutorial', link: '/tutorial/TutorialOverview' },
  ]
}

