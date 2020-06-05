<template>
  <nav>
    <v-app-bar app elevate-on-scroll color="white">
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer">
        <v-icon class="material-icons-two-tone">menu</v-icon>
      </v-app-bar-nav-icon>

      <router-link to='/'>
        <img class="d-md-none" :src="require('../assets/img/vino-sm.png')" height="35">
      </router-link>

      <v-toolbar-title>
        <router-link to='/' tag="img" class="logo-img hidden-sm-and-down" :src="require('../assets/img/vino.png')" height="21"></router-link>
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="nav__item" text v-for="link in links" :key="link.text" :to="link.to">
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list-item>
        <img :src="require('../assets/img/vino.png')" height="21">
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item link text v-for="link in links" :key="link.text" :to="link.to">
          <v-list-item-action>
            <v-icon class="material-icons">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'HOME', to: '/' },
        { icon: 'description', text: 'BLOGS', to: '/blogs/' },
        { icon: 'code', text: 'PROJECTS', to: '/projects/' },
        { icon: 'contact_mail', text: 'CONTACT', to: '/contact/' }
      ]
    }
  }
}
</script>

<style scoped>
  .nav__item.v-btn--active::before {
    opacity: 0;
  }
  .nav__item.v-btn--active {
    font-weight: bold;
  }
  .logo-img:hover {
    cursor: pointer;
  }
</style>
