// .vitepress/theme/index.js
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import BetumChip from './BetumChip.vue'
import BetumTitle from './BetumTitle.vue'
import PageImage from './PageImage.vue'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
              colors: {
                primary: "#6ec08b",
              }
            },
            light: {
                colors: {
                  primary: "#6ec08b",
                }
              },
          },
    },
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
})

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {})
    },
    enhanceApp({ app, router, siteData }) {
        app.use(vuetify)
        app.component('BB', BetumChip)
        app.component('BT', BetumTitle)
        app.component('PageImage', PageImage)
    }
} satisfies Theme
