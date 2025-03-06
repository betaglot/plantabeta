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
      {icon: 'youtube', link: 'https://www.youtube.com/@BETAGLOT'},
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
      '/PlantaBeta/Teori/Betums/': sidebarBetums(),
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
      text: '| TEORI |',
      link: '/PlantaBeta/Teori/TeoriOverview',
      activeMatch: '/PlantaBeta/Teori/'
    },
    {
      text: '| PRAKTIK |',
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

function sidebarAbout() {
  return [
    {
      text: 'About', link: '/about/AboutOverview', collapsed: false, items: [
      ]
    },
  ]
}

function sidebarBetomiks() {
  return [
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

function sidebarTEORI() {
  return [
    { text: '<strong>TEORI Overview</strong>', link: '/PlantaBeta/Teori/Elements/TeoriOverview' },
    // # BETOMIKS
    {
      text: '<beta>BETOMIKS</beta>', link: '/PlantaBeta/Teori/BETOMIKS/BETOMIKSoverview', collapsed: true, items: []
    },
    { text: '📃 Lexikon', link: '/PlantaBeta/Teori/Elements/glossary/Glossary' },
    { text: '📷 Media Database', link: '/PlantaBeta/Teori/Elements/media/Overview' }
  ]
}

function sidebarSistem() {
  return [
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
      text: '⭐<labor>LABOR</labor>⭐', link: '/PlantaBeta/Teori/Elements/Labor/LaborOverview', collapsed: true, items: []
    },
    // #SOMA
    {
      text: '🔷<soma>SOMA</soma>🔷', link: '/PlantaBeta/Teori/Elements/Soma/SomaOverview', collapsed: true, items: [
        { text: '🔷<soma>Korpos</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Korpos' },
        { text: '🔷<soma>Head</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Head' },
        { text: '🔷<soma>Brazo</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Brazo' },
        { text: '🔷<soma>Mano</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Mano' },
        { text: '🔷<soma>Base</soma>', link: '/PlantaBeta/Teori/Elements/Soma/Definition/Base' },
      ]
    },
    // #EKOS
    {
      text: '🟩<ekos>EKOS</ekos>🟩', collapsed: true, link: '/PlantaBeta/Teori/Elements/Ekos/EkosOverview', items: []
    },
    // #VIA
    {
      text: '🔻<via>VIA</via>🔻', link: '/PlantaBeta/Teori/Elements/Via/ViaOverview', collapsed: true, items: []
    },
    // #MOTOR
    {
      text: '🟠<motor>MOTOR</motor>🟠', link: '/PlantaBeta/Teori/Elements/Motor/MotorOverview', collapsed: true, items: []
    },
    // #ANIMA
    {
      text: '💜<anima>ANIMA</anima>💜', link: '/PlantaBeta/Teori/Elements/Anima/AnimaOverview', collapsed: true, items: []
    },
  ]
}

function sidebarBetums() {
  return [
    { text: '<beta>BETUMs</beta>', link: '/PlantaBeta/Teori/Betums/BetumsOverview' },
    { text: '⭐_🔷', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🔻', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🔻_🟠', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🔻_🟠_💜', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🔻_💜', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🟠', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🟠_💜', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_💜', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🔻', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🔻_🟠', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🔻_🟠_💜', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🔻_💜', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟠', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟠_💜', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_💜', link: '/PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🟩', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🔻', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🔻_🟠', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🔻_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🔻_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🟠', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🔻', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🔻_🟠', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🔻_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🔻_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟠', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🟩', link: '/PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🔻', link: '/PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🔻_🟠', link: '/PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🔻_🟠_💜', link: '/PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🟠', link: '/PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🟠_💜', link: '/PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_💜', link: '/PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🔻', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🔻_🟠', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🔻_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🔻_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🟠', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🔻', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🔻_🟠', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🔻_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🔻_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🟠 ', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔻_🟠', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔻_🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔻_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟠_💜', link: '/PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
  ]
}

function sidebarPRAKTIK() {
  return [
    { text: '<strong>PRAKTIK Overview</strong>', link: '/PlantaBeta/Praktik/Elements/PRAKTIKoverview' },
  ]
}

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

function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/example/Overview' },
    { text: 'Go to Tutorial', link: '/tutorial/TutorialOverview' },
  ]
}

