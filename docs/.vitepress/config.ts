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
    ["link", { rel: "apple-touch-icon", href: "/Betaglot-Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Betaglot-Logo.png" }]
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
    logo: '/Betaglot-Logo.png',
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
      '/dev/': sidebarDev(),
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/reference/Elements/': sidebarElements(),
      '/reference/Betoms/': sidebarBetoms(),
    }
  }
})

// Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/WhatPlantaBeta/Overview',
      activeMatch: '/guide/'
    },
    {
      text: 'Examples',
      link: '/examples/ExamplesOverview',
      activeMatch: '/examples/'
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
        { text: 'What is <span class="beta">PlantaBeta</span>?', link: '/guide/WhatPlantaBeta/Overview' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: 'To Increase Quality', link: '/guide/WhyPlantaBeta/Quality' },
        { text: 'To Reduce Injury', link: '/guide/WhyPlantaBeta/Injury' },
        { text: 'To Increase Productivity', link: '/guide/WhyPlantaBeta/Productivity' },
        { text: 'To Improve Communication', link: '/guide/WhyPlantaBeta/Communication' },
        { text: 'To Steepen Learning Curve', link: '/guide/WhyPlantaBeta/LearningCurve' },
      ]
    },
    {
      text: 'Who is <span class="beta">PlantaBeta</span> designed for?', collapsed: false, items: [
        { text: '<span class="labor">Potential Planter</span>', link: '/guide/WhoPlantaBeta/PotentialPlanter' },
        { text: '<span class="labor">Novice Planter</span>', link: '/guide/WhoPlantaBeta/NovicePlanter' },
        { text: '<span class="labor">Veteran Planter</span>', link: '/guide/WhoPlantaBeta/VeteranPlanter' },
        { text: '<span class="labor">Supervisor</span>', link: '/guide/WhoPlantaBeta/Supervisor' },
        { text: '<span class="labor">Instructor</span>', link: '/guide/WhoPlantaBeta/Instructor' }
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
          text: '⭐<span class="labor">Strategy</span>', link: '/reference/Elements/Labor/Strategy/Overview', collapsed: true, items: [
            { text: '<span class="labor">Taktik</span>', link: '/reference/Elements/Labor/Strategy/Taktik/Overview' },
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
            { text: '<span class="labor">Errors</span>', link: '/reference/Elements/Labor/Performance/Errors/Overview' },


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
                { text: '<span class="soma">Tibia</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Tibia' },
                { text: '<span class="soma">Foot</span>', link: '/reference/Elements/Soma/Anatomy/Leg/Foot' },
              ]
            },
          ]
        },
        {
          text: '🔷<span class="soma">Physiology</span>', link: '/reference/Elements/Soma/Physiology/Overview', collapsed: true, items: [
            { text: '<span class="soma">Endurance</span>', link: '/reference/Elements/Soma/Physiology/Endurance' },
            { text: '<span class="soma">Suppleness</span>', link: '/reference/Elements/Soma/Physiology/Suppleness' },
            { text: '<span class="soma">Strength</span>', link: '/reference/Elements/Soma/Physiology/Strength' },
            { text: '<span class="soma">Injury Prevention</span>', link: '/reference/Elements/Soma/Physiology/InjuryPrevention' },
            { text: '<span class="soma">WarmUp</span>', link: '/reference/Elements/Soma/Physiology/WarmUp' },
            { text: '<span class="soma">CoolDown</span>', link: '/reference/Elements/Soma/Physiology/CoolDown' },
            { text: '<span class="soma">Posture</span>', link: '/reference/Elements/Soma/Physiology/Posture' },
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
          text: '🟩<span class="ekos">Ekosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Overview', collapsed: true, items: [
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
                { text: '<span class="ekos">Cut Bank</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/CutBank' },
                { text: '<span class="ekos">Road</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Road' },
                { text: '<span class="ekos">Landing</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/Landing' },
                { text: '<span class="ekos">Skidder Trail</span>', link: '/reference/Elements/Ekos/Ekosfera/Antroposfera/SkidderTrail' },

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
                { text: '<span class="ekos">Sun</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Sun' },
                { text: '<span class="ekos">Wind</span>', link: '/reference/Elements/Ekos/Ekosfera/Atmosfera/Wind' },
              ]
            },
            {
              text: '🟩<span class="ekos">Biosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Overview', collapsed: true, items: [
                {
                  text: '<span class="ekos">Animal</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Ant</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Ant' },
                    { text: '<span class="ekos">Bear</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Bear' },
                    { text: '<span class="ekos">Bird</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Bird' },
                    { text: '<span class="ekos">Cow</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Cow' },
                    { text: '<span class="ekos">Flies</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Bird' },
                    { text: '<span class="ekos">Hornet</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Hornet' },
                    { text: '<span class="ekos">Moose</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Moose' },
                    { text: '<span class="ekos">Mosquito</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Animal/Mosquito' },
                  ]
                },
                {
                  text: '<span class="ekos">Dendron</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Overview', collapsed: true, items: [
                    { text: '<span class="ekos">Larix</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Larix' },
                    { text: '<span class="ekos">Picea</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Picea' },
                    { text: '<span class="ekos">Pinus</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Pinus' },
                    { text: '<span class="ekos">Pseudotsuga</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Pseudotsuga' },
                    { text: '<span class="ekos">Quercus</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Quercus' },
                    { text: '<span class="ekos">Thuja</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Thuja' },
                    { text: '<span class="ekos">Tsuga</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Dendron/Tsuga' },
                  ]
                },
                {
                  text: 'Flora', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/', collapsed: true, items: [
                    { text: '<span class="ekos">Abies</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Abies' },
                    { text: '<span class="ekos">Bryophyta</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Bryophyta' },
                    { text: '<span class="ekos">BurntFlora</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/BurntFlora' },
                    { text: '<span class="ekos">Flower</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Flower' },
                    { text: '<span class="ekos">Log</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Log' },
                    { text: '<span class="ekos">Poales</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Poales' },
                    { text: '<span class="ekos">Stump</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Flora/Stump' },
                  ]
                },
                { text: '<span class="ekos">Fungi</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Fungi/Overview', collapsed: true, items: [] },
                {
                  text: '<span class="ekos">Plants</span>', link: '/reference/Elements/Ekos/Ekosfera/Biosfera/Plants/Overview', collapsed: true, items: [
                  ]
                },
              ]
            },
            {
              text: '🟩<span class="ekos">Hydrosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/Overview', collapsed: true, items: [
                { text: '<span class="ekos">Condensation</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/Condensation' },
                { text: '<span class="ekos">Ground Water</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/GroundWater' },
                { text: '<span class="ekos">Moving Water</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/MovingWater' },
                { text: '<span class="ekos">Stagnant Water</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/StagnantWater' },
                { text: '<span class="ekos">Wetness</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/Wetness' },

              ]
            },
            {
              text: '🟩<span class="ekos">Litosfera</span>', link: '/reference/Elements/Ekos/Ekosfera/Litossfera/Overview', collapsed: true, items: [
                { text: '<span class="ekos">Rock Cap</span>', link: '/reference/Elements/Ekos/Ekosfera/Hydrosfera/RockCap' },
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
                { text: '<span class="ekos">Mineral Soil (Woody)</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/MineralSoil' },
                { text: '<span class="ekos">Wet Soil</span>', link: '/reference/Elements/Ekos/Ekosfera/Pedosfera/SoilFiber/WetSoil' },
              ]
            },
          ]
        },
        {
          text: '🟩<span class="ekos">Klimon</span>', link: '/reference/Elements/Ekos/Klimon/Overview', collapsed: true, items: [
            { text: '<span class="ekos">Texture</span>', link: '/reference/Elements/Ekos/Klimon/Texture/Overview' },
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
                {
                  text: '<span class="via">Site</span>', link: '/reference/Elements/Via/Probability/Affordance/Site/Overview', collapsed: true, items: [
                    { text: '<span class="via">Landing</span>', link: '/reference/Elements/Via/Probability/Affordance/Site/Landing' },
                  ]
                },
                {
                  text: '<span class="via">Passage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/Overview', collapsed: true, items: [
                    { text: '<span class="via">BoustroPassage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/BoustroPassage' },
                    { text: '<span class="via">CircuitPassage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/CircuitPassage' },
                    { text: '<span class="via">CircumventPassage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/CircumventPassage' },
                    { text: '<span class="via">PerimeterPassage</span>', link: '/reference/Elements/Via/Probability/Affordance/Passage/PerimeterPassage' },
                  ]
                },
              ]
            },
            {
              text: '<span class="via">Constraint</span>', link: '/reference/Elements/Via/Probability/Constraint/Overview', collapsed: true, items: [
                { text: '<span class="via">DegreesOfFreedom</span>', link: '/reference/Elements/Via/Probability/Constraint/DegreesOfFreedom' },
                { text: '<span class="via">Hyper</span>', link: '/reference/Elements/Via/Probability/Constraint/Hyper' },
                { text: '<span class="via">Hypo</span>', link: '/reference/Elements/Via/Probability/Constraint/Hypo' },

              ]
            },
            { text: '<span class="via">Fortuna</span>', link: '/reference/Elements/Via/Probability/Fortuna/Overview' },
            { text: '<span class="via">Frequency</span>', link: '/reference/Elements/Via/Probability/Frequency/Overview' },
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
            { text: '<span class="motor">Rhythm</span>', link: '/reference/Elements/Motor/Time/Ritmo' },
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
        {
          text: '💜<span class="anima">Cognitions</span>', link: '/reference/Elements/Anima/Cognitions/Overview', collapsed: true, items: [
            { text: '💜<span class="anima">Attention</span>', link: '/reference/Elements/Anima/Cognitions/Attention/Overview' },
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
            {
              text: '💜<span class="anima">Memory</span>', link: '/reference/Elements/Anima/Cognitions/Memory/Overview', collapsed: true, items: [
                { text: '<span class="anima">Long Term Memory</span>', link: '/reference/Elements/Anima/Cognitions/Memory/LongTermMemory' },
                { text: '<span class="anima">Short Term Memory</span>', link: '/reference/Elements/Anima/Cognitions/Memory/ShortTermMemory' },
                { text: '<span class="anima">Working Memory</span>', link: '/reference/Elements/Anima/Cognitions/Memory/WorkingMemory' },
              ]
            },
            { text: '💜 <span class="anima">Perception</span> ', link: '' },
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
            { text: '<span class="anima">Pressure</span>', link: '/reference/Elements/Anima/Senses/PressureSense/Overview', collapsed: true, items: [] },
            { text: '<span class="anima">Proprioception</span>', link: '/reference/Elements/Anima/Senses/Proprioception/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
  ]
}

function sidebarBetoms() {
  return [
    { text: 'Overview', link: '/reference/Betoms/BetomsOverview' },
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

