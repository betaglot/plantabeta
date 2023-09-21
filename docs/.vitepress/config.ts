import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Plantbeta',
    description: 'The elements ',
    lastUpdated: true,
    base: '/plantbeta/',
    ignoreDeadLinks: true,
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
      ['link', { rel: "manifest", href: "/site.webmanifest"}],],
   themeConfig: {
      outline: [2,4],
      logo: 'android-chrome-512x512.png',
      socialLinks: [
        { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
        { icon: 'instagram', link: 'https://www.instagram.com/the_plantbeta/' }
      ],
      footer: {
        message: '',
        copyright: 'Copyright Plantbeta © 2023-present'
      },
      search: {
        provider: 'local'
      },

      siteTitle: 'Plantbeta',
        nav: nav(),

      sidebar: {
        '/guide/': sidebarGuide(),
        '/reference/': sidebarReference(),
        '/tests/': sidebarTests(),
        '/development/': sidebarDevelopment(),
        '/sponsor/' : sidebarSponsor(),
      }
  }
})

function sidebarSponsor() {
  return [
    { text: 'How to be a Sponsor', link: '/sponsor/Overview' },
  ]
}

function head(){
  return []
}

function nav(){
  return [
    { text: 'Guide', 
      link: '/guide/What/WhatPlantbeta', 
      activeMatch: '/guide/' },
    {
      text: 'Reference',
      link: '/reference/ReferenceOverview',
      activeMatch: '/reference/'
    },
    {
      text: 'Tests',
      link: '/tests/TestsOverview',
      activeMatch: '/tests/'
    },
    {
      text: 'Development',
      link: 'development/DevelopmentOverview',
      activeMatch: '/development/'
    },
    {
      text: 'Sponsors',
      link: '/sponsor/Overview',
      activeMatch: '/sponsor/'
    },
    
    // {
    //   text: 'Apply',
    //   link: ''
    // }

  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Tree Planting?', link: '/guide/What/WhatTreePlanting'},
        { text: 'What is an Element?', link: '/guide/What/WhatElement'},
        { text: 'What is Plantbeta?', link: '/guide/What/WhatPlantbeta' },
        { text: 'Getting Started', link: '/guide/GettingStarted' },  
        { text: 'Website Navigation', link: '/guide/How/Navigation'}    
      ]
    },
    {
      text: 'Objectives', collapsed: false, items: [
        { text: '🔥🌲🔥 Replant Burnt Environments', link: '/guide/Why/Wildfire'},
        { text: '🟠 Reduce Injury', link: '/guide/Why/Injury'},
        { text: '🔺 Increase Productivity', link: '/guide/Why/Productivity'},
        { text: '🔷 Better Communication', link: '/guide/Why/Communication'},
        { text: '💜 Steepen Learning Curve', link: '/guide/Why/LearningCurve'},
        { text: '💲 Increase Profit', link: '/guide/Why/Company'}     
      ]
    },
    { text: 'Planter Guide', collapsed: false, items: [
      { text: 'Potential Planter', link: '/guide/Who/PotentialPlanter'},
      { text: 'Rookie Planter', link: '/guide/Who/RookiePlanter'},
      { text: 'Experienced Planter', link: '/guide/Who/ExperiencedPlanter'},
      { text: 'Planter Supervisor', link: '/guide/Who/PlanterSupervisor'},
      { text: 'Planter Instructor', link: '/guide/Who/PlanterInstructor'}
    ]},
    { text: 'Go to Reference', link: '/reference/Overview'},
  ]
}

