<template>
  <v-app>

    <v-app-bar app elevate-on-scroll color="white">
      <v-toolbar-title>
        <img :src="require('../assets/vino.png')" height="30">
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <v-btn text>
          <g-link class="nav__link" to="/">Home</g-link>
        </v-btn>

        <v-btn text>
          <g-link class="nav__link" to="/about/">About</g-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>

    <v-footer padless app>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>{{ $static.metadata.siteName }}</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
  .nav__link {
    text-decoration: none;
    color: black;
  }
</style>
