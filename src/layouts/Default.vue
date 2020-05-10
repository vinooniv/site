<template>
  <v-app>
    <div>
      <v-app-bar>

        <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
        <v-spacer />

        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </v-app-bar>
    </div>
    <v-container>
      <slot />
    </v-container>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
