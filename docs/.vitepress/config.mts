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
      '/reference/Betums/': sidebarBetums(),
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
        { text: 'What is <beta>PlantaBeta</beta>?', link: '/guide/What/WhatPlantaBeta' },
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
      text: 'Who are you?', collapsed: false, items: [
        { text: 'Potential Planter', link: '/guide/Who/PotentialPlanter' },
        { text: 'Novice Planter', link: '/guide/Who/NovicePlanter' },
        { text: 'Veteran Planter', link: '/guide/Who/VeteranPlanter' },
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
          text: '⭐<labor>Tasks</labor>', link: '/reference/Elements/Labor/Tasks/Overview', collapsed: true, items: [
            { text: '<labor>Piece</labor>', link: '/reference/Elements/Labor/Tasks/Piece' },
            { text: '<labor>Specs</labor>', link: '/reference/Elements/Labor/Tasks/Specs' },
          ]
        },
        {
          text: '⭐<labor>Aktions</labor>', link: '/reference/Elements/Labor/Aktions/Overview', collapsed: true, items: [
            { text: '<labor>Abduction</labor>', link: '/reference/Elements/Labor/Aktions/Abduction' },
            { text: '<labor>Absorb</labor>', link: '/reference/Elements/Labor/Aktions/Absorb' },
            { text: '<labor>Adduction</labor>', link: '/reference/Elements/Labor/Aktions/Adduction' },
            { text: '<labor>Adjust</labor>', link: '/reference/Elements/Labor/Aktions/Adjust' },
            { text: '<labor>Allo</labor>', link: '/reference/Elements/Labor/Aktions/Allo' },
            { text: '<labor>Ama</labor>', link: '/reference/Elements/Labor/Aktions/Ama' },
            { text: '<labor>Ankor</labor>', link: '/reference/Elements/Labor/Aktions/Ankor' },
            { text: '<labor>Catch</labor>', link: '/reference/Elements/Labor/Aktions/Catch' },
            { text: '<labor>Clean</labor>', link: '/reference/Elements/Labor/Aktions/Clean' },
            { text: '<labor>Crawl</labor>', link: '/reference/Elements/Labor/Aktions/Crawl' },
            { text: '<labor>Drag</labor>', link: '/reference/Elements/Labor/Aktions/Drag' },
            { text: '<labor>Drop</labor>', link: '/reference/Elements/Labor/Aktions/Drop' },
            { text: '<labor>Eval</labor>', link: '/reference/Elements/Labor/Aktions/Eval' },
            { text: '<labor>Fall</labor>', link: '/reference/Elements/Labor/Aktions/Fall' },
            { text: '<labor>Flexion</labor>', link: '/reference/Elements/Labor/Aktions/Flexion' },
            { text: '<labor>Hinge</labor>', link: '/reference/Elements/Labor/Aktions/Hinge' },
            { text: '<labor>Hook</labor>', link: '/reference/Elements/Labor/Aktions/Hook' },
            { text: '<labor>Insert</labor>', link: '/reference/Elements/Labor/Aktions/Insert' },
            { text: '<labor>Knot</labor>', link: '/reference/Elements/Labor/Aktions/Knot' },
            { text: '<labor>Kontakt</labor>', link: '/reference/Elements/Labor/Aktions/Kontakt' },
            { text: '<labor>Launch</labor>', link: '/reference/Elements/Labor/Aktions/Launch' },
            { text: '<labor>Lift</labor>', link: '/reference/Elements/Labor/Aktions/Lift' },
            { text: '<labor>Lock</labor>', link: '/reference/Elements/Labor/Aktions/Lock' },
            { text: '<labor>Onda</labor>', link: '/reference/Elements/Labor/Aktions/Onda' },
            { text: '<labor>Orbit</labor>', link: '/reference/Elements/Labor/Aktions/Orbit' },
            { text: '<labor>Overview</labor>', link: '/reference/Elements/Labor/Aktions/Overview' },
            { text: '<labor>Pop</labor>', link: '/reference/Elements/Labor/Aktions/Pop' },
            { text: '<labor>Preserve</labor>', link: '/reference/Elements/Labor/Aktions/Preserve' },
            { text: '<labor>Reach</labor>', link: '/reference/Elements/Labor/Aktions/Reach' },
            { text: '<labor>Rip</labor>', link: '/reference/Elements/Labor/Aktions/Rip' },
            { text: '<labor>Rotation</labor>', link: '/reference/Elements/Labor/Aktions/Rotation' },
            { text: '<labor>Slot</labor>', link: '/reference/Elements/Labor/Aktions/Slot' },
            { text: '<labor>Stack</labor>', link: '/reference/Elements/Labor/Aktions/Stack' },
            { text: '<labor>Stall</labor>', link: '/reference/Elements/Labor/Aktions/Stall' },
            { text: '<labor>Tangent</labor>', link: '/reference/Elements/Labor/Aktions/Tangent' },
            { text: '<labor>Toggle</labor>', link: '/reference/Elements/Labor/Aktions/Toggle' },
            { text: '<labor>Transport</labor>', link: '/reference/Elements/Labor/Aktions/Transport' },
            { text: '<labor>Whip</labor>', link: '/reference/Elements/Labor/Aktions/Whip' },
            { text: '<labor>Wrap</labor>', link: '/reference/Elements/Labor/Aktions/Wrap' },
          ]
        },

        {
          text: '⭐<labor>Tools</labor>', link: '/reference/Elements/Labor/Tool/Overview', collapsed: true, items: [
            { text: '<labor>Boot</labor>', link: '/reference/Elements/Labor/Tool/Boot/Overview' },
            { text: '<labor>Boot</labor>', link: '/reference/Elements/Labor/Tool/Boot/Overview' },
            { text: '<labor>Box</labor>', link: '/reference/Elements/Labor/Tool/Box/Overview' },
            { text: '<labor>Bundle</labor>', link: '/reference/Elements/Labor/Tool/Bundle/Overview' },
            { text: '<labor>Doru</labor>', link: '/reference/Elements/Labor/Tool/Doru/Overview' },
            { text: '<labor>Glove</labor>', link: '/reference/Elements/Labor/Tool/Glove/Overview' },
            { text: '<labor>Karabiner</labor>', link: '/reference/Elements/Labor/Tool/Karabiner/Overview' },
            { text: '<labor>Kit</labor>', link: '/reference/Elements/Labor/Tool/Kit/Overview' },
            { text: '<labor>Plantafor</labor>', link: '/reference/Elements/Labor/Tool/Plantafor/Overview' },
            { text: '<labor>PlotCord</labor>', link: '/reference/Elements/Labor/Tool/PlotCord/Overview' },
            { text: '<labor>Radior</labor>', link: '/reference/Elements/Labor/Tool/Radior/Overview' },
            { text: '<labor>Repair</labor>', link: '/reference/Elements/Labor/Tool/Repair/Overview' },
            { text: '<labor>Rope</labor>', link: '/reference/Elements/Labor/Tool/Rope/Overview' },
            { text: '<labor>Spade</labor>', link: '/reference/Elements/Labor/Tool/Spade/Overview' },
            { text: '<labor>Tibior</labor>', link: '/reference/Elements/Labor/Tool/Tibior/Overview' },
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
          text: '<ekos>Atmosphere</ekos>', link: '/reference/Elements/Ekos/Atmosphere/Overview', collapsed: true, items: [
            { text: '<ekos>AirTemperature</ekos>', link: '/reference/Elements/Ekos/Atmosphere/AirTemperature' },
            { text: '<ekos>Humidity</ekos>', link: '/reference/Elements/Ekos/Atmosphere/Humidity' },
            { text: '<ekos>Lightning</ekos>', link: '/reference/Elements/Ekos/Atmosphere/Lightning' },
            { text: '<ekos>Wind</ekos>', link: '/reference/Elements/Ekos/Atmosphere/Wind' },
          ]
        },
        {
          text: '<ekos>Biosphere</ekos>', link: '/reference/Elements/Ekos/Biosphere/Overview', collapsed: true, items: [
            {
              text: '<ekos>Animals</ekos>', link: '/reference/Elements/Ekos/Biosphere/Animals/Overview', collapsed: true, items: [
                { text: '<ekos>Bird</ekos>', link: '/reference/Elements/Ekos/Biosphere/Animals/Bird' },
                { text: '<ekos>Insect</ekos>', link: '/reference/Elements/Ekos/Biosphere/Animals/Insect' },
              ]
            },
            { text: '<ekos>Fungi</ekos>', link: '/reference/Elements/Ekos/Biosphere/Fungi/Overview', collapsed: true, items: [] },
            {
              text: '<ekos>Plants</ekos>', link: '/reference/Elements/Ekos/Biosphere/Plants/Overview', collapsed: true, items: [
              ]
            },
          ]
        },
        {
          text: '<ekos>Hydrosphere</ekos>', link: '/reference/Elements/Ekos/Hydrosphere/Overview', collapsed: true, items: [

          ]
        },
        {
          text: '<ekos>Lithosphere</ekos>', link: '/reference/Elements/Ekos/Lithosphere/Overview', collapsed: true, items: [
          ]
        },
        // {
        //   text: '<ekos>EKOME</ekos>', link: '/reference/Elements/Ekos/Ekome/Overview', collapsed: true, items: [
        //   ]
        // },
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
            { text: '<via>Site</via>', link: '/reference/Elements/Via/Affordance/Site/Overview', collapsed: true, items: [] },

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
          text: '🔻<via>Logic</via>', link: '/reference/Elements/Via/Logic/Overview', collapsed: true, items: [
            { text: '<via>Conditional Logic</via>', link: '/reference/Elements/Via/Logic/ConditionalLogic/Overview', },
            { text: '<via>Propositional Logic</via>', link: '/reference/Elements/Via/Logic/PropositionalLogic/Overview', },

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
    { text: '[<via>4Density</via>]', link: '/reference/Betums/4Density.md' },
    { text: '[<via>5Density</via>]', link: '/reference/Betums/5Density.md' },
    { text: '[<via>6Density</via>]', link: '/reference/Betums/6Density.md' },
    { text: '[<via>7Density</via>]', link: '/reference/Betums/7Density.md' },
    { text: '[<via>8Density</via>]', link: '/reference/Betums/8Density.md' },
    { text: '[<via>9Density</via>]', link: '/reference/Betums/9Density.md' },
    { text: '[Abduction-<soma>Base</soma>]', link: '/reference/Betums/Abduction-Base.md' },
    { text: '[Absorb-<soma>Base</soma>]', link: '/reference/Betums/Absorb-Base.md' },
    { text: '[Absorb-Korpo]', link: '/reference/Betums/Absorb-Korpo.md' },
    { text: '[Adduction-<soma>Base</soma>]', link: '/reference/Betums/Adduction-Base.md' },
    { text: '[Adduction-Mano-Finger]', link: '/reference/Betums/Adduction-Mano-Finger.md' },
    { text: '[Aktion-Baso]', link: '/reference/Betums/Aktion-Baso.md' },
    { text: '[Aktion-Flora-Branch]', link: '/reference/Betums/Aktion-Flora-Branch.md' },
    { text: '[Aktion-Flora-Trunk]', link: '/reference/Betums/Aktion-Flora-Trunk.md' },
    { text: '[Aktion-FloraRoot]', link: '/reference/Betums/Aktion-FloraRoot.md' },
    { text: '[<labor>Ama</labor>|<soma>Base</soma>]', link: '/reference/Betums/Ama-Base.md' },
    { text: '[<labor>Ama</labor>|Brazo-Anterior-Down]', link: '/reference/Betums/Ama-Brazo-Anterior-Down.md' },
    { text: '[<labor>Ama</labor>|Brazo-Anterior-Plast-Down]', link: '/reference/Betums/Ama-Brazo-Anterior-Plast-Down.md' },
    { text: '[<labor>Ama</labor>|Brazo-Anterior-Up]', link: '/reference/Betums/Ama-Brazo-Anterior-Up.md' },
    { text: '[<labor>Ama</labor>|Brazo-Anterior]', link: '/reference/Betums/Ama-Brazo-Anterior.md' },
    { text: '[<labor>Ama</labor>|Spade]', link: '/reference/Betums/Ama-Spade.md' },
    { text: '[<labor>Amble</labor>-Branta-Korpo]', link: '/reference/Betums/Amble-Branta-Korpo.md' },
    { text: '[<labor>Amble</labor>-Brazo]', link: '/reference/Betums/Amble-Brazo.md' },
    { text: '[<labor>Amble</labor>-Korpo-Cross]', link: '/reference/Betums/Amble-Korpo-Cross.md' },
    { text: '[<labor>Amble</labor>-Korpo-Incline]', link: '/reference/Betums/Amble-Korpo-Incline.md' },
    { text: '[<labor>Amble</labor>-Korpo]', link: '/reference/Betums/Amble-Korpo.md' },
    { text: '[Aspis-Flora]', link: '/reference/Betums/Aspis-Flora.md' },
    { text: '[BackFlap-Site]', link: '/reference/Betums/BackFlap-Site.md' },
    { text: '[Bag-Site]', link: '/reference/Betums/Bag-Site.md' },
    { text: '[Ballista-Flora]', link: '/reference/Betums/Ballista-Flora.md' },
    { text: '[Belt-Site]', link: '/reference/Betums/Belt-Site.md' },
    { text: '[Blade-Site]', link: '/reference/Betums/Blade-Site.md' },
    { text: '[Block-Density]', link: '/reference/Betums/Block-Density.md' },
    { text: '[<labor>Boot</labor>-Arch-Klose]', link: '/reference/Betums/Boot-Arch-Klose.md' },
    { text: '[<labor>Boot</labor>-Heel-Klose-Drag]', link: '/reference/Betums/Boot-Heel-Klose-Drag.md' },
    { text: '[<labor>Boot</labor>-Heel-Klose-Kick]', link: '/reference/Betums/Boot-Heel-Klose-Kick.md' },
    { text: '[<labor>Boot</labor>-Klose-Drag]', link: '/reference/Betums/Boot-Klose-Drag.md' },
    { text: '[<labor>Boot</labor>-Lace-Adjust]', link: '/reference/Betums/Boot-Lace-Adjust.md' },
    { text: '[<labor>Boot</labor>-Lace-Knot]', link: '/reference/Betums/Boot-Lace-Knot.md' },
    { text: '[<labor>Boot</labor>-Mano]', link: '/reference/Betums/Boot-Mano.md' },
    { text: '[<labor>Boot</labor>-Off]', link: '/reference/Betums/Boot-Off.md' },
    { text: '[<labor>Boot</labor>-On]', link: '/reference/Betums/Boot-On.md' },
    { text: '[<labor>Boot</labor>-Preserve]', link: '/reference/Betums/Boot-Preserve.md' },
    { text: '[<labor>Boot</labor>-Site]', link: '/reference/Betums/Boot-Site.md' },
    { text: '[<labor>Boot</labor>-Toe-Klose-Drag]', link: '/reference/Betums/Boot-Toe-Klose-Drag.md' },
    { text: '[<labor>Boot</labor>-Toe-Klose-Kick]', link: '/reference/Betums/Boot-Toe-Klose-Kick.md' },
    { text: '[Bottle-Clean]', link: '/reference/Betums/Bottle-Clean.md' },
    { text: '[Bottle-Drink]', link: '/reference/Betums/Bottle-Drink.md' },
    { text: '[Bottle-Fill]', link: '/reference/Betums/Bottle-Fill.md' },
    { text: '[BoulderSoil-Hidro-Site]', link: '/reference/Betums/BoulderSoil-Hidro-Site.md' },
    { text: '[BoulderSoil-Site]', link: '/reference/Betums/BoulderSoil-Site.md' },
    { text: '[<labor>Box</labor>-Aktion]', link: '/reference/Betums/Box-Aktion.md' },
    { text: '[<labor>Box</labor>-Bottom-Corner-Site]', link: '/reference/Betums/Box-Bottom-Corner-Site.md' },
    { text: '[<labor>Box</labor>-Bottom-Site]', link: '/reference/Betums/Box-Bottom-Site.md' },
    { text: '[<labor>Box</labor>-Construct]', link: '/reference/Betums/Box-Construct.md' },
    { text: '[<labor>Box</labor>-Corner-Site]', link: '/reference/Betums/Box-Corner-Site.md' },
    { text: '[<labor>Box</labor>-Lift]', link: '/reference/Betums/Box-Lift.md' },
    { text: '[<labor>Box</labor>-Lock]', link: '/reference/Betums/Box-Lock.md' },
    { text: '[<labor>Box</labor>-Mano]', link: '/reference/Betums/Box-Mano.md' },
    { text: '[<labor>Box</labor>-Pop]', link: '/reference/Betums/Box-Pop.md' },
    { text: '[<labor>Box</labor>-Side-Corner-Site]', link: '/reference/Betums/Box-Side-Corner-Site.md' },
    { text: '[<labor>Box</labor>-Side-Site]', link: '/reference/Betums/Box-Side-Site.md' },
    { text: '[<labor>Box</labor>-Site]', link: '/reference/Betums/Box-Site.md' },
    { text: '[<labor>Box</labor>-Slide]', link: '/reference/Betums/Box-Slide.md' },
    { text: '[<labor>Box</labor>-Stack]', link: '/reference/Betums/Box-Stack.md' },
    { text: '[<labor>Box</labor>-Transport]', link: '/reference/Betums/Box-Transport.md' },
    { text: '[Branch-Audio]', link: '/reference/Betums/Branch-Audio.md' },
    { text: '[Breathing-Korpo]', link: '/reference/Betums/Breathing-Korpo.md' },
    { text: '[Bryophyte-Hidro-Site]', link: '/reference/Betums/Bryophyte-Hidro-Site.md' },
    { text: '[Bryophyte-Site]', link: '/reference/Betums/Bryophyte-Site.md' },
    { text: '[Buckle-Aktion]', link: '/reference/Betums/Buckle-Aktion.md' },
    { text: '[Buckle-Site]', link: '/reference/Betums/Buckle-Site.md' },
    { text: '[Bundle-Aktion]', link: '/reference/Betums/Bundle-Aktion.md' },
    { text: '[Bundle-Bottom-Site]', link: '/reference/Betums/Bundle-Bottom-Site.md' },
    { text: '[Bundle-Mano]', link: '/reference/Betums/Bundle-Mano.md' },
    { text: '[Bundle-Peel]', link: '/reference/Betums/Bundle-Peel.md' },
    { text: '[Bundle-Site]', link: '/reference/Betums/Bundle-Site.md' },
    { text: '[Bundle-Unwrap]', link: '/reference/Betums/Bundle-Unwrap.md' },
    { text: '[BundleStart-Site]', link: '/reference/Betums/BundleStart-Site.md' },
    { text: '[BundleStem-Site]', link: '/reference/Betums/BundleStem-Site.md' },
    { text: '[BurnPit]', link: '/reference/Betums/BurnPit.md' },
    { text: '[BurntFlora-Site]', link: '/reference/Betums/BurntFlora-Site.md' },
    { text: '[Button-Aktion]', link: '/reference/Betums/Button-Aktion.md' },
    { text: '[Cache-Aktion]', link: '/reference/Betums/Cache-Aktion.md' },
    { text: '[Catch-Flora]', link: '/reference/Betums/Catch-Flora.md' },
    { text: '[ClaySoil-Hidro-Site]', link: '/reference/Betums/ClaySoil-Hidro-Site.md' },
    { text: '[ClaySoil-Site]', link: '/reference/Betums/ClaySoil-Site.md' },
    { text: '[CobbleSoil-Hidro-Site]', link: '/reference/Betums/CobbleSoil-Hidro-Site.md' },
    { text: '[CobbleSoil-Site]', link: '/reference/Betums/CobbleSoil-Site.md' },
    { text: '[Collar-Site]', link: '/reference/Betums/Collar-Site.md' },
    { text: '[Crawl-Korpo]', link: '/reference/Betums/Crawl-Korpo.md' },
    { text: '[Cuff-Site]', link: '/reference/Betums/Cuff-Site.md' },
    { text: '[Dig-<soma>Base</soma>]', link: '/reference/Betums/Dig-Base.md' },
    { text: '[Dig-Mano]', link: '/reference/Betums/Dig-Mano.md' },
    { text: '[Div-Density]', link: '/reference/Betums/Div-Density.md' },
    { text: '[Dorsiflexion-<soma>Base</soma>]', link: '/reference/Betums/Dorsiflexion-Base.md' },
    { text: '[<labor>Doru.Amble</labor>]', link: '/reference/Betums/Doru-Amble.md' },
    { text: '[<labor>Doru.Ankor</labor>]', link: '/reference/Betums/Doru-Ankor.md' },
    { text: '[<labor>Doru.Bump</labor>]', link: '/reference/Betums/Doru-Bump.md' },
    { text: '[<labor>Doru.Drag</labor>]', link: '/reference/Betums/Doru-Drag.md' },
    { text: '[<labor>Doru.Mano</labor>]', link: '/reference/Betums/Doru-Mano.md' },
    { text: '[<labor>Doru.Onda</labor>]', link: '/reference/Betums/Doru-Onda.md' },
    { text: '[<labor>Doru.Pogo</labor>]', link: '/reference/Betums/Doru-Pogo.md' },
    { text: '[<labor>Doru.Poke</labor>]', link: '/reference/Betums/Doru-Poke.md' },
    { text: '[<labor>Doru.Pont</labor>]', link: '/reference/Betums/Doru-Pont.md' },
    { text: '[<labor>Doru.Pop</labor>]', link: '/reference/Betums/Doru-Pop.md' },
    { text: '[<labor>Doru.Post</labor>]', link: '/reference/Betums/Doru-Post.md' },
    { text: '[<labor>Doru.Prop</labor>]', link: '/reference/Betums/Doru-Prop.md' },
    { text: '[<labor>Doru.Rotate</labor>]', link: '/reference/Betums/Doru-Rotate.md' },
    { text: '[<labor>Doru.Site</labor>]', link: '/reference/Betums/Doru-Site.md' },
    { text: '[<labor>Doru.Skreef</labor>]', link: '/reference/Betums/Doru-Skreef.md' },
    { text: '[<labor>Doru.Slam</labor>]', link: '/reference/Betums/Doru-Slam.md' },
    { text: '[<labor>Doru.Slap</labor>]', link: '/reference/Betums/Doru-Slap.md' },
    { text: '[<labor>Doru.Slide</labor>]', link: '/reference/Betums/Doru-Slide.md' },
    { text: '[<labor>Doru.Stall</labor>]', link: '/reference/Betums/Doru-Stall.md' },
    { text: '[<labor>Doru.Stomp</labor>]', link: '/reference/Betums/Doru-Stomp.md' },
    { text: '[<labor>Doru.Swap</labor>]', link: '/reference/Betums/Doru-Swap.md' },
    { text: '[<labor>Doru.Transfer</labor>]', link: '/reference/Betums/Doru-Transfer.md' },
    { text: '[Ekon-Audio]', link: '/reference/Betums/Ekon-Audio.md' },
    { text: '[Emotion-Flora]', link: '/reference/Betums/Emotion-Flora.md' },
    { text: '[Error-<soma>Base</soma>]', link: '/reference/Betums/Error-Base.md' },
    { text: '[Error-Boot]', link: '/reference/Betums/Error-Boot.md' },
    { text: '[Error-Box]', link: '/reference/Betums/Error-Box.md' },
    { text: '[Error-Brazo]', link: '/reference/Betums/Error-Brazo.md' },
    { text: '[Error-Bundle]', link: '/reference/Betums/Error-Bundle.md' },
    { text: '[Error-Cache]', link: '/reference/Betums/Error-Cache.md' },
    { text: '[Error-Doru]', link: '/reference/Betums/Error-Doru.md' },
    { text: '[Error-Glove]', link: '/reference/Betums/Error-Glove.md' },
    { text: '[Error-Karabiner]', link: '/reference/Betums/Error-Karabiner.md' },
    { text: '[Error-Kit]', link: '/reference/Betums/Error-Kit.md' },
    { text: '[Error-Korpo]', link: '/reference/Betums/Error-Korpo.md' },
    { text: '[Error-Marka]', link: '/reference/Betums/Error-Marka.md' },
    { text: '[Error-Microsite]', link: '/reference/Betums/Error-Microsite.md' },
    { text: '[Error-Plantafor]', link: '/reference/Betums/Error-Plantafor.md' },
    { text: '[Error-Repair]', link: '/reference/Betums/Error-Repair.md' },
    { text: '[Error-Rope]', link: '/reference/Betums/Error-Rope.md' },
    { text: '[Error-Spade]', link: '/reference/Betums/Error-Spade.md' },
    { text: '[Error-Truck]', link: '/reference/Betums/Error-Truck.md' },
    { text: '[Eval-Flora]', link: '/reference/Betums/Eval-Flora.md' },
    { text: '[Eversion-<soma>Base</soma>]', link: '/reference/Betums/Eversion-Base.md' },
    { text: '[ExRotation-<soma>Base</soma>]', link: '/reference/Betums/ExRotation-Base.md' },
    { text: '[ExRotation-Brazo]', link: '/reference/Betums/ExRotation-Brazo.md' },
    { text: '[Extension-Brazo]', link: '/reference/Betums/Extension-Brazo.md' },
    { text: '[Extension-Head-Neck]', link: '/reference/Betums/Extension-Head-Neck.md' },
    { text: '[Fall-Korpo]', link: '/reference/Betums/Fall-Korpo.md' },
    { text: '[Fastener-Moton]', link: '/reference/Betums/Fastener-Moton.md' },
    { text: '[FingerKontakt]', link: '/reference/Betums/FingerKontakt.md' },
    { text: '[Fingertip-Site]', link: '/reference/Betums/Fingertip-Site.md' },
    { text: '[FingertipKontakt]', link: '/reference/Betums/FingertipKontakt.md' },
    { text: '[Flexion-<soma>Base</soma>]', link: '/reference/Betums/Flexion-Base.md' },
    { text: '[Flexion-Brazo]', link: '/reference/Betums/Flexion-Brazo.md' },
    { text: '[Flexion-Flora]', link: '/reference/Betums/Flexion-Flora.md' },
    { text: '[Flexion-Head-Neck]', link: '/reference/Betums/Flexion-Head-Neck.md' },
    { text: '[Flexion-Korpo-Spine]', link: '/reference/Betums/Flexion-Korpo-Spine.md' },
    { text: '[Flexion-Mano-Finger]', link: '/reference/Betums/Flexion-Mano-Finger.md' },
    { text: '[Flora-Identification]', link: '/reference/Betums/Flora-Identification.md' },
    { text: '[Flora-Stem-Site]', link: '/reference/Betums/Flora-Stem-Site.md' },
    { text: '[Flower-Site]', link: '/reference/Betums/Flower-Site.md' },
    { text: '[Glove-Mano]', link: '/reference/Betums/Glove-Mano.md' },
    { text: '[Glove-Moton]', link: '/reference/Betums/Glove-Moton.md' },
    { text: '[Glove-Off]', link: '/reference/Betums/Glove-Off.md' },
    { text: '[Glove-On]', link: '/reference/Betums/Glove-On.md' },
    { text: '[Glove-Preserve]', link: '/reference/Betums/Glove-Preserve.md' },
    { text: '[Glove-Site]', link: '/reference/Betums/Glove-Site.md' },
    { text: '[Hat-Aktion]', link: '/reference/Betums/Hat-Aktion.md' },
    { text: '[Hat-Brim-Site]', link: '/reference/Betums/Hat-Brim-Site.md' },
    { text: '[Head-Away-Rotate]', link: '/reference/Betums/Head-Away-Rotate.md' },
    { text: '[Hood-Site]', link: '/reference/Betums/Hood-Site.md' },
    { text: '[Hook-Brazo]', link: '/reference/Betums/Hook-Brazo.md' },
    { text: '[InRotation-<soma>Base</soma>]', link: '/reference/Betums/InRotation-Base.md' },
    { text: '[InRotation-Brazo]', link: '/reference/Betums/InRotation-Brazo.md' },
    { text: '[Inversion-<soma>Base</soma>]', link: '/reference/Betums/Inversion-Base.md' },
    { text: '[Jump-Korpo]', link: '/reference/Betums/Jump-Korpo.md' },
    { text: '[Karabiner-Aktion]', link: '/reference/Betums/Karabiner-Aktion.md' },
    { text: '[Karabiner-Basket-Site]', link: '/reference/Betums/Karabiner-Basket-Site.md' },
    { text: '[Karabiner-Gate-Site]', link: '/reference/Betums/Karabiner-Gate-Site.md' },
    { text: '[Karabiner-Off]', link: '/reference/Betums/Karabiner-Off.md' },
    { text: '[Karabiner-On]', link: '/reference/Betums/Karabiner-On.md' },
    { text: '[Karabiner-Site]', link: '/reference/Betums/Karabiner-Site.md' },
    { text: '[Karabiner-Spine-Site]', link: '/reference/Betums/Karabiner-Spine-Site.md' },
    { text: '[Kit-Aktion]', link: '/reference/Betums/Kit-Aktion.md' },
    { text: '[Kit-Handle-Site]', link: '/reference/Betums/Kit-Handle-Site.md' },
    { text: '[Kit-Off]', link: '/reference/Betums/Kit-Off.md' },
    { text: '[Kit-On]', link: '/reference/Betums/Kit-On.md' },
    { text: '[Kit-Preserve]', link: '/reference/Betums/Kit-Preserve.md' },
    { text: '[Kit-Site]', link: '/reference/Betums/Kit-Site.md' },
    { text: '[Kit-Strap-Site]', link: '/reference/Betums/Kit-Strap-Site.md' },
    { text: '[Klose-<soma>Base</soma>]', link: '/reference/Betums/Klose-Base.md' },
    { text: '[Klose-Drag-Mano]', link: '/reference/Betums/Klose-Drag-Mano.md' },
    { text: '[Klose-Hammer-Mano]', link: '/reference/Betums/Klose-Hammer-Mano.md' },
    { text: '[Klose-Mano]', link: '/reference/Betums/Klose-Mano.md' },
    { text: '[Kneel-<soma>Base</soma>]', link: '/reference/Betums/Kneel-Base.md' },
    { text: '[Knot-Flora]', link: '/reference/Betums/Knot-Flora.md' },
    { text: '[Knuckle-Site]', link: '/reference/Betums/Knuckle-Site.md' },
    { text: '[Kompakt-Brazo]', link: '/reference/Betums/Kompakt-Brazo.md' },
    { text: '[Kompakt-Korpo]', link: '/reference/Betums/Kompakt-Korpo.md' },
    { text: '[Kompakt-Mano]', link: '/reference/Betums/Kompakt-Mano.md' },
    { text: '[Kompress-Brazo]', link: '/reference/Betums/Kompress-Brazo.md' },
    { text: '[Kompress-Mano]', link: '/reference/Betums/Kompress-Mano.md' },
    { text: '[Kontakt-Base-Heel]', link: '/reference/Betums/Kontakt-Base-Heel.md' },
    { text: '[Kontakt-Base-Knee]', link: '/reference/Betums/Kontakt-Base-Knee.md' },
    { text: '[Kontakt-Base-Lateral]', link: '/reference/Betums/Kontakt-Base-Lateral.md' },
    { text: '[Kontakt-Base-Medial]', link: '/reference/Betums/Kontakt-Base-Medial.md' },
    { text: '[Kontakt-<soma>Base</soma>]', link: '/reference/Betums/Kontakt-Base.md' },
    { text: '[Kontakt-BaseToe]', link: '/reference/Betums/Kontakt-BaseToe.md' },
    { text: '[Kontakt-BicepsAnterior-Log]', link: '/reference/Betums/Kontakt-BicepsAnterior-Log.md' },
    { text: '[Kontakt-BootArch]', link: '/reference/Betums/Kontakt-BootArch.md' },
    { text: '[Kontakt-BootDorsi]', link: '/reference/Betums/Kontakt-BootDorsi.md' },
    { text: '[Kontakt-BrazoBiceps]', link: '/reference/Betums/Kontakt-BrazoBiceps.md' },
    { text: '[Kontakt-BrazoDeltoid]', link: '/reference/Betums/Kontakt-BrazoDeltoid.md' },
    { text: '[Kontakt-BrazoElbow]', link: '/reference/Betums/Kontakt-BrazoElbow.md' },
    { text: '[Kontakt-BrazoScapula]', link: '/reference/Betums/Kontakt-BrazoScapula.md' },
    { text: '[Kontakt-BrazoTrapezius]', link: '/reference/Betums/Kontakt-BrazoTrapezius.md' },
    { text: '[Kontakt-BrazoTriceps]', link: '/reference/Betums/Kontakt-BrazoTriceps.md' },
    { text: '[Kontakt-Head]', link: '/reference/Betums/Kontakt-Head.md' },
    { text: '[Kontakt-Korpo-Latissimus]', link: '/reference/Betums/Kontakt-Korpo-Latissimus.md' },
    { text: '[Kontakt-Korpo]', link: '/reference/Betums/Kontakt-Korpo.md' },
    { text: '[Kontakt-KorpoAbdominal]', link: '/reference/Betums/Kontakt-KorpoAbdominal.md' },
    { text: '[Kontakt-Marka]', link: '/reference/Betums/Kontakt-Marka.md' },
    { text: '[Kontakt-Palm]', link: '/reference/Betums/Kontakt-Palm.md' },
    { text: '[Kontakt-PlantaforBag]', link: '/reference/Betums/Kontakt-PlantaforBag.md' },
    { text: '[Kontakt-PlantaforBuckle]', link: '/reference/Betums/Kontakt-PlantaforBuckle.md' },
    { text: '[Kontakt-PlantaforStrap]', link: '/reference/Betums/Kontakt-PlantaforStrap.md' },
    { text: '[Kontakt-SpadeBlade]', link: '/reference/Betums/Kontakt-SpadeBlade.md' },
    { text: '[Kontakt-SpadeCollar]', link: '/reference/Betums/Kontakt-SpadeCollar.md' },
    { text: '[Kontakt-SpadePlast]', link: '/reference/Betums/Kontakt-SpadePlast.md' },
    { text: '[Kontakt-SpadeTab]', link: '/reference/Betums/Kontakt-SpadeTab.md' },
    { text: '[Korpo-Hip-Hinge]', link: '/reference/Betums/Korpo-Hip-Hinge.md' },
    { text: '[Korpo-Spine-Extension]', link: '/reference/Betums/Korpo-Spine-Extension.md' },
    { text: '[Krampon-Amble-Korpo]', link: '/reference/Betums/Krampon-Amble-Korpo.md' },
    { text: '[Layer-Aktion]', link: '/reference/Betums/Layer-Aktion.md' },
    { text: '[Layer-Allo]', link: '/reference/Betums/Layer-Allo.md' },
    { text: '[Layer-Base-Aktion]', link: '/reference/Betums/Layer-Base-Aktion.md' },
    { text: '[Layer-Insulation-Aktion]', link: '/reference/Betums/Layer-Insulation-Aktion.md' },
    { text: '[Layer-Knot]', link: '/reference/Betums/Layer-Knot.md' },
    { text: '[Layer-Preserve]', link: '/reference/Betums/Layer-Preserve.md' },
    { text: '[Layer-Shell-Aktion]', link: '/reference/Betums/Layer-Shell-Aktion.md' },
    { text: '[Layer-Site]', link: '/reference/Betums/Layer-Site.md' },
    { text: '[Layering]', link: '/reference/Betums/Layering.md' },
    { text: '[Leaf-Site]', link: '/reference/Betums/Leaf-Site.md' },
    { text: '[Lean-Head]', link: '/reference/Betums/Lean-Head.md' },
    { text: '[Lean-Korpo]', link: '/reference/Betums/Lean-Korpo.md' },
    { text: '[Listen-Head]', link: '/reference/Betums/Listen-Head.md' },
    { text: '[Lito-Rough-Hidro-Site]', link: '/reference/Betums/Lito-Rough-Hidro-Site.md' },
    { text: '[Lito-Rough-Site]', link: '/reference/Betums/Lito-Rough-Site.md' },
    { text: '[Lito-Smooth-Hidro-Site]', link: '/reference/Betums/Lito-Smooth-Hidro-Site.md' },
    { text: '[Lito-Smooth-Site]', link: '/reference/Betums/Lito-Smooth-Site.md' },
    { text: '[Lock-Brazo]', link: '/reference/Betums/Lock-Brazo.md' },
    { text: '[Lock-Mano]', link: '/reference/Betums/Lock-Mano.md' },
    { text: '[Log-Audio]', link: '/reference/Betums/Log-Audio.md' },
    { text: '[Machete-Flora]', link: '/reference/Betums/Machete-Flora.md' },
    { text: '[Mano-Finger-Extension]', link: '/reference/Betums/Mano-Finger-Extension.md' },
    { text: '[Mano-Flora]', link: '/reference/Betums/Mano-Flora.md' },
    { text: '[Mano-Thumb-Aduction]', link: '/reference/Betums/Mano-Thumb-Aduction.md' },
    { text: '[Mano-Thumb-Extension]', link: '/reference/Betums/Mano-Thumb-Extension.md' },
    { text: '[ManoThumb-Flexion]', link: '/reference/Betums/ManoThumb-Flexion.md' },
    { text: '[Marka-Add]', link: '/reference/Betums/Marka-Add.md' },
    { text: '[Marka-Ballista]', link: '/reference/Betums/Marka-Ballista.md' },
    { text: '[Marka-Knot]', link: '/reference/Betums/Marka-Knot.md' },
    { text: '[Marka-Load]', link: '/reference/Betums/Marka-Load.md' },
    { text: '[Marka-Mano]', link: '/reference/Betums/Marka-Mano.md' },
    { text: '[Marka-Moton]', link: '/reference/Betums/Marka-Moton.md' },
    { text: '[Marka-Remove]', link: '/reference/Betums/Marka-Remove.md' },
    { text: '[Marka-Rip]', link: '/reference/Betums/Marka-Rip.md' },
    { text: '[Marka-Roll]', link: '/reference/Betums/Marka-Roll.md' },
    { text: '[Marka-Site]', link: '/reference/Betums/Marka-Site.md' },
    { text: '[Marka-Slot]', link: '/reference/Betums/Marka-Slot.md' },
    { text: '[Marka-Wrap]', link: '/reference/Betums/Marka-Wrap.md' },
    { text: '[MaximumProximity]', link: '/reference/Betums/MaximumProximity.md' },
    { text: '[Microsite-Aktion]', link: '/reference/Betums/Microsite-Aktion.md' },
    { text: '[Microsite-Dilate]', link: '/reference/Betums/Microsite-Dilate.md' },
    { text: '[Microsite-Enter]', link: '/reference/Betums/Microsite-Enter.md' },
    { text: '[Microsite-Eval]', link: '/reference/Betums/Microsite-Eval.md' },
    { text: '[Microsite-Klose]', link: '/reference/Betums/Microsite-Klose.md' },
    { text: '[Microsite-Marka]', link: '/reference/Betums/Microsite-Marka.md' },
    { text: '[Microsite-Proximity]', link: '/reference/Betums/Microsite-Proximity.md' },
    { text: '[Microsite-Select]', link: '/reference/Betums/Microsite-Select.md' },
    { text: '[Microsite-Skreef]', link: '/reference/Betums/Microsite-Skreef.md' },
    { text: '[MineralSoil-Hidro-Site]', link: '/reference/Betums/MineralSoil-Hidro-Site.md' },
    { text: '[MineralSoil-Site]', link: '/reference/Betums/MineralSoil-Site.md' },
    { text: '[Moton-Flora]', link: '/reference/Betums/Moton-Flora.md' },
    { text: '[Moton-Head]', link: '/reference/Betums/Moton-Head.md' },
    { text: '[Moton-Korpo]', link: '/reference/Betums/Moton-Korpo.md' },
    { text: '[Moton-Mano]', link: '/reference/Betums/Moton-Mano.md' },
    { text: '[Neon-Eval]', link: '/reference/Betums/Neon-Eval.md' },
    { text: '[Neon-Insert]', link: '/reference/Betums/Neon-Insert.md' },
    { text: '[Neon-Load]', link: '/reference/Betums/Neon-Load.md' },
    { text: '[Neon-Mano]', link: '/reference/Betums/Neon-Mano.md' },
    { text: '[Neon-Moton]', link: '/reference/Betums/Neon-Moton.md' },
    { text: '[Neon-Site]', link: '/reference/Betums/Neon-Site.md' },
    { text: '[Onda-<soma>Base</soma>]', link: '/reference/Betums/Onda-Base.md' },
    { text: '[Onda-Brazo]', link: '/reference/Betums/Onda-Brazo.md' },
    { text: '[Orbit-Brazo]', link: '/reference/Betums/Orbit-Brazo.md' },
    { text: '[Orbit-Korpo]', link: '/reference/Betums/Orbit-Korpo.md' },
    { text: '[Orbit-Mano]', link: '/reference/Betums/Orbit-Mano.md' },
    { text: '[Palm-Klose]', link: '/reference/Betums/Palm-Klose.md' },
    { text: '[Palm-Site]', link: '/reference/Betums/Palm-Site.md' },
    { text: '[Parry-Flora]', link: '/reference/Betums/Parry-Flora.md' },
    { text: '[PebbleSoil-Hidro-Site]', link: '/reference/Betums/PebbleSoil-Hidro-Site.md' },
    { text: '[PebbleSoil-Site]', link: '/reference/Betums/PebbleSoil-Site.md' },
    { text: '[Periderm-Hidro-Site]', link: '/reference/Betums/Periderm-Hidro-Site.md' },
    { text: '[Periderm-Site]', link: '/reference/Betums/Periderm-Site.md' },
    { text: '[Piece-Density]', link: '/reference/Betums/Piece-Density.md' },
    { text: '[Plantafor-Adjust]', link: '/reference/Betums/Plantafor-Adjust.md' },
    { text: '[Plantafor-BackBag-Moton]', link: '/reference/Betums/Plantafor-BackBag-Moton.md' },
    { text: '[Plantafor-Bag-Aspis]', link: '/reference/Betums/Plantafor-Bag-Aspis.md' },
    { text: '[Plantafor-Bag-In]', link: '/reference/Betums/Plantafor-Bag-In.md' },
    { text: '[Plantafor-Bag-Lift]', link: '/reference/Betums/Plantafor-Bag-Lift.md' },
    { text: '[Plantafor-Bag-Purga]', link: '/reference/Betums/Plantafor-Bag-Purga.md' },
    { text: '[Plantafor-Drag]', link: '/reference/Betums/Plantafor-Drag.md' },
    { text: '[Plantafor-Lift]', link: '/reference/Betums/Plantafor-Lift.md' },
    { text: '[Plantafor-Moton]', link: '/reference/Betums/Plantafor-Moton.md' },
    { text: '[Plantafor-Off]', link: '/reference/Betums/Plantafor-Off.md' },
    { text: '[Plantafor-On]', link: '/reference/Betums/Plantafor-On.md' },
    { text: '[Plantafor-Pop]', link: '/reference/Betums/Plantafor-Pop.md' },
    { text: '[Plantafor-Preserve]', link: '/reference/Betums/Plantafor-Preserve.md' },
    { text: '[Plantafor-Site]', link: '/reference/Betums/Plantafor-Site.md' },
    { text: '[Plantafor-Transport]', link: '/reference/Betums/Plantafor-Transport.md' },
    { text: '[PlantarFlexion-<soma>Base</soma>]', link: '/reference/Betums/PlantarFlexion-Base.md' },
    { text: '[Plast-Site]', link: '/reference/Betums/Plast-Site.md' },
    { text: '[Plot-Density]', link: '/reference/Betums/Plot-Density.md' },
    { text: '[Poales-Hidro-Site]', link: '/reference/Betums/Poales-Hidro-Site.md' },
    { text: '[Poales-Site]', link: '/reference/Betums/Poales-Site.md' },
    { text: '[Pocket-Moton]', link: '/reference/Betums/Pocket-Moton.md' },
    { text: '[Poke-Mano]', link: '/reference/Betums/Poke-Mano.md' },
    { text: '[Pop-<soma>Base</soma>]', link: '/reference/Betums/Pop-Base.md' },
    { text: '[Pop-Brazo]', link: '/reference/Betums/Pop-Brazo.md' },
    { text: '[Pop-Flora]', link: '/reference/Betums/Pop-Flora.md' },
    { text: '[Pop-Korpo]', link: '/reference/Betums/Pop-Korpo.md' },
    { text: '[Pop-Mano]', link: '/reference/Betums/Pop-Mano.md' },
    { text: '[Posture-Korpo]', link: '/reference/Betums/Posture-Korpo.md' },
    { text: '[Prep-Mound]', link: '/reference/Betums/Prep-Mound.md' },
    { text: '[Prep-Skreef]', link: '/reference/Betums/Prep-Skreef.md' },
    { text: '[Prep-Trench]', link: '/reference/Betums/Prep-Trench.md' },
    { text: '[Protraction-Head]', link: '/reference/Betums/Protraction-Head.md' },
    { text: '[Proximity-Minimum]', link: '/reference/Betums/Proximity-Minimum.md' },
    { text: '[Proximity-Optimal]', link: '/reference/Betums/Proximity-Optimal.md' },
    { text: '[Punch-Klose]', link: '/reference/Betums/Punch-Klose.md' },
    { text: '[Radior-Add]', link: '/reference/Betums/Radior-Add.md' },
    { text: '[Radior-Moton]', link: '/reference/Betums/Radior-Moton.md' },
    { text: '[Radior-Off]', link: '/reference/Betums/Radior-Off.md' },
    { text: '[Radior-Preserve]', link: '/reference/Betums/Radior-Preserve.md' },
    { text: '[Radior-Site]', link: '/reference/Betums/Radior-Site.md' },
    { text: '[RainShell-Aktion]', link: '/reference/Betums/RainShell-Aktion.md' },
    { text: '[Reach-<soma>Base</soma>]', link: '/reference/Betums/Reach-Base.md' },
    { text: '[Reach-Korpo]', link: '/reference/Betums/Reach-Korpo.md' },
    { text: '[RedRotSoil-Hidro-Site]', link: '/reference/Betums/RedRotSoil-Hidro-Site.md' },
    { text: '[RedRotSoil-Site]', link: '/reference/Betums/RedRotSoil-Site.md' },
    { text: '[Repair-Moton]', link: '/reference/Betums/Repair-Moton.md' },
    { text: '[Repair-Sewing-Aktion]', link: '/reference/Betums/Repair-Sewing-Aktion.md' },
    { text: '[Repair-Thread-Knot]', link: '/reference/Betums/Repair-Thread-Knot.md' },
    { text: '[Retraction-Head]', link: '/reference/Betums/Retraction-Head.md' },
    { text: '[Rim-Site]', link: '/reference/Betums/Rim-Site.md' },
    { text: '[Road]', link: '/reference/Betums/Road.md' },
    { text: '[Root-Site]', link: '/reference/Betums/Root-Site.md' },
    { text: '[Rope-Knot copy]', link: '/reference/Betums/Rope-Knot copy.md' },
    { text: '[Rope-Knot]', link: '/reference/Betums/Rope-Knot.md' },
    { text: '[Rotate-Korpo]', link: '/reference/Betums/Rotate-Korpo.md' },
    { text: '[RunStart]', link: '/reference/Betums/RunStart.md' },
    { text: '[SandSoil-Hidro-Site]', link: '/reference/Betums/SandSoil-Hidro-Site.md' },
    { text: '[SandSoil-Site]', link: '/reference/Betums/SandSoil-Site.md' },
    { text: '[Shaft-Site]', link: '/reference/Betums/Shaft-Site.md' },
    { text: '[SiltSoil-Hidro-Site]', link: '/reference/Betums/SiltSoil-Hidro-Site.md' },
    { text: '[SiltSoil-Site]', link: '/reference/Betums/SiltSoil-Site.md' },
    { text: '[Silvi-Site]', link: '/reference/Betums/Silvi-Site.md' },
    { text: '[Skreef-<soma>Base</soma>]', link: '/reference/Betums/Skreef-Base.md' },
    { text: '[Skreef-Mano]', link: '/reference/Betums/Skreef-Mano.md' },
    { text: '[Slap-Klose]', link: '/reference/Betums/Slap-Klose.md' },
    { text: '[Slash-Audio]', link: '/reference/Betums/Slash-Audio.md' },
    { text: '[Sleeve-Site]', link: '/reference/Betums/Sleeve-Site.md' },
    { text: '[Slide-Mano]', link: '/reference/Betums/Slide-Mano.md' },
    { text: '[Slot-Flora]', link: '/reference/Betums/Slot-Flora.md' },
    { text: '[Slot-Korpo]', link: '/reference/Betums/Slot-Korpo.md' },
    { text: '[Snap-Flora-Branch]', link: '/reference/Betums/Snap-Flora-Branch.md' },
    { text: '[Snap-Flora]', link: '/reference/Betums/Snap-Flora.md' },
    { text: '[Soil-Audio]', link: '/reference/Betums/Soil-Audio.md' },
    { text: '[Soil-Cream]', link: '/reference/Betums/Soil-Cream.md' },
    { text: '[Spade-Amble]', link: '/reference/Betums/Spade-Amble.md' },
    { text: '[Spade-Ankor]', link: '/reference/Betums/Spade-Ankor.md' },
    { text: '[Spade-Aspis]', link: '/reference/Betums/Spade-Aspis.md' },
    { text: '[Spade-Audio]', link: '/reference/Betums/Spade-Audio.md' },
    { text: '[Spade-Ballista]', link: '/reference/Betums/Spade-Ballista.md' },
    { text: '[Spade-Drag]', link: '/reference/Betums/Spade-Drag.md' },
    { text: '[Spade-Hook]', link: '/reference/Betums/Spade-Hook.md' },
    { text: '[Spade-Klose]', link: '/reference/Betums/Spade-Klose.md' },
    { text: '[Spade-Machete]', link: '/reference/Betums/Spade-Machete.md' },
    { text: '[Spade-Mano]', link: '/reference/Betums/Spade-Mano.md' },
    { text: '[Spade-ManoAllo]', link: '/reference/Betums/Spade-ManoAllo.md' },
    { text: '[Spade-Moton]', link: '/reference/Betums/Spade-Moton.md' },
    { text: '[Spade-MuscleUp]', link: '/reference/Betums/Spade-MuscleUp.md' },
    { text: '[Spade-Neonektomi]', link: '/reference/Betums/Spade-Neonektomi.md' },
    { text: '[Spade-Onda]', link: '/reference/Betums/Spade-Onda.md' },
    { text: '[Spade-Open]', link: '/reference/Betums/Spade-Open.md' },
    { text: '[Spade-Pogo]', link: '/reference/Betums/Spade-Pogo.md' },
    { text: '[Spade-Poke]', link: '/reference/Betums/Spade-Poke.md' },
    { text: '[Spade-Pop]', link: '/reference/Betums/Spade-Pop.md' },
    { text: '[Spade-Post]', link: '/reference/Betums/Spade-Post.md' },
    { text: '[Spade-Preserve]', link: '/reference/Betums/Spade-Preserve.md' },
    { text: '[Spade-Purga]', link: '/reference/Betums/Spade-Purga.md' },
    { text: '[Spade-Rotate]', link: '/reference/Betums/Spade-Rotate.md' },
    { text: '[Spade-Site]', link: '/reference/Betums/Spade-Site.md' },
    { text: '[Spade-Skreef]', link: '/reference/Betums/Spade-Skreef.md' },
    { text: '[Spade-Slap]', link: '/reference/Betums/Spade-Slap.md' },
    { text: '[Spade-Spike]', link: '/reference/Betums/Spade-Spike.md' },
    { text: '[Spade-Stall]', link: '/reference/Betums/Spade-Stall.md' },
    { text: '[Spade-Stomp]', link: '/reference/Betums/Spade-Stomp.md' },
    { text: '[Spade-Test]', link: '/reference/Betums/Spade-Test.md' },
    { text: '[Spade-Transport]', link: '/reference/Betums/Spade-Transport.md' },
    { text: '[SpadeCollar-Mano]', link: '/reference/Betums/SpadeCollar-Mano.md' },
    { text: '[SpadePlast-Dimano]', link: '/reference/Betums/SpadePlast-Dimano.md' },
    { text: '[SpadePlast-Mano]', link: '/reference/Betums/SpadePlast-Mano.md' },
    { text: '[Spike-Korpo]', link: '/reference/Betums/Spike-Korpo.md' },
    { text: '[Stand-Korpo-Up]', link: '/reference/Betums/Stand-Korpo-Up.md' },
    { text: '[Stand-Korpo]', link: '/reference/Betums/Stand-Korpo.md' },
    { text: '[Stem-Site]', link: '/reference/Betums/Stem-Site.md' },
    { text: '[Step-Into]', link: '/reference/Betums/Step-Into.md' },
    { text: '[Step-Over]', link: '/reference/Betums/Step-Over.md' },
    { text: '[Stomp-<soma>Base</soma>]', link: '/reference/Betums/Stomp-Base.md' },
    { text: '[Stump-Site]', link: '/reference/Betums/Stump-Site.md' },
    { text: '[Suspender-Site]', link: '/reference/Betums/Suspender-Site.md' },
    { text: '[Tab-Site]', link: '/reference/Betums/Tab-Site.md' },
    { text: '[Tangent-Korpo]', link: '/reference/Betums/Tangent-Korpo.md' },
    { text: '[Tarp-Kompakt]', link: '/reference/Betums/Tarp-Kompakt.md' },
    { text: '[Tarp-Off]', link: '/reference/Betums/Tarp-Off.md' },
    { text: '[Tarp-On]', link: '/reference/Betums/Tarp-On.md' },
    { text: '[Tibior-Mano]', link: '/reference/Betums/Tibior-Mano.md' },
    { text: '[Tibior-Off]', link: '/reference/Betums/Tibior-Off.md' },
    { text: '[Tibior-On]', link: '/reference/Betums/Tibior-On.md' },
    { text: '[Tibior-Preservation]', link: '/reference/Betums/Tibior-Preservation.md' },
    { text: '[Tibior-Site]', link: '/reference/Betums/Tibior-Site.md' },
    { text: '[Toggle-Brazo]', link: '/reference/Betums/Toggle-Brazo.md' },
    { text: '[Trot-Korpo]', link: '/reference/Betums/Trot-Korpo.md' },
    { text: '[Truck-Sit]', link: '/reference/Betums/Truck-Sit.md' },
    { text: '[Truck-Sleep]', link: '/reference/Betums/Truck-Sleep.md' },
    { text: '[Twist-Korpo]', link: '/reference/Betums/Twist-Korpo.md' },
    { text: '[Under-Korpo]', link: '/reference/Betums/Under-Korpo.md' },
    { text: '[Velcro-Site]', link: '/reference/Betums/Velcro-Site.md' },
    { text: '[Weave-Flora-Branch]', link: '/reference/Betums/Weave-Flora-Branch.md' },
    { text: '[WindShell-Moton]', link: '/reference/Betums/WindShell-Moton.md' },
    { text: '[Xilem-Hidros-Site]', link: '/reference/Betums/Xilem-Hidros-Site.md' },
    { text: '[Xilem-Site]', link: '/reference/Betums/Xilem-Site.md' },
    { text: '[Zelcro-Aktion]', link: '/reference/Betums/Zelcro-Aktion.md' },
    { text: '[Zipper-Aktion]', link: '/reference/Betums/Zipper-Aktion.md' },
    { text: '[Zipper-Site]', link: '/reference/Betums/Zipper-Site.md' },




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

