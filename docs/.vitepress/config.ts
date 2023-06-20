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
        { text: 'What is Beta?', link: '/reference/Beta/Overview'}
      ]
    }
  ]
}

function sidebarReference() {
  return [
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
            ]}
          ],
        },
        { text: 'Neuro', link: '/reference/Neuro/Overview' },
        { text: 'Route', link: '/reference/Route/Overview' },
        
      ]
    }
  ]
}