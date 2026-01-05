import { defineConfig } from 'vitepress'

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
  title: 'PlantaBeta',
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
      { icon: 'instagram', link: 'https://www.instagram.com/betaglot' },
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
      '/reference/Elements/': sidebarElements(),
      '/reference/Betoms/': sidebarBetoms(),
      '/dev/': sidebarDev(),
    }
  }
})

// Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/What/WhatPlantaBeta',
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
      text: 'ELEMENTs',
      link: '/reference/Elements/ElementsOverview',
      activeMatch: '/reference/Elements/'
    },
    {
      text: '<span class="beta">BETOMs</span>',
      link: '/reference/Betoms/BetomsOverview',
      activeMatch: '/reference/Betoms/'
    },
    // {
    //   text: 'About',
    //   link: '/about/AboutOverview',
    //   activeMatch: '/about/'
    // },
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
        { text: '<span class="beta">BETA Graphics</span>', link: '/dev/Graphics/Beta_Graphic' },
        { text: '<span class="labor">LABOR</span>', link: '/dev/Graphics/Labor_Graphic' },
        { text: '<span class="soma">SOMA</span>', link: '/dev/Graphics/Soma_Graphic' },
        { text: '<span class="ekos">EKOS Graphics</span>', link: '/dev/Graphics/Ekos_Graphic' },
        { text: '<span class="via">VIA Graphics</span>', link: '/dev/Graphics/Via_Graphic' },
        { text: '<span class="motor">MOTOR Graphics</span>', link: '/dev/Graphics/Motor_Graphic' },
        { text: '<span class="anima">ANIMA Graphics</span>', link: '/dev/Graphics/Anima_Graphic' },
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
        { text: 'What is <span class="beta">PlantaBeta</span>?', link: '/guide/What/WhatPlantaBeta' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: 'To Increase Quality', link: '/guide/Why/Quality' },
        { text: 'To Reduce Injury', link: '/guide/Why/Injury' },
        { text: 'To Increase Productivity', link: '/guide/Why/Productivity' },
        { text: 'To Improve Communication', link: '/guide/Why/Communication' },
        { text: 'To Steepen Learning Curve', link: '/guide/Why/LearningCurve' },
      ]
    },
    {
      text: 'Who is <span class="beta">PlantaBeta</span> designed for?', collapsed: false, items: [
        { text: '<span class="labor">Potential Planter</span>', link: '/guide/Who/PotentialPlanter' },
        { text: '<span class="labor">Novice Planter</span>', link: '/guide/Who/NovicePlanter' },
        { text: '<span class="labor">Veteran Planter</span>', link: '/guide/Who/VeteranPlanter' },
        { text: '<span class="labor">Supervisor</span>', link: '/guide/Who/Supervisor' },
        { text: '<span class="labor">Instructor</span>', link: '/guide/Who/Instructor' }
      ]
    },
    { text: 'Go to Examples', link: '/examples/ExampleOverview' },
  ]
}
// About
function sidebarAbout() {
  return [
    { text: 'About', link: '/about/AboutOverview', },
    { text: 'Contact', link: '/about/Contact', },
    { text: 'FAQ', link: '/about/FAQ', },
  ]
}

