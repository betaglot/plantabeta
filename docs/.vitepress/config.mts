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
    ["link", { rel: "apple-touch-icon", href: "/Ikon/PLANTABETA_Ikon.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Ikon/PLANTABETA_Ikon.png" }]
  ],
  themeConfig: {

    outline: [2, 4],
    logo: '/Ikon/PLANTABETA_Ikon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/betaglot/plantabeta' }
    ],

    search: {
      provider: 'local'
    },

    siteTitle: 'PLANTABETA',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/example/': sidebarExamples(),
      '//tutorial/': sidebarTutorial(),
      'PlantaBeta/Teori/': sidebarTEORI(),
      'PlantaBeta/Praktik/': sidebarPRAKTIK(),
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
      link: '/example/Overview',
      activeMatch: '/example/'
    },
    {
      text: 'Tutorial',
      link: 'tutorial/TutorialOverview',
      activeMatch: '/tutorial/'
    },
    {
      text: '🔷TEORI',
      link: 'PlantaBeta/Teori/TeoriOverview',
      activeMatch: '/PlantaBeta/Teori/'
    },
    {
      text: '🔷PRAKTIK',
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
        { text: 'What is Tree Planting?', link: '/GUIDE/What/WhatTreePlanting' },
        { text: 'What is 🔷<beta>PLANTABETA</beta>?', link: '/GUIDE/What/WhatPLANTABETA' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: '🔥<ekos>To Support Ecosystems</ekos>', link: '/GUIDE/Why/SupportEcosystem' },
        { text: '🟠<motor>To Reduce Injury</motor>', link: '/GUIDE/Why/Injury' },
        { text: '🔻<via>To Increase Productivity</via>', link: '/GUIDE/Why/Productivity' },
        { text: '🔷<beta>To Improve Communication</beta>', link: '/GUIDE/Why/Communication' },
        { text: '💜<anima>To Steepen Learning Curve</anima>', link: '/GUIDE/Why/LearningCurve' },
        { text: '💲To Increase Profit', link: '/GUIDE/Why/Company' }
      ]
    },
    {
      text: 'Plantor Guide', collapsed: false, items: [
        { text: 'Potential Plantor', link: '/GUIDE/Who/PotentialPlantor' },
        { text: 'Novice Plantor', link: '/GUIDE/Who/NovicePlantor' },
        { text: 'Experienced Plantor', link: '/GUIDE/Who/ExperiencedPlantor' },
        { text: 'Plantor Supervisor', link: '/GUIDE/Who/PlantorSupervisor' },
        { text: 'Plantor Instructor', link: '/GUIDE/Who/PlantorInstructor' }
      ]
    },
    {
      text: 'Gear Guide', collapsed: false, items: [
        { text: 'What Gear to bring?', link: '/GUIDE/What/WhatGear' },
        { text: 'Gear List', link: '/GUIDE/What/GearList' }
      ]
    },
    { text: 'Go to Examples', link: '/example/Overview' },
  ]
}
// #Teori
function sidebarTEORI() {
  return [
    { text: '<strong>TEORI Overview</strong>', link: 'PlantaBeta/Teori/Elements/TeoriOverview' },
    

    // # SISTEM
    {
      text: '🔷<beta>SISTEM</beta>', link: 'PlantaBeta/Teori/Sistem/SistemOverview', collapsed: true, items: []
    },
    // # ELEMENTS
    {
      text: '🔷 <beta>ELEMENTS</beta>', link: 'PlantaBeta/Teori/Elements/ElementsOverview', collapsed: true, items: [
        // #SOMA
        {
          text: '💜<soma>SOMA</soma>', link: 'PlantaBeta/Teori/Elements/Soma/SomaOverview', collapsed: true, items: []
        },
        // #LABOR
        {
          text: '⭐<labor>LABOR</labor>', link: 'PlantaBeta/Teori/Elements/Labor/LaborOverview', collapsed: true, items: []
        },
        // #EKOS
        {
          text: '🟩 <ekos>EKOS</ekos>', collapsed: true, link: 'PlantaBeta/Teori/Elements/Ekos/EkosOverview', items: []
        },
        // #VIA
        {
          text: '🔻 <via>VIA</via>', link: 'PlantaBeta/Teori/Elements/Via/ViaOverview', collapsed: true, items: []
        },
        // #MOTOR
        {
          text: '🟠 <motor>MOTOR</motor>', link: 'PlantaBeta/Teori/Elements/Motor/MotorOverview', collapsed: true, items: []
        },
        // #ANIMA
        {
          text: '💭 <anima>ANIMA</anima>', link: 'PlantaBeta/Teori/Elements/Anima/AnimaOverview', collapsed: true, items: []
        },
      ]
    },
    // # COMPOUNDS
    {
      text: '🔷_🔷 <beta>COMPOUNDS</beta>', link: 'PlantaBeta/Teori/COMPOUNDS/COMPOUNDSoverview', collapsed: true, items: [
        { text: '💜_⭐', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🔻', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🔻_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🔻_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🔻_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟩_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🔻', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🔻_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🔻_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🔻_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_⭐_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_LABON', collapsed: true, items: [] },
        { text: '💜_🟩', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🔻', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🔻_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🔻_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🟩_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/SOMON_EKON', collapsed: true, items: [] },
        { text: '💜_🔻', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🔻_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🔻_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🔻_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '💜_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🔻', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🔻_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🔻_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🔻_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟩_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🔻', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🔻_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🔻_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🔻_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '⭐_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🔻', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🔻_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🔻_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🔻_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🟠 ', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟩_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🔻_🟠', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🔻_🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🔻_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
        { text: '🟠_🕸', link: 'PlantaBeta/Teori/COMPOUNDS/', collapsed: true, items: [] },
      ]
    },
    // # BETOMIKS
    {
      text: '🔷<beta>BETOMIKS</beta>', link: 'PlantaBeta/Teori/BETOMIKS/BETOMIKSoverview', collapsed: true, items: []
    },

    { text: '📃 Lexikon', link: 'PlantaBeta/Teori/Elements/glossary/Glossary' },
    { text: '📷 Media Database', link: 'PlantaBeta/Teori/Elements/media/Overview' }
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

