// .vitepress/theme/index.js
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import BetomChip from './BetomChip.vue'
import BetomTitle from './BetomTitle.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: "#6ec08b",
          labor: "#FFCC00",
          soma: "#569cd6",
          ekos: "#6a9955",
          via: "#ff3131",
          motor: "#da680f",
          anima: "#c586c0"
        }
      },
      light: {
        colors: {
          primary: "#6ec08b",
          labor: "#FFCC00",
          soma: "#569cd6",
          ekos: "#6a9955",
          via: "#ff3131",
          motor: "#da680f",
          anima: "#c586c0"
        }
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  // This is where you register Components to be accessible globally without the need to import
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
    app.component('BB', BetomChip)
    app.component('BT', BetomTitle)
  }
} satisfies Theme

