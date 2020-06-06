// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'vuetify/dist/vuetify.min.css'
import "@fortawesome/fontawesome-svg-core/styles.css"

import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons"

import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import Vuetify from 'vuetify'
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false
library.add(faEnvelopeSquare, faGithub, faMedium, faLinkedin)

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
  })
  Vue.component("font-awesome", FontAwesomeIcon)
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify()

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
