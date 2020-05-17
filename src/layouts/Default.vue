<template>
  <v-app>
    <Navbar/>

    <v-content>
      <slot />
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

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
