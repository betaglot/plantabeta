import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Plantbeta',
    description: 'The elements of Planting',
    themeConfig: {
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
        { text: 'Land', link: '/reference/Land/Overview' },
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
        { text: 'Neuro', link: '/reference/Neuro/Overview' },
        { text: 'Route', link: '/reference/Route/Overview' },
        
      ]
    }
  ]
}