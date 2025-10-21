import { defineConfig } from 'vitepress'
import { cs, el } from 'vuetify/locale'

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
      text: '<beta>ELEMENTs</beta>',
      link: '/reference/Elements/ElementsOverview',
      activeMatch: '/reference/Elements/'
    },
        {
      text: '<beta>BETUMs</beta>',
      link: '/reference/Betums/BetumsOverview',
      activeMatch: '/reference/Betums/'
    },
    // {
    //   text: 'About',
    //   link: '/about/AboutOverview',
    //   activeMatch: '/about/'
    // },
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
    { text: 'About', link: '/about/AboutOverview', },
    { text: 'Contact', link: '/about/Contact', },
    { text: 'FAQ', link: '/about/FAQ', },
  ]
}

function sidebarElements() {
  return [
    {
      text: '⭐<labor>LABOR</labor>',
      collapsed: true,
      items: [
        {
          text: '⭐<labor>Tasks</labor>', link: '/reference/Elements/Labor/Task', collapsed: true, items: [
            { text: '<labor>Route</labor>', link: '/reference/Elements/Labor/Route' },
            { text: '<labor>Competition</labor>', link: '/reference/Elements/Labor/Competition' },
          ]
        },
        {
          text: '⭐<labor>Aktions</labor>', link: '/reference/Elements/Labor/Aktions/Overview', collapsed: true, items: [
            { text: '<labor>Abduction</labor>', link: '/reference/Labor/Aktions/Abduction' },
            { text: '<labor>Absorb</labor>', link: '/reference/Labor/Aktions/Absorb' },
            { text: '<labor>Adduction</labor>', link: '/reference/Labor/Aktions/Adduction' },
            { text: '<labor>Adjust</labor>', link: '/reference/Labor/Aktions/Adjust' },
            { text: '<labor>Allo</labor>', link: '/reference/Labor/Aktions/Allo' },
            { text: '<labor>Ama</labor>', link: '/reference/Labor/Aktions/Ama' },
            { text: '<labor>Ankor</labor>', link: '/reference/Labor/Aktions/Ankor' },
            { text: '<labor>Catch</labor>', link: '/reference/Labor/Aktions/Catch' },
            { text: '<labor>Clean</labor>', link: '/reference/Labor/Aktions/Clean' },
            { text: '<labor>Crawl</labor>', link: '/reference/Labor/Aktions/Crawl' },
            { text: '<labor>Drag</labor>', link: '/reference/Labor/Aktions/Drag' },
            { text: '<labor>Drop</labor>', link: '/reference/Labor/Aktions/Drop' },
            { text: '<labor>Eval</labor>', link: '/reference/Labor/Aktions/Eval' },
            { text: '<labor>Fall</labor>', link: '/reference/Labor/Aktions/Fall' },
            { text: '<labor>Flexion</labor>', link: '/reference/Labor/Aktions/Flexion' },
            { text: '<labor>Hinge</labor>', link: '/reference/Labor/Aktions/Hinge' },
            { text: '<labor>Hook</labor>', link: '/reference/Labor/Aktions/Hook' },
            { text: '<labor>Insert</labor>', link: '/reference/Labor/Aktions/Insert' },
            { text: '<labor>Knot</labor>', link: '/reference/Labor/Aktions/Knot' },
            { text: '<labor>Kontakt</labor>', link: '/reference/Labor/Aktions/Kontakt' },
            { text: '<labor>Launch</labor>', link: '/reference/Labor/Aktions/Launch' },
            { text: '<labor>Lift</labor>', link: '/reference/Labor/Aktions/Lift' },
            { text: '<labor>Lock</labor>', link: '/reference/Labor/Aktions/Lock' },
            { text: '<labor>Onda</labor>', link: '/reference/Labor/Aktions/Onda' },
            { text: '<labor>Orbit</labor>', link: '/reference/Labor/Aktions/Orbit' },
            { text: '<labor>Overview</labor>', link: '/reference/Labor/Aktions/Overview' },
            { text: '<labor>Pop</labor>', link: '/reference/Labor/Aktions/Pop' },
            { text: '<labor>Preserve</labor>', link: '/reference/Labor/Aktions/Preserve' },
            { text: '<labor>Reach</labor>', link: '/reference/Labor/Aktions/Reach' },
            { text: '<labor>Rip</labor>', link: '/reference/Labor/Aktions/Rip' },
            { text: '<labor>Rotation</labor>', link: '/reference/Labor/Aktions/Rotation' },
            { text: '<labor>Slot</labor>', link: '/reference/Labor/Aktions/Slot' },
            { text: '<labor>Stack</labor>', link: '/reference/Labor/Aktions/Stack' },
            { text: '<labor>Stall</labor>', link: '/reference/Labor/Aktions/Stall' },
            { text: '<labor>Tangent</labor>', link: '/reference/Labor/Aktions/Tangent' },
            { text: '<labor>Toggle</labor>', link: '/reference/Labor/Aktions/Toggle' },
            { text: '<labor>Transport</labor>', link: '/reference/Labor/Aktions/Transport' },
            { text: '<labor>Whip</labor>', link: '/reference/Labor/Aktions/Whip' },
            { text: '<labor>Wrap</labor>', link: '/reference/Labor/Aktions/Wrap' },
          ]
        },

        {
          text: '⭐<labor>Tools</labor>', link: '/reference/Elements/Labor/Tool/Overview', collapsed: true, items: [
            { text: '<labor>Rope</labor>', link: '/reference/Elements/Labor/Tool/Rope', },
            { text: '<labor>Carabiner</labor>', link: '/reference/Elements/Labor/Tool/Carabiner', },
            { text: '<labor>Harness</labor>', link: '/reference/Elements/Labor/Tool/Harness', },
            { text: '<labor>Shoes</labor>', link: '/reference/Elements/Labor/Tool/Shoes', },
            { text: '<labor>Clothing</labor>', link: '/reference/Elements/Labor/Tool/Clothing', },
            { text: '<labor>Helmet</labor>', link: '/reference/Elements/Labor/Tool/Helmet', },
            { text: '<labor>Cam</labor>', link: '/reference/Elements/Labor/Tool/Cam', },
            { text: '<labor>Anchor</labor>', link: '/reference/Elements/Labor/Tool/Anchor', },
            { text: '<labor>Sling</labor>', link: '/reference/Elements/Labor/Tool/Sling', },
          ]
        },
        {
          text: '👐<labor>Spotter</labor><beta>BETA</beta>', link: '/reference/Elements/Labor/SpotterBeta/Overview', collapsed: true, items: [
            { text: '<labor>Spotter.Aktions</labor>', link: '/reference/Elements/Labor/SpotterBeta/SpotterAktions/Overview' },
            { text: '<labor>Spotter.Tasks</labor>', link: '/reference/Elements/Labor/SpotterBeta/SpotterTasks/Overview' },
          ]
        },
        {
          text: '👷‍♀️<labor>Setter</labor><beta>BETA</beta> ', link: '/reference/Elements/Labor/SetterBeta/Overview', collapsed: true, items: [
            {
              text: '<labor>Setter.Tools</labor>', link: '/reference/Elements/Labor/SetterBeta/SetterTools/Overview', collapsed: true, items: [
                { text: '<labor>Driver</labor>', link: '/reference/Elements/Labor/SetterBeta/SetterTools/' },
                { text: '<labor>Ladder</labor>', link: '/reference/Elements/Labor/SetterBeta/SetterTools/' },
                { text: '<labor>Wrench</labor>', link: '/reference/Elements/Labor/SetterBeta/SetterTools/' },
                { text: '<labor>Bolt</labor>', link: '/reference/Elements/Labor/SetterBeta/SetterTools/' },
                { text: '<labor>Screw</labor>', link: '/reference/Elements/Labor/SetterBeta/SetterTools/' },
                { text: '<labor>ThreadTap</labor>', link: '/reference/Elements/Labor/SetterBeta/SetterTools/' },

              ]
            },
            { text: '<labor>Setter.Aktions</labor>', link: '/reference/Elements/Labor/SetterBeta/SetterAktions/Overview', collapsed: true, items: [] },
            { text: '<labor>Setter.Tasks</labor>', link: '', collapsed: true, items: [] },
          ]
        },

      ]
    },
    {
      text: '🔷<soma>SOMA</soma>',
      collapsed: true,
      link: '/reference/Elements/Soma/SomaOverview',
      items: [
        {
          text: '🔷<soma>Anatomy</soma>', link: '/reference/Elements/Soma/Anatomy/Overview', collapsed: true, items: [
            {
              text: '<soma>Body</soma>', link: '/reference/Elements/Soma/Anatomy/Body/Overview', collapsed: true, items: [
                { text: '<soma>Spine</soma>', link: '/reference/Elements/Soma/Anatomy/Body/Spine' },
                { text: '<soma>Ribs</soma>', link: '/reference/Elements/Soma/Anatomy/Body/Ribs' },
              ]
            },
            {
              text: '<soma>Head</soma>', link: '/reference/Elements/Soma/Anatomy/Head/Overview', collapsed: true, items: [
                { text: '<soma>Cranium</soma>', link: '/reference/Elements/Soma/Anatomy/Head/Cranium' },
                { text: '<soma>Ears</soma>', link: '/reference/Elements/Soma/Anatomy/Head/Ears' },
                { text: '<soma>Face</soma>', link: '/reference/Elements/Soma/Anatomy/Head/Face' },
                { text: '<soma>Neck</soma>', link: '/reference/Elements/Soma/Anatomy/Head/Neck' },
              ]
            },
            {
              text: '<soma>Arm</soma>', link: '/reference/Elements/Soma/Anatomy/Arm/Overview', collapsed: true, items: [
                { text: '<soma>Scapula</soma>', link: '/reference/Elements/Soma/Anatomy/Arm/Scapula' },
                { text: '<soma>Humerus</soma>', link: '/reference/Elements/Soma/Anatomy/Arm/Humerus' },
                { text: '<soma>Forearm</soma>', link: '/reference/Elements/Soma/Anatomy/Arm/Forearm' },
                { text: '<soma>Hand</soma>', link: '/reference/Elements/Soma/Anatomy/Arm/Hand' },
              ]
            },
            {
              text: '<soma>Leg</soma>', link: '/reference/Elements/Soma/Anatomy/Leg/Overview', collapsed: true, items: [
                { text: '<soma>Hips</soma>', link: '/reference/Elements/Soma/Anatomy/Leg/Hips' },
                { text: '<soma>Femur</soma>', link: '/reference/Elements/Soma/Anatomy/Leg/Femur' },
                { text: '<soma>Tibia</soma>', link: '/reference/Elements/Soma/Anatomy/Leg/Shin' },
                { text: '<soma>Foot</soma>', link: '/reference/Elements/Soma/Anatomy/Leg/Foot' },
              ]
            },
          ]
        },
        {
          text: '🔷<soma>Muscle</soma>', link: '/reference/Elements/Soma/Muscle/Overview', collapsed: true, items: [
            { text: '<soma>Endurance</soma>', link: '/reference/Elements/Soma/Muscle/Endurance' },
            { text: '<soma>Limberness</soma>', link: '/reference/Elements/Soma/Muscle/Limberness' },
            { text: '<soma>Strength</soma>', link: '/reference/Elements/Soma/Muscle/Strength' },
          ]
        },
        { text: '🔷<soma>Nutrition</soma>', link: '/reference/Elements/Soma/Nutrition/Overview', collapsed: true, items: [] },


      ]
    },
    {
      text: '🟩<ekos>EKOS</ekos>',
      collapsed: true,
      link: '/reference/Elements/Ekos/EkosOverview',
      items: [
        {
          text: '🟩<ekos>Not Natural</ekos>',
          link: '/reference/Elements/Ekos/ArtificialEkos/Overview',
          collapsed: true,
          items: []
        },
        {
          text: '🟩<ekos>Natural</ekos>',
          link: '/reference/Elements/Ekos/NaturalEkos/Overview',
          collapsed: true,
          items: [
            {
              text: '<ekos>Atmosphere</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Atmosphere/Overview', collapsed: true, items: [
                { text: '<ekos>AirTemperature</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Atmosphere/AirTemperature' },
                { text: '<ekos>Humidity</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Atmosphere/Humidity' },
                { text: '<ekos>Smoke</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Atmosphere/Smoke' },
                { text: '<ekos>Wind</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Atmosphere/Wind' },
              ]
            },
            {
              text: '<ekos>Biosphere</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Overview', collapsed: true, items: [
                {
                  text: '<ekos>Animals</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Animals/Overview', collapsed: true, items: [
                    { text: '<ekos>Bird</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Animals/Bird' },
                    { text: '<ekos>Insect</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Animals/Insect' },
                  ]
                },
                { text: '<ekos>Fungi</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Fungi/Overview', collapsed: true, items: [] },
                { text: '<ekos>Mixture</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Mixture/Overview', collapsed: true, items: [] },
                {
                  text: '<ekos>Plants</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Plants/Overview', collapsed: true, items: [
                    { text: '<ekos>Bush</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Plants/Bush' },
                    { text: '<ekos>Grass</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Plants/Grass' },
                    { text: '<ekos>Moss</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Plants/Moss' },
                    { text: '<ekos>Tree</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Biosphere/Plants/Tree' },
                  ]
                },
              ]
            },
            {
              text: '<ekos>Hydrosphere</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Hydrosphere/Overview', collapsed: true, items: [
                { text: '<ekos>Ice</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Hydrosphere/Ice' },
                { text: '<ekos>Rain</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Hydrosphere/Rain' },
                { text: '<ekos>Snow</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Hydrosphere/Snow' },
                { text: '<ekos>Water</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Hydrosphere/Water' },
              ]
            },
            {
              text: '<ekos>Lithosphere</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Lithosphere/Overview', collapsed: true, items: [
                {
                  text: '<ekos>Rock</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Lithosphere/Rock/Overview', collapsed: true, items: [
                    { text: '<ekos>Granite</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Lithosphere/Rock/Granite' },
                    { text: '<ekos>Limestone</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Lithosphere/Rock/Limestone' },
                    { text: '<ekos>Sandstone</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Lithosphere/Rock/Sandstone' },
                    { text: '<ekos>Basalt</ekos>', link: '/reference/Elements/Ekos/NaturalEkos/Lithosphere/Rock/Basalt' },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: '<ekos>EKOME</ekos>', link: '/reference/Elements/Ekos/Ekome/Overview', collapsed: true, items: [
          ]
        },
      ]
    },
    {
      text: '🔻<via>VIA</via>',
      collapsed: true,
      link: '/reference/Elements/Via/ViaOverview',
      items: [
        {
          text: '🔻<via>Affordance</via>', link: '/reference/Elements/Via/Affordance/Overview', collapsed: true, items: [
            { text: '<via>Constraint</via>', link: '/reference/Elements/Via/Affordance/Constraint/Overview', collapsed: true, items: [] },
            { text: '<via>Dexterity</via>', link: '/reference/Elements/Via/Affordance/Dexterity/Overview', collapsed: true, items: [] },
            { text: '<via>Limit</via>', link: '/reference/Elements/Via/Affordance/Limit/Overview', collapsed: true, items: [] },
            { text: '<via>Probability</via>', link: '/reference/Elements/Via/Affordance/Probability/Overview', collapsed: true, items: [] },
            { text: '<via>Takt</via>', link: '/reference/Elements/Via/Affordance/Takt/Overview', collapsed: true, items: [] },

          ]
        },
        {
          text: '🔻<via>Geometry</via>', link: '/reference/Elements/Via/Geometry/Overview', collapsed: true, items: [
            { text: '<via>Density</via>', link: '/reference/Elements/Via/Geometry/Density/Overview', collapsed: true, items: [] },
            {
              text: '<via>Direction</via>', link: '/reference/Elements/Via/Geometry/Direction/Overview', collapsed: true, items: [
                { text: '<via>CardinalDirection</via>', link: '/reference/Elements/Via/Geometry/Direction/CardinalDirection' },
                { text: '<via>RelativeDirection</via>', link: '/reference/Elements/Via/Geometry/Direction/RelativeDirection' },
              ]
            },
            { text: '<via>Displacement</via>', link: '/reference/Elements/Via/Geometry/Displacement/Overview', collapsed: true, items: [] },
            { text: '<via>Distance</via>', link: '/reference/Elements/Via/Geometry/Distance/Overview', collapsed: true, items: [] },
            { text: '<via>Div</via>', link: '/reference/Elements/Via/Geometry/Div/Overview', collapsed: true, items: [] },
            { text: '<via>Form</via>', link: '/reference/Elements/Via/Geometry/Form/Overview', collapsed: true, items: [] },

            {
              text: '<via>Line</via>', link: '/reference/Elements/Via/Geometry/Line/Overview', collapsed: true, items: [
                { text: '<via>AroundLine</via>', link: '/reference/Elements/Via/Geometry/Line/AroundLine' },
                { text: '<via>CircuitLine</via>', link: '/reference/Elements/Via/Geometry/Line/CircuitLine' },
                { text: '<via>PerimeterLine</via>', link: '/reference/Elements/Via/Geometry/Line/PerimeterLine' },
                { text: '<via>SpiralLine</via>', link: '/reference/Elements/Via/Geometry/Line/SpiralLine' },
                { text: '<via>StraightLine</via>', link: '/reference/Elements/Via/Geometry/Line/StraightLine' },
                { text: '<via>ZigzagLine</via>', link: '/reference/Elements/Via/Geometry/Line/ZigzagLine' },
                { text: '<via>BoustroLine</via>', link: '/reference/Elements/Via/Geometry/Line/BoustroLine' },
              ]
            },
            { text: '<via>Orientation</via>', link: '/reference/Elements/Via/Geometry/Orientation/Overview', collapsed: true, items: [] },
            {
              text: '<via>Point</via>', link: '/reference/Elements/Via/Geometry/Point/Overview', collapsed: true, items: [
                { text: '<via>CenterPoint</via>', link: '/reference/Elements/Via/Geometry/Point/CenterPoint' },
                { text: '<via>MidPoint</via>', link: '/reference/Elements/Via/Geometry/Point/MidPoint' },
                { text: '<via>ReferencePoint</via>', link: '/reference/Elements/Via/Geometry/Point/ReferencePoint' },
                { text: '<via>ReflectionPoint</via>', link: '/reference/Elements/Via/Geometry/Point/ReflectionPoint' },
                { text: '<via>TargetPoint</via>', link: '/reference/Elements/Via/Geometry/Point/TargetPoint' },
                { text: '<via>VertexPoint</via>', link: '/reference/Elements/Via/Geometry/Point/VertexPoint' },
              ]
            },
            { text: '<via>Shape</via>', link: '/reference/Elements/Via/Geometry/Shape/Overview', collapsed: true, items: [] },

          ]
        },
        {
          text: '🔻<via>Logic</via>', link: '/reference/Elements/Logic/Overview', collapsed: true, items: [
            { text: '<via>Conditional Logic</via>', link: '/reference/Elements/Logic/ConditionalLogic', },
            { text: '<via>Propositional Logic</via>', link: '/reference/Elements/Logic/PropositionalLogic', },

          ]
        },



      ]
    },
    {
      text: '🟠<motor>MOTOR</motor>',
      collapsed: true,
      link: '/reference/Elements/Motor/MotorOverview',
      items: [
        {
          text: '🟠<motor>Dynamics</motor>', link: '/reference/Elements/Motor/Dynamics/Overview', collapsed: true, items: [
            {
              text: '<motor>Forces</motor>', link: '/reference/Elements/Motor/Dynamics/Forces/Overview', collapsed: true, items: [
                { text: '<motor>CentripetalForce</motor>', link: '/reference/Elements/Motor/Dynamics/Forces/CentripetalForce' },
                { text: '<motor>Friction</motor>', link: '/reference/Elements/Motor/Dynamics/Forces/Friction' },
                { text: '<motor>Gravity</motor>', link: '/reference/Elements/Motor/Dynamics/Forces/Gravity' },
                { text: '<motor>NormalForce</motor>', link: '/reference/Elements/Motor/Dynamics/Forces/NormalForce' },
                { text: '<motor>Pressure</motor>', link: '/reference/Elements/Motor/Dynamics/Forces/Pressure' },
                { text: '<motor>Tension</motor>', link: '/reference/Elements/Motor/Dynamics/Forces/Tension' },
              ]
            },
            {
              text: '<motor>Energy</motor>', link: '/reference/Elements/Motor/Dynamics/Energy/Overview', collapsed: true, items: [
                { text: '<motor>Kinetic Energy</motor>', link: '/reference/Elements/Motor/Dynamics/Energy/KineticEnergy' },
                { text: '<motor>Potential Energy</motor>', link: '/reference/Elements/Motor/Dynamics/Energy/PotentialEnergy' },
                { text: '<motor>Elastic Energy</motor>', link: '/reference/Elements/Motor/Dynamics/Energy/ElasticEnergy' },
              ]
            },
            { text: '<motor>Inertia</motor>', link: '/reference/Elements/Motor/Dynamics/Inertia' },
            { text: '<motor>Momentum</motor>', link: '/reference/Elements/Motor/Dynamics/Momentum' },
            { text: '<motor>Power</motor>', link: '/reference/Elements/Motor/Dynamics/Power' },
            { text: '<motor>Work</motor>', link: '/reference/Elements/Motor/Dynamics/Work' },
            { text: '<motor>Torque</motor>', link: '/reference/Elements/Motor/Dynamics/Torque' },
          ]
        },
        {
          text: '🟠<motor>Kinematics</motor>', link: '/reference/Elements/Motor/Kinematics/Overview', collapsed: true, items: [
            { text: '<motor>Speed</motor>', link: '/reference/Elements/Motor/Kinematics/Speed' },
            { text: '<motor>Velocity</motor>', link: '/reference/Elements/Motor/Kinematics/Velocity' },
            { text: '<motor>Acceleration</motor>', link: '/reference/Elements/Motor/Kinematics/Acceleration' },
            { text: '<motor>Jerk</motor>', link: '/reference/Elements/Motor/Kinematics/Jerk' },
          ]
        },
        {
          text: '🟠<motor>Time</motor>', link: '/reference/Elements/Motor/Time/Overview', collapsed: true, items: [
            { text: '<motor>Rhythm</motor>', link: '/reference/Elements/Motor/Time/Rhythm' },
            { text: '<motor>Syncopation</motor>', link: '/reference/Elements/Motor/Time/Syncopation' },
            { text: '<motor>Tempo</motor>', link: '/reference/Elements/Motor/Time/Tempo' },
          ]
        },

      ]
    },
    {
      text: '💜<anima>ANIMA</anima>',
      collapsed: true,
      link: '/reference/Elements/Anima/AnimaOverview',
      items: [
        { text: '💜<anima>Attention</anima>', link: '/reference/Elements/Anima/Attention/Overview' },
        {
          text: '💜<anima>Cognitions</anima>', link: '/reference/Elements/Anima/Cognitions/Overview', collapsed: true, items: [
            {
              text: '<anima>CognitiveEase</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/Overview', collapsed: true, items: [
                { text: '<anima>Clarity Ease</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/ClarityEase' },
                { text: '<anima>Repetition Ease</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/RepetitionEase' },
                { text: '<anima>Priming Ease</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/PrimingEase' },
                { text: '<anima>Good Ease</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/GoodEase' },
                { text: '<anima>Feels Familiar</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsFamiliar' },
                { text: '<anima>Feels Effortless</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsEffortless' },
                { text: '<anima>Feels Good</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsGood' },
                { text: '<anima>Feels True</anima>', link: '/reference/Elements/Anima/Cognitions/CognitiveEase/FeelsTrue' },

              ]
            },
            { text: '<anima>Decision</anima>', link: '/reference/Elements/Anima/Cognitions/Decision/Overview' },
            { text: '<anima>Estimation</anima>', link: '/reference/Elements/Anima/Cognitions/Estimation/Overview' },
            { text: '<anima>Identification</anima>', link: '/reference/Elements/Anima/Cognitions/Identification/Overview' },
            { text: '<anima>Judgement</anima>', link: '/reference/Elements/Anima/Cognitions/Judgement/Overview' },
          ]
        },

        {
          text: '💜<anima>Emotions</anima>', link: '/reference/Elements/Anima/Emotions/Overview', collapsed: true, items: [
            { text: '<anima>Anger</anima>', link: '/reference/Elements/Anima/Emotions/Anger' },
            { text: '<anima>Disgust</anima>', link: '/reference/Elements/Anima/Emotions/Disgust' },
            { text: '<anima>Fear</anima>', link: '/reference/Elements/Anima/Emotions/Fear' },
            { text: '<anima>Joy</anima>', link: '/reference/Elements/Anima/Emotions/Joy' },
            { text: '<anima>Sadness</anima>', link: '/reference/Elements/Anima/Emotions/Sadness' },
          ]
        },
        { text: '💜<anima>Learning</anima>', link: '/reference/Elements/Anima/Learning/Overview', collapsed: true, items: [] },
        {
          text: '💜<anima>Memory</anima>', link: '/reference/Elements/Anima/Memory/Overview', collapsed: true, items: [
            { text: '<anima>Long Term Memory</anima>', link: '/reference/Elements/Anima/Memory/LongTermMemory' },
            { text: '<anima>Short Term Memory</anima>', link: '/reference/Elements/Anima/Memory/ShortTermMemory' },
            { text: '<anima>Working Memory</anima>', link: '/reference/Elements/Anima/Memory/WorkingMemory' },
          ]
        },
        {
          text: '💜<anima>MindState</anima>', link: '/reference/Elements/Anima/MindState/Overview', collapsed: true, items: [
            { text: '<anima>Arousal</anima>', link: '/reference/Elements/Anima/MindState/Arousal/Overview' },
            { text: '<anima>Confidence</anima>', link: '/reference/Elements/Anima/MindState/Confidence/Overview' },
            { text: '<anima>Mindfulness</anima>', link: '/reference/Elements/Anima/MindState/Mindfulness/Overview' },
            { text: '<anima>Flow State</anima>', link: '/reference/Elements/Anima/MindState/FlowState' },
          ]
        },
        {
          text: '💜<anima>Senses</anima>', link: '/reference/Elements/Anima/Senses/Overview', collapsed: true, items: [
            { text: '<anima>Auditory</anima>', link: '/reference/Elements/Anima/Senses/AuditorySense/Overview', collapsed: true, items: [] },
            { text: '<anima>Touch</anima>', link: '/reference/Elements/Anima/Senses/TouchSense/Overview', collapsed: true, items: [] },
            { text: '<anima>Compression</anima>', link: '/reference/Elements/Anima/Senses/CompressionSense/Overview', collapsed: true, items: [] },
            { text: '<anima>Proprioception</anima>', link: '/reference/Elements/Anima/Senses/Proprioception/Overview', collapsed: true, items: [] },
          ]
        },
      ]
    },
  ]
}

function sidebarBetums() {
  return [
    {
      text: '[⭐|🔷]', collapsed: true, items: [
        { text: '[<labor>Abduction</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Abduction_Leg.md' },
        { text: '[<labor>Absorb</labor>,<soma>Body</soma>]', link: '/reference/Betums/Absorb_Body.md' },
        { text: '[<labor>Absorb</labor>,<soma>Head</soma>]', link: '/reference/Betums/Absorb_Head.md' },
        { text: '[<labor>Absorb</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Absorb_Leg.md' },
        { text: '[<labor>Align</labor>,<soma>Body</soma>]', link: '/reference/Betums/Align_Body.md' },
        { text: '[<labor>Align</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Align_Leg.md' },
        { text: '[<labor>Arc</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Arc_Leg.md' },
        { text: '[<labor>Arch</labor>,<soma>Body</soma>]', link: '/reference/Betums/Arch_Body.md' },
        { text: '[<labor>Arch</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Arch_Leg.md' },
        { text: '[<labor>Brachiation</labor>,<soma>Body</soma>]', link: '/reference/Betums/Brachiation_Body.md' },
        { text: '[<labor>Buckle</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Buckle_Leg.md' },
        { text: '[<labor>Bump</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Bump_Leg.md' },
        { text: '[<labor>Catch</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Catch_Foot.md' },
        { text: '[<labor>Catch</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Catch_Hand.md' },
        { text: '[<labor>Compression</labor>,<soma>Body</soma>]', link: '/reference/Betums/Compression_Body.md' },
        { text: '[<labor>Crunch</labor>,<soma>Body</soma>]', link: '/reference/Betums/Crunch_Body.md' },
        { text: '[<labor>Drop</labor>,<soma>Body</soma>]', link: '/reference/Betums/Drop_Body.md' },
        { text: '[<labor>Drop</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Drop_Leg.md' },
        { text: '[<labor>Expansion</labor>,<soma>Body</soma>]', link: '/reference/Betums/Expansion_Body.md' },
        { text: '[<labor>Extension</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Extension_Leg.md' },
        { text: '[<labor>Fall</labor>,<soma>Body</soma>]', link: '/reference/Betums/Fall_Body.md' },
        { text: '[<labor>Flag</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Flag_Leg.md' },
        { text: '[<labor>Flexion</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Flexion_Leg.md' },
        { text: '[<labor>Hook</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Hook_Leg.md' },
        { text: '[<labor>Lever</labor>,<soma>Body</soma>]', link: '/reference/Betums/Lever_Body.md' },
        { text: '[<labor>Lever</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Lever_Leg.md' },
        { text: '[<labor>Lock</labor>,<soma>Body</soma>]', link: '/reference/Betums/Lock_Body.md' },
        { text: '[<labor>Lock</labor>,<soma>Head</soma>]', link: '/reference/Betums/Lock_Head.md' },
        { text: '[<labor>Lock</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Lock_Leg.md' },
        { text: '[<labor>Match</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Match_Foot.md' },
        { text: '[<labor>Match</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Match_Hand.md' },
        { text: '[<labor>Nudge</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Nudge_Foot.md' },
        { text: '[<labor>Nudge</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Nudge_Hand.md' },
        { text: '[<labor>Overlap</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Overlap_Foot.md' },
        { text: '[<labor>Overlap</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Overlap_Hand.md' },
        { text: '[<labor>Pivot</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Pivot_Foot.md' },
        { text: '[<labor>Pivot</labor>,<soma>Head</soma>]', link: '/reference/Betums/Pivot_Head.md' },
        { text: '[<labor>Prop</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Prop_Leg.md' },
        { text: '[<labor>Reach</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Reach_Leg.md' },
        { text: '[<labor>RockOver</labor>,<soma>Leg</soma>]', link: '/reference/Betums/RockOver_Leg.md' },
        { text: '[<labor>Roll</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Roll_Foot.md' },
        { text: '[<labor>Roll</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Roll_Hand.md' },
        { text: '[<labor>Rotate</labor>,<soma>Body</soma>]', link: '/reference/Betums/Rotate_Body.md' },
        { text: '[<labor>Rotation</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Rotation_Foot.md' },
        { text: '[<labor>Rotation</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Rotation_Hand.md' },
        { text: '[<labor>Rotation</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Rotation_Leg.md' },
        { text: '[<labor>Shake</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Shake_Leg.md' },
        { text: '[<labor>Slide</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Slide_Foot.md' },
        { text: '[<labor>Slide</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Slide_Hand.md' },
        { text: '[<labor>Slot</labor>,<soma>Body</soma>]', link: '/reference/Betums/Slot_Body.md' },
        { text: '[<labor>Slot</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Slot_Foot.md' },
        { text: '[<labor>Slot</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Slot_Hand.md' },
        { text: '[<labor>Slot</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Slot_Leg.md' },
        { text: '[<labor>Smear</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Smear_Foot.md' },
        { text: '[<labor>Smear</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Smear_Hand.md' },
        { text: '[<labor>Smear</labor>,<soma>Head</soma>]', link: '/reference/Betums/Smear_Head.md' },
        { text: '[<labor>Smear</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Smear_Leg.md' },
        { text: '[<labor>Stab</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Stab_Foot.md' },
        { text: '[<labor>Stab</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Stab_Hand.md' },
        { text: '[<labor>Swap</labor>,<soma>Body</soma>]', link: '/reference/Betums/Swap_Body.md' },
        { text: '[<labor>Swap</labor>,<soma>Foot</soma>]', link: '/reference/Betums/Swap_Foot.md' },
        { text: '[<labor>Swap</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Swap_Hand.md' },
        { text: '[<labor>Swing</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Swing_Leg.md' },
        { text: '[<labor>Tangent</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Tangent_Leg.md' },
        { text: '[<labor>Twist</labor>,<soma>Body</soma>]', link: '/reference/Betums/Twist_Body.md' },
        { text: '[<labor>Whip</labor>,<soma>Body</soma>]', link: '/reference/Betums/Whip_Body.md' },
        { text: '[<labor>Whip</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Whip_Leg.md' },
        { text: '[<labor>Wrap</labor>,<soma>Body</soma>]', link: '/reference/Betums/Wrap_Body.md' },
        { text: '[<labor>Wrap</labor>,<soma>Hand</soma>]', link: '/reference/Betums/Wrap_Hand.md' },
        { text: '[<labor>Wrap</labor>,<soma>Leg</soma>]', link: '/reference/Betums/Wrap_Leg.md' },

      ]
    },
    { text: '[⭐|🔷|🟩]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟩|🔻]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟩|🔻|🟠]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟩|🔻|🟠|💜]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟩|🔻|💜]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟩|🟠]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟩|🟠|💜]', link: '-', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟩|💜]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🔻]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🔻|🟠]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🔻|🟠|💜]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🔻|💜]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟠]', collapsed: true, items: [] },
    { text: '[⭐|🔷|🟠|💜]', collapsed: true, items: [] },
    { text: '[⭐|🔷|💜]', collapsed: true, items: [] },
    {
      text: '[⭐|🟩]', collapsed: true, items: []
    },
    { text: '[⭐|🟩|🔻]', collapsed: true, items: [] },
    { text: '[⭐|🟩|🔻|🟠]', collapsed: true, items: [] },
    { text: '[⭐|🟩|🔻|🟠|💜]', collapsed: true, items: [] },
    { text: '[⭐|🟩|🔻|💜]', collapsed: true, items: [] },
    { text: '[⭐|🟩|🟠]', collapsed: true, items: [] },
    { text: '[⭐|🟩|🟠|💜]', collapsed: true, items: [] },
    { text: '[⭐|🟩|💜]', collapsed: true, items: [] },
    { text: '[⭐|🔻]', collapsed: true, items: [] },
    { text: '[⭐|🔻|🟠]', collapsed: true, items: [] },
    { text: '[⭐|🔻|🟠|💜]', collapsed: true, items: [] },
    { text: '[⭐|🔻|💜]', collapsed: true, items: [] },
    {
      text: '[⭐|🟠]', collapsed: true, items: []
    },
    { text: '[⭐|🟠|💜]', collapsed: true, items: [] },
    {
      text: '[⭐|💜]', collapsed: true, items: []
    },
    { text: '[🔷|🟩]', collapsed: true, items: [] },
    { text: '[🔷|🟩|🔻]', collapsed: true, items: [] },
    { text: '[🔷|🟩|🔻|🟠]', collapsed: true, items: [] },
    { text: '[🔷|🟩|🔻|🟠|💜]', collapsed: true, items: [] },
    { text: '[🔷|🟩|🟠]', collapsed: true, items: [] },
    { text: '[🔷|🟩|🟠|💜]', collapsed: true, items: [] },
    { text: '[🔷|🟩|💜]', collapsed: true, items: [] },
    { text: '[🔷|🔻]', collapsed: true, items: [] },
    { text: '[🔷|🔻|🟠]', collapsed: true, items: [] },
    { text: '[🔷|🔻|🟠|💜]', collapsed: true, items: [] },
    { text: '[🔷|🔻|💜]', collapsed: true, items: [] },
    { text: '[🔷|🟠]', collapsed: true, items: [] },
    { text: '[🔷|🟠|💜]', collapsed: true, items: [] },
    { text: '[🔷|💜]', collapsed: true, items: [] },
    {
      text: '[🟩|🔻]', collapsed: true, items: []
    },
    { text: '[🟩|🔻|🟠]', collapsed: true, items: [] },
    { text: '[🟩|🔻|🟠|💜]', collapsed: true, items: [] },
    { text: '[🟩|🔻|💜]', collapsed: true, items: [] },
    {
      text: '[🟩|🟠 ]', collapsed: true, items: []
    },
    { text: '[🟩|🟠|💜]', collapsed: true, items: [] },
    {
      text: '[🟩|💜]', collapsed: true, items: []
    },
    { text: '[🔻|🟠]', collapsed: true, items: [] },
    { text: '[🔻|🟠|💜]', collapsed: true, items: [] },
    { text: '[🔻|💜]', collapsed: true, items: [] },
    { text: '[🟠|💜]', collapsed: true, items: [] },
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
    { text: 'Plantor Questions', link: '/examples/PlantorQuestions' },
    { text: '2k of Beta', link: '/examples/2kBeta' },
  ]
}

