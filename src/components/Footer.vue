<template>
  <v-footer padless absolute app>
    <v-col class="text-center" cols="12">
      <p>
        <v-btn icon large target="_blank" v-for="link in mediaLinks" :key="link.icon" :href="link.to">
          <font-awesome :icon="[link.type, link.icon]" size="2x"/>
        </v-btn>
      </p>
      <p>© {{ new Date().getFullYear() }} <strong>{{ $static.metadata.siteName }}</strong></p>
      <p class="illustration">
        Illustration by <a href="https://stories.freepik.com/" target="_blank">Stories by Freepik</a>
      </p>
    </v-col>
  </v-footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      mediaLinks: [
        { type: 'fab', icon: 'github', to: 'https://github.com/vinooniv' },
        { type: 'fab', icon: 'medium', to: 'https://medium.com/@vinom' },
        { type: 'fab', icon: 'linkedin', to: 'https://in.linkedin.com/in/vinom' },
        { type: 'fa', icon: 'envelope-square', to: 'mailto:contact@vinomahendran.com' }
      ]
    }
  }
}
</script>

<style scoped>
  p {
    line-height: 45%;
  }
  .illustration {
    font-size: 0.63rem;
  }
  .illustration a {
    text-decoration: none;
    color: darkgray;
  }
</style>
