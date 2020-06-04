<template>
  <v-app>
    <Navbar />

    <v-content>
      <slot />
    </v-content>

    <br>

    <Footer />
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
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
export default {
  components: {
    Footer,
    Navbar
  }
}
</script>
