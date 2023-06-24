import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Plantbeta',
    description: 'The elements of Planting',
    lastUpdated: true,
    base: '/plantbeta/',
    themeConfig: {
      socialLinks: [
        { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
        { icon: 'instagram', link: 'https://github.com/vuejs/vitepress' }
      ],
      footer: {
        message: 'Sponsored by Quastuco.com',
        copyright: 'Copyright © 2023-present'
      },
      search: {
        provider: 'local'
      },

      siteTitle: 'Plantbeta',
        nav: nav(),

      sidebar: {
        '/guide/': sidebarGuide(),
        '/reference/': sidebarReference()
      }
  }
})


function nav(){
  return [
    { text: 'Guide', 
      link: '/guide/introduction', 
      activeMatch: '/guide/' },
    {
      text: 'Reference',
      link: '/reference/Overview',
      activeMatch: '/reference/'
    }
  ]
}


function sidebarGuide() {
  return [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'What is Beta?', link: '/reference/Beta/Overview'},
        { text: 'Go to Reference', link: '/reference/Overview'},
      ]
    }
  ]
}

function sidebarReference() {
  return [
    {text: 'Go to Guide', link: '/guide/introduction'},
    {
      text: 'Reference',
      items: [
        { text: 'Overview', link:'/reference/Overview'},
        { text: 'Beta', link: '/reference/Beta/Overview' },
        { text: 'Land', collapsed: true, items: [
          { text: 'Overview', link: '/reference/Land/Overview'},
          { text: 'Area', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/Area/Overview'},
            { text: 'PocketArea', link: '/reference/Land/Area/PocketArea'},
            { text: 'RiparianArea', link: '/reference/Land/Area/RiparianArea'},
            { text: 'RockCapArea', link: '/reference/Land/Area/RockCapArea'},
            { text: 'SlashPileArea', link: '/reference/Land/Area/SlashPileArea'},
          ]},
          { text: 'Block', collapsed: true, items: [
            { text: 'FillBlock', link: '/reference/Land/Block/FillBlock'},
            { text: 'Overview', link: '/reference/Land/Block/Overview'},
            { text: 'Road', link: '/reference/Land/Block/Road'},
          ]},
          { text: 'Density', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/Density/Overview'},
            { text: 'Plot', link: '/reference/Land/Density/Plot'},
         
          ]},
          { text: 'LandSpeed', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/LandSpeed/Overview'},
            { text: 'FastLand', link: '/reference/Land/LandSpeed/FastLand'},
            { text: 'SlowLand', link: '/reference/Land/LandSpeed/SlowLand'},
          ]},
          { text: 'Obstacle', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/Obstacle/Overview'},
            { text: 'LogObstacle', link: '/reference/Land/Obstacle/LogObstacle'},
            { text: 'RockObstacle', link: '/reference/Land/Obstacle/RockObstacle'},
            { text: 'StumpObstacle', link: '/reference/Land/Obstacle/StumpObstacle'},
          ]},
          { text: 'Piece', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/Piece/Overview'},
            { text: 'PieceTopography', link: '/reference/Land/Piece/PieceTopography'},
          ]},
          { text: 'Prep', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/Prep/Overview'},
            { text: 'MoundLand', link: '/reference/Land/Prep/MoundLand'},
            { text: 'TrenchLand', link: '/reference/Land/Prep/TrenchLand'},
          ]},
          { text: 'Raw', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/Raw/Overview'},
            { text: 'BurnPit', link: '/reference/Land/Raw/BurnPit'},
          ]},
          { text: 'Slash', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/Slash/Overview'},
            { text: 'BurnPileSlash', link: '/reference/Land/Slash/BurnPileSlash'},
            { text: 'HighSlash', link: '/reference/Land/Slash/HighSlash'},
            { text: 'LowSlash', link: '/reference/Land/Slash/LowSlash'},
            { text: 'WetSlash', link: '/reference/Land/Slash/WetSlash'},
          ]},
          { text: 'Soil', collapsed: true, items: [
            { text: 'ClaySoil', link: '/reference/Land/Soil/ClaySoil'},
            { text: 'DrySoil', link: '/reference/Land/Soil/DrySoil'},
            { text: 'GravelSoil', link: '/reference/Land/Soil/GravelSoil'},
            { text: 'MineralSoil', link: '/reference/Land/Soil/MineralSoil'},
            { text: 'Overview', link: '/reference/Land/Soil/Overview'},
            { text: 'RedRot', link: '/reference/Land/Soil/RedRot'},
            { text: 'SandSoil', link: '/reference/Land/Soil/SandSoil'},
            { text: 'WetSoil', link: '/reference/Land/Soil/WetSoil'},
     
          ]},
          { text: 'Weather', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Land/Weather/Overview'},
          ]},
        ]
        },
        { text: 'Movement', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Movement/Overview'},
            { text: 'Arm Movement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/ArmMovement/Overview'},
              { text: 'ArmBlock', link: '/reference/Movement/ArmMovement/ArmBlock'},
              { text: 'ArmProp', link: '/reference/Movement/ArmMovement/ArmProp'},
              { text: 'ArmSwing', link: '/reference/Movement/ArmMovement/ArmSwing'},
              { text: 'ArmWalk', link: '/reference/Movement/ArmMovement/ArmWalk'},
              { text: 'ArmFlag', link: '/reference/Movement/ArmMovement/ArmFlag'},
              ]
            },
            { text: 'BodyMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/BodyMovement/Overview'},
              { text: 'BodyAbsorb', link: '/reference/Movement/BodyMovement/BodyAbsorb'},
              { text: 'BodyBend', link: '/reference/Movement/BodyMovement/BodyBend'},
              { text: 'BodyLean', link: '/reference/Movement/BodyMovement/BodyLean'},
              { text: 'BodyRevolve', link: '/reference/Movement/BodyMovement/BodyRevolve'},
              { text: 'BodyRotate', link: '/reference/Movement/BodyMovement/BodyRotate'},
              { text: 'BodySlot', link: '/reference/Movement/BodyMovement/BodySlot'},
              { text: 'Fall', link: '/reference/Movement/BodyMovement/Fall'},
            ]},
            { text: 'CacheMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/CacheMovement/Overview'},
              { text: 'GarbageBox', link: '/reference/Movement/CacheMovement/GarbageBox'},
              { text: 'TarpOff', link: '/reference/Movement/CacheMovement/TarpOff'},
              { text: 'TarpOn', link: '/reference/Movement/CacheMovement/TarpOn'},
            ]},
            { text: 'ClothingMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/ClothingMovement/Overview'},
              { text: 'Button', link: '/reference/Movement/ClothingMovement/Button'},
              { text: 'ClothingLayer', link: '/reference/Movement/ClothingMovement/ClothingLayer'},
              { text: 'RemoveMud', link: '/reference/Movement/ClothingMovement/RemoveMud'},
              { text: 'ZipperMovement', link: '/reference/Movement/ClothingMovement/ZipperMovement'},
      
            ]},
            { text: 'FootMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/FootMovement/Overview'},
              { text: 'FootArchSmear', link: '/reference/Movement/FootMovement/FootArchSmear'},
              { text: 'FootClose', link: '/reference/Movement/FootMovement/FootClose'},
              { text: 'FootDig', link: '/reference/Movement/FootMovement/FootDig'},
              { text: 'FootDorsiflexion', link: '/reference/Movement/FootMovement/FootDorsiflexion'},
              { text: 'FootDrag', link: '/reference/Movement/FootMovement/FootDrag'},
              { text: 'FootEversion', link: '/reference/Movement/FootMovement/FootEversion'},
              { text: 'FootInversion', link: '/reference/Movement/FootMovement/FootInversion'},
              { text: 'FootScreef', link: '/reference/Movement/FootMovement/FootScreef'},
              { text: 'PlantarFlexion', link: '/reference/Movement/FootMovement/PlantarFlexion'},
            ]},
  
            { text: 'HandMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/HandMovement/Overview'},
              { text: 'BagGrip', link: '/reference/Movement/HandMovement/BagGrip'},
              { text: 'BoxGrip', link: '/reference/Movement/HandMovement/BoxGrip'},
              { text: 'BranchGrip', link: '/reference/Movement/HandMovement/BranchGrip'},
              { text: 'BranchSnapGrip', link: '/reference/Movement/HandMovement/BranchSnapGrip'},
              { text: 'HandClose', link: '/reference/Movement/HandMovement/HandClose'},
              { text: 'HandPoke', link: '/reference/Movement/HandMovement/HandPoke'},
              { text: 'HandScreef', link: '/reference/Movement/HandMovement/HandScreef'},
              { text: 'InsertTree', link: '/reference/Movement/HandMovement/InsertTree'},
              { text: 'ShovelHandleGrip', link: '/reference/Movement/HandMovement/ShovelHandleGrip'},
              { text: 'ShovelShaftGrip', link: '/reference/Movement/HandMovement/ShovelShaftGrip'},
              { text: 'TreeGrip', link: '/reference/Movement/HandMovement/Overview'},
              { text: 'TreeTestGrip', link: '/reference/Movement/HandMovement/TreeTestGrip'},
            ]},
        
            { text: 'HeadMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/HeadMovement/Overview'},
              { text: 'FocusLook', link: '/reference/Movement/HeadMovement/FocusLook'},
              { text: 'HeadProtraction', link: '/reference/Movement/HeadMovement/HeadProtraction'},
              { text: 'HeadRetraction', link: '/reference/Movement/HeadMovement/HeadRetraction'},
              { text: 'HeadTiltIntoWind', link: '/reference/Movement/HeadMovement/HeadTiltIntoWind'},
              { text: 'ListenTo', link: '/reference/Movement/HeadMovement/ListenTo'},
              { text: 'LookAway', link: '/reference/Movement/HeadMovement/LookAway'},
              { text: 'NeckExtension', link: '/reference/Movement/HeadMovement/NeckExtension'},
            ]},
            { text: 'HoleMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/HoleMovement/Overview'},
              { text: 'HoleClose', link: '/reference/Movement/HoleMovement/HoleClose'},
              { text: 'HoleExpand', link: '/reference/Movement/HoleMovement/HoleExpand'},
              { text: 'HoleOpen', link: '/reference/Movement/HoleMovement/HoleOpen'},
        
            ]},
            { text: 'LegMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/LegMovement/Overview'},
              { text: 'Crouch', link: '/reference/Movement/LegMovement/Overview'},
              { text: 'Jump', link: '/reference/Movement/LegMovement/Jump'},
              { text: 'Kneel', link: '/reference/Movement/LegMovement/Kneel'},
              { text: 'LegAbduction', link: '/reference/Movement/LegMovement/LegAbduction'},
              { text: 'LegAbsorb', link: '/reference/Movement/LegMovement/LegAbsorb'},
              { text: 'LegAdduction', link: '/reference/Movement/LegMovement/LegAdduction'},
              { text: 'LegFlag', link: '/reference/Movement/LegMovement/LegFlag'},
              { text: 'LegFlexion', link: '/reference/Movement/LegMovement/LegFlexion'},
              { text: 'LegProp', link: '/reference/Movement/LegMovement/LegProp'},
              { text: 'LegSidebagLift', link: '/reference/Movement/LegMovement/LegSidebagLift'},
              { text: 'LegSwing', link: '/reference/Movement/LegMovement/LegSwing'},
              { text: 'RunningStart', link: '/reference/Movement/LegMovement/RunningStart'},
              { text: 'Step', link: '/reference/Movement/LegMovement/Step'},
              { text: 'Stomp', link: '/reference/Movement/LegMovement/Stomp'},


            ]},
            { text: 'PlantMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/PlantMovement/Overview'},
              { text: 'BranchArmDeflection', link: '/reference/Movement/PlantMovement/BranchArmDeflection'},
              { text: 'BranchDeflection', link: '/reference/Movement/PlantMovement/BranchDeflection'},
              { text: 'BranchMovement', link: '/reference/Movement/PlantMovement/BranchMovement'},
              { text: 'BranchWhip', link: '/reference/Movement/PlantMovement/BranchWhip'},
              { text: 'Bush', link: '/reference/Movement/PlantMovement/Bush'},
              { text: 'SlashPile', link: '/reference/Movement/PlantMovement/SlashPile'},
              { text: 'Log', link: '/reference/Movement/PlantMovement/Log'},
              { text: 'Stump', link: '/reference/Movement/PlantMovement/Stump'},

            ]},
            { text: 'ScreefMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/ScreefMovement/Overview'},
              { text: 'BootScreef', link: '/reference/Movement/ToolMovement/Boot/BootScreef'},
              { text: 'HandScreef', link: '/reference/Movement/HandMovement/HandScreef'},
              { text: 'ShovelScreef', link: '/reference/Movement/ToolMovement/Shovel/ShovelScreef'},

            ]},
            { text: 'ToolMovement', collapsed: true, items: [
              { text: 'Bag', collapsed: true , items: [
                { text: 'Overview', link: '/reference/Movement/ToolMovement/Bag/Overview.md'},
              ]},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Overview'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Bag'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Boot'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Box'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Bundle'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Flag'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Gaiter'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Glove'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Glove'},
              { text: 'Overview', link: '/reference/Movement/ToolMovement/Shovel'},
              

            ]},
            { text: 'TruckMovement', collapsed: true, items: [
              { text: 'Overview', link: '/reference/Movement/TruckMovement/Overview'},
              { text: 'Sleep', link: '/reference/Movement/TruckMovement/Sleep'},
              { text: 'Sit', link: '/reference/Movement/TruckMovement/Sit'},
            ]}
          ],
        },
        { text: 'Neuro', collapsed: true, items:[
          { text: 'Overview', link: '/reference/Neuro/Overview'},
          { text: 'Alignment', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Alignment/Overview'},
          ]},
          { text: 'Attention', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Attention/Overview'},
          ]},
          { text: 'Awareness', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Awareness/Overview'},
          ]},
          { text: 'Counting', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Counting/Overview'},
          ]},
          { text: 'Decision', collapsed: true, items: [
            { text: 'GoOrNoGo', link: '/reference/Neuro/Decision/GoOrNoGo'},
          ]},
          { text: 'Emotion', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Emotion/Overview'},
            { text: 'Anger', link: '/reference/Neuro/Emotion/Anger'},
            { text: 'Disgust', link: '/reference/Neuro/Emotion/Disgust'},
            { text: 'Fear', link: '/reference/Neuro/Emotion/Fear'},
            { text: 'Joy', link: '/reference/Neuro/Emotion/Joy'},
            { text: 'Sadness', link: '/reference/Neuro/Emotion/Sadness'},
          ]},
          { text: 'Energy', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Energy/Overview'},
          ]},
          { text: 'Event', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Event/Overview'},
          ]},
          { text: 'ListenTo', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/ListenTo/Overview'},
            { text: 'ShovelSound', link: '/reference/Neuro/ListenTo/Overview'},
            { text: 'SlashSound', link: '/reference/Neuro/ListenTo/SlashSound'},
            { text: 'SoilSound', link: '/reference/Neuro/ListenTo/SoilSound'},
          ]},
          { text: 'Music', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Music/Overview'},
            { text: 'Playlists', link: '/reference/Neuro/Music/Overview'},
         
          ]},
          { text: 'Time', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Neuro/Time/Overview'},
            { text: 'BagUpTime', link: '/reference/Neuro/Time/BagUpTime'},
            { text: 'DailySchedule', link: '/reference/Neuro/Time/DailySchedule'},
            { text: 'MovementTiming', link: '/reference/Neuro/Time/MovementTiming'},
            { text: 'Planning', link: '/reference/Neuro/Time/Planning'},
            { text: 'Sequence', link: '/reference/Neuro/Time/Sequence'},
            { text: 'Timer', link: '/reference/Neuro/Time/Timer'},
          ]},
         
          { text: 'DistanceEstimation', link: '/reference/Neuro/DistanceEstimation'},
          { text: 'Fatigue', link: '/reference/Neuro/Fatigue'},
  
          { text: 'Proprioception', link: '/reference/Neuro/Proprioception'},
          { text: 'Thermoception', link: '/reference/Neuro/Thermoception'},
  
        ]},
        { text: 'Route', collapsed: true, items: [
          { text: 'Overview', link: '/reference/Route/Overview' },
          { text: 'AreaFill', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Route/AreaFill/Overview'},
            { text: 'CircleFill', link: '/reference/Route/AreaFill/CircleFill'},
            { text: 'DiamondFill', link: '/reference/Route/AreaFill/DiamondFill'},
            { text: 'SquareFill', link: '/reference/Route/AreaFill/SquareFill'},
            { text: 'TriangleFill', link: '/reference/Route/AreaFill/TriangleFill'},
            
          ]},
          { text: 'Flag', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Route/Flag/Overview'},
            { text: 'BoundaryFlag', link: '/reference/Route/Flag/BoundaryFlag'},
            { text: 'FlagLocation', link: '/reference/Route/Flag/FlagLocation'},
            { text: 'HighFlag', link: '/reference/Route/Flag/HighFlag'},
            { text: 'LineInFlag', link: '/reference/Route/Flag/LineInFlag'},
            { text: 'NaturalFlag', link: '/reference/Route/Flag/NaturalFlag'},
            { text: 'TrenchExitFlag', link: '/reference/Route/Flag/TrenchExitFlag'},
            { text: 'WastedFlag', link: '/reference/Route/Flag/WastedFlag'},
          ]},
          { text: 'ObstacleFill', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Route/ObstacleFill/Overview'},
          ]},
          { text: 'PieceFill', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Route/PieceFill/Overview'},
            { text: 'AreaFill', link: '/reference/Route/PieceFill/AreaFill'},
            { text: 'BackFill', link: '/reference/Route/PieceFill/BackFill'},
            { text: 'OpenEndedFill', link: '/reference/Route/PieceFill/OpenEndedFill'},
            { text: 'PerimeterFill', link: '/reference/Route/PieceFill/PerimeterFill'},
            { text: 'TypewriterFill', link: '/reference/Route/PieceFill/TypewriterFill'},
           
          ]},
          { text: 'RouteLine', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Route/RouteLine/Overview'},
            { text: 'AroundLine', link: '/reference/Route/RouteLine/AroundLine'},
            { text: 'GhostLine', link: '/reference/Route/RouteLine/GhostLine'},
            { text: 'ParallelLine', link: '/reference/Route/RouteLine/ParallelLine'},
            { text: 'PerimeterLine', link: '/reference/Route/RouteLine/PerimeterLine'},
            { text: 'SpiralLine', link: '/reference/Route/RouteLine/SpiralLine'},
            { text: 'TurnAroundLine', link: '/reference/Route/RouteLine/TurnAroundLine'},
            { text: 'ZigzagLine', link: '/reference/Route/RouteLine/ZigzagLine'},

          ]},
          { text: 'Spacing', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Route/Spacing/Overview'},
            { text: 'MaximumSpacing', link: '/reference/Route/Spacing/MaximumSpacing'},
            { text: 'MinimumSpacing', link: '/reference/Route/Spacing/MinimumSpacing'},
            { text: 'OptimalSpacing', link: '/reference/Route/Spacing/OptimalSpacing'},
            { text: 'ReactiveSpacing', link: '/reference/Route/Spacing/ReactiveSpacing'},
            { text: 'SpacingOnSlope', link: '/reference/Route/Spacing/SpacingOnSlope'},
      
          ]},
          { text: 'TeamFill', collapsed: true, items: [
            { text: 'Overview', link: '/reference/Route/TeamFill/Overview'},
            { text: 'BouncingFill', link: '/reference/Route/TeamFill/BouncingFill'},
            { text: 'CrossingFill', link: '/reference/Route/TeamFill/CrossingFill'},
            { text: 'FollowingFill', link: '/reference/Route/TeamFill/FollowingFill'},
          ]},
        ]},
        { text: '_', link: 'reference/Overview' } 
      ]
    }   
  ] 
}