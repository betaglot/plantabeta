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
    ["link", { rel: "apple-touch-icon", href: "/Ikon/PLANTABETA_Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Ikon/PLANTABETA_Logo.png" }]
  ],
  themeConfig: {

    outline: [2, 4],
    logo: '/Ikon/PLANTABETA_Logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/betaglot/plantabeta' }
    ],

    search: {
      provider: 'local'
    },

    siteTitle: '',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/example/': sidebarExamples(),
      '/tutorial/': sidebarTutorial(),
      '/PlantaBeta/Teori/Elements/': sidebarElements(),
      '/PlantaBeta/Teori/Betums/': sidebarBetums(),
      '/PlantaBeta/Praktik/': sidebarPRAKTIK(),
      '/dev/': sidebarDevelopment(),
    }
  }
})

// #Nav
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
      text: 'TEORI',
      link: 'PlantaBeta/Teori/TeoriOverview',
      activeMatch: '/PlantaBeta/Teori/'
    },
    {
      text: 'PRAKTIK',
      link: 'PlantaBeta/Praktik/PraktikOverview',
      activeMatch: '/PlantaBeta/Praktik/'
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
// #Guide
function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Tree Planting?', link: '/guide/What/WhatTreePlanting' },
        { text: 'What is <beta>PLANTABETA</beta>?', link: '/guide/What/WhatPLANTABETA' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: '🔥<ekos>To Support Ecosystems</ekos>', link: '/guide/Why/SupportEcosystem' },
        { text: '🟠<motor>To Reduce Injury</motor>', link: '/guide/Why/Injury' },
        { text: '🔻<via>To Increase Productivity</via>', link: '/guide/Why/Productivity' },
        { text: '<beta>To Improve Communication</beta>', link: '/guide/Why/Communication' },
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
    { text: 'Go to Examples', link: '/example/Overview' },
  ]
}
// #Teori
function sidebarTEORI() {
  return [
    { text: '<strong>TEORI Overview</strong>', link: 'PlantaBeta/Teori/Elements/TeoriOverview' },
    // # BETOMIKS
    {
      text: '<beta>BETOMIKS</beta>', link: 'PlantaBeta/Teori/BETOMIKS/BETOMIKSoverview', collapsed: true, items: []
    },
    { text: '📃 Lexikon', link: 'PlantaBeta/Teori/Elements/glossary/Glossary' },
    { text: '📷 Media Database', link: 'PlantaBeta/Teori/Elements/media/Overview' }
  ]
}
// # SISTEM
function sidebarSistem() {
  return [
    {
      text: '<beta>SISTEM</beta>', link: 'PlantaBeta/Teori/Sistem/SistemOverview', collapsed: true, items: []
    },
  ]
}
// # ELEMENTS
function sidebarElements() {
  return [
    {
      text: '<beta>ELEMENTs</beta>', link: 'PlantaBeta/Teori/Elements/ElementsOverview'
    },
    // #LABOR
    {
      text: '⭐<labor>LABOR</labor>⭐', link: 'PlantaBeta/Teori/Elements/Labor/LaborOverview', collapsed: true, items: []
    },
    // #SOMA
    {
      text: '🔷<soma>SOMA</soma>🔷', link: 'PlantaBeta/Teori/Elements/Soma/SomaOverview', collapsed: true, items: []
    },
    // #EKOS
    {
      text: '🟩<ekos>EKOS</ekos>🟩', collapsed: true, link: 'PlantaBeta/Teori/Elements/Ekos/EkosOverview', items: []
    },
    // #VIA
    {
      text: '🔻<via>VIA</via>🔻', link: 'PlantaBeta/Teori/Elements/Via/ViaOverview', collapsed: true, items: []
    },
    // #MOTOR
    {
      text: '🟠<motor>MOTOR</motor>🟠', link: 'PlantaBeta/Teori/Elements/Motor/MotorOverview', collapsed: true, items: []
    },
    // #ANIMA
    {
      text: '💜<anima>ANIMA</anima>💜', link: 'PlantaBeta/Teori/Elements/Anima/AnimaOverview', collapsed: true, items: []
    },
  ]
}
// # BETUM
function sidebarBetums() {
  return [
    { text: '<beta>BETUMs</beta>', link: 'PlantaBeta/Teori/Betums/BetumsOverview' },
    { text: '⭐_🔷', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🔻', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🔻_🟠', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🔻_🟠_💜', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🔻_💜', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🟠', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_🟠_💜', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟩_💜', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🔻', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🔻_🟠', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🔻_🟠_💜', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🔻_💜', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟠', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_🟠_💜', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🔷_💜', link: 'PlantaBeta/Teori/Betums/SOMON_LABON', collapsed: true, items: [] },
    { text: '⭐_🟩', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🔻', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🔻_🟠', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🔻_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🔻_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🟠', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟩_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🔻', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🔻_🟠', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🔻_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🔻_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟠', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '⭐_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🟩', link: 'PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🔻', link: 'PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🔻_🟠', link: 'PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🔻_🟠_💜', link: 'PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🟠', link: 'PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_🟠_💜', link: 'PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🟩_💜', link: 'PlantaBeta/Teori/Betums/SOMON_EKON', collapsed: true, items: [] },
    { text: '🔷_🔻', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🔻_🟠', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🔻_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🔻_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🟠', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔷_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🔻', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🔻_🟠', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🔻_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🔻_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🟠 ', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟩_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔻_🟠', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔻_🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🔻_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
    { text: '🟠_💜', link: 'PlantaBeta/Teori/Betums/', collapsed: true, items: [] },
  ]
}

// #Praktik
function sidebarPRAKTIK() {
  return [
    { text: '<strong>PRAKTIK Overview</strong>', link: 'PlantaBeta/Praktik/Elements/PRAKTIKoverview' },
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
    { text: 'Go to Reference', link: 'PlantaBeta/Teori/Elements/Overview' },
  ]
}
// #Example
function sidebarExamples() {
  return [
    { text: 'Examples Overview', link: '/example/Overview' },
    { text: 'Go to Tutorial', link: '/tutorial/TutorialOverview' },
  ]
}

