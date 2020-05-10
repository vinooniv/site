// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, appOptions, head, isClient }) {
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify({
    iconfont: 'md',
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
