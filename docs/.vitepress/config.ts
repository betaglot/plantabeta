import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Plantbeta',
    description: 'The elements of Planting',
    themeConfig: {
        siteTitle: 'Plantbeta',
        sidebar: [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/introduction' },
                { text: 'Getting Started', link: '/getting-started' },
              ]
            }
          ]
    
  }
})