function sidebarReference() {
  return [
    {text: 'Go to Guide', link: '/guide/What/WhatPlantbeta'},
    {text: 'How to Use Reference', link: '/reference/Overview'},
    { text: '🟩 Environment', collapsed: true, items: [
      { text: '🟩 Environment Overview', link: '/reference/Environment/EnvironmentOverview'},
      { text: '🟩 Area', collapsed: true, items: [
        { text: '🟩 Area Overview', link: '/reference/Environment/Area/Overview'},
        { text: '🟩 PocketArea', link: '/reference/Environment/Area/PocketArea'},
        { text: '🟩 RiparianArea', link: '/reference/Environment/Area/RiparianArea'},
        { text: '🟩 RockCapArea', link: '/reference/Environment/Area/RockCapArea'},
        { text: '🟩 SlashPileArea', link: '/reference/Environment/Area/SlashPileArea'},
      ]},
      { text: '🟩 Block', collapsed: true, items: [
        { text: '🟩 Block Overview', link: '/reference/Environment/Block/Overview'},
        { text: '🟩 FillBlock', link: '/reference/Environment/Block/FillBlock'},
        { text: '🟩 Road', link: '/reference/Environment/Block/Road'},
      ]},
      { text: '🟩 Density', collapsed: true, items: [
        { text: '🟩 Density Overview', link: '/reference/Environment/Density/Overview'},
        { text: '🟩 Plot', link: '/reference/Environment/Density/Plot'},
      
      ]},
      { text: '🟩 EnvironmentSpeed', collapsed: true, items: [
        { text: '🟩 EnvironmentSpeed Overview', link: '/reference/Environment/EnvironmentSpeed/Overview'},
        { text: '🟩 FastEnvironment', link: '/reference/Environment/EnvironmentSpeed/FastEnvironment'},
        { text: '🟩 SlowEnvironment', link: '/reference/Environment/EnvironmentSpeed/SlowEnvironment'},
      ]},
      { text: '🟩 Obstacle', collapsed: true, items: [
        { text: '🟩 Obstacle Overview', link: '/reference/Environment/Obstacle/Overview'},
        { text: '🟩 LogObstacle', link: '/reference/Environment/Obstacle/LogObstacle'},
        { text: '🟩 RockObstacle', link: '/reference/Environment/Obstacle/RockObstacle'},
        { text: '🟩 StumpObstacle', link: '/reference/Environment/Obstacle/StumpObstacle'},
      ]},
      { text: '🟩 Piece', collapsed: true, items: [
        { text: '🟩 Piece Overview', link: '/reference/Environment/Piece/Overview'},
        { text: '🟩 PieceTopography', link: '/reference/Environment/Piece/PieceTopography'},
      ]},
      { text: '🟩 Prep', collapsed: true, items: [
        { text: '🟩 PrepEnvironment Overview', link: '/reference/Environment/Prep/Overview'},
        { text: '🟩 MoundEnvironment', link: '/reference/Environment/Prep/MoundEnvironment'},
        { text: '🟩 TrenchEnvironment', link: '/reference/Environment/Prep/TrenchEnvironment'},
      ]},
      { text: '🟩 Raw', collapsed: true, items: [
        { text: '🟩 RawEnvironment Overview', link: '/reference/Environment/Raw/Overview'},
        { text: '🟩 BurnPit', link: '/reference/Environment/Raw/BurnPit'},
        { text: '🟩 BurntEnvironment', link: '/reference/Environment/Raw/BurntEnvironment'},
        
      ]},
      { text: '🟩 Slash', collapsed: true, items: [
        { text: '🟩 Slash Overview', link: '/reference/Environment/Slash/Overview'},
        { text: '🟩 BurnPileSlash', link: '/reference/Environment/Slash/BurnPileSlash'},
        { text: '🟩 HighSlash', link: '/reference/Environment/Slash/HighSlash'},
        { text: '🟩 LowSlash', link: '/reference/Environment/Slash/LowSlash'},
        { text: '🟩 WetSlash', link: '/reference/Environment/Slash/WetSlash'},
      ]},
      { text: '🟩 Soil', collapsed: true, items: [
        { text: '🟩 Soil Overview', link: '/reference/Environment/Soil/Overview'},
        { text: '🟩 ClaySoil', link: '/reference/Environment/Soil/ClaySoil'},
        { text: '🟩 DrySoil', link: '/reference/Environment/Soil/DrySoil'},
        { text: '🟩 GravelSoil', link: '/reference/Environment/Soil/GravelSoil'},
        { text: '🟩 MineralSoil', link: '/reference/Environment/Soil/MineralSoil'},
        { text: '🟩 RedRot', link: '/reference/Environment/Soil/RedRot'},
        { text: '🟩 SandSoil', link: '/reference/Environment/Soil/SandSoil'},
        { text: '🟩 WetSoil', link: '/reference/Environment/Soil/WetSoil'},
  
      ]},
      { text: '🟩 Weather', collapsed: true, items: [
        { text: '🟩 Weather Overview', link: '/reference/Environment/Weather/Overview'},
      ]},
    ]
    },
    { text: '🟠 Move', collapsed: true, items: [
        { text: '🟠 Move Overview', link: '/reference/Move/MoveOverview'},
        { text: '🟠 ArmMove', collapsed: true, items: [
          { text: '🟠 ArmMove Overview', link: '/reference/Move/ArmMove/Overview'},
          { text: '🟠 ArmBlock', link: '/reference/Move/ArmMove/ArmBlock'},
          { text: '🟠 ArmProp', link: '/reference/Move/ArmMove/ArmProp'},
          { text: '🟠 ArmSwing', link: '/reference/Move/ArmMove/ArmSwing'},
          { text: '🟠 ArmWalk', link: '/reference/Move/ArmMove/ArmWalk'},
          { text: '🟠 ArmFlag', link: '/reference/Move/ArmMove/ArmFlag'},
          ]
        },
        { text: '🟠 BodyMove', collapsed: true, items: [
          { text: '🟠 BodyMove Overview', link: '/reference/Move/BodyMove/Overview'},
          { text: '🟠 BodyAbsorb', link: '/reference/Move/BodyMove/BodyAbsorb'},
          { text: '🟠 BodyBend', link: '/reference/Move/BodyMove/BodyBend'},
          { text: '🟠 BodyLean', link: '/reference/Move/BodyMove/BodyLean'},
          { text: '🟠 BodyRevolve', link: '/reference/Move/BodyMove/BodyRevolve'},
          { text: '🟠 BodyRotate', link: '/reference/Move/BodyMove/BodyRotate'},
          { text: '🟠 BodySlot', link: '/reference/Move/BodyMove/BodySlot'},
          { text: '🟠 Fall', link: '/reference/Move/BodyMove/Fall'},
        ]},
        { text: '🟠 CacheMove', collapsed: true, items: [
          { text: '🟠 CacheMove Overview', link: '/reference/Move/CacheMove/Overview'},
          { text: '🟠 GarbageBox', link: '/reference/Move/CacheMove/GarbageBox'},
          { text: '🟠 TarpOff', link: '/reference/Move/CacheMove/TarpOff'},
          { text: '🟠 TarpOn', link: '/reference/Move/CacheMove/TarpOn'},
        ]},
        { text: '🟠 ClothingMove', collapsed: true, items: [
          { text: '🟠 ClothingMove Overview', link: '/reference/Move/ClothingMove/Overview'},
          { text: '🟠 Button', link: '/reference/Move/ClothingMove/Button'},
          { text: '🟠 ClothingLayer', link: '/reference/Move/ClothingMove/ClothingLayer'},
          { text: '🟠 RemoveMud', link: '/reference/Move/ClothingMove/RemoveMud'},
          { text: '🟠 ZipperMove', link: '/reference/Move/ClothingMove/ZipperMove'},
  
        ]},
        { text: '🟠 FootMove', collapsed: true, items: [
          { text: '🟠 FootMove Overview', link: '/reference/Move/FootMove/Overview'},
          { text: '🟠 FootArchSmear', link: '/reference/Move/FootMove/FootArchSmear'},
          { text: '🟠 FootClose', link: '/reference/Move/FootMove/FootClose'},
          { text: '🟠 FootDig', link: '/reference/Move/FootMove/FootDig'},
          { text: '🟠 FootDorsiflexion', link: '/reference/Move/FootMove/FootDorsiflexion'},
          { text: '🟠 FootDrag', link: '/reference/Move/FootMove/FootDrag'},
          { text: '🟠 FootEversion', link: '/reference/Move/FootMove/FootEversion'},
          { text: '🟠 FootInversion', link: '/reference/Move/FootMove/FootInversion'},
          { text: '🟠 FootScreef', link: '/reference/Move/FootMove/FootScreef'},
          { text: '🟠 PlantarFlexion', link: '/reference/Move/FootMove/PlantarFlexion'},
        ]},

        { text: '🟠 HandMove', collapsed: true, items: [
          { text: '🟠 HandMove Overview', link: '/reference/Move/HandMove/Overview'},
          { text: '🟠 BagGrip', link: '/reference/Move/HandMove/BagGrip'},
          { text: '🟠 BoxGrip', link: '/reference/Move/HandMove/BoxGrip'},
          { text: '🟠 BranchGrip', link: '/reference/Move/HandMove/BranchGrip'},
          { text: '🟠 BranchSnapGrip', link: '/reference/Move/HandMove/BranchSnapGrip'},
          { text: '🟠 HandClose', link: '/reference/Move/HandMove/HandClose'},
          { text: '🟠 HandPoke', link: '/reference/Move/HandMove/HandPoke'},
          { text: '🟠 HandScreef', link: '/reference/Move/HandMove/HandScreef'},
          { text: '🟠 InsertTree', link: '/reference/Move/HandMove/InsertTree'},
          { text: '🟠 SpadeHandleGrip', link: '/reference/Move/HandMove/SpadeHandleGrip'},
          { text: '🟠 SpadeShaftGrip', link: '/reference/Move/HandMove/SpadeShaftGrip'},
          { text: '🟠 TreeGrip', link: '/reference/Move/HandMove/Overview'},
          { text: '🟠 TreeTestGrip', link: '/reference/Move/HandMove/TreeTestGrip'},
        ]},
    
        { text: '🟠 HeadMove', collapsed: true, items: [
          { text: '🟠 HeadMove Overview', link: '/reference/Move/HeadMove/Overview'},
          { text: '🟠 FocusLook', link: '/reference/Move/HeadMove/FocusLook'},
          { text: '🟠 HeadProtraction', link: '/reference/Move/HeadMove/HeadProtraction'},
          { text: '🟠 HeadRetraction', link: '/reference/Move/HeadMove/HeadRetraction'},
          { text: '🟠 HeadTiltIntoWind', link: '/reference/Move/HeadMove/HeadTiltIntoWind'},
          { text: '🟠 Hearing', link: '/reference/Move/HeadMove/Hearing'},
          { text: '🟠 LookAway', link: '/reference/Move/HeadMove/LookAway'},
          { text: '🟠 NeckExtension', link: '/reference/Move/HeadMove/NeckExtension'},
        ]},
        { text: '🟠 HoleMove', collapsed: true, items: [
          { text: '🟠 HoleMove Overview', link: '/reference/Move/HoleMove/Overview'},
          { text: '🟠 HoleClose', link: '/reference/Move/HoleMove/HoleClose'},
          { text: '🟠 HoleExpand', link: '/reference/Move/HoleMove/HoleExpand'},
          { text: '🟠 HoleOpen', link: '/reference/Move/HoleMove/HoleOpen'},
    
        ]},
        { text: '🟠 LegMove', collapsed: true, items: [
          { text: '🟠 LegMove Overview', link: '/reference/Move/LegMove/Overview'},
          { text: '🟠 Crouch', link: '/reference/Move/LegMove/Overview'},
          { text: '🟠 Jump', link: '/reference/Move/LegMove/Jump'},
          { text: '🟠 Kneel', link: '/reference/Move/LegMove/Kneel'},
          { text: '🟠 LegAbduction', link: '/reference/Move/LegMove/LegAbduction'},
          { text: '🟠 LegAbsorb', link: '/reference/Move/LegMove/LegAbsorb'},
          { text: '🟠 LegAdduction', link: '/reference/Move/LegMove/LegAdduction'},
          { text: '🟠 LegFlag', link: '/reference/Move/LegMove/LegFlag'},
          { text: '🟠 LegFlexion', link: '/reference/Move/LegMove/LegFlexion'},
          { text: '🟠 LegProp', link: '/reference/Move/LegMove/LegProp'},
          { text: '🟠 LegSidebagLift', link: '/reference/Move/LegMove/LegSidebagLift'},
          { text: '🟠 LegSwing', link: '/reference/Move/LegMove/LegSwing'},
          { text: '🟠 RunningStart', link: '/reference/Move/LegMove/RunningStart'},
          { text: '🟠 Step', link: '/reference/Move/LegMove/Step'},
          { text: '🟠 Stomp', link: '/reference/Move/LegMove/Stomp'},


        ]},
        { text: '🟠 PlantMove', collapsed: true, items: [
          { text: '🟠 PlantMove Overview', link: '/reference/Move/PlantMove/Overview'},
          { text: '🟠 BranchArmDeflection', link: '/reference/Move/PlantMove/BranchArmDeflection'},
          { text: '🟠 BranchDeflection', link: '/reference/Move/PlantMove/BranchDeflection'},
          { text: '🟠 BranchMove', link: '/reference/Move/PlantMove/BranchMove'},
          { text: '🟠 BranchWhip', link: '/reference/Move/PlantMove/BranchWhip'},
          { text: '🟠 Bush', link: '/reference/Move/PlantMove/Bush'},
          { text: '🟠 SlashPile', link: '/reference/Move/PlantMove/SlashPile'},
          { text: '🟠 Log', link: '/reference/Move/PlantMove/Log'},
          { text: '🟠 Stump', link: '/reference/Move/PlantMove/Stump'},

        ]},
        { text: '🟠 ScreefMove', collapsed: true, items: [
          { text: '🟠 Screefing Overview', link: '/reference/Move/ScreefMove/Overview'},
          { text: '🟠 BootScreef', link: '/reference/Move/ToolMove/Boot/BootScreef'},
          { text: '🟠 HandScreef', link: '/reference/Move/HandMove/HandScreef'},
          { text: '🟠 SpadeScreef', link: '/reference/Move/ToolMove/Spade/SpadeScreef'},

        ]},
        { text: '🟠 ToolMove', collapsed: true, items: [
          { text: '🟠 Tool Overview', link: '/reference/Move/ToolMove/Overview'},
          { text: '🟠 Bag', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Move/ToolMove/Bag/Overview'},
            { text: 'BagAdjustment', link: '/reference/Move/ToolMove/Bag/BagAdjustment'},
            { text: 'BagDeadlift', link: '/reference/Move/ToolMove/Bag/BagDeadlift'},
            { text: 'BagEmpty', link: '/reference/Move/ToolMove/Bag/BagEmpty'},
            { text: 'BaggingUp', link: '/reference/Move/ToolMove/Bag/BaggingUp'},
            { text: 'BagOff', link: '/reference/Move/ToolMove/Bag/BagOff'},
            { text: 'BagOn', link: '/reference/Move/ToolMove/Bag/BagOn'},
            { text: 'BagSlide', link: '/reference/Move/ToolMove/Bag/BagSlide'},
            
          ]},
          { text: '🟠 Boot ', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Move/ToolMove/Boot/Overview'},
            { text: 'BootScreef', link: '/reference/Move/ToolMove/Boot/BootScreef'},
            { text: 'LaceKnot', link: '/reference/Move/ToolMove/Boot/LaceKnot'},
          ]},
            { text: '🟠 Box', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Move/ToolMove/Box/Overview'},
          ]},  
          { text: '🟠 Bundle ', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Move/ToolMove/Bundle/Overview'},
            { text: 'BundleGrip', link: '/reference/Move/ToolMove/Bundle/BundleGrip'},
            { text: 'BundlePeel', link: '/reference/Move/ToolMove/Bundle/BundlePeel'},
          ]},
          { text: '🟠 Flag', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Move/ToolMove/Flag/Overview'},
            { text: 'FlagErrorRecovery', link: '/reference/Move/ToolMove/Flag/FlagErrorRecovery'},
            { text: 'FlagKnot', link: '/reference/Move/ToolMove/Flag/FlagKnot'},
            { text: 'FlagLoad', link: '/reference/Move/ToolMove/Flag/FlagLoad'},
            { text: 'FlagRip', link: '/reference/Move/ToolMove/Flag/FlagRip'},
            { text: 'FlagRoll', link: '/reference/Move/ToolMove/Flag/FlagRoll'},
            { text: 'FlagThrow', link: '/reference/Move/ToolMove/Flag/FlagThrow'},
            { text: 'FlagUnload', link: '/reference/Move/ToolMove/Flag/FlagUnoad'},
            { text: 'FlagWeave', link: '/reference/Move/ToolMove/Flag/FlagWeave'},
            { text: 'FlagWrap', link: '/reference/Move/ToolMove/Flag/FlagWrap'},
          ]},
          
          
          { text: '🟠 Gaiter ', collapsed: true, items: [

            {text: 'Overview' ,link: '/reference/Move/ToolMove/Gaiter/Overview'},
            {text: 'GaiterOn' ,link: '/reference/Move/ToolMove/Gaiter/GaiterOn'},
            {text: 'GaiterOff' ,link: '/reference/Move/ToolMove/Gaiter/GaiterOff'},
          ]},
          { text: '🟠 Glove', collapsed: true, items:[
            { text: 'Overview', link: '/reference/Move/ToolMove/Glove/Overview'},
          ]},
          { text: '🟠 Spade', collapsed: true, items: [
            { text: '🟠 Overview', link: '/reference/Move/ToolMove/Spade/Overview'},
            { text: '🟠 SpadeChop', link: '/reference/Move/ToolMove/Spade/SpadeChop'},
            { text: '🟠 SpadePogo', link: '/reference/Move/ToolMove/Spade/SpadePogo'},
            { text: '🟠 SpadeScreef', link: '/reference/Move/ToolMove/Spade/SpadeScreef'},
            { text: '🟠 SpadeSwing', link: '/reference/Move/ToolMove/Spade/SpadeSwing'},
            { text: '🟠 SpadeTest', link: '/reference/Move/ToolMove/Spade/SpadeTest'},
          ]}

          

        ]},
        { text: '🟠 TruckMove', collapsed: true, items: [
          { text: '🟠 Overview', link: '/reference/Move/TruckMove/Overview'},
          { text: '🟠 Sleep', link: '/reference/Move/TruckMove/Sleep'},
          { text: '🟠 Sit', link: '/reference/Move/TruckMove/Sit'},
        ]}
      ],
    },
    { text: '💜 Neuro', collapsed: true, items:[
      { text: '💜 Neuro Overview', link: '/reference/Neuro/NeuroOverview'},
      { text: '💜 Alignment', collapsed: true, items: [
        { text: '💜 Alignment Overview', link: '/reference/Neuro/Alignment/Overview'},
      ]},
      { text: '💜 Attention', collapsed: true, items: [
        { text: '💜 Attention Overview', link: '/reference/Neuro/Attention/Overview'},
      ]},
      { text: '💜 Awareness', collapsed: true, items: [
        { text: '💜 Awareness Overview', link: '/reference/Neuro/Awareness/Overview'},
      ]},
      { text: '💜 Counting', collapsed: true, items: [
        { text: '💜 Counting Overview', link: '/reference/Neuro/Counting/Overview'},
      ]},
      { text: '💜 Decision', collapsed: true, items: [
        { text: '💜  GoOrNoGo', link: '/reference/Neuro/Decision/GoOrNoGo'},
        { text: '💜  MicrositeSelection', link: '/reference/Neuro/Decision/MicrositeSelection'},
      ]},
      { text: '💜 Emotion', collapsed: true, items: [
        { text: '💜 Emotion Overview', link: '/reference/Neuro/Emotion/Overview'},
        { text: '💜 Anger', link: '/reference/Neuro/Emotion/Anger'},
        { text: '💜 Disgust', link: '/reference/Neuro/Emotion/Disgust'},
        { text: '💜 Fear', link: '/reference/Neuro/Emotion/Fear'},
        { text: '💜 Joy', link: '/reference/Neuro/Emotion/Joy'},
        { text: '💜 Sadness', link: '/reference/Neuro/Emotion/Sadness'},
      ]},
      { text: '💜 Energy', collapsed: true, items: [
        { text: '💜 Energy Overview', link: '/reference/Neuro/Energy/Overview'},
      ]},
      { text: '💜  Estimation', collapsed: true, items: [
        { text: '💜 AreaEstimation', link: '/reference/Neuro/Estimation/AreaEstimation'},
        { text: '💜 BagFillEstimation', link: '/reference/Neuro/Estimation/BagFillEstimation'},
        { text: '💜 DistanceEstimation', link: '/reference/Neuro/Estimation/DistanceEstimation'},
        { text: '💜 TimeEstimation', link: '/reference/Neuro/Estimation/TimeEstimation'},
        
      ]},
      { text: '💜 Event', collapsed: true, items: [
        { text: '💜 Event Overview', link: '/reference/Neuro/Event/Overview'},
      ]},
      { text: '💜 Listening', collapsed: true, items: [
        { text: '💜 Listening Overview', link: '/reference/Neuro/Hearing/Overview'},
        { text: '💜 SpadeSound', link: '/reference/Neuro/Hearing/Overview'},
        { text: '💜 SlashSound', link: '/reference/Neuro/Hearing/SlashSound'},
        { text: '💜 SoilSound', link: '/reference/Neuro/Hearing/SoilSound'},
      ]},
      { text: '💜  Memory', collapsed: true, items: [
        { text: '💜  Overview', link: '/reference/Neuro/Memory/Overview'},
        { text: '💜  WorkingMemory', link: '/reference/Neuro/Memory/WorkingMemory'},
        { text: '💜  ShortTermMemory', link: '/reference/Neuro/Memory/ShortTermMemory'},
        { text: '💜  LongTermMemory', link: '/reference/Neuro/Memory/LongTermMemory'},
        { text: '💜  NumberMemory', link: '/reference/Neuro/Memory/NumberMemory'},
        { text: '💜  RouteMemory', link: '/reference/Neuro/Memory/RouteMemory'},


      ]},
      { text: '💜 Music', collapsed: true, items: [
        { text: '💜 Music Overview', link: '/reference/Neuro/Music/Overview'},
        { text: '💜 Playlists', link: '/reference/Neuro/Music/Overview'},
      
      ]},
      { text: '💜 Proprioception', link: '/reference/Neuro/Proprioception'},

      { text: '💜 Time', collapsed: true, items: [
        { text: '💜 Time Overview', link: '/reference/Neuro/Time/Overview'},
        { text: '💜 BagUpTime', link: '/reference/Neuro/Time/BagUpTime'},
        { text: '💜 DailySchedule', link: '/reference/Neuro/Time/DailySchedule'},
        { text: '💜 MoveTiming', link: '/reference/Neuro/Time/MoveTiming'},
        { text: '💜 Planning', link: '/reference/Neuro/Time/Planning'},
        { text: '💜 Sequence', link: '/reference/Neuro/Time/Sequence'},
        { text: '💜 Timer', link: '/reference/Neuro/Time/Timer'},
      ]},
      
      
      { text: '💜 Thermoception', link: '/reference/Neuro/Thermoception'},

    ]},
    { text: '🔺 Route', collapsed: true, items: [
      { text: '🔺Route Overview', link: '/reference/Route/RouteOverview' },
      { text: '🔺AreaFill', collapsed: true, items: [
        { text: '🔺 AreaFill Overview', link: '/reference/Route/AreaFill/Overview'},
        { text: '🔺 BoustroFill', link: '/reference/Route/AreaFill/BoustroFill'},            
        { text: '🔺 CircleFill', link: '/reference/Route/AreaFill/CircleFill'},
        { text: '🔺 DiamondFill', link: '/reference/Route/AreaFill/DiamondFill'},
        { text: '🔺 SquareFill', link: '/reference/Route/AreaFill/SquareFill'},
        { text: '🔺 TriangleFill', link: '/reference/Route/AreaFill/TriangleFill'},
        
      ]},
      { text: '🔺 Flag', collapsed: true, items: [
        { text: '🔺 Flag Overview', link: '/reference/Route/Flag/Overview'},
        { text: '🔺 BoundaryFlag', link: '/reference/Route/Flag/BoundaryFlag'},
        { text: '🔺 FlagLocation', link: '/reference/Route/Flag/FlagLocation'},
        { text: '🔺 HighFlag', link: '/reference/Route/Flag/HighFlag'},
        { text: '🔺 LineInFlag', link: '/reference/Route/Flag/LineInFlag'},
        { text: '🔺 NaturalFlag', link: '/reference/Route/Flag/NaturalFlag'},
        { text: '🔺 TrenchExitFlag', link: '/reference/Route/Flag/TrenchExitFlag'},
        { text: '🔺 WastedFlag', link: '/reference/Route/Flag/WastedFlag'},
      ]},

      { text: '🔺 ObstacleFill', collapsed: true, items: [
        { text: '🔺 ObstacleFill Overview', link: '/reference/Route/ObstacleFill/Overview'},
      ]},
      { text: '🔺 PieceFill', collapsed: true, items: [
        { text: '🔺 PieceFill Overview', link: '/reference/Route/PieceFill/Overview'},
        { text: '🔺 AreaFill', link: '/reference/Route/PieceFill/AreaFill'},
        { text: '🔺 BackFill', link: '/reference/Route/PieceFill/BackFill'},
        { text: '🔺 OpenEndedFill', link: '/reference/Route/PieceFill/OpenEndedFill'},
        { text: '🔺 PerimeterFill', link: '/reference/Route/PieceFill/PerimeterFill'},
        { text: '🔺 TypewriterFill', link: '/reference/Route/PieceFill/TypewriterFill'},
        
      ]},
      { text: '🔺 RouteLine', collapsed: true, items: [
        { text: '🔺 RouteLine Overview', link: '/reference/Route/RouteLine/Overview'},
        { text: '🔺 AroundLine', link: '/reference/Route/RouteLine/AroundLine'},
        { text: '🔺 GhostLine', link: '/reference/Route/RouteLine/GhostLine'},
        { text: '🔺 ParallelLine', link: '/reference/Route/RouteLine/ParallelLine'},
        { text: '🔺 PerimeterLine', link: '/reference/Route/RouteLine/PerimeterLine'},
        { text: '🔺 SpiralLine', link: '/reference/Route/RouteLine/SpiralLine'},
        { text: '🔺 TurnAroundLine', link: '/reference/Route/RouteLine/TurnAroundLine'},
        { text: '🔺 ZigzagLine', link: '/reference/Route/RouteLine/ZigzagLine'},
      ]},
      { text: '🔺 Spacing', collapsed: true, items: [
        { text: '🔺 Spacing Overview', link: '/reference/Route/Spacing/Overview'},
        { text: '🔺 MaximumSpacing', link: '/reference/Route/Spacing/MaximumSpacing'},
        { text: '🔺 MinimumSpacing', link: '/reference/Route/Spacing/MinimumSpacing'},
        { text: '🔺 OptimalSpacing', link: '/reference/Route/Spacing/OptimalSpacing'},
        { text: '🔺 ElasticSpacing', link: '/reference/Route/Spacing/ElasticSpacing'},
        { text: '🔺 SpacingOnSlope', link: '/reference/Route/Spacing/SpacingOnSlope'},
  
      ]},
      { text: '🔺 TeamPlant', collapsed: true, items: [
        { text: '🔺 TeamPlant Overview', link: '/reference/Route/TeamPlant/Overview'},
        { text: '🔺 BouncingFill', link: '/reference/Route/TeamPlant/BouncingFill'},
        { text: '🔺 CrossingFill', link: '/reference/Route/TeamPlant/CrossingFill'},
        { text: '🔺 FollowingFill', link: '/reference/Route/TeamPlant/FollowingFill'},
      ]},
    ]},
    { text: '🔷 Beta System', collapsed: true, items: [
      {text: '🔷 What is Beta?', link: '/reference/Beta/Overview'},
      {text: '🔷 Beta Examples', link: '/reference/Beta/BetaExamples'},
    ]},
    { text: 'Glossary', link: '/reference/glossary/Glossary' },
    { text: 'Gallery', link: '/reference/gallery/Overview'}  
  ] 
}

function sidebarTests() {
  return [
    {text: 'Tests', collapsed: true,  items: [
      {text: 'Tests Overview', link: '/tests/Overview'},
      {text: 'Labelling', link: '/tests/Test_LabelDiagram'},
      {text: 'Matching', link: '/tests/Test_Matching'},
      {text: 'MultipleChoice', link: '/tests/Test_MultipleChoice'},
      {text: 'Sequencing', link: '/tests/Test_Sequencing'},
     
    ]}
  ]

}

function sidebarDevelopment() {
  return [
    {text: 'Development Overview', link: '/development/Overview'},
    {text: 'Donate Media', link: '/development/Donation'},
    {text: 'Downloads', link: '/development/Downloads'},
    {text: 'Feedback', link: '/development/Feedback'},
    {text: 'Research Questions', link: '/development/ResearchQuestions'},
    {text: 'Roadmap', link: '/development/Roadmap'},
    {text: 'ElementRelationshipDiagram', link: '/development/ElementRelationshipDiagram'},
    {text: 'StyleGuide', link: '/development/Style_Guide'},
    {text: 'PaperPhoto', link: '/development/PaperPhoto'},
  ]
}