function sidebarElements() {
  return [
    {
      text: '⭐<span class="labor">LABOR</span>',
      collapsed: true,
      items: [
        {
          text: '⭐<span class="labor">Tasks</span>', link: '/reference/Elements/Labor/Tasks/Overview', collapsed: true, items: [
            { text: '<span class="labor">Piece</span>', link: '/reference/Elements/Labor/Tasks/Piece' },
            {
              text: '<span class="labor">Aktions</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Overview', collapsed: true, items: [
                { text: '<span class="labor">Abduction</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Abduction' },
                { text: '<span class="labor">Absorb</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Absorb' },
                { text: '<span class="labor">Adduction</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Adduction' },
                { text: '<span class="labor">Adjust</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Adjust' },
                { text: '<span class="labor">Allo</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Allo' },
                { text: '<span class="labor">Ama</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Ama' },
                { text: '<span class="labor">Ankor</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Ankor' },
                { text: '<span class="labor">Catch</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Catch' },
                { text: '<span class="labor">Clean</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Clean' },
                { text: '<span class="labor">Crawl</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Crawl' },
                { text: '<span class="labor">Drag</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Drag' },
                { text: '<span class="labor">Drop</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Drop' },
                { text: '<span class="labor">Eval</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Eval' },
                { text: '<span class="labor">Fall</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Fall' },
                { text: '<span class="labor">Flexion</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Flexion' },
                { text: '<span class="labor">Hinge</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Hinge' },
                { text: '<span class="labor">Hook</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Hook' },
                { text: '<span class="labor">Insert</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Insert' },
                { text: '<span class="labor">Knot</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Knot' },
                { text: '<span class="labor">Kontakt</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Kontakt' },
                { text: '<span class="labor">Launch</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Launch' },
                { text: '<span class="labor">Lift</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Lift' },
                { text: '<span class="labor">Lock</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Lock' },
                { text: '<span class="labor">Onda</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Onda' },
                { text: '<span class="labor">Orbit</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Orbit' },
                { text: '<span class="labor">Overview</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Overview' },
                { text: '<span class="labor">Pop</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Pop' },
                { text: '<span class="labor">Preserve</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Preserve' },
                { text: '<span class="labor">Reach</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Reach' },
                { text: '<span class="labor">Rip</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Rip' },
                { text: '<span class="labor">Rotation</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Rotation' },
                { text: '<span class="labor">Slot</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Slot' },
                { text: '<span class="labor">Stack</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Stack' },
                { text: '<span class="labor">Stall</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Stall' },
                { text: '<span class="labor">Tangent</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Tangent' },
                { text: '<span class="labor">Toggle</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Toggle' },
                { text: '<span class="labor">Transport</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Transport' },
                { text: '<span class="labor">Whip</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Whip' },
                { text: '<span class="labor">Wrap</span>', link: '/reference/Elements/Labor/Tasks/Aktions/Wrap' },
              ]
            },

          ]
        },
        {
          text: '⭐<span class="labor">Tools</span>', link: '/reference/Elements/Labor/Tool/Overview', collapsed: true, items: [
            { text: '<span class="labor">Boot</span>', link: '/reference/Elements/Labor/Tool/Boot/Overview' },
            { text: '<span class="labor">Boot</span>', link: '/reference/Elements/Labor/Tool/Boot/Overview' },
            { text: '<span class="labor">Box</span>', link: '/reference/Elements/Labor/Tool/Box/Overview' },
            { text: '<span class="labor">Bundle</span>', link: '/reference/Elements/Labor/Tool/Bundle/Overview' },
            { text: '<span class="labor">Doru</span>', link: '/reference/Elements/Labor/Tool/Doru/Overview' },
            { text: '<span class="labor">Glove</span>', link: '/reference/Elements/Labor/Tool/Glove/Overview' },
            { text: '<span class="labor">Karabiner</span>', link: '/reference/Elements/Labor/Tool/Karabiner/Overview' },
            { text: '<span class="labor">Kit</span>', link: '/reference/Elements/Labor/Tool/Kit/Overview' },
            { text: '<span class="labor">Plantafor</span>', link: '/reference/Elements/Labor/Tool/Plantafor/Overview' },
            { text: '<span class="labor">PlotCord</span>', link: '/reference/Elements/Labor/Tool/PlotCord/Overview' },
            { text: '<span class="labor">Radior</span>', link: '/reference/Elements/Labor/Tool/Radior/Overview' },
            { text: '<span class="labor">Repair</span>', link: '/reference/Elements/Labor/Tool/Repair/Overview' },
            { text: '<span class="labor">Rope</span>', link: '/reference/Elements/Labor/Tool/Rope/Overview' },
            { text: '<span class="labor">Spade</span>', link: '/reference/Elements/Labor/Tool/Spade/Overview' },
            { text: '<span class="labor">Tibior</span>', link: '/reference/Elements/Labor/Tool/Tibior/Overview' },
          ]
        },
        {
          text: '⭐<span class="labor">Performance</span>', link: '', collapsed: true, items: [
            { text: '<span class="labor">Effectiveness</span>', link: '' },
            { text: '<span class="labor">Competition</span>', link: '' },
            { text: '<span class="labor">Difficulty</span>', link: '' },
            { text: '<span class="labor">Execution</span>', link: '' },
            { text: '<span class="labor">Specs</span>', link: '/reference/Elements/Labor/Tasks/Specs' },
          ]
        },
      ]
    },
    {
      text: '🔷<span class="soma">SOMA</span>',
      collapsed: true,
      link: '/reference/Elements/Soma/SomaOverview',
      items: [
        {
          text: '🔷<span class="soma">Anatomy</span>', link: '/reference/Elements/Soma/Anatomy/Overview', collapsed: true, items: [
            {
              text: '<span class="soma">Body</span>', link: '/reference/Elements/Soma/Anatomy/Body/Overview', collapsed: true, items: [
                { text: '<span class="soma">Spine</span>', link: '/reference/Elements/Soma/Anatomy/Body/Spine' },
                { text: '<span class="soma">Ribs</span>', link: '/reference/Elements/Soma/Anatomy/Body/Ribs' },
              ]
            },
            {
              text: '<span class="soma">Head</span>', link: '/reference/Elements/Soma/Anatomy/Head/Overview', collapsed: true, items: [
                { text: '<span class="soma">Cranium</span>', link: '/reference/Elements/Soma/Anatomy/Head/Cranium' },
                { text: '<span class="soma">Ears</span>', link: '/reference/Elements/Soma/Anatomy/Head/Ears' },
                { text: '<span class="soma">Face</span>', link: '/reference/Elements/Soma/Anatomy/Head/Face' },
                { text: '<span class="soma">Neck</span>', link: '/reference/Elements/Soma/Anatomy/Head/Neck' },
              ]
            },
            {
              text: '<span class="soma">Arm</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Overview', collapsed: true, items: [
                { text: '<span class="soma">Scapula</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Scapula' },
                { text: '<span class="soma">Humerus</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Humerus' },
                { text: '<span class="soma">Forearm</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Forearm' },
                { text: '<span class="soma">Hand</span>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand' },
              ]
            },
            {
              text: '<span class="soma">Leg</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Overview', collapsed: true, items: [
                { text: '<span class="soma">Hips</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Hips' },
                { text: '<span class="soma">Femur</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Femur' },
                { text: '<span class="soma">Tibia</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Shin' },
                { text: '<span class="soma">Foot</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Foot' },
              ]
            },
          ]
        },
        {
          text: '🔷<span class="soma">Physiology</span>', link: '/reference/Elements/Soma/Physiology/Overview', collapsed: true, items: [
            { text: '<span class="soma">Endurance</span>', link: '/reference/Elements/Soma/Physiology/Endurance' },
            { text: '<span class="soma">Limberness</span>', link: '/reference/Elements/Soma/Physiology/Limberness' },
            { text: '<span class="soma">Strength</span>', link: '/reference/Elements/Soma/Physiology/Strength' },
            { text: 'Injury Prevention', link: '/reference/Elements/Soma/Physiology/InjuryPrevention' },
          ]
        },
        { text: '🔷<span class="soma">Nutrition</span>', link: '/reference/Elements/Soma/Nutrition/Overview', collapsed: true, items: [] },


      ]
    },
    {
      text: '🟩<span class="ekos">EKOS</span>',
      collapsed: true,
      link: '/reference/Elements/Ekos/EkosOverview',
      items: [
        {
          text: 'Ekosfera', link: '/reference/Elements/Ekos/Ekosfera/Overview', collapsed: true, items: [
            {
              text: '🟩<span class="ekos">Antroposfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Overview', collapsed: true, items: [
                {
                  text: '<span class="ekos">Prep</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Prep/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Mound</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Prep/Mound' },
                    { text: '<span class="ekos">Skreef</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Prep/Skreef' },
                    { text: '<span class="ekos">Trench</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Prep/Trench' },
                  ]
                },
                {
                  text: '<span class="ekos">Slash</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Burn Pile</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/BurnPileSlash' },
                    { text: '<span class="ekos">HighSlash</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/HighSlash' },
                    { text: '<span class="ekos">LowSlash</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/LowSlash' },
                    { text: '<span class="ekos">Stickmat</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/Stickmat' },
                    { text: '<span class="ekos">WetSlash</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Slash/WetSlash' },
                  ]
                },
                { text: 'Cut Bank', link: '' },
                ci
              ]
            },
            {
              text: '🟩<span class="ekos">Atmosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Overview', collapsed: true, items: [

                {
                  text: '<span class="ekos">Particulates</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Ash</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Ash' },
                    { text: '<span class="ekos">Dust</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Dust' },
                    { text: '<span class="ekos">Pollen</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Pollen' },
                    { text: '<span class="ekos">Smoke</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Smoke' },
                    { text: '<span class="ekos">Spores</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Particulates/Spores' },
                  ]
                },
                {
                  text: '<span class="ekos">Precipitation</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Fog</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Fog' },
                    { text: '<span class="ekos">Hail</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Hail' },
                    { text: '<span class="ekos">Rain</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Rain' },
                    { text: '<span class="ekos">Snow</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Precipitation/Snow' },
                  ]
                },
                { text: '<span class="ekos">AirTemperature</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/AirTemperature' },
                { text: '<span class="ekos">Humidity</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Humidity' },
                { text: '<span class="ekos">Lightning</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Lightning' },
                { text: '<span class="ekos">Wind</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Wind' },
              ]
            },
            {
              text: '🟩<span class="ekos">Biosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Overview', collapsed: true, items: [
                {
                  text: '<span class="ekos">Animal</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animals/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Bird</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animals/Bird' },
                    { text: '<span class="ekos">Insect</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animals/Insect' },
                  ]
                },
                { text: 'Dendron', link: '', collapsed: true, items: [] },
                { text: 'Flora', link: '', collapsed: true, items: [] },
                { text: '<span class="ekos">Fungi</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Fungi/Overview', collapsed: true, items: [] },
                {
                  text: '<span class="ekos">Plants</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Plants/Overview', collapsed: true, items: [
                  ]
                },
              ]
            },
            {
              text: '🟩<span class="ekos">Hydrosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟩<span class="ekos">Litosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Litosfera/Overview', collapsed: true, items: [
              ]
            },
            {
              text: '🟩<span class="ekos">Soil</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/Overview', collapsed: true, items: [
                {
                  text: '<span class="ekos">Soil Size</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Clay</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/ClaySoil' },
                    { text: '<span class="ekos">Cobble</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/CobbleSoil' },
                    { text: '<span class="ekos">Pebble</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/PebbleSoil' },
                    { text: '<span class="ekos">Rubble</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/RubbleSoil' },
                    { text: '<span class="ekos">Sand</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/SandSoil' },
                    { text: '<span class="ekos">Silt</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilSize/SiltSoil' },
                  ]
                },
                {
                  text: '<span class="ekos">Soil Fiber</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Fibric</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/FibricSoil' },
                    { text: '<span class="ekos">Humic</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/HumicSoil' },
                    { text: '<span class="ekos">Mesic</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/MesicSoil' },
                    { text: '<span class="ekos">RedRot (Woody)</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/WoodySoil' },

                  ]
                },
              ]
            },
          ]
        },
      ]
    },
    {
      text: '🔻<span class="via">VIA</span>',
      collapsed: true,
      link: '/reference/Elements/Via/ViaOverview',
      items: [

        {
          text: '🔻<span class="via">Geometry</span>', link: '/reference/Elements/Via/Geometry/Overview', collapsed: true, items: [
            { text: '<span class="via">Density</span>', link: '/reference/Elements/Via/Geometry/Density/Overview', collapsed: true, items: [] },
            {
              text: '<span class="via">Direction</span>', link: '/reference/Elements/Via/Geometry/Direction/Overview', collapsed: true, items: [
                { text: '<span class="via">CardinalDirection</span>', link: '/reference/Elements/Via/Geometry/Direction/CardinalDirection' },
                { text: '<span class="via">RelativeDirection</span>', link: '/reference/Elements/Via/Geometry/Direction/RelativeDirection' },
              ]
            },
            { text: '<span class="via">Displacement</span>', link: '/reference/Elements/Via/Geometry/Displacement/Overview', collapsed: true, items: [] },
            { text: '<span class="via">Distance</span>', link: '/reference/Elements/Via/Geometry/Distance/Overview', collapsed: true, items: [] },
            { text: '<span class="via">Div</span>', link: '/reference/Elements/Via/Geometry/Div/Overview', collapsed: true, items: [] },
            { text: '<span class="via">Form</span>', link: '/reference/Elements/Via/Geometry/Form/Overview', collapsed: true, items: [] },

            {
              text: '<span class="via">Line</span>', link: '/reference/Elements/Via/Geometry/Line/Overview', collapsed: true, items: [
                { text: '<span class="via">AroundLine</span>', link: '/reference/Elements/Via/Geometry/Line/AroundLine' },
                { text: '<span class="via">CircuitLine</span>', link: '/reference/Elements/Via/Geometry/Line/CircuitLine' },
                { text: '<span class="via">PerimeterLine</span>', link: '/reference/Elements/Via/Geometry/Line/PerimeterLine' },
                { text: '<span class="via">SpiralLine</span>', link: '/reference/Elements/Via/Geometry/Line/SpiralLine' },
                { text: '<span class="via">StraightLine</span>', link: '/reference/Elements/Via/Geometry/Line/StraightLine' },
                { text: '<span class="via">ZigzagLine</span>', link: '/reference/Elements/Via/Geometry/Line/ZigzagLine' },
                { text: '<span class="via">BoustroLine</span>', link: '/reference/Elements/Via/Geometry/Line/BoustroLine' },
              ]
            },
            { text: '<span class="via">Orientation</span>', link: '/reference/Elements/Via/Geometry/Orientation/Overview', collapsed: true, items: [] },
            {
              text: '<span class="via">Point</span>', link: '/reference/Elements/Via/Geometry/Point/Overview', collapsed: true, items: [
                { text: '<span class="via">CenterPoint</span>', link: '/reference/Elements/Via/Geometry/Point/CenterPoint' },
                { text: '<span class="via">MidPoint</span>', link: '/reference/Elements/Via/Geometry/Point/MidPoint' },
                { text: '<span class="via">ReferencePoint</span>', link: '/reference/Elements/Via/Geometry/Point/ReferencePoint' },
                { text: '<span class="via">ReflectionPoint</span>', link: '/reference/Elements/Via/Geometry/Point/ReflectionPoint' },
                { text: '<span class="via">TargetPoint</span>', link: '/reference/Elements/Via/Geometry/Point/TargetPoint' },
                { text: '<span class="via">VertexPoint</span>', link: '/reference/Elements/Via/Geometry/Point/VertexPoint' },
              ]
            },
            { text: '<span class="via">Shape</span>', link: '/reference/Elements/Via/Geometry/Shape/Overview', collapsed: true, items: [] },

          ]
        },
        {
          text: '🔻<span class="via">Logic</span>', link: '/reference/Elements/Via/Logic/Overview', collapsed: true, items: [
            { text: '<span class="via">Conditional Logic</span>', link: '/reference/Elements/Via/Logic/ConditionalLogic/Overview', },
            { text: '<span class="via">Propositional Logic</span>', link: '/reference/Elements/Via/Logic/PropositionalLogic/Overview', },

          ]
        },
        {
          text: '🔻<span class="via">Probability</span>', link: '/reference/Elements/Via/Probability/Overview', collapsed: true, items: [
            {
              text: '<span class="via">Affordance</span>', link: '/reference/Elements/Via/Probability/Affordance/Overview', collapsed: true, items: [
                { text: '<span class="via">Limit</span>', link: '/reference/Elements/Via/Probability/Affordance/Limit/Overview', collapsed: true, items: [] },
                { text: '<span class="via">Probability</span>', link: '/reference/Elements/Via/Probability/Affordance/Probability/Overview', collapsed: true, items: [] },
                { text: '<span class="via">Site</span>', link: '/reference/Elements/Via/Probability/Affordance/Site/Overview', collapsed: true, items: [] },
              ]
            },
            { text: '<span class="via">Constraint</span>', link: '/reference/Elements/Via/Probability/Constraint/Overview', collapsed: true, items: [] },
            { text: '<span class="via">Flexibility</span>', link: '/reference/Elements/Via/Probability/Flexibility/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
    {
      text: '🟠<span class="motor">MOTOR</span>',
      collapsed: true,
      link: '/reference/Elements/Motor/MotorOverview',
      items: [
        {
          text: '🟠<span class="motor">Dynamics</span>', link: '/reference/Elements/Motor/Dynamics/Overview', collapsed: true, items: [
            {
              text: '<span class="motor">Forces</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Overview', collapsed: true, items: [
                { text: '<span class="motor">CentripetalForce</span>', link: '/reference/Elements/Motor/Dynamics/Forces/CentripetalForce' },
                { text: '<span class="motor">Friction</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Friction' },
                { text: '<span class="motor">Gravity</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Gravity' },
                { text: '<span class="motor">NormalForce</span>', link: '/reference/Elements/Motor/Dynamics/Forces/NormalForce' },
                { text: '<span class="motor">Pressure</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Pressure' },
                { text: '<span class="motor">Tension</span>', link: '/reference/Elements/Motor/Dynamics/Forces/Tension' },
              ]
            },
            {
              text: '<span class="motor">Energy</span>', link: '/reference/Elements/Motor/Dynamics/Energy/Overview', collapsed: true, items: [
                { text: '<span class="motor">Kinetic Energy</span>', link: '/reference/Elements/Motor/Dynamics/Energy/KineticEnergy' },
                { text: '<span class="motor">Potential Energy</span>', link: '/reference/Elements/Motor/Dynamics/Energy/PotentialEnergy' },
                { text: '<span class="motor">Elastic Energy</span>', link: '/reference/Elements/Motor/Dynamics/Energy/ElasticEnergy' },
              ]
            },
            { text: '<span class="motor">Inertia</span>', link: '/reference/Elements/Motor/Dynamics/Inertia' },
            { text: '<span class="motor">Momentum</span>', link: '/reference/Elements/Motor/Dynamics/Momentum' },
            { text: '<span class="motor">Power</span>', link: '/reference/Elements/Motor/Dynamics/Power' },
            { text: '<span class="motor">Work</span>', link: '/reference/Elements/Motor/Dynamics/Work' },
            { text: '<span class="motor">Torque</span>', link: '/reference/Elements/Motor/Dynamics/Torque' },
          ]
        },
        {
          text: '🟠<span class="motor">Kinematics</span>', link: '/reference/Elements/Motor/Kinematics/Overview', collapsed: true, items: [
            { text: '<span class="motor">Speed</span>', link: '/reference/Elements/Motor/Kinematics/Speed' },
            { text: '<span class="motor">Velocity</span>', link: '/reference/Elements/Motor/Kinematics/Velocity' },
            { text: '<span class="motor">Acceleration</span>', link: '/reference/Elements/Motor/Kinematics/Acceleration' },
            { text: '<span class="motor">Jerk</span>', link: '/reference/Elements/Motor/Kinematics/Jerk' },
          ]
        },
        {
          text: '🟠<span class="motor">Time</span>', link: '/reference/Elements/Motor/Time/Overview', collapsed: true, items: [
            { text: '<span class="motor">Rhythm</span>', link: '/reference/Elements/Motor/Time/Rhythm' },
            { text: '<span class="motor">Syncopation</span>', link: '/reference/Elements/Motor/Time/Syncopation' },
            { text: '<span class="motor">Tempo</span>', link: '/reference/Elements/Motor/Time/Tempo' },
          ]
        },

      ]
    },
    {
      text: '💜<span class="anima">ANIMA</span>',
      collapsed: true,
      link: '/reference/Elements/Anima/AnimaOverview',
      items: [
        { text: '💜<span class="anima">Attention</span>', link: '/reference/Elements/Anima/Attention/Overview' },
        {
          text: '💜<span class="anima">Cognitions</span>', link: '/reference/Elements/Anima/Cognitions/Overview', collapsed: true, items: [
            {
              text: '<span class="anima">CognitiveEase</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/Overview', collapsed: true, items: [
                { text: '<span class="anima">Clarity Ease</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/ClarityEase' },
                { text: '<span class="anima">Repetition Ease</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/RepetitionEase' },
                { text: '<span class="anima">Priming Ease</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/PrimingEase' },
                { text: '<span class="anima">Good Ease</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/GoodEase' },
                { text: '<span class="anima">Feels Familiar</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsFamiliar' },
                { text: '<span class="anima">Feels Effortless</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsEffortless' },
                { text: '<span class="anima">Feels Good</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsGood' },
                { text: '<span class="anima">Feels True</span>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsTrue' },

              ]
            },
            { text: '<span class="anima">Decision</span>', link: '/reference/Elements/Anima/Cognitions/Decision/Overview' },
            { text: '<span class="anima">Estimation</span>', link: '/reference/Elements/Anima/Cognitions/Estimation/Overview' },
            { text: '<span class="anima">Identification</span>', link: '/reference/Elements/Anima/Cognitions/Identification/Overview' },
            { text: '<span class="anima">Judgement</span>', link: '/reference/Elements/Anima/Cognitions/Judgement/Overview' },
          ]
        },

        {
          text: '💜<span class="anima">Emotions</span>', link: '/reference/Elements/Anima/Emotions/Overview', collapsed: true, items: [
            { text: '<span class="anima">Anger</span>', link: '/reference/Elements/Anima/Emotions/Anger' },
            { text: '<span class="anima">Disgust</span>', link: '/reference/Elements/Anima/Emotions/Disgust' },
            { text: '<span class="anima">Fear</span>', link: '/reference/Elements/Anima/Emotions/Fear' },
            { text: '<span class="anima">Joy</span>', link: '/reference/Elements/Anima/Emotions/Joy' },
            { text: '<span class="anima">Sadness</span>', link: '/reference/Elements/Anima/Emotions/Sadness' },
          ]
        },
        { text: '💜<span class="anima">Learning</span>', link: '/reference/Elements/Anima/Learning/Overview', collapsed: true, items: [] },
        {
          text: '💜<span class="anima">Memory</span>', link: '/reference/Elements/Anima/Memory/Overview', collapsed: true, items: [
            { text: '<span class="anima">Long Term Memory</span>', link: '/reference/Elements/Anima/Memory/LongTermMemory' },
            { text: '<span class="anima">Short Term Memory</span>', link: '/reference/Elements/Anima/Memory/ShortTermMemory' },
            { text: '<span class="anima">Working Memory</span>', link: '/reference/Elements/Anima/Memory/WorkingMemory' },
          ]
        },
        {
          text: '💜<span class="anima">MindState</span>', link: '/reference/Elements/Anima/MindState/Overview', collapsed: true, items: [
            { text: '<span class="anima">Arousal</span>', link: '/reference/Elements/Anima/MindState/Arousal/Overview' },
            { text: '<span class="anima">Confidence</span>', link: '/reference/Elements/Anima/MindState/Confidence/Overview' },
            { text: '<span class="anima">Mindfulness</span>', link: '/reference/Elements/Anima/MindState/Mindfulness/Overview' },
            { text: '<span class="anima">Flow State</span>', link: '/reference/Elements/Anima/MindState/FlowState' },
          ]
        },
        {
          text: '💜<span class="anima">Senses</span>', link: '/reference/Elements/Anima/Senses/Overview', collapsed: true, items: [
            { text: '<span class="anima">Auditory</span>', link: '/reference/Elements/Anima/Senses/AuditorySense/Overview', collapsed: true, items: [] },
            { text: '<span class="anima">Touch</span>', link: '/reference/Elements/Anima/Senses/TouchSense/Overview', collapsed: true, items: [] },
            { text: '<span class="anima">Compression</span>', link: '/reference/Elements/Anima/Senses/CompressionSense/Overview', collapsed: true, items: [] },
            { text: '<span class="anima">Proprioception</span>', link: '/reference/Elements/Anima/Senses/Proprioception/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
  ]
}

function sidebarBetoms() {
  return [
    { text: '[<span class="via">4Density</span>]', link: '/reference/Betoms/4Density.md' },
    { text: '[<span class="via">5Density</span>]', link: '/reference/Betoms/5Density.md' },
    { text: '[<span class="via">6Density</span>]', link: '/reference/Betoms/6Density.md' },
    { text: '[<span class="via">7Density</span>]', link: '/reference/Betoms/7Density.md' },
    { text: '[<span class="via">8Density</span>]', link: '/reference/Betoms/8Density.md' },
    { text: '[<span class="via">9Density</span>]', link: '/reference/Betoms/9Density.md' },
    { text: '[Abduction|<span class="soma">Base</span>]', link: '/reference/Betoms/Abduction-Base.md' },
    { text: '[Absorb|<span class="soma">Base</span>]', link: '/reference/Betoms/Absorb-Base.md' },
    { text: '[Absorb|Korpo]', link: '/reference/Betoms/Absorb-Korpo.md' },
    { text: '[Adduction|<span class="soma">Base</span>]', link: '/reference/Betoms/Adduction-Base.md' },
    { text: '[Adduction|Mano.Finger]', link: '/reference/Betoms/Adduction-Mano-Finger.md' },
    { text: '[Aktion|Baso]', link: '/reference/Betoms/Aktion-Baso.md' },
    { text: '[Aktion|Flora.Branch]', link: '/reference/Betoms/Aktion-Flora-Branch.md' },
    { text: '[Aktion|Flora.Trunk]', link: '/reference/Betoms/Aktion-Flora-Trunk.md' },
    { text: '[Aktion|Flora.Root]', link: '/reference/Betoms/Aktion-Flora-Root.md' },
    { text: '[<span class="labor">Ama</span>|<span class="soma">Base</span>]', link: '/reference/Betoms/Ama-Base.md' },
    { text: '[<span class="labor">Ama</span>|Brazo|Anterior,Down]', link: '/reference/Betoms/Ama-Brazo-Anterior-Down.md' },
    { text: '[<span class="labor">Ama</span>|Brazo|Anterior,Plast-Down]', link: '/reference/Betoms/Ama-Brazo-Anterior-Plast-Down.md' },
    { text: '[<span class="labor">Ama</span>|Brazo|Anterior,Up]', link: '/reference/Betoms/Ama-Brazo-Anterior-Up.md' },
    { text: '[<span class="labor">Ama</span>|Brazo|Anterior]', link: '/reference/Betoms/Ama-Brazo-Anterior.md' },
    { text: '[<span class="labor">Ama</span>|Spade]', link: '/reference/Betoms/Ama-Spade.md' },
    { text: '[<span class="labor">Amble</span>|Branta,Korpo]', link: '/reference/Betoms/Amble-Branta-Korpo.md' },
    { text: '[<span class="labor">Amble</span>|Brazo]', link: '/reference/Betoms/Amble-Brazo.md' },
    { text: '[<span class="labor">Amble</span>|Korpo|Cross]', link: '/reference/Betoms/Amble-Korpo-Cross.md' },
    { text: '[<span class="labor">Amble</span>|Korpo|Incline]', link: '/reference/Betoms/Amble-Korpo-Incline.md' },
    { text: '[<span class="labor">Amble</span>|Korpo]', link: '/reference/Betoms/Amble-Korpo.md' },
    { text: '[<span class="labor">Aspis</span>|Flora]', link: '/reference/Betoms/Aspis-Flora.md' },
    { text: '[<span class="labor">BackFlap</span>|Site]', link: '/reference/Betoms/BackFlap-Site.md' },
    { text: '[<span class="labor">Bag</span>|Site]', link: '/reference/Betoms/Bag-Site.md' },
    { text: '[<span class="labor">Ballista</span>|Flora]', link: '/reference/Betoms/Ballista-Flora.md' },
    { text: '[<span class="labor">Belt</span>|Site]', link: '/reference/Betoms/Belt-Site.md' },
    { text: '[<span class="labor">Blade</span>|Site]', link: '/reference/Betoms/Blade-Site.md' },
    { text: '[<span class="labor">Block</span>|Density]', link: '/reference/Betoms/Block-Density.md' },
    { text: '[<span class="labor">Boot.Arch</span>.Klose]', link: '/reference/Betoms/Boot-Arch-Klose.md' },
    { text: '[<span class="labor">Boot</span>.Heel,Klose.Drag]', link: '/reference/Betoms/Boot-Heel-Klose-Drag.md' },
    { text: '[<span class="labor">Boot</span>.Heel,Klose.Kick]', link: '/reference/Betoms/Boot-Heel-Klose-Kick.md' },
    { text: '[<span class="labor">Boot</span>.Klose.Drag]', link: '/reference/Betoms/Boot-Klose-Drag.md' },
    { text: '[<span class="labor">Boot</span>.Lace.Adjust]', link: '/reference/Betoms/Boot-Lace-Adjust.md' },
    { text: '[<span class="labor">Boot</span>.Lace.Knot]', link: '/reference/Betoms/Boot-Lace-Knot.md' },
    { text: '[<span class="labor">Boot</span>.Mano]', link: '/reference/Betoms/Boot-Mano.md' },
    { text: '[<span class="labor">Boot</span>.Off]', link: '/reference/Betoms/Boot-Off.md' },
    { text: '[<span class="labor">Boot</span>.On]', link: '/reference/Betoms/Boot-On.md' },
    { text: '[<span class="labor">Boot</span>.Preserve]', link: '/reference/Betoms/Boot-Preserve.md' },
    { text: '[<span class="labor">Boot</span>|Site]', link: '/reference/Betoms/Boot-Site.md' },
    { text: '[<span class="labor">Boot</span>.Toe,Klose.Drag]', link: '/reference/Betoms/Boot-Toe-Klose-Drag.md' },
    { text: '[<span class="labor">Boot</span>.Toe,Klose.Kick]', link: '/reference/Betoms/Boot-Toe-Klose-Kick.md' },
    { text: '[<span class="labor">Bottle</span>.Clean]', link: '/reference/Betoms/Bottle-Clean.md' },
    { text: '[<span class="labor">Bottle</span>.Drink]', link: '/reference/Betoms/Bottle-Drink.md' },
    { text: '[<span class="labor">Bottle</span>.Fill]', link: '/reference/Betoms/Bottle-Fill.md' },
    { text: '[BoulderSoil.Hydro|Site]', link: '/reference/Betoms/BoulderSoil-Hydro-Site.md' },
    { text: '[BoulderSoil|Site]', link: '/reference/Betoms/BoulderSoil-Site.md' },
    { text: '[<span class="labor">Box</span>|Aktion]', link: '/reference/Betoms/Box-Aktion.md' },
    { text: '[<span class="labor">Box</span>|Bottom-Corner-Site]', link: '/reference/Betoms/Box-Bottom-Corner-Site.md' },
    { text: '[<span class="labor">Box</span>|Bottom-Site]', link: '/reference/Betoms/Box-Bottom-Site.md' },
    { text: '[<span class="labor">Box</span>|Construct]', link: '/reference/Betoms/Box-Construct.md' },
    { text: '[<span class="labor">Box</span>|Corner-Site]', link: '/reference/Betoms/Box-Corner-Site.md' },
    { text: '[<span class="labor">Box</span>|Lift]', link: '/reference/Betoms/Box-Lift.md' },
    { text: '[<span class="labor">Box</span>|Lock]', link: '/reference/Betoms/Box-Lock.md' },
    { text: '[<span class="labor">Box</span>|Mano]', link: '/reference/Betoms/Box-Mano.md' },
    { text: '[<span class="labor">Box</span>|Pop]', link: '/reference/Betoms/Box-Pop.md' },
    { text: '[<span class="labor">Box</span>|Side-Corner-Site]', link: '/reference/Betoms/Box-Side-Corner-Site.md' },
    { text: '[<span class="labor">Box</span>|Side-Site]', link: '/reference/Betoms/Box-Side-Site.md' },
    { text: '[<span class="labor">Box</span>|Site]', link: '/reference/Betoms/Box-Site.md' },
    { text: '[<span class="labor">Box</span>|Slide]', link: '/reference/Betoms/Box-Slide.md' },
    { text: '[<span class="labor">Box</span>|Stack]', link: '/reference/Betoms/Box-Stack.md' },
    { text: '[<span class="labor">Box</span>|Transport]', link: '/reference/Betoms/Box-Transport.md' },
    { text: '[Branch-Audio]', link: '/reference/Betoms/Branch-Audio.md' },
    { text: '[Breathing-Korpo]', link: '/reference/Betoms/Breathing-Korpo.md' },
    { text: '[Bryophyte-Hydro-Site]', link: '/reference/Betoms/Bryophyte-Hydro-Site.md' },
    { text: '[Bryophyte-Site]', link: '/reference/Betoms/Bryophyte-Site.md' },
    { text: '[Buckle-Aktion]', link: '/reference/Betoms/Buckle-Aktion.md' },
    { text: '[Buckle-Site]', link: '/reference/Betoms/Buckle-Site.md' },
    { text: '[Bundle-Aktion]', link: '/reference/Betoms/Bundle-Aktion.md' },
    { text: '[Bundle-Bottom-Site]', link: '/reference/Betoms/Bundle-Bottom-Site.md' },
    { text: '[Bundle-Mano]', link: '/reference/Betoms/Bundle-Mano.md' },
    { text: '[Bundle-Peel]', link: '/reference/Betoms/Bundle-Peel.md' },
    { text: '[Bundle-Site]', link: '/reference/Betoms/Bundle-Site.md' },
    { text: '[Bundle-Unwrap]', link: '/reference/Betoms/Bundle-Unwrap.md' },
    { text: '[BundleStart-Site]', link: '/reference/Betoms/BundleStart-Site.md' },
    { text: '[BundleStem-Site]', link: '/reference/Betoms/BundleStem-Site.md' },
    { text: '[BurnPit]', link: '/reference/Betoms/BurnPit.md' },
    { text: '[BurntFlora-Site]', link: '/reference/Betoms/BurntFlora-Site.md' },
    { text: '[Button-Aktion]', link: '/reference/Betoms/Button-Aktion.md' },
    { text: '[Cache-Aktion]', link: '/reference/Betoms/Cache-Aktion.md' },
    { text: '[Catch-Flora]', link: '/reference/Betoms/Catch-Flora.md' },
    { text: '[ClaySoil-Hydro-Site]', link: '/reference/Betoms/ClaySoil-Hydro-Site.md' },
    { text: '[ClaySoil-Site]', link: '/reference/Betoms/ClaySoil-Site.md' },
    { text: '[CobbleSoil-Hydro-Site]', link: '/reference/Betoms/CobbleSoil-Hydro-Site.md' },
    { text: '[CobbleSoil-Site]', link: '/reference/Betoms/CobbleSoil-Site.md' },
    { text: '[Collar-Site]', link: '/reference/Betoms/Collar-Site.md' },
    { text: '[Crawl-Korpo]', link: '/reference/Betoms/Crawl-Korpo.md' },
    { text: '[Cuff-Site]', link: '/reference/Betoms/Cuff-Site.md' },
    { text: '[Dig-<span class="soma">Base</span>]', link: '/reference/Betoms/Dig-Base.md' },
    { text: '[Dig-Mano]', link: '/reference/Betoms/Dig-Mano.md' },
    { text: '[Div-Density]', link: '/reference/Betoms/Div-Density.md' },
    { text: '[Dorsiflexion-<span class="soma">Base</span>]', link: '/reference/Betoms/Dorsiflexion-Base.md' },
    { text: '[<span class="labor">Doru.Amble</span>]', link: '/reference/Betoms/Doru-Amble.md' },
    { text: '[<span class="labor">Doru.Ankor</span>]', link: '/reference/Betoms/Doru-Ankor.md' },
    { text: '[<span class="labor">Doru.Bump</span>]', link: '/reference/Betoms/Doru-Bump.md' },
    { text: '[<span class="labor">Doru.Drag</span>]', link: '/reference/Betoms/Doru-Drag.md' },
    { text: '[<span class="labor">Doru.Mano</span>]', link: '/reference/Betoms/Doru-Mano.md' },
    { text: '[<span class="labor">Doru.Onda</span>]', link: '/reference/Betoms/Doru-Onda.md' },
    { text: '[<span class="labor">Doru.Pogo</span>]', link: '/reference/Betoms/Doru-Pogo.md' },
    { text: '[<span class="labor">Doru.Poke</span>]', link: '/reference/Betoms/Doru-Poke.md' },
    { text: '[<span class="labor">Doru.Pont</span>]', link: '/reference/Betoms/Doru-Pont.md' },
    { text: '[<span class="labor">Doru.Pop</span>]', link: '/reference/Betoms/Doru-Pop.md' },
    { text: '[<span class="labor">Doru.Post</span>]', link: '/reference/Betoms/Doru-Post.md' },
    { text: '[<span class="labor">Doru.Prop</span>]', link: '/reference/Betoms/Doru-Prop.md' },
    { text: '[<span class="labor">Doru.Rotate</span>]', link: '/reference/Betoms/Doru-Rotate.md' },
    { text: '[<span class="labor">Doru.Site</span>]', link: '/reference/Betoms/Doru-Site.md' },
    { text: '[<span class="labor">Doru.Skreef</span>]', link: '/reference/Betoms/Doru-Skreef.md' },
    { text: '[<span class="labor">Doru.Slam</span>]', link: '/reference/Betoms/Doru-Slam.md' },
    { text: '[<span class="labor">Doru.Slap</span>]', link: '/reference/Betoms/Doru-Slap.md' },
    { text: '[<span class="labor">Doru.Slide</span>]', link: '/reference/Betoms/Doru-Slide.md' },
    { text: '[<span class="labor">Doru.Stall</span>]', link: '/reference/Betoms/Doru-Stall.md' },
    { text: '[<span class="labor">Doru.Stomp</span>]', link: '/reference/Betoms/Doru-Stomp.md' },
    { text: '[<span class="labor">Doru.Swap</span>]', link: '/reference/Betoms/Doru-Swap.md' },
    { text: '[<span class="labor">Doru.Transfer</span>]', link: '/reference/Betoms/Doru-Transfer.md' },
    { text: '[Ekon-Audio]', link: '/reference/Betoms/Ekon-Audio.md' },
    { text: '[Emotion-Flora]', link: '/reference/Betoms/Emotion-Flora.md' },
    { text: '[Error-<span class="soma">Base</span>]', link: '/reference/Betoms/Error-Base.md' },
    { text: '[Error-Boot]', link: '/reference/Betoms/Error-Boot.md' },
    { text: '[Error-Box]', link: '/reference/Betoms/Error-Box.md' },
    { text: '[Error-Brazo]', link: '/reference/Betoms/Error-Brazo.md' },
    { text: '[Error-Bundle]', link: '/reference/Betoms/Error-Bundle.md' },
    { text: '[Error-Cache]', link: '/reference/Betoms/Error-Cache.md' },
    { text: '[Error-Doru]', link: '/reference/Betoms/Error-Doru.md' },
    { text: '[Error-Glove]', link: '/reference/Betoms/Error-Glove.md' },
    { text: '[Error-Karabiner]', link: '/reference/Betoms/Error-Karabiner.md' },
    { text: '[Error-Kit]', link: '/reference/Betoms/Error-Kit.md' },
    { text: '[Error-Korpo]', link: '/reference/Betoms/Error-Korpo.md' },
    { text: '[Error-Marka]', link: '/reference/Betoms/Error-Marka.md' },
    { text: '[Error-Microsite]', link: '/reference/Betoms/Error-Microsite.md' },
    { text: '[Error-Plantafor]', link: '/reference/Betoms/Error-Plantafor.md' },
    { text: '[Error-Repair]', link: '/reference/Betoms/Error-Repair.md' },
    { text: '[Error-Rope]', link: '/reference/Betoms/Error-Rope.md' },
    { text: '[Error-Spade]', link: '/reference/Betoms/Error-Spade.md' },
    { text: '[Error-Truck]', link: '/reference/Betoms/Error-Truck.md' },
    { text: '[Eval-Flora]', link: '/reference/Betoms/Eval-Flora.md' },
    { text: '[Eversion-<span class="soma">Base</span>]', link: '/reference/Betoms/Eversion-Base.md' },
    { text: '[ExRotation-<span class="soma">Base</span>]', link: '/reference/Betoms/ExRotation-Base.md' },
    { text: '[ExRotation-Brazo]', link: '/reference/Betoms/ExRotation-Brazo.md' },
    { text: '[Extension-Brazo]', link: '/reference/Betoms/Extension-Brazo.md' },
    { text: '[Extension-Head-Neck]', link: '/reference/Betoms/Extension-Head-Neck.md' },
    { text: '[Fall-Korpo]', link: '/reference/Betoms/Fall-Korpo.md' },
    { text: '[Fastener-Moton]', link: '/reference/Betoms/Fastener-Moton.md' },
    { text: '[FingerKontakt]', link: '/reference/Betoms/FingerKontakt.md' },
    { text: '[Fingertip-Site]', link: '/reference/Betoms/Fingertip-Site.md' },
    { text: '[FingertipKontakt]', link: '/reference/Betoms/FingertipKontakt.md' },
    { text: '[Flexion-<span class="soma">Base</span>]', link: '/reference/Betoms/Flexion-Base.md' },
    { text: '[Flexion-Brazo]', link: '/reference/Betoms/Flexion-Brazo.md' },
    { text: '[Flexion-Flora]', link: '/reference/Betoms/Flexion-Flora.md' },
    { text: '[Flexion-Head-Neck]', link: '/reference/Betoms/Flexion-Head-Neck.md' },
    { text: '[Flexion-Korpo-Spine]', link: '/reference/Betoms/Flexion-Korpo-Spine.md' },
    { text: '[Flexion-Mano-Finger]', link: '/reference/Betoms/Flexion-Mano-Finger.md' },
    { text: '[Flora-Identification]', link: '/reference/Betoms/Flora-Identification.md' },
    { text: '[Flora-Stem-Site]', link: '/reference/Betoms/Flora-Stem-Site.md' },
    { text: '[Flower-Site]', link: '/reference/Betoms/Flower-Site.md' },
    { text: '[Glove-Mano]', link: '/reference/Betoms/Glove-Mano.md' },
    { text: '[Glove-Moton]', link: '/reference/Betoms/Glove-Moton.md' },
    { text: '[Glove-Off]', link: '/reference/Betoms/Glove-Off.md' },
    { text: '[Glove-On]', link: '/reference/Betoms/Glove-On.md' },
    { text: '[Glove-Preserve]', link: '/reference/Betoms/Glove-Preserve.md' },
    { text: '[Glove-Site]', link: '/reference/Betoms/Glove-Site.md' },
    { text: '[Hat-Aktion]', link: '/reference/Betoms/Hat-Aktion.md' },
    { text: '[Hat-Brim-Site]', link: '/reference/Betoms/Hat-Brim-Site.md' },
    { text: '[Head-Away-Rotate]', link: '/reference/Betoms/Head-Away-Rotate.md' },
    { text: '[Hood-Site]', link: '/reference/Betoms/Hood-Site.md' },
    { text: '[Hook-Brazo]', link: '/reference/Betoms/Hook-Brazo.md' },
    { text: '[InRotation-<span class="soma">Base</span>]', link: '/reference/Betoms/InRotation-Base.md' },
    { text: '[InRotation-Brazo]', link: '/reference/Betoms/InRotation-Brazo.md' },
    { text: '[Inversion-<span class="soma">Base</span>]', link: '/reference/Betoms/Inversion-Base.md' },
    { text: '[Jump-Korpo]', link: '/reference/Betoms/Jump-Korpo.md' },
    { text: '[Karabiner-Aktion]', link: '/reference/Betoms/Karabiner-Aktion.md' },
    { text: '[Karabiner-Basket-Site]', link: '/reference/Betoms/Karabiner-Basket-Site.md' },
    { text: '[Karabiner-Gate-Site]', link: '/reference/Betoms/Karabiner-Gate-Site.md' },
    { text: '[Karabiner-Off]', link: '/reference/Betoms/Karabiner-Off.md' },
    { text: '[Karabiner-On]', link: '/reference/Betoms/Karabiner-On.md' },
    { text: '[Karabiner-Site]', link: '/reference/Betoms/Karabiner-Site.md' },
    { text: '[Karabiner-Spine-Site]', link: '/reference/Betoms/Karabiner-Spine-Site.md' },
    { text: '[Kit-Aktion]', link: '/reference/Betoms/Kit-Aktion.md' },
    { text: '[Kit-Handle-Site]', link: '/reference/Betoms/Kit-Handle-Site.md' },
    { text: '[Kit-Off]', link: '/reference/Betoms/Kit-Off.md' },
    { text: '[Kit-On]', link: '/reference/Betoms/Kit-On.md' },
    { text: '[Kit-Preserve]', link: '/reference/Betoms/Kit-Preserve.md' },
    { text: '[Kit-Site]', link: '/reference/Betoms/Kit-Site.md' },
    { text: '[Kit-Strap-Site]', link: '/reference/Betoms/Kit-Strap-Site.md' },
    { text: '[Klose-<span class="soma">Base</span>]', link: '/reference/Betoms/Klose-Base.md' },
    { text: '[Klose-Drag-Mano]', link: '/reference/Betoms/Klose-Drag-Mano.md' },
    { text: '[Klose-Hammer-Mano]', link: '/reference/Betoms/Klose-Hammer-Mano.md' },
    { text: '[Klose-Mano]', link: '/reference/Betoms/Klose-Mano.md' },
    { text: '[Kneel-<span class="soma">Base</span>]', link: '/reference/Betoms/Kneel-Base.md' },
    { text: '[Knot-Flora]', link: '/reference/Betoms/Knot-Flora.md' },
    { text: '[Knuckle-Site]', link: '/reference/Betoms/Knuckle-Site.md' },
    { text: '[Kompakt-Brazo]', link: '/reference/Betoms/Kompakt-Brazo.md' },
    { text: '[Kompakt-Korpo]', link: '/reference/Betoms/Kompakt-Korpo.md' },
    { text: '[Kompakt-Mano]', link: '/reference/Betoms/Kompakt-Mano.md' },
    { text: '[Kompress-Brazo]', link: '/reference/Betoms/Kompress-Brazo.md' },
    { text: '[Kompress-Mano]', link: '/reference/Betoms/Kompress-Mano.md' },
    { text: '[Kontakt-Base-Heel]', link: '/reference/Betoms/Kontakt-Base-Heel.md' },
    { text: '[Kontakt-Base-Knee]', link: '/reference/Betoms/Kontakt-Base-Knee.md' },
    { text: '[Kontakt-Base-Lateral]', link: '/reference/Betoms/Kontakt-Base-Lateral.md' },
    { text: '[Kontakt-Base-Medial]', link: '/reference/Betoms/Kontakt-Base-Medial.md' },
    { text: '[Kontakt-<span class="soma">Base</span>]', link: '/reference/Betoms/Kontakt-Base.md' },
    { text: '[Kontakt-BaseToe]', link: '/reference/Betoms/Kontakt-BaseToe.md' },
    { text: '[Kontakt-BicepsAnterior-Log]', link: '/reference/Betoms/Kontakt-BicepsAnterior-Log.md' },
    { text: '[Kontakt-BootArch]', link: '/reference/Betoms/Kontakt-BootArch.md' },
    { text: '[Kontakt-BootDorsi]', link: '/reference/Betoms/Kontakt-BootDorsi.md' },
    { text: '[Kontakt-BrazoBiceps]', link: '/reference/Betoms/Kontakt-BrazoBiceps.md' },
    { text: '[Kontakt-BrazoDeltoid]', link: '/reference/Betoms/Kontakt-BrazoDeltoid.md' },
    { text: '[Kontakt-BrazoElbow]', link: '/reference/Betoms/Kontakt-BrazoElbow.md' },
    { text: '[Kontakt-BrazoScapula]', link: '/reference/Betoms/Kontakt-BrazoScapula.md' },
    { text: '[Kontakt-BrazoTrapezius]', link: '/reference/Betoms/Kontakt-BrazoTrapezius.md' },
    { text: '[Kontakt-BrazoTriceps]', link: '/reference/Betoms/Kontakt-BrazoTriceps.md' },
    { text: '[Kontakt-Head]', link: '/reference/Betoms/Kontakt-Head.md' },
    { text: '[Kontakt-Korpo-Latissimus]', link: '/reference/Betoms/Kontakt-Korpo-Latissimus.md' },
    { text: '[Kontakt-Korpo]', link: '/reference/Betoms/Kontakt-Korpo.md' },
    { text: '[Kontakt-KorpoAbdominal]', link: '/reference/Betoms/Kontakt-KorpoAbdominal.md' },
    { text: '[Kontakt-Marka]', link: '/reference/Betoms/Kontakt-Marka.md' },
    { text: '[Kontakt-Palm]', link: '/reference/Betoms/Kontakt-Palm.md' },
    { text: '[Kontakt-PlantaforBag]', link: '/reference/Betoms/Kontakt-PlantaforBag.md' },
    { text: '[Kontakt-PlantaforBuckle]', link: '/reference/Betoms/Kontakt-PlantaforBuckle.md' },
    { text: '[Kontakt-PlantaforStrap]', link: '/reference/Betoms/Kontakt-PlantaforStrap.md' },
    { text: '[Kontakt-SpadeBlade]', link: '/reference/Betoms/Kontakt-SpadeBlade.md' },
    { text: '[Kontakt-SpadeCollar]', link: '/reference/Betoms/Kontakt-SpadeCollar.md' },
    { text: '[Kontakt-SpadePlast]', link: '/reference/Betoms/Kontakt-SpadePlast.md' },
    { text: '[Kontakt-SpadeTab]', link: '/reference/Betoms/Kontakt-SpadeTab.md' },
    { text: '[Korpo-Hip-Hinge]', link: '/reference/Betoms/Korpo-Hip-Hinge.md' },
    { text: '[Korpo-Spine-Extension]', link: '/reference/Betoms/Korpo-Spine-Extension.md' },
    { text: '[Krampon-Amble-Korpo]', link: '/reference/Betoms/Krampon-Amble-Korpo.md' },
    { text: '[Layer-Aktion]', link: '/reference/Betoms/Layer-Aktion.md' },
    { text: '[Layer-Allo]', link: '/reference/Betoms/Layer-Allo.md' },
    { text: '[Layer-Base-Aktion]', link: '/reference/Betoms/Layer-Base-Aktion.md' },
    { text: '[Layer-Insulation-Aktion]', link: '/reference/Betoms/Layer-Insulation-Aktion.md' },
    { text: '[Layer-Knot]', link: '/reference/Betoms/Layer-Knot.md' },
    { text: '[Layer-Preserve]', link: '/reference/Betoms/Layer-Preserve.md' },
    { text: '[Layer-Shell-Aktion]', link: '/reference/Betoms/Layer-Shell-Aktion.md' },
    { text: '[Layer-Site]', link: '/reference/Betoms/Layer-Site.md' },
    { text: '[Layering]', link: '/reference/Betoms/Layering.md' },
    { text: '[Leaf-Site]', link: '/reference/Betoms/Leaf-Site.md' },
    { text: '[Lean-Head]', link: '/reference/Betoms/Lean-Head.md' },
    { text: '[Lean-Korpo]', link: '/reference/Betoms/Lean-Korpo.md' },
    { text: '[Listen-Head]', link: '/reference/Betoms/Listen-Head.md' },
    { text: '[Lito-Rough-Hydro-Site]', link: '/reference/Betoms/Lito-Rough-Hydro-Site.md' },
    { text: '[Lito-Rough-Site]', link: '/reference/Betoms/Lito-Rough-Site.md' },
    { text: '[Lito-Smooth-Hydro-Site]', link: '/reference/Betoms/Lito-Smooth-Hydro-Site.md' },
    { text: '[Lito-Smooth-Site]', link: '/reference/Betoms/Lito-Smooth-Site.md' },
    { text: '[Lock-Brazo]', link: '/reference/Betoms/Lock-Brazo.md' },
    { text: '[Lock-Mano]', link: '/reference/Betoms/Lock-Mano.md' },
    { text: '[Log-Audio]', link: '/reference/Betoms/Log-Audio.md' },
    { text: '[Machete-Flora]', link: '/reference/Betoms/Machete-Flora.md' },
    { text: '[Mano-Finger-Extension]', link: '/reference/Betoms/Mano-Finger-Extension.md' },
    { text: '[Mano-Flora]', link: '/reference/Betoms/Mano-Flora.md' },
    { text: '[Mano-Thumb-Adduction]', link: '/reference/Betoms/Mano-Thumb-Adduction.md' },
    { text: '[Mano-Thumb-Extension]', link: '/reference/Betoms/Mano-Thumb-Extension.md' },
    { text: '[ManoThumb-Flexion]', link: '/reference/Betoms/ManoThumb-Flexion.md' },
    { text: '[Marka-Add]', link: '/reference/Betoms/Marka-Add.md' },
    { text: '[Marka-Ballista]', link: '/reference/Betoms/Marka-Ballista.md' },
    { text: '[Marka-Knot]', link: '/reference/Betoms/Marka-Knot.md' },
    { text: '[Marka-Load]', link: '/reference/Betoms/Marka-Load.md' },
    { text: '[Marka-Mano]', link: '/reference/Betoms/Marka-Mano.md' },
    { text: '[Marka-Moton]', link: '/reference/Betoms/Marka-Moton.md' },
    { text: '[Marka-Remove]', link: '/reference/Betoms/Marka-Remove.md' },
    { text: '[Marka-Rip]', link: '/reference/Betoms/Marka-Rip.md' },
    { text: '[Marka-Roll]', link: '/reference/Betoms/Marka-Roll.md' },
    { text: '[Marka-Site]', link: '/reference/Betoms/Marka-Site.md' },
    { text: '[Marka-Slot]', link: '/reference/Betoms/Marka-Slot.md' },
    { text: '[Marka-Wrap]', link: '/reference/Betoms/Marka-Wrap.md' },
    { text: '[MaximumProximity]', link: '/reference/Betoms/MaximumProximity.md' },
    { text: '[Microsite-Aktion]', link: '/reference/Betoms/Microsite-Aktion.md' },
    { text: '[Microsite-Dilate]', link: '/reference/Betoms/Microsite-Dilate.md' },
    { text: '[Microsite-Enter]', link: '/reference/Betoms/Microsite-Enter.md' },
    { text: '[Microsite-Eval]', link: '/reference/Betoms/Microsite-Eval.md' },
    { text: '[Microsite-Klose]', link: '/reference/Betoms/Microsite-Klose.md' },
    { text: '[Microsite-Marka]', link: '/reference/Betoms/Microsite-Marka.md' },
    { text: '[Microsite-Proximity]', link: '/reference/Betoms/Microsite-Proximity.md' },
    { text: '[Microsite-Select]', link: '/reference/Betoms/Microsite-Select.md' },
    { text: '[Microsite-Skreef]', link: '/reference/Betoms/Microsite-Skreef.md' },
    { text: '[MineralSoil-Hydro-Site]', link: '/reference/Betoms/MineralSoil-Hydro-Site.md' },
    { text: '[MineralSoil-Site]', link: '/reference/Betoms/MineralSoil-Site.md' },
    { text: '[Moton-Flora]', link: '/reference/Betoms/Moton-Flora.md' },
    { text: '[Moton-Head]', link: '/reference/Betoms/Moton-Head.md' },
    { text: '[Moton-Korpo]', link: '/reference/Betoms/Moton-Korpo.md' },
    { text: '[Moton-Mano]', link: '/reference/Betoms/Moton-Mano.md' },
    { text: '[Neon-Eval]', link: '/reference/Betoms/Neon-Eval.md' },
    { text: '[Neon-Insert]', link: '/reference/Betoms/Neon-Insert.md' },
    { text: '[Neon-Load]', link: '/reference/Betoms/Neon-Load.md' },
    { text: '[Neon-Mano]', link: '/reference/Betoms/Neon-Mano.md' },
    { text: '[Neon-Moton]', link: '/reference/Betoms/Neon-Moton.md' },
    { text: '[Neon-Site]', link: '/reference/Betoms/Neon-Site.md' },
    { text: '[Onda-<span class="soma">Base</span>]', link: '/reference/Betoms/Onda-Base.md' },
    { text: '[Onda-Brazo]', link: '/reference/Betoms/Onda-Brazo.md' },
    { text: '[Orbit-Brazo]', link: '/reference/Betoms/Orbit-Brazo.md' },
    { text: '[Orbit-Korpo]', link: '/reference/Betoms/Orbit-Korpo.md' },
    { text: '[Orbit-Mano]', link: '/reference/Betoms/Orbit-Mano.md' },
    { text: '[Palm-Klose]', link: '/reference/Betoms/Palm-Klose.md' },
    { text: '[Palm-Site]', link: '/reference/Betoms/Palm-Site.md' },
    { text: '[Parry-Flora]', link: '/reference/Betoms/Parry-Flora.md' },
    { text: '[PebbleSoil-Hydro-Site]', link: '/reference/Betoms/PebbleSoil-Hydro-Site.md' },
    { text: '[PebbleSoil-Site]', link: '/reference/Betoms/PebbleSoil-Site.md' },
    { text: '[Periderm-Hydro-Site]', link: '/reference/Betoms/Periderm-Hydro-Site.md' },
    { text: '[Periderm-Site]', link: '/reference/Betoms/Periderm-Site.md' },
    { text: '[Piece-Density]', link: '/reference/Betoms/Piece-Density.md' },
    { text: '[Plantafor-Adjust]', link: '/reference/Betoms/Plantafor-Adjust.md' },
    { text: '[Plantafor-BackBag-Moton]', link: '/reference/Betoms/Plantafor-BackBag-Moton.md' },
    { text: '[Plantafor-Bag-Aspis]', link: '/reference/Betoms/Plantafor-Bag-Aspis.md' },
    { text: '[Plantafor-Bag-In]', link: '/reference/Betoms/Plantafor-Bag-In.md' },
    { text: '[Plantafor-Bag-Lift]', link: '/reference/Betoms/Plantafor-Bag-Lift.md' },
    { text: '[Plantafor-Bag-Purga]', link: '/reference/Betoms/Plantafor-Bag-Purga.md' },
    { text: '[Plantafor-Drag]', link: '/reference/Betoms/Plantafor-Drag.md' },
    { text: '[Plantafor-Lift]', link: '/reference/Betoms/Plantafor-Lift.md' },
    { text: '[Plantafor-Moton]', link: '/reference/Betoms/Plantafor-Moton.md' },
    { text: '[Plantafor-Off]', link: '/reference/Betoms/Plantafor-Off.md' },
    { text: '[Plantafor-On]', link: '/reference/Betoms/Plantafor-On.md' },
    { text: '[Plantafor-Pop]', link: '/reference/Betoms/Plantafor-Pop.md' },
    { text: '[Plantafor-Preserve]', link: '/reference/Betoms/Plantafor-Preserve.md' },
    { text: '[Plantafor-Site]', link: '/reference/Betoms/Plantafor-Site.md' },
    { text: '[Plantafor-Transport]', link: '/reference/Betoms/Plantafor-Transport.md' },
    { text: '[PlantarFlexion-<span class="soma">Base</span>]', link: '/reference/Betoms/PlantarFlexion-Base.md' },
    { text: '[Plast-Site]', link: '/reference/Betoms/Plast-Site.md' },
    { text: '[Plot-Density]', link: '/reference/Betoms/Plot-Density.md' },
    { text: '[Poales-Hydro-Site]', link: '/reference/Betoms/Poales-Hydro-Site.md' },
    { text: '[Poales-Site]', link: '/reference/Betoms/Poales-Site.md' },
    { text: '[Pocket-Moton]', link: '/reference/Betoms/Pocket-Moton.md' },
    { text: '[Poke-Mano]', link: '/reference/Betoms/Poke-Mano.md' },
    { text: '[Pop-<span class="soma">Base</span>]', link: '/reference/Betoms/Pop-Base.md' },
    { text: '[Pop-Brazo]', link: '/reference/Betoms/Pop-Brazo.md' },
    { text: '[Pop-Flora]', link: '/reference/Betoms/Pop-Flora.md' },
    { text: '[Pop-Korpo]', link: '/reference/Betoms/Pop-Korpo.md' },
    { text: '[Pop-Mano]', link: '/reference/Betoms/Pop-Mano.md' },
    { text: '[Posture-Korpo]', link: '/reference/Betoms/Posture-Korpo.md' },
    { text: '[Prep-Mound]', link: '/reference/Betoms/Prep-Mound.md' },
    { text: '[Prep-Skreef]', link: '/reference/Betoms/Prep-Skreef.md' },
    { text: '[Prep-Trench]', link: '/reference/Betoms/Prep-Trench.md' },
    { text: '[Protraction-Head]', link: '/reference/Betoms/Protraction-Head.md' },
    { text: '[Proximity-Minimum]', link: '/reference/Betoms/Proximity-Minimum.md' },
    { text: '[Proximity-Optimal]', link: '/reference/Betoms/Proximity-Optimal.md' },
    { text: '[Punch-Klose]', link: '/reference/Betoms/Punch-Klose.md' },
    { text: '[Radior-Add]', link: '/reference/Betoms/Radior-Add.md' },
    { text: '[Radior-Moton]', link: '/reference/Betoms/Radior-Moton.md' },
    { text: '[Radior-Off]', link: '/reference/Betoms/Radior-Off.md' },
    { text: '[Radior-Preserve]', link: '/reference/Betoms/Radior-Preserve.md' },
    { text: '[Radior-Site]', link: '/reference/Betoms/Radior-Site.md' },
    { text: '[RainShell-Aktion]', link: '/reference/Betoms/RainShell-Aktion.md' },
    { text: '[Reach-<span class="soma">Base</span>]', link: '/reference/Betoms/Reach-Base.md' },
    { text: '[Reach-Korpo]', link: '/reference/Betoms/Reach-Korpo.md' },
    { text: '[RedRotSoil-Hydro-Site]', link: '/reference/Betoms/RedRotSoil-Hydro-Site.md' },
    { text: '[RedRotSoil-Site]', link: '/reference/Betoms/RedRotSoil-Site.md' },
    { text: '[Repair-Moton]', link: '/reference/Betoms/Repair-Moton.md' },
    { text: '[Repair-Sewing-Aktion]', link: '/reference/Betoms/Repair-Sewing-Aktion.md' },
    { text: '[Repair-Thread-Knot]', link: '/reference/Betoms/Repair-Thread-Knot.md' },
    { text: '[Retraction-Head]', link: '/reference/Betoms/Retraction-Head.md' },
    { text: '[Rim-Site]', link: '/reference/Betoms/Rim-Site.md' },
    { text: '[Road]', link: '/reference/Betoms/Road.md' },
    { text: '[Root-Site]', link: '/reference/Betoms/Root-Site.md' },
    { text: '[Rope-Knot copy]', link: '/reference/Betoms/Rope-Knot copy.md' },
    { text: '[Rope-Knot]', link: '/reference/Betoms/Rope-Knot.md' },
    { text: '[Rotate-Korpo]', link: '/reference/Betoms/Rotate-Korpo.md' },
    { text: '[RunStart]', link: '/reference/Betoms/RunStart.md' },
    { text: '[SandSoil-Hydro-Site]', link: '/reference/Betoms/SandSoil-Hydro-Site.md' },
    { text: '[SandSoil-Site]', link: '/reference/Betoms/SandSoil-Site.md' },
    { text: '[Shaft-Site]', link: '/reference/Betoms/Shaft-Site.md' },
    { text: '[SiltSoil-Hydro-Site]', link: '/reference/Betoms/SiltSoil-Hydro-Site.md' },
    { text: '[SiltSoil-Site]', link: '/reference/Betoms/SiltSoil-Site.md' },
    { text: '[Silvi-Site]', link: '/reference/Betoms/Silvi-Site.md' },
    { text: '[Skreef-<span class="soma">Base</span>]', link: '/reference/Betoms/Skreef-Base.md' },
    { text: '[Skreef-Mano]', link: '/reference/Betoms/Skreef-Mano.md' },
    { text: '[Slap-Klose]', link: '/reference/Betoms/Slap-Klose.md' },
    { text: '[Slash-Audio]', link: '/reference/Betoms/Slash-Audio.md' },
    { text: '[Sleeve-Site]', link: '/reference/Betoms/Sleeve-Site.md' },
    { text: '[Slide-Mano]', link: '/reference/Betoms/Slide-Mano.md' },
    { text: '[Slot-Flora]', link: '/reference/Betoms/Slot-Flora.md' },
    { text: '[Slot-Korpo]', link: '/reference/Betoms/Slot-Korpo.md' },
    { text: '[Snap-Flora-Branch]', link: '/reference/Betoms/Snap-Flora-Branch.md' },
    { text: '[Snap-Flora]', link: '/reference/Betoms/Snap-Flora.md' },
    { text: '[Soil-Audio]', link: '/reference/Betoms/Soil-Audio.md' },
    { text: '[Soil-Cream]', link: '/reference/Betoms/Soil-Cream.md' },
    { text: '[Spade-Amble]', link: '/reference/Betoms/Spade-Amble.md' },
    { text: '[Spade-Ankor]', link: '/reference/Betoms/Spade-Ankor.md' },
    { text: '[Spade-Aspis]', link: '/reference/Betoms/Spade-Aspis.md' },
    { text: '[Spade-Audio]', link: '/reference/Betoms/Spade-Audio.md' },
    { text: '[Spade-Ballista]', link: '/reference/Betoms/Spade-Ballista.md' },
    { text: '[Spade-Drag]', link: '/reference/Betoms/Spade-Drag.md' },
    { text: '[Spade-Hook]', link: '/reference/Betoms/Spade-Hook.md' },
    { text: '[Spade-Klose]', link: '/reference/Betoms/Spade-Klose.md' },
    { text: '[Spade-Machete]', link: '/reference/Betoms/Spade-Machete.md' },
    { text: '[Spade-Mano]', link: '/reference/Betoms/Spade-Mano.md' },
    { text: '[Spade-ManoAllo]', link: '/reference/Betoms/Spade-ManoAllo.md' },
    { text: '[Spade-Moton]', link: '/reference/Betoms/Spade-Moton.md' },
    { text: '[Spade-MuscleUp]', link: '/reference/Betoms/Spade-MuscleUp.md' },
    { text: '[Spade-Neonektomi]', link: '/reference/Betoms/Spade-Neonektomi.md' },
    { text: '[Spade-Onda]', link: '/reference/Betoms/Spade-Onda.md' },
    { text: '[Spade-Open]', link: '/reference/Betoms/Spade-Open.md' },
    { text: '[Spade-Pogo]', link: '/reference/Betoms/Spade-Pogo.md' },
    { text: '[Spade-Poke]', link: '/reference/Betoms/Spade-Poke.md' },
    { text: '[Spade-Pop]', link: '/reference/Betoms/Spade-Pop.md' },
    { text: '[Spade-Post]', link: '/reference/Betoms/Spade-Post.md' },
    { text: '[Spade-Preserve]', link: '/reference/Betoms/Spade-Preserve.md' },
    { text: '[Spade-Purga]', link: '/reference/Betoms/Spade-Purga.md' },
    { text: '[Spade-Rotate]', link: '/reference/Betoms/Spade-Rotate.md' },
    { text: '[Spade-Site]', link: '/reference/Betoms/Spade-Site.md' },
    { text: '[Spade-Skreef]', link: '/reference/Betoms/Spade-Skreef.md' },
    { text: '[Spade-Slap]', link: '/reference/Betoms/Spade-Slap.md' },
    { text: '[Spade-Spike]', link: '/reference/Betoms/Spade-Spike.md' },
    { text: '[Spade-Stall]', link: '/reference/Betoms/Spade-Stall.md' },
    { text: '[Spade-Stomp]', link: '/reference/Betoms/Spade-Stomp.md' },
    { text: '[Spade-Test]', link: '/reference/Betoms/Spade-Test.md' },
    { text: '[Spade-Transport]', link: '/reference/Betoms/Spade-Transport.md' },
    { text: '[SpadeCollar-Mano]', link: '/reference/Betoms/SpadeCollar-Mano.md' },
    { text: '[SpadePlast-Dimano]', link: '/reference/Betoms/SpadePlast-Dimano.md' },
    { text: '[SpadePlast-Mano]', link: '/reference/Betoms/SpadePlast-Mano.md' },
    { text: '[Spike-Korpo]', link: '/reference/Betoms/Spike-Korpo.md' },
    { text: '[Stand-Korpo-Up]', link: '/reference/Betoms/Stand-Korpo-Up.md' },
    { text: '[Stand-Korpo]', link: '/reference/Betoms/Stand-Korpo.md' },
    { text: '[Stem-Site]', link: '/reference/Betoms/Stem-Site.md' },
    { text: '[Step-Into]', link: '/reference/Betoms/Step-Into.md' },
    { text: '[Step-Over]', link: '/reference/Betoms/Step-Over.md' },
    { text: '[Stomp-<span class="soma">Base</span>]', link: '/reference/Betoms/Stomp-Base.md' },
    { text: '[Stump-Site]', link: '/reference/Betoms/Stump-Site.md' },
    { text: '[Suspender-Site]', link: '/reference/Betoms/Suspender-Site.md' },
    { text: '[Tab-Site]', link: '/reference/Betoms/Tab-Site.md' },
    { text: '[Tangent-Korpo]', link: '/reference/Betoms/Tangent-Korpo.md' },
    { text: '[Tarp-Kompakt]', link: '/reference/Betoms/Tarp-Kompakt.md' },
    { text: '[Tarp-Off]', link: '/reference/Betoms/Tarp-Off.md' },
    { text: '[Tarp-On]', link: '/reference/Betoms/Tarp-On.md' },
    { text: '[Tibior-Mano]', link: '/reference/Betoms/Tibior-Mano.md' },
    { text: '[Tibior-Off]', link: '/reference/Betoms/Tibior-Off.md' },
    { text: '[Tibior-On]', link: '/reference/Betoms/Tibior-On.md' },
    { text: '[Tibior-Preservation]', link: '/reference/Betoms/Tibior-Preservation.md' },
    { text: '[Tibior-Site]', link: '/reference/Betoms/Tibior-Site.md' },
    { text: '[Toggle-Brazo]', link: '/reference/Betoms/Toggle-Brazo.md' },
    { text: '[Trot-Korpo]', link: '/reference/Betoms/Trot-Korpo.md' },
    { text: '[Truck-Sit]', link: '/reference/Betoms/Truck-Sit.md' },
    { text: '[Truck-Sleep]', link: '/reference/Betoms/Truck-Sleep.md' },
    { text: '[Twist-Korpo]', link: '/reference/Betoms/Twist-Korpo.md' },
    { text: '[Under-Korpo]', link: '/reference/Betoms/Under-Korpo.md' },
    { text: '[Velcro-Site]', link: '/reference/Betoms/Velcro-Site.md' },
    { text: '[Weave-Flora-Branch]', link: '/reference/Betoms/Weave-Flora-Branch.md' },
    { text: '[WindShell-Moton]', link: '/reference/Betoms/WindShell-Moton.md' },
    { text: '[Zelcro-Aktion]', link: '/reference/Betoms/Zelcro-Aktion.md' },
    { text: '[Zipper-Aktion]', link: '/reference/Betoms/Zipper-Aktion.md' },
    { text: '[Zipper-Site]', link: '/reference/Betoms/Zipper-Site.md' },




  ]
}


// PRAKTIK
function sidebarPRAKTIK() {
  return [
    { text: '<strong>PRAKTIK Overview</strong>', link: '/reference/Praktik/Praktik_Overview' },
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
    { text: 'Planter Questions', link: '/examples/PlanterQuestions' },
    { text: '2k of Beta', link: '/examples/2kBeta' },
  ]
}

